(ns pixi-engine.wrapper
  (:require
   [pixi-engine.core :as pixi]))

(defn vec2 [x y]
  {:x x :y y})

(defn vec-x [v]
  (:x v))

(defn vec-y [v]
  (:y v))

(defn set-vec2
  ([v xy]
   (set-vec2 v xy xy))

  ([v x y]
   (assoc v :x x :y y)))

(defn vec2*
  [v n]
  (assoc v :x (* n (:x v)) :y (* n (:y v))))

(defn vec2-add
  [v1 v2]
  (assoc v1 :x (+ (:x v1) (:x v2)) :y (+ (:y v1) (:y v2))))

(defn get-app-element [selector]
  (. js/document querySelector selector))

(defn create-on-keydown [on-keydown]
  (fn [e]
    ;; (. e preventDefault)

    (on-keydown e)))

(defn create-on-keyup [on-keyup]
  (fn [e]
    ;; (. e preventDefault)

    (on-keyup e)))

(defn key-subscribe! [on-keydown on-keyup]
  (when on-keydown
    (. js/window addEventListener "keydown" (create-on-keydown on-keydown) false))

  (when on-keyup
    (. js/window addEventListener "keyup" (create-on-keyup on-keyup) false)))

(defn load-sprites! [app sprites]
  (doseq [[key val] sprites]
    (. pixi/Assets add (clj->js {:alias (name key) :src val})))
  
  (. pixi/Assets load (clj->js (keys sprites))))

(defn create-sprite [app resource-key opts]
  (pixi/create-sprite app resource-key opts))

(defn add-sprite! [app sprite]
  (pixi/add-child! (.-stage app) sprite))

(defn remove-sprite! [app sprite]
  (pixi/remove-child! (.-stage app) sprite))

(def create-rectangle pixi/create-rectangle)

(defn init!
  "Init stuff"

  [el-selector {:keys [width height sprites setup update on-keydown on-keyup]}]

  (let [app (pixi/create-application {:width width :height height})]
    (. (get-app-element el-selector) appendChild (.-view app))

    (-> (load-sprites! app sprites)
        (.then
         (fn []
           (key-subscribe! on-keydown on-keyup)
           (setup app)
           (. (.-ticker app) add (partial update app)))))))
