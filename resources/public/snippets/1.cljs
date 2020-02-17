(ns pixi-tutorial-1.game
  (:require
   [pixi-engine.wrapper :as game]
   [pixi-engine.core :as pixi]))

(defonce pixi-app (pixi/create-application {:width 400 :height 400}))

(def sprites {:bird "/images/chickadee.png"})
(def bird nil)


(defn setup []
  (let [bird (pixi/create-sprite pixi-app "bird" {:scale {:x 0.5 :y 0.5}})]
    (pixi/add-child! (.-stage pixi-app) bird)))

(game/init!
 pixi-app
 "#pixi-app-1"
 {:sprites sprites
  :setup setup})
