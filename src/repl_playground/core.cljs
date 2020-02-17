(ns repl-playground.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.js]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [reagent.core :as r]
            [goog.functions :refer [debounce]]))

(def compiling (r/atom false))
(def code (r/atom "(+ 1 1)"))
(def code-result (r/atom ""))

(defn load-fn [opts cb]
  (go
    (let [path (str "/cljs-lib/" (:path opts) (if (:macros opts) ".clj" ".cljs"))
          response (<! (http/get path))
          src (:body response)]
      (cb {:lang :clj :source src}))))

(set! cljs.js/*eval-fn* cljs.js/js-eval)

(def comp-state (cljs.js/empty-state))

(defn handle-eval [result]
  (reset! compiling false)
  (reset! code-result (:value result)))

(defn compile [str]
  (cljs.js/eval-str comp-state str "random-name" {:load load-fn} handle-eval))

(def debounced-compile (debounce compile 200))

(defn update-result [mirror]
  (reset! compiling true)
  (let [value (. mirror getValue)]
    (reset! code value)
    (compile @code)))

(defn editor [snippet-path]
  (let [root-ref (atom nil)
        mirror (atom nil)]
    (r/create-class
     {:display-name "editor"

      :component-did-mount
      (fn []
        (go
          (let [response (<! (http/get snippet-path))]
            (reset! mirror (js/CodeMirror @root-ref (clj->js {:value (:body response) "mode" "clojure"}))))))

      :render
      (fn []
        [:div
         [:div {:ref #(reset! root-ref %)}]
         [:button {:on-click #(update-result @mirror)} "Run"]])})))

(defn result []
  [:div
   (if @compiling
     [:div {:class "compiling-msg"} "Compiling…"]
     [:div {:class "result"} (str @code-result)])])

(defn app []
  [:div
   [editor "/snippets/game.cljs"]
   [result]])

(r/render [app] (. js/document getElementById "app"))
