(ns repl-playground.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.js]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [reagent.core :as r]
            [goog.functions :refer [debounce]]
            [pixi-engine.core]))

(def compiling (r/atom false))
(def code (r/atom "(+ 1 1)"))
(def code-result (r/atom ""))

(defn load-fn [opts cb]
  (go
    (let [response (<! (http/get "/code/pixi_engine/core.cljs"))]
      (cb {:lang :clj :source (:body response)}))))

(set! cljs.js/*eval-fn* cljs.js/js-eval)
(set! cljs.js/*load-fn* load-fn)

(def comp-state (cljs.js/empty-state))

(defn handle-eval [result]
  (reset! compiling false)
  (println result)
  (reset! code-result (:value result)))

(defn compile [str]
  (cljs.js/eval-str comp-state str handle-eval))

(def debounced-compile (debounce compile 200))

(defn update-result [mirror]
  (reset! compiling true)
  (let [value (. mirror getValue)]
    (reset! code value)
    (compile @code)))

(defn editor []
  (let [root-ref (atom nil)
        mirror (atom nil)]
    (r/create-class
     {:display-name "editor"

      :component-did-mount
      (fn []
        (reset! mirror (js/CodeMirror @root-ref (clj->js {:value "(+ 1 1)" "mode" "clojure"})))
        ;;(. @mirror on "change" handle-change)
        )

      :render
      (fn []
        [:div
         [:div {:ref #(reset! root-ref %)}]
         [:button {:on-click #(update-result @mirror)} "Run"]])})))

(defn result []
  [:div
   (if @compiling
     [:div {:class "compiling-msg"} "Compiling…"]
     [:div {:class "result"} @code-result])])

(defn app []
  [:div
   [editor]
   [result]])

(r/render [app] (. js/document getElementById "app"))
