(ns pixi-engine.core
  (:require
   ;;[oops.core :refer [oget+]]
   ))

(def PIXIApplication (.-Application js/PIXI))
(def Sprite (.-Sprite js/PIXI))

(defn create-application []
  (PIXIApplication.))

(defn add-child! [container sprite]
  (. container addChild sprite))

(defn get-resource [app name]
  (let [resources (.. app -loader -resources)]
    (aget resources name)))

(defn create-sprite [resource]
  (let [sprite (Sprite. (.-texture resource))]
    sprite))
