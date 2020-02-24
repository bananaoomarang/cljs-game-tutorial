(ns repl-playground.repl
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [clojure.string :refer [ends-with?]]
   [cljs.js]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]))

(set! cljs.js/*eval-fn* cljs.js/js-eval)
(def comp-state (cljs.js/empty-state))

(defn resolve-file [path]
  (go
    (let [response (<! (http/get path))
          status (:status response)]
      (when (= status 200)
        (:body response)))))

(defn get-extensions [macros]
  (if macros
    [".clj" ".cljc"]
    [".cljs" ".cljc" ".js"]))

(defn get-paths [opts]
  (let [prefix "/cljs_lib/"
        module-path (:path opts)
        extensions (get-extensions (:macros opts))]
    (for [extension extensions]
      (str prefix module-path extension))))

(defn resolve-source
  "Resolve list of paths returning the first success"

  [paths]

  (go-loop [cur-paths paths]
    (if (empty? cur-paths) nil
        (let [path (first cur-paths)
              lang (if (ends-with? path ".js") :js :clj)
              source (<! (resolve-file path))]
          (if source
            {:lang lang :source source}
            (recur (rest cur-paths)))))))

(defn load-fn [opts cb]
  (go
    (let [result (<! (resolve-source (get-paths opts)))]
      (cb result))))

(defn make-compile [handle-eval]
  (fn [str]
    (cljs.js/eval-str comp-state str "random-name" {:load load-fn} handle-eval)))
