(ns pixi-tutorial-final.game
  (:require
   [pixi-engine.wrapper :as game]))

(defonce chickadee nil)
(defonce bullets (atom []))
(defonce key-state (atom {}))

(defonce canvas-width 400)
(defonce canvas-height 400)

(defonce ^:dynamic *app* nil)
(def ^:dynamic *shot* false)
(def ^:dynamic *bullet-speed* 10)
(def ^:dynamic *bird-speed* 0.1)
(def ^:dynamic *bird-ang-speed* 0.1)

(def sprites {:chickadee "/cljs-interactive-game-dev/images/chickadee.png"})

(defn sync-sprite!
  "Applies entity state to sprite"

  [entity]
  (let [sprite (:sprite entity)]
    (set! (.-x sprite) (-> entity :position :x))
    (set! (.-y sprite) (-> entity :position :y))
    (set! (.-rotation sprite) (:rotation entity)))

  entity)

(defn create-entity
  ([app resource]
   (create-entity app resource {}))
  ([app resource {:keys [sprite-opts
                         position
                         rotation
                         accel
                         vel
                         angular-vel]
                  :or {:sprite-opts {}
                       :position (game/vec2 0 0)
                       :rotation 0
                       :accel (game/vec2 0 0)
                       :vel (game/vec2 0 0)
                       :angular-vel 0}}]
   (atom (sync-sprite!
          {:sprite (if (string? resource)
                     (game/create-sprite app resource sprite-opts)
                     resource)
           :angular-vel angular-vel
           :position position
           :rotation rotation
           :accel accel
           :vel vel}))))

(defn add-entity! [app entity]
  (game/add-sprite! app (:sprite @entity)))

(defn remove-entity! [app entity]
  (game/remove-sprite! app (:sprite @entity)))

(defn set-angular-vel! [entity av]
  (swap! entity assoc :angular-vel av))

(defn get-direction [rad]
  (game/vec2 (Math/sin rad) (* -1 (Math/cos rad))))

(defn update-entity! [dt entity]
  (let [e @entity
        accel (:accel e)
        vel (:vel e)
        av (:angular-vel e)
        rot (:rotation e)
        pos (:position e)]

    (when (< (:x pos) 0) (swap! entity assoc-in [:position :x] canvas-width))
    (when (< (:y pos) 0) (swap! entity assoc-in [:position :y] canvas-height))

    (when (> (:x pos) canvas-width) (swap! entity assoc-in [:position :x] 0))
    (when (> (:y pos) canvas-height) (swap! entity assoc-in [:position :y] 0))

    (swap! entity assoc :vel (game/vec2-add vel accel))
    (swap! entity assoc :rotation (+ rot (* dt av)))
    (swap! entity assoc-in [:position :x]
           (+ (-> @entity :position :x) (* dt (-> @entity :vel :x))))
    (swap! entity assoc-in [:position :y]
           (+ (-> @entity :position :y) (* dt (-> @entity :vel :y))))

    (sync-sprite! e)))

(defn shoot!
  [app]
  (let [bullet (create-entity app
                              (game/create-rectangle 10 10 "0xFFFFFF")
                              {:position (:position @chickadee)
                               :vel (game/vec2*
                                     (get-direction (:rotation @chickadee))
                                     *bullet-speed*)})]
    (swap! bullets conj bullet)
    (add-entity! app bullet)))

(defn setup [app]
  (set! *app* app)
  (set! chickadee
        (create-entity app
                       "chickadee"
                       {:position (game/vec2 200 200)
                        :sprite-opts {:scale (game/vec2 0.5 0.5)
                                      :anchor (game/vec2 0.5 0.5)}}))
  (add-entity! app chickadee))

(defn on-keydown [e]
  (let [key (.-code e)]
    (swap! key-state assoc (keyword key) true)))

(defn on-keyup [e]
  (let [key (.-code e)]
    (swap! key-state assoc (keyword key) false)))

(defn handle-shoot!
  [app {:keys [Space]}]
  (when (and Space (not *shot*))
    (shoot! app)
    (set! *shot* true))

  (when-not Space
    (set! *shot* false)))

(defn handle-move!
  "Move the bird if they click the arrows"

  [_ key-state]

  (let [up (:ArrowUp key-state)
        left (:ArrowLeft key-state)
        right (:ArrowRight key-state)]

    (when left
      (set-angular-vel! chickadee (* -1 *bird-ang-speed*)))

    (when right
      (set-angular-vel! chickadee *bird-ang-speed*))

    (if up
      (swap! chickadee assoc :accel (game/vec2*
                                     (get-direction (:rotation @chickadee))
                                     *bird-speed*))
      (swap! chickadee assoc :accel (game/vec2 0 0)))

    (when (or (and left right) (and (not left) (not right)))
      (set-angular-vel! chickadee 0))))

(def key-handlers
  [handle-move!
   handle-shoot!])

(defn update-game! [app dt]
  (doseq [handler key-handlers]
    (handler app @key-state))
  (update-entity! dt chickadee)
  (doseq [bullet @bullets]
    (update-entity! dt bullet)))

(defonce game
  (game/init!
   "#pixi-app"
   {:width canvas-width
    :height canvas-height
    :sprites sprites
    :update update-game!
    :setup setup
    :on-keydown on-keydown
    :on-keyup on-keyup}))
