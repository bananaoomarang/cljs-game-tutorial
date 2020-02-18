(ns pixi-engine.wrapper
  (:require
   [pixi-engine.core :as pixi]))

(defn vec2 [x y]
  [x y])

(defn vec-x [v]
  (get v 0))

(defn vec-y [v]
  (get v 1))

(defn get-app-element [selector]
  (. js/document querySelector selector))

(defn create-on-keydown [on-keydown]
  (fn [e]
    (. e preventDefault)

    (on-keydown e)))

(defn create-on-keyup [on-keyup]
  (fn [e]
    (. e preventDefault)

    (on-keyup e)))

(defn key-subscribe! [on-keydown on-keyup]
  (when on-keydown
    (. js/window addEventListener "keydown" (create-on-keydown on-keydown) false))

  (when on-keyup
    (. js/window addEventListener "keyup" (create-on-keyup on-keyup) false)))

(defn load-sprites! [app sprites]
  (doseq [[key val] sprites]
    (. (.-loader app) add (name key) val)))

(defn add-sprite! [app sprite]
  (pixi/add-child! (.-stage app) sprite))

(defn init!
  "Init stuff"

  [el-selector {:keys [width height sprites setup update on-keydown on-keyup]}]

  (let [app (pixi/create-application {:width width :height height})]
    (. (get-app-element el-selector) appendChild (.-view app))

    (load-sprites! app sprites)
    (key-subscribe! on-keydown on-keyup)

    (. (.-loader app) load
       (fn []
         (setup app)
         (. (.-ticker app) add update)))))
