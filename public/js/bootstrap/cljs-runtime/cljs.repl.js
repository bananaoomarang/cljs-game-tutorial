goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21959){
var map__21960 = p__21959;
var map__21960__$1 = cljs.core.__destructure_map(map__21960);
var m = map__21960__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21960__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21960__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21961_22051 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21962_22052 = null;
var count__21963_22053 = (0);
var i__21964_22054 = (0);
while(true){
if((i__21964_22054 < count__21963_22053)){
var f_22055 = chunk__21962_22052.cljs$core$IIndexed$_nth$arity$2(null,i__21964_22054);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22055], 0));


var G__22056 = seq__21961_22051;
var G__22057 = chunk__21962_22052;
var G__22058 = count__21963_22053;
var G__22059 = (i__21964_22054 + (1));
seq__21961_22051 = G__22056;
chunk__21962_22052 = G__22057;
count__21963_22053 = G__22058;
i__21964_22054 = G__22059;
continue;
} else {
var temp__5804__auto___22060 = cljs.core.seq(seq__21961_22051);
if(temp__5804__auto___22060){
var seq__21961_22061__$1 = temp__5804__auto___22060;
if(cljs.core.chunked_seq_QMARK_(seq__21961_22061__$1)){
var c__5525__auto___22062 = cljs.core.chunk_first(seq__21961_22061__$1);
var G__22063 = cljs.core.chunk_rest(seq__21961_22061__$1);
var G__22064 = c__5525__auto___22062;
var G__22065 = cljs.core.count(c__5525__auto___22062);
var G__22066 = (0);
seq__21961_22051 = G__22063;
chunk__21962_22052 = G__22064;
count__21963_22053 = G__22065;
i__21964_22054 = G__22066;
continue;
} else {
var f_22067 = cljs.core.first(seq__21961_22061__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22067], 0));


var G__22068 = cljs.core.next(seq__21961_22061__$1);
var G__22069 = null;
var G__22070 = (0);
var G__22071 = (0);
seq__21961_22051 = G__22068;
chunk__21962_22052 = G__22069;
count__21963_22053 = G__22070;
i__21964_22054 = G__22071;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22072 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_22072], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_22072)))?cljs.core.second(arglists_22072):arglists_22072)], 0));
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
var seq__21965_22073 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21966_22074 = null;
var count__21967_22075 = (0);
var i__21968_22076 = (0);
while(true){
if((i__21968_22076 < count__21967_22075)){
var vec__21977_22077 = chunk__21966_22074.cljs$core$IIndexed$_nth$arity$2(null,i__21968_22076);
var name_22078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21977_22077,(0),null);
var map__21980_22079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21977_22077,(1),null);
var map__21980_22080__$1 = cljs.core.__destructure_map(map__21980_22079);
var doc_22081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21980_22080__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21980_22080__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22078], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22082], 0));

if(cljs.core.truth_(doc_22081)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22081], 0));
} else {
}


var G__22083 = seq__21965_22073;
var G__22084 = chunk__21966_22074;
var G__22085 = count__21967_22075;
var G__22086 = (i__21968_22076 + (1));
seq__21965_22073 = G__22083;
chunk__21966_22074 = G__22084;
count__21967_22075 = G__22085;
i__21968_22076 = G__22086;
continue;
} else {
var temp__5804__auto___22087 = cljs.core.seq(seq__21965_22073);
if(temp__5804__auto___22087){
var seq__21965_22088__$1 = temp__5804__auto___22087;
if(cljs.core.chunked_seq_QMARK_(seq__21965_22088__$1)){
var c__5525__auto___22089 = cljs.core.chunk_first(seq__21965_22088__$1);
var G__22090 = cljs.core.chunk_rest(seq__21965_22088__$1);
var G__22091 = c__5525__auto___22089;
var G__22092 = cljs.core.count(c__5525__auto___22089);
var G__22093 = (0);
seq__21965_22073 = G__22090;
chunk__21966_22074 = G__22091;
count__21967_22075 = G__22092;
i__21968_22076 = G__22093;
continue;
} else {
var vec__21981_22094 = cljs.core.first(seq__21965_22088__$1);
var name_22095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21981_22094,(0),null);
var map__21984_22096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21981_22094,(1),null);
var map__21984_22097__$1 = cljs.core.__destructure_map(map__21984_22096);
var doc_22098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21984_22097__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21984_22097__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22095], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22099], 0));

if(cljs.core.truth_(doc_22098)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22098], 0));
} else {
}


var G__22100 = cljs.core.next(seq__21965_22088__$1);
var G__22101 = null;
var G__22102 = (0);
var G__22103 = (0);
seq__21965_22073 = G__22100;
chunk__21966_22074 = G__22101;
count__21967_22075 = G__22102;
i__21968_22076 = G__22103;
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

var seq__21985 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21986 = null;
var count__21987 = (0);
var i__21988 = (0);
while(true){
if((i__21988 < count__21987)){
var role = chunk__21986.cljs$core$IIndexed$_nth$arity$2(null,i__21988);
var temp__5804__auto___22104__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___22104__$1)){
var spec_22105 = temp__5804__auto___22104__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22105)], 0));
} else {
}


var G__22106 = seq__21985;
var G__22107 = chunk__21986;
var G__22108 = count__21987;
var G__22109 = (i__21988 + (1));
seq__21985 = G__22106;
chunk__21986 = G__22107;
count__21987 = G__22108;
i__21988 = G__22109;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__21985);
if(temp__5804__auto____$1){
var seq__21985__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21985__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21985__$1);
var G__22110 = cljs.core.chunk_rest(seq__21985__$1);
var G__22111 = c__5525__auto__;
var G__22112 = cljs.core.count(c__5525__auto__);
var G__22113 = (0);
seq__21985 = G__22110;
chunk__21986 = G__22111;
count__21987 = G__22112;
i__21988 = G__22113;
continue;
} else {
var role = cljs.core.first(seq__21985__$1);
var temp__5804__auto___22114__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___22114__$2)){
var spec_22115 = temp__5804__auto___22114__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22115)], 0));
} else {
}


var G__22116 = cljs.core.next(seq__21985__$1);
var G__22117 = null;
var G__22118 = (0);
var G__22119 = (0);
seq__21985 = G__22116;
chunk__21986 = G__22117;
count__21987 = G__22118;
i__21988 = G__22119;
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
var map__21991 = datafied_throwable;
var map__21991__$1 = cljs.core.__destructure_map(map__21991);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21991__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21991__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21991__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21992 = cljs.core.last(via);
var map__21992__$1 = cljs.core.__destructure_map(map__21992);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21992__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21992__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21992__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21993 = data;
var map__21993__$1 = cljs.core.__destructure_map(map__21993);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21993__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21993__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21993__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21994 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21994__$1 = cljs.core.__destructure_map(map__21994);
var top_data = map__21994__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21994__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21995 = phase;
var G__21995__$1 = (((G__21995 instanceof cljs.core.Keyword))?G__21995.fqn:null);
switch (G__21995__$1) {
case "read-source":
var map__21996 = data;
var map__21996__$1 = cljs.core.__destructure_map(map__21996);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21996__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21996__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21997 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21997__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21997,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21997);
var G__21997__$2 = (cljs.core.truth_((function (){var fexpr__21998 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21998.cljs$core$IFn$_invoke$arity$1 ? fexpr__21998.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21998.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21997__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21997__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21997__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21997__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21999 = top_data;
var G__21999__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21999,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21999);
var G__21999__$2 = (cljs.core.truth_((function (){var fexpr__22000 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22000.cljs$core$IFn$_invoke$arity$1 ? fexpr__22000.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22000.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21999__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21999__$1);
var G__21999__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21999__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21999__$2);
var G__21999__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21999__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21999__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21999__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21999__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22001 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22001,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22001,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22001,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22001,(3),null);
var G__22004 = top_data;
var G__22004__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22004,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22004);
var G__22004__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22004__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22004__$1);
var G__22004__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22004__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22004__$2);
var G__22004__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22004__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22004__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22004__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22004__$4;
}

break;
case "execution":
var vec__22005 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22005,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22005,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22005,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22005,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21990_SHARP_){
var or__5002__auto__ = (p1__21990_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__22008 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22008.cljs$core$IFn$_invoke$arity$1 ? fexpr__22008.cljs$core$IFn$_invoke$arity$1(p1__21990_SHARP_) : fexpr__22008.call(null,p1__21990_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__22009 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22009__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22009,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22009);
var G__22009__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22009__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22009__$1);
var G__22009__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22009__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22009__$2);
var G__22009__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22009__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22009__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22009__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22009__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21995__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22012){
var map__22013 = p__22012;
var map__22013__$1 = cljs.core.__destructure_map(map__22013);
var triage_data = map__22013__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22013__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22013__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22013__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22013__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22013__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22013__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22013__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22013__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__22014 = phase;
var G__22014__$1 = (((G__22014 instanceof cljs.core.Keyword))?G__22014.fqn:null);
switch (G__22014__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__22015 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__22016 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22017 = loc;
var G__22018 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22019_22122 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22020_22123 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22021_22124 = true;
var _STAR_print_fn_STAR__temp_val__22022_22125 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22021_22124);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22022_22125);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22010_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22010_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22020_22123);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22019_22122);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22015,G__22016,G__22017,G__22018) : format.call(null,G__22015,G__22016,G__22017,G__22018));

break;
case "macroexpansion":
var G__22023 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__22024 = cause_type;
var G__22025 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22026 = loc;
var G__22027 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22023,G__22024,G__22025,G__22026,G__22027) : format.call(null,G__22023,G__22024,G__22025,G__22026,G__22027));

break;
case "compile-syntax-check":
var G__22028 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__22029 = cause_type;
var G__22030 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22031 = loc;
var G__22032 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22028,G__22029,G__22030,G__22031,G__22032) : format.call(null,G__22028,G__22029,G__22030,G__22031,G__22032));

break;
case "compilation":
var G__22033 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__22034 = cause_type;
var G__22035 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22036 = loc;
var G__22037 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22033,G__22034,G__22035,G__22036,G__22037) : format.call(null,G__22033,G__22034,G__22035,G__22036,G__22037));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__22038 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__22039 = symbol;
var G__22040 = loc;
var G__22041 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22042_22126 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22043_22127 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22044_22128 = true;
var _STAR_print_fn_STAR__temp_val__22045_22129 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22044_22128);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22045_22129);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22011_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22011_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22043_22127);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22042_22126);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22038,G__22039,G__22040,G__22041) : format.call(null,G__22038,G__22039,G__22040,G__22041));
} else {
var G__22046 = "Execution error%s at %s(%s).\n%s\n";
var G__22047 = cause_type;
var G__22048 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22049 = loc;
var G__22050 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22046,G__22047,G__22048,G__22049,G__22050) : format.call(null,G__22046,G__22047,G__22048,G__22049,G__22050));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22014__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
