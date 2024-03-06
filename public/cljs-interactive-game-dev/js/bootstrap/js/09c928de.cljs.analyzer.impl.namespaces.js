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
var vec__7206 = libspec;
var seq__7207 = cljs.core.seq(vec__7206);
var first__7208 = cljs.core.first(seq__7207);
var seq__7207__$1 = cljs.core.next(seq__7207);
var lib = first__7208;
var spec = seq__7207__$1;
var libspec__$1 = vec__7206;
var vec__7209 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7209,(0),null);
var vec__7212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7209,(1),null);
var seq__7213 = cljs.core.seq(vec__7212);
var first__7214 = cljs.core.first(seq__7213);
var seq__7213__$1 = cljs.core.next(seq__7213);
var _ = first__7214;
var first__7214__$1 = cljs.core.first(seq__7213__$1);
var seq__7213__$2 = cljs.core.next(seq__7213__$1);
var alias = first__7214__$1;
var post_spec = seq__7213__$2;
var post = vec__7212;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));

var G__7216 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__7216,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__7216;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__7218 = cljs.core.seq(new_as_aliases);
var chunk__7219 = null;
var count__7220 = (0);
var i__7221 = (0);
while(true){
if((i__7221 < count__7220)){
var vec__7247 = chunk__7219.cljs$core$IIndexed$_nth$arity$2(null,i__7221);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7247,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7247,(1),null);


var G__7282 = seq__7218;
var G__7283 = chunk__7219;
var G__7284 = count__7220;
var G__7285 = (i__7221 + (1));
seq__7218 = G__7282;
chunk__7219 = G__7283;
count__7220 = G__7284;
i__7221 = G__7285;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7218);
if(temp__5804__auto__){
var seq__7218__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7218__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7218__$1);
var G__7289 = cljs.core.chunk_rest(seq__7218__$1);
var G__7290 = c__5525__auto__;
var G__7291 = cljs.core.count(c__5525__auto__);
var G__7292 = (0);
seq__7218 = G__7289;
chunk__7219 = G__7290;
count__7220 = G__7291;
i__7221 = G__7292;
continue;
} else {
var vec__7257 = cljs.core.first(seq__7218__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7257,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7257,(1),null);


var G__7293 = cljs.core.next(seq__7218__$1);
var G__7294 = null;
var G__7295 = (0);
var G__7296 = (0);
seq__7218 = G__7293;
chunk__7219 = G__7294;
count__7220 = G__7295;
i__7221 = G__7296;
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
var G__7263 = arguments.length;
switch (G__7263) {
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
var map__7264 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__7264__$1 = cljs.core.__destructure_map(map__7264);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7264__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7264__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__7265 = ret__$1;
var G__7265__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__7265,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__7265);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__7265__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__7265__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__7267,p__7268){
var map__7269 = p__7267;
var map__7269__$1 = cljs.core.__destructure_map(map__7269);
var ret__$1 = map__7269__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7269__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__7270 = p__7268;
var seq__7271 = cljs.core.seq(vec__7270);
var first__7272 = cljs.core.first(seq__7271);
var seq__7271__$1 = cljs.core.next(seq__7271);
var spec_key = first__7272;
var libspecs = seq__7271__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__7273 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__7273__$1 = cljs.core.__destructure_map(map__7273);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7273__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7273__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__7274 = ret__$1;
var G__7274__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__7274,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__7274);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__7274__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__7274__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});
