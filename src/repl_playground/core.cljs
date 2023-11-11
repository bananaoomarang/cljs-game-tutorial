(ns repl-playground.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.pprint :refer [pprint]]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [reagent.core :as r]
            [reagent.dom :as r-dom]
            [repl-playground.repl :as repl]
            [code-mirror]))

(def compiling (r/atom false))
(def code (r/atom "(+ 1 1)"))
(def code-result (r/atom ""))

(defn handle-eval [result]
  (println result)
  (reset! compiling false)
  (let [printed-result (with-out-str (pprint (:value result)))]
    (reset! code-result printed-result)))

(def compile (repl/make-compile handle-eval))

(defn update-result [^js/CodeMirror mirror]
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
            (reset! mirror (code-mirror @root-ref
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

(r-dom/render [app] (. js/document getElementById "app"))
