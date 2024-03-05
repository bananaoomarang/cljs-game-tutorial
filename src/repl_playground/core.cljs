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
(def current-snippet (r/atom 0))

(def snippets
  [{:path "1"}
   {:path "2"}
   {:path "game"}])

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

(defn editor [snippet-path]
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
      :component-did-update
      (fn [this]
        (let [new-argv (rest (r/argv this))
              snippet-path (first new-argv)]
          (println snippet-path)))

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

(defn row [snippet]
  [:div {:class "row-wrapper"}
   [editor (str "/snippets/" snippet ".cljs")]
   [:div {:id "pixi-app" :class "canvas"}]])

(defn bounded-dec [n]
  (if (> n 0) (dec n) n))

(defn bounded-inc [n]
  (let [snippet-count (count snippets)]
    (if (< n (dec snippet-count)) (inc n) n)))

(defn arrows []
  [:div
   [:button.btn {:on-click #(swap! current-snippet bounded-dec)} "<"]
   [:button.btn {:on-click #(swap! current-snippet bounded-inc)} ">"]])

(defn app []
  [:div
   [row (:path (nth snippets @current-snippet))]
   [arrows]
   [result]
   @current-snippet])

(r-dom/render [app] (. js/document getElementById "app"))
