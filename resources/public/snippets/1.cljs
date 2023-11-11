(ns pixi-tutorial-1.game
  (:require
   [pixi-engine.wrapper :as game]))

(def sprites {:bird "/images/chickadee.png"})

(defn setup [app]
  (let [bird (game/create-sprite app "bird" {:position {:x 200 :y 200}
                                             :anchor {:x 0.5 :y 0.5}
                                             :scale {:x 0.5 :y 0.5}})]
    (game/add-sprite! app bird)))

(defn update-game! [_])

(defonce game
  (game/init!
   "#pixi-app-1"
   {:width 400
    :height 400
    :sprites sprites
    :update update-game!
    :setup setup}))
