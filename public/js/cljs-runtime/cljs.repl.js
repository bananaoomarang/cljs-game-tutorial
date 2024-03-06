goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18423){
var map__18424 = p__18423;
var map__18424__$1 = cljs.core.__destructure_map(map__18424);
var m = map__18424__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18424__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18440_18981 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18441_18982 = null;
var count__18442_18983 = (0);
var i__18443_18984 = (0);
while(true){
if((i__18443_18984 < count__18442_18983)){
var f_18994 = chunk__18441_18982.cljs$core$IIndexed$_nth$arity$2(null,i__18443_18984);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18994], 0));


var G__18996 = seq__18440_18981;
var G__18997 = chunk__18441_18982;
var G__18998 = count__18442_18983;
var G__18999 = (i__18443_18984 + (1));
seq__18440_18981 = G__18996;
chunk__18441_18982 = G__18997;
count__18442_18983 = G__18998;
i__18443_18984 = G__18999;
continue;
} else {
var temp__5804__auto___19000 = cljs.core.seq(seq__18440_18981);
if(temp__5804__auto___19000){
var seq__18440_19001__$1 = temp__5804__auto___19000;
if(cljs.core.chunked_seq_QMARK_(seq__18440_19001__$1)){
var c__5525__auto___19002 = cljs.core.chunk_first(seq__18440_19001__$1);
var G__19003 = cljs.core.chunk_rest(seq__18440_19001__$1);
var G__19004 = c__5525__auto___19002;
var G__19005 = cljs.core.count(c__5525__auto___19002);
var G__19006 = (0);
seq__18440_18981 = G__19003;
chunk__18441_18982 = G__19004;
count__18442_18983 = G__19005;
i__18443_18984 = G__19006;
continue;
} else {
var f_19007 = cljs.core.first(seq__18440_19001__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19007], 0));


var G__19008 = cljs.core.next(seq__18440_19001__$1);
var G__19009 = null;
var G__19010 = (0);
var G__19011 = (0);
seq__18440_18981 = G__19008;
chunk__18441_18982 = G__19009;
count__18442_18983 = G__19010;
i__18443_18984 = G__19011;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19012 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19012], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19012)))?cljs.core.second(arglists_19012):arglists_19012)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18471_19016 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18472_19017 = null;
var count__18473_19018 = (0);
var i__18474_19019 = (0);
while(true){
if((i__18474_19019 < count__18473_19018)){
var vec__18495_19020 = chunk__18472_19017.cljs$core$IIndexed$_nth$arity$2(null,i__18474_19019);
var name_19021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18495_19020,(0),null);
var map__18498_19022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18495_19020,(1),null);
var map__18498_19023__$1 = cljs.core.__destructure_map(map__18498_19022);
var doc_19024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18498_19023__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18498_19023__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19021], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19025], 0));

if(cljs.core.truth_(doc_19024)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19024], 0));
} else {
}


var G__19034 = seq__18471_19016;
var G__19035 = chunk__18472_19017;
var G__19036 = count__18473_19018;
var G__19037 = (i__18474_19019 + (1));
seq__18471_19016 = G__19034;
chunk__18472_19017 = G__19035;
count__18473_19018 = G__19036;
i__18474_19019 = G__19037;
continue;
} else {
var temp__5804__auto___19038 = cljs.core.seq(seq__18471_19016);
if(temp__5804__auto___19038){
var seq__18471_19039__$1 = temp__5804__auto___19038;
if(cljs.core.chunked_seq_QMARK_(seq__18471_19039__$1)){
var c__5525__auto___19041 = cljs.core.chunk_first(seq__18471_19039__$1);
var G__19042 = cljs.core.chunk_rest(seq__18471_19039__$1);
var G__19043 = c__5525__auto___19041;
var G__19044 = cljs.core.count(c__5525__auto___19041);
var G__19045 = (0);
seq__18471_19016 = G__19042;
chunk__18472_19017 = G__19043;
count__18473_19018 = G__19044;
i__18474_19019 = G__19045;
continue;
} else {
var vec__18522_19046 = cljs.core.first(seq__18471_19039__$1);
var name_19047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18522_19046,(0),null);
var map__18525_19048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18522_19046,(1),null);
var map__18525_19049__$1 = cljs.core.__destructure_map(map__18525_19048);
var doc_19050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18525_19049__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18525_19049__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19047], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19051], 0));

if(cljs.core.truth_(doc_19050)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19050], 0));
} else {
}


var G__19052 = cljs.core.next(seq__18471_19039__$1);
var G__19053 = null;
var G__19054 = (0);
var G__19055 = (0);
seq__18471_19016 = G__19052;
chunk__18472_19017 = G__19053;
count__18473_19018 = G__19054;
i__18474_19019 = G__19055;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18534 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18535 = null;
var count__18536 = (0);
var i__18537 = (0);
while(true){
if((i__18537 < count__18536)){
var role = chunk__18535.cljs$core$IIndexed$_nth$arity$2(null,i__18537);
var temp__5804__auto___19058__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19058__$1)){
var spec_19059 = temp__5804__auto___19058__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19059)], 0));
} else {
}


var G__19060 = seq__18534;
var G__19061 = chunk__18535;
var G__19062 = count__18536;
var G__19063 = (i__18537 + (1));
seq__18534 = G__19060;
chunk__18535 = G__19061;
count__18536 = G__19062;
i__18537 = G__19063;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18534);
if(temp__5804__auto____$1){
var seq__18534__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18534__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18534__$1);
var G__19064 = cljs.core.chunk_rest(seq__18534__$1);
var G__19065 = c__5525__auto__;
var G__19066 = cljs.core.count(c__5525__auto__);
var G__19067 = (0);
seq__18534 = G__19064;
chunk__18535 = G__19065;
count__18536 = G__19066;
i__18537 = G__19067;
continue;
} else {
var role = cljs.core.first(seq__18534__$1);
var temp__5804__auto___19068__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19068__$2)){
var spec_19069 = temp__5804__auto___19068__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19069)], 0));
} else {
}


var G__19070 = cljs.core.next(seq__18534__$1);
var G__19071 = null;
var G__19072 = (0);
var G__19073 = (0);
seq__18534 = G__19070;
chunk__18535 = G__19071;
count__18536 = G__19072;
i__18537 = G__19073;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18662 = datafied_throwable;
var map__18662__$1 = cljs.core.__destructure_map(map__18662);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18662__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18662__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18662__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18663 = cljs.core.last(via);
var map__18663__$1 = cljs.core.__destructure_map(map__18663);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18663__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18663__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18663__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18664 = data;
var map__18664__$1 = cljs.core.__destructure_map(map__18664);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18664__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18664__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18664__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18665 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18665__$1 = cljs.core.__destructure_map(map__18665);
var top_data = map__18665__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18665__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18674 = phase;
var G__18674__$1 = (((G__18674 instanceof cljs.core.Keyword))?G__18674.fqn:null);
switch (G__18674__$1) {
case "read-source":
var map__18675 = data;
var map__18675__$1 = cljs.core.__destructure_map(map__18675);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18677 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18677__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18677,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18677);
var G__18677__$2 = (cljs.core.truth_((function (){var fexpr__18741 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18741.cljs$core$IFn$_invoke$arity$1 ? fexpr__18741.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18741.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18677__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18677__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18677__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18677__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18762 = top_data;
var G__18762__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18762,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18762);
var G__18762__$2 = (cljs.core.truth_((function (){var fexpr__18768 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18768.cljs$core$IFn$_invoke$arity$1 ? fexpr__18768.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18768.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18762__$1);
var G__18762__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18762__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18762__$2);
var G__18762__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18762__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18762__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18762__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18762__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18770 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18770,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18770,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18770,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18770,(3),null);
var G__18775 = top_data;
var G__18775__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18775,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18775);
var G__18775__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18775__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18775__$1);
var G__18775__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18775__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18775__$2);
var G__18775__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18775__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18775__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18775__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18775__$4;
}

break;
case "execution":
var vec__18789 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18789,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18789,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18789,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18789,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18644_SHARP_){
var or__5002__auto__ = (p1__18644_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18794 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18794.cljs$core$IFn$_invoke$arity$1 ? fexpr__18794.cljs$core$IFn$_invoke$arity$1(p1__18644_SHARP_) : fexpr__18794.call(null,p1__18644_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18801 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18801__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18801,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18801);
var G__18801__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18801__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18801__$1);
var G__18801__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18801__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18801__$2);
var G__18801__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18801__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18801__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18801__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18801__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18674__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18871){
var map__18872 = p__18871;
var map__18872__$1 = cljs.core.__destructure_map(map__18872);
var triage_data = map__18872__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18887 = phase;
var G__18887__$1 = (((G__18887 instanceof cljs.core.Keyword))?G__18887.fqn:null);
switch (G__18887__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18888 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18889 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18890 = loc;
var G__18891 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18892_19223 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18893_19224 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18894_19225 = true;
var _STAR_print_fn_STAR__temp_val__18895_19226 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18894_19225);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18895_19226);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18869_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18869_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18893_19224);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18892_19223);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18888,G__18889,G__18890,G__18891) : format.call(null,G__18888,G__18889,G__18890,G__18891));

break;
case "macroexpansion":
var G__18915 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18916 = cause_type;
var G__18917 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18918 = loc;
var G__18919 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18915,G__18916,G__18917,G__18918,G__18919) : format.call(null,G__18915,G__18916,G__18917,G__18918,G__18919));

break;
case "compile-syntax-check":
var G__18935 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18936 = cause_type;
var G__18937 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18938 = loc;
var G__18939 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18935,G__18936,G__18937,G__18938,G__18939) : format.call(null,G__18935,G__18936,G__18937,G__18938,G__18939));

break;
case "compilation":
var G__18940 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18941 = cause_type;
var G__18942 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18943 = loc;
var G__18944 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18940,G__18941,G__18942,G__18943,G__18944) : format.call(null,G__18940,G__18941,G__18942,G__18943,G__18944));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18947 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18948 = symbol;
var G__18949 = loc;
var G__18950 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18951_19247 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18952_19248 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18953_19249 = true;
var _STAR_print_fn_STAR__temp_val__18954_19250 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18953_19249);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18954_19250);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18870_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18870_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18952_19248);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18951_19247);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18947,G__18948,G__18949,G__18950) : format.call(null,G__18947,G__18948,G__18949,G__18950));
} else {
var G__18959 = "Execution error%s at %s(%s).\n%s\n";
var G__18960 = cause_type;
var G__18961 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18962 = loc;
var G__18963 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18959,G__18960,G__18961,G__18962,G__18963) : format.call(null,G__18959,G__18960,G__18961,G__18962,G__18963));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18887__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
