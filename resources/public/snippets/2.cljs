(ns pixi-tutorial-2.game
  (:require
   [pixi-engine.wrapper :as game]))

(defonce bird nil)

(def sprites {:bird "/images/chickadee.png"})

;; Change me and re-run!
(def rot-speed 0.1)

(defn setup [app]
  (set! bird (game/create-sprite app "bird" {:position {:x 200 :y 200}
                                             :anchor {:x 0.5 :y 0.5}}))
  (game/add-sprite! app bird))

(defn update! [dt]
  (let [rotation (.-rotation bird)]
    (set! (.-rotation bird) (+ rotation (* dt rot-speed)))))

(defonce game
  (game/init!
   "#pixi-app-2"
   {:width 400
    :height 400
    :sprites sprites
    :update update!
    :setup setup}))
