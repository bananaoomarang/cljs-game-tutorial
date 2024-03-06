goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-2018","ecmascript-2018",-811131980),new cljs.core.Keyword(null,"ecmascript-2019","ecmascript-2019",-1872209910),new cljs.core.Keyword(null,"ecmascript-2020","ecmascript-2020",1452286525),new cljs.core.Keyword(null,"ecmascript-2021","ecmascript-2021",-724420359),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__12181 = s;
var map__12181__$1 = cljs.core.__destructure_map(map__12181);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12181__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12181__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__12183 = info;
var map__12184 = G__12183;
var map__12184__$1 = cljs.core.__destructure_map(map__12184);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12184__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__12183__$1 = G__12183;
while(true){
var d__$2 = d__$1;
var map__12188 = G__12183__$1;
var map__12188__$1 = cljs.core.__destructure_map(map__12188);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12188__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__13276 = (d__$2 + (1));
var G__13277 = shadow__$2;
d__$1 = G__13276;
G__12183__$1 = G__13277;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__12190){
var map__12192 = p__12190;
var map__12192__$1 = cljs.core.__destructure_map(map__12192);
var name_var = map__12192__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12192__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12192__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__12194 = info;
var map__12194__$1 = cljs.core.__destructure_map(map__12194);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12194__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12194__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__12207 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__12207) : cljs.compiler.munge.call(null,G__12207));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__12251 = arguments.length;
switch (G__12251) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.impl.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__12256 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11982,11982,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__12256.cljs$core$IFn$_invoke$arity$1 ? fexpr__12256.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__12256.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__12263 = cp;
switch (G__12263) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__12265_13290 = cljs.core.seq(s);
var chunk__12266_13291 = null;
var count__12267_13292 = (0);
var i__12268_13293 = (0);
while(true){
if((i__12268_13293 < count__12267_13292)){
var c_13294 = chunk__12266_13291.cljs$core$IIndexed$_nth$arity$2(null,i__12268_13293);
sb.append(cljs.compiler.escape_char(c_13294));


var G__13295 = seq__12265_13290;
var G__13296 = chunk__12266_13291;
var G__13297 = count__12267_13292;
var G__13298 = (i__12268_13293 + (1));
seq__12265_13290 = G__13295;
chunk__12266_13291 = G__13296;
count__12267_13292 = G__13297;
i__12268_13293 = G__13298;
continue;
} else {
var temp__5804__auto___13299 = cljs.core.seq(seq__12265_13290);
if(temp__5804__auto___13299){
var seq__12265_13301__$1 = temp__5804__auto___13299;
if(cljs.core.chunked_seq_QMARK_(seq__12265_13301__$1)){
var c__5525__auto___13302 = cljs.core.chunk_first(seq__12265_13301__$1);
var G__13303 = cljs.core.chunk_rest(seq__12265_13301__$1);
var G__13304 = c__5525__auto___13302;
var G__13305 = cljs.core.count(c__5525__auto___13302);
var G__13306 = (0);
seq__12265_13290 = G__13303;
chunk__12266_13291 = G__13304;
count__12267_13292 = G__13305;
i__12268_13293 = G__13306;
continue;
} else {
var c_13307 = cljs.core.first(seq__12265_13301__$1);
sb.append(cljs.compiler.escape_char(c_13307));


var G__13308 = cljs.core.next(seq__12265_13301__$1);
var G__13309 = null;
var G__13310 = (0);
var G__13311 = (0);
seq__12265_13290 = G__13308;
chunk__12266_13291 = G__13309;
count__12267_13292 = G__13310;
i__12268_13293 = G__13311;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
cljs.compiler.emit_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__12272 = cljs.core.get_global_hierarchy;
return (fexpr__12272.cljs$core$IFn$_invoke$arity$0 ? fexpr__12272.cljs$core$IFn$_invoke$arity$0() : fexpr__12272.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__12274_13316 = ast;
var map__12274_13317__$1 = cljs.core.__destructure_map(map__12274_13316);
var env_13318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12274_13317__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_13318))){
var map__12275_13319 = env_13318;
var map__12275_13320__$1 = cljs.core.__destructure_map(map__12275_13319);
var line_13321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12275_13320__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_13322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12275_13320__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__12276 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__12278 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__12277 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__12277.cljs$core$IFn$_invoke$arity$1 ? fexpr__12277.cljs$core$IFn$_invoke$arity$1(G__12278) : fexpr__12277.call(null,G__12278));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12276,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__12276;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_13321 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_13322)?(column_13322 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__12296 = arguments.length;
switch (G__12296) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___13326 = arguments.length;
var i__5727__auto___13327 = (0);
while(true){
if((i__5727__auto___13327 < len__5726__auto___13326)){
args_arr__5751__auto__.push((arguments[i__5727__auto___13327]));

var G__13328 = (i__5727__auto___13327 + (1));
i__5727__auto___13327 = G__13328;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((5) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((5)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5752__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_13329 = (function (){var G__12302 = a;
if((!(typeof a === 'string'))){
return G__12302.toString();
} else {
return G__12302;
}
})();
var temp__5808__auto___13330 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___13330 == null)){
} else {
var sm_data_13331 = temp__5808__auto___13330;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_13331,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__12284_SHARP_){
return (p1__12284_SHARP_ + s_13329.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_13329], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__12314 = cljs.core.seq(xs);
var chunk__12315 = null;
var count__12316 = (0);
var i__12317 = (0);
while(true){
if((i__12317 < count__12316)){
var x = chunk__12315.cljs$core$IIndexed$_nth$arity$2(null,i__12317);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__13332 = seq__12314;
var G__13333 = chunk__12315;
var G__13334 = count__12316;
var G__13335 = (i__12317 + (1));
seq__12314 = G__13332;
chunk__12315 = G__13333;
count__12316 = G__13334;
i__12317 = G__13335;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12314);
if(temp__5804__auto__){
var seq__12314__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12314__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12314__$1);
var G__13336 = cljs.core.chunk_rest(seq__12314__$1);
var G__13337 = c__5525__auto__;
var G__13338 = cljs.core.count(c__5525__auto__);
var G__13339 = (0);
seq__12314 = G__13336;
chunk__12315 = G__13337;
count__12316 = G__13338;
i__12317 = G__13339;
continue;
} else {
var x = cljs.core.first(seq__12314__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__13340 = cljs.core.next(seq__12314__$1);
var G__13341 = null;
var G__13342 = (0);
var G__13343 = (0);
seq__12314 = G__13340;
chunk__12315 = G__13341;
count__12316 = G__13342;
i__12317 = G__13343;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq12288){
var G__12289 = cljs.core.first(seq12288);
var seq12288__$1 = cljs.core.next(seq12288);
var G__12290 = cljs.core.first(seq12288__$1);
var seq12288__$2 = cljs.core.next(seq12288__$1);
var G__12291 = cljs.core.first(seq12288__$2);
var seq12288__$3 = cljs.core.next(seq12288__$2);
var G__12292 = cljs.core.first(seq12288__$3);
var seq12288__$4 = cljs.core.next(seq12288__$3);
var G__12293 = cljs.core.first(seq12288__$4);
var seq12288__$5 = cljs.core.next(seq12288__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12289,G__12290,G__12291,G__12292,G__12293,seq12288__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__12329){
var map__12330 = p__12329;
var map__12330__$1 = cljs.core.__destructure_map(map__12330);
var m = map__12330__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12330__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__12339 = arguments.length;
switch (G__12339) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___13347 = arguments.length;
var i__5727__auto___13348 = (0);
while(true){
if((i__5727__auto___13348 < len__5726__auto___13347)){
args_arr__5751__auto__.push((arguments[i__5727__auto___13348]));

var G__13349 = (i__5727__auto___13348 + (1));
i__5727__auto___13348 = G__13349;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((5) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((5)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5752__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__12344_13350 = cljs.core.seq(xs);
var chunk__12345_13351 = null;
var count__12346_13352 = (0);
var i__12347_13353 = (0);
while(true){
if((i__12347_13353 < count__12346_13352)){
var x_13354 = chunk__12345_13351.cljs$core$IIndexed$_nth$arity$2(null,i__12347_13353);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_13354);


var G__13355 = seq__12344_13350;
var G__13356 = chunk__12345_13351;
var G__13357 = count__12346_13352;
var G__13358 = (i__12347_13353 + (1));
seq__12344_13350 = G__13355;
chunk__12345_13351 = G__13356;
count__12346_13352 = G__13357;
i__12347_13353 = G__13358;
continue;
} else {
var temp__5804__auto___13359 = cljs.core.seq(seq__12344_13350);
if(temp__5804__auto___13359){
var seq__12344_13360__$1 = temp__5804__auto___13359;
if(cljs.core.chunked_seq_QMARK_(seq__12344_13360__$1)){
var c__5525__auto___13361 = cljs.core.chunk_first(seq__12344_13360__$1);
var G__13362 = cljs.core.chunk_rest(seq__12344_13360__$1);
var G__13363 = c__5525__auto___13361;
var G__13364 = cljs.core.count(c__5525__auto___13361);
var G__13365 = (0);
seq__12344_13350 = G__13362;
chunk__12345_13351 = G__13363;
count__12346_13352 = G__13364;
i__12347_13353 = G__13365;
continue;
} else {
var x_13366 = cljs.core.first(seq__12344_13360__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_13366);


var G__13367 = cljs.core.next(seq__12344_13360__$1);
var G__13368 = null;
var G__13369 = (0);
var G__13370 = (0);
seq__12344_13350 = G__13367;
chunk__12345_13351 = G__13368;
count__12346_13352 = G__13369;
i__12347_13353 = G__13370;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq12332){
var G__12333 = cljs.core.first(seq12332);
var seq12332__$1 = cljs.core.next(seq12332);
var G__12334 = cljs.core.first(seq12332__$1);
var seq12332__$2 = cljs.core.next(seq12332__$1);
var G__12335 = cljs.core.first(seq12332__$2);
var seq12332__$3 = cljs.core.next(seq12332__$2);
var G__12336 = cljs.core.first(seq12332__$3);
var seq12332__$4 = cljs.core.next(seq12332__$3);
var G__12337 = cljs.core.first(seq12332__$4);
var seq12332__$5 = cljs.core.next(seq12332__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12333,G__12334,G__12335,G__12336,G__12337,seq12332__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12357_13371 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12358_13372 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12359_13373 = true;
var _STAR_print_fn_STAR__temp_val__12360_13374 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12359_13373);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12360_13374);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12358_13372);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12357_13371);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__12363 = cljs.core.get_global_hierarchy;
return (fexpr__12363.cljs$core$IFn$_invoke$arity$0 ? fexpr__12363.cljs$core$IFn$_invoke$arity$0() : fexpr__12363.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__12369 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12369,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12369,(1),null);
var G__12372 = ns;
var G__12373 = name;
var G__12374 = (function (){
var G__12377 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__12377) : cljs.compiler.emit_constant.call(null,G__12377));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__12372,G__12373,G__12374) : cljs.compiler.emit_record_value.call(null,G__12372,G__12373,G__12374));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(x)){
var G__12379 = cljs.core.keys(x);
var G__12380 = cljs.core.vals(x);
var G__12381 = cljs.compiler.emit_constants_comma_sep;
var G__12382 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__12379,G__12380,G__12381,G__12382) : cljs.compiler.emit_map.call(null,G__12379,G__12380,G__12381,G__12382));
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__12387 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__12388 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__12387,G__12388) : cljs.compiler.emit_with_meta.call(null,G__12387,G__12388));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
if((((x === (0))) && ((((1) / x) < (0))))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(-0)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__12392 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12392,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12392,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12392,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5802__auto__ = (function (){var and__5000__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5000__auto__)){
var G__12396 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__12396) : x.call(null,G__12396));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5802__auto__ = (function (){var and__5000__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5000__auto__)){
var G__12398 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__12398) : x.call(null,G__12398));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",inst_ms,")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emit_inst(date.getTime());
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__12407 = items;
var G__12408 = (function (p1__12406_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__12406_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__12407,G__12408) : cljs.compiler.emit_js_object.call(null,G__12407,G__12408));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__12418){
var map__12422 = p__12418;
var map__12422__$1 = cljs.core.__destructure_map(map__12422);
var ast = map__12422__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12422__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12422__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__12423 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__12423__$1 = cljs.core.__destructure_map(map__12423);
var cenv = map__12423__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12423__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__5002__auto__ = js_module_name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__12426 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5000__auto__ = (function (){var G__12427 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__12427) : cljs.compiler.es5_GT__EQ_.call(null,G__12427));
})();
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__5000__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__12426,cljs.analyzer.es5_allowed);
} else {
return G__12426;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5002__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__12439 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__12439,reserved);
} else {
return G__12439;
}
})();
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__12444_13391 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__12444_13392__$1 = (((G__12444_13391 instanceof cljs.core.Keyword))?G__12444_13391.fqn:null);
switch (G__12444_13392__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__5000__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__12451){
var map__12452 = p__12451;
var map__12452__$1 = cljs.core.__destructure_map(map__12452);
var arg = map__12452__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12452__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12452__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12452__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12452__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__12453 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__12453__$1 = cljs.core.__destructure_map(map__12453);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12453__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__12455){
var map__12456 = p__12455;
var map__12456__$1 = cljs.core.__destructure_map(map__12456);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12456__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12456__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12456__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__12457_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12457_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__12459 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__12459) : comma_sep.call(null,G__12459));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__12460 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__12460) : comma_sep.call(null,G__12460));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__12461){
var map__12462 = p__12461;
var map__12462__$1 = cljs.core.__destructure_map(map__12462);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12462__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12462__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12462__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__12474){
var map__12475 = p__12474;
var map__12475__$1 = cljs.core.__destructure_map(map__12475);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12475__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12475__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__12476_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12476_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__12477 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__12477) : comma_sep.call(null,G__12477));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__12478){
var map__12479 = p__12478;
var map__12479__$1 = cljs.core.__destructure_map(map__12479);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12479__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12479__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5804__auto___13418 = cljs.core.seq(items);
if(temp__5804__auto___13418){
var items_13419__$1 = temp__5804__auto___13418;
var vec__12484_13420 = items_13419__$1;
var seq__12485_13421 = cljs.core.seq(vec__12484_13420);
var first__12486_13422 = cljs.core.first(seq__12485_13421);
var seq__12485_13423__$1 = cljs.core.next(seq__12485_13421);
var vec__12487_13424 = first__12486_13422;
var k_13425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12487_13424,(0),null);
var v_13426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12487_13424,(1),null);
var r_13427 = seq__12485_13423__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_13425),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_13426) : emit_js_object_val.call(null,v_13426)));

var seq__12490_13428 = cljs.core.seq(r_13427);
var chunk__12491_13429 = null;
var count__12492_13430 = (0);
var i__12493_13431 = (0);
while(true){
if((i__12493_13431 < count__12492_13430)){
var vec__12505_13432 = chunk__12491_13429.cljs$core$IIndexed$_nth$arity$2(null,i__12493_13431);
var k_13433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12505_13432,(0),null);
var v_13434__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12505_13432,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_13433__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_13434__$1) : emit_js_object_val.call(null,v_13434__$1)));


var G__13437 = seq__12490_13428;
var G__13438 = chunk__12491_13429;
var G__13439 = count__12492_13430;
var G__13440 = (i__12493_13431 + (1));
seq__12490_13428 = G__13437;
chunk__12491_13429 = G__13438;
count__12492_13430 = G__13439;
i__12493_13431 = G__13440;
continue;
} else {
var temp__5804__auto___13442__$1 = cljs.core.seq(seq__12490_13428);
if(temp__5804__auto___13442__$1){
var seq__12490_13446__$1 = temp__5804__auto___13442__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12490_13446__$1)){
var c__5525__auto___13447 = cljs.core.chunk_first(seq__12490_13446__$1);
var G__13448 = cljs.core.chunk_rest(seq__12490_13446__$1);
var G__13449 = c__5525__auto___13447;
var G__13450 = cljs.core.count(c__5525__auto___13447);
var G__13451 = (0);
seq__12490_13428 = G__13448;
chunk__12491_13429 = G__13449;
count__12492_13430 = G__13450;
i__12493_13431 = G__13451;
continue;
} else {
var vec__12508_13452 = cljs.core.first(seq__12490_13446__$1);
var k_13453__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12508_13452,(0),null);
var v_13454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12508_13452,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_13453__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_13454__$1) : emit_js_object_val.call(null,v_13454__$1)));


var G__13455 = cljs.core.next(seq__12490_13446__$1);
var G__13456 = null;
var G__13457 = (0);
var G__13458 = (0);
seq__12490_13428 = G__13455;
chunk__12491_13429 = G__13456;
count__12492_13430 = G__13457;
i__12493_13431 = G__13458;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__12511){
var map__12512 = p__12511;
var map__12512__$1 = cljs.core.__destructure_map(map__12512);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12512__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12512__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12512__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__12513){
var map__12514 = p__12513;
var map__12514__$1 = cljs.core.__destructure_map(map__12514);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12514__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12514__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__12515){
var map__12516 = p__12515;
var map__12516__$1 = cljs.core.__destructure_map(map__12516);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12516__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__12517){
var map__12518 = p__12517;
var map__12518__$1 = cljs.core.__destructure_map(map__12518);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12518__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12518__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__12519 = cljs.analyzer.unwrap_quote(expr);
var map__12519__$1 = cljs.core.__destructure_map(map__12519);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12519__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12519__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12519__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5002__auto__ = (function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__5000__auto__){
var and__5000__auto____$1 = form;
if(cljs.core.truth_(and__5000__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = (!((const_expr == null)));
if(and__5000__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__5000__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__12524 = cljs.analyzer.unwrap_quote(expr);
var map__12524__$1 = cljs.core.__destructure_map(map__12524);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12524__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12524__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12524__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5002__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var and__5000__auto__ = (!((const_expr == null)));
if(and__5000__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__5000__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__5002__auto__ = (function (){var fexpr__12533 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__12533.cljs$core$IFn$_invoke$arity$1 ? fexpr__12533.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__12533.call(null,tag));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__12538){
var map__12539 = p__12538;
var map__12539__$1 = cljs.core.__destructure_map(map__12539);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12539__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12539__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12539__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12539__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12539__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__5002__auto__ = unchecked;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__12540){
var map__12541 = p__12540;
var map__12541__$1 = cljs.core.__destructure_map(map__12541);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12541__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12541__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12541__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12541__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__12543_13465 = cljs.core.seq(nodes);
var chunk__12544_13466 = null;
var count__12545_13467 = (0);
var i__12546_13468 = (0);
while(true){
if((i__12546_13468 < count__12545_13467)){
var map__12567_13469 = chunk__12544_13466.cljs$core$IIndexed$_nth$arity$2(null,i__12546_13468);
var map__12567_13470__$1 = cljs.core.__destructure_map(map__12567_13469);
var ts_13471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12567_13470__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__12568_13472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12567_13470__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__12568_13473__$1 = cljs.core.__destructure_map(map__12568_13472);
var then_13474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12568_13473__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__12569_13476 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_13471));
var chunk__12570_13477 = null;
var count__12571_13478 = (0);
var i__12572_13479 = (0);
while(true){
if((i__12572_13479 < count__12571_13478)){
var test_13483 = chunk__12570_13477.cljs$core$IIndexed$_nth$arity$2(null,i__12572_13479);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_13483,":");


var G__13484 = seq__12569_13476;
var G__13485 = chunk__12570_13477;
var G__13486 = count__12571_13478;
var G__13487 = (i__12572_13479 + (1));
seq__12569_13476 = G__13484;
chunk__12570_13477 = G__13485;
count__12571_13478 = G__13486;
i__12572_13479 = G__13487;
continue;
} else {
var temp__5804__auto___13488 = cljs.core.seq(seq__12569_13476);
if(temp__5804__auto___13488){
var seq__12569_13489__$1 = temp__5804__auto___13488;
if(cljs.core.chunked_seq_QMARK_(seq__12569_13489__$1)){
var c__5525__auto___13490 = cljs.core.chunk_first(seq__12569_13489__$1);
var G__13491 = cljs.core.chunk_rest(seq__12569_13489__$1);
var G__13492 = c__5525__auto___13490;
var G__13493 = cljs.core.count(c__5525__auto___13490);
var G__13494 = (0);
seq__12569_13476 = G__13491;
chunk__12570_13477 = G__13492;
count__12571_13478 = G__13493;
i__12572_13479 = G__13494;
continue;
} else {
var test_13495 = cljs.core.first(seq__12569_13489__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_13495,":");


var G__13496 = cljs.core.next(seq__12569_13489__$1);
var G__13497 = null;
var G__13498 = (0);
var G__13499 = (0);
seq__12569_13476 = G__13496;
chunk__12570_13477 = G__13497;
count__12571_13478 = G__13498;
i__12572_13479 = G__13499;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_13474);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_13474);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__13504 = seq__12543_13465;
var G__13505 = chunk__12544_13466;
var G__13506 = count__12545_13467;
var G__13507 = (i__12546_13468 + (1));
seq__12543_13465 = G__13504;
chunk__12544_13466 = G__13505;
count__12545_13467 = G__13506;
i__12546_13468 = G__13507;
continue;
} else {
var temp__5804__auto___13508 = cljs.core.seq(seq__12543_13465);
if(temp__5804__auto___13508){
var seq__12543_13509__$1 = temp__5804__auto___13508;
if(cljs.core.chunked_seq_QMARK_(seq__12543_13509__$1)){
var c__5525__auto___13510 = cljs.core.chunk_first(seq__12543_13509__$1);
var G__13511 = cljs.core.chunk_rest(seq__12543_13509__$1);
var G__13512 = c__5525__auto___13510;
var G__13513 = cljs.core.count(c__5525__auto___13510);
var G__13514 = (0);
seq__12543_13465 = G__13511;
chunk__12544_13466 = G__13512;
count__12545_13467 = G__13513;
i__12546_13468 = G__13514;
continue;
} else {
var map__12582_13515 = cljs.core.first(seq__12543_13509__$1);
var map__12582_13516__$1 = cljs.core.__destructure_map(map__12582_13515);
var ts_13517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12582_13516__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__12583_13518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12582_13516__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__12583_13519__$1 = cljs.core.__destructure_map(map__12583_13518);
var then_13520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12583_13519__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__12584_13521 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_13517));
var chunk__12585_13522 = null;
var count__12586_13523 = (0);
var i__12587_13524 = (0);
while(true){
if((i__12587_13524 < count__12586_13523)){
var test_13525 = chunk__12585_13522.cljs$core$IIndexed$_nth$arity$2(null,i__12587_13524);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_13525,":");


var G__13526 = seq__12584_13521;
var G__13527 = chunk__12585_13522;
var G__13528 = count__12586_13523;
var G__13529 = (i__12587_13524 + (1));
seq__12584_13521 = G__13526;
chunk__12585_13522 = G__13527;
count__12586_13523 = G__13528;
i__12587_13524 = G__13529;
continue;
} else {
var temp__5804__auto___13530__$1 = cljs.core.seq(seq__12584_13521);
if(temp__5804__auto___13530__$1){
var seq__12584_13531__$1 = temp__5804__auto___13530__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12584_13531__$1)){
var c__5525__auto___13532 = cljs.core.chunk_first(seq__12584_13531__$1);
var G__13533 = cljs.core.chunk_rest(seq__12584_13531__$1);
var G__13534 = c__5525__auto___13532;
var G__13535 = cljs.core.count(c__5525__auto___13532);
var G__13536 = (0);
seq__12584_13521 = G__13533;
chunk__12585_13522 = G__13534;
count__12586_13523 = G__13535;
i__12587_13524 = G__13536;
continue;
} else {
var test_13537 = cljs.core.first(seq__12584_13531__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_13537,":");


var G__13538 = cljs.core.next(seq__12584_13531__$1);
var G__13539 = null;
var G__13540 = (0);
var G__13541 = (0);
seq__12584_13521 = G__13538;
chunk__12585_13522 = G__13539;
count__12586_13523 = G__13540;
i__12587_13524 = G__13541;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_13520);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_13520);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__13543 = cljs.core.next(seq__12543_13509__$1);
var G__13544 = null;
var G__13545 = (0);
var G__13546 = (0);
seq__12543_13465 = G__13543;
chunk__12544_13466 = G__13544;
count__12545_13467 = G__13545;
i__12546_13468 = G__13546;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__12594){
var map__12595 = p__12594;
var map__12595__$1 = cljs.core.__destructure_map(map__12595);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12595__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12595__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12599 = env;
var G__12600 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__12599,G__12600) : cljs.compiler.resolve_type.call(null,G__12599,G__12600));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__12601 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__12596_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__12596_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__12596_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__12608 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__12608,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__12608;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12611 = env;
var G__12612 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__12611,G__12612) : cljs.compiler.resolve_type.call(null,G__12611,G__12612));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12613_SHARP_){
return cljs.compiler.resolve_type(env,p1__12613_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__12619 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__12620 = cljs.core.seq(vec__12619);
var first__12621 = cljs.core.first(seq__12620);
var seq__12620__$1 = cljs.core.next(seq__12620);
var p = first__12621;
var first__12621__$1 = cljs.core.first(seq__12620__$1);
var seq__12620__$2 = cljs.core.next(seq__12620__$1);
var ts = first__12621__$1;
var first__12621__$2 = cljs.core.first(seq__12620__$2);
var seq__12620__$3 = cljs.core.next(seq__12620__$2);
var n = first__12621__$2;
var xs = seq__12620__$3;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__5000__auto__){
var and__5000__auto____$1 = ts;
if(cljs.core.truth_(and__5000__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__12622 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__12623 = cljs.core.seq(vec__12622);
var first__12624 = cljs.core.first(seq__12623);
var seq__12623__$1 = cljs.core.next(seq__12623);
var p = first__12624;
var first__12624__$1 = cljs.core.first(seq__12623__$1);
var seq__12623__$2 = cljs.core.next(seq__12623__$1);
var ts = first__12624__$1;
var xs = seq__12623__$2;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__5000__auto__){
var and__5000__auto____$1 = ts;
if(cljs.core.truth_(and__5000__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__12626 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__12625 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__12625.cljs$core$IFn$_invoke$arity$1 ? fexpr__12625.cljs$core$IFn$_invoke$arity$1(G__12626) : fexpr__12625.call(null,G__12626));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__12629 = arguments.length;
switch (G__12629) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__12643 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12627_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__12627_SHARP_);
} else {
return p1__12627_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__12644 = cljs.core.seq(vec__12643);
var first__12645 = cljs.core.first(seq__12644);
var seq__12644__$1 = cljs.core.next(seq__12644);
var x = first__12645;
var ys = seq__12644__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__12649 = cljs.core.seq(ys);
var chunk__12650 = null;
var count__12651 = (0);
var i__12652 = (0);
while(true){
if((i__12652 < count__12651)){
var next_line = chunk__12650.cljs$core$IIndexed$_nth$arity$2(null,i__12652);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__13557 = seq__12649;
var G__13558 = chunk__12650;
var G__13559 = count__12651;
var G__13560 = (i__12652 + (1));
seq__12649 = G__13557;
chunk__12650 = G__13558;
count__12651 = G__13559;
i__12652 = G__13560;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12649);
if(temp__5804__auto__){
var seq__12649__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12649__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12649__$1);
var G__13561 = cljs.core.chunk_rest(seq__12649__$1);
var G__13562 = c__5525__auto__;
var G__13563 = cljs.core.count(c__5525__auto__);
var G__13564 = (0);
seq__12649 = G__13561;
chunk__12650 = G__13562;
count__12651 = G__13563;
i__12652 = G__13564;
continue;
} else {
var next_line = cljs.core.first(seq__12649__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__13565 = cljs.core.next(seq__12649__$1);
var G__13566 = null;
var G__13567 = (0);
var G__13568 = (0);
seq__12649 = G__13565;
chunk__12650 = G__13566;
count__12651 = G__13567;
i__12652 = G__13568;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__12655_13570 = cljs.core.seq(docs__$2);
var chunk__12656_13571 = null;
var count__12657_13572 = (0);
var i__12658_13573 = (0);
while(true){
if((i__12658_13573 < count__12657_13572)){
var e_13575 = chunk__12656_13571.cljs$core$IIndexed$_nth$arity$2(null,i__12658_13573);
if(cljs.core.truth_(e_13575)){
print_comment_lines(e_13575);
} else {
}


var G__13576 = seq__12655_13570;
var G__13577 = chunk__12656_13571;
var G__13578 = count__12657_13572;
var G__13579 = (i__12658_13573 + (1));
seq__12655_13570 = G__13576;
chunk__12656_13571 = G__13577;
count__12657_13572 = G__13578;
i__12658_13573 = G__13579;
continue;
} else {
var temp__5804__auto___13583 = cljs.core.seq(seq__12655_13570);
if(temp__5804__auto___13583){
var seq__12655_13584__$1 = temp__5804__auto___13583;
if(cljs.core.chunked_seq_QMARK_(seq__12655_13584__$1)){
var c__5525__auto___13585 = cljs.core.chunk_first(seq__12655_13584__$1);
var G__13586 = cljs.core.chunk_rest(seq__12655_13584__$1);
var G__13587 = c__5525__auto___13585;
var G__13588 = cljs.core.count(c__5525__auto___13585);
var G__13589 = (0);
seq__12655_13570 = G__13586;
chunk__12656_13571 = G__13587;
count__12657_13572 = G__13588;
i__12658_13573 = G__13589;
continue;
} else {
var e_13590 = cljs.core.first(seq__12655_13584__$1);
if(cljs.core.truth_(e_13590)){
print_comment_lines(e_13590);
} else {
}


var G__13591 = cljs.core.next(seq__12655_13584__$1);
var G__13592 = null;
var G__13593 = (0);
var G__13594 = (0);
seq__12655_13570 = G__13591;
chunk__12656_13571 = G__13592;
count__12657_13572 = G__13593;
i__12658_13573 = G__13594;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__5000__auto__ = cljs.core.some((function (p1__12669_SHARP_){
return goog.string.startsWith(p1__12669_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = opts;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__5000__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__12672){
var map__12673 = p__12672;
var map__12673__$1 = cljs.core.__destructure_map(map__12673);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__5002__auto__ = init;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5802__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5802__auto__)){
var define = temp__5802__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
return test;
} else {
return and__5000__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__12681){
var map__12682 = p__12681;
var map__12682__$1 = cljs.core.__destructure_map(map__12682);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12682__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12682__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12682__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__12683_13610 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__12684_13611 = null;
var count__12685_13612 = (0);
var i__12686_13613 = (0);
while(true){
if((i__12686_13613 < count__12685_13612)){
var vec__12698_13614 = chunk__12684_13611.cljs$core$IIndexed$_nth$arity$2(null,i__12686_13613);
var i_13615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12698_13614,(0),null);
var param_13616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12698_13614,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_13616);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__13617 = seq__12683_13610;
var G__13618 = chunk__12684_13611;
var G__13619 = count__12685_13612;
var G__13620 = (i__12686_13613 + (1));
seq__12683_13610 = G__13617;
chunk__12684_13611 = G__13618;
count__12685_13612 = G__13619;
i__12686_13613 = G__13620;
continue;
} else {
var temp__5804__auto___13621 = cljs.core.seq(seq__12683_13610);
if(temp__5804__auto___13621){
var seq__12683_13622__$1 = temp__5804__auto___13621;
if(cljs.core.chunked_seq_QMARK_(seq__12683_13622__$1)){
var c__5525__auto___13623 = cljs.core.chunk_first(seq__12683_13622__$1);
var G__13624 = cljs.core.chunk_rest(seq__12683_13622__$1);
var G__13625 = c__5525__auto___13623;
var G__13626 = cljs.core.count(c__5525__auto___13623);
var G__13627 = (0);
seq__12683_13610 = G__13624;
chunk__12684_13611 = G__13625;
count__12685_13612 = G__13626;
i__12686_13613 = G__13627;
continue;
} else {
var vec__12702_13628 = cljs.core.first(seq__12683_13622__$1);
var i_13629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12702_13628,(0),null);
var param_13630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12702_13628,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_13630);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__13635 = cljs.core.next(seq__12683_13622__$1);
var G__13636 = null;
var G__13637 = (0);
var G__13638 = (0);
seq__12683_13610 = G__13635;
chunk__12684_13611 = G__13636;
count__12685_13612 = G__13637;
i__12686_13613 = G__13638;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__12709_13640 = cljs.core.seq(params);
var chunk__12710_13641 = null;
var count__12711_13642 = (0);
var i__12712_13643 = (0);
while(true){
if((i__12712_13643 < count__12711_13642)){
var param_13644 = chunk__12710_13641.cljs$core$IIndexed$_nth$arity$2(null,i__12712_13643);
cljs.compiler.emit(param_13644);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13644,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13645 = seq__12709_13640;
var G__13646 = chunk__12710_13641;
var G__13647 = count__12711_13642;
var G__13648 = (i__12712_13643 + (1));
seq__12709_13640 = G__13645;
chunk__12710_13641 = G__13646;
count__12711_13642 = G__13647;
i__12712_13643 = G__13648;
continue;
} else {
var temp__5804__auto___13651 = cljs.core.seq(seq__12709_13640);
if(temp__5804__auto___13651){
var seq__12709_13657__$1 = temp__5804__auto___13651;
if(cljs.core.chunked_seq_QMARK_(seq__12709_13657__$1)){
var c__5525__auto___13658 = cljs.core.chunk_first(seq__12709_13657__$1);
var G__13659 = cljs.core.chunk_rest(seq__12709_13657__$1);
var G__13660 = c__5525__auto___13658;
var G__13661 = cljs.core.count(c__5525__auto___13658);
var G__13662 = (0);
seq__12709_13640 = G__13659;
chunk__12710_13641 = G__13660;
count__12711_13642 = G__13661;
i__12712_13643 = G__13662;
continue;
} else {
var param_13664 = cljs.core.first(seq__12709_13657__$1);
cljs.compiler.emit(param_13664);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13664,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13665 = cljs.core.next(seq__12709_13657__$1);
var G__13666 = null;
var G__13667 = (0);
var G__13668 = (0);
seq__12709_13640 = G__13665;
chunk__12710_13641 = G__13666;
count__12711_13642 = G__13667;
i__12712_13643 = G__13668;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__12714_13670 = cljs.core.seq(params);
var chunk__12715_13671 = null;
var count__12716_13672 = (0);
var i__12717_13673 = (0);
while(true){
if((i__12717_13673 < count__12716_13672)){
var param_13674 = chunk__12715_13671.cljs$core$IIndexed$_nth$arity$2(null,i__12717_13673);
cljs.compiler.emit(param_13674);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13674,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13675 = seq__12714_13670;
var G__13676 = chunk__12715_13671;
var G__13677 = count__12716_13672;
var G__13678 = (i__12717_13673 + (1));
seq__12714_13670 = G__13675;
chunk__12715_13671 = G__13676;
count__12716_13672 = G__13677;
i__12717_13673 = G__13678;
continue;
} else {
var temp__5804__auto___13679 = cljs.core.seq(seq__12714_13670);
if(temp__5804__auto___13679){
var seq__12714_13680__$1 = temp__5804__auto___13679;
if(cljs.core.chunked_seq_QMARK_(seq__12714_13680__$1)){
var c__5525__auto___13681 = cljs.core.chunk_first(seq__12714_13680__$1);
var G__13682 = cljs.core.chunk_rest(seq__12714_13680__$1);
var G__13683 = c__5525__auto___13681;
var G__13684 = cljs.core.count(c__5525__auto___13681);
var G__13685 = (0);
seq__12714_13670 = G__13682;
chunk__12715_13671 = G__13683;
count__12716_13672 = G__13684;
i__12717_13673 = G__13685;
continue;
} else {
var param_13687 = cljs.core.first(seq__12714_13680__$1);
cljs.compiler.emit(param_13687);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13687,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13689 = cljs.core.next(seq__12714_13680__$1);
var G__13690 = null;
var G__13691 = (0);
var G__13692 = (0);
seq__12714_13670 = G__13689;
chunk__12715_13671 = G__13690;
count__12716_13672 = G__13691;
i__12717_13673 = G__13692;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__12718 = cljs.core.seq(params);
var chunk__12719 = null;
var count__12720 = (0);
var i__12721 = (0);
while(true){
if((i__12721 < count__12720)){
var param = chunk__12719.cljs$core$IIndexed$_nth$arity$2(null,i__12721);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13693 = seq__12718;
var G__13694 = chunk__12719;
var G__13695 = count__12720;
var G__13696 = (i__12721 + (1));
seq__12718 = G__13693;
chunk__12719 = G__13694;
count__12720 = G__13695;
i__12721 = G__13696;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12718);
if(temp__5804__auto__){
var seq__12718__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12718__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12718__$1);
var G__13697 = cljs.core.chunk_rest(seq__12718__$1);
var G__13698 = c__5525__auto__;
var G__13699 = cljs.core.count(c__5525__auto__);
var G__13700 = (0);
seq__12718 = G__13697;
chunk__12719 = G__13698;
count__12720 = G__13699;
i__12721 = G__13700;
continue;
} else {
var param = cljs.core.first(seq__12718__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13701 = cljs.core.next(seq__12718__$1);
var G__13702 = null;
var G__13703 = (0);
var G__13704 = (0);
seq__12718 = G__13701;
chunk__12719 = G__13702;
count__12720 = G__13703;
i__12721 = G__13704;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__12722){
var map__12724 = p__12722;
var map__12724__$1 = cljs.core.__destructure_map(map__12724);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__12729){
var map__12731 = p__12729;
var map__12731__$1 = cljs.core.__destructure_map(map__12731);
var f = map__12731__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_13708__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_13709 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_13708__$1);
var delegate_name_13710 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_13709),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_13710," = function (");

var seq__12734_13711 = cljs.core.seq(params);
var chunk__12735_13712 = null;
var count__12736_13713 = (0);
var i__12737_13714 = (0);
while(true){
if((i__12737_13714 < count__12736_13713)){
var param_13715 = chunk__12735_13712.cljs$core$IIndexed$_nth$arity$2(null,i__12737_13714);
cljs.compiler.emit(param_13715);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13715,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13716 = seq__12734_13711;
var G__13717 = chunk__12735_13712;
var G__13718 = count__12736_13713;
var G__13719 = (i__12737_13714 + (1));
seq__12734_13711 = G__13716;
chunk__12735_13712 = G__13717;
count__12736_13713 = G__13718;
i__12737_13714 = G__13719;
continue;
} else {
var temp__5804__auto___13720 = cljs.core.seq(seq__12734_13711);
if(temp__5804__auto___13720){
var seq__12734_13722__$1 = temp__5804__auto___13720;
if(cljs.core.chunked_seq_QMARK_(seq__12734_13722__$1)){
var c__5525__auto___13723 = cljs.core.chunk_first(seq__12734_13722__$1);
var G__13724 = cljs.core.chunk_rest(seq__12734_13722__$1);
var G__13725 = c__5525__auto___13723;
var G__13726 = cljs.core.count(c__5525__auto___13723);
var G__13727 = (0);
seq__12734_13711 = G__13724;
chunk__12735_13712 = G__13725;
count__12736_13713 = G__13726;
i__12737_13714 = G__13727;
continue;
} else {
var param_13728 = cljs.core.first(seq__12734_13722__$1);
cljs.compiler.emit(param_13728);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13728,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13730 = cljs.core.next(seq__12734_13722__$1);
var G__13731 = null;
var G__13732 = (0);
var G__13733 = (0);
seq__12734_13711 = G__13730;
chunk__12735_13712 = G__13731;
count__12736_13713 = G__13732;
i__12737_13714 = G__13733;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_13709," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_13734 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_13734,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_13710,".call(this,");

var seq__12765_13735 = cljs.core.seq(params);
var chunk__12766_13736 = null;
var count__12767_13737 = (0);
var i__12768_13738 = (0);
while(true){
if((i__12768_13738 < count__12767_13737)){
var param_13739 = chunk__12766_13736.cljs$core$IIndexed$_nth$arity$2(null,i__12768_13738);
cljs.compiler.emit(param_13739);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13739,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13741 = seq__12765_13735;
var G__13742 = chunk__12766_13736;
var G__13743 = count__12767_13737;
var G__13744 = (i__12768_13738 + (1));
seq__12765_13735 = G__13741;
chunk__12766_13736 = G__13742;
count__12767_13737 = G__13743;
i__12768_13738 = G__13744;
continue;
} else {
var temp__5804__auto___13745 = cljs.core.seq(seq__12765_13735);
if(temp__5804__auto___13745){
var seq__12765_13746__$1 = temp__5804__auto___13745;
if(cljs.core.chunked_seq_QMARK_(seq__12765_13746__$1)){
var c__5525__auto___13747 = cljs.core.chunk_first(seq__12765_13746__$1);
var G__13748 = cljs.core.chunk_rest(seq__12765_13746__$1);
var G__13749 = c__5525__auto___13747;
var G__13750 = cljs.core.count(c__5525__auto___13747);
var G__13751 = (0);
seq__12765_13735 = G__13748;
chunk__12766_13736 = G__13749;
count__12767_13737 = G__13750;
i__12768_13738 = G__13751;
continue;
} else {
var param_13753 = cljs.core.first(seq__12765_13746__$1);
cljs.compiler.emit(param_13753);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13753,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__13754 = cljs.core.next(seq__12765_13746__$1);
var G__13755 = null;
var G__13756 = (0);
var G__13757 = (0);
seq__12765_13735 = G__13754;
chunk__12766_13736 = G__13755;
count__12767_13737 = G__13756;
i__12768_13738 = G__13757;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13709,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_13709,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_13708__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13709,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13710,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_13709,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__12796){
var map__12797 = p__12796;
var map__12797__$1 = cljs.core.__destructure_map(map__12797);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12797__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12777_SHARP_){
var and__5000__auto__ = p1__12777_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__12777_SHARP_));
} else {
return and__5000__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__5002__auto__ = in_loop;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_13765__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_13766 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_13765__$1);
var maxparams_13767 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_13768 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_13766),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_13769 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__12782_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__12782_SHARP_)));
}),cljs.core.seq(mmap_13768));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_13766," = null;");

var seq__12824_13771 = cljs.core.seq(ms_13769);
var chunk__12825_13772 = null;
var count__12826_13773 = (0);
var i__12827_13774 = (0);
while(true){
if((i__12827_13774 < count__12826_13773)){
var vec__12834_13775 = chunk__12825_13772.cljs$core$IIndexed$_nth$arity$2(null,i__12827_13774);
var n_13776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12834_13775,(0),null);
var meth_13777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12834_13775,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_13776," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13777))){
cljs.compiler.emit_variadic_fn_method(meth_13777);
} else {
cljs.compiler.emit_fn_method(meth_13777);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__13778 = seq__12824_13771;
var G__13779 = chunk__12825_13772;
var G__13780 = count__12826_13773;
var G__13781 = (i__12827_13774 + (1));
seq__12824_13771 = G__13778;
chunk__12825_13772 = G__13779;
count__12826_13773 = G__13780;
i__12827_13774 = G__13781;
continue;
} else {
var temp__5804__auto___13782 = cljs.core.seq(seq__12824_13771);
if(temp__5804__auto___13782){
var seq__12824_13783__$1 = temp__5804__auto___13782;
if(cljs.core.chunked_seq_QMARK_(seq__12824_13783__$1)){
var c__5525__auto___13784 = cljs.core.chunk_first(seq__12824_13783__$1);
var G__13785 = cljs.core.chunk_rest(seq__12824_13783__$1);
var G__13786 = c__5525__auto___13784;
var G__13787 = cljs.core.count(c__5525__auto___13784);
var G__13788 = (0);
seq__12824_13771 = G__13785;
chunk__12825_13772 = G__13786;
count__12826_13773 = G__13787;
i__12827_13774 = G__13788;
continue;
} else {
var vec__12837_13791 = cljs.core.first(seq__12824_13783__$1);
var n_13792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12837_13791,(0),null);
var meth_13793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12837_13791,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_13792," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13793))){
cljs.compiler.emit_variadic_fn_method(meth_13793);
} else {
cljs.compiler.emit_fn_method(meth_13793);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__13794 = cljs.core.next(seq__12824_13783__$1);
var G__13795 = null;
var G__13796 = (0);
var G__13797 = (0);
seq__12824_13771 = G__13794;
chunk__12825_13772 = G__13795;
count__12826_13773 = G__13796;
i__12827_13774 = G__13797;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13766," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_13767),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_13767)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_13767));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__12852_13802 = cljs.core.seq(ms_13769);
var chunk__12853_13803 = null;
var count__12854_13804 = (0);
var i__12855_13805 = (0);
while(true){
if((i__12855_13805 < count__12854_13804)){
var vec__12889_13807 = chunk__12853_13803.cljs$core$IIndexed$_nth$arity$2(null,i__12855_13805);
var n_13808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12889_13807,(0),null);
var meth_13809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12889_13807,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13809))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_13810 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_13810," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_13811 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_13810," = new cljs.core.IndexedSeq(",a_13811,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_13808,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_13767)),(((cljs.core.count(maxparams_13767) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_13810,");"], 0));
} else {
var pcnt_13812 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13809));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_13812,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_13808,".call(this",(((pcnt_13812 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_13812,maxparams_13767)),null,(1),null)),(2),null))),");");
}


var G__13815 = seq__12852_13802;
var G__13816 = chunk__12853_13803;
var G__13817 = count__12854_13804;
var G__13818 = (i__12855_13805 + (1));
seq__12852_13802 = G__13815;
chunk__12853_13803 = G__13816;
count__12854_13804 = G__13817;
i__12855_13805 = G__13818;
continue;
} else {
var temp__5804__auto___13819 = cljs.core.seq(seq__12852_13802);
if(temp__5804__auto___13819){
var seq__12852_13820__$1 = temp__5804__auto___13819;
if(cljs.core.chunked_seq_QMARK_(seq__12852_13820__$1)){
var c__5525__auto___13824 = cljs.core.chunk_first(seq__12852_13820__$1);
var G__13825 = cljs.core.chunk_rest(seq__12852_13820__$1);
var G__13826 = c__5525__auto___13824;
var G__13827 = cljs.core.count(c__5525__auto___13824);
var G__13828 = (0);
seq__12852_13802 = G__13825;
chunk__12853_13803 = G__13826;
count__12854_13804 = G__13827;
i__12855_13805 = G__13828;
continue;
} else {
var vec__12896_13829 = cljs.core.first(seq__12852_13820__$1);
var n_13830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12896_13829,(0),null);
var meth_13831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12896_13829,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13831))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_13832 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_13832," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_13833 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_13832," = new cljs.core.IndexedSeq(",a_13833,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_13830,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_13767)),(((cljs.core.count(maxparams_13767) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_13832,");"], 0));
} else {
var pcnt_13834 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13831));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_13834,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_13830,".call(this",(((pcnt_13834 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_13834,maxparams_13767)),null,(1),null)),(2),null))),");");
}


var G__13835 = cljs.core.next(seq__12852_13820__$1);
var G__13836 = null;
var G__13837 = (0);
var G__13838 = (0);
seq__12852_13802 = G__13835;
chunk__12853_13803 = G__13836;
count__12854_13804 = G__13837;
i__12855_13805 = G__13838;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_13840 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_13769)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_13840,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13766,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13766,".cljs$lang$applyTo = ",cljs.core.some((function (p1__12789_SHARP_){
var vec__12928 = p1__12789_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12928,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12928,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_13769),".cljs$lang$applyTo;");
} else {
}

var seq__12934_13843 = cljs.core.seq(ms_13769);
var chunk__12935_13844 = null;
var count__12936_13845 = (0);
var i__12937_13846 = (0);
while(true){
if((i__12937_13846 < count__12936_13845)){
var vec__12948_13847 = chunk__12935_13844.cljs$core$IIndexed$_nth$arity$2(null,i__12937_13846);
var n_13848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12948_13847,(0),null);
var meth_13849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12948_13847,(1),null);
var c_13852 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13849));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13849))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13766,".cljs$core$IFn$_invoke$arity$variadic = ",n_13848,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_13766,".cljs$core$IFn$_invoke$arity$",c_13852," = ",n_13848,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__13855 = seq__12934_13843;
var G__13856 = chunk__12935_13844;
var G__13857 = count__12936_13845;
var G__13858 = (i__12937_13846 + (1));
seq__12934_13843 = G__13855;
chunk__12935_13844 = G__13856;
count__12936_13845 = G__13857;
i__12937_13846 = G__13858;
continue;
} else {
var temp__5804__auto___13862 = cljs.core.seq(seq__12934_13843);
if(temp__5804__auto___13862){
var seq__12934_13863__$1 = temp__5804__auto___13862;
if(cljs.core.chunked_seq_QMARK_(seq__12934_13863__$1)){
var c__5525__auto___13864 = cljs.core.chunk_first(seq__12934_13863__$1);
var G__13865 = cljs.core.chunk_rest(seq__12934_13863__$1);
var G__13866 = c__5525__auto___13864;
var G__13867 = cljs.core.count(c__5525__auto___13864);
var G__13868 = (0);
seq__12934_13843 = G__13865;
chunk__12935_13844 = G__13866;
count__12936_13845 = G__13867;
i__12937_13846 = G__13868;
continue;
} else {
var vec__12957_13869 = cljs.core.first(seq__12934_13863__$1);
var n_13870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12957_13869,(0),null);
var meth_13871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12957_13869,(1),null);
var c_13872 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13871));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13871))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_13766,".cljs$core$IFn$_invoke$arity$variadic = ",n_13870,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_13766,".cljs$core$IFn$_invoke$arity$",c_13872," = ",n_13870,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__13873 = cljs.core.next(seq__12934_13863__$1);
var G__13874 = null;
var G__13875 = (0);
var G__13876 = (0);
seq__12934_13843 = G__13873;
chunk__12935_13844 = G__13874;
count__12936_13845 = G__13875;
i__12937_13846 = G__13876;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_13766,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__12962){
var map__12963 = p__12962;
var map__12963__$1 = cljs.core.__destructure_map(map__12963);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12963__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12963__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12963__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__12964_13878 = cljs.core.seq(statements);
var chunk__12965_13879 = null;
var count__12966_13880 = (0);
var i__12967_13881 = (0);
while(true){
if((i__12967_13881 < count__12966_13880)){
var s_13882 = chunk__12965_13879.cljs$core$IIndexed$_nth$arity$2(null,i__12967_13881);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_13882);


var G__13883 = seq__12964_13878;
var G__13884 = chunk__12965_13879;
var G__13885 = count__12966_13880;
var G__13886 = (i__12967_13881 + (1));
seq__12964_13878 = G__13883;
chunk__12965_13879 = G__13884;
count__12966_13880 = G__13885;
i__12967_13881 = G__13886;
continue;
} else {
var temp__5804__auto___13887 = cljs.core.seq(seq__12964_13878);
if(temp__5804__auto___13887){
var seq__12964_13888__$1 = temp__5804__auto___13887;
if(cljs.core.chunked_seq_QMARK_(seq__12964_13888__$1)){
var c__5525__auto___13889 = cljs.core.chunk_first(seq__12964_13888__$1);
var G__13890 = cljs.core.chunk_rest(seq__12964_13888__$1);
var G__13891 = c__5525__auto___13889;
var G__13892 = cljs.core.count(c__5525__auto___13889);
var G__13893 = (0);
seq__12964_13878 = G__13890;
chunk__12965_13879 = G__13891;
count__12966_13880 = G__13892;
i__12967_13881 = G__13893;
continue;
} else {
var s_13894 = cljs.core.first(seq__12964_13888__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_13894);


var G__13895 = cljs.core.next(seq__12964_13888__$1);
var G__13896 = null;
var G__13897 = (0);
var G__13898 = (0);
seq__12964_13878 = G__13895;
chunk__12965_13879 = G__13896;
count__12966_13880 = G__13897;
i__12967_13881 = G__13898;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__12988){
var map__12993 = p__12988;
var map__12993__$1 = cljs.core.__destructure_map(map__12993);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12993__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12993__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12993__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12993__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13013,is_loop){
var map__13015 = p__13013;
var map__13015__$1 = cljs.core.__destructure_map(map__13015);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13015__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__13017_13904 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__13018_13905 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__13018_13905);

try{var seq__13024_13906 = cljs.core.seq(bindings);
var chunk__13025_13907 = null;
var count__13026_13908 = (0);
var i__13027_13909 = (0);
while(true){
if((i__13027_13909 < count__13026_13908)){
var map__13030_13910 = chunk__13025_13907.cljs$core$IIndexed$_nth$arity$2(null,i__13027_13909);
var map__13030_13911__$1 = cljs.core.__destructure_map(map__13030_13910);
var binding_13912 = map__13030_13911__$1;
var init_13913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13030_13911__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_13912);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_13913,";");


var G__13922 = seq__13024_13906;
var G__13923 = chunk__13025_13907;
var G__13924 = count__13026_13908;
var G__13925 = (i__13027_13909 + (1));
seq__13024_13906 = G__13922;
chunk__13025_13907 = G__13923;
count__13026_13908 = G__13924;
i__13027_13909 = G__13925;
continue;
} else {
var temp__5804__auto___13926 = cljs.core.seq(seq__13024_13906);
if(temp__5804__auto___13926){
var seq__13024_13927__$1 = temp__5804__auto___13926;
if(cljs.core.chunked_seq_QMARK_(seq__13024_13927__$1)){
var c__5525__auto___13928 = cljs.core.chunk_first(seq__13024_13927__$1);
var G__13929 = cljs.core.chunk_rest(seq__13024_13927__$1);
var G__13930 = c__5525__auto___13928;
var G__13931 = cljs.core.count(c__5525__auto___13928);
var G__13932 = (0);
seq__13024_13906 = G__13929;
chunk__13025_13907 = G__13930;
count__13026_13908 = G__13931;
i__13027_13909 = G__13932;
continue;
} else {
var map__13032_13933 = cljs.core.first(seq__13024_13927__$1);
var map__13032_13934__$1 = cljs.core.__destructure_map(map__13032_13933);
var binding_13935 = map__13032_13934__$1;
var init_13936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13032_13934__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_13935);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_13936,";");


var G__13937 = cljs.core.next(seq__13024_13927__$1);
var G__13938 = null;
var G__13939 = (0);
var G__13940 = (0);
seq__13024_13906 = G__13937;
chunk__13025_13907 = G__13938;
count__13026_13908 = G__13939;
i__13027_13909 = G__13940;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__13017_13904);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__13036){
var map__13037 = p__13036;
var map__13037__$1 = cljs.core.__destructure_map(map__13037);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13037__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13037__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13037__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5593__auto___13953 = cljs.core.count(exprs);
var i_13954 = (0);
while(true){
if((i_13954 < n__5593__auto___13953)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_13954) : temps.call(null,i_13954))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_13954) : exprs.call(null,i_13954)),";");

var G__13956 = (i_13954 + (1));
i_13954 = G__13956;
continue;
} else {
}
break;
}

var n__5593__auto___13957 = cljs.core.count(exprs);
var i_13958 = (0);
while(true){
if((i_13958 < n__5593__auto___13957)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_13958) : params.call(null,i_13958)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_13958) : temps.call(null,i_13958)),";");

var G__13959 = (i_13958 + (1));
i_13958 = G__13959;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__13039){
var map__13040 = p__13039;
var map__13040__$1 = cljs.core.__destructure_map(map__13040);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13040__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13040__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13040__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__13041_13962 = cljs.core.seq(bindings);
var chunk__13042_13963 = null;
var count__13043_13964 = (0);
var i__13044_13965 = (0);
while(true){
if((i__13044_13965 < count__13043_13964)){
var map__13053_13966 = chunk__13042_13963.cljs$core$IIndexed$_nth$arity$2(null,i__13044_13965);
var map__13053_13967__$1 = cljs.core.__destructure_map(map__13053_13966);
var binding_13968 = map__13053_13967__$1;
var init_13969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13053_13967__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_13968)," = ",init_13969,";");


var G__13970 = seq__13041_13962;
var G__13971 = chunk__13042_13963;
var G__13972 = count__13043_13964;
var G__13973 = (i__13044_13965 + (1));
seq__13041_13962 = G__13970;
chunk__13042_13963 = G__13971;
count__13043_13964 = G__13972;
i__13044_13965 = G__13973;
continue;
} else {
var temp__5804__auto___13975 = cljs.core.seq(seq__13041_13962);
if(temp__5804__auto___13975){
var seq__13041_13976__$1 = temp__5804__auto___13975;
if(cljs.core.chunked_seq_QMARK_(seq__13041_13976__$1)){
var c__5525__auto___13977 = cljs.core.chunk_first(seq__13041_13976__$1);
var G__13978 = cljs.core.chunk_rest(seq__13041_13976__$1);
var G__13979 = c__5525__auto___13977;
var G__13980 = cljs.core.count(c__5525__auto___13977);
var G__13981 = (0);
seq__13041_13962 = G__13978;
chunk__13042_13963 = G__13979;
count__13043_13964 = G__13980;
i__13044_13965 = G__13981;
continue;
} else {
var map__13054_13983 = cljs.core.first(seq__13041_13976__$1);
var map__13054_13984__$1 = cljs.core.__destructure_map(map__13054_13983);
var binding_13985 = map__13054_13984__$1;
var init_13986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13054_13984__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_13985)," = ",init_13986,";");


var G__13988 = cljs.core.next(seq__13041_13976__$1);
var G__13989 = null;
var G__13990 = (0);
var G__13991 = (0);
seq__13041_13962 = G__13988;
chunk__13042_13963 = G__13989;
count__13043_13964 = G__13990;
i__13044_13965 = G__13991;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__13065){
var map__13066 = p__13065;
var map__13066__$1 = cljs.core.__destructure_map(map__13066);
var expr = map__13066__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13066__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13066__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13066__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__5000__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__5000__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__5000__auto__ = protocol;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = tag;
if(cljs.core.truth_(and__5000__auto____$1)){
var or__5002__auto__ = (function (){var and__5000__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = protocol;
if(cljs.core.truth_(and__5000__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto____$2 = (function (){var or__5002__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__5000__auto____$2)){
var or__5002__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
var and__5000__auto____$3 = (!(cljs.core.set_QMARK_(tag)));
if(and__5000__auto____$3){
var and__5000__auto____$4 = cljs.core.not((function (){var fexpr__13070 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__13070.cljs$core$IFn$_invoke$arity$1 ? fexpr__13070.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__13070.call(null,tag));
})());
if(and__5000__auto____$4){
var temp__5804__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5804__auto__)){
var ps = temp__5804__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
}
} else {
return and__5000__auto____$2;
}
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__13073 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__13073.cljs$core$IFn$_invoke$arity$1 ? fexpr__13073.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__13073.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var temp__5804__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5804__auto__)){
var ns_str = temp__5804__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__13067 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return (arity > mfa);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__13061_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13061_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__13062_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13062_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(1),null);
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_14014 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_14014,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_14015 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_14015,args)),(((mfa_14015 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_14015,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
var G__13075 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__13074 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__13074.cljs$core$IFn$_invoke$arity$1 ? fexpr__13074.cljs$core$IFn$_invoke$arity$1(G__13075) : fexpr__13074.call(null,G__13075));
} else {
return and__5000__auto__;
}
})())){
var fprop_14020 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_14020," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_14020,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_14020," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_14020,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__13080){
var map__13081 = p__13080;
var map__13081__$1 = cljs.core.__destructure_map(map__13081);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13081__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13081__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13081__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__13083){
var map__13084 = p__13083;
var map__13084__$1 = cljs.core.__destructure_map(map__13084);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13084__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13084__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13084__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(sublib,/\./);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13085_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13085_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__13086 = cljs.analyzer.lib_AMPERSAND_sublib(lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13086,(0),null);
var sublib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13086,(1),null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.sublib_select(sublib),";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__13089 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__13089__$1 = cljs.core.__destructure_map(map__13089);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13089__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13089__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__13090 = options;
var map__13090__$1 = cljs.core.__destructure_map(map__13090);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13090__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13090__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13090__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__13091 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__13097 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__13097__$1 = cljs.core.__destructure_map(map__13097);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13097__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13097__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091,(1),null);
var vec__13094 = (function (){var map__13098 = cljs.core.group_by(cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__13098__$1 = cljs.core.__destructure_map(map__13098);
var goog_modules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13098__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13098__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13094,(0),null);
var libs_to_load__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13094,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__13099_14033 = cljs.core.seq(libs_to_load__$1);
var chunk__13100_14034 = null;
var count__13101_14035 = (0);
var i__13102_14036 = (0);
while(true){
if((i__13102_14036 < count__13101_14035)){
var lib_14037 = chunk__13100_14034.cljs$core$IIndexed$_nth$arity$2(null,i__13102_14036);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_14037)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14037),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14037),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14037),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14037),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_14037,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14037),"');");
}

}
}
}


var G__14039 = seq__13099_14033;
var G__14040 = chunk__13100_14034;
var G__14041 = count__13101_14035;
var G__14042 = (i__13102_14036 + (1));
seq__13099_14033 = G__14039;
chunk__13100_14034 = G__14040;
count__13101_14035 = G__14041;
i__13102_14036 = G__14042;
continue;
} else {
var temp__5804__auto___14043 = cljs.core.seq(seq__13099_14033);
if(temp__5804__auto___14043){
var seq__13099_14044__$1 = temp__5804__auto___14043;
if(cljs.core.chunked_seq_QMARK_(seq__13099_14044__$1)){
var c__5525__auto___14045 = cljs.core.chunk_first(seq__13099_14044__$1);
var G__14046 = cljs.core.chunk_rest(seq__13099_14044__$1);
var G__14047 = c__5525__auto___14045;
var G__14048 = cljs.core.count(c__5525__auto___14045);
var G__14049 = (0);
seq__13099_14033 = G__14046;
chunk__13100_14034 = G__14047;
count__13101_14035 = G__14048;
i__13102_14036 = G__14049;
continue;
} else {
var lib_14050 = cljs.core.first(seq__13099_14044__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_14050)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14050),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14050),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14050),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14050),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_14050,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14050),"');");
}

}
}
}


var G__14057 = cljs.core.next(seq__13099_14044__$1);
var G__14058 = null;
var G__14059 = (0);
var G__14060 = (0);
seq__13099_14033 = G__14057;
chunk__13100_14034 = G__14058;
count__13101_14035 = G__14059;
i__13102_14036 = G__14060;
continue;
}
} else {
}
}
break;
}

var seq__13113_14062 = cljs.core.seq(node_libs);
var chunk__13114_14063 = null;
var count__13115_14065 = (0);
var i__13116_14066 = (0);
while(true){
if((i__13116_14066 < count__13115_14065)){
var lib_14069 = chunk__13114_14063.cljs$core$IIndexed$_nth$arity$2(null,i__13116_14066);
var vec__13123_14070 = cljs.analyzer.lib_AMPERSAND_sublib(lib_14069);
var lib_SINGLEQUOTE__14071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13123_14070,(0),null);
var sublib_14072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13123_14070,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_14069)," = require('",lib_SINGLEQUOTE__14071,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_14072),";"], 0));


var G__14073 = seq__13113_14062;
var G__14074 = chunk__13114_14063;
var G__14075 = count__13115_14065;
var G__14076 = (i__13116_14066 + (1));
seq__13113_14062 = G__14073;
chunk__13114_14063 = G__14074;
count__13115_14065 = G__14075;
i__13116_14066 = G__14076;
continue;
} else {
var temp__5804__auto___14077 = cljs.core.seq(seq__13113_14062);
if(temp__5804__auto___14077){
var seq__13113_14079__$1 = temp__5804__auto___14077;
if(cljs.core.chunked_seq_QMARK_(seq__13113_14079__$1)){
var c__5525__auto___14081 = cljs.core.chunk_first(seq__13113_14079__$1);
var G__14082 = cljs.core.chunk_rest(seq__13113_14079__$1);
var G__14083 = c__5525__auto___14081;
var G__14084 = cljs.core.count(c__5525__auto___14081);
var G__14085 = (0);
seq__13113_14062 = G__14082;
chunk__13114_14063 = G__14083;
count__13115_14065 = G__14084;
i__13116_14066 = G__14085;
continue;
} else {
var lib_14086 = cljs.core.first(seq__13113_14079__$1);
var vec__13127_14087 = cljs.analyzer.lib_AMPERSAND_sublib(lib_14086);
var lib_SINGLEQUOTE__14088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13127_14087,(0),null);
var sublib_14089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13127_14087,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_14086)," = require('",lib_SINGLEQUOTE__14088,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_14089),";"], 0));


var G__14094 = cljs.core.next(seq__13113_14079__$1);
var G__14095 = null;
var G__14096 = (0);
var G__14097 = (0);
seq__13113_14062 = G__14094;
chunk__13114_14063 = G__14095;
count__13115_14065 = G__14096;
i__13116_14066 = G__14097;
continue;
}
} else {
}
}
break;
}

var seq__13130_14098 = cljs.core.seq(goog_modules);
var chunk__13131_14099 = null;
var count__13132_14100 = (0);
var i__13133_14101 = (0);
while(true){
if((i__13133_14101 < count__13132_14100)){
var lib_14102 = chunk__13131_14099.cljs$core$IIndexed$_nth$arity$2(null,i__13133_14101);
var vec__13140_14103 = cljs.analyzer.lib_AMPERSAND_sublib(lib_14102);
var lib_SINGLEQUOTE__14104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13140_14103,(0),null);
var sublib_14105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13140_14103,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__14104,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_14102)," = goog.module.get('",lib_SINGLEQUOTE__14104,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_14105),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__14107 = seq__13130_14098;
var G__14108 = chunk__13131_14099;
var G__14109 = count__13132_14100;
var G__14110 = (i__13133_14101 + (1));
seq__13130_14098 = G__14107;
chunk__13131_14099 = G__14108;
count__13132_14100 = G__14109;
i__13133_14101 = G__14110;
continue;
} else {
var temp__5804__auto___14112 = cljs.core.seq(seq__13130_14098);
if(temp__5804__auto___14112){
var seq__13130_14113__$1 = temp__5804__auto___14112;
if(cljs.core.chunked_seq_QMARK_(seq__13130_14113__$1)){
var c__5525__auto___14115 = cljs.core.chunk_first(seq__13130_14113__$1);
var G__14116 = cljs.core.chunk_rest(seq__13130_14113__$1);
var G__14117 = c__5525__auto___14115;
var G__14118 = cljs.core.count(c__5525__auto___14115);
var G__14119 = (0);
seq__13130_14098 = G__14116;
chunk__13131_14099 = G__14117;
count__13132_14100 = G__14118;
i__13133_14101 = G__14119;
continue;
} else {
var lib_14120 = cljs.core.first(seq__13130_14113__$1);
var vec__13143_14121 = cljs.analyzer.lib_AMPERSAND_sublib(lib_14120);
var lib_SINGLEQUOTE__14122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143_14121,(0),null);
var sublib_14123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143_14121,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__14122,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_14120)," = goog.module.get('",lib_SINGLEQUOTE__14122,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_14123),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__14127 = cljs.core.next(seq__13130_14113__$1);
var G__14128 = null;
var G__14129 = (0);
var G__14130 = (0);
seq__13130_14098 = G__14127;
chunk__13131_14099 = G__14128;
count__13132_14100 = G__14129;
i__13133_14101 = G__14130;
continue;
}
} else {
}
}
break;
}

var seq__13146_14132 = cljs.core.seq(global_exports_libs);
var chunk__13147_14133 = null;
var count__13148_14134 = (0);
var i__13149_14135 = (0);
while(true){
if((i__13149_14135 < count__13148_14134)){
var lib_14137 = chunk__13147_14133.cljs$core$IIndexed$_nth$arity$2(null,i__13149_14135);
var map__13153_14138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_14137))));
var map__13153_14139__$1 = cljs.core.__destructure_map(map__13153_14138);
var global_exports_14140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13153_14139__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_14140,lib_14137);


var G__14141 = seq__13146_14132;
var G__14142 = chunk__13147_14133;
var G__14143 = count__13148_14134;
var G__14144 = (i__13149_14135 + (1));
seq__13146_14132 = G__14141;
chunk__13147_14133 = G__14142;
count__13148_14134 = G__14143;
i__13149_14135 = G__14144;
continue;
} else {
var temp__5804__auto___14145 = cljs.core.seq(seq__13146_14132);
if(temp__5804__auto___14145){
var seq__13146_14147__$1 = temp__5804__auto___14145;
if(cljs.core.chunked_seq_QMARK_(seq__13146_14147__$1)){
var c__5525__auto___14148 = cljs.core.chunk_first(seq__13146_14147__$1);
var G__14149 = cljs.core.chunk_rest(seq__13146_14147__$1);
var G__14150 = c__5525__auto___14148;
var G__14151 = cljs.core.count(c__5525__auto___14148);
var G__14152 = (0);
seq__13146_14132 = G__14149;
chunk__13147_14133 = G__14150;
count__13148_14134 = G__14151;
i__13149_14135 = G__14152;
continue;
} else {
var lib_14153 = cljs.core.first(seq__13146_14147__$1);
var map__13154_14154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_14153))));
var map__13154_14155__$1 = cljs.core.__destructure_map(map__13154_14154);
var global_exports_14156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13154_14155__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_14156,lib_14153);


var G__14157 = cljs.core.next(seq__13146_14147__$1);
var G__14158 = null;
var G__14159 = (0);
var G__14160 = (0);
seq__13146_14132 = G__14157;
chunk__13147_14133 = G__14158;
count__13148_14134 = G__14159;
i__13149_14135 = G__14160;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__13155){
var map__13156 = p__13155;
var map__13156__$1 = cljs.core.__destructure_map(map__13156);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__13157){
var map__13158 = p__13157;
var map__13158__$1 = cljs.core.__destructure_map(map__13158);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13158__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13158__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13158__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13158__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13158__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13158__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13158__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__13159){
var map__13160 = p__13159;
var map__13160__$1 = cljs.core.__destructure_map(map__13160);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13160__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13160__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13160__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13160__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13160__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__13161_14172 = cljs.core.seq(protocols);
var chunk__13162_14173 = null;
var count__13163_14174 = (0);
var i__13164_14175 = (0);
while(true){
if((i__13164_14175 < count__13163_14174)){
var protocol_14177 = chunk__13162_14173.cljs$core$IIndexed$_nth$arity$2(null,i__13164_14175);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14177)),"}");


var G__14179 = seq__13161_14172;
var G__14180 = chunk__13162_14173;
var G__14181 = count__13163_14174;
var G__14182 = (i__13164_14175 + (1));
seq__13161_14172 = G__14179;
chunk__13162_14173 = G__14180;
count__13163_14174 = G__14181;
i__13164_14175 = G__14182;
continue;
} else {
var temp__5804__auto___14183 = cljs.core.seq(seq__13161_14172);
if(temp__5804__auto___14183){
var seq__13161_14184__$1 = temp__5804__auto___14183;
if(cljs.core.chunked_seq_QMARK_(seq__13161_14184__$1)){
var c__5525__auto___14185 = cljs.core.chunk_first(seq__13161_14184__$1);
var G__14186 = cljs.core.chunk_rest(seq__13161_14184__$1);
var G__14187 = c__5525__auto___14185;
var G__14188 = cljs.core.count(c__5525__auto___14185);
var G__14189 = (0);
seq__13161_14172 = G__14186;
chunk__13162_14173 = G__14187;
count__13163_14174 = G__14188;
i__13164_14175 = G__14189;
continue;
} else {
var protocol_14194 = cljs.core.first(seq__13161_14184__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14194)),"}");


var G__14195 = cljs.core.next(seq__13161_14184__$1);
var G__14196 = null;
var G__14197 = (0);
var G__14198 = (0);
seq__13161_14172 = G__14195;
chunk__13162_14173 = G__14196;
count__13163_14174 = G__14197;
i__13164_14175 = G__14198;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__13166_14199 = cljs.core.seq(fields__$1);
var chunk__13167_14200 = null;
var count__13168_14201 = (0);
var i__13169_14202 = (0);
while(true){
if((i__13169_14202 < count__13168_14201)){
var fld_14203 = chunk__13167_14200.cljs$core$IIndexed$_nth$arity$2(null,i__13169_14202);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_14203," = ",fld_14203,";");


var G__14205 = seq__13166_14199;
var G__14206 = chunk__13167_14200;
var G__14207 = count__13168_14201;
var G__14208 = (i__13169_14202 + (1));
seq__13166_14199 = G__14205;
chunk__13167_14200 = G__14206;
count__13168_14201 = G__14207;
i__13169_14202 = G__14208;
continue;
} else {
var temp__5804__auto___14209 = cljs.core.seq(seq__13166_14199);
if(temp__5804__auto___14209){
var seq__13166_14211__$1 = temp__5804__auto___14209;
if(cljs.core.chunked_seq_QMARK_(seq__13166_14211__$1)){
var c__5525__auto___14217 = cljs.core.chunk_first(seq__13166_14211__$1);
var G__14218 = cljs.core.chunk_rest(seq__13166_14211__$1);
var G__14219 = c__5525__auto___14217;
var G__14220 = cljs.core.count(c__5525__auto___14217);
var G__14221 = (0);
seq__13166_14199 = G__14218;
chunk__13167_14200 = G__14219;
count__13168_14201 = G__14220;
i__13169_14202 = G__14221;
continue;
} else {
var fld_14223 = cljs.core.first(seq__13166_14211__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_14223," = ",fld_14223,";");


var G__14224 = cljs.core.next(seq__13166_14211__$1);
var G__14225 = null;
var G__14226 = (0);
var G__14227 = (0);
seq__13166_14199 = G__14224;
chunk__13167_14200 = G__14225;
count__13168_14201 = G__14226;
i__13169_14202 = G__14227;
continue;
}
} else {
}
}
break;
}

var seq__13170_14228 = cljs.core.seq(pmasks);
var chunk__13171_14229 = null;
var count__13172_14230 = (0);
var i__13173_14231 = (0);
while(true){
if((i__13173_14231 < count__13172_14230)){
var vec__13180_14232 = chunk__13171_14229.cljs$core$IIndexed$_nth$arity$2(null,i__13173_14231);
var pno_14233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13180_14232,(0),null);
var pmask_14234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13180_14232,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_14233,"$ = ",pmask_14234,";");


var G__14235 = seq__13170_14228;
var G__14236 = chunk__13171_14229;
var G__14237 = count__13172_14230;
var G__14238 = (i__13173_14231 + (1));
seq__13170_14228 = G__14235;
chunk__13171_14229 = G__14236;
count__13172_14230 = G__14237;
i__13173_14231 = G__14238;
continue;
} else {
var temp__5804__auto___14239 = cljs.core.seq(seq__13170_14228);
if(temp__5804__auto___14239){
var seq__13170_14241__$1 = temp__5804__auto___14239;
if(cljs.core.chunked_seq_QMARK_(seq__13170_14241__$1)){
var c__5525__auto___14242 = cljs.core.chunk_first(seq__13170_14241__$1);
var G__14243 = cljs.core.chunk_rest(seq__13170_14241__$1);
var G__14244 = c__5525__auto___14242;
var G__14245 = cljs.core.count(c__5525__auto___14242);
var G__14246 = (0);
seq__13170_14228 = G__14243;
chunk__13171_14229 = G__14244;
count__13172_14230 = G__14245;
i__13173_14231 = G__14246;
continue;
} else {
var vec__13183_14247 = cljs.core.first(seq__13170_14241__$1);
var pno_14248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13183_14247,(0),null);
var pmask_14249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13183_14247,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_14248,"$ = ",pmask_14249,";");


var G__14250 = cljs.core.next(seq__13170_14241__$1);
var G__14251 = null;
var G__14252 = (0);
var G__14253 = (0);
seq__13170_14228 = G__14250;
chunk__13171_14229 = G__14251;
count__13172_14230 = G__14252;
i__13173_14231 = G__14253;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__13186){
var map__13187 = p__13186;
var map__13187__$1 = cljs.core.__destructure_map(map__13187);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13187__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13187__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13187__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13187__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13187__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__13188_14255 = cljs.core.seq(protocols);
var chunk__13189_14256 = null;
var count__13190_14257 = (0);
var i__13191_14258 = (0);
while(true){
if((i__13191_14258 < count__13190_14257)){
var protocol_14259 = chunk__13189_14256.cljs$core$IIndexed$_nth$arity$2(null,i__13191_14258);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14259)),"}");


var G__14260 = seq__13188_14255;
var G__14261 = chunk__13189_14256;
var G__14262 = count__13190_14257;
var G__14263 = (i__13191_14258 + (1));
seq__13188_14255 = G__14260;
chunk__13189_14256 = G__14261;
count__13190_14257 = G__14262;
i__13191_14258 = G__14263;
continue;
} else {
var temp__5804__auto___14264 = cljs.core.seq(seq__13188_14255);
if(temp__5804__auto___14264){
var seq__13188_14265__$1 = temp__5804__auto___14264;
if(cljs.core.chunked_seq_QMARK_(seq__13188_14265__$1)){
var c__5525__auto___14266 = cljs.core.chunk_first(seq__13188_14265__$1);
var G__14267 = cljs.core.chunk_rest(seq__13188_14265__$1);
var G__14268 = c__5525__auto___14266;
var G__14269 = cljs.core.count(c__5525__auto___14266);
var G__14270 = (0);
seq__13188_14255 = G__14267;
chunk__13189_14256 = G__14268;
count__13190_14257 = G__14269;
i__13191_14258 = G__14270;
continue;
} else {
var protocol_14271 = cljs.core.first(seq__13188_14265__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14271)),"}");


var G__14273 = cljs.core.next(seq__13188_14265__$1);
var G__14274 = null;
var G__14275 = (0);
var G__14276 = (0);
seq__13188_14255 = G__14273;
chunk__13189_14256 = G__14274;
count__13190_14257 = G__14275;
i__13191_14258 = G__14276;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__13192_14277 = cljs.core.seq(fields__$1);
var chunk__13193_14278 = null;
var count__13194_14279 = (0);
var i__13195_14280 = (0);
while(true){
if((i__13195_14280 < count__13194_14279)){
var fld_14281 = chunk__13193_14278.cljs$core$IIndexed$_nth$arity$2(null,i__13195_14280);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_14281," = ",fld_14281,";");


var G__14282 = seq__13192_14277;
var G__14283 = chunk__13193_14278;
var G__14284 = count__13194_14279;
var G__14285 = (i__13195_14280 + (1));
seq__13192_14277 = G__14282;
chunk__13193_14278 = G__14283;
count__13194_14279 = G__14284;
i__13195_14280 = G__14285;
continue;
} else {
var temp__5804__auto___14286 = cljs.core.seq(seq__13192_14277);
if(temp__5804__auto___14286){
var seq__13192_14287__$1 = temp__5804__auto___14286;
if(cljs.core.chunked_seq_QMARK_(seq__13192_14287__$1)){
var c__5525__auto___14288 = cljs.core.chunk_first(seq__13192_14287__$1);
var G__14289 = cljs.core.chunk_rest(seq__13192_14287__$1);
var G__14290 = c__5525__auto___14288;
var G__14291 = cljs.core.count(c__5525__auto___14288);
var G__14292 = (0);
seq__13192_14277 = G__14289;
chunk__13193_14278 = G__14290;
count__13194_14279 = G__14291;
i__13195_14280 = G__14292;
continue;
} else {
var fld_14297 = cljs.core.first(seq__13192_14287__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_14297," = ",fld_14297,";");


var G__14298 = cljs.core.next(seq__13192_14287__$1);
var G__14299 = null;
var G__14300 = (0);
var G__14301 = (0);
seq__13192_14277 = G__14298;
chunk__13193_14278 = G__14299;
count__13194_14279 = G__14300;
i__13195_14280 = G__14301;
continue;
}
} else {
}
}
break;
}

var seq__13204_14302 = cljs.core.seq(pmasks);
var chunk__13205_14303 = null;
var count__13206_14304 = (0);
var i__13207_14305 = (0);
while(true){
if((i__13207_14305 < count__13206_14304)){
var vec__13215_14310 = chunk__13205_14303.cljs$core$IIndexed$_nth$arity$2(null,i__13207_14305);
var pno_14311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13215_14310,(0),null);
var pmask_14312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13215_14310,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_14311,"$ = ",pmask_14312,";");


var G__14313 = seq__13204_14302;
var G__14314 = chunk__13205_14303;
var G__14315 = count__13206_14304;
var G__14316 = (i__13207_14305 + (1));
seq__13204_14302 = G__14313;
chunk__13205_14303 = G__14314;
count__13206_14304 = G__14315;
i__13207_14305 = G__14316;
continue;
} else {
var temp__5804__auto___14317 = cljs.core.seq(seq__13204_14302);
if(temp__5804__auto___14317){
var seq__13204_14319__$1 = temp__5804__auto___14317;
if(cljs.core.chunked_seq_QMARK_(seq__13204_14319__$1)){
var c__5525__auto___14323 = cljs.core.chunk_first(seq__13204_14319__$1);
var G__14324 = cljs.core.chunk_rest(seq__13204_14319__$1);
var G__14325 = c__5525__auto___14323;
var G__14326 = cljs.core.count(c__5525__auto___14323);
var G__14327 = (0);
seq__13204_14302 = G__14324;
chunk__13205_14303 = G__14325;
count__13206_14304 = G__14326;
i__13207_14305 = G__14327;
continue;
} else {
var vec__13218_14328 = cljs.core.first(seq__13204_14319__$1);
var pno_14329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13218_14328,(0),null);
var pmask_14330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13218_14328,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_14329,"$ = ",pmask_14330,";");


var G__14331 = cljs.core.next(seq__13204_14319__$1);
var G__14332 = null;
var G__14333 = (0);
var G__14334 = (0);
seq__13204_14302 = G__14331;
chunk__13205_14303 = G__14332;
count__13206_14304 = G__14333;
i__13207_14305 = G__14334;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__13221){
var map__13222 = p__13221;
var map__13222__$1 = cljs.core.__destructure_map(map__13222);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13222__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13222__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13222__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13222__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13222__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__13225){
var map__13226 = p__13225;
var map__13226__$1 = cljs.core.__destructure_map(map__13226);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13226__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13226__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13226__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13226__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13226__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__5000__auto__ = code;
if(cljs.core.truth_(and__5000__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__5000__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__13240 = cljs.core.seq(table);
var chunk__13241 = null;
var count__13242 = (0);
var i__13243 = (0);
while(true){
if((i__13243 < count__13242)){
var vec__13250 = chunk__13241.cljs$core$IIndexed$_nth$arity$2(null,i__13243);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13250,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13250,(1),null);
var ns_14339 = cljs.core.namespace(sym);
var name_14340 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__14345 = seq__13240;
var G__14346 = chunk__13241;
var G__14347 = count__13242;
var G__14348 = (i__13243 + (1));
seq__13240 = G__14345;
chunk__13241 = G__14346;
count__13242 = G__14347;
i__13243 = G__14348;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13240);
if(temp__5804__auto__){
var seq__13240__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13240__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13240__$1);
var G__14349 = cljs.core.chunk_rest(seq__13240__$1);
var G__14350 = c__5525__auto__;
var G__14351 = cljs.core.count(c__5525__auto__);
var G__14352 = (0);
seq__13240 = G__14349;
chunk__13241 = G__14350;
count__13242 = G__14351;
i__13243 = G__14352;
continue;
} else {
var vec__13253 = cljs.core.first(seq__13240__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13253,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13253,(1),null);
var ns_14357 = cljs.core.namespace(sym);
var name_14358 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__14363 = cljs.core.next(seq__13240__$1);
var G__14364 = null;
var G__14365 = (0);
var G__14366 = (0);
seq__13240 = G__14363;
chunk__13241 = G__14364;
count__13242 = G__14365;
i__13243 = G__14366;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__13257 = arguments.length;
switch (G__13257) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_14368 = cljs.core.first(ks);
var vec__13258_14369 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_14368);
var top_14370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13258_14369,(0),null);
var prefix_SINGLEQUOTE__14371 = vec__13258_14369;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_14368)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__14371) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_14370)) || (cljs.core.contains_QMARK_(known_externs,top_14370)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__14371)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_14370);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__14371)),";");
}
} else {
}

var m_14372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_14368);
if(cljs.core.empty_QMARK_(m_14372)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__14371,m_14372,top_level,known_externs);
}

var G__14373 = cljs.core.next(ks);
ks = G__14373;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);

