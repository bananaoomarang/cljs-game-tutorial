(ns repl-playground.repl
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [clojure.string :refer [starts-with? ends-with?]]
   [cljs.js]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]))

(set! cljs.js/*eval-fn* cljs.js/js-eval)
(def comp-state (cljs.js/empty-state))

(defn skip-load?
  [{:keys [name macros]}]
  
  (or
   (= name 'cljs.core)
   (= name 'cljs.analyzer)
   (and (= name 'cljs.pprint) macros)
   (and (= name 'cljs.test) macros)
   (and (= name 'clojure.template) macros)))

(defn goog? [{:keys [name]}]
  (starts-with? (str name) "goog."))

(defn goog-deps-map
  "Given the content of goog/deps.js file, create a map
  provide->path (without extension) of Google dependencies.
  Adapted from planck:
  https://github.com/mfikes/planck/blob/master/planck-cljs/src/planck/repl.cljs#L438-L451"
  [deps-js-content]
  (let [paths-to-provides (map (fn [[_ path provides]]
                                 [path (map second (re-seq #"'(.*?)'" provides))])
                               (re-seq #"\ngoog\.addDependency\('(.*)', \[(.*?)\].*"
                                       deps-js-content))]
    (into {} (for [[path provides] paths-to-provides
                   provide provides]
               [(symbol provide) (str "goog/" (second (re-find #"(.*)\.js$" path)))]))))

(defn resolve-file [path]
  (go
    (let [response (<! (http/get path))
          status (:status response)]
      (when (= status 200)
        (:body response)))))

(defn load-deps-map! []
  (go
    (let [source (<! (resolve-file "goog/deps.js"))]
      (goog-deps-map source))))

(defn get-extensions [{:keys [macros]}]
  (if macros
    [".clj" ".cljc"]
    [".cljs" ".cljc" ".js"]))

(defn get-paths [opts]
  (let [prefix "/cljs_lib/"
        module-path (:path opts)
        extensions (get-extensions opts)]
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
  (cond
    (skip-load? opts) (cb {:lang :js
                           :source ""})
    (goog? opts)
    (go
      (let [deps-map (<! (load-deps-map!))
            path (get deps-map (:name opts))
            result (<! (resolve-source (get-paths (merge opts {:path path}))))]
        (js/console.log (clj->js result))
        (cb result)))
    
    :else
    (go
      (let [result (<! (resolve-source (get-paths opts)))]
        (cb result)))))

(defn make-compile [handle-eval]
  (fn [str]
    (cljs.js/eval-str comp-state str "random-name" {:load load-fn} handle-eval)))
