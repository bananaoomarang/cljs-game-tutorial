(doseq [bullet @bullets]
  (remove-entity! *app* bullet))

(reset! bullets [])
