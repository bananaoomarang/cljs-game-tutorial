(ns repl-playground.app-server
  (:require
   [ring.middleware.file :refer [wrap-file]]
   [ring.middleware.content-type :refer [wrap-content-type]]
   [compojure.core :refer [defroutes context]]
   [compojure.route :as route]))

(defroutes handler
  (context "/cljs_lib" []
           (->
            (route/not-found "nothing here buddy")
            ;;(wrap-file "resources/public/cljs_lib")
            (wrap-file "target/public/cljs-out/dev")
            (wrap-file "src")
            (wrap-content-type {:mime-types {"json" "application/transit+json"
                                             "cljs" "text/plain"
                                             "js" "text/plain"}})))
  (route/not-found "<h1>Nothing here buddy</h1>"))


(def app handler)
