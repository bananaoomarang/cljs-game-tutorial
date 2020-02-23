(ns repl-playground.app-server
  (:require
   [ring.middleware.file :refer [wrap-file]]
   [compojure.core :refer [defroutes context]]
   [compojure.route :as route]))

(defroutes handler
  (context "/cljs_lib" []
           (->
            (route/not-found "nothing here buddy")
            ;;(wrap-file "resources/public/cljs_lib")
            (wrap-file "src")
            (wrap-file "target/public/cljs-out/dev")))
  (route/not-found "<h1>Nothing here buddy</h1>"))


(def app
  (-> handler
      (wrap-file "target/public/cljs-out/dev")))
