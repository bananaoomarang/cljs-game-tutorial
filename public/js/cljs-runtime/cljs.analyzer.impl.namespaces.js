goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__11544 = libspec;
var seq__11545 = cljs.core.seq(vec__11544);
var first__11546 = cljs.core.first(seq__11545);
var seq__11545__$1 = cljs.core.next(seq__11545);
var lib = first__11546;
var spec = seq__11545__$1;
var libspec__$1 = vec__11544;
var vec__11547 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11547,(0),null);
var vec__11550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11547,(1),null);
var seq__11551 = cljs.core.seq(vec__11550);
var first__11552 = cljs.core.first(seq__11551);
var seq__11551__$1 = cljs.core.next(seq__11551);
var _ = first__11552;
var first__11552__$1 = cljs.core.first(seq__11551__$1);
var seq__11551__$2 = cljs.core.next(seq__11551__$1);
var alias = first__11552__$1;
var post_spec = seq__11551__$2;
var post = vec__11550;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__11555 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11555,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__11555;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__11566 = cljs.core.seq(new_as_aliases);
var chunk__11567 = null;
var count__11568 = (0);
var i__11569 = (0);
while(true){
if((i__11569 < count__11568)){
var vec__11597 = chunk__11567.cljs$core$IIndexed$_nth$arity$2(null,i__11569);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11597,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11597,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__11626 = seq__11566;
var G__11627 = chunk__11567;
var G__11628 = count__11568;
var G__11629 = (i__11569 + (1));
seq__11566 = G__11626;
chunk__11567 = G__11627;
count__11568 = G__11628;
i__11569 = G__11629;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11566);
if(temp__5804__auto__){
var seq__11566__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11566__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11566__$1);
var G__11630 = cljs.core.chunk_rest(seq__11566__$1);
var G__11631 = c__5525__auto__;
var G__11632 = cljs.core.count(c__5525__auto__);
var G__11633 = (0);
seq__11566 = G__11630;
chunk__11567 = G__11631;
count__11568 = G__11632;
i__11569 = G__11633;
continue;
} else {
var vec__11606 = cljs.core.first(seq__11566__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11606,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11606,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__11634 = cljs.core.next(seq__11566__$1);
var G__11635 = null;
var G__11636 = (0);
var G__11637 = (0);
seq__11566 = G__11634;
chunk__11567 = G__11635;
count__11568 = G__11636;
i__11569 = G__11637;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__11612 = arguments.length;
switch (G__11612) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__11616 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__11616__$1 = cljs.core.__destructure_map(map__11616);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11616__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11616__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__11617 = ret__$1;
var G__11617__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11617,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__11617);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11617__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__11617__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__11618,p__11619){
var map__11620 = p__11618;
var map__11620__$1 = cljs.core.__destructure_map(map__11620);
var ret__$1 = map__11620__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11620__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__11621 = p__11619;
var seq__11622 = cljs.core.seq(vec__11621);
var first__11623 = cljs.core.first(seq__11622);
var seq__11622__$1 = cljs.core.next(seq__11622);
var spec_key = first__11623;
var libspecs = seq__11622__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__11624 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__11624__$1 = cljs.core.__destructure_map(map__11624);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11624__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11624__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__11625 = ret__$1;
var G__11625__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11625,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__11625);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__11625__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__11625__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
