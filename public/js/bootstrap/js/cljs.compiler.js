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
var map__18081 = s;
var map__18081__$1 = cljs.core.__destructure_map(map__18081);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__18083 = info;
var map__18084 = G__18083;
var map__18084__$1 = cljs.core.__destructure_map(map__18084);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18084__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__18083__$1 = G__18083;
while(true){
var d__$2 = d__$1;
var map__18086 = G__18083__$1;
var map__18086__$1 = cljs.core.__destructure_map(map__18086);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18086__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__19175 = (d__$2 + (1));
var G__19176 = shadow__$1;
d__$1 = G__19175;
G__18083__$1 = G__19176;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__18087){
var map__18088 = p__18087;
var map__18088__$1 = cljs.core.__destructure_map(map__18088);
var name_var = map__18088__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18088__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__18089 = info;
var map__18089__$1 = cljs.core.__destructure_map(map__18089);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18089__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18089__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__18092 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__18092) : cljs.compiler.munge.call(null,G__18092));
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
var G__18095 = arguments.length;
switch (G__18095) {
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
var ms = (function (){var fexpr__18097 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11982,11982,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__18097.cljs$core$IFn$_invoke$arity$1 ? fexpr__18097.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__18097.call(null,ss__$3));
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
var G__18101 = cp;
switch (G__18101) {
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
var seq__18139_19188 = cljs.core.seq(s);
var chunk__18140_19189 = null;
var count__18141_19190 = (0);
var i__18142_19191 = (0);
while(true){
if((i__18142_19191 < count__18141_19190)){
var c_19192 = chunk__18140_19189.cljs$core$IIndexed$_nth$arity$2(null,i__18142_19191);
sb.append(cljs.compiler.escape_char(c_19192));


var G__19193 = seq__18139_19188;
var G__19194 = chunk__18140_19189;
var G__19195 = count__18141_19190;
var G__19196 = (i__18142_19191 + (1));
seq__18139_19188 = G__19193;
chunk__18140_19189 = G__19194;
count__18141_19190 = G__19195;
i__18142_19191 = G__19196;
continue;
} else {
var temp__5804__auto___19197 = cljs.core.seq(seq__18139_19188);
if(temp__5804__auto___19197){
var seq__18139_19198__$1 = temp__5804__auto___19197;
if(cljs.core.chunked_seq_QMARK_(seq__18139_19198__$1)){
var c__5525__auto___19199 = cljs.core.chunk_first(seq__18139_19198__$1);
var G__19200 = cljs.core.chunk_rest(seq__18139_19198__$1);
var G__19201 = c__5525__auto___19199;
var G__19202 = cljs.core.count(c__5525__auto___19199);
var G__19203 = (0);
seq__18139_19188 = G__19200;
chunk__18140_19189 = G__19201;
count__18141_19190 = G__19202;
i__18142_19191 = G__19203;
continue;
} else {
var c_19204 = cljs.core.first(seq__18139_19198__$1);
sb.append(cljs.compiler.escape_char(c_19204));


var G__19205 = cljs.core.next(seq__18139_19198__$1);
var G__19206 = null;
var G__19207 = (0);
var G__19208 = (0);
seq__18139_19188 = G__19205;
chunk__18140_19189 = G__19206;
count__18141_19190 = G__19207;
i__18142_19191 = G__19208;
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
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__18160 = cljs.core.get_global_hierarchy;
return (fexpr__18160.cljs$core$IFn$_invoke$arity$0 ? fexpr__18160.cljs$core$IFn$_invoke$arity$0() : fexpr__18160.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__18162_19209 = ast;
var map__18162_19210__$1 = cljs.core.__destructure_map(map__18162_19209);
var env_19211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18162_19210__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_19211))){
var map__18163_19212 = env_19211;
var map__18163_19213__$1 = cljs.core.__destructure_map(map__18163_19212);
var line_19214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18163_19213__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_19215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18163_19213__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__18164 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__18167 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__18166 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__18166.cljs$core$IFn$_invoke$arity$1 ? fexpr__18166.cljs$core$IFn$_invoke$arity$1(G__18167) : fexpr__18166.call(null,G__18167));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18164,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__18164;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_19214 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_19215)?(column_19215 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__18178 = arguments.length;
switch (G__18178) {
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
var len__5726__auto___19217 = arguments.length;
var i__5727__auto___19218 = (0);
while(true){
if((i__5727__auto___19218 < len__5726__auto___19217)){
args_arr__5751__auto__.push((arguments[i__5727__auto___19218]));

var G__19219 = (i__5727__auto___19218 + (1));
i__5727__auto___19218 = G__19219;
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
var s_19220 = (function (){var G__18184 = a;
if((!(typeof a === 'string'))){
return G__18184.toString();
} else {
return G__18184;
}
})();
var temp__5808__auto___19221 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___19221 == null)){
} else {
var sm_data_19222 = temp__5808__auto___19221;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_19222,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__18168_SHARP_){
return (p1__18168_SHARP_ + s_19220.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_19220], 0));

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

var seq__18192 = cljs.core.seq(xs);
var chunk__18193 = null;
var count__18194 = (0);
var i__18195 = (0);
while(true){
if((i__18195 < count__18194)){
var x = chunk__18193.cljs$core$IIndexed$_nth$arity$2(null,i__18195);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__19228 = seq__18192;
var G__19229 = chunk__18193;
var G__19230 = count__18194;
var G__19231 = (i__18195 + (1));
seq__18192 = G__19228;
chunk__18193 = G__19229;
count__18194 = G__19230;
i__18195 = G__19231;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18192);
if(temp__5804__auto__){
var seq__18192__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18192__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18192__$1);
var G__19232 = cljs.core.chunk_rest(seq__18192__$1);
var G__19233 = c__5525__auto__;
var G__19234 = cljs.core.count(c__5525__auto__);
var G__19235 = (0);
seq__18192 = G__19232;
chunk__18193 = G__19233;
count__18194 = G__19234;
i__18195 = G__19235;
continue;
} else {
var x = cljs.core.first(seq__18192__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__19236 = cljs.core.next(seq__18192__$1);
var G__19237 = null;
var G__19238 = (0);
var G__19239 = (0);
seq__18192 = G__19236;
chunk__18193 = G__19237;
count__18194 = G__19238;
i__18195 = G__19239;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq18172){
var G__18173 = cljs.core.first(seq18172);
var seq18172__$1 = cljs.core.next(seq18172);
var G__18174 = cljs.core.first(seq18172__$1);
var seq18172__$2 = cljs.core.next(seq18172__$1);
var G__18175 = cljs.core.first(seq18172__$2);
var seq18172__$3 = cljs.core.next(seq18172__$2);
var G__18176 = cljs.core.first(seq18172__$3);
var seq18172__$4 = cljs.core.next(seq18172__$3);
var G__18177 = cljs.core.first(seq18172__$4);
var seq18172__$5 = cljs.core.next(seq18172__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18173,G__18174,G__18175,G__18176,G__18177,seq18172__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__18201){
var map__18202 = p__18201;
var map__18202__$1 = cljs.core.__destructure_map(map__18202);
var m = map__18202__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18202__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__18223 = arguments.length;
switch (G__18223) {
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
var len__5726__auto___19243 = arguments.length;
var i__5727__auto___19244 = (0);
while(true){
if((i__5727__auto___19244 < len__5726__auto___19243)){
args_arr__5751__auto__.push((arguments[i__5727__auto___19244]));

var G__19245 = (i__5727__auto___19244 + (1));
i__5727__auto___19244 = G__19245;
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

var seq__18232_19250 = cljs.core.seq(xs);
var chunk__18233_19251 = null;
var count__18234_19252 = (0);
var i__18235_19253 = (0);
while(true){
if((i__18235_19253 < count__18234_19252)){
var x_19254 = chunk__18233_19251.cljs$core$IIndexed$_nth$arity$2(null,i__18235_19253);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_19254);


var G__19255 = seq__18232_19250;
var G__19256 = chunk__18233_19251;
var G__19257 = count__18234_19252;
var G__19258 = (i__18235_19253 + (1));
seq__18232_19250 = G__19255;
chunk__18233_19251 = G__19256;
count__18234_19252 = G__19257;
i__18235_19253 = G__19258;
continue;
} else {
var temp__5804__auto___19259 = cljs.core.seq(seq__18232_19250);
if(temp__5804__auto___19259){
var seq__18232_19260__$1 = temp__5804__auto___19259;
if(cljs.core.chunked_seq_QMARK_(seq__18232_19260__$1)){
var c__5525__auto___19261 = cljs.core.chunk_first(seq__18232_19260__$1);
var G__19262 = cljs.core.chunk_rest(seq__18232_19260__$1);
var G__19263 = c__5525__auto___19261;
var G__19264 = cljs.core.count(c__5525__auto___19261);
var G__19265 = (0);
seq__18232_19250 = G__19262;
chunk__18233_19251 = G__19263;
count__18234_19252 = G__19264;
i__18235_19253 = G__19265;
continue;
} else {
var x_19267 = cljs.core.first(seq__18232_19260__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_19267);


var G__19268 = cljs.core.next(seq__18232_19260__$1);
var G__19269 = null;
var G__19270 = (0);
var G__19271 = (0);
seq__18232_19250 = G__19268;
chunk__18233_19251 = G__19269;
count__18234_19252 = G__19270;
i__18235_19253 = G__19271;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq18216){
var G__18217 = cljs.core.first(seq18216);
var seq18216__$1 = cljs.core.next(seq18216);
var G__18218 = cljs.core.first(seq18216__$1);
var seq18216__$2 = cljs.core.next(seq18216__$1);
var G__18219 = cljs.core.first(seq18216__$2);
var seq18216__$3 = cljs.core.next(seq18216__$2);
var G__18220 = cljs.core.first(seq18216__$3);
var seq18216__$4 = cljs.core.next(seq18216__$3);
var G__18221 = cljs.core.first(seq18216__$4);
var seq18216__$5 = cljs.core.next(seq18216__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18217,G__18218,G__18219,G__18220,G__18221,seq18216__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18248_19272 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18249_19273 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18250_19274 = true;
var _STAR_print_fn_STAR__temp_val__18251_19275 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18250_19274);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18251_19275);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18249_19273);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18248_19272);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__18259 = cljs.core.get_global_hierarchy;
return (fexpr__18259.cljs$core$IFn$_invoke$arity$0 ? fexpr__18259.cljs$core$IFn$_invoke$arity$0() : fexpr__18259.call(null));
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
var vec__18265 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18265,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18265,(1),null);
var G__18269 = ns;
var G__18270 = name;
var G__18271 = (function (){
var G__18272 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__18272) : cljs.compiler.emit_constant.call(null,G__18272));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__18269,G__18270,G__18271) : cljs.compiler.emit_record_value.call(null,G__18269,G__18270,G__18271));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(x)){
var G__18273 = cljs.core.keys(x);
var G__18274 = cljs.core.vals(x);
var G__18275 = cljs.compiler.emit_constants_comma_sep;
var G__18276 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__18273,G__18274,G__18275,G__18276) : cljs.compiler.emit_map.call(null,G__18273,G__18274,G__18275,G__18276));
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
var G__18283 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__18284 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__18283,G__18284) : cljs.compiler.emit_with_meta.call(null,G__18283,G__18284));
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
var vec__18314 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18314,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18314,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18314,(2),null);
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
var G__18325 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__18325) : x.call(null,G__18325));
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
var G__18326 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__18326) : x.call(null,G__18326));
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
var G__18329 = items;
var G__18330 = (function (p1__18328_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__18328_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__18329,G__18330) : cljs.compiler.emit_js_object.call(null,G__18329,G__18330));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__18340){
var map__18341 = p__18340;
var map__18341__$1 = cljs.core.__destructure_map(map__18341);
var ast = map__18341__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18341__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18341__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18341__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__18342 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__18342__$1 = cljs.core.__destructure_map(map__18342);
var cenv = map__18342__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18342__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__18343 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5000__auto__ = (function (){var G__18344 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__18344) : cljs.compiler.es5_GT__EQ_.call(null,G__18344));
})();
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__5000__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__18343,cljs.analyzer.es5_allowed);
} else {
return G__18343;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5002__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__18345 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__18345,reserved);
} else {
return G__18345;
}
})();
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__18347_19288 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__18347_19289__$1 = (((G__18347_19288 instanceof cljs.core.Keyword))?G__18347_19288.fqn:null);
switch (G__18347_19289__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__18351){
var map__18352 = p__18351;
var map__18352__$1 = cljs.core.__destructure_map(map__18352);
var arg = map__18352__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18352__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18352__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18352__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18352__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__18354 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__18354__$1 = cljs.core.__destructure_map(map__18354);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__18359){
var map__18360 = p__18359;
var map__18360__$1 = cljs.core.__destructure_map(map__18360);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18360__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18360__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18360__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__18361_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__18361_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__18364 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__18364) : comma_sep.call(null,G__18364));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__18366 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__18366) : comma_sep.call(null,G__18366));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__18367){
var map__18368 = p__18367;
var map__18368__$1 = cljs.core.__destructure_map(map__18368);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18368__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18368__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18368__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__18369){
var map__18370 = p__18369;
var map__18370__$1 = cljs.core.__destructure_map(map__18370);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18370__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18370__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__18371_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__18371_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__18372 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__18372) : comma_sep.call(null,G__18372));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__18375){
var map__18376 = p__18375;
var map__18376__$1 = cljs.core.__destructure_map(map__18376);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18376__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5804__auto___19314 = cljs.core.seq(items);
if(temp__5804__auto___19314){
var items_19315__$1 = temp__5804__auto___19314;
var vec__18382_19316 = items_19315__$1;
var seq__18383_19317 = cljs.core.seq(vec__18382_19316);
var first__18384_19318 = cljs.core.first(seq__18383_19317);
var seq__18383_19319__$1 = cljs.core.next(seq__18383_19317);
var vec__18385_19320 = first__18384_19318;
var k_19321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18385_19320,(0),null);
var v_19322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18385_19320,(1),null);
var r_19323 = seq__18383_19319__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_19321),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_19322) : emit_js_object_val.call(null,v_19322)));

var seq__18388_19324 = cljs.core.seq(r_19323);
var chunk__18389_19325 = null;
var count__18390_19326 = (0);
var i__18391_19327 = (0);
while(true){
if((i__18391_19327 < count__18390_19326)){
var vec__18406_19328 = chunk__18389_19325.cljs$core$IIndexed$_nth$arity$2(null,i__18391_19327);
var k_19329__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18406_19328,(0),null);
var v_19330__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18406_19328,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_19329__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_19330__$1) : emit_js_object_val.call(null,v_19330__$1)));


var G__19331 = seq__18388_19324;
var G__19332 = chunk__18389_19325;
var G__19333 = count__18390_19326;
var G__19334 = (i__18391_19327 + (1));
seq__18388_19324 = G__19331;
chunk__18389_19325 = G__19332;
count__18390_19326 = G__19333;
i__18391_19327 = G__19334;
continue;
} else {
var temp__5804__auto___19335__$1 = cljs.core.seq(seq__18388_19324);
if(temp__5804__auto___19335__$1){
var seq__18388_19336__$1 = temp__5804__auto___19335__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18388_19336__$1)){
var c__5525__auto___19337 = cljs.core.chunk_first(seq__18388_19336__$1);
var G__19338 = cljs.core.chunk_rest(seq__18388_19336__$1);
var G__19339 = c__5525__auto___19337;
var G__19340 = cljs.core.count(c__5525__auto___19337);
var G__19341 = (0);
seq__18388_19324 = G__19338;
chunk__18389_19325 = G__19339;
count__18390_19326 = G__19340;
i__18391_19327 = G__19341;
continue;
} else {
var vec__18409_19344 = cljs.core.first(seq__18388_19336__$1);
var k_19345__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18409_19344,(0),null);
var v_19346__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18409_19344,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_19345__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_19346__$1) : emit_js_object_val.call(null,v_19346__$1)));


var G__19347 = cljs.core.next(seq__18388_19336__$1);
var G__19348 = null;
var G__19349 = (0);
var G__19350 = (0);
seq__18388_19324 = G__19347;
chunk__18389_19325 = G__19348;
count__18390_19326 = G__19349;
i__18391_19327 = G__19350;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__18412){
var map__18413 = p__18412;
var map__18413__$1 = cljs.core.__destructure_map(map__18413);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18413__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18413__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18413__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__18414){
var map__18415 = p__18414;
var map__18415__$1 = cljs.core.__destructure_map(map__18415);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18415__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18415__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__18416){
var map__18417 = p__18416;
var map__18417__$1 = cljs.core.__destructure_map(map__18417);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18417__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__18418){
var map__18419 = p__18418;
var map__18419__$1 = cljs.core.__destructure_map(map__18419);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18419__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18419__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__18424 = cljs.analyzer.unwrap_quote(expr);
var map__18424__$1 = cljs.core.__destructure_map(map__18424);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18424__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18424__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18424__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__18425 = cljs.analyzer.unwrap_quote(expr);
var map__18425__$1 = cljs.core.__destructure_map(map__18425);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18425__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18425__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18425__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__5002__auto__ = (function (){var fexpr__18432 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__18432.cljs$core$IFn$_invoke$arity$1 ? fexpr__18432.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__18432.call(null,tag));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__18434){
var map__18435 = p__18434;
var map__18435__$1 = cljs.core.__destructure_map(map__18435);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18435__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18435__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18435__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18435__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18435__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__18436){
var map__18437 = p__18436;
var map__18437__$1 = cljs.core.__destructure_map(map__18437);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__18440_19355 = cljs.core.seq(nodes);
var chunk__18441_19356 = null;
var count__18442_19357 = (0);
var i__18443_19358 = (0);
while(true){
if((i__18443_19358 < count__18442_19357)){
var map__18464_19359 = chunk__18441_19356.cljs$core$IIndexed$_nth$arity$2(null,i__18443_19358);
var map__18464_19360__$1 = cljs.core.__destructure_map(map__18464_19359);
var ts_19361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18464_19360__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__18465_19362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18464_19360__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__18465_19363__$1 = cljs.core.__destructure_map(map__18465_19362);
var then_19364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18465_19363__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__18466_19365 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_19361));
var chunk__18467_19366 = null;
var count__18468_19367 = (0);
var i__18469_19368 = (0);
while(true){
if((i__18469_19368 < count__18468_19367)){
var test_19369 = chunk__18467_19366.cljs$core$IIndexed$_nth$arity$2(null,i__18469_19368);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_19369,":");


var G__19370 = seq__18466_19365;
var G__19371 = chunk__18467_19366;
var G__19372 = count__18468_19367;
var G__19373 = (i__18469_19368 + (1));
seq__18466_19365 = G__19370;
chunk__18467_19366 = G__19371;
count__18468_19367 = G__19372;
i__18469_19368 = G__19373;
continue;
} else {
var temp__5804__auto___19374 = cljs.core.seq(seq__18466_19365);
if(temp__5804__auto___19374){
var seq__18466_19377__$1 = temp__5804__auto___19374;
if(cljs.core.chunked_seq_QMARK_(seq__18466_19377__$1)){
var c__5525__auto___19380 = cljs.core.chunk_first(seq__18466_19377__$1);
var G__19381 = cljs.core.chunk_rest(seq__18466_19377__$1);
var G__19382 = c__5525__auto___19380;
var G__19383 = cljs.core.count(c__5525__auto___19380);
var G__19384 = (0);
seq__18466_19365 = G__19381;
chunk__18467_19366 = G__19382;
count__18468_19367 = G__19383;
i__18469_19368 = G__19384;
continue;
} else {
var test_19385 = cljs.core.first(seq__18466_19377__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_19385,":");


var G__19386 = cljs.core.next(seq__18466_19377__$1);
var G__19387 = null;
var G__19388 = (0);
var G__19389 = (0);
seq__18466_19365 = G__19386;
chunk__18467_19366 = G__19387;
count__18468_19367 = G__19388;
i__18469_19368 = G__19389;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_19364);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_19364);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__19390 = seq__18440_19355;
var G__19391 = chunk__18441_19356;
var G__19392 = count__18442_19357;
var G__19393 = (i__18443_19358 + (1));
seq__18440_19355 = G__19390;
chunk__18441_19356 = G__19391;
count__18442_19357 = G__19392;
i__18443_19358 = G__19393;
continue;
} else {
var temp__5804__auto___19394 = cljs.core.seq(seq__18440_19355);
if(temp__5804__auto___19394){
var seq__18440_19395__$1 = temp__5804__auto___19394;
if(cljs.core.chunked_seq_QMARK_(seq__18440_19395__$1)){
var c__5525__auto___19396 = cljs.core.chunk_first(seq__18440_19395__$1);
var G__19397 = cljs.core.chunk_rest(seq__18440_19395__$1);
var G__19398 = c__5525__auto___19396;
var G__19399 = cljs.core.count(c__5525__auto___19396);
var G__19400 = (0);
seq__18440_19355 = G__19397;
chunk__18441_19356 = G__19398;
count__18442_19357 = G__19399;
i__18443_19358 = G__19400;
continue;
} else {
var map__18474_19401 = cljs.core.first(seq__18440_19395__$1);
var map__18474_19402__$1 = cljs.core.__destructure_map(map__18474_19401);
var ts_19403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18474_19402__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__18475_19404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18474_19402__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__18475_19405__$1 = cljs.core.__destructure_map(map__18475_19404);
var then_19406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18475_19405__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__18476_19407 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_19403));
var chunk__18477_19408 = null;
var count__18478_19409 = (0);
var i__18479_19410 = (0);
while(true){
if((i__18479_19410 < count__18478_19409)){
var test_19411 = chunk__18477_19408.cljs$core$IIndexed$_nth$arity$2(null,i__18479_19410);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_19411,":");


var G__19412 = seq__18476_19407;
var G__19413 = chunk__18477_19408;
var G__19414 = count__18478_19409;
var G__19415 = (i__18479_19410 + (1));
seq__18476_19407 = G__19412;
chunk__18477_19408 = G__19413;
count__18478_19409 = G__19414;
i__18479_19410 = G__19415;
continue;
} else {
var temp__5804__auto___19416__$1 = cljs.core.seq(seq__18476_19407);
if(temp__5804__auto___19416__$1){
var seq__18476_19417__$1 = temp__5804__auto___19416__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18476_19417__$1)){
var c__5525__auto___19418 = cljs.core.chunk_first(seq__18476_19417__$1);
var G__19419 = cljs.core.chunk_rest(seq__18476_19417__$1);
var G__19420 = c__5525__auto___19418;
var G__19421 = cljs.core.count(c__5525__auto___19418);
var G__19422 = (0);
seq__18476_19407 = G__19419;
chunk__18477_19408 = G__19420;
count__18478_19409 = G__19421;
i__18479_19410 = G__19422;
continue;
} else {
var test_19423 = cljs.core.first(seq__18476_19417__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_19423,":");


var G__19424 = cljs.core.next(seq__18476_19417__$1);
var G__19425 = null;
var G__19426 = (0);
var G__19427 = (0);
seq__18476_19407 = G__19424;
chunk__18477_19408 = G__19425;
count__18478_19409 = G__19426;
i__18479_19410 = G__19427;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_19406);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_19406);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__19428 = cljs.core.next(seq__18440_19395__$1);
var G__19429 = null;
var G__19430 = (0);
var G__19431 = (0);
seq__18440_19355 = G__19428;
chunk__18441_19356 = G__19429;
count__18442_19357 = G__19430;
i__18443_19358 = G__19431;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__18485){
var map__18486 = p__18485;
var map__18486__$1 = cljs.core.__destructure_map(map__18486);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18486__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18486__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18490 = env;
var G__18491 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__18490,G__18491) : cljs.compiler.resolve_type.call(null,G__18490,G__18491));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__18493 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18493,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18493,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__18487_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__18487_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__18487_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__18497 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__18497,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__18497;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18500 = env;
var G__18501 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__18500,G__18501) : cljs.compiler.resolve_type.call(null,G__18500,G__18501));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18502_SHARP_){
return cljs.compiler.resolve_type(env,p1__18502_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__18510 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__18511 = cljs.core.seq(vec__18510);
var first__18512 = cljs.core.first(seq__18511);
var seq__18511__$1 = cljs.core.next(seq__18511);
var p = first__18512;
var first__18512__$1 = cljs.core.first(seq__18511__$1);
var seq__18511__$2 = cljs.core.next(seq__18511__$1);
var ts = first__18512__$1;
var first__18512__$2 = cljs.core.first(seq__18511__$2);
var seq__18511__$3 = cljs.core.next(seq__18511__$2);
var n = first__18512__$2;
var xs = seq__18511__$3;
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
var vec__18514 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__18515 = cljs.core.seq(vec__18514);
var first__18516 = cljs.core.first(seq__18515);
var seq__18515__$1 = cljs.core.next(seq__18515);
var p = first__18516;
var first__18516__$1 = cljs.core.first(seq__18515__$1);
var seq__18515__$2 = cljs.core.next(seq__18515__$1);
var ts = first__18516__$1;
var xs = seq__18515__$2;
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
var G__18518 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__18517 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__18517.cljs$core$IFn$_invoke$arity$1 ? fexpr__18517.cljs$core$IFn$_invoke$arity$1(G__18518) : fexpr__18517.call(null,G__18518));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__18525 = arguments.length;
switch (G__18525) {
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
var vec__18540 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18519_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__18519_SHARP_);
} else {
return p1__18519_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__18541 = cljs.core.seq(vec__18540);
var first__18542 = cljs.core.first(seq__18541);
var seq__18541__$1 = cljs.core.next(seq__18541);
var x = first__18542;
var ys = seq__18541__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__18543 = cljs.core.seq(ys);
var chunk__18544 = null;
var count__18545 = (0);
var i__18546 = (0);
while(true){
if((i__18546 < count__18545)){
var next_line = chunk__18544.cljs$core$IIndexed$_nth$arity$2(null,i__18546);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__19443 = seq__18543;
var G__19444 = chunk__18544;
var G__19445 = count__18545;
var G__19446 = (i__18546 + (1));
seq__18543 = G__19443;
chunk__18544 = G__19444;
count__18545 = G__19445;
i__18546 = G__19446;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18543);
if(temp__5804__auto__){
var seq__18543__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18543__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18543__$1);
var G__19447 = cljs.core.chunk_rest(seq__18543__$1);
var G__19448 = c__5525__auto__;
var G__19449 = cljs.core.count(c__5525__auto__);
var G__19450 = (0);
seq__18543 = G__19447;
chunk__18544 = G__19448;
count__18545 = G__19449;
i__18546 = G__19450;
continue;
} else {
var next_line = cljs.core.first(seq__18543__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__19451 = cljs.core.next(seq__18543__$1);
var G__19452 = null;
var G__19453 = (0);
var G__19454 = (0);
seq__18543 = G__19451;
chunk__18544 = G__19452;
count__18545 = G__19453;
i__18546 = G__19454;
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

var seq__18549_19455 = cljs.core.seq(docs__$2);
var chunk__18550_19456 = null;
var count__18551_19457 = (0);
var i__18552_19459 = (0);
while(true){
if((i__18552_19459 < count__18551_19457)){
var e_19461 = chunk__18550_19456.cljs$core$IIndexed$_nth$arity$2(null,i__18552_19459);
if(cljs.core.truth_(e_19461)){
print_comment_lines(e_19461);
} else {
}


var G__19462 = seq__18549_19455;
var G__19463 = chunk__18550_19456;
var G__19464 = count__18551_19457;
var G__19465 = (i__18552_19459 + (1));
seq__18549_19455 = G__19462;
chunk__18550_19456 = G__19463;
count__18551_19457 = G__19464;
i__18552_19459 = G__19465;
continue;
} else {
var temp__5804__auto___19466 = cljs.core.seq(seq__18549_19455);
if(temp__5804__auto___19466){
var seq__18549_19467__$1 = temp__5804__auto___19466;
if(cljs.core.chunked_seq_QMARK_(seq__18549_19467__$1)){
var c__5525__auto___19471 = cljs.core.chunk_first(seq__18549_19467__$1);
var G__19472 = cljs.core.chunk_rest(seq__18549_19467__$1);
var G__19473 = c__5525__auto___19471;
var G__19474 = cljs.core.count(c__5525__auto___19471);
var G__19475 = (0);
seq__18549_19455 = G__19472;
chunk__18550_19456 = G__19473;
count__18551_19457 = G__19474;
i__18552_19459 = G__19475;
continue;
} else {
var e_19476 = cljs.core.first(seq__18549_19467__$1);
if(cljs.core.truth_(e_19476)){
print_comment_lines(e_19476);
} else {
}


var G__19477 = cljs.core.next(seq__18549_19467__$1);
var G__19478 = null;
var G__19479 = (0);
var G__19480 = (0);
seq__18549_19455 = G__19477;
chunk__18550_19456 = G__19478;
count__18551_19457 = G__19479;
i__18552_19459 = G__19480;
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
var and__5000__auto__ = cljs.core.some((function (p1__18567_SHARP_){
return goog.string.startsWith(p1__18567_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__18570){
var map__18571 = p__18570;
var map__18571__$1 = cljs.core.__destructure_map(map__18571);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__18581){
var map__18582 = p__18581;
var map__18582__$1 = cljs.core.__destructure_map(map__18582);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18582__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__18583_19497 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__18584_19498 = null;
var count__18585_19499 = (0);
var i__18586_19500 = (0);
while(true){
if((i__18586_19500 < count__18585_19499)){
var vec__18603_19501 = chunk__18584_19498.cljs$core$IIndexed$_nth$arity$2(null,i__18586_19500);
var i_19502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18603_19501,(0),null);
var param_19503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18603_19501,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_19503);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__19505 = seq__18583_19497;
var G__19506 = chunk__18584_19498;
var G__19507 = count__18585_19499;
var G__19508 = (i__18586_19500 + (1));
seq__18583_19497 = G__19505;
chunk__18584_19498 = G__19506;
count__18585_19499 = G__19507;
i__18586_19500 = G__19508;
continue;
} else {
var temp__5804__auto___19509 = cljs.core.seq(seq__18583_19497);
if(temp__5804__auto___19509){
var seq__18583_19510__$1 = temp__5804__auto___19509;
if(cljs.core.chunked_seq_QMARK_(seq__18583_19510__$1)){
var c__5525__auto___19511 = cljs.core.chunk_first(seq__18583_19510__$1);
var G__19512 = cljs.core.chunk_rest(seq__18583_19510__$1);
var G__19513 = c__5525__auto___19511;
var G__19514 = cljs.core.count(c__5525__auto___19511);
var G__19515 = (0);
seq__18583_19497 = G__19512;
chunk__18584_19498 = G__19513;
count__18585_19499 = G__19514;
i__18586_19500 = G__19515;
continue;
} else {
var vec__18607_19516 = cljs.core.first(seq__18583_19510__$1);
var i_19517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18607_19516,(0),null);
var param_19518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18607_19516,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_19518);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__19520 = cljs.core.next(seq__18583_19510__$1);
var G__19521 = null;
var G__19522 = (0);
var G__19523 = (0);
seq__18583_19497 = G__19520;
chunk__18584_19498 = G__19521;
count__18585_19499 = G__19522;
i__18586_19500 = G__19523;
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

var seq__18611_19525 = cljs.core.seq(params);
var chunk__18612_19526 = null;
var count__18613_19527 = (0);
var i__18614_19528 = (0);
while(true){
if((i__18614_19528 < count__18613_19527)){
var param_19529 = chunk__18612_19526.cljs$core$IIndexed$_nth$arity$2(null,i__18614_19528);
cljs.compiler.emit(param_19529);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_19529,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__19531 = seq__18611_19525;
var G__19532 = chunk__18612_19526;
var G__19533 = count__18613_19527;
var G__19534 = (i__18614_19528 + (1));
seq__18611_19525 = G__19531;
chunk__18612_19526 = G__19532;
count__18613_19527 = G__19533;
i__18614_19528 = G__19534;
continue;
} else {
var temp__5804__auto___19535 = cljs.core.seq(seq__18611_19525);
if(temp__5804__auto___19535){
var seq__18611_19536__$1 = temp__5804__auto___19535;
if(cljs.core.chunked_seq_QMARK_(seq__18611_19536__$1)){
var c__5525__auto___19537 = cljs.core.chunk_first(seq__18611_19536__$1);
var G__19538 = cljs.core.chunk_rest(seq__18611_19536__$1);
var G__19539 = c__5525__auto___19537;
var G__19540 = cljs.core.count(c__5525__auto___19537);
var G__19541 = (0);
seq__18611_19525 = G__19538;
chunk__18612_19526 = G__19539;
count__18613_19527 = G__19540;
i__18614_19528 = G__19541;
continue;
} else {
var param_19542 = cljs.core.first(seq__18611_19536__$1);
cljs.compiler.emit(param_19542);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_19542,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__19543 = cljs.core.next(seq__18611_19536__$1);
var G__19544 = null;
var G__19545 = (0);
var G__19546 = (0);
seq__18611_19525 = G__19543;
chunk__18612_19526 = G__19544;
count__18613_19527 = G__19545;
i__18614_19528 = G__19546;
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

var seq__18639_19547 = cljs.core.seq(params);
var chunk__18640_19548 = null;
var count__18641_19549 = (0);
var i__18642_19550 = (0);
while(true){
if((i__18642_19550 < count__18641_19549)){
var param_19551 = chunk__18640_19548.cljs$core$IIndexed$_nth$arity$2(null,i__18642_19550);
cljs.compiler.emit(param_19551);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_19551,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__19552 = seq__18639_19547;
var G__19553 = chunk__18640_19548;
var G__19554 = count__18641_19549;
var G__19555 = (i__18642_19550 + (1));
seq__18639_19547 = G__19552;
chunk__18640_19548 = G__19553;
count__18641_19549 = G__19554;
i__18642_19550 = G__19555;
continue;
} else {
var temp__5804__auto___19556 = cljs.core.seq(seq__18639_19547);
if(temp__5804__auto___19556){
var seq__18639_19557__$1 = temp__5804__auto___19556;
if(cljs.core.chunked_seq_QMARK_(seq__18639_19557__$1)){
var c__5525__auto___19558 = cljs.core.chunk_first(seq__18639_19557__$1);
var G__19559 = cljs.core.chunk_rest(seq__18639_19557__$1);
var G__19560 = c__5525__auto___19558;
var G__19561 = cljs.core.count(c__5525__auto___19558);
var G__19562 = (0);
seq__18639_19547 = G__19559;
chunk__18640_19548 = G__19560;
count__18641_19549 = G__19561;
i__18642_19550 = G__19562;
continue;
} else {
var param_19563 = cljs.core.first(seq__18639_19557__$1);
cljs.compiler.emit(param_19563);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_19563,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__19564 = cljs.core.next(seq__18639_19557__$1);
var G__19565 = null;
var G__19566 = (0);
var G__19567 = (0);
seq__18639_19547 = G__19564;
chunk__18640_19548 = G__19565;
count__18641_19549 = G__19566;
i__18642_19550 = G__19567;
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
var seq__18678 = cljs.core.seq(params);
var chunk__18679 = null;
var count__18680 = (0);
var i__18681 = (0);
while(true){
if((i__18681 < count__18680)){
var param = chunk__18679.cljs$core$IIndexed$_nth$arity$2(null,i__18681);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__19568 = seq__18678;
var G__19569 = chunk__18679;
var G__19570 = count__18680;
var G__19571 = (i__18681 + (1));
seq__18678 = G__19568;
chunk__18679 = G__19569;
count__18680 = G__19570;
i__18681 = G__19571;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18678);
if(temp__5804__auto__){
var seq__18678__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18678__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18678__$1);
var G__19572 = cljs.core.chunk_rest(seq__18678__$1);
var G__19573 = c__5525__auto__;
var G__19574 = cljs.core.count(c__5525__auto__);
var G__19575 = (0);
seq__18678 = G__19572;
chunk__18679 = G__19573;
count__18680 = G__19574;
i__18681 = G__19575;
continue;
} else {
var param = cljs.core.first(seq__18678__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__19576 = cljs.core.next(seq__18678__$1);
var G__19577 = null;
var G__19578 = (0);
var G__19579 = (0);
seq__18678 = G__19576;
chunk__18679 = G__19577;
count__18680 = G__19578;
i__18681 = G__19579;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__18686){
var map__18687 = p__18686;
var map__18687__$1 = cljs.core.__destructure_map(map__18687);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__18688){
var map__18689 = p__18688;
var map__18689__$1 = cljs.core.__destructure_map(map__18689);
var f = map__18689__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_19586__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_19587 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_19586__$1);
var delegate_name_19588 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_19587),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_19588," = function (");

var seq__18702_19589 = cljs.core.seq(params);
var chunk__18703_19590 = null;
var count__18704_19591 = (0);
var i__18705_19592 = (0);
while(true){
if((i__18705_19592 < count__18704_19591)){
var param_19593 = chunk__18703_19590.cljs$core$IIndexed$_nth$arity$2(null,i__18705_19592);
cljs.compiler.emit(param_19593);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_19593,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__19594 = seq__18702_19589;
var G__19595 = chunk__18703_19590;
var G__19596 = count__18704_19591;
var G__19597 = (i__18705_19592 + (1));
seq__18702_19589 = G__19594;
chunk__18703_19590 = G__19595;
count__18704_19591 = G__19596;
i__18705_19592 = G__19597;
continue;
} else {
var temp__5804__auto___19598 = cljs.core.seq(seq__18702_19589);
if(temp__5804__auto___19598){
var seq__18702_19599__$1 = temp__5804__auto___19598;
if(cljs.core.chunked_seq_QMARK_(seq__18702_19599__$1)){
var c__5525__auto___19600 = cljs.core.chunk_first(seq__18702_19599__$1);
var G__19601 = cljs.core.chunk_rest(seq__18702_19599__$1);
var G__19602 = c__5525__auto___19600;
var G__19603 = cljs.core.count(c__5525__auto___19600);
var G__19604 = (0);
seq__18702_19589 = G__19601;
chunk__18703_19590 = G__19602;
count__18704_19591 = G__19603;
i__18705_19592 = G__19604;
continue;
} else {
var param_19605 = cljs.core.first(seq__18702_19599__$1);
cljs.compiler.emit(param_19605);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_19605,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__19607 = cljs.core.next(seq__18702_19599__$1);
var G__19608 = null;
var G__19609 = (0);
var G__19610 = (0);
seq__18702_19589 = G__19607;
chunk__18703_19590 = G__19608;
count__18704_19591 = G__19609;
i__18705_19592 = G__19610;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_19587," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_19611 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_19611,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_19588,".call(this,");

var seq__18723_19612 = cljs.core.seq(params);
var chunk__18724_19613 = null;
var count__18725_19614 = (0);
var i__18726_19615 = (0);
while(true){
if((i__18726_19615 < count__18725_19614)){
var param_19616 = chunk__18724_19613.cljs$core$IIndexed$_nth$arity$2(null,i__18726_19615);
cljs.compiler.emit(param_19616);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_19616,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__19617 = seq__18723_19612;
var G__19618 = chunk__18724_19613;
var G__19619 = count__18725_19614;
var G__19620 = (i__18726_19615 + (1));
seq__18723_19612 = G__19617;
chunk__18724_19613 = G__19618;
count__18725_19614 = G__19619;
i__18726_19615 = G__19620;
continue;
} else {
var temp__5804__auto___19622 = cljs.core.seq(seq__18723_19612);
if(temp__5804__auto___19622){
var seq__18723_19623__$1 = temp__5804__auto___19622;
if(cljs.core.chunked_seq_QMARK_(seq__18723_19623__$1)){
var c__5525__auto___19624 = cljs.core.chunk_first(seq__18723_19623__$1);
var G__19625 = cljs.core.chunk_rest(seq__18723_19623__$1);
var G__19626 = c__5525__auto___19624;
var G__19627 = cljs.core.count(c__5525__auto___19624);
var G__19628 = (0);
seq__18723_19612 = G__19625;
chunk__18724_19613 = G__19626;
count__18725_19614 = G__19627;
i__18726_19615 = G__19628;
continue;
} else {
var param_19630 = cljs.core.first(seq__18723_19623__$1);
cljs.compiler.emit(param_19630);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_19630,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__19632 = cljs.core.next(seq__18723_19623__$1);
var G__19633 = null;
var G__19634 = (0);
var G__19635 = (0);
seq__18723_19612 = G__19632;
chunk__18724_19613 = G__19633;
count__18725_19614 = G__19634;
i__18726_19615 = G__19635;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19587,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_19587,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_19586__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19587,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_19588,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_19587,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__18732){
var map__18733 = p__18732;
var map__18733__$1 = cljs.core.__destructure_map(map__18733);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18733__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18733__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18733__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18733__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18733__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18733__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18729_SHARP_){
var and__5000__auto__ = p1__18729_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__18729_SHARP_));
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
var name_19642__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_19643 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_19642__$1);
var maxparams_19644 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_19645 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_19643),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_19646 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__18730_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__18730_SHARP_)));
}),cljs.core.seq(mmap_19645));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_19643," = null;");

var seq__18765_19648 = cljs.core.seq(ms_19646);
var chunk__18766_19649 = null;
var count__18767_19650 = (0);
var i__18768_19651 = (0);
while(true){
if((i__18768_19651 < count__18767_19650)){
var vec__18780_19652 = chunk__18766_19649.cljs$core$IIndexed$_nth$arity$2(null,i__18768_19651);
var n_19653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18780_19652,(0),null);
var meth_19654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18780_19652,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_19653," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19654))){
cljs.compiler.emit_variadic_fn_method(meth_19654);
} else {
cljs.compiler.emit_fn_method(meth_19654);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__19655 = seq__18765_19648;
var G__19656 = chunk__18766_19649;
var G__19657 = count__18767_19650;
var G__19658 = (i__18768_19651 + (1));
seq__18765_19648 = G__19655;
chunk__18766_19649 = G__19656;
count__18767_19650 = G__19657;
i__18768_19651 = G__19658;
continue;
} else {
var temp__5804__auto___19659 = cljs.core.seq(seq__18765_19648);
if(temp__5804__auto___19659){
var seq__18765_19660__$1 = temp__5804__auto___19659;
if(cljs.core.chunked_seq_QMARK_(seq__18765_19660__$1)){
var c__5525__auto___19661 = cljs.core.chunk_first(seq__18765_19660__$1);
var G__19662 = cljs.core.chunk_rest(seq__18765_19660__$1);
var G__19663 = c__5525__auto___19661;
var G__19664 = cljs.core.count(c__5525__auto___19661);
var G__19665 = (0);
seq__18765_19648 = G__19662;
chunk__18766_19649 = G__19663;
count__18767_19650 = G__19664;
i__18768_19651 = G__19665;
continue;
} else {
var vec__18785_19666 = cljs.core.first(seq__18765_19660__$1);
var n_19667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18785_19666,(0),null);
var meth_19668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18785_19666,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_19667," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19668))){
cljs.compiler.emit_variadic_fn_method(meth_19668);
} else {
cljs.compiler.emit_fn_method(meth_19668);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__19673 = cljs.core.next(seq__18765_19660__$1);
var G__19674 = null;
var G__19675 = (0);
var G__19676 = (0);
seq__18765_19648 = G__19673;
chunk__18766_19649 = G__19674;
count__18767_19650 = G__19675;
i__18768_19651 = G__19676;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19643," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_19644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_19644)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_19644));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__18788_19677 = cljs.core.seq(ms_19646);
var chunk__18789_19678 = null;
var count__18790_19679 = (0);
var i__18791_19680 = (0);
while(true){
if((i__18791_19680 < count__18790_19679)){
var vec__18830_19681 = chunk__18789_19678.cljs$core$IIndexed$_nth$arity$2(null,i__18791_19680);
var n_19682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18830_19681,(0),null);
var meth_19683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18830_19681,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19683))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_19684 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_19684," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_19685 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_19684," = new cljs.core.IndexedSeq(",a_19685,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_19682,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_19644)),(((cljs.core.count(maxparams_19644) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_19684,");"], 0));
} else {
var pcnt_19686 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19683));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_19686,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_19682,".call(this",(((pcnt_19686 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_19686,maxparams_19644)),null,(1),null)),(2),null))),");");
}


var G__19688 = seq__18788_19677;
var G__19689 = chunk__18789_19678;
var G__19690 = count__18790_19679;
var G__19691 = (i__18791_19680 + (1));
seq__18788_19677 = G__19688;
chunk__18789_19678 = G__19689;
count__18790_19679 = G__19690;
i__18791_19680 = G__19691;
continue;
} else {
var temp__5804__auto___19692 = cljs.core.seq(seq__18788_19677);
if(temp__5804__auto___19692){
var seq__18788_19693__$1 = temp__5804__auto___19692;
if(cljs.core.chunked_seq_QMARK_(seq__18788_19693__$1)){
var c__5525__auto___19694 = cljs.core.chunk_first(seq__18788_19693__$1);
var G__19696 = cljs.core.chunk_rest(seq__18788_19693__$1);
var G__19697 = c__5525__auto___19694;
var G__19698 = cljs.core.count(c__5525__auto___19694);
var G__19699 = (0);
seq__18788_19677 = G__19696;
chunk__18789_19678 = G__19697;
count__18790_19679 = G__19698;
i__18791_19680 = G__19699;
continue;
} else {
var vec__18844_19700 = cljs.core.first(seq__18788_19693__$1);
var n_19701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18844_19700,(0),null);
var meth_19702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18844_19700,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19702))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_19703 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_19703," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_19704 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_19703," = new cljs.core.IndexedSeq(",a_19704,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_19701,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_19644)),(((cljs.core.count(maxparams_19644) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_19703,");"], 0));
} else {
var pcnt_19706 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19702));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_19706,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_19701,".call(this",(((pcnt_19706 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_19706,maxparams_19644)),null,(1),null)),(2),null))),");");
}


var G__19707 = cljs.core.next(seq__18788_19693__$1);
var G__19708 = null;
var G__19709 = (0);
var G__19710 = (0);
seq__18788_19677 = G__19707;
chunk__18789_19678 = G__19708;
count__18790_19679 = G__19709;
i__18791_19680 = G__19710;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_19711 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_19646)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_19711,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19643,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19643,".cljs$lang$applyTo = ",cljs.core.some((function (p1__18731_SHARP_){
var vec__18850 = p1__18731_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18850,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18850,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_19646),".cljs$lang$applyTo;");
} else {
}

var seq__18853_19712 = cljs.core.seq(ms_19646);
var chunk__18854_19713 = null;
var count__18855_19714 = (0);
var i__18856_19715 = (0);
while(true){
if((i__18856_19715 < count__18855_19714)){
var vec__18865_19716 = chunk__18854_19713.cljs$core$IIndexed$_nth$arity$2(null,i__18856_19715);
var n_19717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18865_19716,(0),null);
var meth_19718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18865_19716,(1),null);
var c_19719 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19718));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19718))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19643,".cljs$core$IFn$_invoke$arity$variadic = ",n_19717,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_19643,".cljs$core$IFn$_invoke$arity$",c_19719," = ",n_19717,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__19721 = seq__18853_19712;
var G__19722 = chunk__18854_19713;
var G__19723 = count__18855_19714;
var G__19724 = (i__18856_19715 + (1));
seq__18853_19712 = G__19721;
chunk__18854_19713 = G__19722;
count__18855_19714 = G__19723;
i__18856_19715 = G__19724;
continue;
} else {
var temp__5804__auto___19725 = cljs.core.seq(seq__18853_19712);
if(temp__5804__auto___19725){
var seq__18853_19730__$1 = temp__5804__auto___19725;
if(cljs.core.chunked_seq_QMARK_(seq__18853_19730__$1)){
var c__5525__auto___19732 = cljs.core.chunk_first(seq__18853_19730__$1);
var G__19733 = cljs.core.chunk_rest(seq__18853_19730__$1);
var G__19734 = c__5525__auto___19732;
var G__19735 = cljs.core.count(c__5525__auto___19732);
var G__19736 = (0);
seq__18853_19712 = G__19733;
chunk__18854_19713 = G__19734;
count__18855_19714 = G__19735;
i__18856_19715 = G__19736;
continue;
} else {
var vec__18868_19737 = cljs.core.first(seq__18853_19730__$1);
var n_19738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18868_19737,(0),null);
var meth_19739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18868_19737,(1),null);
var c_19740 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19739));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19739))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19643,".cljs$core$IFn$_invoke$arity$variadic = ",n_19738,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_19643,".cljs$core$IFn$_invoke$arity$",c_19740," = ",n_19738,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__19741 = cljs.core.next(seq__18853_19730__$1);
var G__19742 = null;
var G__19743 = (0);
var G__19744 = (0);
seq__18853_19712 = G__19741;
chunk__18854_19713 = G__19742;
count__18855_19714 = G__19743;
i__18856_19715 = G__19744;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_19643,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__18872){
var map__18874 = p__18872;
var map__18874__$1 = cljs.core.__destructure_map(map__18874);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18874__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18874__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18874__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__18877_19745 = cljs.core.seq(statements);
var chunk__18878_19746 = null;
var count__18879_19747 = (0);
var i__18880_19748 = (0);
while(true){
if((i__18880_19748 < count__18879_19747)){
var s_19749 = chunk__18878_19746.cljs$core$IIndexed$_nth$arity$2(null,i__18880_19748);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_19749);


var G__19752 = seq__18877_19745;
var G__19753 = chunk__18878_19746;
var G__19754 = count__18879_19747;
var G__19755 = (i__18880_19748 + (1));
seq__18877_19745 = G__19752;
chunk__18878_19746 = G__19753;
count__18879_19747 = G__19754;
i__18880_19748 = G__19755;
continue;
} else {
var temp__5804__auto___19756 = cljs.core.seq(seq__18877_19745);
if(temp__5804__auto___19756){
var seq__18877_19757__$1 = temp__5804__auto___19756;
if(cljs.core.chunked_seq_QMARK_(seq__18877_19757__$1)){
var c__5525__auto___19758 = cljs.core.chunk_first(seq__18877_19757__$1);
var G__19759 = cljs.core.chunk_rest(seq__18877_19757__$1);
var G__19760 = c__5525__auto___19758;
var G__19761 = cljs.core.count(c__5525__auto___19758);
var G__19762 = (0);
seq__18877_19745 = G__19759;
chunk__18878_19746 = G__19760;
count__18879_19747 = G__19761;
i__18880_19748 = G__19762;
continue;
} else {
var s_19763 = cljs.core.first(seq__18877_19757__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_19763);


var G__19764 = cljs.core.next(seq__18877_19757__$1);
var G__19765 = null;
var G__19766 = (0);
var G__19767 = (0);
seq__18877_19745 = G__19764;
chunk__18878_19746 = G__19765;
count__18879_19747 = G__19766;
i__18880_19748 = G__19767;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__18887){
var map__18888 = p__18887;
var map__18888__$1 = cljs.core.__destructure_map(map__18888);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18888__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18888__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18888__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18888__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__18894,is_loop){
var map__18895 = p__18894;
var map__18895__$1 = cljs.core.__destructure_map(map__18895);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18895__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18895__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18895__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__18898_19776 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__18899_19777 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__18899_19777);

try{var seq__18904_19781 = cljs.core.seq(bindings);
var chunk__18905_19782 = null;
var count__18906_19783 = (0);
var i__18907_19784 = (0);
while(true){
if((i__18907_19784 < count__18906_19783)){
var map__18916_19785 = chunk__18905_19782.cljs$core$IIndexed$_nth$arity$2(null,i__18907_19784);
var map__18916_19786__$1 = cljs.core.__destructure_map(map__18916_19785);
var binding_19787 = map__18916_19786__$1;
var init_19788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18916_19786__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_19787);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_19788,";");


var G__19789 = seq__18904_19781;
var G__19790 = chunk__18905_19782;
var G__19791 = count__18906_19783;
var G__19792 = (i__18907_19784 + (1));
seq__18904_19781 = G__19789;
chunk__18905_19782 = G__19790;
count__18906_19783 = G__19791;
i__18907_19784 = G__19792;
continue;
} else {
var temp__5804__auto___19793 = cljs.core.seq(seq__18904_19781);
if(temp__5804__auto___19793){
var seq__18904_19794__$1 = temp__5804__auto___19793;
if(cljs.core.chunked_seq_QMARK_(seq__18904_19794__$1)){
var c__5525__auto___19795 = cljs.core.chunk_first(seq__18904_19794__$1);
var G__19796 = cljs.core.chunk_rest(seq__18904_19794__$1);
var G__19797 = c__5525__auto___19795;
var G__19798 = cljs.core.count(c__5525__auto___19795);
var G__19799 = (0);
seq__18904_19781 = G__19796;
chunk__18905_19782 = G__19797;
count__18906_19783 = G__19798;
i__18907_19784 = G__19799;
continue;
} else {
var map__18921_19800 = cljs.core.first(seq__18904_19794__$1);
var map__18921_19801__$1 = cljs.core.__destructure_map(map__18921_19800);
var binding_19802 = map__18921_19801__$1;
var init_19803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18921_19801__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_19802);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_19803,";");


var G__19804 = cljs.core.next(seq__18904_19794__$1);
var G__19805 = null;
var G__19806 = (0);
var G__19807 = (0);
seq__18904_19781 = G__19804;
chunk__18905_19782 = G__19805;
count__18906_19783 = G__19806;
i__18907_19784 = G__19807;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__18898_19776);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__18924){
var map__18926 = p__18924;
var map__18926__$1 = cljs.core.__destructure_map(map__18926);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18926__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18926__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18926__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5593__auto___19813 = cljs.core.count(exprs);
var i_19814 = (0);
while(true){
if((i_19814 < n__5593__auto___19813)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_19814) : temps.call(null,i_19814))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_19814) : exprs.call(null,i_19814)),";");

var G__19816 = (i_19814 + (1));
i_19814 = G__19816;
continue;
} else {
}
break;
}

var n__5593__auto___19817 = cljs.core.count(exprs);
var i_19818 = (0);
while(true){
if((i_19818 < n__5593__auto___19817)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_19818) : params.call(null,i_19818)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_19818) : temps.call(null,i_19818)),";");

var G__19822 = (i_19818 + (1));
i_19818 = G__19822;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__18930){
var map__18931 = p__18930;
var map__18931__$1 = cljs.core.__destructure_map(map__18931);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18931__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18931__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18931__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__18935_19823 = cljs.core.seq(bindings);
var chunk__18936_19824 = null;
var count__18937_19825 = (0);
var i__18938_19826 = (0);
while(true){
if((i__18938_19826 < count__18937_19825)){
var map__18946_19827 = chunk__18936_19824.cljs$core$IIndexed$_nth$arity$2(null,i__18938_19826);
var map__18946_19828__$1 = cljs.core.__destructure_map(map__18946_19827);
var binding_19829 = map__18946_19828__$1;
var init_19830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18946_19828__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_19829)," = ",init_19830,";");


var G__19831 = seq__18935_19823;
var G__19832 = chunk__18936_19824;
var G__19833 = count__18937_19825;
var G__19834 = (i__18938_19826 + (1));
seq__18935_19823 = G__19831;
chunk__18936_19824 = G__19832;
count__18937_19825 = G__19833;
i__18938_19826 = G__19834;
continue;
} else {
var temp__5804__auto___19835 = cljs.core.seq(seq__18935_19823);
if(temp__5804__auto___19835){
var seq__18935_19836__$1 = temp__5804__auto___19835;
if(cljs.core.chunked_seq_QMARK_(seq__18935_19836__$1)){
var c__5525__auto___19837 = cljs.core.chunk_first(seq__18935_19836__$1);
var G__19838 = cljs.core.chunk_rest(seq__18935_19836__$1);
var G__19839 = c__5525__auto___19837;
var G__19840 = cljs.core.count(c__5525__auto___19837);
var G__19841 = (0);
seq__18935_19823 = G__19838;
chunk__18936_19824 = G__19839;
count__18937_19825 = G__19840;
i__18938_19826 = G__19841;
continue;
} else {
var map__18951_19842 = cljs.core.first(seq__18935_19836__$1);
var map__18951_19843__$1 = cljs.core.__destructure_map(map__18951_19842);
var binding_19844 = map__18951_19843__$1;
var init_19845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18951_19843__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_19844)," = ",init_19845,";");


var G__19847 = cljs.core.next(seq__18935_19836__$1);
var G__19848 = null;
var G__19849 = (0);
var G__19850 = (0);
seq__18935_19823 = G__19847;
chunk__18936_19824 = G__19848;
count__18937_19825 = G__19849;
i__18938_19826 = G__19850;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__18956){
var map__18957 = p__18956;
var map__18957__$1 = cljs.core.__destructure_map(map__18957);
var expr = map__18957__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18957__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18957__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18957__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var and__5000__auto____$4 = cljs.core.not((function (){var fexpr__18966 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__18966.cljs$core$IFn$_invoke$arity$1 ? fexpr__18966.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__18966.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__18968 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__18968.cljs$core$IFn$_invoke$arity$1 ? fexpr__18968.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__18968.call(null,first_arg_tag));
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
var vec__18961 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__18952_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18952_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__18954_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18954_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961,(1),null);
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
var pimpl_19882 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_19882,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_19883 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_19883,args)),(((mfa_19883 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_19883,args)),"], 0))"], 0));
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
var G__18980 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__18979 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__18979.cljs$core$IFn$_invoke$arity$1 ? fexpr__18979.cljs$core$IFn$_invoke$arity$1(G__18980) : fexpr__18979.call(null,G__18980));
} else {
return and__5000__auto__;
}
})())){
var fprop_19887 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_19887," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_19887,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_19887," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_19887,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__18981){
var map__18982 = p__18981;
var map__18982__$1 = cljs.core.__destructure_map(map__18982);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18982__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18982__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18982__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__18984){
var map__18986 = p__18984;
var map__18986__$1 = cljs.core.__destructure_map(map__18986);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18986__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18986__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18986__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18987_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18987_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__18988 = cljs.analyzer.lib_AMPERSAND_sublib(lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18988,(0),null);
var sublib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18988,(1),null);
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
var map__18991 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__18991__$1 = cljs.core.__destructure_map(map__18991);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18991__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18991__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__18992 = options;
var map__18992__$1 = cljs.core.__destructure_map(map__18992);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__18993 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__18999 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__18999__$1 = cljs.core.__destructure_map(map__18999);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18999__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18999__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18993,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18993,(1),null);
var vec__18996 = (function (){var map__19000 = cljs.core.group_by(cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__19000__$1 = cljs.core.__destructure_map(map__19000);
var goog_modules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19000__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19000__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18996,(0),null);
var libs_to_load__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18996,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__19009_19902 = cljs.core.seq(libs_to_load__$1);
var chunk__19010_19903 = null;
var count__19011_19904 = (0);
var i__19012_19905 = (0);
while(true){
if((i__19012_19905 < count__19011_19904)){
var lib_19907 = chunk__19010_19903.cljs$core$IIndexed$_nth$arity$2(null,i__19012_19905);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_19907)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19907),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19907),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19907),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19907),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_19907,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19907),"');");
}

}
}
}


var G__19911 = seq__19009_19902;
var G__19912 = chunk__19010_19903;
var G__19913 = count__19011_19904;
var G__19914 = (i__19012_19905 + (1));
seq__19009_19902 = G__19911;
chunk__19010_19903 = G__19912;
count__19011_19904 = G__19913;
i__19012_19905 = G__19914;
continue;
} else {
var temp__5804__auto___19915 = cljs.core.seq(seq__19009_19902);
if(temp__5804__auto___19915){
var seq__19009_19916__$1 = temp__5804__auto___19915;
if(cljs.core.chunked_seq_QMARK_(seq__19009_19916__$1)){
var c__5525__auto___19917 = cljs.core.chunk_first(seq__19009_19916__$1);
var G__19918 = cljs.core.chunk_rest(seq__19009_19916__$1);
var G__19919 = c__5525__auto___19917;
var G__19920 = cljs.core.count(c__5525__auto___19917);
var G__19921 = (0);
seq__19009_19902 = G__19918;
chunk__19010_19903 = G__19919;
count__19011_19904 = G__19920;
i__19012_19905 = G__19921;
continue;
} else {
var lib_19922 = cljs.core.first(seq__19009_19916__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_19922)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19922),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19922),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19922),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19922),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_19922,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19922),"');");
}

}
}
}


var G__19925 = cljs.core.next(seq__19009_19916__$1);
var G__19926 = null;
var G__19927 = (0);
var G__19928 = (0);
seq__19009_19902 = G__19925;
chunk__19010_19903 = G__19926;
count__19011_19904 = G__19927;
i__19012_19905 = G__19928;
continue;
}
} else {
}
}
break;
}

var seq__19016_19929 = cljs.core.seq(node_libs);
var chunk__19017_19930 = null;
var count__19018_19931 = (0);
var i__19019_19932 = (0);
while(true){
if((i__19019_19932 < count__19018_19931)){
var lib_19936 = chunk__19017_19930.cljs$core$IIndexed$_nth$arity$2(null,i__19019_19932);
var vec__19026_19937 = cljs.analyzer.lib_AMPERSAND_sublib(lib_19936);
var lib_SINGLEQUOTE__19938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19026_19937,(0),null);
var sublib_19939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19026_19937,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_19936)," = require('",lib_SINGLEQUOTE__19938,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_19939),";"], 0));


var G__19940 = seq__19016_19929;
var G__19941 = chunk__19017_19930;
var G__19942 = count__19018_19931;
var G__19943 = (i__19019_19932 + (1));
seq__19016_19929 = G__19940;
chunk__19017_19930 = G__19941;
count__19018_19931 = G__19942;
i__19019_19932 = G__19943;
continue;
} else {
var temp__5804__auto___19944 = cljs.core.seq(seq__19016_19929);
if(temp__5804__auto___19944){
var seq__19016_19945__$1 = temp__5804__auto___19944;
if(cljs.core.chunked_seq_QMARK_(seq__19016_19945__$1)){
var c__5525__auto___19946 = cljs.core.chunk_first(seq__19016_19945__$1);
var G__19947 = cljs.core.chunk_rest(seq__19016_19945__$1);
var G__19948 = c__5525__auto___19946;
var G__19949 = cljs.core.count(c__5525__auto___19946);
var G__19950 = (0);
seq__19016_19929 = G__19947;
chunk__19017_19930 = G__19948;
count__19018_19931 = G__19949;
i__19019_19932 = G__19950;
continue;
} else {
var lib_19951 = cljs.core.first(seq__19016_19945__$1);
var vec__19029_19952 = cljs.analyzer.lib_AMPERSAND_sublib(lib_19951);
var lib_SINGLEQUOTE__19953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19029_19952,(0),null);
var sublib_19954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19029_19952,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_19951)," = require('",lib_SINGLEQUOTE__19953,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_19954),";"], 0));


var G__19955 = cljs.core.next(seq__19016_19945__$1);
var G__19956 = null;
var G__19957 = (0);
var G__19958 = (0);
seq__19016_19929 = G__19955;
chunk__19017_19930 = G__19956;
count__19018_19931 = G__19957;
i__19019_19932 = G__19958;
continue;
}
} else {
}
}
break;
}

var seq__19032_19959 = cljs.core.seq(goog_modules);
var chunk__19033_19960 = null;
var count__19034_19961 = (0);
var i__19035_19962 = (0);
while(true){
if((i__19035_19962 < count__19034_19961)){
var lib_19963 = chunk__19033_19960.cljs$core$IIndexed$_nth$arity$2(null,i__19035_19962);
var vec__19043_19964 = cljs.analyzer.lib_AMPERSAND_sublib(lib_19963);
var lib_SINGLEQUOTE__19965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19043_19964,(0),null);
var sublib_19966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19043_19964,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__19965,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_19963)," = goog.module.get('",lib_SINGLEQUOTE__19965,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_19966),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__19969 = seq__19032_19959;
var G__19970 = chunk__19033_19960;
var G__19971 = count__19034_19961;
var G__19972 = (i__19035_19962 + (1));
seq__19032_19959 = G__19969;
chunk__19033_19960 = G__19970;
count__19034_19961 = G__19971;
i__19035_19962 = G__19972;
continue;
} else {
var temp__5804__auto___19973 = cljs.core.seq(seq__19032_19959);
if(temp__5804__auto___19973){
var seq__19032_19974__$1 = temp__5804__auto___19973;
if(cljs.core.chunked_seq_QMARK_(seq__19032_19974__$1)){
var c__5525__auto___19975 = cljs.core.chunk_first(seq__19032_19974__$1);
var G__19976 = cljs.core.chunk_rest(seq__19032_19974__$1);
var G__19977 = c__5525__auto___19975;
var G__19978 = cljs.core.count(c__5525__auto___19975);
var G__19979 = (0);
seq__19032_19959 = G__19976;
chunk__19033_19960 = G__19977;
count__19034_19961 = G__19978;
i__19035_19962 = G__19979;
continue;
} else {
var lib_19980 = cljs.core.first(seq__19032_19974__$1);
var vec__19046_19981 = cljs.analyzer.lib_AMPERSAND_sublib(lib_19980);
var lib_SINGLEQUOTE__19982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046_19981,(0),null);
var sublib_19983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19046_19981,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__19982,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_19980)," = goog.module.get('",lib_SINGLEQUOTE__19982,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_19983),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__19985 = cljs.core.next(seq__19032_19974__$1);
var G__19986 = null;
var G__19987 = (0);
var G__19988 = (0);
seq__19032_19959 = G__19985;
chunk__19033_19960 = G__19986;
count__19034_19961 = G__19987;
i__19035_19962 = G__19988;
continue;
}
} else {
}
}
break;
}

var seq__19049_19989 = cljs.core.seq(global_exports_libs);
var chunk__19050_19990 = null;
var count__19051_19991 = (0);
var i__19052_19992 = (0);
while(true){
if((i__19052_19992 < count__19051_19991)){
var lib_19998 = chunk__19050_19990.cljs$core$IIndexed$_nth$arity$2(null,i__19052_19992);
var map__19055_19999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_19998))));
var map__19055_20000__$1 = cljs.core.__destructure_map(map__19055_19999);
var global_exports_20001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19055_20000__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_20001,lib_19998);


var G__20002 = seq__19049_19989;
var G__20003 = chunk__19050_19990;
var G__20004 = count__19051_19991;
var G__20005 = (i__19052_19992 + (1));
seq__19049_19989 = G__20002;
chunk__19050_19990 = G__20003;
count__19051_19991 = G__20004;
i__19052_19992 = G__20005;
continue;
} else {
var temp__5804__auto___20006 = cljs.core.seq(seq__19049_19989);
if(temp__5804__auto___20006){
var seq__19049_20007__$1 = temp__5804__auto___20006;
if(cljs.core.chunked_seq_QMARK_(seq__19049_20007__$1)){
var c__5525__auto___20008 = cljs.core.chunk_first(seq__19049_20007__$1);
var G__20009 = cljs.core.chunk_rest(seq__19049_20007__$1);
var G__20010 = c__5525__auto___20008;
var G__20011 = cljs.core.count(c__5525__auto___20008);
var G__20012 = (0);
seq__19049_19989 = G__20009;
chunk__19050_19990 = G__20010;
count__19051_19991 = G__20011;
i__19052_19992 = G__20012;
continue;
} else {
var lib_20013 = cljs.core.first(seq__19049_20007__$1);
var map__19056_20014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_20013))));
var map__19056_20015__$1 = cljs.core.__destructure_map(map__19056_20014);
var global_exports_20016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19056_20015__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_20016,lib_20013);


var G__20017 = cljs.core.next(seq__19049_20007__$1);
var G__20018 = null;
var G__20019 = (0);
var G__20020 = (0);
seq__19049_19989 = G__20017;
chunk__19050_19990 = G__20018;
count__19051_19991 = G__20019;
i__19052_19992 = G__20020;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__19058){
var map__19059 = p__19058;
var map__19059__$1 = cljs.core.__destructure_map(map__19059);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19059__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19059__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19059__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19059__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19059__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19059__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19059__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__19060){
var map__19061 = p__19060;
var map__19061__$1 = cljs.core.__destructure_map(map__19061);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__19062){
var map__19063 = p__19062;
var map__19063__$1 = cljs.core.__destructure_map(map__19063);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19063__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19063__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19063__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19063__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19063__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__19064_20030 = cljs.core.seq(protocols);
var chunk__19065_20031 = null;
var count__19066_20032 = (0);
var i__19067_20033 = (0);
while(true){
if((i__19067_20033 < count__19066_20032)){
var protocol_20034 = chunk__19065_20031.cljs$core$IIndexed$_nth$arity$2(null,i__19067_20033);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20034)),"}");


var G__20035 = seq__19064_20030;
var G__20036 = chunk__19065_20031;
var G__20037 = count__19066_20032;
var G__20038 = (i__19067_20033 + (1));
seq__19064_20030 = G__20035;
chunk__19065_20031 = G__20036;
count__19066_20032 = G__20037;
i__19067_20033 = G__20038;
continue;
} else {
var temp__5804__auto___20039 = cljs.core.seq(seq__19064_20030);
if(temp__5804__auto___20039){
var seq__19064_20040__$1 = temp__5804__auto___20039;
if(cljs.core.chunked_seq_QMARK_(seq__19064_20040__$1)){
var c__5525__auto___20041 = cljs.core.chunk_first(seq__19064_20040__$1);
var G__20043 = cljs.core.chunk_rest(seq__19064_20040__$1);
var G__20044 = c__5525__auto___20041;
var G__20045 = cljs.core.count(c__5525__auto___20041);
var G__20046 = (0);
seq__19064_20030 = G__20043;
chunk__19065_20031 = G__20044;
count__19066_20032 = G__20045;
i__19067_20033 = G__20046;
continue;
} else {
var protocol_20047 = cljs.core.first(seq__19064_20040__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20047)),"}");


var G__20048 = cljs.core.next(seq__19064_20040__$1);
var G__20049 = null;
var G__20050 = (0);
var G__20051 = (0);
seq__19064_20030 = G__20048;
chunk__19065_20031 = G__20049;
count__19066_20032 = G__20050;
i__19067_20033 = G__20051;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__19068_20053 = cljs.core.seq(fields__$1);
var chunk__19069_20054 = null;
var count__19070_20055 = (0);
var i__19071_20056 = (0);
while(true){
if((i__19071_20056 < count__19070_20055)){
var fld_20057 = chunk__19069_20054.cljs$core$IIndexed$_nth$arity$2(null,i__19071_20056);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_20057," = ",fld_20057,";");


var G__20058 = seq__19068_20053;
var G__20059 = chunk__19069_20054;
var G__20060 = count__19070_20055;
var G__20061 = (i__19071_20056 + (1));
seq__19068_20053 = G__20058;
chunk__19069_20054 = G__20059;
count__19070_20055 = G__20060;
i__19071_20056 = G__20061;
continue;
} else {
var temp__5804__auto___20066 = cljs.core.seq(seq__19068_20053);
if(temp__5804__auto___20066){
var seq__19068_20067__$1 = temp__5804__auto___20066;
if(cljs.core.chunked_seq_QMARK_(seq__19068_20067__$1)){
var c__5525__auto___20068 = cljs.core.chunk_first(seq__19068_20067__$1);
var G__20069 = cljs.core.chunk_rest(seq__19068_20067__$1);
var G__20070 = c__5525__auto___20068;
var G__20071 = cljs.core.count(c__5525__auto___20068);
var G__20072 = (0);
seq__19068_20053 = G__20069;
chunk__19069_20054 = G__20070;
count__19070_20055 = G__20071;
i__19071_20056 = G__20072;
continue;
} else {
var fld_20078 = cljs.core.first(seq__19068_20067__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_20078," = ",fld_20078,";");


var G__20079 = cljs.core.next(seq__19068_20067__$1);
var G__20080 = null;
var G__20081 = (0);
var G__20082 = (0);
seq__19068_20053 = G__20079;
chunk__19069_20054 = G__20080;
count__19070_20055 = G__20081;
i__19071_20056 = G__20082;
continue;
}
} else {
}
}
break;
}

var seq__19072_20083 = cljs.core.seq(pmasks);
var chunk__19073_20084 = null;
var count__19074_20085 = (0);
var i__19075_20086 = (0);
while(true){
if((i__19075_20086 < count__19074_20085)){
var vec__19082_20088 = chunk__19073_20084.cljs$core$IIndexed$_nth$arity$2(null,i__19075_20086);
var pno_20089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19082_20088,(0),null);
var pmask_20090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19082_20088,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_20089,"$ = ",pmask_20090,";");


var G__20092 = seq__19072_20083;
var G__20093 = chunk__19073_20084;
var G__20094 = count__19074_20085;
var G__20095 = (i__19075_20086 + (1));
seq__19072_20083 = G__20092;
chunk__19073_20084 = G__20093;
count__19074_20085 = G__20094;
i__19075_20086 = G__20095;
continue;
} else {
var temp__5804__auto___20096 = cljs.core.seq(seq__19072_20083);
if(temp__5804__auto___20096){
var seq__19072_20097__$1 = temp__5804__auto___20096;
if(cljs.core.chunked_seq_QMARK_(seq__19072_20097__$1)){
var c__5525__auto___20102 = cljs.core.chunk_first(seq__19072_20097__$1);
var G__20103 = cljs.core.chunk_rest(seq__19072_20097__$1);
var G__20104 = c__5525__auto___20102;
var G__20105 = cljs.core.count(c__5525__auto___20102);
var G__20106 = (0);
seq__19072_20083 = G__20103;
chunk__19073_20084 = G__20104;
count__19074_20085 = G__20105;
i__19075_20086 = G__20106;
continue;
} else {
var vec__19085_20107 = cljs.core.first(seq__19072_20097__$1);
var pno_20108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19085_20107,(0),null);
var pmask_20109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19085_20107,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_20108,"$ = ",pmask_20109,";");


var G__20110 = cljs.core.next(seq__19072_20097__$1);
var G__20111 = null;
var G__20112 = (0);
var G__20113 = (0);
seq__19072_20083 = G__20110;
chunk__19073_20084 = G__20111;
count__19074_20085 = G__20112;
i__19075_20086 = G__20113;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__19095){
var map__19097 = p__19095;
var map__19097__$1 = cljs.core.__destructure_map(map__19097);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__19098_20117 = cljs.core.seq(protocols);
var chunk__19099_20118 = null;
var count__19100_20119 = (0);
var i__19101_20120 = (0);
while(true){
if((i__19101_20120 < count__19100_20119)){
var protocol_20121 = chunk__19099_20118.cljs$core$IIndexed$_nth$arity$2(null,i__19101_20120);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20121)),"}");


var G__20122 = seq__19098_20117;
var G__20123 = chunk__19099_20118;
var G__20124 = count__19100_20119;
var G__20125 = (i__19101_20120 + (1));
seq__19098_20117 = G__20122;
chunk__19099_20118 = G__20123;
count__19100_20119 = G__20124;
i__19101_20120 = G__20125;
continue;
} else {
var temp__5804__auto___20126 = cljs.core.seq(seq__19098_20117);
if(temp__5804__auto___20126){
var seq__19098_20127__$1 = temp__5804__auto___20126;
if(cljs.core.chunked_seq_QMARK_(seq__19098_20127__$1)){
var c__5525__auto___20128 = cljs.core.chunk_first(seq__19098_20127__$1);
var G__20129 = cljs.core.chunk_rest(seq__19098_20127__$1);
var G__20130 = c__5525__auto___20128;
var G__20131 = cljs.core.count(c__5525__auto___20128);
var G__20132 = (0);
seq__19098_20117 = G__20129;
chunk__19099_20118 = G__20130;
count__19100_20119 = G__20131;
i__19101_20120 = G__20132;
continue;
} else {
var protocol_20133 = cljs.core.first(seq__19098_20127__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_20133)),"}");


var G__20135 = cljs.core.next(seq__19098_20127__$1);
var G__20136 = null;
var G__20137 = (0);
var G__20138 = (0);
seq__19098_20117 = G__20135;
chunk__19099_20118 = G__20136;
count__19100_20119 = G__20137;
i__19101_20120 = G__20138;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__19103_20139 = cljs.core.seq(fields__$1);
var chunk__19104_20140 = null;
var count__19105_20141 = (0);
var i__19106_20142 = (0);
while(true){
if((i__19106_20142 < count__19105_20141)){
var fld_20143 = chunk__19104_20140.cljs$core$IIndexed$_nth$arity$2(null,i__19106_20142);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_20143," = ",fld_20143,";");


var G__20145 = seq__19103_20139;
var G__20146 = chunk__19104_20140;
var G__20147 = count__19105_20141;
var G__20148 = (i__19106_20142 + (1));
seq__19103_20139 = G__20145;
chunk__19104_20140 = G__20146;
count__19105_20141 = G__20147;
i__19106_20142 = G__20148;
continue;
} else {
var temp__5804__auto___20149 = cljs.core.seq(seq__19103_20139);
if(temp__5804__auto___20149){
var seq__19103_20150__$1 = temp__5804__auto___20149;
if(cljs.core.chunked_seq_QMARK_(seq__19103_20150__$1)){
var c__5525__auto___20151 = cljs.core.chunk_first(seq__19103_20150__$1);
var G__20152 = cljs.core.chunk_rest(seq__19103_20150__$1);
var G__20153 = c__5525__auto___20151;
var G__20154 = cljs.core.count(c__5525__auto___20151);
var G__20155 = (0);
seq__19103_20139 = G__20152;
chunk__19104_20140 = G__20153;
count__19105_20141 = G__20154;
i__19106_20142 = G__20155;
continue;
} else {
var fld_20156 = cljs.core.first(seq__19103_20150__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_20156," = ",fld_20156,";");


var G__20157 = cljs.core.next(seq__19103_20150__$1);
var G__20158 = null;
var G__20159 = (0);
var G__20160 = (0);
seq__19103_20139 = G__20157;
chunk__19104_20140 = G__20158;
count__19105_20141 = G__20159;
i__19106_20142 = G__20160;
continue;
}
} else {
}
}
break;
}

var seq__19107_20161 = cljs.core.seq(pmasks);
var chunk__19108_20162 = null;
var count__19109_20163 = (0);
var i__19110_20164 = (0);
while(true){
if((i__19110_20164 < count__19109_20163)){
var vec__19119_20165 = chunk__19108_20162.cljs$core$IIndexed$_nth$arity$2(null,i__19110_20164);
var pno_20166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19119_20165,(0),null);
var pmask_20167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19119_20165,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_20166,"$ = ",pmask_20167,";");


var G__20169 = seq__19107_20161;
var G__20170 = chunk__19108_20162;
var G__20171 = count__19109_20163;
var G__20172 = (i__19110_20164 + (1));
seq__19107_20161 = G__20169;
chunk__19108_20162 = G__20170;
count__19109_20163 = G__20171;
i__19110_20164 = G__20172;
continue;
} else {
var temp__5804__auto___20173 = cljs.core.seq(seq__19107_20161);
if(temp__5804__auto___20173){
var seq__19107_20179__$1 = temp__5804__auto___20173;
if(cljs.core.chunked_seq_QMARK_(seq__19107_20179__$1)){
var c__5525__auto___20181 = cljs.core.chunk_first(seq__19107_20179__$1);
var G__20182 = cljs.core.chunk_rest(seq__19107_20179__$1);
var G__20183 = c__5525__auto___20181;
var G__20184 = cljs.core.count(c__5525__auto___20181);
var G__20185 = (0);
seq__19107_20161 = G__20182;
chunk__19108_20162 = G__20183;
count__19109_20163 = G__20184;
i__19110_20164 = G__20185;
continue;
} else {
var vec__19122_20186 = cljs.core.first(seq__19107_20179__$1);
var pno_20187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19122_20186,(0),null);
var pmask_20188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19122_20186,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_20187,"$ = ",pmask_20188,";");


var G__20189 = cljs.core.next(seq__19107_20179__$1);
var G__20190 = null;
var G__20191 = (0);
var G__20192 = (0);
seq__19107_20161 = G__20189;
chunk__19108_20162 = G__20190;
count__19109_20163 = G__20191;
i__19110_20164 = G__20192;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__19128){
var map__19129 = p__19128;
var map__19129__$1 = cljs.core.__destructure_map(map__19129);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__19136){
var map__19137 = p__19136;
var map__19137__$1 = cljs.core.__destructure_map(map__19137);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__19142 = cljs.core.seq(table);
var chunk__19143 = null;
var count__19144 = (0);
var i__19145 = (0);
while(true){
if((i__19145 < count__19144)){
var vec__19152 = chunk__19143.cljs$core$IIndexed$_nth$arity$2(null,i__19145);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19152,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19152,(1),null);
var ns_20206 = cljs.core.namespace(sym);
var name_20207 = cljs.core.name(sym);
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


var G__20209 = seq__19142;
var G__20210 = chunk__19143;
var G__20211 = count__19144;
var G__20212 = (i__19145 + (1));
seq__19142 = G__20209;
chunk__19143 = G__20210;
count__19144 = G__20211;
i__19145 = G__20212;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19142);
if(temp__5804__auto__){
var seq__19142__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19142__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19142__$1);
var G__20213 = cljs.core.chunk_rest(seq__19142__$1);
var G__20214 = c__5525__auto__;
var G__20215 = cljs.core.count(c__5525__auto__);
var G__20216 = (0);
seq__19142 = G__20213;
chunk__19143 = G__20214;
count__19144 = G__20215;
i__19145 = G__20216;
continue;
} else {
var vec__19155 = cljs.core.first(seq__19142__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19155,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19155,(1),null);
var ns_20218 = cljs.core.namespace(sym);
var name_20219 = cljs.core.name(sym);
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


var G__20224 = cljs.core.next(seq__19142__$1);
var G__20225 = null;
var G__20226 = (0);
var G__20227 = (0);
seq__19142 = G__20224;
chunk__19143 = G__20225;
count__19144 = G__20226;
i__19145 = G__20227;
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
var G__19159 = arguments.length;
switch (G__19159) {
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
var k_20229 = cljs.core.first(ks);
var vec__19160_20230 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_20229);
var top_20231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19160_20230,(0),null);
var prefix_SINGLEQUOTE__20232 = vec__19160_20230;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_20229)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__20232) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_20231)) || (cljs.core.contains_QMARK_(known_externs,top_20231)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__20232)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_20231);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__20232)),";");
}
} else {
}

var m_20234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_20229);
if(cljs.core.empty_QMARK_(m_20234)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__20232,m_20234,top_level,known_externs);
}

var G__20235 = cljs.core.next(ks);
ks = G__20235;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
