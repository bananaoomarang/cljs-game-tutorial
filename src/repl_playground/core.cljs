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
(def current-snippet (r/atom 2))

(def snippets
  [{:path "1" :ns "pixi-tutorial-1.game"}
   {:path "2" :ns "pixi-tutorial-2.game"}
   {:path "game" :ns "pixi-tutorial-final.game"}])

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

(defn clear-pixi! []
  (set! (.-innerHTML (. js/document getElementById "pixi-app")) ""))

(defn create-editor [node val]
  (code-mirror node
               (clj->js {:value val
                         :theme "dracula"
                         :mode "clojure"})))

(defn update-editor-value [mirror val]
  (-> mirror
      (.getDoc)
      (.setValue val))
  (clear-pixi!))

(defn editor [snippet-path snippet-ns]
  (let [root-ref (atom nil)
        mirror (atom nil)]
    (r/create-class
     {:display-name "editor"

      :component-did-mount
      (fn []
        (go
          (let [response (<! (http/get snippet-path))]
            (reset! mirror (create-editor @root-ref (:body response))))))
      
      :component-did-update
      (fn [this]
        (let [new-argv (rest (r/argv this))
              snippet-path (first new-argv)
              snippet-ns (second new-argv)]
          (go
            (update-editor-value @mirror "Loading snippet...")
            (update-editor-value @mirror (:body (<! (http/get snippet-path)))))))

      :render
      (fn []
        [:div
         [:div {:ref #(reset! root-ref %)}]
         [:button {:class "btn" :on-click #(update-result @mirror)} "Eval 😈"]])})))

(defn result []
  [:div
   (if @compiling
     [:div {:class "compiling-msg"} "Compiling…"]
     [:div {:class "compile-result"} (str @code-result)])])

(defn row [snippet]
  [:div {:class "row-wrapper"}
   [editor (str "/snippets/" (:path snippet) ".cljs") (:ns snippet)]
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
   [row (nth snippets @current-snippet)]
   [arrows]
   [result]
   @current-snippet])

(r-dom/render [app] (. js/document getElementById "app"))
