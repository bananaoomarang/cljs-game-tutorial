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

(defonce !eval-ready? (r/atom false))
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
    
    ;; ns option doesn't seem to work so :/
    (compile (str "(ns pixi-tutorial-final.game)" @code))))

(defn clear-pixi! []
  (set! (.-innerHTML (gdom/getElement "pixi-app")) ""))

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
         [:button {:class "btn" :on-click #(update-result @mirror)} "Eval 😈"]])})))

(defn result []
  [:div
   (if @compiling
     [:div {:class "compiling-msg"} "Compiling…"]
     [:div {:class "compile-result"} (str "Last eval result: " @code-result)])])

(defn main-editor [snippet]
  [:div.row-wrapper
   [:div.main-editor
    [editor (:path snippet)]]
   [:div {:id "pixi-app" :class "canvas"}]])

(defn mini-editor [snippet title]
  [:div.mini-editor
   [:h3 (if title title snippet)]
   [editor snippet]])

(defn app []
  [:div
   [main-editor (nth snippets @current-snippet)]
   [:div.mini-editors
    [mini-editor "clear-bullets" "Clear bullets"]]
   [result]
   [:h1 (str "Eval ready: " @!eval-ready?)]])

(defonce root (createRoot (gdom/getElement "root")))

(defn init []
  (repl/init !eval-ready?)
  (.render root (r/as-element [app])))

(defn ^:dev/after-load re-render
  []
  (init))
