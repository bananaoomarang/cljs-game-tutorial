goog.provide('cljs.source_map');
goog.scope(function(){
  cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__8257){
var vec__8260 = p__8257;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8260,(1),null);
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
var vec__8273 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8273,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8273,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8273,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8273,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8273,(4),null);
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
var vec__8288 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8288,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8288,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8288,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8288,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8288,(4),null);
var vec__8291 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8291,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8291,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8291,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8291,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8291,(4),null);
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
var map__8305 = segmap;
var map__8305__$1 = cljs.core.__destructure_map(map__8305);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8305__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8305__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8305__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8305__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__8313 = arguments.length;
switch (G__8313) {
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
var vec__8326 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9874 = cljs.core.next(segs__$1);
var G__9875 = nrelseg;
var G__9876 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9874;
relseg__$1 = G__9875;
result__$1 = G__9876;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8326,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8326,(1),null);
var G__9877 = (gline + (1));
var G__9878 = cljs.core.next(lines__$1);
var G__9879 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9880 = result__$1;
gline = G__9877;
lines__$1 = G__9878;
relseg = G__9879;
result = G__9880;
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
var map__8342 = segmap;
var map__8342__$1 = cljs.core.__destructure_map(map__8342);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8342__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8342__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8342__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8342__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8342__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__8338_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__8338_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__8353 = arguments.length;
switch (G__8353) {
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
var vec__8374 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9889 = cljs.core.next(segs__$1);
var G__9890 = nrelseg;
var G__9891 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9889;
relseg__$1 = G__9890;
result__$1 = G__9891;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8374,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8374,(1),null);
var G__9894 = (gline + (1));
var G__9895 = cljs.core.next(lines__$1);
var G__9896 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9897 = result__$1;
gline = G__9894;
lines__$1 = G__9895;
relseg = G__9896;
result = G__9897;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__8391){
var vec__8395 = p__8391;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8395,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8395,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8395,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8395,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8395,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__8402){
var vec__8403 = p__8402;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8403,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8403,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8403,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8403,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8403,(4),null);
var seg = vec__8403;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__8410){
var vec__8413 = p__8410;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8413,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8413,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8413,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8413,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8413,(4),null);
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
var seq__8438 = cljs.core.seq(infos);
var chunk__8439 = null;
var count__8440 = (0);
var i__8441 = (0);
while(true){
if((i__8441 < count__8440)){
var info = chunk__8439.cljs$core$IIndexed$_nth$arity$2(null,i__8441);
var segv_9911 = info__GT_segv(info,source_idx,line,col);
var gline_9912 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9913 = cljs.core.count(cljs.core.deref(lines));
if((gline_9912 > (lc_9913 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8438,chunk__8439,count__8440,i__8441,segv_9911,gline_9912,lc_9913,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9912 - (lc_9913 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9911], null));
});})(seq__8438,chunk__8439,count__8440,i__8441,segv_9911,gline_9912,lc_9913,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8438,chunk__8439,count__8440,i__8441,segv_9911,gline_9912,lc_9913,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9912], null),cljs.core.conj,segv_9911);
});})(seq__8438,chunk__8439,count__8440,i__8441,segv_9911,gline_9912,lc_9913,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9920 = seq__8438;
var G__9921 = chunk__8439;
var G__9922 = count__8440;
var G__9923 = (i__8441 + (1));
seq__8438 = G__9920;
chunk__8439 = G__9921;
count__8440 = G__9922;
i__8441 = G__9923;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__8438);
if(temp__5804__auto__){
var seq__8438__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8438__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__8438__$1);
var G__9927 = cljs.core.chunk_rest(seq__8438__$1);
var G__9928 = c__5525__auto__;
var G__9929 = cljs.core.count(c__5525__auto__);
var G__9930 = (0);
seq__8438 = G__9927;
chunk__8439 = G__9928;
count__8440 = G__9929;
i__8441 = G__9930;
continue;
} else {
var info = cljs.core.first(seq__8438__$1);
var segv_9931 = info__GT_segv(info,source_idx,line,col);
var gline_9932 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9933 = cljs.core.count(cljs.core.deref(lines));
if((gline_9932 > (lc_9933 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8438,chunk__8439,count__8440,i__8441,segv_9931,gline_9932,lc_9933,info,seq__8438__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9932 - (lc_9933 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9931], null));
});})(seq__8438,chunk__8439,count__8440,i__8441,segv_9931,gline_9932,lc_9933,info,seq__8438__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8438,chunk__8439,count__8440,i__8441,segv_9931,gline_9932,lc_9933,info,seq__8438__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9932], null),cljs.core.conj,segv_9931);
});})(seq__8438,chunk__8439,count__8440,i__8441,segv_9931,gline_9932,lc_9933,info,seq__8438__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9949 = cljs.core.next(seq__8438__$1);
var G__9950 = null;
var G__9951 = (0);
var G__9952 = (0);
seq__8438 = G__9949;
chunk__8439 = G__9950;
count__8440 = G__9951;
i__8441 = G__9952;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__8469_9957 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__8470_9958 = null;
var count__8471_9959 = (0);
var i__8472_9960 = (0);
while(true){
if((i__8472_9960 < count__8471_9959)){
var vec__8827_9965 = chunk__8470_9958.cljs$core$IIndexed$_nth$arity$2(null,i__8472_9960);
var source_idx_9966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8827_9965,(0),null);
var vec__8830_9967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8827_9965,(1),null);
var __9968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8830_9967,(0),null);
var lines_9969__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8830_9967,(1),null);
var seq__8833_9970 = cljs.core.seq(lines_9969__$1);
var chunk__8834_9971 = null;
var count__8835_9972 = (0);
var i__8836_9973 = (0);
while(true){
if((i__8836_9973 < count__8835_9972)){
var vec__8894_9974 = chunk__8834_9971.cljs$core$IIndexed$_nth$arity$2(null,i__8836_9973);
var line_9975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8894_9974,(0),null);
var cols_9976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8894_9974,(1),null);
var seq__8897_9977 = cljs.core.seq(cols_9976);
var chunk__8898_9978 = null;
var count__8899_9979 = (0);
var i__8900_9980 = (0);
while(true){
if((i__8900_9980 < count__8899_9979)){
var vec__8908_9981 = chunk__8898_9978.cljs$core$IIndexed$_nth$arity$2(null,i__8900_9980);
var col_9982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8908_9981,(0),null);
var infos_9983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8908_9981,(1),null);
encode_cols(infos_9983,source_idx_9966,line_9975,col_9982);


var G__9984 = seq__8897_9977;
var G__9985 = chunk__8898_9978;
var G__9986 = count__8899_9979;
var G__9987 = (i__8900_9980 + (1));
seq__8897_9977 = G__9984;
chunk__8898_9978 = G__9985;
count__8899_9979 = G__9986;
i__8900_9980 = G__9987;
continue;
} else {
var temp__5804__auto___9988 = cljs.core.seq(seq__8897_9977);
if(temp__5804__auto___9988){
var seq__8897_9989__$1 = temp__5804__auto___9988;
if(cljs.core.chunked_seq_QMARK_(seq__8897_9989__$1)){
var c__5525__auto___9990 = cljs.core.chunk_first(seq__8897_9989__$1);
var G__9991 = cljs.core.chunk_rest(seq__8897_9989__$1);
var G__9992 = c__5525__auto___9990;
var G__9993 = cljs.core.count(c__5525__auto___9990);
var G__9994 = (0);
seq__8897_9977 = G__9991;
chunk__8898_9978 = G__9992;
count__8899_9979 = G__9993;
i__8900_9980 = G__9994;
continue;
} else {
var vec__8912_9995 = cljs.core.first(seq__8897_9989__$1);
var col_9996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8912_9995,(0),null);
var infos_9997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8912_9995,(1),null);
encode_cols(infos_9997,source_idx_9966,line_9975,col_9996);


var G__9998 = cljs.core.next(seq__8897_9989__$1);
var G__9999 = null;
var G__10000 = (0);
var G__10001 = (0);
seq__8897_9977 = G__9998;
chunk__8898_9978 = G__9999;
count__8899_9979 = G__10000;
i__8900_9980 = G__10001;
continue;
}
} else {
}
}
break;
}


var G__10002 = seq__8833_9970;
var G__10003 = chunk__8834_9971;
var G__10004 = count__8835_9972;
var G__10005 = (i__8836_9973 + (1));
seq__8833_9970 = G__10002;
chunk__8834_9971 = G__10003;
count__8835_9972 = G__10004;
i__8836_9973 = G__10005;
continue;
} else {
var temp__5804__auto___10006 = cljs.core.seq(seq__8833_9970);
if(temp__5804__auto___10006){
var seq__8833_10007__$1 = temp__5804__auto___10006;
if(cljs.core.chunked_seq_QMARK_(seq__8833_10007__$1)){
var c__5525__auto___10008 = cljs.core.chunk_first(seq__8833_10007__$1);
var G__10009 = cljs.core.chunk_rest(seq__8833_10007__$1);
var G__10010 = c__5525__auto___10008;
var G__10011 = cljs.core.count(c__5525__auto___10008);
var G__10012 = (0);
seq__8833_9970 = G__10009;
chunk__8834_9971 = G__10010;
count__8835_9972 = G__10011;
i__8836_9973 = G__10012;
continue;
} else {
var vec__8917_10014 = cljs.core.first(seq__8833_10007__$1);
var line_10015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8917_10014,(0),null);
var cols_10016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8917_10014,(1),null);
var seq__8920_10020 = cljs.core.seq(cols_10016);
var chunk__8921_10021 = null;
var count__8922_10022 = (0);
var i__8923_10023 = (0);
while(true){
if((i__8923_10023 < count__8922_10022)){
var vec__8934_10027 = chunk__8921_10021.cljs$core$IIndexed$_nth$arity$2(null,i__8923_10023);
var col_10028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8934_10027,(0),null);
var infos_10029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8934_10027,(1),null);
encode_cols(infos_10029,source_idx_9966,line_10015,col_10028);


var G__10030 = seq__8920_10020;
var G__10031 = chunk__8921_10021;
var G__10032 = count__8922_10022;
var G__10033 = (i__8923_10023 + (1));
seq__8920_10020 = G__10030;
chunk__8921_10021 = G__10031;
count__8922_10022 = G__10032;
i__8923_10023 = G__10033;
continue;
} else {
var temp__5804__auto___10035__$1 = cljs.core.seq(seq__8920_10020);
if(temp__5804__auto___10035__$1){
var seq__8920_10036__$1 = temp__5804__auto___10035__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8920_10036__$1)){
var c__5525__auto___10037 = cljs.core.chunk_first(seq__8920_10036__$1);
var G__10039 = cljs.core.chunk_rest(seq__8920_10036__$1);
var G__10040 = c__5525__auto___10037;
var G__10041 = cljs.core.count(c__5525__auto___10037);
var G__10042 = (0);
seq__8920_10020 = G__10039;
chunk__8921_10021 = G__10040;
count__8922_10022 = G__10041;
i__8923_10023 = G__10042;
continue;
} else {
var vec__8940_10044 = cljs.core.first(seq__8920_10036__$1);
var col_10045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8940_10044,(0),null);
var infos_10046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8940_10044,(1),null);
encode_cols(infos_10046,source_idx_9966,line_10015,col_10045);


var G__10049 = cljs.core.next(seq__8920_10036__$1);
var G__10050 = null;
var G__10051 = (0);
var G__10052 = (0);
seq__8920_10020 = G__10049;
chunk__8921_10021 = G__10050;
count__8922_10022 = G__10051;
i__8923_10023 = G__10052;
continue;
}
} else {
}
}
break;
}


var G__10053 = cljs.core.next(seq__8833_10007__$1);
var G__10054 = null;
var G__10055 = (0);
var G__10056 = (0);
seq__8833_9970 = G__10053;
chunk__8834_9971 = G__10054;
count__8835_9972 = G__10055;
i__8836_9973 = G__10056;
continue;
}
} else {
}
}
break;
}


var G__10057 = seq__8469_9957;
var G__10058 = chunk__8470_9958;
var G__10059 = count__8471_9959;
var G__10060 = (i__8472_9960 + (1));
seq__8469_9957 = G__10057;
chunk__8470_9958 = G__10058;
count__8471_9959 = G__10059;
i__8472_9960 = G__10060;
continue;
} else {
var temp__5804__auto___10064 = cljs.core.seq(seq__8469_9957);
if(temp__5804__auto___10064){
var seq__8469_10065__$1 = temp__5804__auto___10064;
if(cljs.core.chunked_seq_QMARK_(seq__8469_10065__$1)){
var c__5525__auto___10066 = cljs.core.chunk_first(seq__8469_10065__$1);
var G__10067 = cljs.core.chunk_rest(seq__8469_10065__$1);
var G__10068 = c__5525__auto___10066;
var G__10069 = cljs.core.count(c__5525__auto___10066);
var G__10070 = (0);
seq__8469_9957 = G__10067;
chunk__8470_9958 = G__10068;
count__8471_9959 = G__10069;
i__8472_9960 = G__10070;
continue;
} else {
var vec__8944_10071 = cljs.core.first(seq__8469_10065__$1);
var source_idx_10072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8944_10071,(0),null);
var vec__8947_10073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8944_10071,(1),null);
var __10074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8947_10073,(0),null);
var lines_10075__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8947_10073,(1),null);
var seq__8953_10076 = cljs.core.seq(lines_10075__$1);
var chunk__8954_10077 = null;
var count__8955_10078 = (0);
var i__8956_10079 = (0);
while(true){
if((i__8956_10079 < count__8955_10078)){
var vec__9044_10080 = chunk__8954_10077.cljs$core$IIndexed$_nth$arity$2(null,i__8956_10079);
var line_10081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9044_10080,(0),null);
var cols_10082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9044_10080,(1),null);
var seq__9047_10083 = cljs.core.seq(cols_10082);
var chunk__9048_10084 = null;
var count__9049_10085 = (0);
var i__9050_10086 = (0);
while(true){
if((i__9050_10086 < count__9049_10085)){
var vec__9059_10088 = chunk__9048_10084.cljs$core$IIndexed$_nth$arity$2(null,i__9050_10086);
var col_10089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9059_10088,(0),null);
var infos_10090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9059_10088,(1),null);
encode_cols(infos_10090,source_idx_10072,line_10081,col_10089);


var G__10091 = seq__9047_10083;
var G__10093 = chunk__9048_10084;
var G__10094 = count__9049_10085;
var G__10095 = (i__9050_10086 + (1));
seq__9047_10083 = G__10091;
chunk__9048_10084 = G__10093;
count__9049_10085 = G__10094;
i__9050_10086 = G__10095;
continue;
} else {
var temp__5804__auto___10097__$1 = cljs.core.seq(seq__9047_10083);
if(temp__5804__auto___10097__$1){
var seq__9047_10098__$1 = temp__5804__auto___10097__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9047_10098__$1)){
var c__5525__auto___10099 = cljs.core.chunk_first(seq__9047_10098__$1);
var G__10101 = cljs.core.chunk_rest(seq__9047_10098__$1);
var G__10102 = c__5525__auto___10099;
var G__10103 = cljs.core.count(c__5525__auto___10099);
var G__10104 = (0);
seq__9047_10083 = G__10101;
chunk__9048_10084 = G__10102;
count__9049_10085 = G__10103;
i__9050_10086 = G__10104;
continue;
} else {
var vec__9068_10106 = cljs.core.first(seq__9047_10098__$1);
var col_10107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9068_10106,(0),null);
var infos_10108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9068_10106,(1),null);
encode_cols(infos_10108,source_idx_10072,line_10081,col_10107);


var G__10109 = cljs.core.next(seq__9047_10098__$1);
var G__10110 = null;
var G__10111 = (0);
var G__10112 = (0);
seq__9047_10083 = G__10109;
chunk__9048_10084 = G__10110;
count__9049_10085 = G__10111;
i__9050_10086 = G__10112;
continue;
}
} else {
}
}
break;
}


var G__10113 = seq__8953_10076;
var G__10114 = chunk__8954_10077;
var G__10115 = count__8955_10078;
var G__10116 = (i__8956_10079 + (1));
seq__8953_10076 = G__10113;
chunk__8954_10077 = G__10114;
count__8955_10078 = G__10115;
i__8956_10079 = G__10116;
continue;
} else {
var temp__5804__auto___10117__$1 = cljs.core.seq(seq__8953_10076);
if(temp__5804__auto___10117__$1){
var seq__8953_10118__$1 = temp__5804__auto___10117__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8953_10118__$1)){
var c__5525__auto___10119 = cljs.core.chunk_first(seq__8953_10118__$1);
var G__10121 = cljs.core.chunk_rest(seq__8953_10118__$1);
var G__10122 = c__5525__auto___10119;
var G__10123 = cljs.core.count(c__5525__auto___10119);
var G__10124 = (0);
seq__8953_10076 = G__10121;
chunk__8954_10077 = G__10122;
count__8955_10078 = G__10123;
i__8956_10079 = G__10124;
continue;
} else {
var vec__9075_10125 = cljs.core.first(seq__8953_10118__$1);
var line_10126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9075_10125,(0),null);
var cols_10127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9075_10125,(1),null);
var seq__9079_10128 = cljs.core.seq(cols_10127);
var chunk__9080_10129 = null;
var count__9081_10130 = (0);
var i__9082_10131 = (0);
while(true){
if((i__9082_10131 < count__9081_10130)){
var vec__9097_10132 = chunk__9080_10129.cljs$core$IIndexed$_nth$arity$2(null,i__9082_10131);
var col_10133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9097_10132,(0),null);
var infos_10134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9097_10132,(1),null);
encode_cols(infos_10134,source_idx_10072,line_10126,col_10133);


var G__10138 = seq__9079_10128;
var G__10139 = chunk__9080_10129;
var G__10140 = count__9081_10130;
var G__10141 = (i__9082_10131 + (1));
seq__9079_10128 = G__10138;
chunk__9080_10129 = G__10139;
count__9081_10130 = G__10140;
i__9082_10131 = G__10141;
continue;
} else {
var temp__5804__auto___10142__$2 = cljs.core.seq(seq__9079_10128);
if(temp__5804__auto___10142__$2){
var seq__9079_10143__$1 = temp__5804__auto___10142__$2;
if(cljs.core.chunked_seq_QMARK_(seq__9079_10143__$1)){
var c__5525__auto___10144 = cljs.core.chunk_first(seq__9079_10143__$1);
var G__10145 = cljs.core.chunk_rest(seq__9079_10143__$1);
var G__10146 = c__5525__auto___10144;
var G__10147 = cljs.core.count(c__5525__auto___10144);
var G__10148 = (0);
seq__9079_10128 = G__10145;
chunk__9080_10129 = G__10146;
count__9081_10130 = G__10147;
i__9082_10131 = G__10148;
continue;
} else {
var vec__9108_10149 = cljs.core.first(seq__9079_10143__$1);
var col_10150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9108_10149,(0),null);
var infos_10151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9108_10149,(1),null);
encode_cols(infos_10151,source_idx_10072,line_10126,col_10150);


var G__10153 = cljs.core.next(seq__9079_10143__$1);
var G__10154 = null;
var G__10155 = (0);
var G__10156 = (0);
seq__9079_10128 = G__10153;
chunk__9080_10129 = G__10154;
count__9081_10130 = G__10155;
i__9082_10131 = G__10156;
continue;
}
} else {
}
}
break;
}


var G__10157 = cljs.core.next(seq__8953_10118__$1);
var G__10158 = null;
var G__10159 = (0);
var G__10160 = (0);
seq__8953_10076 = G__10157;
chunk__8954_10077 = G__10158;
count__8955_10078 = G__10159;
i__8956_10079 = G__10160;
continue;
}
} else {
}
}
break;
}


var G__10161 = cljs.core.next(seq__8469_10065__$1);
var G__10162 = null;
var G__10163 = (0);
var G__10164 = (0);
seq__8469_9957 = G__10161;
chunk__8470_9958 = G__10162;
count__8471_9959 = G__10163;
i__8472_9960 = G__10164;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__9115 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__8422_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8422_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__8425_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__8425_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8427_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__8427_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__9150 = G__9115;
cljs.source_map.goog$module$goog$object.set(G__9150,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__9150;
} else {
return G__9115;
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
var vec__9162 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9162,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9162,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__9167 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9167,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9167,(1),null);
var G__10174 = cljs.core.next(col_map_seq);
var G__10175 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__9167,col,infos,vec__9162,line,col_map){
return (function (v,p__9175){
var map__9177 = p__9175;
var map__9177__$1 = cljs.core.__destructure_map(map__9177);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9177__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9177__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__9167,col,infos,vec__9162,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__10174;
new_cols = G__10175;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__10176 = cljs.core.next(line_map_seq);
var G__10177 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__10176;
new_lines = G__10177;
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
var seq__9178_10178 = cljs.core.seq(reverse_map);
var chunk__9179_10179 = null;
var count__9180_10180 = (0);
var i__9181_10181 = (0);
while(true){
if((i__9181_10181 < count__9180_10180)){
var vec__9490_10182 = chunk__9179_10179.cljs$core$IIndexed$_nth$arity$2(null,i__9181_10181);
var line_10183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9490_10182,(0),null);
var columns_10184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9490_10182,(1),null);
var seq__9503_10185 = cljs.core.seq(columns_10184);
var chunk__9504_10186 = null;
var count__9505_10187 = (0);
var i__9506_10188 = (0);
while(true){
if((i__9506_10188 < count__9505_10187)){
var vec__9608_10189 = chunk__9504_10186.cljs$core$IIndexed$_nth$arity$2(null,i__9506_10188);
var column_10190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9608_10189,(0),null);
var column_info_10191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9608_10189,(1),null);
var seq__9612_10193 = cljs.core.seq(column_info_10191);
var chunk__9613_10194 = null;
var count__9614_10195 = (0);
var i__9615_10196 = (0);
while(true){
if((i__9615_10196 < count__9614_10195)){
var map__9629_10197 = chunk__9613_10194.cljs$core$IIndexed$_nth$arity$2(null,i__9615_10196);
var map__9629_10198__$1 = cljs.core.__destructure_map(map__9629_10197);
var gline_10199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9629_10198__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9629_10198__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9629_10198__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10199], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9612_10193,chunk__9613_10194,count__9614_10195,i__9615_10196,seq__9503_10185,chunk__9504_10186,count__9505_10187,i__9506_10188,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9629_10197,map__9629_10198__$1,gline_10199,gcol_10200,name_10201,vec__9608_10189,column_10190,column_info_10191,vec__9490_10182,line_10183,columns_10184,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10200], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10183,new cljs.core.Keyword(null,"col","col",-1959363084),column_10190,new cljs.core.Keyword(null,"name","name",1843675177),name_10201], null));
});})(seq__9612_10193,chunk__9613_10194,count__9614_10195,i__9615_10196,seq__9503_10185,chunk__9504_10186,count__9505_10187,i__9506_10188,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9629_10197,map__9629_10198__$1,gline_10199,gcol_10200,name_10201,vec__9608_10189,column_10190,column_info_10191,vec__9490_10182,line_10183,columns_10184,inverted))
,cljs.core.sorted_map()));


var G__10209 = seq__9612_10193;
var G__10210 = chunk__9613_10194;
var G__10211 = count__9614_10195;
var G__10212 = (i__9615_10196 + (1));
seq__9612_10193 = G__10209;
chunk__9613_10194 = G__10210;
count__9614_10195 = G__10211;
i__9615_10196 = G__10212;
continue;
} else {
var temp__5804__auto___10215 = cljs.core.seq(seq__9612_10193);
if(temp__5804__auto___10215){
var seq__9612_10216__$1 = temp__5804__auto___10215;
if(cljs.core.chunked_seq_QMARK_(seq__9612_10216__$1)){
var c__5525__auto___10217 = cljs.core.chunk_first(seq__9612_10216__$1);
var G__10218 = cljs.core.chunk_rest(seq__9612_10216__$1);
var G__10219 = c__5525__auto___10217;
var G__10220 = cljs.core.count(c__5525__auto___10217);
var G__10221 = (0);
seq__9612_10193 = G__10218;
chunk__9613_10194 = G__10219;
count__9614_10195 = G__10220;
i__9615_10196 = G__10221;
continue;
} else {
var map__9635_10222 = cljs.core.first(seq__9612_10216__$1);
var map__9635_10223__$1 = cljs.core.__destructure_map(map__9635_10222);
var gline_10224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9635_10223__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9635_10223__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9635_10223__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10224], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9612_10193,chunk__9613_10194,count__9614_10195,i__9615_10196,seq__9503_10185,chunk__9504_10186,count__9505_10187,i__9506_10188,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9635_10222,map__9635_10223__$1,gline_10224,gcol_10225,name_10226,seq__9612_10216__$1,temp__5804__auto___10215,vec__9608_10189,column_10190,column_info_10191,vec__9490_10182,line_10183,columns_10184,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10225], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10183,new cljs.core.Keyword(null,"col","col",-1959363084),column_10190,new cljs.core.Keyword(null,"name","name",1843675177),name_10226], null));
});})(seq__9612_10193,chunk__9613_10194,count__9614_10195,i__9615_10196,seq__9503_10185,chunk__9504_10186,count__9505_10187,i__9506_10188,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9635_10222,map__9635_10223__$1,gline_10224,gcol_10225,name_10226,seq__9612_10216__$1,temp__5804__auto___10215,vec__9608_10189,column_10190,column_info_10191,vec__9490_10182,line_10183,columns_10184,inverted))
,cljs.core.sorted_map()));


var G__10230 = cljs.core.next(seq__9612_10216__$1);
var G__10231 = null;
var G__10232 = (0);
var G__10233 = (0);
seq__9612_10193 = G__10230;
chunk__9613_10194 = G__10231;
count__9614_10195 = G__10232;
i__9615_10196 = G__10233;
continue;
}
} else {
}
}
break;
}


var G__10235 = seq__9503_10185;
var G__10236 = chunk__9504_10186;
var G__10237 = count__9505_10187;
var G__10238 = (i__9506_10188 + (1));
seq__9503_10185 = G__10235;
chunk__9504_10186 = G__10236;
count__9505_10187 = G__10237;
i__9506_10188 = G__10238;
continue;
} else {
var temp__5804__auto___10240 = cljs.core.seq(seq__9503_10185);
if(temp__5804__auto___10240){
var seq__9503_10241__$1 = temp__5804__auto___10240;
if(cljs.core.chunked_seq_QMARK_(seq__9503_10241__$1)){
var c__5525__auto___10242 = cljs.core.chunk_first(seq__9503_10241__$1);
var G__10243 = cljs.core.chunk_rest(seq__9503_10241__$1);
var G__10244 = c__5525__auto___10242;
var G__10245 = cljs.core.count(c__5525__auto___10242);
var G__10246 = (0);
seq__9503_10185 = G__10243;
chunk__9504_10186 = G__10244;
count__9505_10187 = G__10245;
i__9506_10188 = G__10246;
continue;
} else {
var vec__9653_10248 = cljs.core.first(seq__9503_10241__$1);
var column_10249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9653_10248,(0),null);
var column_info_10250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9653_10248,(1),null);
var seq__9656_10251 = cljs.core.seq(column_info_10250);
var chunk__9657_10252 = null;
var count__9658_10253 = (0);
var i__9659_10254 = (0);
while(true){
if((i__9659_10254 < count__9658_10253)){
var map__9671_10255 = chunk__9657_10252.cljs$core$IIndexed$_nth$arity$2(null,i__9659_10254);
var map__9671_10256__$1 = cljs.core.__destructure_map(map__9671_10255);
var gline_10257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9671_10256__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9671_10256__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9671_10256__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10257], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9656_10251,chunk__9657_10252,count__9658_10253,i__9659_10254,seq__9503_10185,chunk__9504_10186,count__9505_10187,i__9506_10188,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9671_10255,map__9671_10256__$1,gline_10257,gcol_10258,name_10259,vec__9653_10248,column_10249,column_info_10250,seq__9503_10241__$1,temp__5804__auto___10240,vec__9490_10182,line_10183,columns_10184,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10258], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10183,new cljs.core.Keyword(null,"col","col",-1959363084),column_10249,new cljs.core.Keyword(null,"name","name",1843675177),name_10259], null));
});})(seq__9656_10251,chunk__9657_10252,count__9658_10253,i__9659_10254,seq__9503_10185,chunk__9504_10186,count__9505_10187,i__9506_10188,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9671_10255,map__9671_10256__$1,gline_10257,gcol_10258,name_10259,vec__9653_10248,column_10249,column_info_10250,seq__9503_10241__$1,temp__5804__auto___10240,vec__9490_10182,line_10183,columns_10184,inverted))
,cljs.core.sorted_map()));


var G__10265 = seq__9656_10251;
var G__10266 = chunk__9657_10252;
var G__10267 = count__9658_10253;
var G__10268 = (i__9659_10254 + (1));
seq__9656_10251 = G__10265;
chunk__9657_10252 = G__10266;
count__9658_10253 = G__10267;
i__9659_10254 = G__10268;
continue;
} else {
var temp__5804__auto___10271__$1 = cljs.core.seq(seq__9656_10251);
if(temp__5804__auto___10271__$1){
var seq__9656_10272__$1 = temp__5804__auto___10271__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9656_10272__$1)){
var c__5525__auto___10273 = cljs.core.chunk_first(seq__9656_10272__$1);
var G__10274 = cljs.core.chunk_rest(seq__9656_10272__$1);
var G__10275 = c__5525__auto___10273;
var G__10276 = cljs.core.count(c__5525__auto___10273);
var G__10277 = (0);
seq__9656_10251 = G__10274;
chunk__9657_10252 = G__10275;
count__9658_10253 = G__10276;
i__9659_10254 = G__10277;
continue;
} else {
var map__9678_10278 = cljs.core.first(seq__9656_10272__$1);
var map__9678_10279__$1 = cljs.core.__destructure_map(map__9678_10278);
var gline_10280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9678_10279__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9678_10279__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9678_10279__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10280], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9656_10251,chunk__9657_10252,count__9658_10253,i__9659_10254,seq__9503_10185,chunk__9504_10186,count__9505_10187,i__9506_10188,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9678_10278,map__9678_10279__$1,gline_10280,gcol_10281,name_10282,seq__9656_10272__$1,temp__5804__auto___10271__$1,vec__9653_10248,column_10249,column_info_10250,seq__9503_10241__$1,temp__5804__auto___10240,vec__9490_10182,line_10183,columns_10184,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10281], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10183,new cljs.core.Keyword(null,"col","col",-1959363084),column_10249,new cljs.core.Keyword(null,"name","name",1843675177),name_10282], null));
});})(seq__9656_10251,chunk__9657_10252,count__9658_10253,i__9659_10254,seq__9503_10185,chunk__9504_10186,count__9505_10187,i__9506_10188,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9678_10278,map__9678_10279__$1,gline_10280,gcol_10281,name_10282,seq__9656_10272__$1,temp__5804__auto___10271__$1,vec__9653_10248,column_10249,column_info_10250,seq__9503_10241__$1,temp__5804__auto___10240,vec__9490_10182,line_10183,columns_10184,inverted))
,cljs.core.sorted_map()));


var G__10288 = cljs.core.next(seq__9656_10272__$1);
var G__10289 = null;
var G__10290 = (0);
var G__10291 = (0);
seq__9656_10251 = G__10288;
chunk__9657_10252 = G__10289;
count__9658_10253 = G__10290;
i__9659_10254 = G__10291;
continue;
}
} else {
}
}
break;
}


var G__10293 = cljs.core.next(seq__9503_10241__$1);
var G__10294 = null;
var G__10295 = (0);
var G__10296 = (0);
seq__9503_10185 = G__10293;
chunk__9504_10186 = G__10294;
count__9505_10187 = G__10295;
i__9506_10188 = G__10296;
continue;
}
} else {
}
}
break;
}


var G__10298 = seq__9178_10178;
var G__10299 = chunk__9179_10179;
var G__10300 = count__9180_10180;
var G__10301 = (i__9181_10181 + (1));
seq__9178_10178 = G__10298;
chunk__9179_10179 = G__10299;
count__9180_10180 = G__10300;
i__9181_10181 = G__10301;
continue;
} else {
var temp__5804__auto___10303 = cljs.core.seq(seq__9178_10178);
if(temp__5804__auto___10303){
var seq__9178_10304__$1 = temp__5804__auto___10303;
if(cljs.core.chunked_seq_QMARK_(seq__9178_10304__$1)){
var c__5525__auto___10305 = cljs.core.chunk_first(seq__9178_10304__$1);
var G__10306 = cljs.core.chunk_rest(seq__9178_10304__$1);
var G__10307 = c__5525__auto___10305;
var G__10308 = cljs.core.count(c__5525__auto___10305);
var G__10309 = (0);
seq__9178_10178 = G__10306;
chunk__9179_10179 = G__10307;
count__9180_10180 = G__10308;
i__9181_10181 = G__10309;
continue;
} else {
var vec__9691_10310 = cljs.core.first(seq__9178_10304__$1);
var line_10311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9691_10310,(0),null);
var columns_10312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9691_10310,(1),null);
var seq__9694_10314 = cljs.core.seq(columns_10312);
var chunk__9695_10315 = null;
var count__9696_10316 = (0);
var i__9697_10317 = (0);
while(true){
if((i__9697_10317 < count__9696_10316)){
var vec__9771_10318 = chunk__9695_10315.cljs$core$IIndexed$_nth$arity$2(null,i__9697_10317);
var column_10319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9771_10318,(0),null);
var column_info_10320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9771_10318,(1),null);
var seq__9776_10321 = cljs.core.seq(column_info_10320);
var chunk__9777_10322 = null;
var count__9778_10323 = (0);
var i__9779_10324 = (0);
while(true){
if((i__9779_10324 < count__9778_10323)){
var map__9789_10327 = chunk__9777_10322.cljs$core$IIndexed$_nth$arity$2(null,i__9779_10324);
var map__9789_10328__$1 = cljs.core.__destructure_map(map__9789_10327);
var gline_10329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9789_10328__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9789_10328__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9789_10328__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10329], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9776_10321,chunk__9777_10322,count__9778_10323,i__9779_10324,seq__9694_10314,chunk__9695_10315,count__9696_10316,i__9697_10317,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9789_10327,map__9789_10328__$1,gline_10329,gcol_10330,name_10331,vec__9771_10318,column_10319,column_info_10320,vec__9691_10310,line_10311,columns_10312,seq__9178_10304__$1,temp__5804__auto___10303,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10330], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10311,new cljs.core.Keyword(null,"col","col",-1959363084),column_10319,new cljs.core.Keyword(null,"name","name",1843675177),name_10331], null));
});})(seq__9776_10321,chunk__9777_10322,count__9778_10323,i__9779_10324,seq__9694_10314,chunk__9695_10315,count__9696_10316,i__9697_10317,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9789_10327,map__9789_10328__$1,gline_10329,gcol_10330,name_10331,vec__9771_10318,column_10319,column_info_10320,vec__9691_10310,line_10311,columns_10312,seq__9178_10304__$1,temp__5804__auto___10303,inverted))
,cljs.core.sorted_map()));


var G__10336 = seq__9776_10321;
var G__10337 = chunk__9777_10322;
var G__10338 = count__9778_10323;
var G__10339 = (i__9779_10324 + (1));
seq__9776_10321 = G__10336;
chunk__9777_10322 = G__10337;
count__9778_10323 = G__10338;
i__9779_10324 = G__10339;
continue;
} else {
var temp__5804__auto___10340__$1 = cljs.core.seq(seq__9776_10321);
if(temp__5804__auto___10340__$1){
var seq__9776_10341__$1 = temp__5804__auto___10340__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9776_10341__$1)){
var c__5525__auto___10342 = cljs.core.chunk_first(seq__9776_10341__$1);
var G__10345 = cljs.core.chunk_rest(seq__9776_10341__$1);
var G__10346 = c__5525__auto___10342;
var G__10347 = cljs.core.count(c__5525__auto___10342);
var G__10348 = (0);
seq__9776_10321 = G__10345;
chunk__9777_10322 = G__10346;
count__9778_10323 = G__10347;
i__9779_10324 = G__10348;
continue;
} else {
var map__9801_10349 = cljs.core.first(seq__9776_10341__$1);
var map__9801_10350__$1 = cljs.core.__destructure_map(map__9801_10349);
var gline_10351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9801_10350__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9801_10350__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9801_10350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10351], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9776_10321,chunk__9777_10322,count__9778_10323,i__9779_10324,seq__9694_10314,chunk__9695_10315,count__9696_10316,i__9697_10317,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9801_10349,map__9801_10350__$1,gline_10351,gcol_10352,name_10353,seq__9776_10341__$1,temp__5804__auto___10340__$1,vec__9771_10318,column_10319,column_info_10320,vec__9691_10310,line_10311,columns_10312,seq__9178_10304__$1,temp__5804__auto___10303,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10352], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10311,new cljs.core.Keyword(null,"col","col",-1959363084),column_10319,new cljs.core.Keyword(null,"name","name",1843675177),name_10353], null));
});})(seq__9776_10321,chunk__9777_10322,count__9778_10323,i__9779_10324,seq__9694_10314,chunk__9695_10315,count__9696_10316,i__9697_10317,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9801_10349,map__9801_10350__$1,gline_10351,gcol_10352,name_10353,seq__9776_10341__$1,temp__5804__auto___10340__$1,vec__9771_10318,column_10319,column_info_10320,vec__9691_10310,line_10311,columns_10312,seq__9178_10304__$1,temp__5804__auto___10303,inverted))
,cljs.core.sorted_map()));


var G__10358 = cljs.core.next(seq__9776_10341__$1);
var G__10359 = null;
var G__10360 = (0);
var G__10361 = (0);
seq__9776_10321 = G__10358;
chunk__9777_10322 = G__10359;
count__9778_10323 = G__10360;
i__9779_10324 = G__10361;
continue;
}
} else {
}
}
break;
}


var G__10362 = seq__9694_10314;
var G__10363 = chunk__9695_10315;
var G__10364 = count__9696_10316;
var G__10365 = (i__9697_10317 + (1));
seq__9694_10314 = G__10362;
chunk__9695_10315 = G__10363;
count__9696_10316 = G__10364;
i__9697_10317 = G__10365;
continue;
} else {
var temp__5804__auto___10366__$1 = cljs.core.seq(seq__9694_10314);
if(temp__5804__auto___10366__$1){
var seq__9694_10367__$1 = temp__5804__auto___10366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9694_10367__$1)){
var c__5525__auto___10368 = cljs.core.chunk_first(seq__9694_10367__$1);
var G__10369 = cljs.core.chunk_rest(seq__9694_10367__$1);
var G__10370 = c__5525__auto___10368;
var G__10371 = cljs.core.count(c__5525__auto___10368);
var G__10372 = (0);
seq__9694_10314 = G__10369;
chunk__9695_10315 = G__10370;
count__9696_10316 = G__10371;
i__9697_10317 = G__10372;
continue;
} else {
var vec__9808_10373 = cljs.core.first(seq__9694_10367__$1);
var column_10374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9808_10373,(0),null);
var column_info_10375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9808_10373,(1),null);
var seq__9811_10376 = cljs.core.seq(column_info_10375);
var chunk__9812_10377 = null;
var count__9813_10378 = (0);
var i__9814_10379 = (0);
while(true){
if((i__9814_10379 < count__9813_10378)){
var map__9822_10380 = chunk__9812_10377.cljs$core$IIndexed$_nth$arity$2(null,i__9814_10379);
var map__9822_10381__$1 = cljs.core.__destructure_map(map__9822_10380);
var gline_10382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9822_10381__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9822_10381__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9822_10381__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10382], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9811_10376,chunk__9812_10377,count__9813_10378,i__9814_10379,seq__9694_10314,chunk__9695_10315,count__9696_10316,i__9697_10317,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9822_10380,map__9822_10381__$1,gline_10382,gcol_10383,name_10384,vec__9808_10373,column_10374,column_info_10375,seq__9694_10367__$1,temp__5804__auto___10366__$1,vec__9691_10310,line_10311,columns_10312,seq__9178_10304__$1,temp__5804__auto___10303,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10383], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10311,new cljs.core.Keyword(null,"col","col",-1959363084),column_10374,new cljs.core.Keyword(null,"name","name",1843675177),name_10384], null));
});})(seq__9811_10376,chunk__9812_10377,count__9813_10378,i__9814_10379,seq__9694_10314,chunk__9695_10315,count__9696_10316,i__9697_10317,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9822_10380,map__9822_10381__$1,gline_10382,gcol_10383,name_10384,vec__9808_10373,column_10374,column_info_10375,seq__9694_10367__$1,temp__5804__auto___10366__$1,vec__9691_10310,line_10311,columns_10312,seq__9178_10304__$1,temp__5804__auto___10303,inverted))
,cljs.core.sorted_map()));


var G__10385 = seq__9811_10376;
var G__10386 = chunk__9812_10377;
var G__10387 = count__9813_10378;
var G__10388 = (i__9814_10379 + (1));
seq__9811_10376 = G__10385;
chunk__9812_10377 = G__10386;
count__9813_10378 = G__10387;
i__9814_10379 = G__10388;
continue;
} else {
var temp__5804__auto___10390__$2 = cljs.core.seq(seq__9811_10376);
if(temp__5804__auto___10390__$2){
var seq__9811_10391__$1 = temp__5804__auto___10390__$2;
if(cljs.core.chunked_seq_QMARK_(seq__9811_10391__$1)){
var c__5525__auto___10392 = cljs.core.chunk_first(seq__9811_10391__$1);
var G__10393 = cljs.core.chunk_rest(seq__9811_10391__$1);
var G__10394 = c__5525__auto___10392;
var G__10395 = cljs.core.count(c__5525__auto___10392);
var G__10396 = (0);
seq__9811_10376 = G__10393;
chunk__9812_10377 = G__10394;
count__9813_10378 = G__10395;
i__9814_10379 = G__10396;
continue;
} else {
var map__9827_10398 = cljs.core.first(seq__9811_10391__$1);
var map__9827_10399__$1 = cljs.core.__destructure_map(map__9827_10398);
var gline_10400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9827_10399__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9827_10399__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9827_10399__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10400], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9811_10376,chunk__9812_10377,count__9813_10378,i__9814_10379,seq__9694_10314,chunk__9695_10315,count__9696_10316,i__9697_10317,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9827_10398,map__9827_10399__$1,gline_10400,gcol_10401,name_10402,seq__9811_10391__$1,temp__5804__auto___10390__$2,vec__9808_10373,column_10374,column_info_10375,seq__9694_10367__$1,temp__5804__auto___10366__$1,vec__9691_10310,line_10311,columns_10312,seq__9178_10304__$1,temp__5804__auto___10303,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10401], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10311,new cljs.core.Keyword(null,"col","col",-1959363084),column_10374,new cljs.core.Keyword(null,"name","name",1843675177),name_10402], null));
});})(seq__9811_10376,chunk__9812_10377,count__9813_10378,i__9814_10379,seq__9694_10314,chunk__9695_10315,count__9696_10316,i__9697_10317,seq__9178_10178,chunk__9179_10179,count__9180_10180,i__9181_10181,map__9827_10398,map__9827_10399__$1,gline_10400,gcol_10401,name_10402,seq__9811_10391__$1,temp__5804__auto___10390__$2,vec__9808_10373,column_10374,column_info_10375,seq__9694_10367__$1,temp__5804__auto___10366__$1,vec__9691_10310,line_10311,columns_10312,seq__9178_10304__$1,temp__5804__auto___10303,inverted))
,cljs.core.sorted_map()));


var G__10404 = cljs.core.next(seq__9811_10391__$1);
var G__10405 = null;
var G__10406 = (0);
var G__10407 = (0);
seq__9811_10376 = G__10404;
chunk__9812_10377 = G__10405;
count__9813_10378 = G__10406;
i__9814_10379 = G__10407;
continue;
}
} else {
}
}
break;
}


var G__10408 = cljs.core.next(seq__9694_10367__$1);
var G__10409 = null;
var G__10410 = (0);
var G__10411 = (0);
seq__9694_10314 = G__10408;
chunk__9695_10315 = G__10409;
count__9696_10316 = G__10410;
i__9697_10317 = G__10411;
continue;
}
} else {
}
}
break;
}


var G__10412 = cljs.core.next(seq__9178_10304__$1);
var G__10413 = null;
var G__10414 = (0);
var G__10415 = (0);
seq__9178_10178 = G__10412;
chunk__9179_10179 = G__10413;
count__9180_10180 = G__10414;
i__9181_10181 = G__10415;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
