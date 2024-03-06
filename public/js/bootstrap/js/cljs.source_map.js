goog.provide('cljs.source_map');
goog.scope(function(){
  cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__14516){
var vec__14518 = p__14516;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14518,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14518,(1),null);
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
var vec__14536 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14536,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14536,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14536,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14536,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14536,(4),null);
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
var vec__14564 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14564,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14564,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14564,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14564,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14564,(4),null);
var vec__14567 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(4),null);
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
var map__14604 = segmap;
var map__14604__$1 = cljs.core.__destructure_map(map__14604);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14604__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14604__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14604__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14604__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14604__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__14622 = arguments.length;
switch (G__14622) {
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
var vec__14643 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__16255 = cljs.core.next(segs__$1);
var G__16256 = nrelseg;
var G__16257 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__16255;
relseg__$1 = G__16256;
result__$1 = G__16257;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14643,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14643,(1),null);
var G__16262 = (gline + (1));
var G__16263 = cljs.core.next(lines__$1);
var G__16264 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__16265 = result__$1;
gline = G__16262;
lines__$1 = G__16263;
relseg = G__16264;
result = G__16265;
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
var map__14671 = segmap;
var map__14671__$1 = cljs.core.__destructure_map(map__14671);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14671__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14671__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14671__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14671__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14671__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__14660_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14660_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__14687 = arguments.length;
switch (G__14687) {
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
var vec__14699 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__16268 = cljs.core.next(segs__$1);
var G__16269 = nrelseg;
var G__16270 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__16268;
relseg__$1 = G__16269;
result__$1 = G__16270;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14699,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14699,(1),null);
var G__16271 = (gline + (1));
var G__16272 = cljs.core.next(lines__$1);
var G__16273 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__16274 = result__$1;
gline = G__16271;
lines__$1 = G__16272;
relseg = G__16273;
result = G__16274;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__14709){
var vec__14710 = p__14709;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14710,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14710,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14710,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14710,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14710,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__14714){
var vec__14715 = p__14714;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14715,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14715,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14715,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14715,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14715,(4),null);
var seg = vec__14715;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__14719){
var vec__14720 = p__14719;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14720,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14720,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14720,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14720,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14720,(4),null);
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
var seq__14730 = cljs.core.seq(infos);
var chunk__14731 = null;
var count__14732 = (0);
var i__14733 = (0);
while(true){
if((i__14733 < count__14732)){
var info = chunk__14731.cljs$core$IIndexed$_nth$arity$2(null,i__14733);
var segv_16280 = info__GT_segv(info,source_idx,line,col);
var gline_16281 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16282 = cljs.core.count(cljs.core.deref(lines));
if((gline_16281 > (lc_16282 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__14730,chunk__14731,count__14732,i__14733,segv_16280,gline_16281,lc_16282,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_16281 - (lc_16282 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16280], null));
});})(seq__14730,chunk__14731,count__14732,i__14733,segv_16280,gline_16281,lc_16282,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__14730,chunk__14731,count__14732,i__14733,segv_16280,gline_16281,lc_16282,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16281], null),cljs.core.conj,segv_16280);
});})(seq__14730,chunk__14731,count__14732,i__14733,segv_16280,gline_16281,lc_16282,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__16286 = seq__14730;
var G__16287 = chunk__14731;
var G__16288 = count__14732;
var G__16289 = (i__14733 + (1));
seq__14730 = G__16286;
chunk__14731 = G__16287;
count__14732 = G__16288;
i__14733 = G__16289;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14730);
if(temp__5804__auto__){
var seq__14730__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14730__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14730__$1);
var G__16290 = cljs.core.chunk_rest(seq__14730__$1);
var G__16291 = c__5525__auto__;
var G__16292 = cljs.core.count(c__5525__auto__);
var G__16293 = (0);
seq__14730 = G__16290;
chunk__14731 = G__16291;
count__14732 = G__16292;
i__14733 = G__16293;
continue;
} else {
var info = cljs.core.first(seq__14730__$1);
var segv_16294 = info__GT_segv(info,source_idx,line,col);
var gline_16295 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_16296 = cljs.core.count(cljs.core.deref(lines));
if((gline_16295 > (lc_16296 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__14730,chunk__14731,count__14732,i__14733,segv_16294,gline_16295,lc_16296,info,seq__14730__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_16295 - (lc_16296 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16294], null));
});})(seq__14730,chunk__14731,count__14732,i__14733,segv_16294,gline_16295,lc_16296,info,seq__14730__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__14730,chunk__14731,count__14732,i__14733,segv_16294,gline_16295,lc_16296,info,seq__14730__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16295], null),cljs.core.conj,segv_16294);
});})(seq__14730,chunk__14731,count__14732,i__14733,segv_16294,gline_16295,lc_16296,info,seq__14730__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__16298 = cljs.core.next(seq__14730__$1);
var G__16299 = null;
var G__16300 = (0);
var G__16301 = (0);
seq__14730 = G__16298;
chunk__14731 = G__16299;
count__14732 = G__16300;
i__14733 = G__16301;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__14771_16302 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__14772_16303 = null;
var count__14773_16304 = (0);
var i__14774_16305 = (0);
while(true){
if((i__14774_16305 < count__14773_16304)){
var vec__15206_16307 = chunk__14772_16303.cljs$core$IIndexed$_nth$arity$2(null,i__14774_16305);
var source_idx_16308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15206_16307,(0),null);
var vec__15209_16309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15206_16307,(1),null);
var __16310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15209_16309,(0),null);
var lines_16311__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15209_16309,(1),null);
var seq__15213_16313 = cljs.core.seq(lines_16311__$1);
var chunk__15214_16314 = null;
var count__15215_16315 = (0);
var i__15216_16316 = (0);
while(true){
if((i__15216_16316 < count__15215_16315)){
var vec__15288_16317 = chunk__15214_16314.cljs$core$IIndexed$_nth$arity$2(null,i__15216_16316);
var line_16318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15288_16317,(0),null);
var cols_16319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15288_16317,(1),null);
var seq__15292_16320 = cljs.core.seq(cols_16319);
var chunk__15293_16321 = null;
var count__15294_16322 = (0);
var i__15295_16323 = (0);
while(true){
if((i__15295_16323 < count__15294_16322)){
var vec__15337_16324 = chunk__15293_16321.cljs$core$IIndexed$_nth$arity$2(null,i__15295_16323);
var col_16325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15337_16324,(0),null);
var infos_16326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15337_16324,(1),null);
encode_cols(infos_16326,source_idx_16308,line_16318,col_16325);


var G__16327 = seq__15292_16320;
var G__16328 = chunk__15293_16321;
var G__16329 = count__15294_16322;
var G__16330 = (i__15295_16323 + (1));
seq__15292_16320 = G__16327;
chunk__15293_16321 = G__16328;
count__15294_16322 = G__16329;
i__15295_16323 = G__16330;
continue;
} else {
var temp__5804__auto___16331 = cljs.core.seq(seq__15292_16320);
if(temp__5804__auto___16331){
var seq__15292_16332__$1 = temp__5804__auto___16331;
if(cljs.core.chunked_seq_QMARK_(seq__15292_16332__$1)){
var c__5525__auto___16334 = cljs.core.chunk_first(seq__15292_16332__$1);
var G__16336 = cljs.core.chunk_rest(seq__15292_16332__$1);
var G__16337 = c__5525__auto___16334;
var G__16338 = cljs.core.count(c__5525__auto___16334);
var G__16339 = (0);
seq__15292_16320 = G__16336;
chunk__15293_16321 = G__16337;
count__15294_16322 = G__16338;
i__15295_16323 = G__16339;
continue;
} else {
var vec__15340_16340 = cljs.core.first(seq__15292_16332__$1);
var col_16341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15340_16340,(0),null);
var infos_16342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15340_16340,(1),null);
encode_cols(infos_16342,source_idx_16308,line_16318,col_16341);


var G__16345 = cljs.core.next(seq__15292_16332__$1);
var G__16346 = null;
var G__16347 = (0);
var G__16348 = (0);
seq__15292_16320 = G__16345;
chunk__15293_16321 = G__16346;
count__15294_16322 = G__16347;
i__15295_16323 = G__16348;
continue;
}
} else {
}
}
break;
}


var G__16350 = seq__15213_16313;
var G__16351 = chunk__15214_16314;
var G__16352 = count__15215_16315;
var G__16353 = (i__15216_16316 + (1));
seq__15213_16313 = G__16350;
chunk__15214_16314 = G__16351;
count__15215_16315 = G__16352;
i__15216_16316 = G__16353;
continue;
} else {
var temp__5804__auto___16354 = cljs.core.seq(seq__15213_16313);
if(temp__5804__auto___16354){
var seq__15213_16357__$1 = temp__5804__auto___16354;
if(cljs.core.chunked_seq_QMARK_(seq__15213_16357__$1)){
var c__5525__auto___16358 = cljs.core.chunk_first(seq__15213_16357__$1);
var G__16359 = cljs.core.chunk_rest(seq__15213_16357__$1);
var G__16360 = c__5525__auto___16358;
var G__16361 = cljs.core.count(c__5525__auto___16358);
var G__16362 = (0);
seq__15213_16313 = G__16359;
chunk__15214_16314 = G__16360;
count__15215_16315 = G__16361;
i__15216_16316 = G__16362;
continue;
} else {
var vec__15355_16364 = cljs.core.first(seq__15213_16357__$1);
var line_16365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15355_16364,(0),null);
var cols_16366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15355_16364,(1),null);
var seq__15406_16367 = cljs.core.seq(cols_16366);
var chunk__15407_16368 = null;
var count__15408_16369 = (0);
var i__15409_16370 = (0);
while(true){
if((i__15409_16370 < count__15408_16369)){
var vec__15419_16371 = chunk__15407_16368.cljs$core$IIndexed$_nth$arity$2(null,i__15409_16370);
var col_16372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15419_16371,(0),null);
var infos_16373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15419_16371,(1),null);
encode_cols(infos_16373,source_idx_16308,line_16365,col_16372);


var G__16374 = seq__15406_16367;
var G__16375 = chunk__15407_16368;
var G__16376 = count__15408_16369;
var G__16377 = (i__15409_16370 + (1));
seq__15406_16367 = G__16374;
chunk__15407_16368 = G__16375;
count__15408_16369 = G__16376;
i__15409_16370 = G__16377;
continue;
} else {
var temp__5804__auto___16378__$1 = cljs.core.seq(seq__15406_16367);
if(temp__5804__auto___16378__$1){
var seq__15406_16379__$1 = temp__5804__auto___16378__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15406_16379__$1)){
var c__5525__auto___16380 = cljs.core.chunk_first(seq__15406_16379__$1);
var G__16381 = cljs.core.chunk_rest(seq__15406_16379__$1);
var G__16382 = c__5525__auto___16380;
var G__16383 = cljs.core.count(c__5525__auto___16380);
var G__16384 = (0);
seq__15406_16367 = G__16381;
chunk__15407_16368 = G__16382;
count__15408_16369 = G__16383;
i__15409_16370 = G__16384;
continue;
} else {
var vec__15427_16386 = cljs.core.first(seq__15406_16379__$1);
var col_16387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15427_16386,(0),null);
var infos_16388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15427_16386,(1),null);
encode_cols(infos_16388,source_idx_16308,line_16365,col_16387);


var G__16389 = cljs.core.next(seq__15406_16379__$1);
var G__16390 = null;
var G__16391 = (0);
var G__16392 = (0);
seq__15406_16367 = G__16389;
chunk__15407_16368 = G__16390;
count__15408_16369 = G__16391;
i__15409_16370 = G__16392;
continue;
}
} else {
}
}
break;
}


var G__16394 = cljs.core.next(seq__15213_16357__$1);
var G__16395 = null;
var G__16396 = (0);
var G__16397 = (0);
seq__15213_16313 = G__16394;
chunk__15214_16314 = G__16395;
count__15215_16315 = G__16396;
i__15216_16316 = G__16397;
continue;
}
} else {
}
}
break;
}


var G__16398 = seq__14771_16302;
var G__16399 = chunk__14772_16303;
var G__16400 = count__14773_16304;
var G__16401 = (i__14774_16305 + (1));
seq__14771_16302 = G__16398;
chunk__14772_16303 = G__16399;
count__14773_16304 = G__16400;
i__14774_16305 = G__16401;
continue;
} else {
var temp__5804__auto___16402 = cljs.core.seq(seq__14771_16302);
if(temp__5804__auto___16402){
var seq__14771_16403__$1 = temp__5804__auto___16402;
if(cljs.core.chunked_seq_QMARK_(seq__14771_16403__$1)){
var c__5525__auto___16404 = cljs.core.chunk_first(seq__14771_16403__$1);
var G__16405 = cljs.core.chunk_rest(seq__14771_16403__$1);
var G__16406 = c__5525__auto___16404;
var G__16407 = cljs.core.count(c__5525__auto___16404);
var G__16408 = (0);
seq__14771_16302 = G__16405;
chunk__14772_16303 = G__16406;
count__14773_16304 = G__16407;
i__14774_16305 = G__16408;
continue;
} else {
var vec__15435_16409 = cljs.core.first(seq__14771_16403__$1);
var source_idx_16410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15435_16409,(0),null);
var vec__15438_16411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15435_16409,(1),null);
var __16412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15438_16411,(0),null);
var lines_16413__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15438_16411,(1),null);
var seq__15442_16414 = cljs.core.seq(lines_16413__$1);
var chunk__15443_16415 = null;
var count__15444_16416 = (0);
var i__15445_16417 = (0);
while(true){
if((i__15445_16417 < count__15444_16416)){
var vec__15505_16418 = chunk__15443_16415.cljs$core$IIndexed$_nth$arity$2(null,i__15445_16417);
var line_16419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15505_16418,(0),null);
var cols_16420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15505_16418,(1),null);
var seq__15511_16421 = cljs.core.seq(cols_16420);
var chunk__15512_16422 = null;
var count__15513_16423 = (0);
var i__15514_16424 = (0);
while(true){
if((i__15514_16424 < count__15513_16423)){
var vec__15527_16425 = chunk__15512_16422.cljs$core$IIndexed$_nth$arity$2(null,i__15514_16424);
var col_16426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15527_16425,(0),null);
var infos_16427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15527_16425,(1),null);
encode_cols(infos_16427,source_idx_16410,line_16419,col_16426);


var G__16428 = seq__15511_16421;
var G__16429 = chunk__15512_16422;
var G__16430 = count__15513_16423;
var G__16431 = (i__15514_16424 + (1));
seq__15511_16421 = G__16428;
chunk__15512_16422 = G__16429;
count__15513_16423 = G__16430;
i__15514_16424 = G__16431;
continue;
} else {
var temp__5804__auto___16432__$1 = cljs.core.seq(seq__15511_16421);
if(temp__5804__auto___16432__$1){
var seq__15511_16433__$1 = temp__5804__auto___16432__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15511_16433__$1)){
var c__5525__auto___16434 = cljs.core.chunk_first(seq__15511_16433__$1);
var G__16435 = cljs.core.chunk_rest(seq__15511_16433__$1);
var G__16436 = c__5525__auto___16434;
var G__16437 = cljs.core.count(c__5525__auto___16434);
var G__16438 = (0);
seq__15511_16421 = G__16435;
chunk__15512_16422 = G__16436;
count__15513_16423 = G__16437;
i__15514_16424 = G__16438;
continue;
} else {
var vec__15535_16439 = cljs.core.first(seq__15511_16433__$1);
var col_16440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15535_16439,(0),null);
var infos_16441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15535_16439,(1),null);
encode_cols(infos_16441,source_idx_16410,line_16419,col_16440);


var G__16442 = cljs.core.next(seq__15511_16433__$1);
var G__16443 = null;
var G__16444 = (0);
var G__16445 = (0);
seq__15511_16421 = G__16442;
chunk__15512_16422 = G__16443;
count__15513_16423 = G__16444;
i__15514_16424 = G__16445;
continue;
}
} else {
}
}
break;
}


var G__16446 = seq__15442_16414;
var G__16447 = chunk__15443_16415;
var G__16448 = count__15444_16416;
var G__16449 = (i__15445_16417 + (1));
seq__15442_16414 = G__16446;
chunk__15443_16415 = G__16447;
count__15444_16416 = G__16448;
i__15445_16417 = G__16449;
continue;
} else {
var temp__5804__auto___16451__$1 = cljs.core.seq(seq__15442_16414);
if(temp__5804__auto___16451__$1){
var seq__15442_16454__$1 = temp__5804__auto___16451__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15442_16454__$1)){
var c__5525__auto___16457 = cljs.core.chunk_first(seq__15442_16454__$1);
var G__16458 = cljs.core.chunk_rest(seq__15442_16454__$1);
var G__16459 = c__5525__auto___16457;
var G__16460 = cljs.core.count(c__5525__auto___16457);
var G__16461 = (0);
seq__15442_16414 = G__16458;
chunk__15443_16415 = G__16459;
count__15444_16416 = G__16460;
i__15445_16417 = G__16461;
continue;
} else {
var vec__15546_16462 = cljs.core.first(seq__15442_16454__$1);
var line_16463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546_16462,(0),null);
var cols_16464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546_16462,(1),null);
var seq__15549_16466 = cljs.core.seq(cols_16464);
var chunk__15550_16467 = null;
var count__15551_16468 = (0);
var i__15552_16469 = (0);
while(true){
if((i__15552_16469 < count__15551_16468)){
var vec__15566_16470 = chunk__15550_16467.cljs$core$IIndexed$_nth$arity$2(null,i__15552_16469);
var col_16471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15566_16470,(0),null);
var infos_16472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15566_16470,(1),null);
encode_cols(infos_16472,source_idx_16410,line_16463,col_16471);


var G__16473 = seq__15549_16466;
var G__16474 = chunk__15550_16467;
var G__16475 = count__15551_16468;
var G__16476 = (i__15552_16469 + (1));
seq__15549_16466 = G__16473;
chunk__15550_16467 = G__16474;
count__15551_16468 = G__16475;
i__15552_16469 = G__16476;
continue;
} else {
var temp__5804__auto___16477__$2 = cljs.core.seq(seq__15549_16466);
if(temp__5804__auto___16477__$2){
var seq__15549_16478__$1 = temp__5804__auto___16477__$2;
if(cljs.core.chunked_seq_QMARK_(seq__15549_16478__$1)){
var c__5525__auto___16479 = cljs.core.chunk_first(seq__15549_16478__$1);
var G__16480 = cljs.core.chunk_rest(seq__15549_16478__$1);
var G__16481 = c__5525__auto___16479;
var G__16482 = cljs.core.count(c__5525__auto___16479);
var G__16483 = (0);
seq__15549_16466 = G__16480;
chunk__15550_16467 = G__16481;
count__15551_16468 = G__16482;
i__15552_16469 = G__16483;
continue;
} else {
var vec__15570_16484 = cljs.core.first(seq__15549_16478__$1);
var col_16485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15570_16484,(0),null);
var infos_16486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15570_16484,(1),null);
encode_cols(infos_16486,source_idx_16410,line_16463,col_16485);


var G__16487 = cljs.core.next(seq__15549_16478__$1);
var G__16488 = null;
var G__16489 = (0);
var G__16490 = (0);
seq__15549_16466 = G__16487;
chunk__15550_16467 = G__16488;
count__15551_16468 = G__16489;
i__15552_16469 = G__16490;
continue;
}
} else {
}
}
break;
}


var G__16491 = cljs.core.next(seq__15442_16454__$1);
var G__16492 = null;
var G__16493 = (0);
var G__16494 = (0);
seq__15442_16414 = G__16491;
chunk__15443_16415 = G__16492;
count__15444_16416 = G__16493;
i__15445_16417 = G__16494;
continue;
}
} else {
}
}
break;
}


var G__16495 = cljs.core.next(seq__14771_16403__$1);
var G__16496 = null;
var G__16497 = (0);
var G__16498 = (0);
seq__14771_16302 = G__16495;
chunk__14772_16303 = G__16496;
count__14773_16304 = G__16497;
i__14774_16305 = G__16498;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__15574 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__14725_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14725_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__14727_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__14727_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14728_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__14728_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__15582 = G__15574;
cljs.source_map.goog$module$goog$object.set(G__15582,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__15582;
} else {
return G__15574;
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
var vec__15585 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15585,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15585,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__15591 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15591,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15591,(1),null);
var G__16500 = cljs.core.next(col_map_seq);
var G__16501 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__15591,col,infos,vec__15585,line,col_map){
return (function (v,p__15596){
var map__15597 = p__15596;
var map__15597__$1 = cljs.core.__destructure_map(map__15597);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15597__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15597__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__15591,col,infos,vec__15585,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__16500;
new_cols = G__16501;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__16503 = cljs.core.next(line_map_seq);
var G__16504 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__16503;
new_lines = G__16504;
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
var seq__15603_16505 = cljs.core.seq(reverse_map);
var chunk__15604_16506 = null;
var count__15605_16507 = (0);
var i__15606_16508 = (0);
while(true){
if((i__15606_16508 < count__15605_16507)){
var vec__15988_16509 = chunk__15604_16506.cljs$core$IIndexed$_nth$arity$2(null,i__15606_16508);
var line_16510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15988_16509,(0),null);
var columns_16511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15988_16509,(1),null);
var seq__15998_16512 = cljs.core.seq(columns_16511);
var chunk__16000_16513 = null;
var count__16001_16514 = (0);
var i__16002_16515 = (0);
while(true){
if((i__16002_16515 < count__16001_16514)){
var vec__16074_16516 = chunk__16000_16513.cljs$core$IIndexed$_nth$arity$2(null,i__16002_16515);
var column_16517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16074_16516,(0),null);
var column_info_16518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16074_16516,(1),null);
var seq__16077_16519 = cljs.core.seq(column_info_16518);
var chunk__16078_16520 = null;
var count__16079_16521 = (0);
var i__16080_16522 = (0);
while(true){
if((i__16080_16522 < count__16079_16521)){
var map__16102_16523 = chunk__16078_16520.cljs$core$IIndexed$_nth$arity$2(null,i__16080_16522);
var map__16102_16524__$1 = cljs.core.__destructure_map(map__16102_16523);
var gline_16525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102_16524__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102_16524__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102_16524__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16525], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16077_16519,chunk__16078_16520,count__16079_16521,i__16080_16522,seq__15998_16512,chunk__16000_16513,count__16001_16514,i__16002_16515,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16102_16523,map__16102_16524__$1,gline_16525,gcol_16526,name_16527,vec__16074_16516,column_16517,column_info_16518,vec__15988_16509,line_16510,columns_16511,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16526], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16510,new cljs.core.Keyword(null,"col","col",-1959363084),column_16517,new cljs.core.Keyword(null,"name","name",1843675177),name_16527], null));
});})(seq__16077_16519,chunk__16078_16520,count__16079_16521,i__16080_16522,seq__15998_16512,chunk__16000_16513,count__16001_16514,i__16002_16515,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16102_16523,map__16102_16524__$1,gline_16525,gcol_16526,name_16527,vec__16074_16516,column_16517,column_info_16518,vec__15988_16509,line_16510,columns_16511,inverted))
,cljs.core.sorted_map()));


var G__16528 = seq__16077_16519;
var G__16529 = chunk__16078_16520;
var G__16530 = count__16079_16521;
var G__16531 = (i__16080_16522 + (1));
seq__16077_16519 = G__16528;
chunk__16078_16520 = G__16529;
count__16079_16521 = G__16530;
i__16080_16522 = G__16531;
continue;
} else {
var temp__5804__auto___16532 = cljs.core.seq(seq__16077_16519);
if(temp__5804__auto___16532){
var seq__16077_16533__$1 = temp__5804__auto___16532;
if(cljs.core.chunked_seq_QMARK_(seq__16077_16533__$1)){
var c__5525__auto___16534 = cljs.core.chunk_first(seq__16077_16533__$1);
var G__16535 = cljs.core.chunk_rest(seq__16077_16533__$1);
var G__16536 = c__5525__auto___16534;
var G__16537 = cljs.core.count(c__5525__auto___16534);
var G__16538 = (0);
seq__16077_16519 = G__16535;
chunk__16078_16520 = G__16536;
count__16079_16521 = G__16537;
i__16080_16522 = G__16538;
continue;
} else {
var map__16105_16540 = cljs.core.first(seq__16077_16533__$1);
var map__16105_16541__$1 = cljs.core.__destructure_map(map__16105_16540);
var gline_16542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16105_16541__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16105_16541__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16105_16541__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16542], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16077_16519,chunk__16078_16520,count__16079_16521,i__16080_16522,seq__15998_16512,chunk__16000_16513,count__16001_16514,i__16002_16515,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16105_16540,map__16105_16541__$1,gline_16542,gcol_16543,name_16544,seq__16077_16533__$1,temp__5804__auto___16532,vec__16074_16516,column_16517,column_info_16518,vec__15988_16509,line_16510,columns_16511,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16543], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16510,new cljs.core.Keyword(null,"col","col",-1959363084),column_16517,new cljs.core.Keyword(null,"name","name",1843675177),name_16544], null));
});})(seq__16077_16519,chunk__16078_16520,count__16079_16521,i__16080_16522,seq__15998_16512,chunk__16000_16513,count__16001_16514,i__16002_16515,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16105_16540,map__16105_16541__$1,gline_16542,gcol_16543,name_16544,seq__16077_16533__$1,temp__5804__auto___16532,vec__16074_16516,column_16517,column_info_16518,vec__15988_16509,line_16510,columns_16511,inverted))
,cljs.core.sorted_map()));


var G__16546 = cljs.core.next(seq__16077_16533__$1);
var G__16547 = null;
var G__16548 = (0);
var G__16549 = (0);
seq__16077_16519 = G__16546;
chunk__16078_16520 = G__16547;
count__16079_16521 = G__16548;
i__16080_16522 = G__16549;
continue;
}
} else {
}
}
break;
}


var G__16550 = seq__15998_16512;
var G__16551 = chunk__16000_16513;
var G__16552 = count__16001_16514;
var G__16553 = (i__16002_16515 + (1));
seq__15998_16512 = G__16550;
chunk__16000_16513 = G__16551;
count__16001_16514 = G__16552;
i__16002_16515 = G__16553;
continue;
} else {
var temp__5804__auto___16554 = cljs.core.seq(seq__15998_16512);
if(temp__5804__auto___16554){
var seq__15998_16555__$1 = temp__5804__auto___16554;
if(cljs.core.chunked_seq_QMARK_(seq__15998_16555__$1)){
var c__5525__auto___16556 = cljs.core.chunk_first(seq__15998_16555__$1);
var G__16557 = cljs.core.chunk_rest(seq__15998_16555__$1);
var G__16558 = c__5525__auto___16556;
var G__16559 = cljs.core.count(c__5525__auto___16556);
var G__16560 = (0);
seq__15998_16512 = G__16557;
chunk__16000_16513 = G__16558;
count__16001_16514 = G__16559;
i__16002_16515 = G__16560;
continue;
} else {
var vec__16106_16561 = cljs.core.first(seq__15998_16555__$1);
var column_16562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16106_16561,(0),null);
var column_info_16563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16106_16561,(1),null);
var seq__16109_16564 = cljs.core.seq(column_info_16563);
var chunk__16110_16565 = null;
var count__16111_16566 = (0);
var i__16112_16567 = (0);
while(true){
if((i__16112_16567 < count__16111_16566)){
var map__16126_16568 = chunk__16110_16565.cljs$core$IIndexed$_nth$arity$2(null,i__16112_16567);
var map__16126_16569__$1 = cljs.core.__destructure_map(map__16126_16568);
var gline_16570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16126_16569__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16126_16569__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16126_16569__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16570], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16109_16564,chunk__16110_16565,count__16111_16566,i__16112_16567,seq__15998_16512,chunk__16000_16513,count__16001_16514,i__16002_16515,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16126_16568,map__16126_16569__$1,gline_16570,gcol_16571,name_16572,vec__16106_16561,column_16562,column_info_16563,seq__15998_16555__$1,temp__5804__auto___16554,vec__15988_16509,line_16510,columns_16511,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16571], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16510,new cljs.core.Keyword(null,"col","col",-1959363084),column_16562,new cljs.core.Keyword(null,"name","name",1843675177),name_16572], null));
});})(seq__16109_16564,chunk__16110_16565,count__16111_16566,i__16112_16567,seq__15998_16512,chunk__16000_16513,count__16001_16514,i__16002_16515,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16126_16568,map__16126_16569__$1,gline_16570,gcol_16571,name_16572,vec__16106_16561,column_16562,column_info_16563,seq__15998_16555__$1,temp__5804__auto___16554,vec__15988_16509,line_16510,columns_16511,inverted))
,cljs.core.sorted_map()));


var G__16574 = seq__16109_16564;
var G__16575 = chunk__16110_16565;
var G__16576 = count__16111_16566;
var G__16577 = (i__16112_16567 + (1));
seq__16109_16564 = G__16574;
chunk__16110_16565 = G__16575;
count__16111_16566 = G__16576;
i__16112_16567 = G__16577;
continue;
} else {
var temp__5804__auto___16578__$1 = cljs.core.seq(seq__16109_16564);
if(temp__5804__auto___16578__$1){
var seq__16109_16579__$1 = temp__5804__auto___16578__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16109_16579__$1)){
var c__5525__auto___16580 = cljs.core.chunk_first(seq__16109_16579__$1);
var G__16581 = cljs.core.chunk_rest(seq__16109_16579__$1);
var G__16582 = c__5525__auto___16580;
var G__16583 = cljs.core.count(c__5525__auto___16580);
var G__16584 = (0);
seq__16109_16564 = G__16581;
chunk__16110_16565 = G__16582;
count__16111_16566 = G__16583;
i__16112_16567 = G__16584;
continue;
} else {
var map__16128_16585 = cljs.core.first(seq__16109_16579__$1);
var map__16128_16586__$1 = cljs.core.__destructure_map(map__16128_16585);
var gline_16587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16128_16586__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16128_16586__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16128_16586__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16587], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16109_16564,chunk__16110_16565,count__16111_16566,i__16112_16567,seq__15998_16512,chunk__16000_16513,count__16001_16514,i__16002_16515,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16128_16585,map__16128_16586__$1,gline_16587,gcol_16588,name_16589,seq__16109_16579__$1,temp__5804__auto___16578__$1,vec__16106_16561,column_16562,column_info_16563,seq__15998_16555__$1,temp__5804__auto___16554,vec__15988_16509,line_16510,columns_16511,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16588], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16510,new cljs.core.Keyword(null,"col","col",-1959363084),column_16562,new cljs.core.Keyword(null,"name","name",1843675177),name_16589], null));
});})(seq__16109_16564,chunk__16110_16565,count__16111_16566,i__16112_16567,seq__15998_16512,chunk__16000_16513,count__16001_16514,i__16002_16515,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16128_16585,map__16128_16586__$1,gline_16587,gcol_16588,name_16589,seq__16109_16579__$1,temp__5804__auto___16578__$1,vec__16106_16561,column_16562,column_info_16563,seq__15998_16555__$1,temp__5804__auto___16554,vec__15988_16509,line_16510,columns_16511,inverted))
,cljs.core.sorted_map()));


var G__16590 = cljs.core.next(seq__16109_16579__$1);
var G__16591 = null;
var G__16592 = (0);
var G__16593 = (0);
seq__16109_16564 = G__16590;
chunk__16110_16565 = G__16591;
count__16111_16566 = G__16592;
i__16112_16567 = G__16593;
continue;
}
} else {
}
}
break;
}


var G__16594 = cljs.core.next(seq__15998_16555__$1);
var G__16595 = null;
var G__16596 = (0);
var G__16597 = (0);
seq__15998_16512 = G__16594;
chunk__16000_16513 = G__16595;
count__16001_16514 = G__16596;
i__16002_16515 = G__16597;
continue;
}
} else {
}
}
break;
}


var G__16598 = seq__15603_16505;
var G__16599 = chunk__15604_16506;
var G__16600 = count__15605_16507;
var G__16601 = (i__15606_16508 + (1));
seq__15603_16505 = G__16598;
chunk__15604_16506 = G__16599;
count__15605_16507 = G__16600;
i__15606_16508 = G__16601;
continue;
} else {
var temp__5804__auto___16602 = cljs.core.seq(seq__15603_16505);
if(temp__5804__auto___16602){
var seq__15603_16603__$1 = temp__5804__auto___16602;
if(cljs.core.chunked_seq_QMARK_(seq__15603_16603__$1)){
var c__5525__auto___16604 = cljs.core.chunk_first(seq__15603_16603__$1);
var G__16605 = cljs.core.chunk_rest(seq__15603_16603__$1);
var G__16606 = c__5525__auto___16604;
var G__16607 = cljs.core.count(c__5525__auto___16604);
var G__16608 = (0);
seq__15603_16505 = G__16605;
chunk__15604_16506 = G__16606;
count__15605_16507 = G__16607;
i__15606_16508 = G__16608;
continue;
} else {
var vec__16131_16609 = cljs.core.first(seq__15603_16603__$1);
var line_16610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16131_16609,(0),null);
var columns_16611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16131_16609,(1),null);
var seq__16134_16612 = cljs.core.seq(columns_16611);
var chunk__16135_16613 = null;
var count__16136_16614 = (0);
var i__16137_16615 = (0);
while(true){
if((i__16137_16615 < count__16136_16614)){
var vec__16200_16616 = chunk__16135_16613.cljs$core$IIndexed$_nth$arity$2(null,i__16137_16615);
var column_16617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16200_16616,(0),null);
var column_info_16618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16200_16616,(1),null);
var seq__16206_16619 = cljs.core.seq(column_info_16618);
var chunk__16207_16620 = null;
var count__16208_16621 = (0);
var i__16209_16622 = (0);
while(true){
if((i__16209_16622 < count__16208_16621)){
var map__16218_16623 = chunk__16207_16620.cljs$core$IIndexed$_nth$arity$2(null,i__16209_16622);
var map__16218_16624__$1 = cljs.core.__destructure_map(map__16218_16623);
var gline_16625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16218_16624__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16218_16624__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16218_16624__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16625], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16206_16619,chunk__16207_16620,count__16208_16621,i__16209_16622,seq__16134_16612,chunk__16135_16613,count__16136_16614,i__16137_16615,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16218_16623,map__16218_16624__$1,gline_16625,gcol_16626,name_16627,vec__16200_16616,column_16617,column_info_16618,vec__16131_16609,line_16610,columns_16611,seq__15603_16603__$1,temp__5804__auto___16602,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16626], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16610,new cljs.core.Keyword(null,"col","col",-1959363084),column_16617,new cljs.core.Keyword(null,"name","name",1843675177),name_16627], null));
});})(seq__16206_16619,chunk__16207_16620,count__16208_16621,i__16209_16622,seq__16134_16612,chunk__16135_16613,count__16136_16614,i__16137_16615,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16218_16623,map__16218_16624__$1,gline_16625,gcol_16626,name_16627,vec__16200_16616,column_16617,column_info_16618,vec__16131_16609,line_16610,columns_16611,seq__15603_16603__$1,temp__5804__auto___16602,inverted))
,cljs.core.sorted_map()));


var G__16628 = seq__16206_16619;
var G__16629 = chunk__16207_16620;
var G__16630 = count__16208_16621;
var G__16631 = (i__16209_16622 + (1));
seq__16206_16619 = G__16628;
chunk__16207_16620 = G__16629;
count__16208_16621 = G__16630;
i__16209_16622 = G__16631;
continue;
} else {
var temp__5804__auto___16632__$1 = cljs.core.seq(seq__16206_16619);
if(temp__5804__auto___16632__$1){
var seq__16206_16633__$1 = temp__5804__auto___16632__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16206_16633__$1)){
var c__5525__auto___16635 = cljs.core.chunk_first(seq__16206_16633__$1);
var G__16636 = cljs.core.chunk_rest(seq__16206_16633__$1);
var G__16637 = c__5525__auto___16635;
var G__16638 = cljs.core.count(c__5525__auto___16635);
var G__16639 = (0);
seq__16206_16619 = G__16636;
chunk__16207_16620 = G__16637;
count__16208_16621 = G__16638;
i__16209_16622 = G__16639;
continue;
} else {
var map__16220_16641 = cljs.core.first(seq__16206_16633__$1);
var map__16220_16642__$1 = cljs.core.__destructure_map(map__16220_16641);
var gline_16643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16220_16642__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16220_16642__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16220_16642__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16643], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16206_16619,chunk__16207_16620,count__16208_16621,i__16209_16622,seq__16134_16612,chunk__16135_16613,count__16136_16614,i__16137_16615,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16220_16641,map__16220_16642__$1,gline_16643,gcol_16644,name_16645,seq__16206_16633__$1,temp__5804__auto___16632__$1,vec__16200_16616,column_16617,column_info_16618,vec__16131_16609,line_16610,columns_16611,seq__15603_16603__$1,temp__5804__auto___16602,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16644], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16610,new cljs.core.Keyword(null,"col","col",-1959363084),column_16617,new cljs.core.Keyword(null,"name","name",1843675177),name_16645], null));
});})(seq__16206_16619,chunk__16207_16620,count__16208_16621,i__16209_16622,seq__16134_16612,chunk__16135_16613,count__16136_16614,i__16137_16615,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16220_16641,map__16220_16642__$1,gline_16643,gcol_16644,name_16645,seq__16206_16633__$1,temp__5804__auto___16632__$1,vec__16200_16616,column_16617,column_info_16618,vec__16131_16609,line_16610,columns_16611,seq__15603_16603__$1,temp__5804__auto___16602,inverted))
,cljs.core.sorted_map()));


var G__16648 = cljs.core.next(seq__16206_16633__$1);
var G__16649 = null;
var G__16650 = (0);
var G__16651 = (0);
seq__16206_16619 = G__16648;
chunk__16207_16620 = G__16649;
count__16208_16621 = G__16650;
i__16209_16622 = G__16651;
continue;
}
} else {
}
}
break;
}


var G__16652 = seq__16134_16612;
var G__16653 = chunk__16135_16613;
var G__16654 = count__16136_16614;
var G__16655 = (i__16137_16615 + (1));
seq__16134_16612 = G__16652;
chunk__16135_16613 = G__16653;
count__16136_16614 = G__16654;
i__16137_16615 = G__16655;
continue;
} else {
var temp__5804__auto___16656__$1 = cljs.core.seq(seq__16134_16612);
if(temp__5804__auto___16656__$1){
var seq__16134_16657__$1 = temp__5804__auto___16656__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16134_16657__$1)){
var c__5525__auto___16658 = cljs.core.chunk_first(seq__16134_16657__$1);
var G__16659 = cljs.core.chunk_rest(seq__16134_16657__$1);
var G__16660 = c__5525__auto___16658;
var G__16661 = cljs.core.count(c__5525__auto___16658);
var G__16662 = (0);
seq__16134_16612 = G__16659;
chunk__16135_16613 = G__16660;
count__16136_16614 = G__16661;
i__16137_16615 = G__16662;
continue;
} else {
var vec__16224_16663 = cljs.core.first(seq__16134_16657__$1);
var column_16664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16224_16663,(0),null);
var column_info_16665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16224_16663,(1),null);
var seq__16227_16667 = cljs.core.seq(column_info_16665);
var chunk__16228_16668 = null;
var count__16229_16669 = (0);
var i__16230_16670 = (0);
while(true){
if((i__16230_16670 < count__16229_16669)){
var map__16237_16671 = chunk__16228_16668.cljs$core$IIndexed$_nth$arity$2(null,i__16230_16670);
var map__16237_16672__$1 = cljs.core.__destructure_map(map__16237_16671);
var gline_16673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16237_16672__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16237_16672__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16237_16672__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16673], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16227_16667,chunk__16228_16668,count__16229_16669,i__16230_16670,seq__16134_16612,chunk__16135_16613,count__16136_16614,i__16137_16615,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16237_16671,map__16237_16672__$1,gline_16673,gcol_16674,name_16675,vec__16224_16663,column_16664,column_info_16665,seq__16134_16657__$1,temp__5804__auto___16656__$1,vec__16131_16609,line_16610,columns_16611,seq__15603_16603__$1,temp__5804__auto___16602,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16674], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16610,new cljs.core.Keyword(null,"col","col",-1959363084),column_16664,new cljs.core.Keyword(null,"name","name",1843675177),name_16675], null));
});})(seq__16227_16667,chunk__16228_16668,count__16229_16669,i__16230_16670,seq__16134_16612,chunk__16135_16613,count__16136_16614,i__16137_16615,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16237_16671,map__16237_16672__$1,gline_16673,gcol_16674,name_16675,vec__16224_16663,column_16664,column_info_16665,seq__16134_16657__$1,temp__5804__auto___16656__$1,vec__16131_16609,line_16610,columns_16611,seq__15603_16603__$1,temp__5804__auto___16602,inverted))
,cljs.core.sorted_map()));


var G__16678 = seq__16227_16667;
var G__16679 = chunk__16228_16668;
var G__16680 = count__16229_16669;
var G__16681 = (i__16230_16670 + (1));
seq__16227_16667 = G__16678;
chunk__16228_16668 = G__16679;
count__16229_16669 = G__16680;
i__16230_16670 = G__16681;
continue;
} else {
var temp__5804__auto___16683__$2 = cljs.core.seq(seq__16227_16667);
if(temp__5804__auto___16683__$2){
var seq__16227_16684__$1 = temp__5804__auto___16683__$2;
if(cljs.core.chunked_seq_QMARK_(seq__16227_16684__$1)){
var c__5525__auto___16686 = cljs.core.chunk_first(seq__16227_16684__$1);
var G__16687 = cljs.core.chunk_rest(seq__16227_16684__$1);
var G__16688 = c__5525__auto___16686;
var G__16689 = cljs.core.count(c__5525__auto___16686);
var G__16690 = (0);
seq__16227_16667 = G__16687;
chunk__16228_16668 = G__16688;
count__16229_16669 = G__16689;
i__16230_16670 = G__16690;
continue;
} else {
var map__16239_16691 = cljs.core.first(seq__16227_16684__$1);
var map__16239_16692__$1 = cljs.core.__destructure_map(map__16239_16691);
var gline_16693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16239_16692__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_16694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16239_16692__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_16695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16239_16692__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16693], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16227_16667,chunk__16228_16668,count__16229_16669,i__16230_16670,seq__16134_16612,chunk__16135_16613,count__16136_16614,i__16137_16615,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16239_16691,map__16239_16692__$1,gline_16693,gcol_16694,name_16695,seq__16227_16684__$1,temp__5804__auto___16683__$2,vec__16224_16663,column_16664,column_info_16665,seq__16134_16657__$1,temp__5804__auto___16656__$1,vec__16131_16609,line_16610,columns_16611,seq__15603_16603__$1,temp__5804__auto___16602,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16694], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_16610,new cljs.core.Keyword(null,"col","col",-1959363084),column_16664,new cljs.core.Keyword(null,"name","name",1843675177),name_16695], null));
});})(seq__16227_16667,chunk__16228_16668,count__16229_16669,i__16230_16670,seq__16134_16612,chunk__16135_16613,count__16136_16614,i__16137_16615,seq__15603_16505,chunk__15604_16506,count__15605_16507,i__15606_16508,map__16239_16691,map__16239_16692__$1,gline_16693,gcol_16694,name_16695,seq__16227_16684__$1,temp__5804__auto___16683__$2,vec__16224_16663,column_16664,column_info_16665,seq__16134_16657__$1,temp__5804__auto___16656__$1,vec__16131_16609,line_16610,columns_16611,seq__15603_16603__$1,temp__5804__auto___16602,inverted))
,cljs.core.sorted_map()));


var G__16696 = cljs.core.next(seq__16227_16684__$1);
var G__16697 = null;
var G__16698 = (0);
var G__16699 = (0);
seq__16227_16667 = G__16696;
chunk__16228_16668 = G__16697;
count__16229_16669 = G__16698;
i__16230_16670 = G__16699;
continue;
}
} else {
}
}
break;
}


var G__16700 = cljs.core.next(seq__16134_16657__$1);
var G__16701 = null;
var G__16702 = (0);
var G__16703 = (0);
seq__16134_16612 = G__16700;
chunk__16135_16613 = G__16701;
count__16136_16614 = G__16702;
i__16137_16615 = G__16703;
continue;
}
} else {
}
}
break;
}


var G__16704 = cljs.core.next(seq__15603_16603__$1);
var G__16706 = null;
var G__16707 = (0);
var G__16708 = (0);
seq__15603_16505 = G__16704;
chunk__15604_16506 = G__16706;
count__15605_16507 = G__16707;
i__15606_16508 = G__16708;
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
