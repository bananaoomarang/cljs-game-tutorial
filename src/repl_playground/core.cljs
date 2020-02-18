(ns repl-playground.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.pprint :refer [pprint]]
            [cljs.js]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [reagent.core :as r]
            [goog.functions :refer [debounce]]))

(def compiling (r/atom false))
(def code (r/atom "(+ 1 1)"))
(def code-result (r/atom ""))

(defn load-fn [opts cb]
  (go
    (let [path (str "/cljs_lib/" (:path opts) (if (:macros opts) ".clj" ".cljs"))
          response (<! (http/get path))
          src (:body response)]
      (cb {:lang :clj :source src}))))

(set! cljs.js/*eval-fn* cljs.js/js-eval)

(def comp-state (cljs.js/empty-state))

(defn handle-eval [result]
  (reset! compiling false)
  (let [printed-result (with-out-str (pprint (:value result)))]
    (reset! code-result printed-result)))

(defn compile [str]
  (cljs.js/eval-str comp-state str "random-name" {:load load-fn} handle-eval))

(def debounced-compile (debounce compile 200))

(defn update-result [mirror]
  (reset! compiling true)
  (let [value (. mirror getValue)]
    (reset! code value)
    (compile @code)))

(defn editor [snippet-path ]
  (let [root-ref (atom nil)
        mirror (atom nil)]
    (r/create-class
     {:display-name "editor"

      :component-did-mount
      (fn []
        (go
          (let [response (<! (http/get snippet-path))]
            (reset! mirror (js/CodeMirror @root-ref
                                          (clj->js {:value (:body response)
                                                    :theme "dracula"
                                                    :mode "clojure"}))))))

      :render
      (fn []
        [:div
         [:div {:ref #(reset! root-ref %)}]
         [:button {:class "btn" :on-click #(update-result @mirror)} "Run"]])})))

(defn result []
  [:div
   (if @compiling
     [:div {:class "compiling-msg"} "Compiling…"]
     [:div {:class "compile-result"} (str @code-result)])])

(defn row [snippet app-class]
  [:div {:class "row-wrapper"}
   [editor (str "/snippets/" snippet ".cljs")]
   [:div {:id app-class :class "canvas"}]])

(defn app []
  [:div
   [row "1" "pixi-app-1"]
   [row "2" "pixi-app-2"]
   [row "game" "pixi-app"]
   [result]])

(r/render [app] (. js/document getElementById "app"))
