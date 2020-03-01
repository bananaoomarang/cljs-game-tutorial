(ns repl-playground.repl
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [clojure.string :refer [starts-with? ends-with? replace]]
   [cljs.js]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]))

(set! cljs.js/*eval-fn* cljs.js/js-eval)
(def comp-state (cljs.js/empty-state))

(def loaded-js-set
  "A set containing namespaces already loaded."
  '#{cljs.analyzer
     cljs.compiler
     cljs.env
     cljs.reader
     cljs.source-map
     cljs.source-map.base64
     cljs.source-map.base64-vlq
     cljs.stacktrace
     cljs.tagged-literals
     cljs.tools.reader.impl.utils
     cljs.tools.reader.reader-types
     clojure.set
     clojure.string
     cognitect.transit})

(defn skip-load?
  [{:keys [name macros]}]
  
  (or
   (contains? loaded-js-set name)
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
    (let [source (<! (resolve-file "cljs_lib/goog/deps.js"))]
      (goog-deps-map source))))

(defn get-extensions [{:keys [macros]}]
  (if macros
    [".clj" ".cljc"]
    [".cljs" ".cljc" ".js"]))

(def cache-extensions
  [".cljs.cache.edn"
   ".js.cache.edn"
   ".cljs.cache.json"
   ".js.cache.json"])

(defn get-cache-paths [opts]
  (let [prefix "/cljs_lib/"
        module-path (:path opts)
        extensions cache-extensions]
    (for [extension extensions]
      (str prefix module-path extension))))

(defn get-paths [opts]
  (let [prefix "/cljs_lib/"
        module-path (:path opts)
        extensions (get-extensions opts)]
    (for [extension extensions]
      (str prefix module-path extension))))

(defn cache-source-path [path]
  (-> path
      (replace #".cache.(json|edn)" "")
      (replace #".cljs?$" ".js")))

(defn cache-prefix-for-path
  ([path macros]
   (str (munge path) (when macros "$macros")))
  ([cache-path path macros]
   (str cache-path  "/" (munge path) (when macros "$macros"))))

(defn resolve-cache-source
  "
  First resolves a cache.{cljs,js}.{json,edn} file,
  then its js/cljs counterpart. Returns nil if it can't
  find a pair.
  "

  [paths]
  (go-loop [cur-paths paths]
    (if (empty? cur-paths) nil
        (let [path (first cur-paths)
              source-path (cache-source-path path)
              cache-source (<! (resolve-file path))]

          (when-not cache-source
            (recur (rest cur-paths)))

          (let [source (<! (resolve-file source-path))]
            (if source
              {:lang :js :source source :cache cache-source}
              (recur (rest cur-paths))))))))

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
  (if (skip-load? opts) (cb {:lang :js
                             :source ""})
      (go
        (if (goog? opts)
          (let [deps-map (<! (load-deps-map!))
                path (get deps-map (:name opts))
                result (<! (resolve-source (get-paths (merge opts {:path path}))))]
            (cb result))

          (let [cache-result (<! (resolve-cache-source (get-cache-paths opts)))
                result (when-not cache-result
                         (<! (resolve-source (get-paths opts))))]
            ;; (if cache-result
            ;;   (println "Loading cache" cache-result)
            ;;   (println "Loading source" result))

            (cb (if cache-result cache-result result)))))))

(defn make-compile [handle-eval]
  (fn [str]
    (cljs.js/eval-str comp-state str "random-name" {:load load-fn} handle-eval)))
