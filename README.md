# Clojurescript interactive game maker [WIP!] #

Experiment with self hosting CLJS code in the browser for interactive docs, development tutorials e.t.c.

![App Demo](demov2.gif)

The Clojurescript is fully bootstrapped/compiled/run in the browser, which allows re-evaluating code as the application is running similar to ordinary REPL-driven Clojure(script) development.

Accessible at: https://bananaoomarang.github.io/cljs-interactive-game-dev/

Inspired by Guile Scheme game engine [Chickadee](https://dthompson.us/projects/chickadee.html), hence the bird.

### Running Locally ###

```
$ npx shadow-cljs watch bootstrap frontend
```

App will be served on http://localhost:8080/
