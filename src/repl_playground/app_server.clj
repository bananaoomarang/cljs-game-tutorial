(ns repl-playground.app-server
  (:require
   [compojure.core :refer [defroutes GET]]
   [compojure.route :as route]))

(defroutes handler
  (GET "/test" [] "HEYEYIOHUIOAHFIO")
  (route/not-found "<h1>Nothing here buddy</h1>"))
