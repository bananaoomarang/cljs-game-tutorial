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
var vec__13182 = libspec;
var seq__13183 = cljs.core.seq(vec__13182);
var first__13184 = cljs.core.first(seq__13183);
var seq__13183__$1 = cljs.core.next(seq__13183);
var lib = first__13184;
var spec = seq__13183__$1;
var libspec__$1 = vec__13182;
var vec__13185 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13185,(0),null);
var vec__13188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13185,(1),null);
var seq__13189 = cljs.core.seq(vec__13188);
var first__13190 = cljs.core.first(seq__13189);
var seq__13189__$1 = cljs.core.next(seq__13189);
var _ = first__13190;
var first__13190__$1 = cljs.core.first(seq__13189__$1);
var seq__13189__$2 = cljs.core.next(seq__13189__$1);
var alias = first__13190__$1;
var post_spec = seq__13189__$2;
var post = vec__13188;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__13196 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13196,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__13196;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__13199 = cljs.core.seq(new_as_aliases);
var chunk__13200 = null;
var count__13201 = (0);
var i__13202 = (0);
while(true){
if((i__13202 < count__13201)){
var vec__13213 = chunk__13200.cljs$core$IIndexed$_nth$arity$2(null,i__13202);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13213,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13213,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__13250 = seq__13199;
var G__13251 = chunk__13200;
var G__13252 = count__13201;
var G__13253 = (i__13202 + (1));
seq__13199 = G__13250;
chunk__13200 = G__13251;
count__13201 = G__13252;
i__13202 = G__13253;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13199);
if(temp__5804__auto__){
var seq__13199__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13199__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13199__$1);
var G__13254 = cljs.core.chunk_rest(seq__13199__$1);
var G__13255 = c__5525__auto__;
var G__13256 = cljs.core.count(c__5525__auto__);
var G__13257 = (0);
seq__13199 = G__13254;
chunk__13200 = G__13255;
count__13201 = G__13256;
i__13202 = G__13257;
continue;
} else {
var vec__13221 = cljs.core.first(seq__13199__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13221,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13221,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__13261 = cljs.core.next(seq__13199__$1);
var G__13262 = null;
var G__13263 = (0);
var G__13264 = (0);
seq__13199 = G__13261;
chunk__13200 = G__13262;
count__13201 = G__13263;
i__13202 = G__13264;
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
var G__13229 = arguments.length;
switch (G__13229) {
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
var map__13233 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__13233__$1 = cljs.core.__destructure_map(map__13233);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13233__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13233__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__13234 = ret__$1;
var G__13234__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__13234,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__13234);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__13234__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__13234__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__13236,p__13237){
var map__13238 = p__13236;
var map__13238__$1 = cljs.core.__destructure_map(map__13238);
var ret__$1 = map__13238__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13238__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__13239 = p__13237;
var seq__13240 = cljs.core.seq(vec__13239);
var first__13241 = cljs.core.first(seq__13240);
var seq__13240__$1 = cljs.core.next(seq__13240);
var spec_key = first__13241;
var libspecs = seq__13240__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__13242 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__13242__$1 = cljs.core.__destructure_map(map__13242);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13242__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13242__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__13244 = ret__$1;
var G__13244__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__13244,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__13244);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__13244__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__13244__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
