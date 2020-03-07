(ns pixi-tutorial-final.game
  (:require
   [pixi-engine.wrapper :as game]))

(defonce chickadee nil)
(defonce key-state (atom {}))

(def bird-speed 10)
(def bird-ang-speed 0.1)

(def sprites {:chickadee "/images/chickadee.png"})

(defn create-entity
  ([app resource-name]
   (create-entity app resource-name {}))
  ([app resource-name {:keys [sprite-opts
                              vel
                              angular-vel]
                       :or {:sprite-opts {}
                            :vel (game/vec2 0 0)
                            :angular-vel 0}}]
   (atom {:sprite (game/create-sprite app resource-name sprite-opts)
          :angular-vel angular-vel
          :vel vel})))

(defn add-entity! [app entity]
  (game/add-sprite! app (:sprite @entity)))

(defn set-angular-vel! [entity av]
  (swap! entity assoc :angular-vel av))

(defn get-direction [rad]
  (game/vec2 (Math/sin rad) (* -1 (Math/cos rad))))

(defn update-entity! [dt entity]
  (let [e @entity
        sprite (:sprite e)
        vx (-> e :vel :x)
        vy (-> e :vel :y)
        av (:angular-vel e)
        rot (.-rotation sprite)
        x (.-x sprite)
        y (.-y sprite)]
    (set! (.-rotation sprite) (+ rot (* dt av)))
    (set! (.-x sprite) (+ x (* dt vx)))
    (set! (.-y sprite) (+ y (* dt vy)))))

(defn setup [app]
  (set! chickadee
        (create-entity app
                       "chickadee"
                       {:sprite-opts {:position (game/vec2 200 200)
                                      :scale (game/vec2 0.5 0.5)
                                      :anchor (game/vec2 0.5 0.5)}}))
  (add-entity! app chickadee))

(defn on-keydown [e]
  (let [key (.-key e)]
    (swap! key-state assoc (keyword key) true)))

(defn on-keyup [e]
  (let [key (.-key e)]
    (swap! key-state assoc (keyword key) false)))

(defn update-bird!
  "Move the bird if they click the arrows"

  [dt]

  (let [ks @key-state
        up (:ArrowUp ks)
        down (:ArrowDown ks)
        left (:ArrowLeft ks)
        right (:ArrowRight ks)]

    (when left
      (set-angular-vel! chickadee (* -1 bird-ang-speed)))

    (when right
      (set-angular-vel! chickadee bird-ang-speed))

    (if up
      (swap! chickadee assoc :vel (game/vec2*
                                   (get-direction (-> @chickadee :sprite .-rotation))
                                   bird-speed))
      (swap! chickadee assoc :vel (game/vec2 0 0)))

    (when (or (and left right) (and (not left) (not right)))
      (set-angular-vel! chickadee 0)))

  (update-entity! dt chickadee))

(defn update-game! [dt]
  (update-bird! dt))

(defonce game
  (game/init!
   "#pixi-app"
   {:width 400
    :height 400
    :sprites sprites
    :update update-game!
    :setup setup
    :on-keydown on-keydown
    :on-keyup on-keyup}))
