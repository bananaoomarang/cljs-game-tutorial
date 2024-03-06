goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11449__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11450__i = 0, G__11450__a = new Array(arguments.length -  0);
while (G__11450__i < G__11450__a.length) {G__11450__a[G__11450__i] = arguments[G__11450__i + 0]; ++G__11450__i;}
  args = new cljs.core.IndexedSeq(G__11450__a,0,null);
} 
return G__11449__delegate.call(this,args);};
G__11449.cljs$lang$maxFixedArity = 0;
G__11449.cljs$lang$applyTo = (function (arglist__11451){
var args = cljs.core.seq(arglist__11451);
return G__11449__delegate(args);
});
G__11449.cljs$core$IFn$_invoke$arity$variadic = G__11449__delegate;
return G__11449;
})()
);

(o.error = (function() { 
var G__11452__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11453__i = 0, G__11453__a = new Array(arguments.length -  0);
while (G__11453__i < G__11453__a.length) {G__11453__a[G__11453__i] = arguments[G__11453__i + 0]; ++G__11453__i;}
  args = new cljs.core.IndexedSeq(G__11453__a,0,null);
} 
return G__11452__delegate.call(this,args);};
G__11452.cljs$lang$maxFixedArity = 0;
G__11452.cljs$lang$applyTo = (function (arglist__11454){
var args = cljs.core.seq(arglist__11454);
return G__11452__delegate(args);
});
G__11452.cljs$core$IFn$_invoke$arity$variadic = G__11452__delegate;
return G__11452;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
