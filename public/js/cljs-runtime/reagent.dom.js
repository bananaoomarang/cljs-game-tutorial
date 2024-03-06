goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__11774 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11775 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11775);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__11778 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11779 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11779);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11778);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11774);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__11793 = arguments.length;
switch (G__11793) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__11800 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11800,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11800,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__11814_11841 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__11816_11842 = null;
var count__11817_11843 = (0);
var i__11818_11844 = (0);
while(true){
if((i__11818_11844 < count__11817_11843)){
var vec__11830_11845 = chunk__11816_11842.cljs$core$IIndexed$_nth$arity$2(null,i__11818_11844);
var container_11846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11830_11845,(0),null);
var comp_11847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11830_11845,(1),null);
reagent.dom.re_render_component(comp_11847,container_11846);


var G__11848 = seq__11814_11841;
var G__11849 = chunk__11816_11842;
var G__11850 = count__11817_11843;
var G__11851 = (i__11818_11844 + (1));
seq__11814_11841 = G__11848;
chunk__11816_11842 = G__11849;
count__11817_11843 = G__11850;
i__11818_11844 = G__11851;
continue;
} else {
var temp__5804__auto___11852 = cljs.core.seq(seq__11814_11841);
if(temp__5804__auto___11852){
var seq__11814_11853__$1 = temp__5804__auto___11852;
if(cljs.core.chunked_seq_QMARK_(seq__11814_11853__$1)){
var c__5525__auto___11854 = cljs.core.chunk_first(seq__11814_11853__$1);
var G__11855 = cljs.core.chunk_rest(seq__11814_11853__$1);
var G__11856 = c__5525__auto___11854;
var G__11857 = cljs.core.count(c__5525__auto___11854);
var G__11858 = (0);
seq__11814_11841 = G__11855;
chunk__11816_11842 = G__11856;
count__11817_11843 = G__11857;
i__11818_11844 = G__11858;
continue;
} else {
var vec__11833_11859 = cljs.core.first(seq__11814_11853__$1);
var container_11860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11833_11859,(0),null);
var comp_11861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11833_11859,(1),null);
reagent.dom.re_render_component(comp_11861,container_11860);


var G__11862 = cljs.core.next(seq__11814_11853__$1);
var G__11863 = null;
var G__11864 = (0);
var G__11865 = (0);
seq__11814_11841 = G__11862;
chunk__11816_11842 = G__11863;
count__11817_11843 = G__11864;
i__11818_11844 = G__11865;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
