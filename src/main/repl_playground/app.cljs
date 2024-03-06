(ns repl-playground.app
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.pprint :refer [pprint]]
   [goog.dom :as gdom]
   [cljs.core.async :refer [<!]]
   [cljs-http.client :as http]
   [reagent.core :as r]
   [repl-playground.repl :as repl]
   ["codemirror/mode/clojure/clojure"] 
   ["react-dom/client" :refer [createRoot]]
   ["codemirror" :as code-mirror]))

(defonce eval-ready? (r/atom false))
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
    
    ;; ns option doesn't seem to work so :/
    (compile
     (str
      "(ns pixi-tutorial-final.game (:require [pixi-engine.wrapper :as game]))"
      @code))))

(defn clear-pixi! []
  (set! (.-innerHTML (gdom/getElement "pixi-app")) ""))

(defn create-editor [node val]
  (code-mirror node
               (clj->js {:value val
                         :theme "dracula"
                         :lineNumbers true
                         :mode "clojure"})))

(defn update-editor-value [mirror val]
  (-> mirror
      (.getDoc)
      (.setValue val))
  (clear-pixi!))

(defn editor [snippet-name]
  (let [root-ref (atom nil)
        mirror (atom nil)
        snippet-path (str repl/PATH-PREFIX "/snippets/" snippet-name ".cljs")]
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
         [:div.editor {:ref #(reset! root-ref %)}]
         [:button {:class "btn" :on-click #(update-result @mirror) :disabled (not eval-ready?)} "Eval 😈"]])})))

(defn status-lad []
  [:div.status {:class (if @compiling ["status" "show"] "status")}
   [:span "Compiling..."]])

(defn main-editor [snippet]
  [:div.row-wrapper
   [:div.main-editor
    [:h1 "Game source code"]
    [editor (:path snippet)]]
   [:div
    [:h1 "Game"]
    [:div.canvas {:id "pixi-app"}]]])

(defn mini-editor [snippet title]
  [:div.mini-editor
   [:h3 (if title title snippet)]
   [editor snippet]])

(defn app []
  [:div
   [status-lad]
   [:div
    [:div.section
     [:div.content
      [main-editor {:path "game"}]]]
    [:div.section
     [:div.content
      [:h1 "Examples"]
      [:div.examples
       [mini-editor "stop-bird" "Stop Bird"]
       [mini-editor "change-bg" "Change Background Color"]
       [mini-editor "clear-bullets" "Clear Bullets"]]]]]])

(defonce root (createRoot (gdom/getElement "root")))

(defn init []
  (repl/init eval-ready?)
  (.render root (r/as-element [app])))

(defn ^:dev/after-load re-render
  []
  (init))
