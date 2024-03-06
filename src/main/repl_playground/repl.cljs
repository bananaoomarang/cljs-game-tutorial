(ns repl-playground.repl
  (:require
   [cljs.js]
   [cljs.env :as env]
   [shadow.cljs.bootstrap.browser :as boot]))

(goog-define PATH-PREFIX "")

(set! cljs.js/*eval-fn* cljs.js/js-eval)
(def comp-state (env/default-compiler-env))

(defn make-compile [handle-eval]
  (fn [str ns]
    (cljs.js/eval-str
     comp-state
     str
     "random-name"
     {:load (partial boot/load comp-state)
      :ns ns}
     handle-eval)))

(defn init [!eval-ready?]
  (boot/init comp-state
             {:path (str PATH-PREFIX "/js/bootstrap")
              :load-on-init '#{shadow-eval.user}}
             #(reset! !eval-ready? true)))
