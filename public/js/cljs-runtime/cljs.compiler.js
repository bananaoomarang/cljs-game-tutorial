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
var map__13534 = s;
var map__13534__$1 = cljs.core.__destructure_map(map__13534);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13534__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__13536 = info;
var map__13537 = G__13536;
var map__13537__$1 = cljs.core.__destructure_map(map__13537);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13537__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__13536__$1 = G__13536;
while(true){
var d__$2 = d__$1;
var map__13539 = G__13536__$1;
var map__13539__$1 = cljs.core.__destructure_map(map__13539);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13539__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__14393 = (d__$2 + (1));
var G__14394 = shadow__$2;
d__$1 = G__14393;
G__13536__$1 = G__14394;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__13541){
var map__13542 = p__13541;
var map__13542__$1 = cljs.core.__destructure_map(map__13542);
var name_var = map__13542__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13542__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13542__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__13543 = info;
var map__13543__$1 = cljs.core.__destructure_map(map__13543);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13543__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13543__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__13545 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__13545) : cljs.compiler.munge.call(null,G__13545));
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
var G__13594 = arguments.length;
switch (G__13594) {
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
var ms = (function (){var fexpr__13598 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11982),(11982),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__13598.cljs$core$IFn$_invoke$arity$1 ? fexpr__13598.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__13598.call(null,ss__$3));
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
var G__13599 = cp;
switch (G__13599) {
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
var seq__13600_14407 = cljs.core.seq(s);
var chunk__13601_14408 = null;
var count__13602_14409 = (0);
var i__13603_14410 = (0);
while(true){
if((i__13603_14410 < count__13602_14409)){
var c_14411 = chunk__13601_14408.cljs$core$IIndexed$_nth$arity$2(null,i__13603_14410);
sb.append(cljs.compiler.escape_char(c_14411));


var G__14412 = seq__13600_14407;
var G__14413 = chunk__13601_14408;
var G__14414 = count__13602_14409;
var G__14415 = (i__13603_14410 + (1));
seq__13600_14407 = G__14412;
chunk__13601_14408 = G__14413;
count__13602_14409 = G__14414;
i__13603_14410 = G__14415;
continue;
} else {
var temp__5804__auto___14416 = cljs.core.seq(seq__13600_14407);
if(temp__5804__auto___14416){
var seq__13600_14417__$1 = temp__5804__auto___14416;
if(cljs.core.chunked_seq_QMARK_(seq__13600_14417__$1)){
var c__5525__auto___14418 = cljs.core.chunk_first(seq__13600_14417__$1);
var G__14419 = cljs.core.chunk_rest(seq__13600_14417__$1);
var G__14420 = c__5525__auto___14418;
var G__14421 = cljs.core.count(c__5525__auto___14418);
var G__14422 = (0);
seq__13600_14407 = G__14419;
chunk__13601_14408 = G__14420;
count__13602_14409 = G__14421;
i__13603_14410 = G__14422;
continue;
} else {
var c_14423 = cljs.core.first(seq__13600_14417__$1);
sb.append(cljs.compiler.escape_char(c_14423));


var G__14424 = cljs.core.next(seq__13600_14417__$1);
var G__14425 = null;
var G__14426 = (0);
var G__14427 = (0);
seq__13600_14407 = G__14424;
chunk__13601_14408 = G__14425;
count__13602_14409 = G__14426;
i__13603_14410 = G__14427;
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
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__13607 = cljs.core.get_global_hierarchy;
return (fexpr__13607.cljs$core$IFn$_invoke$arity$0 ? fexpr__13607.cljs$core$IFn$_invoke$arity$0() : fexpr__13607.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__13609_14429 = ast;
var map__13609_14430__$1 = cljs.core.__destructure_map(map__13609_14429);
var env_14431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13609_14430__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_14431))){
var map__13610_14432 = env_14431;
var map__13610_14433__$1 = cljs.core.__destructure_map(map__13610_14432);
var line_14434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13610_14433__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_14435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13610_14433__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__13611 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__13614 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__13613 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__13613.cljs$core$IFn$_invoke$arity$1 ? fexpr__13613.cljs$core$IFn$_invoke$arity$1(G__13614) : fexpr__13613.call(null,G__13614));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13611,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__13611;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_14434 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_14435)?(column_14435 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__13624 = arguments.length;
switch (G__13624) {
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
var len__5726__auto___14439 = arguments.length;
var i__5727__auto___14440 = (0);
while(true){
if((i__5727__auto___14440 < len__5726__auto___14439)){
args_arr__5751__auto__.push((arguments[i__5727__auto___14440]));

var G__14441 = (i__5727__auto___14440 + (1));
i__5727__auto___14440 = G__14441;
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
var s_14442 = (function (){var G__13639 = a;
if((!(typeof a === 'string'))){
return G__13639.toString();
} else {
return G__13639;
}
})();
var temp__5808__auto___14443 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___14443 == null)){
} else {
var sm_data_14444 = temp__5808__auto___14443;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_14444,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__13616_SHARP_){
return (p1__13616_SHARP_ + s_14442.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_14442], 0));

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

var seq__13641 = cljs.core.seq(xs);
var chunk__13642 = null;
var count__13643 = (0);
var i__13644 = (0);
while(true){
if((i__13644 < count__13643)){
var x = chunk__13642.cljs$core$IIndexed$_nth$arity$2(null,i__13644);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__14445 = seq__13641;
var G__14446 = chunk__13642;
var G__14447 = count__13643;
var G__14448 = (i__13644 + (1));
seq__13641 = G__14445;
chunk__13642 = G__14446;
count__13643 = G__14447;
i__13644 = G__14448;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13641);
if(temp__5804__auto__){
var seq__13641__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13641__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13641__$1);
var G__14449 = cljs.core.chunk_rest(seq__13641__$1);
var G__14450 = c__5525__auto__;
var G__14451 = cljs.core.count(c__5525__auto__);
var G__14452 = (0);
seq__13641 = G__14449;
chunk__13642 = G__14450;
count__13643 = G__14451;
i__13644 = G__14452;
continue;
} else {
var x = cljs.core.first(seq__13641__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__14453 = cljs.core.next(seq__13641__$1);
var G__14454 = null;
var G__14455 = (0);
var G__14456 = (0);
seq__13641 = G__14453;
chunk__13642 = G__14454;
count__13643 = G__14455;
i__13644 = G__14456;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq13618){
var G__13619 = cljs.core.first(seq13618);
var seq13618__$1 = cljs.core.next(seq13618);
var G__13620 = cljs.core.first(seq13618__$1);
var seq13618__$2 = cljs.core.next(seq13618__$1);
var G__13621 = cljs.core.first(seq13618__$2);
var seq13618__$3 = cljs.core.next(seq13618__$2);
var G__13622 = cljs.core.first(seq13618__$3);
var seq13618__$4 = cljs.core.next(seq13618__$3);
var G__13623 = cljs.core.first(seq13618__$4);
var seq13618__$5 = cljs.core.next(seq13618__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13619,G__13620,G__13621,G__13622,G__13623,seq13618__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__13648){
var map__13649 = p__13648;
var map__13649__$1 = cljs.core.__destructure_map(map__13649);
var m = map__13649__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13649__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__13657 = arguments.length;
switch (G__13657) {
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
var len__5726__auto___14458 = arguments.length;
var i__5727__auto___14461 = (0);
while(true){
if((i__5727__auto___14461 < len__5726__auto___14458)){
args_arr__5751__auto__.push((arguments[i__5727__auto___14461]));

var G__14462 = (i__5727__auto___14461 + (1));
i__5727__auto___14461 = G__14462;
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

var seq__13668_14463 = cljs.core.seq(xs);
var chunk__13669_14464 = null;
var count__13670_14465 = (0);
var i__13671_14466 = (0);
while(true){
if((i__13671_14466 < count__13670_14465)){
var x_14467 = chunk__13669_14464.cljs$core$IIndexed$_nth$arity$2(null,i__13671_14466);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_14467);


var G__14468 = seq__13668_14463;
var G__14469 = chunk__13669_14464;
var G__14470 = count__13670_14465;
var G__14471 = (i__13671_14466 + (1));
seq__13668_14463 = G__14468;
chunk__13669_14464 = G__14469;
count__13670_14465 = G__14470;
i__13671_14466 = G__14471;
continue;
} else {
var temp__5804__auto___14472 = cljs.core.seq(seq__13668_14463);
if(temp__5804__auto___14472){
var seq__13668_14473__$1 = temp__5804__auto___14472;
if(cljs.core.chunked_seq_QMARK_(seq__13668_14473__$1)){
var c__5525__auto___14474 = cljs.core.chunk_first(seq__13668_14473__$1);
var G__14475 = cljs.core.chunk_rest(seq__13668_14473__$1);
var G__14476 = c__5525__auto___14474;
var G__14477 = cljs.core.count(c__5525__auto___14474);
var G__14478 = (0);
seq__13668_14463 = G__14475;
chunk__13669_14464 = G__14476;
count__13670_14465 = G__14477;
i__13671_14466 = G__14478;
continue;
} else {
var x_14479 = cljs.core.first(seq__13668_14473__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_14479);


var G__14480 = cljs.core.next(seq__13668_14473__$1);
var G__14481 = null;
var G__14482 = (0);
var G__14483 = (0);
seq__13668_14463 = G__14480;
chunk__13669_14464 = G__14481;
count__13670_14465 = G__14482;
i__13671_14466 = G__14483;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq13651){
var G__13652 = cljs.core.first(seq13651);
var seq13651__$1 = cljs.core.next(seq13651);
var G__13653 = cljs.core.first(seq13651__$1);
var seq13651__$2 = cljs.core.next(seq13651__$1);
var G__13654 = cljs.core.first(seq13651__$2);
var seq13651__$3 = cljs.core.next(seq13651__$2);
var G__13655 = cljs.core.first(seq13651__$3);
var seq13651__$4 = cljs.core.next(seq13651__$3);
var G__13656 = cljs.core.first(seq13651__$4);
var seq13651__$5 = cljs.core.next(seq13651__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13652,G__13653,G__13654,G__13655,G__13656,seq13651__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13674_14484 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13675_14485 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13676_14486 = true;
var _STAR_print_fn_STAR__temp_val__13677_14487 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13676_14486);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13677_14487);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13675_14485);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13674_14484);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__13678 = cljs.core.get_global_hierarchy;
return (fexpr__13678.cljs$core$IFn$_invoke$arity$0 ? fexpr__13678.cljs$core$IFn$_invoke$arity$0() : fexpr__13678.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__13681 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13681,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13681,(1),null);
var G__13684 = ns;
var G__13685 = name;
var G__13686 = (function (){
var G__13687 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__13687) : cljs.compiler.emit_constant.call(null,G__13687));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__13684,G__13685,G__13686) : cljs.compiler.emit_record_value.call(null,G__13684,G__13685,G__13686));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(x)){
var G__13688 = cljs.core.keys(x);
var G__13689 = cljs.core.vals(x);
var G__13690 = cljs.compiler.emit_constants_comma_sep;
var G__13691 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__13688,G__13689,G__13690,G__13691) : cljs.compiler.emit_map.call(null,G__13688,G__13689,G__13690,G__13691));
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
var G__13695 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__13696 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__13695,G__13696) : cljs.compiler.emit_with_meta.call(null,G__13695,G__13696));
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
var vec__13720 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720,(2),null);
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
var G__13724 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__13724) : x.call(null,G__13724));
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
var G__13725 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__13725) : x.call(null,G__13725));
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
var G__13731 = items;
var G__13732 = (function (p1__13730_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__13730_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__13731,G__13732) : cljs.compiler.emit_js_object.call(null,G__13731,G__13732));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__13734){
var map__13735 = p__13734;
var map__13735__$1 = cljs.core.__destructure_map(map__13735);
var ast = map__13735__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13735__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__13736 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__13736__$1 = cljs.core.__destructure_map(map__13736);
var cenv = map__13736__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13736__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__13737 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5000__auto__ = (function (){var G__13738 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__13738) : cljs.compiler.es5_GT__EQ_.call(null,G__13738));
})();
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__5000__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__13737,cljs.analyzer.es5_allowed);
} else {
return G__13737;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5002__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__13739 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__13739,reserved);
} else {
return G__13739;
}
})();
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__13740_14494 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__13740_14495__$1 = (((G__13740_14494 instanceof cljs.core.Keyword))?G__13740_14494.fqn:null);
switch (G__13740_14495__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__13741){
var map__13742 = p__13741;
var map__13742__$1 = cljs.core.__destructure_map(map__13742);
var arg = map__13742__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13742__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13742__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13742__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13742__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__13743 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__13743__$1 = cljs.core.__destructure_map(map__13743);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13743__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__13749){
var map__13751 = p__13749;
var map__13751__$1 = cljs.core.__destructure_map(map__13751);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13751__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13751__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13751__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__13754_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13754_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__13755 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__13755) : comma_sep.call(null,G__13755));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__13756 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__13756) : comma_sep.call(null,G__13756));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__13757){
var map__13758 = p__13757;
var map__13758__$1 = cljs.core.__destructure_map(map__13758);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13758__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13758__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__13760){
var map__13761 = p__13760;
var map__13761__$1 = cljs.core.__destructure_map(map__13761);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13761__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13761__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__13763_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13763_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__13764 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__13764) : comma_sep.call(null,G__13764));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__13768){
var map__13770 = p__13768;
var map__13770__$1 = cljs.core.__destructure_map(map__13770);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13770__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13770__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5804__auto___14514 = cljs.core.seq(items);
if(temp__5804__auto___14514){
var items_14515__$1 = temp__5804__auto___14514;
var vec__13771_14516 = items_14515__$1;
var seq__13772_14517 = cljs.core.seq(vec__13771_14516);
var first__13773_14518 = cljs.core.first(seq__13772_14517);
var seq__13772_14519__$1 = cljs.core.next(seq__13772_14517);
var vec__13774_14520 = first__13773_14518;
var k_14521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13774_14520,(0),null);
var v_14522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13774_14520,(1),null);
var r_14523 = seq__13772_14519__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_14521),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_14522) : emit_js_object_val.call(null,v_14522)));

var seq__13777_14526 = cljs.core.seq(r_14523);
var chunk__13778_14527 = null;
var count__13779_14528 = (0);
var i__13780_14529 = (0);
while(true){
if((i__13780_14529 < count__13779_14528)){
var vec__13789_14530 = chunk__13778_14527.cljs$core$IIndexed$_nth$arity$2(null,i__13780_14529);
var k_14531__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13789_14530,(0),null);
var v_14532__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13789_14530,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_14531__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_14532__$1) : emit_js_object_val.call(null,v_14532__$1)));


var G__14533 = seq__13777_14526;
var G__14534 = chunk__13778_14527;
var G__14535 = count__13779_14528;
var G__14536 = (i__13780_14529 + (1));
seq__13777_14526 = G__14533;
chunk__13778_14527 = G__14534;
count__13779_14528 = G__14535;
i__13780_14529 = G__14536;
continue;
} else {
var temp__5804__auto___14537__$1 = cljs.core.seq(seq__13777_14526);
if(temp__5804__auto___14537__$1){
var seq__13777_14538__$1 = temp__5804__auto___14537__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13777_14538__$1)){
var c__5525__auto___14539 = cljs.core.chunk_first(seq__13777_14538__$1);
var G__14540 = cljs.core.chunk_rest(seq__13777_14538__$1);
var G__14541 = c__5525__auto___14539;
var G__14542 = cljs.core.count(c__5525__auto___14539);
var G__14543 = (0);
seq__13777_14526 = G__14540;
chunk__13778_14527 = G__14541;
count__13779_14528 = G__14542;
i__13780_14529 = G__14543;
continue;
} else {
var vec__13792_14544 = cljs.core.first(seq__13777_14538__$1);
var k_14545__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13792_14544,(0),null);
var v_14546__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13792_14544,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_14545__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_14546__$1) : emit_js_object_val.call(null,v_14546__$1)));


var G__14547 = cljs.core.next(seq__13777_14538__$1);
var G__14548 = null;
var G__14549 = (0);
var G__14550 = (0);
seq__13777_14526 = G__14547;
chunk__13778_14527 = G__14548;
count__13779_14528 = G__14549;
i__13780_14529 = G__14550;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__13795){
var map__13796 = p__13795;
var map__13796__$1 = cljs.core.__destructure_map(map__13796);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13796__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13796__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13796__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__13797){
var map__13798 = p__13797;
var map__13798__$1 = cljs.core.__destructure_map(map__13798);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13798__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13798__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__13799){
var map__13800 = p__13799;
var map__13800__$1 = cljs.core.__destructure_map(map__13800);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13800__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__13801){
var map__13802 = p__13801;
var map__13802__$1 = cljs.core.__destructure_map(map__13802);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13802__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13802__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__13803 = cljs.analyzer.unwrap_quote(expr);
var map__13803__$1 = cljs.core.__destructure_map(map__13803);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13803__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13803__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13803__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__13804 = cljs.analyzer.unwrap_quote(expr);
var map__13804__$1 = cljs.core.__destructure_map(map__13804);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13804__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13804__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13804__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__5002__auto__ = (function (){var fexpr__13808 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__13808.cljs$core$IFn$_invoke$arity$1 ? fexpr__13808.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__13808.call(null,tag));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__13809){
var map__13810 = p__13809;
var map__13810__$1 = cljs.core.__destructure_map(map__13810);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13810__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13810__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13810__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13810__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13810__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__13811){
var map__13812 = p__13811;
var map__13812__$1 = cljs.core.__destructure_map(map__13812);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__13813_14557 = cljs.core.seq(nodes);
var chunk__13814_14558 = null;
var count__13815_14559 = (0);
var i__13816_14560 = (0);
while(true){
if((i__13816_14560 < count__13815_14559)){
var map__13836_14561 = chunk__13814_14558.cljs$core$IIndexed$_nth$arity$2(null,i__13816_14560);
var map__13836_14562__$1 = cljs.core.__destructure_map(map__13836_14561);
var ts_14563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13836_14562__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__13837_14564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13836_14562__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__13837_14565__$1 = cljs.core.__destructure_map(map__13837_14564);
var then_14566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13837_14565__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__13838_14568 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_14563));
var chunk__13839_14569 = null;
var count__13840_14570 = (0);
var i__13841_14571 = (0);
while(true){
if((i__13841_14571 < count__13840_14570)){
var test_14572 = chunk__13839_14569.cljs$core$IIndexed$_nth$arity$2(null,i__13841_14571);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_14572,":");


var G__14573 = seq__13838_14568;
var G__14574 = chunk__13839_14569;
var G__14575 = count__13840_14570;
var G__14576 = (i__13841_14571 + (1));
seq__13838_14568 = G__14573;
chunk__13839_14569 = G__14574;
count__13840_14570 = G__14575;
i__13841_14571 = G__14576;
continue;
} else {
var temp__5804__auto___14577 = cljs.core.seq(seq__13838_14568);
if(temp__5804__auto___14577){
var seq__13838_14578__$1 = temp__5804__auto___14577;
if(cljs.core.chunked_seq_QMARK_(seq__13838_14578__$1)){
var c__5525__auto___14579 = cljs.core.chunk_first(seq__13838_14578__$1);
var G__14580 = cljs.core.chunk_rest(seq__13838_14578__$1);
var G__14581 = c__5525__auto___14579;
var G__14582 = cljs.core.count(c__5525__auto___14579);
var G__14583 = (0);
seq__13838_14568 = G__14580;
chunk__13839_14569 = G__14581;
count__13840_14570 = G__14582;
i__13841_14571 = G__14583;
continue;
} else {
var test_14584 = cljs.core.first(seq__13838_14578__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_14584,":");


var G__14585 = cljs.core.next(seq__13838_14578__$1);
var G__14586 = null;
var G__14587 = (0);
var G__14588 = (0);
seq__13838_14568 = G__14585;
chunk__13839_14569 = G__14586;
count__13840_14570 = G__14587;
i__13841_14571 = G__14588;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_14566);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_14566);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__14589 = seq__13813_14557;
var G__14590 = chunk__13814_14558;
var G__14591 = count__13815_14559;
var G__14592 = (i__13816_14560 + (1));
seq__13813_14557 = G__14589;
chunk__13814_14558 = G__14590;
count__13815_14559 = G__14591;
i__13816_14560 = G__14592;
continue;
} else {
var temp__5804__auto___14593 = cljs.core.seq(seq__13813_14557);
if(temp__5804__auto___14593){
var seq__13813_14594__$1 = temp__5804__auto___14593;
if(cljs.core.chunked_seq_QMARK_(seq__13813_14594__$1)){
var c__5525__auto___14595 = cljs.core.chunk_first(seq__13813_14594__$1);
var G__14596 = cljs.core.chunk_rest(seq__13813_14594__$1);
var G__14597 = c__5525__auto___14595;
var G__14598 = cljs.core.count(c__5525__auto___14595);
var G__14599 = (0);
seq__13813_14557 = G__14596;
chunk__13814_14558 = G__14597;
count__13815_14559 = G__14598;
i__13816_14560 = G__14599;
continue;
} else {
var map__13842_14600 = cljs.core.first(seq__13813_14594__$1);
var map__13842_14601__$1 = cljs.core.__destructure_map(map__13842_14600);
var ts_14602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13842_14601__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__13843_14603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13842_14601__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__13843_14604__$1 = cljs.core.__destructure_map(map__13843_14603);
var then_14605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13843_14604__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__13844_14606 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_14602));
var chunk__13845_14607 = null;
var count__13846_14608 = (0);
var i__13847_14609 = (0);
while(true){
if((i__13847_14609 < count__13846_14608)){
var test_14610 = chunk__13845_14607.cljs$core$IIndexed$_nth$arity$2(null,i__13847_14609);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_14610,":");


var G__14611 = seq__13844_14606;
var G__14612 = chunk__13845_14607;
var G__14613 = count__13846_14608;
var G__14614 = (i__13847_14609 + (1));
seq__13844_14606 = G__14611;
chunk__13845_14607 = G__14612;
count__13846_14608 = G__14613;
i__13847_14609 = G__14614;
continue;
} else {
var temp__5804__auto___14615__$1 = cljs.core.seq(seq__13844_14606);
if(temp__5804__auto___14615__$1){
var seq__13844_14616__$1 = temp__5804__auto___14615__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13844_14616__$1)){
var c__5525__auto___14617 = cljs.core.chunk_first(seq__13844_14616__$1);
var G__14618 = cljs.core.chunk_rest(seq__13844_14616__$1);
var G__14619 = c__5525__auto___14617;
var G__14620 = cljs.core.count(c__5525__auto___14617);
var G__14621 = (0);
seq__13844_14606 = G__14618;
chunk__13845_14607 = G__14619;
count__13846_14608 = G__14620;
i__13847_14609 = G__14621;
continue;
} else {
var test_14622 = cljs.core.first(seq__13844_14616__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_14622,":");


var G__14623 = cljs.core.next(seq__13844_14616__$1);
var G__14624 = null;
var G__14625 = (0);
var G__14626 = (0);
seq__13844_14606 = G__14623;
chunk__13845_14607 = G__14624;
count__13846_14608 = G__14625;
i__13847_14609 = G__14626;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_14605);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_14605);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__14627 = cljs.core.next(seq__13813_14594__$1);
var G__14628 = null;
var G__14629 = (0);
var G__14630 = (0);
seq__13813_14557 = G__14627;
chunk__13814_14558 = G__14628;
count__13815_14559 = G__14629;
i__13816_14560 = G__14630;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__13853){
var map__13854 = p__13853;
var map__13854__$1 = cljs.core.__destructure_map(map__13854);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13854__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13854__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13866 = env;
var G__13867 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__13866,G__13867) : cljs.compiler.resolve_type.call(null,G__13866,G__13867));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__13879 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13879,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13879,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__13856_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__13856_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__13856_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__13882 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__13882,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__13882;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13885 = env;
var G__13886 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__13885,G__13886) : cljs.compiler.resolve_type.call(null,G__13885,G__13886));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13891_SHARP_){
return cljs.compiler.resolve_type(env,p1__13891_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__13912 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__13913 = cljs.core.seq(vec__13912);
var first__13914 = cljs.core.first(seq__13913);
var seq__13913__$1 = cljs.core.next(seq__13913);
var p = first__13914;
var first__13914__$1 = cljs.core.first(seq__13913__$1);
var seq__13913__$2 = cljs.core.next(seq__13913__$1);
var ts = first__13914__$1;
var first__13914__$2 = cljs.core.first(seq__13913__$2);
var seq__13913__$3 = cljs.core.next(seq__13913__$2);
var n = first__13914__$2;
var xs = seq__13913__$3;
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
var vec__13929 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__13930 = cljs.core.seq(vec__13929);
var first__13931 = cljs.core.first(seq__13930);
var seq__13930__$1 = cljs.core.next(seq__13930);
var p = first__13931;
var first__13931__$1 = cljs.core.first(seq__13930__$1);
var seq__13930__$2 = cljs.core.next(seq__13930__$1);
var ts = first__13931__$1;
var xs = seq__13930__$2;
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
var G__13933 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__13932 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__13932.cljs$core$IFn$_invoke$arity$1 ? fexpr__13932.cljs$core$IFn$_invoke$arity$1(G__13933) : fexpr__13932.call(null,G__13933));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__13936 = arguments.length;
switch (G__13936) {
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
var vec__13975 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13934_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__13934_SHARP_);
} else {
return p1__13934_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__13976 = cljs.core.seq(vec__13975);
var first__13977 = cljs.core.first(seq__13976);
var seq__13976__$1 = cljs.core.next(seq__13976);
var x = first__13977;
var ys = seq__13976__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__13978 = cljs.core.seq(ys);
var chunk__13979 = null;
var count__13980 = (0);
var i__13981 = (0);
while(true){
if((i__13981 < count__13980)){
var next_line = chunk__13979.cljs$core$IIndexed$_nth$arity$2(null,i__13981);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__14644 = seq__13978;
var G__14645 = chunk__13979;
var G__14646 = count__13980;
var G__14647 = (i__13981 + (1));
seq__13978 = G__14644;
chunk__13979 = G__14645;
count__13980 = G__14646;
i__13981 = G__14647;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13978);
if(temp__5804__auto__){
var seq__13978__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13978__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13978__$1);
var G__14648 = cljs.core.chunk_rest(seq__13978__$1);
var G__14649 = c__5525__auto__;
var G__14650 = cljs.core.count(c__5525__auto__);
var G__14651 = (0);
seq__13978 = G__14648;
chunk__13979 = G__14649;
count__13980 = G__14650;
i__13981 = G__14651;
continue;
} else {
var next_line = cljs.core.first(seq__13978__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__14652 = cljs.core.next(seq__13978__$1);
var G__14653 = null;
var G__14654 = (0);
var G__14655 = (0);
seq__13978 = G__14652;
chunk__13979 = G__14653;
count__13980 = G__14654;
i__13981 = G__14655;
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

var seq__14007_14656 = cljs.core.seq(docs__$2);
var chunk__14008_14657 = null;
var count__14009_14658 = (0);
var i__14010_14659 = (0);
while(true){
if((i__14010_14659 < count__14009_14658)){
var e_14661 = chunk__14008_14657.cljs$core$IIndexed$_nth$arity$2(null,i__14010_14659);
if(cljs.core.truth_(e_14661)){
print_comment_lines(e_14661);
} else {
}


var G__14662 = seq__14007_14656;
var G__14663 = chunk__14008_14657;
var G__14664 = count__14009_14658;
var G__14665 = (i__14010_14659 + (1));
seq__14007_14656 = G__14662;
chunk__14008_14657 = G__14663;
count__14009_14658 = G__14664;
i__14010_14659 = G__14665;
continue;
} else {
var temp__5804__auto___14666 = cljs.core.seq(seq__14007_14656);
if(temp__5804__auto___14666){
var seq__14007_14667__$1 = temp__5804__auto___14666;
if(cljs.core.chunked_seq_QMARK_(seq__14007_14667__$1)){
var c__5525__auto___14668 = cljs.core.chunk_first(seq__14007_14667__$1);
var G__14669 = cljs.core.chunk_rest(seq__14007_14667__$1);
var G__14670 = c__5525__auto___14668;
var G__14671 = cljs.core.count(c__5525__auto___14668);
var G__14672 = (0);
seq__14007_14656 = G__14669;
chunk__14008_14657 = G__14670;
count__14009_14658 = G__14671;
i__14010_14659 = G__14672;
continue;
} else {
var e_14673 = cljs.core.first(seq__14007_14667__$1);
if(cljs.core.truth_(e_14673)){
print_comment_lines(e_14673);
} else {
}


var G__14674 = cljs.core.next(seq__14007_14667__$1);
var G__14675 = null;
var G__14676 = (0);
var G__14677 = (0);
seq__14007_14656 = G__14674;
chunk__14008_14657 = G__14675;
count__14009_14658 = G__14676;
i__14010_14659 = G__14677;
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
var and__5000__auto__ = cljs.core.some((function (p1__14041_SHARP_){
return goog.string.startsWith(p1__14041_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__14049){
var map__14050 = p__14049;
var map__14050__$1 = cljs.core.__destructure_map(map__14050);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__14053){
var map__14054 = p__14053;
var map__14054__$1 = cljs.core.__destructure_map(map__14054);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14054__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14054__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14054__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__14057_14684 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__14058_14685 = null;
var count__14059_14686 = (0);
var i__14060_14687 = (0);
while(true){
if((i__14060_14687 < count__14059_14686)){
var vec__14069_14688 = chunk__14058_14685.cljs$core$IIndexed$_nth$arity$2(null,i__14060_14687);
var i_14689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069_14688,(0),null);
var param_14690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069_14688,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_14690);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__14691 = seq__14057_14684;
var G__14692 = chunk__14058_14685;
var G__14693 = count__14059_14686;
var G__14694 = (i__14060_14687 + (1));
seq__14057_14684 = G__14691;
chunk__14058_14685 = G__14692;
count__14059_14686 = G__14693;
i__14060_14687 = G__14694;
continue;
} else {
var temp__5804__auto___14695 = cljs.core.seq(seq__14057_14684);
if(temp__5804__auto___14695){
var seq__14057_14696__$1 = temp__5804__auto___14695;
if(cljs.core.chunked_seq_QMARK_(seq__14057_14696__$1)){
var c__5525__auto___14697 = cljs.core.chunk_first(seq__14057_14696__$1);
var G__14698 = cljs.core.chunk_rest(seq__14057_14696__$1);
var G__14699 = c__5525__auto___14697;
var G__14700 = cljs.core.count(c__5525__auto___14697);
var G__14701 = (0);
seq__14057_14684 = G__14698;
chunk__14058_14685 = G__14699;
count__14059_14686 = G__14700;
i__14060_14687 = G__14701;
continue;
} else {
var vec__14072_14702 = cljs.core.first(seq__14057_14696__$1);
var i_14703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072_14702,(0),null);
var param_14704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072_14702,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_14704);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__14706 = cljs.core.next(seq__14057_14696__$1);
var G__14707 = null;
var G__14708 = (0);
var G__14709 = (0);
seq__14057_14684 = G__14706;
chunk__14058_14685 = G__14707;
count__14059_14686 = G__14708;
i__14060_14687 = G__14709;
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

var seq__14075_14713 = cljs.core.seq(params);
var chunk__14076_14714 = null;
var count__14077_14715 = (0);
var i__14078_14716 = (0);
while(true){
if((i__14078_14716 < count__14077_14715)){
var param_14717 = chunk__14076_14714.cljs$core$IIndexed$_nth$arity$2(null,i__14078_14716);
cljs.compiler.emit(param_14717);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14717,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14718 = seq__14075_14713;
var G__14719 = chunk__14076_14714;
var G__14720 = count__14077_14715;
var G__14721 = (i__14078_14716 + (1));
seq__14075_14713 = G__14718;
chunk__14076_14714 = G__14719;
count__14077_14715 = G__14720;
i__14078_14716 = G__14721;
continue;
} else {
var temp__5804__auto___14722 = cljs.core.seq(seq__14075_14713);
if(temp__5804__auto___14722){
var seq__14075_14723__$1 = temp__5804__auto___14722;
if(cljs.core.chunked_seq_QMARK_(seq__14075_14723__$1)){
var c__5525__auto___14724 = cljs.core.chunk_first(seq__14075_14723__$1);
var G__14725 = cljs.core.chunk_rest(seq__14075_14723__$1);
var G__14726 = c__5525__auto___14724;
var G__14727 = cljs.core.count(c__5525__auto___14724);
var G__14728 = (0);
seq__14075_14713 = G__14725;
chunk__14076_14714 = G__14726;
count__14077_14715 = G__14727;
i__14078_14716 = G__14728;
continue;
} else {
var param_14729 = cljs.core.first(seq__14075_14723__$1);
cljs.compiler.emit(param_14729);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14729,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14730 = cljs.core.next(seq__14075_14723__$1);
var G__14731 = null;
var G__14732 = (0);
var G__14733 = (0);
seq__14075_14713 = G__14730;
chunk__14076_14714 = G__14731;
count__14077_14715 = G__14732;
i__14078_14716 = G__14733;
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

var seq__14079_14734 = cljs.core.seq(params);
var chunk__14080_14735 = null;
var count__14081_14736 = (0);
var i__14082_14737 = (0);
while(true){
if((i__14082_14737 < count__14081_14736)){
var param_14738 = chunk__14080_14735.cljs$core$IIndexed$_nth$arity$2(null,i__14082_14737);
cljs.compiler.emit(param_14738);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14738,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14739 = seq__14079_14734;
var G__14740 = chunk__14080_14735;
var G__14741 = count__14081_14736;
var G__14742 = (i__14082_14737 + (1));
seq__14079_14734 = G__14739;
chunk__14080_14735 = G__14740;
count__14081_14736 = G__14741;
i__14082_14737 = G__14742;
continue;
} else {
var temp__5804__auto___14743 = cljs.core.seq(seq__14079_14734);
if(temp__5804__auto___14743){
var seq__14079_14744__$1 = temp__5804__auto___14743;
if(cljs.core.chunked_seq_QMARK_(seq__14079_14744__$1)){
var c__5525__auto___14745 = cljs.core.chunk_first(seq__14079_14744__$1);
var G__14746 = cljs.core.chunk_rest(seq__14079_14744__$1);
var G__14747 = c__5525__auto___14745;
var G__14748 = cljs.core.count(c__5525__auto___14745);
var G__14749 = (0);
seq__14079_14734 = G__14746;
chunk__14080_14735 = G__14747;
count__14081_14736 = G__14748;
i__14082_14737 = G__14749;
continue;
} else {
var param_14751 = cljs.core.first(seq__14079_14744__$1);
cljs.compiler.emit(param_14751);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14751,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14752 = cljs.core.next(seq__14079_14744__$1);
var G__14753 = null;
var G__14754 = (0);
var G__14755 = (0);
seq__14079_14734 = G__14752;
chunk__14080_14735 = G__14753;
count__14081_14736 = G__14754;
i__14082_14737 = G__14755;
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
var seq__14086 = cljs.core.seq(params);
var chunk__14087 = null;
var count__14088 = (0);
var i__14089 = (0);
while(true){
if((i__14089 < count__14088)){
var param = chunk__14087.cljs$core$IIndexed$_nth$arity$2(null,i__14089);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14756 = seq__14086;
var G__14757 = chunk__14087;
var G__14758 = count__14088;
var G__14759 = (i__14089 + (1));
seq__14086 = G__14756;
chunk__14087 = G__14757;
count__14088 = G__14758;
i__14089 = G__14759;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14086);
if(temp__5804__auto__){
var seq__14086__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14086__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14086__$1);
var G__14760 = cljs.core.chunk_rest(seq__14086__$1);
var G__14761 = c__5525__auto__;
var G__14762 = cljs.core.count(c__5525__auto__);
var G__14763 = (0);
seq__14086 = G__14760;
chunk__14087 = G__14761;
count__14088 = G__14762;
i__14089 = G__14763;
continue;
} else {
var param = cljs.core.first(seq__14086__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14765 = cljs.core.next(seq__14086__$1);
var G__14766 = null;
var G__14767 = (0);
var G__14768 = (0);
seq__14086 = G__14765;
chunk__14087 = G__14766;
count__14088 = G__14767;
i__14089 = G__14768;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__14092){
var map__14093 = p__14092;
var map__14093__$1 = cljs.core.__destructure_map(map__14093);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__14094){
var map__14095 = p__14094;
var map__14095__$1 = cljs.core.__destructure_map(map__14095);
var f = map__14095__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_14772__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_14773 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_14772__$1);
var delegate_name_14774 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_14773),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_14774," = function (");

var seq__14096_14775 = cljs.core.seq(params);
var chunk__14097_14776 = null;
var count__14098_14777 = (0);
var i__14099_14778 = (0);
while(true){
if((i__14099_14778 < count__14098_14777)){
var param_14779 = chunk__14097_14776.cljs$core$IIndexed$_nth$arity$2(null,i__14099_14778);
cljs.compiler.emit(param_14779);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14779,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14781 = seq__14096_14775;
var G__14782 = chunk__14097_14776;
var G__14783 = count__14098_14777;
var G__14784 = (i__14099_14778 + (1));
seq__14096_14775 = G__14781;
chunk__14097_14776 = G__14782;
count__14098_14777 = G__14783;
i__14099_14778 = G__14784;
continue;
} else {
var temp__5804__auto___14785 = cljs.core.seq(seq__14096_14775);
if(temp__5804__auto___14785){
var seq__14096_14786__$1 = temp__5804__auto___14785;
if(cljs.core.chunked_seq_QMARK_(seq__14096_14786__$1)){
var c__5525__auto___14787 = cljs.core.chunk_first(seq__14096_14786__$1);
var G__14788 = cljs.core.chunk_rest(seq__14096_14786__$1);
var G__14789 = c__5525__auto___14787;
var G__14790 = cljs.core.count(c__5525__auto___14787);
var G__14791 = (0);
seq__14096_14775 = G__14788;
chunk__14097_14776 = G__14789;
count__14098_14777 = G__14790;
i__14099_14778 = G__14791;
continue;
} else {
var param_14792 = cljs.core.first(seq__14096_14786__$1);
cljs.compiler.emit(param_14792);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14792,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14793 = cljs.core.next(seq__14096_14786__$1);
var G__14794 = null;
var G__14795 = (0);
var G__14796 = (0);
seq__14096_14775 = G__14793;
chunk__14097_14776 = G__14794;
count__14098_14777 = G__14795;
i__14099_14778 = G__14796;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_14773," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_14797 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_14797,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_14774,".call(this,");

var seq__14100_14798 = cljs.core.seq(params);
var chunk__14101_14799 = null;
var count__14102_14800 = (0);
var i__14103_14801 = (0);
while(true){
if((i__14103_14801 < count__14102_14800)){
var param_14802 = chunk__14101_14799.cljs$core$IIndexed$_nth$arity$2(null,i__14103_14801);
cljs.compiler.emit(param_14802);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14802,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14803 = seq__14100_14798;
var G__14804 = chunk__14101_14799;
var G__14805 = count__14102_14800;
var G__14806 = (i__14103_14801 + (1));
seq__14100_14798 = G__14803;
chunk__14101_14799 = G__14804;
count__14102_14800 = G__14805;
i__14103_14801 = G__14806;
continue;
} else {
var temp__5804__auto___14807 = cljs.core.seq(seq__14100_14798);
if(temp__5804__auto___14807){
var seq__14100_14808__$1 = temp__5804__auto___14807;
if(cljs.core.chunked_seq_QMARK_(seq__14100_14808__$1)){
var c__5525__auto___14809 = cljs.core.chunk_first(seq__14100_14808__$1);
var G__14810 = cljs.core.chunk_rest(seq__14100_14808__$1);
var G__14811 = c__5525__auto___14809;
var G__14812 = cljs.core.count(c__5525__auto___14809);
var G__14813 = (0);
seq__14100_14798 = G__14810;
chunk__14101_14799 = G__14811;
count__14102_14800 = G__14812;
i__14103_14801 = G__14813;
continue;
} else {
var param_14814 = cljs.core.first(seq__14100_14808__$1);
cljs.compiler.emit(param_14814);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14814,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14815 = cljs.core.next(seq__14100_14808__$1);
var G__14816 = null;
var G__14817 = (0);
var G__14818 = (0);
seq__14100_14798 = G__14815;
chunk__14101_14799 = G__14816;
count__14102_14800 = G__14817;
i__14103_14801 = G__14818;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14773,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_14773,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_14772__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14773,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_14774,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_14773,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__14117){
var map__14118 = p__14117;
var map__14118__$1 = cljs.core.__destructure_map(map__14118);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14112_SHARP_){
var and__5000__auto__ = p1__14112_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__14112_SHARP_));
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
var name_14821__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_14822 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_14821__$1);
var maxparams_14823 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_14824 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_14822),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_14825 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__14115_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__14115_SHARP_)));
}),cljs.core.seq(mmap_14824));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_14822," = null;");

var seq__14119_14827 = cljs.core.seq(ms_14825);
var chunk__14120_14828 = null;
var count__14121_14829 = (0);
var i__14122_14830 = (0);
while(true){
if((i__14122_14830 < count__14121_14829)){
var vec__14130_14831 = chunk__14120_14828.cljs$core$IIndexed$_nth$arity$2(null,i__14122_14830);
var n_14832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14130_14831,(0),null);
var meth_14833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14130_14831,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_14832," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14833))){
cljs.compiler.emit_variadic_fn_method(meth_14833);
} else {
cljs.compiler.emit_fn_method(meth_14833);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__14834 = seq__14119_14827;
var G__14835 = chunk__14120_14828;
var G__14836 = count__14121_14829;
var G__14837 = (i__14122_14830 + (1));
seq__14119_14827 = G__14834;
chunk__14120_14828 = G__14835;
count__14121_14829 = G__14836;
i__14122_14830 = G__14837;
continue;
} else {
var temp__5804__auto___14838 = cljs.core.seq(seq__14119_14827);
if(temp__5804__auto___14838){
var seq__14119_14839__$1 = temp__5804__auto___14838;
if(cljs.core.chunked_seq_QMARK_(seq__14119_14839__$1)){
var c__5525__auto___14840 = cljs.core.chunk_first(seq__14119_14839__$1);
var G__14841 = cljs.core.chunk_rest(seq__14119_14839__$1);
var G__14842 = c__5525__auto___14840;
var G__14843 = cljs.core.count(c__5525__auto___14840);
var G__14844 = (0);
seq__14119_14827 = G__14841;
chunk__14120_14828 = G__14842;
count__14121_14829 = G__14843;
i__14122_14830 = G__14844;
continue;
} else {
var vec__14133_14845 = cljs.core.first(seq__14119_14839__$1);
var n_14846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14133_14845,(0),null);
var meth_14847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14133_14845,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_14846," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14847))){
cljs.compiler.emit_variadic_fn_method(meth_14847);
} else {
cljs.compiler.emit_fn_method(meth_14847);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__14848 = cljs.core.next(seq__14119_14839__$1);
var G__14849 = null;
var G__14850 = (0);
var G__14851 = (0);
seq__14119_14827 = G__14848;
chunk__14120_14828 = G__14849;
count__14121_14829 = G__14850;
i__14122_14830 = G__14851;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14822," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_14823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_14823)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_14823));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__14136_14852 = cljs.core.seq(ms_14825);
var chunk__14137_14853 = null;
var count__14138_14854 = (0);
var i__14139_14855 = (0);
while(true){
if((i__14139_14855 < count__14138_14854)){
var vec__14146_14857 = chunk__14137_14853.cljs$core$IIndexed$_nth$arity$2(null,i__14139_14855);
var n_14858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14146_14857,(0),null);
var meth_14859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14146_14857,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14859))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_14860 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_14860," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_14862 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_14860," = new cljs.core.IndexedSeq(",a_14862,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_14858,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_14823)),(((cljs.core.count(maxparams_14823) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_14860,");"], 0));
} else {
var pcnt_14863 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14859));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_14863,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_14858,".call(this",(((pcnt_14863 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_14863,maxparams_14823)),null,(1),null)),(2),null))),");");
}


var G__14864 = seq__14136_14852;
var G__14865 = chunk__14137_14853;
var G__14866 = count__14138_14854;
var G__14867 = (i__14139_14855 + (1));
seq__14136_14852 = G__14864;
chunk__14137_14853 = G__14865;
count__14138_14854 = G__14866;
i__14139_14855 = G__14867;
continue;
} else {
var temp__5804__auto___14868 = cljs.core.seq(seq__14136_14852);
if(temp__5804__auto___14868){
var seq__14136_14869__$1 = temp__5804__auto___14868;
if(cljs.core.chunked_seq_QMARK_(seq__14136_14869__$1)){
var c__5525__auto___14870 = cljs.core.chunk_first(seq__14136_14869__$1);
var G__14871 = cljs.core.chunk_rest(seq__14136_14869__$1);
var G__14872 = c__5525__auto___14870;
var G__14873 = cljs.core.count(c__5525__auto___14870);
var G__14874 = (0);
seq__14136_14852 = G__14871;
chunk__14137_14853 = G__14872;
count__14138_14854 = G__14873;
i__14139_14855 = G__14874;
continue;
} else {
var vec__14149_14875 = cljs.core.first(seq__14136_14869__$1);
var n_14876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14149_14875,(0),null);
var meth_14877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14149_14875,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14877))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_14878 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_14878," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_14879 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_14878," = new cljs.core.IndexedSeq(",a_14879,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_14876,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_14823)),(((cljs.core.count(maxparams_14823) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_14878,");"], 0));
} else {
var pcnt_14880 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14877));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_14880,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_14876,".call(this",(((pcnt_14880 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_14880,maxparams_14823)),null,(1),null)),(2),null))),");");
}


var G__14881 = cljs.core.next(seq__14136_14869__$1);
var G__14882 = null;
var G__14883 = (0);
var G__14884 = (0);
seq__14136_14852 = G__14881;
chunk__14137_14853 = G__14882;
count__14138_14854 = G__14883;
i__14139_14855 = G__14884;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_14885 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_14825)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_14885,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14822,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14822,".cljs$lang$applyTo = ",cljs.core.some((function (p1__14116_SHARP_){
var vec__14153 = p1__14116_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14153,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14153,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_14825),".cljs$lang$applyTo;");
} else {
}

var seq__14156_14888 = cljs.core.seq(ms_14825);
var chunk__14157_14889 = null;
var count__14158_14890 = (0);
var i__14159_14891 = (0);
while(true){
if((i__14159_14891 < count__14158_14890)){
var vec__14166_14892 = chunk__14157_14889.cljs$core$IIndexed$_nth$arity$2(null,i__14159_14891);
var n_14893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14166_14892,(0),null);
var meth_14894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14166_14892,(1),null);
var c_14895 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14894));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14894))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14822,".cljs$core$IFn$_invoke$arity$variadic = ",n_14893,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_14822,".cljs$core$IFn$_invoke$arity$",c_14895," = ",n_14893,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__14896 = seq__14156_14888;
var G__14897 = chunk__14157_14889;
var G__14898 = count__14158_14890;
var G__14899 = (i__14159_14891 + (1));
seq__14156_14888 = G__14896;
chunk__14157_14889 = G__14897;
count__14158_14890 = G__14898;
i__14159_14891 = G__14899;
continue;
} else {
var temp__5804__auto___14900 = cljs.core.seq(seq__14156_14888);
if(temp__5804__auto___14900){
var seq__14156_14901__$1 = temp__5804__auto___14900;
if(cljs.core.chunked_seq_QMARK_(seq__14156_14901__$1)){
var c__5525__auto___14902 = cljs.core.chunk_first(seq__14156_14901__$1);
var G__14903 = cljs.core.chunk_rest(seq__14156_14901__$1);
var G__14904 = c__5525__auto___14902;
var G__14905 = cljs.core.count(c__5525__auto___14902);
var G__14906 = (0);
seq__14156_14888 = G__14903;
chunk__14157_14889 = G__14904;
count__14158_14890 = G__14905;
i__14159_14891 = G__14906;
continue;
} else {
var vec__14169_14908 = cljs.core.first(seq__14156_14901__$1);
var n_14909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169_14908,(0),null);
var meth_14910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169_14908,(1),null);
var c_14911 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14910));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14910))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14822,".cljs$core$IFn$_invoke$arity$variadic = ",n_14909,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_14822,".cljs$core$IFn$_invoke$arity$",c_14911," = ",n_14909,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__14912 = cljs.core.next(seq__14156_14901__$1);
var G__14913 = null;
var G__14914 = (0);
var G__14915 = (0);
seq__14156_14888 = G__14912;
chunk__14157_14889 = G__14913;
count__14158_14890 = G__14914;
i__14159_14891 = G__14915;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_14822,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__14172){
var map__14173 = p__14172;
var map__14173__$1 = cljs.core.__destructure_map(map__14173);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14173__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14173__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14173__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__14174_14916 = cljs.core.seq(statements);
var chunk__14175_14917 = null;
var count__14176_14918 = (0);
var i__14177_14919 = (0);
while(true){
if((i__14177_14919 < count__14176_14918)){
var s_14921 = chunk__14175_14917.cljs$core$IIndexed$_nth$arity$2(null,i__14177_14919);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_14921);


var G__14922 = seq__14174_14916;
var G__14923 = chunk__14175_14917;
var G__14924 = count__14176_14918;
var G__14925 = (i__14177_14919 + (1));
seq__14174_14916 = G__14922;
chunk__14175_14917 = G__14923;
count__14176_14918 = G__14924;
i__14177_14919 = G__14925;
continue;
} else {
var temp__5804__auto___14927 = cljs.core.seq(seq__14174_14916);
if(temp__5804__auto___14927){
var seq__14174_14928__$1 = temp__5804__auto___14927;
if(cljs.core.chunked_seq_QMARK_(seq__14174_14928__$1)){
var c__5525__auto___14929 = cljs.core.chunk_first(seq__14174_14928__$1);
var G__14930 = cljs.core.chunk_rest(seq__14174_14928__$1);
var G__14931 = c__5525__auto___14929;
var G__14932 = cljs.core.count(c__5525__auto___14929);
var G__14933 = (0);
seq__14174_14916 = G__14930;
chunk__14175_14917 = G__14931;
count__14176_14918 = G__14932;
i__14177_14919 = G__14933;
continue;
} else {
var s_14934 = cljs.core.first(seq__14174_14928__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_14934);


var G__14938 = cljs.core.next(seq__14174_14928__$1);
var G__14939 = null;
var G__14940 = (0);
var G__14941 = (0);
seq__14174_14916 = G__14938;
chunk__14175_14917 = G__14939;
count__14176_14918 = G__14940;
i__14177_14919 = G__14941;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__14179){
var map__14180 = p__14179;
var map__14180__$1 = cljs.core.__destructure_map(map__14180);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14180__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14180__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14180__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14180__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14180__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__14181,is_loop){
var map__14182 = p__14181;
var map__14182__$1 = cljs.core.__destructure_map(map__14182);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14182__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14182__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14182__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__14183_14942 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__14184_14943 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__14184_14943);

try{var seq__14185_14944 = cljs.core.seq(bindings);
var chunk__14186_14945 = null;
var count__14187_14946 = (0);
var i__14188_14947 = (0);
while(true){
if((i__14188_14947 < count__14187_14946)){
var map__14191_14948 = chunk__14186_14945.cljs$core$IIndexed$_nth$arity$2(null,i__14188_14947);
var map__14191_14949__$1 = cljs.core.__destructure_map(map__14191_14948);
var binding_14950 = map__14191_14949__$1;
var init_14951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14191_14949__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_14950);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_14951,";");


var G__14953 = seq__14185_14944;
var G__14954 = chunk__14186_14945;
var G__14955 = count__14187_14946;
var G__14956 = (i__14188_14947 + (1));
seq__14185_14944 = G__14953;
chunk__14186_14945 = G__14954;
count__14187_14946 = G__14955;
i__14188_14947 = G__14956;
continue;
} else {
var temp__5804__auto___14957 = cljs.core.seq(seq__14185_14944);
if(temp__5804__auto___14957){
var seq__14185_14958__$1 = temp__5804__auto___14957;
if(cljs.core.chunked_seq_QMARK_(seq__14185_14958__$1)){
var c__5525__auto___14959 = cljs.core.chunk_first(seq__14185_14958__$1);
var G__14960 = cljs.core.chunk_rest(seq__14185_14958__$1);
var G__14961 = c__5525__auto___14959;
var G__14962 = cljs.core.count(c__5525__auto___14959);
var G__14963 = (0);
seq__14185_14944 = G__14960;
chunk__14186_14945 = G__14961;
count__14187_14946 = G__14962;
i__14188_14947 = G__14963;
continue;
} else {
var map__14192_14965 = cljs.core.first(seq__14185_14958__$1);
var map__14192_14966__$1 = cljs.core.__destructure_map(map__14192_14965);
var binding_14967 = map__14192_14966__$1;
var init_14968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14192_14966__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_14967);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_14968,";");


var G__14969 = cljs.core.next(seq__14185_14958__$1);
var G__14970 = null;
var G__14971 = (0);
var G__14972 = (0);
seq__14185_14944 = G__14969;
chunk__14186_14945 = G__14970;
count__14187_14946 = G__14971;
i__14188_14947 = G__14972;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__14183_14942);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__14193){
var map__14194 = p__14193;
var map__14194__$1 = cljs.core.__destructure_map(map__14194);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14194__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14194__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14194__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5593__auto___14977 = cljs.core.count(exprs);
var i_14978 = (0);
while(true){
if((i_14978 < n__5593__auto___14977)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_14978) : temps.call(null,i_14978))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_14978) : exprs.call(null,i_14978)),";");

var G__14979 = (i_14978 + (1));
i_14978 = G__14979;
continue;
} else {
}
break;
}

var n__5593__auto___14980 = cljs.core.count(exprs);
var i_14981 = (0);
while(true){
if((i_14981 < n__5593__auto___14980)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_14981) : params.call(null,i_14981)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_14981) : temps.call(null,i_14981)),";");

var G__14982 = (i_14981 + (1));
i_14981 = G__14982;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__14195){
var map__14196 = p__14195;
var map__14196__$1 = cljs.core.__destructure_map(map__14196);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14196__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14196__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14196__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__14197_14983 = cljs.core.seq(bindings);
var chunk__14198_14984 = null;
var count__14199_14985 = (0);
var i__14200_14986 = (0);
while(true){
if((i__14200_14986 < count__14199_14985)){
var map__14211_14987 = chunk__14198_14984.cljs$core$IIndexed$_nth$arity$2(null,i__14200_14986);
var map__14211_14988__$1 = cljs.core.__destructure_map(map__14211_14987);
var binding_14989 = map__14211_14988__$1;
var init_14990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14211_14988__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_14989)," = ",init_14990,";");


var G__14991 = seq__14197_14983;
var G__14992 = chunk__14198_14984;
var G__14993 = count__14199_14985;
var G__14994 = (i__14200_14986 + (1));
seq__14197_14983 = G__14991;
chunk__14198_14984 = G__14992;
count__14199_14985 = G__14993;
i__14200_14986 = G__14994;
continue;
} else {
var temp__5804__auto___14995 = cljs.core.seq(seq__14197_14983);
if(temp__5804__auto___14995){
var seq__14197_14997__$1 = temp__5804__auto___14995;
if(cljs.core.chunked_seq_QMARK_(seq__14197_14997__$1)){
var c__5525__auto___14998 = cljs.core.chunk_first(seq__14197_14997__$1);
var G__14999 = cljs.core.chunk_rest(seq__14197_14997__$1);
var G__15000 = c__5525__auto___14998;
var G__15001 = cljs.core.count(c__5525__auto___14998);
var G__15002 = (0);
seq__14197_14983 = G__14999;
chunk__14198_14984 = G__15000;
count__14199_14985 = G__15001;
i__14200_14986 = G__15002;
continue;
} else {
var map__14212_15003 = cljs.core.first(seq__14197_14997__$1);
var map__14212_15004__$1 = cljs.core.__destructure_map(map__14212_15003);
var binding_15005 = map__14212_15004__$1;
var init_15006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14212_15004__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_15005)," = ",init_15006,";");


var G__15007 = cljs.core.next(seq__14197_14997__$1);
var G__15008 = null;
var G__15009 = (0);
var G__15010 = (0);
seq__14197_14983 = G__15007;
chunk__14198_14984 = G__15008;
count__14199_14985 = G__15009;
i__14200_14986 = G__15010;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__14216){
var map__14217 = p__14216;
var map__14217__$1 = cljs.core.__destructure_map(map__14217);
var expr = map__14217__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14217__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14217__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14217__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var and__5000__auto____$4 = cljs.core.not((function (){var fexpr__14223 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__14223.cljs$core$IFn$_invoke$arity$1 ? fexpr__14223.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__14223.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__14227 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__14227.cljs$core$IFn$_invoke$arity$1 ? fexpr__14227.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__14227.call(null,first_arg_tag));
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
var vec__14220 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__14214_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14214_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__14215_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14215_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14220,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14220,(1),null);
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
var pimpl_15027 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_15027,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_15029 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_15029,args)),(((mfa_15029 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_15029,args)),"], 0))"], 0));
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
var G__14235 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__14234 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__14234.cljs$core$IFn$_invoke$arity$1 ? fexpr__14234.cljs$core$IFn$_invoke$arity$1(G__14235) : fexpr__14234.call(null,G__14235));
} else {
return and__5000__auto__;
}
})())){
var fprop_15031 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_15031," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_15031,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_15031," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_15031,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__14236){
var map__14237 = p__14236;
var map__14237__$1 = cljs.core.__destructure_map(map__14237);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14237__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14237__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14237__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__14238){
var map__14239 = p__14238;
var map__14239__$1 = cljs.core.__destructure_map(map__14239);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14239__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14239__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14239__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14240_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14240_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__14241 = cljs.analyzer.lib_AMPERSAND_sublib(lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14241,(0),null);
var sublib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14241,(1),null);
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
var map__14244 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__14244__$1 = cljs.core.__destructure_map(map__14244);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14244__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14244__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__14245 = options;
var map__14245__$1 = cljs.core.__destructure_map(map__14245);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14245__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14245__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14245__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__14246 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__14252 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__14252__$1 = cljs.core.__destructure_map(map__14252);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14252__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14252__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14246,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14246,(1),null);
var vec__14249 = (function (){var map__14253 = cljs.core.group_by(cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__14253__$1 = cljs.core.__destructure_map(map__14253);
var goog_modules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14253__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14253__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14249,(0),null);
var libs_to_load__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14249,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__14254_15039 = cljs.core.seq(libs_to_load__$1);
var chunk__14255_15040 = null;
var count__14256_15041 = (0);
var i__14257_15042 = (0);
while(true){
if((i__14257_15042 < count__14256_15041)){
var lib_15043 = chunk__14255_15040.cljs$core$IIndexed$_nth$arity$2(null,i__14257_15042);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_15043)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15043),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15043),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15043),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15043),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_15043,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15043),"');");
}

}
}
}


var G__15045 = seq__14254_15039;
var G__15046 = chunk__14255_15040;
var G__15047 = count__14256_15041;
var G__15048 = (i__14257_15042 + (1));
seq__14254_15039 = G__15045;
chunk__14255_15040 = G__15046;
count__14256_15041 = G__15047;
i__14257_15042 = G__15048;
continue;
} else {
var temp__5804__auto___15049 = cljs.core.seq(seq__14254_15039);
if(temp__5804__auto___15049){
var seq__14254_15050__$1 = temp__5804__auto___15049;
if(cljs.core.chunked_seq_QMARK_(seq__14254_15050__$1)){
var c__5525__auto___15054 = cljs.core.chunk_first(seq__14254_15050__$1);
var G__15055 = cljs.core.chunk_rest(seq__14254_15050__$1);
var G__15056 = c__5525__auto___15054;
var G__15057 = cljs.core.count(c__5525__auto___15054);
var G__15058 = (0);
seq__14254_15039 = G__15055;
chunk__14255_15040 = G__15056;
count__14256_15041 = G__15057;
i__14257_15042 = G__15058;
continue;
} else {
var lib_15059 = cljs.core.first(seq__14254_15050__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_15059)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15059),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15059),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15059),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15059),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_15059,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15059),"');");
}

}
}
}


var G__15060 = cljs.core.next(seq__14254_15050__$1);
var G__15061 = null;
var G__15062 = (0);
var G__15063 = (0);
seq__14254_15039 = G__15060;
chunk__14255_15040 = G__15061;
count__14256_15041 = G__15062;
i__14257_15042 = G__15063;
continue;
}
} else {
}
}
break;
}

var seq__14258_15064 = cljs.core.seq(node_libs);
var chunk__14259_15065 = null;
var count__14260_15066 = (0);
var i__14261_15067 = (0);
while(true){
if((i__14261_15067 < count__14260_15066)){
var lib_15068 = chunk__14259_15065.cljs$core$IIndexed$_nth$arity$2(null,i__14261_15067);
var vec__14268_15069 = cljs.analyzer.lib_AMPERSAND_sublib(lib_15068);
var lib_SINGLEQUOTE__15070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14268_15069,(0),null);
var sublib_15071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14268_15069,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_15068)," = require('",lib_SINGLEQUOTE__15070,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_15071),";"], 0));


var G__15072 = seq__14258_15064;
var G__15073 = chunk__14259_15065;
var G__15074 = count__14260_15066;
var G__15075 = (i__14261_15067 + (1));
seq__14258_15064 = G__15072;
chunk__14259_15065 = G__15073;
count__14260_15066 = G__15074;
i__14261_15067 = G__15075;
continue;
} else {
var temp__5804__auto___15076 = cljs.core.seq(seq__14258_15064);
if(temp__5804__auto___15076){
var seq__14258_15077__$1 = temp__5804__auto___15076;
if(cljs.core.chunked_seq_QMARK_(seq__14258_15077__$1)){
var c__5525__auto___15078 = cljs.core.chunk_first(seq__14258_15077__$1);
var G__15079 = cljs.core.chunk_rest(seq__14258_15077__$1);
var G__15080 = c__5525__auto___15078;
var G__15081 = cljs.core.count(c__5525__auto___15078);
var G__15082 = (0);
seq__14258_15064 = G__15079;
chunk__14259_15065 = G__15080;
count__14260_15066 = G__15081;
i__14261_15067 = G__15082;
continue;
} else {
var lib_15083 = cljs.core.first(seq__14258_15077__$1);
var vec__14271_15084 = cljs.analyzer.lib_AMPERSAND_sublib(lib_15083);
var lib_SINGLEQUOTE__15085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14271_15084,(0),null);
var sublib_15086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14271_15084,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_15083)," = require('",lib_SINGLEQUOTE__15085,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_15086),";"], 0));


var G__15087 = cljs.core.next(seq__14258_15077__$1);
var G__15088 = null;
var G__15089 = (0);
var G__15090 = (0);
seq__14258_15064 = G__15087;
chunk__14259_15065 = G__15088;
count__14260_15066 = G__15089;
i__14261_15067 = G__15090;
continue;
}
} else {
}
}
break;
}

var seq__14274_15091 = cljs.core.seq(goog_modules);
var chunk__14275_15092 = null;
var count__14276_15093 = (0);
var i__14277_15094 = (0);
while(true){
if((i__14277_15094 < count__14276_15093)){
var lib_15095 = chunk__14275_15092.cljs$core$IIndexed$_nth$arity$2(null,i__14277_15094);
var vec__14284_15096 = cljs.analyzer.lib_AMPERSAND_sublib(lib_15095);
var lib_SINGLEQUOTE__15097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14284_15096,(0),null);
var sublib_15098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14284_15096,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__15097,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_15095)," = goog.module.get('",lib_SINGLEQUOTE__15097,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_15098),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__15099 = seq__14274_15091;
var G__15100 = chunk__14275_15092;
var G__15101 = count__14276_15093;
var G__15102 = (i__14277_15094 + (1));
seq__14274_15091 = G__15099;
chunk__14275_15092 = G__15100;
count__14276_15093 = G__15101;
i__14277_15094 = G__15102;
continue;
} else {
var temp__5804__auto___15103 = cljs.core.seq(seq__14274_15091);
if(temp__5804__auto___15103){
var seq__14274_15104__$1 = temp__5804__auto___15103;
if(cljs.core.chunked_seq_QMARK_(seq__14274_15104__$1)){
var c__5525__auto___15105 = cljs.core.chunk_first(seq__14274_15104__$1);
var G__15106 = cljs.core.chunk_rest(seq__14274_15104__$1);
var G__15107 = c__5525__auto___15105;
var G__15108 = cljs.core.count(c__5525__auto___15105);
var G__15109 = (0);
seq__14274_15091 = G__15106;
chunk__14275_15092 = G__15107;
count__14276_15093 = G__15108;
i__14277_15094 = G__15109;
continue;
} else {
var lib_15110 = cljs.core.first(seq__14274_15104__$1);
var vec__14287_15111 = cljs.analyzer.lib_AMPERSAND_sublib(lib_15110);
var lib_SINGLEQUOTE__15112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14287_15111,(0),null);
var sublib_15113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14287_15111,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__15112,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_15110)," = goog.module.get('",lib_SINGLEQUOTE__15112,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_15113),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__15114 = cljs.core.next(seq__14274_15104__$1);
var G__15115 = null;
var G__15116 = (0);
var G__15117 = (0);
seq__14274_15091 = G__15114;
chunk__14275_15092 = G__15115;
count__14276_15093 = G__15116;
i__14277_15094 = G__15117;
continue;
}
} else {
}
}
break;
}

var seq__14290_15118 = cljs.core.seq(global_exports_libs);
var chunk__14291_15119 = null;
var count__14292_15120 = (0);
var i__14293_15121 = (0);
while(true){
if((i__14293_15121 < count__14292_15120)){
var lib_15122 = chunk__14291_15119.cljs$core$IIndexed$_nth$arity$2(null,i__14293_15121);
var map__14296_15123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_15122))));
var map__14296_15124__$1 = cljs.core.__destructure_map(map__14296_15123);
var global_exports_15125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14296_15124__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_15125,lib_15122);


var G__15126 = seq__14290_15118;
var G__15127 = chunk__14291_15119;
var G__15128 = count__14292_15120;
var G__15129 = (i__14293_15121 + (1));
seq__14290_15118 = G__15126;
chunk__14291_15119 = G__15127;
count__14292_15120 = G__15128;
i__14293_15121 = G__15129;
continue;
} else {
var temp__5804__auto___15130 = cljs.core.seq(seq__14290_15118);
if(temp__5804__auto___15130){
var seq__14290_15131__$1 = temp__5804__auto___15130;
if(cljs.core.chunked_seq_QMARK_(seq__14290_15131__$1)){
var c__5525__auto___15132 = cljs.core.chunk_first(seq__14290_15131__$1);
var G__15133 = cljs.core.chunk_rest(seq__14290_15131__$1);
var G__15134 = c__5525__auto___15132;
var G__15135 = cljs.core.count(c__5525__auto___15132);
var G__15136 = (0);
seq__14290_15118 = G__15133;
chunk__14291_15119 = G__15134;
count__14292_15120 = G__15135;
i__14293_15121 = G__15136;
continue;
} else {
var lib_15137 = cljs.core.first(seq__14290_15131__$1);
var map__14297_15138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_15137))));
var map__14297_15139__$1 = cljs.core.__destructure_map(map__14297_15138);
var global_exports_15140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14297_15139__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_15140,lib_15137);


var G__15142 = cljs.core.next(seq__14290_15131__$1);
var G__15143 = null;
var G__15144 = (0);
var G__15145 = (0);
seq__14290_15118 = G__15142;
chunk__14291_15119 = G__15143;
count__14292_15120 = G__15144;
i__14293_15121 = G__15145;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__14298){
var map__14299 = p__14298;
var map__14299__$1 = cljs.core.__destructure_map(map__14299);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14299__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14299__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14299__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14299__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14299__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14299__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14299__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__14300){
var map__14301 = p__14300;
var map__14301__$1 = cljs.core.__destructure_map(map__14301);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14301__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14301__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14301__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14301__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14301__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14301__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14301__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__14302){
var map__14303 = p__14302;
var map__14303__$1 = cljs.core.__destructure_map(map__14303);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14303__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14303__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14303__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14303__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14303__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__14304_15152 = cljs.core.seq(protocols);
var chunk__14305_15153 = null;
var count__14306_15154 = (0);
var i__14307_15155 = (0);
while(true){
if((i__14307_15155 < count__14306_15154)){
var protocol_15156 = chunk__14305_15153.cljs$core$IIndexed$_nth$arity$2(null,i__14307_15155);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15156)),"}");


var G__15157 = seq__14304_15152;
var G__15158 = chunk__14305_15153;
var G__15159 = count__14306_15154;
var G__15160 = (i__14307_15155 + (1));
seq__14304_15152 = G__15157;
chunk__14305_15153 = G__15158;
count__14306_15154 = G__15159;
i__14307_15155 = G__15160;
continue;
} else {
var temp__5804__auto___15161 = cljs.core.seq(seq__14304_15152);
if(temp__5804__auto___15161){
var seq__14304_15162__$1 = temp__5804__auto___15161;
if(cljs.core.chunked_seq_QMARK_(seq__14304_15162__$1)){
var c__5525__auto___15163 = cljs.core.chunk_first(seq__14304_15162__$1);
var G__15164 = cljs.core.chunk_rest(seq__14304_15162__$1);
var G__15165 = c__5525__auto___15163;
var G__15166 = cljs.core.count(c__5525__auto___15163);
var G__15167 = (0);
seq__14304_15152 = G__15164;
chunk__14305_15153 = G__15165;
count__14306_15154 = G__15166;
i__14307_15155 = G__15167;
continue;
} else {
var protocol_15168 = cljs.core.first(seq__14304_15162__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15168)),"}");


var G__15169 = cljs.core.next(seq__14304_15162__$1);
var G__15170 = null;
var G__15171 = (0);
var G__15172 = (0);
seq__14304_15152 = G__15169;
chunk__14305_15153 = G__15170;
count__14306_15154 = G__15171;
i__14307_15155 = G__15172;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__14308_15173 = cljs.core.seq(fields__$1);
var chunk__14309_15174 = null;
var count__14310_15175 = (0);
var i__14311_15176 = (0);
while(true){
if((i__14311_15176 < count__14310_15175)){
var fld_15177 = chunk__14309_15174.cljs$core$IIndexed$_nth$arity$2(null,i__14311_15176);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_15177," = ",fld_15177,";");


var G__15178 = seq__14308_15173;
var G__15179 = chunk__14309_15174;
var G__15180 = count__14310_15175;
var G__15181 = (i__14311_15176 + (1));
seq__14308_15173 = G__15178;
chunk__14309_15174 = G__15179;
count__14310_15175 = G__15180;
i__14311_15176 = G__15181;
continue;
} else {
var temp__5804__auto___15182 = cljs.core.seq(seq__14308_15173);
if(temp__5804__auto___15182){
var seq__14308_15183__$1 = temp__5804__auto___15182;
if(cljs.core.chunked_seq_QMARK_(seq__14308_15183__$1)){
var c__5525__auto___15184 = cljs.core.chunk_first(seq__14308_15183__$1);
var G__15185 = cljs.core.chunk_rest(seq__14308_15183__$1);
var G__15186 = c__5525__auto___15184;
var G__15187 = cljs.core.count(c__5525__auto___15184);
var G__15188 = (0);
seq__14308_15173 = G__15185;
chunk__14309_15174 = G__15186;
count__14310_15175 = G__15187;
i__14311_15176 = G__15188;
continue;
} else {
var fld_15189 = cljs.core.first(seq__14308_15183__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_15189," = ",fld_15189,";");


var G__15190 = cljs.core.next(seq__14308_15183__$1);
var G__15191 = null;
var G__15192 = (0);
var G__15193 = (0);
seq__14308_15173 = G__15190;
chunk__14309_15174 = G__15191;
count__14310_15175 = G__15192;
i__14311_15176 = G__15193;
continue;
}
} else {
}
}
break;
}

var seq__14312_15194 = cljs.core.seq(pmasks);
var chunk__14313_15195 = null;
var count__14314_15196 = (0);
var i__14315_15197 = (0);
while(true){
if((i__14315_15197 < count__14314_15196)){
var vec__14322_15198 = chunk__14313_15195.cljs$core$IIndexed$_nth$arity$2(null,i__14315_15197);
var pno_15199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14322_15198,(0),null);
var pmask_15200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14322_15198,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_15199,"$ = ",pmask_15200,";");


var G__15201 = seq__14312_15194;
var G__15202 = chunk__14313_15195;
var G__15203 = count__14314_15196;
var G__15204 = (i__14315_15197 + (1));
seq__14312_15194 = G__15201;
chunk__14313_15195 = G__15202;
count__14314_15196 = G__15203;
i__14315_15197 = G__15204;
continue;
} else {
var temp__5804__auto___15205 = cljs.core.seq(seq__14312_15194);
if(temp__5804__auto___15205){
var seq__14312_15206__$1 = temp__5804__auto___15205;
if(cljs.core.chunked_seq_QMARK_(seq__14312_15206__$1)){
var c__5525__auto___15207 = cljs.core.chunk_first(seq__14312_15206__$1);
var G__15208 = cljs.core.chunk_rest(seq__14312_15206__$1);
var G__15209 = c__5525__auto___15207;
var G__15210 = cljs.core.count(c__5525__auto___15207);
var G__15211 = (0);
seq__14312_15194 = G__15208;
chunk__14313_15195 = G__15209;
count__14314_15196 = G__15210;
i__14315_15197 = G__15211;
continue;
} else {
var vec__14325_15213 = cljs.core.first(seq__14312_15206__$1);
var pno_15214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14325_15213,(0),null);
var pmask_15215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14325_15213,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_15214,"$ = ",pmask_15215,";");


var G__15217 = cljs.core.next(seq__14312_15206__$1);
var G__15218 = null;
var G__15219 = (0);
var G__15220 = (0);
seq__14312_15194 = G__15217;
chunk__14313_15195 = G__15218;
count__14314_15196 = G__15219;
i__14315_15197 = G__15220;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__14328){
var map__14329 = p__14328;
var map__14329__$1 = cljs.core.__destructure_map(map__14329);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__14330_15221 = cljs.core.seq(protocols);
var chunk__14331_15222 = null;
var count__14332_15223 = (0);
var i__14333_15224 = (0);
while(true){
if((i__14333_15224 < count__14332_15223)){
var protocol_15225 = chunk__14331_15222.cljs$core$IIndexed$_nth$arity$2(null,i__14333_15224);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15225)),"}");


var G__15226 = seq__14330_15221;
var G__15227 = chunk__14331_15222;
var G__15228 = count__14332_15223;
var G__15229 = (i__14333_15224 + (1));
seq__14330_15221 = G__15226;
chunk__14331_15222 = G__15227;
count__14332_15223 = G__15228;
i__14333_15224 = G__15229;
continue;
} else {
var temp__5804__auto___15230 = cljs.core.seq(seq__14330_15221);
if(temp__5804__auto___15230){
var seq__14330_15231__$1 = temp__5804__auto___15230;
if(cljs.core.chunked_seq_QMARK_(seq__14330_15231__$1)){
var c__5525__auto___15232 = cljs.core.chunk_first(seq__14330_15231__$1);
var G__15234 = cljs.core.chunk_rest(seq__14330_15231__$1);
var G__15235 = c__5525__auto___15232;
var G__15236 = cljs.core.count(c__5525__auto___15232);
var G__15237 = (0);
seq__14330_15221 = G__15234;
chunk__14331_15222 = G__15235;
count__14332_15223 = G__15236;
i__14333_15224 = G__15237;
continue;
} else {
var protocol_15238 = cljs.core.first(seq__14330_15231__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15238)),"}");


var G__15239 = cljs.core.next(seq__14330_15231__$1);
var G__15240 = null;
var G__15241 = (0);
var G__15242 = (0);
seq__14330_15221 = G__15239;
chunk__14331_15222 = G__15240;
count__14332_15223 = G__15241;
i__14333_15224 = G__15242;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__14334_15243 = cljs.core.seq(fields__$1);
var chunk__14335_15244 = null;
var count__14336_15245 = (0);
var i__14337_15246 = (0);
while(true){
if((i__14337_15246 < count__14336_15245)){
var fld_15248 = chunk__14335_15244.cljs$core$IIndexed$_nth$arity$2(null,i__14337_15246);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_15248," = ",fld_15248,";");


var G__15249 = seq__14334_15243;
var G__15250 = chunk__14335_15244;
var G__15251 = count__14336_15245;
var G__15252 = (i__14337_15246 + (1));
seq__14334_15243 = G__15249;
chunk__14335_15244 = G__15250;
count__14336_15245 = G__15251;
i__14337_15246 = G__15252;
continue;
} else {
var temp__5804__auto___15253 = cljs.core.seq(seq__14334_15243);
if(temp__5804__auto___15253){
var seq__14334_15254__$1 = temp__5804__auto___15253;
if(cljs.core.chunked_seq_QMARK_(seq__14334_15254__$1)){
var c__5525__auto___15255 = cljs.core.chunk_first(seq__14334_15254__$1);
var G__15256 = cljs.core.chunk_rest(seq__14334_15254__$1);
var G__15257 = c__5525__auto___15255;
var G__15258 = cljs.core.count(c__5525__auto___15255);
var G__15259 = (0);
seq__14334_15243 = G__15256;
chunk__14335_15244 = G__15257;
count__14336_15245 = G__15258;
i__14337_15246 = G__15259;
continue;
} else {
var fld_15260 = cljs.core.first(seq__14334_15254__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_15260," = ",fld_15260,";");


var G__15261 = cljs.core.next(seq__14334_15254__$1);
var G__15262 = null;
var G__15263 = (0);
var G__15264 = (0);
seq__14334_15243 = G__15261;
chunk__14335_15244 = G__15262;
count__14336_15245 = G__15263;
i__14337_15246 = G__15264;
continue;
}
} else {
}
}
break;
}

var seq__14338_15265 = cljs.core.seq(pmasks);
var chunk__14339_15266 = null;
var count__14340_15267 = (0);
var i__14341_15268 = (0);
while(true){
if((i__14341_15268 < count__14340_15267)){
var vec__14348_15269 = chunk__14339_15266.cljs$core$IIndexed$_nth$arity$2(null,i__14341_15268);
var pno_15270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14348_15269,(0),null);
var pmask_15271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14348_15269,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_15270,"$ = ",pmask_15271,";");


var G__15272 = seq__14338_15265;
var G__15273 = chunk__14339_15266;
var G__15274 = count__14340_15267;
var G__15275 = (i__14341_15268 + (1));
seq__14338_15265 = G__15272;
chunk__14339_15266 = G__15273;
count__14340_15267 = G__15274;
i__14341_15268 = G__15275;
continue;
} else {
var temp__5804__auto___15276 = cljs.core.seq(seq__14338_15265);
if(temp__5804__auto___15276){
var seq__14338_15277__$1 = temp__5804__auto___15276;
if(cljs.core.chunked_seq_QMARK_(seq__14338_15277__$1)){
var c__5525__auto___15278 = cljs.core.chunk_first(seq__14338_15277__$1);
var G__15279 = cljs.core.chunk_rest(seq__14338_15277__$1);
var G__15280 = c__5525__auto___15278;
var G__15281 = cljs.core.count(c__5525__auto___15278);
var G__15282 = (0);
seq__14338_15265 = G__15279;
chunk__14339_15266 = G__15280;
count__14340_15267 = G__15281;
i__14341_15268 = G__15282;
continue;
} else {
var vec__14351_15283 = cljs.core.first(seq__14338_15277__$1);
var pno_15284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351_15283,(0),null);
var pmask_15285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351_15283,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_15284,"$ = ",pmask_15285,";");


var G__15286 = cljs.core.next(seq__14338_15277__$1);
var G__15287 = null;
var G__15288 = (0);
var G__15289 = (0);
seq__14338_15265 = G__15286;
chunk__14339_15266 = G__15287;
count__14340_15267 = G__15288;
i__14341_15268 = G__15289;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__14354){
var map__14355 = p__14354;
var map__14355__$1 = cljs.core.__destructure_map(map__14355);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14355__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14355__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14355__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14355__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14355__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__14356){
var map__14357 = p__14356;
var map__14357__$1 = cljs.core.__destructure_map(map__14357);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14357__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14357__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14357__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14357__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14357__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__14362 = cljs.core.seq(table);
var chunk__14363 = null;
var count__14364 = (0);
var i__14365 = (0);
while(true){
if((i__14365 < count__14364)){
var vec__14372 = chunk__14363.cljs$core$IIndexed$_nth$arity$2(null,i__14365);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14372,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14372,(1),null);
var ns_15294 = cljs.core.namespace(sym);
var name_15295 = cljs.core.name(sym);
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


var G__15296 = seq__14362;
var G__15297 = chunk__14363;
var G__15298 = count__14364;
var G__15299 = (i__14365 + (1));
seq__14362 = G__15296;
chunk__14363 = G__15297;
count__14364 = G__15298;
i__14365 = G__15299;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14362);
if(temp__5804__auto__){
var seq__14362__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14362__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14362__$1);
var G__15300 = cljs.core.chunk_rest(seq__14362__$1);
var G__15301 = c__5525__auto__;
var G__15302 = cljs.core.count(c__5525__auto__);
var G__15303 = (0);
seq__14362 = G__15300;
chunk__14363 = G__15301;
count__14364 = G__15302;
i__14365 = G__15303;
continue;
} else {
var vec__14375 = cljs.core.first(seq__14362__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14375,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14375,(1),null);
var ns_15304 = cljs.core.namespace(sym);
var name_15305 = cljs.core.name(sym);
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


var G__15307 = cljs.core.next(seq__14362__$1);
var G__15308 = null;
var G__15309 = (0);
var G__15310 = (0);
seq__14362 = G__15307;
chunk__14363 = G__15308;
count__14364 = G__15309;
i__14365 = G__15310;
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
var G__14379 = arguments.length;
switch (G__14379) {
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
var k_15312 = cljs.core.first(ks);
var vec__14380_15313 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_15312);
var top_15314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14380_15313,(0),null);
var prefix_SINGLEQUOTE__15315 = vec__14380_15313;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_15312)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__15315) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_15314)) || (cljs.core.contains_QMARK_(known_externs,top_15314)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__15315)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_15314);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__15315)),";");
}
} else {
}

var m_15318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_15312);
if(cljs.core.empty_QMARK_(m_15318)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__15315,m_15318,top_level,known_externs);
}

var G__15319 = cljs.core.next(ks);
ks = G__15319;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
