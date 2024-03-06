goog.provide('cljs.source_map');
goog.scope(function(){
  cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__11644){
var vec__11645 = p__11644;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11645,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11645,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__11651 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11651,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11651,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11651,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11651,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11651,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(cljs.source_map.goog$module$goog$object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5804__auto__)){
var name__$1 = temp__5804__auto__;
return (cljs.source_map.goog$module$goog$object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__11655 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11655,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11655,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11655,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11655,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11655,(4),null);
var vec__11658 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11658,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11658,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11658,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11658,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11658,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__5002__auto__ = col;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__11662 = segmap;
var map__11662__$1 = cljs.core.__destructure_map(map__11662);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__11665 = arguments.length;
switch (G__11665) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(cljs.source_map.goog$module$goog$object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__11670 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__12426 = cljs.core.next(segs__$1);
var G__12427 = nrelseg;
var G__12428 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__12426;
relseg__$1 = G__12427;
result__$1 = G__12428;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11670,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11670,(1),null);
var G__12429 = (gline + (1));
var G__12430 = cljs.core.next(lines__$1);
var G__12431 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__12432 = result__$1;
gline = G__12429;
lines__$1 = G__12430;
relseg = G__12431;
result = G__12432;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__11674 = segmap;
var map__11674__$1 = cljs.core.__destructure_map(map__11674);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11674__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11674__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11674__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11674__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11674__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__11673_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__11673_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__11676 = arguments.length;
switch (G__11676) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(cljs.source_map.goog$module$goog$object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__11680 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__12434 = cljs.core.next(segs__$1);
var G__12435 = nrelseg;
var G__12436 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__12434;
relseg__$1 = G__12435;
result__$1 = G__12436;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11680,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11680,(1),null);
var G__12437 = (gline + (1));
var G__12438 = cljs.core.next(lines__$1);
var G__12439 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__12440 = result__$1;
gline = G__12437;
lines__$1 = G__12438;
relseg = G__12439;
result = G__12440;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__11683){
var vec__11684 = p__11683;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11684,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11684,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11684,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11684,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11684,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__11689){
var vec__11690 = p__11689;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11690,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11690,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11690,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11690,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11690,(4),null);
var seg = vec__11690;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__11695){
var vec__11696 = p__11695;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11696,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11696,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11696,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11696,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11696,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5802__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5802__auto__)){
var name = temp__5802__auto__;
var idx = (function (){var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5802__auto____$1)){
var idx = temp__5802__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__11704 = cljs.core.seq(infos);
var chunk__11705 = null;
var count__11706 = (0);
var i__11707 = (0);
while(true){
if((i__11707 < count__11706)){
var info = chunk__11705.cljs$core$IIndexed$_nth$arity$2(null,i__11707);
var segv_12443 = info__GT_segv(info,source_idx,line,col);
var gline_12444 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12445 = cljs.core.count(cljs.core.deref(lines));
if((gline_12444 > (lc_12445 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11704,chunk__11705,count__11706,i__11707,segv_12443,gline_12444,lc_12445,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_12444 - (lc_12445 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12443], null));
});})(seq__11704,chunk__11705,count__11706,i__11707,segv_12443,gline_12444,lc_12445,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11704,chunk__11705,count__11706,i__11707,segv_12443,gline_12444,lc_12445,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12444], null),cljs.core.conj,segv_12443);
});})(seq__11704,chunk__11705,count__11706,i__11707,segv_12443,gline_12444,lc_12445,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__12448 = seq__11704;
var G__12449 = chunk__11705;
var G__12450 = count__11706;
var G__12451 = (i__11707 + (1));
seq__11704 = G__12448;
chunk__11705 = G__12449;
count__11706 = G__12450;
i__11707 = G__12451;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11704);
if(temp__5804__auto__){
var seq__11704__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11704__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11704__$1);
var G__12452 = cljs.core.chunk_rest(seq__11704__$1);
var G__12453 = c__5525__auto__;
var G__12454 = cljs.core.count(c__5525__auto__);
var G__12455 = (0);
seq__11704 = G__12452;
chunk__11705 = G__12453;
count__11706 = G__12454;
i__11707 = G__12455;
continue;
} else {
var info = cljs.core.first(seq__11704__$1);
var segv_12456 = info__GT_segv(info,source_idx,line,col);
var gline_12457 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12458 = cljs.core.count(cljs.core.deref(lines));
if((gline_12457 > (lc_12458 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11704,chunk__11705,count__11706,i__11707,segv_12456,gline_12457,lc_12458,info,seq__11704__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_12457 - (lc_12458 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12456], null));
});})(seq__11704,chunk__11705,count__11706,i__11707,segv_12456,gline_12457,lc_12458,info,seq__11704__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11704,chunk__11705,count__11706,i__11707,segv_12456,gline_12457,lc_12458,info,seq__11704__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12457], null),cljs.core.conj,segv_12456);
});})(seq__11704,chunk__11705,count__11706,i__11707,segv_12456,gline_12457,lc_12458,info,seq__11704__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__12460 = cljs.core.next(seq__11704__$1);
var G__12461 = null;
var G__12462 = (0);
var G__12463 = (0);
seq__11704 = G__12460;
chunk__11705 = G__12461;
count__11706 = G__12462;
i__11707 = G__12463;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__11724_12464 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__11725_12465 = null;
var count__11726_12466 = (0);
var i__11727_12467 = (0);
while(true){
if((i__11727_12467 < count__11726_12466)){
var vec__11921_12470 = chunk__11725_12465.cljs$core$IIndexed$_nth$arity$2(null,i__11727_12467);
var source_idx_12471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11921_12470,(0),null);
var vec__11924_12472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11921_12470,(1),null);
var __12473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11924_12472,(0),null);
var lines_12474__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11924_12472,(1),null);
var seq__11927_12475 = cljs.core.seq(lines_12474__$1);
var chunk__11928_12476 = null;
var count__11929_12477 = (0);
var i__11930_12478 = (0);
while(true){
if((i__11930_12478 < count__11929_12477)){
var vec__11984_12481 = chunk__11928_12476.cljs$core$IIndexed$_nth$arity$2(null,i__11930_12478);
var line_12482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984_12481,(0),null);
var cols_12483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984_12481,(1),null);
var seq__11988_12484 = cljs.core.seq(cols_12483);
var chunk__11989_12485 = null;
var count__11990_12486 = (0);
var i__11991_12487 = (0);
while(true){
if((i__11991_12487 < count__11990_12486)){
var vec__12000_12488 = chunk__11989_12485.cljs$core$IIndexed$_nth$arity$2(null,i__11991_12487);
var col_12489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12000_12488,(0),null);
var infos_12490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12000_12488,(1),null);
encode_cols(infos_12490,source_idx_12471,line_12482,col_12489);


var G__12491 = seq__11988_12484;
var G__12492 = chunk__11989_12485;
var G__12493 = count__11990_12486;
var G__12494 = (i__11991_12487 + (1));
seq__11988_12484 = G__12491;
chunk__11989_12485 = G__12492;
count__11990_12486 = G__12493;
i__11991_12487 = G__12494;
continue;
} else {
var temp__5804__auto___12495 = cljs.core.seq(seq__11988_12484);
if(temp__5804__auto___12495){
var seq__11988_12496__$1 = temp__5804__auto___12495;
if(cljs.core.chunked_seq_QMARK_(seq__11988_12496__$1)){
var c__5525__auto___12497 = cljs.core.chunk_first(seq__11988_12496__$1);
var G__12498 = cljs.core.chunk_rest(seq__11988_12496__$1);
var G__12499 = c__5525__auto___12497;
var G__12500 = cljs.core.count(c__5525__auto___12497);
var G__12501 = (0);
seq__11988_12484 = G__12498;
chunk__11989_12485 = G__12499;
count__11990_12486 = G__12500;
i__11991_12487 = G__12501;
continue;
} else {
var vec__12003_12502 = cljs.core.first(seq__11988_12496__$1);
var col_12503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12003_12502,(0),null);
var infos_12504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12003_12502,(1),null);
encode_cols(infos_12504,source_idx_12471,line_12482,col_12503);


var G__12505 = cljs.core.next(seq__11988_12496__$1);
var G__12506 = null;
var G__12507 = (0);
var G__12508 = (0);
seq__11988_12484 = G__12505;
chunk__11989_12485 = G__12506;
count__11990_12486 = G__12507;
i__11991_12487 = G__12508;
continue;
}
} else {
}
}
break;
}


var G__12509 = seq__11927_12475;
var G__12510 = chunk__11928_12476;
var G__12511 = count__11929_12477;
var G__12512 = (i__11930_12478 + (1));
seq__11927_12475 = G__12509;
chunk__11928_12476 = G__12510;
count__11929_12477 = G__12511;
i__11930_12478 = G__12512;
continue;
} else {
var temp__5804__auto___12513 = cljs.core.seq(seq__11927_12475);
if(temp__5804__auto___12513){
var seq__11927_12514__$1 = temp__5804__auto___12513;
if(cljs.core.chunked_seq_QMARK_(seq__11927_12514__$1)){
var c__5525__auto___12515 = cljs.core.chunk_first(seq__11927_12514__$1);
var G__12516 = cljs.core.chunk_rest(seq__11927_12514__$1);
var G__12517 = c__5525__auto___12515;
var G__12518 = cljs.core.count(c__5525__auto___12515);
var G__12519 = (0);
seq__11927_12475 = G__12516;
chunk__11928_12476 = G__12517;
count__11929_12477 = G__12518;
i__11930_12478 = G__12519;
continue;
} else {
var vec__12008_12520 = cljs.core.first(seq__11927_12514__$1);
var line_12521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12008_12520,(0),null);
var cols_12522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12008_12520,(1),null);
var seq__12012_12523 = cljs.core.seq(cols_12522);
var chunk__12013_12524 = null;
var count__12014_12525 = (0);
var i__12015_12526 = (0);
while(true){
if((i__12015_12526 < count__12014_12525)){
var vec__12026_12527 = chunk__12013_12524.cljs$core$IIndexed$_nth$arity$2(null,i__12015_12526);
var col_12528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12026_12527,(0),null);
var infos_12529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12026_12527,(1),null);
encode_cols(infos_12529,source_idx_12471,line_12521,col_12528);


var G__12530 = seq__12012_12523;
var G__12531 = chunk__12013_12524;
var G__12532 = count__12014_12525;
var G__12533 = (i__12015_12526 + (1));
seq__12012_12523 = G__12530;
chunk__12013_12524 = G__12531;
count__12014_12525 = G__12532;
i__12015_12526 = G__12533;
continue;
} else {
var temp__5804__auto___12534__$1 = cljs.core.seq(seq__12012_12523);
if(temp__5804__auto___12534__$1){
var seq__12012_12535__$1 = temp__5804__auto___12534__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12012_12535__$1)){
var c__5525__auto___12536 = cljs.core.chunk_first(seq__12012_12535__$1);
var G__12537 = cljs.core.chunk_rest(seq__12012_12535__$1);
var G__12538 = c__5525__auto___12536;
var G__12539 = cljs.core.count(c__5525__auto___12536);
var G__12540 = (0);
seq__12012_12523 = G__12537;
chunk__12013_12524 = G__12538;
count__12014_12525 = G__12539;
i__12015_12526 = G__12540;
continue;
} else {
var vec__12029_12541 = cljs.core.first(seq__12012_12535__$1);
var col_12542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12029_12541,(0),null);
var infos_12543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12029_12541,(1),null);
encode_cols(infos_12543,source_idx_12471,line_12521,col_12542);


var G__12544 = cljs.core.next(seq__12012_12535__$1);
var G__12545 = null;
var G__12546 = (0);
var G__12547 = (0);
seq__12012_12523 = G__12544;
chunk__12013_12524 = G__12545;
count__12014_12525 = G__12546;
i__12015_12526 = G__12547;
continue;
}
} else {
}
}
break;
}


var G__12548 = cljs.core.next(seq__11927_12514__$1);
var G__12549 = null;
var G__12550 = (0);
var G__12551 = (0);
seq__11927_12475 = G__12548;
chunk__11928_12476 = G__12549;
count__11929_12477 = G__12550;
i__11930_12478 = G__12551;
continue;
}
} else {
}
}
break;
}


var G__12552 = seq__11724_12464;
var G__12553 = chunk__11725_12465;
var G__12554 = count__11726_12466;
var G__12555 = (i__11727_12467 + (1));
seq__11724_12464 = G__12552;
chunk__11725_12465 = G__12553;
count__11726_12466 = G__12554;
i__11727_12467 = G__12555;
continue;
} else {
var temp__5804__auto___12556 = cljs.core.seq(seq__11724_12464);
if(temp__5804__auto___12556){
var seq__11724_12557__$1 = temp__5804__auto___12556;
if(cljs.core.chunked_seq_QMARK_(seq__11724_12557__$1)){
var c__5525__auto___12558 = cljs.core.chunk_first(seq__11724_12557__$1);
var G__12560 = cljs.core.chunk_rest(seq__11724_12557__$1);
var G__12561 = c__5525__auto___12558;
var G__12562 = cljs.core.count(c__5525__auto___12558);
var G__12563 = (0);
seq__11724_12464 = G__12560;
chunk__11725_12465 = G__12561;
count__11726_12466 = G__12562;
i__11727_12467 = G__12563;
continue;
} else {
var vec__12032_12565 = cljs.core.first(seq__11724_12557__$1);
var source_idx_12566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12032_12565,(0),null);
var vec__12035_12567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12032_12565,(1),null);
var __12568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12035_12567,(0),null);
var lines_12569__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12035_12567,(1),null);
var seq__12038_12570 = cljs.core.seq(lines_12569__$1);
var chunk__12039_12571 = null;
var count__12040_12572 = (0);
var i__12041_12573 = (0);
while(true){
if((i__12041_12573 < count__12040_12572)){
var vec__12084_12574 = chunk__12039_12571.cljs$core$IIndexed$_nth$arity$2(null,i__12041_12573);
var line_12575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12084_12574,(0),null);
var cols_12576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12084_12574,(1),null);
var seq__12088_12577 = cljs.core.seq(cols_12576);
var chunk__12090_12578 = null;
var count__12093_12579 = (0);
var i__12094_12580 = (0);
while(true){
if((i__12094_12580 < count__12093_12579)){
var vec__12105_12581 = chunk__12090_12578.cljs$core$IIndexed$_nth$arity$2(null,i__12094_12580);
var col_12582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12105_12581,(0),null);
var infos_12583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12105_12581,(1),null);
encode_cols(infos_12583,source_idx_12566,line_12575,col_12582);


var G__12584 = seq__12088_12577;
var G__12585 = chunk__12090_12578;
var G__12586 = count__12093_12579;
var G__12587 = (i__12094_12580 + (1));
seq__12088_12577 = G__12584;
chunk__12090_12578 = G__12585;
count__12093_12579 = G__12586;
i__12094_12580 = G__12587;
continue;
} else {
var temp__5804__auto___12589__$1 = cljs.core.seq(seq__12088_12577);
if(temp__5804__auto___12589__$1){
var seq__12088_12590__$1 = temp__5804__auto___12589__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12088_12590__$1)){
var c__5525__auto___12592 = cljs.core.chunk_first(seq__12088_12590__$1);
var G__12593 = cljs.core.chunk_rest(seq__12088_12590__$1);
var G__12594 = c__5525__auto___12592;
var G__12595 = cljs.core.count(c__5525__auto___12592);
var G__12596 = (0);
seq__12088_12577 = G__12593;
chunk__12090_12578 = G__12594;
count__12093_12579 = G__12595;
i__12094_12580 = G__12596;
continue;
} else {
var vec__12108_12597 = cljs.core.first(seq__12088_12590__$1);
var col_12598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12108_12597,(0),null);
var infos_12599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12108_12597,(1),null);
encode_cols(infos_12599,source_idx_12566,line_12575,col_12598);


var G__12600 = cljs.core.next(seq__12088_12590__$1);
var G__12601 = null;
var G__12602 = (0);
var G__12603 = (0);
seq__12088_12577 = G__12600;
chunk__12090_12578 = G__12601;
count__12093_12579 = G__12602;
i__12094_12580 = G__12603;
continue;
}
} else {
}
}
break;
}


var G__12604 = seq__12038_12570;
var G__12605 = chunk__12039_12571;
var G__12606 = count__12040_12572;
var G__12607 = (i__12041_12573 + (1));
seq__12038_12570 = G__12604;
chunk__12039_12571 = G__12605;
count__12040_12572 = G__12606;
i__12041_12573 = G__12607;
continue;
} else {
var temp__5804__auto___12608__$1 = cljs.core.seq(seq__12038_12570);
if(temp__5804__auto___12608__$1){
var seq__12038_12609__$1 = temp__5804__auto___12608__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12038_12609__$1)){
var c__5525__auto___12610 = cljs.core.chunk_first(seq__12038_12609__$1);
var G__12611 = cljs.core.chunk_rest(seq__12038_12609__$1);
var G__12612 = c__5525__auto___12610;
var G__12613 = cljs.core.count(c__5525__auto___12610);
var G__12614 = (0);
seq__12038_12570 = G__12611;
chunk__12039_12571 = G__12612;
count__12040_12572 = G__12613;
i__12041_12573 = G__12614;
continue;
} else {
var vec__12112_12615 = cljs.core.first(seq__12038_12609__$1);
var line_12616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12112_12615,(0),null);
var cols_12617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12112_12615,(1),null);
var seq__12115_12618 = cljs.core.seq(cols_12617);
var chunk__12116_12619 = null;
var count__12117_12620 = (0);
var i__12118_12621 = (0);
while(true){
if((i__12118_12621 < count__12117_12620)){
var vec__12127_12622 = chunk__12116_12619.cljs$core$IIndexed$_nth$arity$2(null,i__12118_12621);
var col_12623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12127_12622,(0),null);
var infos_12624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12127_12622,(1),null);
encode_cols(infos_12624,source_idx_12566,line_12616,col_12623);


var G__12625 = seq__12115_12618;
var G__12626 = chunk__12116_12619;
var G__12627 = count__12117_12620;
var G__12628 = (i__12118_12621 + (1));
seq__12115_12618 = G__12625;
chunk__12116_12619 = G__12626;
count__12117_12620 = G__12627;
i__12118_12621 = G__12628;
continue;
} else {
var temp__5804__auto___12629__$2 = cljs.core.seq(seq__12115_12618);
if(temp__5804__auto___12629__$2){
var seq__12115_12630__$1 = temp__5804__auto___12629__$2;
if(cljs.core.chunked_seq_QMARK_(seq__12115_12630__$1)){
var c__5525__auto___12631 = cljs.core.chunk_first(seq__12115_12630__$1);
var G__12632 = cljs.core.chunk_rest(seq__12115_12630__$1);
var G__12633 = c__5525__auto___12631;
var G__12634 = cljs.core.count(c__5525__auto___12631);
var G__12635 = (0);
seq__12115_12618 = G__12632;
chunk__12116_12619 = G__12633;
count__12117_12620 = G__12634;
i__12118_12621 = G__12635;
continue;
} else {
var vec__12132_12637 = cljs.core.first(seq__12115_12630__$1);
var col_12638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12132_12637,(0),null);
var infos_12639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12132_12637,(1),null);
encode_cols(infos_12639,source_idx_12566,line_12616,col_12638);


var G__12640 = cljs.core.next(seq__12115_12630__$1);
var G__12641 = null;
var G__12642 = (0);
var G__12643 = (0);
seq__12115_12618 = G__12640;
chunk__12116_12619 = G__12641;
count__12117_12620 = G__12642;
i__12118_12621 = G__12643;
continue;
}
} else {
}
}
break;
}


var G__12644 = cljs.core.next(seq__12038_12609__$1);
var G__12645 = null;
var G__12646 = (0);
var G__12647 = (0);
seq__12038_12570 = G__12644;
chunk__12039_12571 = G__12645;
count__12040_12572 = G__12646;
i__12041_12573 = G__12647;
continue;
}
} else {
}
}
break;
}


var G__12650 = cljs.core.next(seq__11724_12557__$1);
var G__12651 = null;
var G__12652 = (0);
var G__12653 = (0);
seq__11724_12464 = G__12650;
chunk__11725_12465 = G__12651;
count__11726_12466 = G__12652;
i__11727_12467 = G__12653;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__12135 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__11699_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11699_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__11700_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11700_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11701_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__11701_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__12137 = G__12135;
cljs.source_map.goog$module$goog$object.set(G__12137,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__12137;
} else {
return G__12135;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__12142 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12142,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12142,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__12145 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12145,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12145,(1),null);
var G__12667 = cljs.core.next(col_map_seq);
var G__12668 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__12145,col,infos,vec__12142,line,col_map){
return (function (v,p__12148){
var map__12149 = p__12148;
var map__12149__$1 = cljs.core.__destructure_map(map__12149);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12149__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12149__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__12145,col,infos,vec__12142,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__12667;
new_cols = G__12668;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__12669 = cljs.core.next(line_map_seq);
var G__12670 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__12669;
new_lines = G__12670;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__12151_12672 = cljs.core.seq(reverse_map);
var chunk__12152_12673 = null;
var count__12153_12674 = (0);
var i__12154_12675 = (0);
while(true){
if((i__12154_12675 < count__12153_12674)){
var vec__12293_12676 = chunk__12152_12673.cljs$core$IIndexed$_nth$arity$2(null,i__12154_12675);
var line_12677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12293_12676,(0),null);
var columns_12678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12293_12676,(1),null);
var seq__12296_12679 = cljs.core.seq(columns_12678);
var chunk__12297_12680 = null;
var count__12298_12681 = (0);
var i__12299_12682 = (0);
while(true){
if((i__12299_12682 < count__12298_12681)){
var vec__12332_12683 = chunk__12297_12680.cljs$core$IIndexed$_nth$arity$2(null,i__12299_12682);
var column_12684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12332_12683,(0),null);
var column_info_12685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12332_12683,(1),null);
var seq__12335_12688 = cljs.core.seq(column_info_12685);
var chunk__12336_12689 = null;
var count__12337_12690 = (0);
var i__12338_12691 = (0);
while(true){
if((i__12338_12691 < count__12337_12690)){
var map__12342_12692 = chunk__12336_12689.cljs$core$IIndexed$_nth$arity$2(null,i__12338_12691);
var map__12342_12693__$1 = cljs.core.__destructure_map(map__12342_12692);
var gline_12694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12342_12693__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12342_12693__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12342_12693__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12694], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__12335_12688,chunk__12336_12689,count__12337_12690,i__12338_12691,seq__12296_12679,chunk__12297_12680,count__12298_12681,i__12299_12682,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12342_12692,map__12342_12693__$1,gline_12694,gcol_12695,name_12696,vec__12332_12683,column_12684,column_info_12685,vec__12293_12676,line_12677,columns_12678,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12695], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12677,new cljs.core.Keyword(null,"col","col",-1959363084),column_12684,new cljs.core.Keyword(null,"name","name",1843675177),name_12696], null));
});})(seq__12335_12688,chunk__12336_12689,count__12337_12690,i__12338_12691,seq__12296_12679,chunk__12297_12680,count__12298_12681,i__12299_12682,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12342_12692,map__12342_12693__$1,gline_12694,gcol_12695,name_12696,vec__12332_12683,column_12684,column_info_12685,vec__12293_12676,line_12677,columns_12678,inverted))
,cljs.core.sorted_map()));


var G__12699 = seq__12335_12688;
var G__12700 = chunk__12336_12689;
var G__12701 = count__12337_12690;
var G__12702 = (i__12338_12691 + (1));
seq__12335_12688 = G__12699;
chunk__12336_12689 = G__12700;
count__12337_12690 = G__12701;
i__12338_12691 = G__12702;
continue;
} else {
var temp__5804__auto___12703 = cljs.core.seq(seq__12335_12688);
if(temp__5804__auto___12703){
var seq__12335_12704__$1 = temp__5804__auto___12703;
if(cljs.core.chunked_seq_QMARK_(seq__12335_12704__$1)){
var c__5525__auto___12705 = cljs.core.chunk_first(seq__12335_12704__$1);
var G__12706 = cljs.core.chunk_rest(seq__12335_12704__$1);
var G__12707 = c__5525__auto___12705;
var G__12708 = cljs.core.count(c__5525__auto___12705);
var G__12709 = (0);
seq__12335_12688 = G__12706;
chunk__12336_12689 = G__12707;
count__12337_12690 = G__12708;
i__12338_12691 = G__12709;
continue;
} else {
var map__12344_12710 = cljs.core.first(seq__12335_12704__$1);
var map__12344_12711__$1 = cljs.core.__destructure_map(map__12344_12710);
var gline_12712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12344_12711__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12344_12711__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12344_12711__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12712], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__12335_12688,chunk__12336_12689,count__12337_12690,i__12338_12691,seq__12296_12679,chunk__12297_12680,count__12298_12681,i__12299_12682,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12344_12710,map__12344_12711__$1,gline_12712,gcol_12713,name_12714,seq__12335_12704__$1,temp__5804__auto___12703,vec__12332_12683,column_12684,column_info_12685,vec__12293_12676,line_12677,columns_12678,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12713], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12677,new cljs.core.Keyword(null,"col","col",-1959363084),column_12684,new cljs.core.Keyword(null,"name","name",1843675177),name_12714], null));
});})(seq__12335_12688,chunk__12336_12689,count__12337_12690,i__12338_12691,seq__12296_12679,chunk__12297_12680,count__12298_12681,i__12299_12682,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12344_12710,map__12344_12711__$1,gline_12712,gcol_12713,name_12714,seq__12335_12704__$1,temp__5804__auto___12703,vec__12332_12683,column_12684,column_info_12685,vec__12293_12676,line_12677,columns_12678,inverted))
,cljs.core.sorted_map()));


var G__12715 = cljs.core.next(seq__12335_12704__$1);
var G__12716 = null;
var G__12717 = (0);
var G__12718 = (0);
seq__12335_12688 = G__12715;
chunk__12336_12689 = G__12716;
count__12337_12690 = G__12717;
i__12338_12691 = G__12718;
continue;
}
} else {
}
}
break;
}


var G__12719 = seq__12296_12679;
var G__12720 = chunk__12297_12680;
var G__12721 = count__12298_12681;
var G__12722 = (i__12299_12682 + (1));
seq__12296_12679 = G__12719;
chunk__12297_12680 = G__12720;
count__12298_12681 = G__12721;
i__12299_12682 = G__12722;
continue;
} else {
var temp__5804__auto___12723 = cljs.core.seq(seq__12296_12679);
if(temp__5804__auto___12723){
var seq__12296_12724__$1 = temp__5804__auto___12723;
if(cljs.core.chunked_seq_QMARK_(seq__12296_12724__$1)){
var c__5525__auto___12725 = cljs.core.chunk_first(seq__12296_12724__$1);
var G__12726 = cljs.core.chunk_rest(seq__12296_12724__$1);
var G__12727 = c__5525__auto___12725;
var G__12728 = cljs.core.count(c__5525__auto___12725);
var G__12729 = (0);
seq__12296_12679 = G__12726;
chunk__12297_12680 = G__12727;
count__12298_12681 = G__12728;
i__12299_12682 = G__12729;
continue;
} else {
var vec__12345_12730 = cljs.core.first(seq__12296_12724__$1);
var column_12731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12345_12730,(0),null);
var column_info_12732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12345_12730,(1),null);
var seq__12348_12733 = cljs.core.seq(column_info_12732);
var chunk__12349_12734 = null;
var count__12350_12735 = (0);
var i__12351_12736 = (0);
while(true){
if((i__12351_12736 < count__12350_12735)){
var map__12356_12737 = chunk__12349_12734.cljs$core$IIndexed$_nth$arity$2(null,i__12351_12736);
var map__12356_12738__$1 = cljs.core.__destructure_map(map__12356_12737);
var gline_12739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12356_12738__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12356_12738__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12356_12738__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12739], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__12348_12733,chunk__12349_12734,count__12350_12735,i__12351_12736,seq__12296_12679,chunk__12297_12680,count__12298_12681,i__12299_12682,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12356_12737,map__12356_12738__$1,gline_12739,gcol_12740,name_12741,vec__12345_12730,column_12731,column_info_12732,seq__12296_12724__$1,temp__5804__auto___12723,vec__12293_12676,line_12677,columns_12678,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12740], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12677,new cljs.core.Keyword(null,"col","col",-1959363084),column_12731,new cljs.core.Keyword(null,"name","name",1843675177),name_12741], null));
});})(seq__12348_12733,chunk__12349_12734,count__12350_12735,i__12351_12736,seq__12296_12679,chunk__12297_12680,count__12298_12681,i__12299_12682,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12356_12737,map__12356_12738__$1,gline_12739,gcol_12740,name_12741,vec__12345_12730,column_12731,column_info_12732,seq__12296_12724__$1,temp__5804__auto___12723,vec__12293_12676,line_12677,columns_12678,inverted))
,cljs.core.sorted_map()));


var G__12742 = seq__12348_12733;
var G__12743 = chunk__12349_12734;
var G__12744 = count__12350_12735;
var G__12745 = (i__12351_12736 + (1));
seq__12348_12733 = G__12742;
chunk__12349_12734 = G__12743;
count__12350_12735 = G__12744;
i__12351_12736 = G__12745;
continue;
} else {
var temp__5804__auto___12746__$1 = cljs.core.seq(seq__12348_12733);
if(temp__5804__auto___12746__$1){
var seq__12348_12747__$1 = temp__5804__auto___12746__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12348_12747__$1)){
var c__5525__auto___12748 = cljs.core.chunk_first(seq__12348_12747__$1);
var G__12749 = cljs.core.chunk_rest(seq__12348_12747__$1);
var G__12750 = c__5525__auto___12748;
var G__12751 = cljs.core.count(c__5525__auto___12748);
var G__12752 = (0);
seq__12348_12733 = G__12749;
chunk__12349_12734 = G__12750;
count__12350_12735 = G__12751;
i__12351_12736 = G__12752;
continue;
} else {
var map__12357_12753 = cljs.core.first(seq__12348_12747__$1);
var map__12357_12754__$1 = cljs.core.__destructure_map(map__12357_12753);
var gline_12756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12357_12754__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12357_12754__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12357_12754__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12756], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__12348_12733,chunk__12349_12734,count__12350_12735,i__12351_12736,seq__12296_12679,chunk__12297_12680,count__12298_12681,i__12299_12682,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12357_12753,map__12357_12754__$1,gline_12756,gcol_12757,name_12758,seq__12348_12747__$1,temp__5804__auto___12746__$1,vec__12345_12730,column_12731,column_info_12732,seq__12296_12724__$1,temp__5804__auto___12723,vec__12293_12676,line_12677,columns_12678,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12757], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12677,new cljs.core.Keyword(null,"col","col",-1959363084),column_12731,new cljs.core.Keyword(null,"name","name",1843675177),name_12758], null));
});})(seq__12348_12733,chunk__12349_12734,count__12350_12735,i__12351_12736,seq__12296_12679,chunk__12297_12680,count__12298_12681,i__12299_12682,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12357_12753,map__12357_12754__$1,gline_12756,gcol_12757,name_12758,seq__12348_12747__$1,temp__5804__auto___12746__$1,vec__12345_12730,column_12731,column_info_12732,seq__12296_12724__$1,temp__5804__auto___12723,vec__12293_12676,line_12677,columns_12678,inverted))
,cljs.core.sorted_map()));


var G__12762 = cljs.core.next(seq__12348_12747__$1);
var G__12763 = null;
var G__12764 = (0);
var G__12765 = (0);
seq__12348_12733 = G__12762;
chunk__12349_12734 = G__12763;
count__12350_12735 = G__12764;
i__12351_12736 = G__12765;
continue;
}
} else {
}
}
break;
}


var G__12766 = cljs.core.next(seq__12296_12724__$1);
var G__12767 = null;
var G__12768 = (0);
var G__12769 = (0);
seq__12296_12679 = G__12766;
chunk__12297_12680 = G__12767;
count__12298_12681 = G__12768;
i__12299_12682 = G__12769;
continue;
}
} else {
}
}
break;
}


var G__12770 = seq__12151_12672;
var G__12771 = chunk__12152_12673;
var G__12772 = count__12153_12674;
var G__12773 = (i__12154_12675 + (1));
seq__12151_12672 = G__12770;
chunk__12152_12673 = G__12771;
count__12153_12674 = G__12772;
i__12154_12675 = G__12773;
continue;
} else {
var temp__5804__auto___12774 = cljs.core.seq(seq__12151_12672);
if(temp__5804__auto___12774){
var seq__12151_12775__$1 = temp__5804__auto___12774;
if(cljs.core.chunked_seq_QMARK_(seq__12151_12775__$1)){
var c__5525__auto___12776 = cljs.core.chunk_first(seq__12151_12775__$1);
var G__12777 = cljs.core.chunk_rest(seq__12151_12775__$1);
var G__12778 = c__5525__auto___12776;
var G__12779 = cljs.core.count(c__5525__auto___12776);
var G__12780 = (0);
seq__12151_12672 = G__12777;
chunk__12152_12673 = G__12778;
count__12153_12674 = G__12779;
i__12154_12675 = G__12780;
continue;
} else {
var vec__12358_12781 = cljs.core.first(seq__12151_12775__$1);
var line_12782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12358_12781,(0),null);
var columns_12783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12358_12781,(1),null);
var seq__12361_12784 = cljs.core.seq(columns_12783);
var chunk__12362_12785 = null;
var count__12363_12786 = (0);
var i__12364_12787 = (0);
while(true){
if((i__12364_12787 < count__12363_12786)){
var vec__12391_12788 = chunk__12362_12785.cljs$core$IIndexed$_nth$arity$2(null,i__12364_12787);
var column_12789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12391_12788,(0),null);
var column_info_12790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12391_12788,(1),null);
var seq__12394_12792 = cljs.core.seq(column_info_12790);
var chunk__12395_12793 = null;
var count__12396_12794 = (0);
var i__12397_12795 = (0);
while(true){
if((i__12397_12795 < count__12396_12794)){
var map__12400_12799 = chunk__12395_12793.cljs$core$IIndexed$_nth$arity$2(null,i__12397_12795);
var map__12400_12800__$1 = cljs.core.__destructure_map(map__12400_12799);
var gline_12801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400_12800__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400_12800__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12400_12800__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12801], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__12394_12792,chunk__12395_12793,count__12396_12794,i__12397_12795,seq__12361_12784,chunk__12362_12785,count__12363_12786,i__12364_12787,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12400_12799,map__12400_12800__$1,gline_12801,gcol_12802,name_12803,vec__12391_12788,column_12789,column_info_12790,vec__12358_12781,line_12782,columns_12783,seq__12151_12775__$1,temp__5804__auto___12774,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12802], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12782,new cljs.core.Keyword(null,"col","col",-1959363084),column_12789,new cljs.core.Keyword(null,"name","name",1843675177),name_12803], null));
});})(seq__12394_12792,chunk__12395_12793,count__12396_12794,i__12397_12795,seq__12361_12784,chunk__12362_12785,count__12363_12786,i__12364_12787,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12400_12799,map__12400_12800__$1,gline_12801,gcol_12802,name_12803,vec__12391_12788,column_12789,column_info_12790,vec__12358_12781,line_12782,columns_12783,seq__12151_12775__$1,temp__5804__auto___12774,inverted))
,cljs.core.sorted_map()));


var G__12804 = seq__12394_12792;
var G__12805 = chunk__12395_12793;
var G__12806 = count__12396_12794;
var G__12807 = (i__12397_12795 + (1));
seq__12394_12792 = G__12804;
chunk__12395_12793 = G__12805;
count__12396_12794 = G__12806;
i__12397_12795 = G__12807;
continue;
} else {
var temp__5804__auto___12808__$1 = cljs.core.seq(seq__12394_12792);
if(temp__5804__auto___12808__$1){
var seq__12394_12809__$1 = temp__5804__auto___12808__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12394_12809__$1)){
var c__5525__auto___12810 = cljs.core.chunk_first(seq__12394_12809__$1);
var G__12811 = cljs.core.chunk_rest(seq__12394_12809__$1);
var G__12812 = c__5525__auto___12810;
var G__12813 = cljs.core.count(c__5525__auto___12810);
var G__12814 = (0);
seq__12394_12792 = G__12811;
chunk__12395_12793 = G__12812;
count__12396_12794 = G__12813;
i__12397_12795 = G__12814;
continue;
} else {
var map__12401_12815 = cljs.core.first(seq__12394_12809__$1);
var map__12401_12816__$1 = cljs.core.__destructure_map(map__12401_12815);
var gline_12817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12401_12816__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12401_12816__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12401_12816__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12817], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__12394_12792,chunk__12395_12793,count__12396_12794,i__12397_12795,seq__12361_12784,chunk__12362_12785,count__12363_12786,i__12364_12787,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12401_12815,map__12401_12816__$1,gline_12817,gcol_12818,name_12819,seq__12394_12809__$1,temp__5804__auto___12808__$1,vec__12391_12788,column_12789,column_info_12790,vec__12358_12781,line_12782,columns_12783,seq__12151_12775__$1,temp__5804__auto___12774,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12818], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12782,new cljs.core.Keyword(null,"col","col",-1959363084),column_12789,new cljs.core.Keyword(null,"name","name",1843675177),name_12819], null));
});})(seq__12394_12792,chunk__12395_12793,count__12396_12794,i__12397_12795,seq__12361_12784,chunk__12362_12785,count__12363_12786,i__12364_12787,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12401_12815,map__12401_12816__$1,gline_12817,gcol_12818,name_12819,seq__12394_12809__$1,temp__5804__auto___12808__$1,vec__12391_12788,column_12789,column_info_12790,vec__12358_12781,line_12782,columns_12783,seq__12151_12775__$1,temp__5804__auto___12774,inverted))
,cljs.core.sorted_map()));


var G__12820 = cljs.core.next(seq__12394_12809__$1);
var G__12821 = null;
var G__12822 = (0);
var G__12823 = (0);
seq__12394_12792 = G__12820;
chunk__12395_12793 = G__12821;
count__12396_12794 = G__12822;
i__12397_12795 = G__12823;
continue;
}
} else {
}
}
break;
}


var G__12824 = seq__12361_12784;
var G__12825 = chunk__12362_12785;
var G__12826 = count__12363_12786;
var G__12827 = (i__12364_12787 + (1));
seq__12361_12784 = G__12824;
chunk__12362_12785 = G__12825;
count__12363_12786 = G__12826;
i__12364_12787 = G__12827;
continue;
} else {
var temp__5804__auto___12828__$1 = cljs.core.seq(seq__12361_12784);
if(temp__5804__auto___12828__$1){
var seq__12361_12829__$1 = temp__5804__auto___12828__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12361_12829__$1)){
var c__5525__auto___12830 = cljs.core.chunk_first(seq__12361_12829__$1);
var G__12831 = cljs.core.chunk_rest(seq__12361_12829__$1);
var G__12832 = c__5525__auto___12830;
var G__12833 = cljs.core.count(c__5525__auto___12830);
var G__12834 = (0);
seq__12361_12784 = G__12831;
chunk__12362_12785 = G__12832;
count__12363_12786 = G__12833;
i__12364_12787 = G__12834;
continue;
} else {
var vec__12405_12835 = cljs.core.first(seq__12361_12829__$1);
var column_12836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12405_12835,(0),null);
var column_info_12837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12405_12835,(1),null);
var seq__12408_12838 = cljs.core.seq(column_info_12837);
var chunk__12409_12839 = null;
var count__12410_12840 = (0);
var i__12411_12841 = (0);
while(true){
if((i__12411_12841 < count__12410_12840)){
var map__12416_12842 = chunk__12409_12839.cljs$core$IIndexed$_nth$arity$2(null,i__12411_12841);
var map__12416_12843__$1 = cljs.core.__destructure_map(map__12416_12842);
var gline_12844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12416_12843__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12416_12843__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12416_12843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12844], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__12408_12838,chunk__12409_12839,count__12410_12840,i__12411_12841,seq__12361_12784,chunk__12362_12785,count__12363_12786,i__12364_12787,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12416_12842,map__12416_12843__$1,gline_12844,gcol_12845,name_12846,vec__12405_12835,column_12836,column_info_12837,seq__12361_12829__$1,temp__5804__auto___12828__$1,vec__12358_12781,line_12782,columns_12783,seq__12151_12775__$1,temp__5804__auto___12774,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12845], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12782,new cljs.core.Keyword(null,"col","col",-1959363084),column_12836,new cljs.core.Keyword(null,"name","name",1843675177),name_12846], null));
});})(seq__12408_12838,chunk__12409_12839,count__12410_12840,i__12411_12841,seq__12361_12784,chunk__12362_12785,count__12363_12786,i__12364_12787,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12416_12842,map__12416_12843__$1,gline_12844,gcol_12845,name_12846,vec__12405_12835,column_12836,column_info_12837,seq__12361_12829__$1,temp__5804__auto___12828__$1,vec__12358_12781,line_12782,columns_12783,seq__12151_12775__$1,temp__5804__auto___12774,inverted))
,cljs.core.sorted_map()));


var G__12852 = seq__12408_12838;
var G__12853 = chunk__12409_12839;
var G__12854 = count__12410_12840;
var G__12855 = (i__12411_12841 + (1));
seq__12408_12838 = G__12852;
chunk__12409_12839 = G__12853;
count__12410_12840 = G__12854;
i__12411_12841 = G__12855;
continue;
} else {
var temp__5804__auto___12856__$2 = cljs.core.seq(seq__12408_12838);
if(temp__5804__auto___12856__$2){
var seq__12408_12857__$1 = temp__5804__auto___12856__$2;
if(cljs.core.chunked_seq_QMARK_(seq__12408_12857__$1)){
var c__5525__auto___12858 = cljs.core.chunk_first(seq__12408_12857__$1);
var G__12859 = cljs.core.chunk_rest(seq__12408_12857__$1);
var G__12860 = c__5525__auto___12858;
var G__12861 = cljs.core.count(c__5525__auto___12858);
var G__12862 = (0);
seq__12408_12838 = G__12859;
chunk__12409_12839 = G__12860;
count__12410_12840 = G__12861;
i__12411_12841 = G__12862;
continue;
} else {
var map__12420_12863 = cljs.core.first(seq__12408_12857__$1);
var map__12420_12864__$1 = cljs.core.__destructure_map(map__12420_12863);
var gline_12865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12420_12864__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12420_12864__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12420_12864__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12865], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__12408_12838,chunk__12409_12839,count__12410_12840,i__12411_12841,seq__12361_12784,chunk__12362_12785,count__12363_12786,i__12364_12787,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12420_12863,map__12420_12864__$1,gline_12865,gcol_12866,name_12867,seq__12408_12857__$1,temp__5804__auto___12856__$2,vec__12405_12835,column_12836,column_info_12837,seq__12361_12829__$1,temp__5804__auto___12828__$1,vec__12358_12781,line_12782,columns_12783,seq__12151_12775__$1,temp__5804__auto___12774,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12866], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12782,new cljs.core.Keyword(null,"col","col",-1959363084),column_12836,new cljs.core.Keyword(null,"name","name",1843675177),name_12867], null));
});})(seq__12408_12838,chunk__12409_12839,count__12410_12840,i__12411_12841,seq__12361_12784,chunk__12362_12785,count__12363_12786,i__12364_12787,seq__12151_12672,chunk__12152_12673,count__12153_12674,i__12154_12675,map__12420_12863,map__12420_12864__$1,gline_12865,gcol_12866,name_12867,seq__12408_12857__$1,temp__5804__auto___12856__$2,vec__12405_12835,column_12836,column_info_12837,seq__12361_12829__$1,temp__5804__auto___12828__$1,vec__12358_12781,line_12782,columns_12783,seq__12151_12775__$1,temp__5804__auto___12774,inverted))
,cljs.core.sorted_map()));


var G__12868 = cljs.core.next(seq__12408_12857__$1);
var G__12869 = null;
var G__12870 = (0);
var G__12871 = (0);
seq__12408_12838 = G__12868;
chunk__12409_12839 = G__12869;
count__12410_12840 = G__12870;
i__12411_12841 = G__12871;
continue;
}
} else {
}
}
break;
}


var G__12872 = cljs.core.next(seq__12361_12829__$1);
var G__12873 = null;
var G__12874 = (0);
var G__12875 = (0);
seq__12361_12784 = G__12872;
chunk__12362_12785 = G__12873;
count__12363_12786 = G__12874;
i__12364_12787 = G__12875;
continue;
}
} else {
}
}
break;
}


var G__12876 = cljs.core.next(seq__12151_12775__$1);
var G__12877 = null;
var G__12878 = (0);
var G__12879 = (0);
seq__12151_12672 = G__12876;
chunk__12152_12673 = G__12877;
count__12153_12674 = G__12878;
i__12154_12675 = G__12879;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map
