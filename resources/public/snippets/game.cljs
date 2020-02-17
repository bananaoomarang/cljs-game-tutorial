(ns pixi-tutorial-2.game
  (:require
   [pixi-engine.wrapper :as game]
   [pixi-engine.core :as pixi]))

(defonce pixi-app (pixi/create-application {:width 400 :height 400}))
(defonce chickadee nil)
(defonce key-state (atom {}))

(def bird-speed 5)

(def sprites {:chickadee "/images/chickadee.png"})

(defn create-entity
  ([resource-name pos]
   (create-entity resource-name pos {}))
  ([resource-name pos {:keys [vel] :or {:vel (game/vec2 0 0)}}]
   (atom {:sprite (pixi/create-sprite pixi-app resource-name {:scale {:x 0.5 :y 0.5}})
          :x (game/vec-x pos)
          :y (game/vec-y pos)
          :vx (game/vec-x vel)
          :vy (game/vec-y vel)})))

(defn add-entity! [app entity]
  (pixi/add-child! (.-stage app) (:sprite @entity)))

(defn set-vel-x! [entity v]
  (swap! entity assoc :vx v))

(defn set-vel-y! [entity v]
  (swap! entity assoc :vy v))

(defn update-entity! [dt entity]
  (let [e @entity
        sprite (:sprite e)
        vx (:vx e)
        vy (:vy e)
        x (.-x sprite)
        y (.-y sprite)]
    (set! (.-x sprite) (+ x (* dt vx)))
    (set! (.-y sprite) (+ y (* dt vy)))))

(defn setup []
  (set! chickadee (create-entity "chickadee" (game/vec2 0 0)))
  (add-entity! pixi-app chickadee))

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
      (set-vel-x! chickadee (* -1 bird-speed)))

    (when right
      (set-vel-x! chickadee bird-speed))

    (when up
      (set-vel-y! chickadee (* -1 bird-speed)))

    (when down
      (set-vel-y! chickadee bird-speed))

    (when (or (and left right) (and (not left) (not right)))
      (set-vel-x! chickadee 0))

    (when (or (and up down) (and (not up) (not down)))
      (set-vel-y! chickadee 0)))

  (update-entity! dt chickadee))

(defn update-game! [dt]
  (update-bird! dt))

(game/init!
 pixi-app
 "#pixi-app"
 {:sprites sprites
  :update update-game!
  :setup setup
  :on-keydown on-keydown
  :on-keyup on-keyup})
