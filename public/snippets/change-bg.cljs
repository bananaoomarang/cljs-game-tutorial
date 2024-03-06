(let [color (.toString (rand-int 16rFFFFFF) 16)]
  (aset
   *app*
   "renderer"
   "background"
   "color"
   (str "#" color)))
