(ns pixi-engine.wrapper
  (:require
   [pixi-engine.core :as pixi]))

(defn vec2 [x y]
  [x y])

(defn vec-x [v]
  (get v 0))

(defn vec-y [v]
  (get v 1))

(defn get-app-element []
  (. js/document getElementById "pixi-app"))

(defn key-subscribe! [on-keydown on-keyup]
  (. js/window addEventListener "keydown" on-keydown false)
  (. js/window addEventListener "keyup" on-keyup false))

(defn load-sprites! [pixi-app sprites]
  (doseq [[key val] sprites]
    (. (.-loader pixi-app) add (name key) val)))

(defn add-entity! [container entity]
  (pixi/add-child! container (:sprite @entity)))

(defn init! [pixi-app {:keys [sprites setup update on-keydown on-keyup]}]
  "Init stuff"

  (. (get-app-element) appendChild (.-view pixi-app))

  (load-sprites! pixi-app sprites)
  (key-subscribe! on-keydown on-keyup)
  (. (.-loader pixi-app) load
     (fn []
       (setup)
       (. (.-ticker pixi-app) add update))))
