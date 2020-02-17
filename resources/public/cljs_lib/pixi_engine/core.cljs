(ns pixi-engine.core
  (:require
   ;;[oops.core :refer [oget+]]
   ))

(def PIXIApplication (.-Application js/PIXI))
(def Sprite (.-Sprite js/PIXI))

(defn create-application [config]
  (PIXIApplication. (clj->js config)))

(defn add-child! [container sprite]
  (. container addChild sprite))

(defn get-resource [app name]
  (let [resources (.. app -loader -resources)]
    (aget resources name)))

(defn create-sprite [app resource-key {:keys [scale]}]
  (let [resource (get-resource app resource-key)
        sprite (Sprite. (.-texture resource))]
    (when scale
      (set! (.-scale sprite) (clj->js scale)))
    sprite))
