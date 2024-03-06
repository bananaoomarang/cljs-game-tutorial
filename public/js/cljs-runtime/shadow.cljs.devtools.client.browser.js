goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20881 = arguments.length;
var i__5727__auto___20882 = (0);
while(true){
if((i__5727__auto___20882 < len__5726__auto___20881)){
args__5732__auto__.push((arguments[i__5727__auto___20882]));

var G__20883 = (i__5727__auto___20882 + (1));
i__5727__auto___20882 = G__20883;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20596){
var G__20597 = cljs.core.first(seq20596);
var seq20596__$1 = cljs.core.next(seq20596);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20597,seq20596__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20603 = cljs.core.seq(sources);
var chunk__20604 = null;
var count__20605 = (0);
var i__20606 = (0);
while(true){
if((i__20606 < count__20605)){
var map__20612 = chunk__20604.cljs$core$IIndexed$_nth$arity$2(null,i__20606);
var map__20612__$1 = cljs.core.__destructure_map(map__20612);
var src = map__20612__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20612__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20612__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20612__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20612__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20614){var e_20884 = e20614;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20884);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20884.message)].join('')));
}

var G__20885 = seq__20603;
var G__20886 = chunk__20604;
var G__20887 = count__20605;
var G__20888 = (i__20606 + (1));
seq__20603 = G__20885;
chunk__20604 = G__20886;
count__20605 = G__20887;
i__20606 = G__20888;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20603);
if(temp__5804__auto__){
var seq__20603__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20603__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20603__$1);
var G__20889 = cljs.core.chunk_rest(seq__20603__$1);
var G__20890 = c__5525__auto__;
var G__20891 = cljs.core.count(c__5525__auto__);
var G__20892 = (0);
seq__20603 = G__20889;
chunk__20604 = G__20890;
count__20605 = G__20891;
i__20606 = G__20892;
continue;
} else {
var map__20615 = cljs.core.first(seq__20603__$1);
var map__20615__$1 = cljs.core.__destructure_map(map__20615);
var src = map__20615__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20615__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20615__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20615__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20615__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20616){var e_20893 = e20616;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20893);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20893.message)].join('')));
}

var G__20894 = cljs.core.next(seq__20603__$1);
var G__20895 = null;
var G__20896 = (0);
var G__20897 = (0);
seq__20603 = G__20894;
chunk__20604 = G__20895;
count__20605 = G__20896;
i__20606 = G__20897;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20617 = cljs.core.seq(js_requires);
var chunk__20618 = null;
var count__20619 = (0);
var i__20620 = (0);
while(true){
if((i__20620 < count__20619)){
var js_ns = chunk__20618.cljs$core$IIndexed$_nth$arity$2(null,i__20620);
var require_str_20898 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20898);


var G__20899 = seq__20617;
var G__20900 = chunk__20618;
var G__20901 = count__20619;
var G__20902 = (i__20620 + (1));
seq__20617 = G__20899;
chunk__20618 = G__20900;
count__20619 = G__20901;
i__20620 = G__20902;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20617);
if(temp__5804__auto__){
var seq__20617__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20617__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20617__$1);
var G__20903 = cljs.core.chunk_rest(seq__20617__$1);
var G__20904 = c__5525__auto__;
var G__20905 = cljs.core.count(c__5525__auto__);
var G__20906 = (0);
seq__20617 = G__20903;
chunk__20618 = G__20904;
count__20619 = G__20905;
i__20620 = G__20906;
continue;
} else {
var js_ns = cljs.core.first(seq__20617__$1);
var require_str_20907 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20907);


var G__20908 = cljs.core.next(seq__20617__$1);
var G__20909 = null;
var G__20910 = (0);
var G__20911 = (0);
seq__20617 = G__20908;
chunk__20618 = G__20909;
count__20619 = G__20910;
i__20620 = G__20911;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20622){
var map__20623 = p__20622;
var map__20623__$1 = cljs.core.__destructure_map(map__20623);
var msg = map__20623__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20624(s__20625){
return (new cljs.core.LazySeq(null,(function (){
var s__20625__$1 = s__20625;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20625__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20630 = cljs.core.first(xs__6360__auto__);
var map__20630__$1 = cljs.core.__destructure_map(map__20630);
var src = map__20630__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20630__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20630__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20625__$1,map__20630,map__20630__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20623,map__20623__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20624_$_iter__20626(s__20627){
return (new cljs.core.LazySeq(null,((function (s__20625__$1,map__20630,map__20630__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20623,map__20623__$1,msg,info,reload_info){
return (function (){
var s__20627__$1 = s__20627;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20627__$1);
if(temp__5804__auto____$1){
var s__20627__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20627__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20627__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20629 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20628 = (0);
while(true){
if((i__20628 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20628);
cljs.core.chunk_append(b__20629,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20912 = (i__20628 + (1));
i__20628 = G__20912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20629),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20624_$_iter__20626(cljs.core.chunk_rest(s__20627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20629),null);
}
} else {
var warning = cljs.core.first(s__20627__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20624_$_iter__20626(cljs.core.rest(s__20627__$2)));
}
} else {
return null;
}
break;
}
});})(s__20625__$1,map__20630,map__20630__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20623,map__20623__$1,msg,info,reload_info))
,null,null));
});})(s__20625__$1,map__20630,map__20630__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20623,map__20623__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20624(cljs.core.rest(s__20625__$1)));
} else {
var G__20913 = cljs.core.rest(s__20625__$1);
s__20625__$1 = G__20913;
continue;
}
} else {
var G__20914 = cljs.core.rest(s__20625__$1);
s__20625__$1 = G__20914;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20631_20915 = cljs.core.seq(warnings);
var chunk__20632_20916 = null;
var count__20633_20917 = (0);
var i__20634_20918 = (0);
while(true){
if((i__20634_20918 < count__20633_20917)){
var map__20637_20919 = chunk__20632_20916.cljs$core$IIndexed$_nth$arity$2(null,i__20634_20918);
var map__20637_20920__$1 = cljs.core.__destructure_map(map__20637_20919);
var w_20921 = map__20637_20920__$1;
var msg_20922__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20637_20920__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20637_20920__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20637_20920__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20637_20920__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20925)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20923),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20924),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20922__$1)].join(''));


var G__20926 = seq__20631_20915;
var G__20927 = chunk__20632_20916;
var G__20928 = count__20633_20917;
var G__20929 = (i__20634_20918 + (1));
seq__20631_20915 = G__20926;
chunk__20632_20916 = G__20927;
count__20633_20917 = G__20928;
i__20634_20918 = G__20929;
continue;
} else {
var temp__5804__auto___20930 = cljs.core.seq(seq__20631_20915);
if(temp__5804__auto___20930){
var seq__20631_20931__$1 = temp__5804__auto___20930;
if(cljs.core.chunked_seq_QMARK_(seq__20631_20931__$1)){
var c__5525__auto___20932 = cljs.core.chunk_first(seq__20631_20931__$1);
var G__20933 = cljs.core.chunk_rest(seq__20631_20931__$1);
var G__20934 = c__5525__auto___20932;
var G__20935 = cljs.core.count(c__5525__auto___20932);
var G__20936 = (0);
seq__20631_20915 = G__20933;
chunk__20632_20916 = G__20934;
count__20633_20917 = G__20935;
i__20634_20918 = G__20936;
continue;
} else {
var map__20638_20937 = cljs.core.first(seq__20631_20931__$1);
var map__20638_20938__$1 = cljs.core.__destructure_map(map__20638_20937);
var w_20939 = map__20638_20938__$1;
var msg_20940__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20638_20938__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20638_20938__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20638_20938__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20638_20938__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20943)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20941),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20942),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20940__$1)].join(''));


var G__20944 = cljs.core.next(seq__20631_20931__$1);
var G__20945 = null;
var G__20946 = (0);
var G__20947 = (0);
seq__20631_20915 = G__20944;
chunk__20632_20916 = G__20945;
count__20633_20917 = G__20946;
i__20634_20918 = G__20947;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20621_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20621_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20639){
var map__20640 = p__20639;
var map__20640__$1 = cljs.core.__destructure_map(map__20640);
var msg = map__20640__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20640__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20640__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20641 = cljs.core.seq(updates);
var chunk__20643 = null;
var count__20644 = (0);
var i__20645 = (0);
while(true){
if((i__20645 < count__20644)){
var path = chunk__20643.cljs$core$IIndexed$_nth$arity$2(null,i__20645);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20755_20948 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20759_20949 = null;
var count__20760_20950 = (0);
var i__20761_20951 = (0);
while(true){
if((i__20761_20951 < count__20760_20950)){
var node_20952 = chunk__20759_20949.cljs$core$IIndexed$_nth$arity$2(null,i__20761_20951);
if(cljs.core.not(node_20952.shadow$old)){
var path_match_20953 = shadow.cljs.devtools.client.browser.match_paths(node_20952.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20953)){
var new_link_20954 = (function (){var G__20787 = node_20952.cloneNode(true);
G__20787.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20953),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20787;
})();
(node_20952.shadow$old = true);

(new_link_20954.onload = ((function (seq__20755_20948,chunk__20759_20949,count__20760_20950,i__20761_20951,seq__20641,chunk__20643,count__20644,i__20645,new_link_20954,path_match_20953,node_20952,path,map__20640,map__20640__$1,msg,updates,reload_info){
return (function (e){
var seq__20788_20955 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20790_20956 = null;
var count__20791_20957 = (0);
var i__20792_20958 = (0);
while(true){
if((i__20792_20958 < count__20791_20957)){
var map__20796_20959 = chunk__20790_20956.cljs$core$IIndexed$_nth$arity$2(null,i__20792_20958);
var map__20796_20960__$1 = cljs.core.__destructure_map(map__20796_20959);
var task_20961 = map__20796_20960__$1;
var fn_str_20962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796_20960__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796_20960__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20964 = goog.getObjectByName(fn_str_20962,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20963)].join(''));

(fn_obj_20964.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20964.cljs$core$IFn$_invoke$arity$2(path,new_link_20954) : fn_obj_20964.call(null,path,new_link_20954));


var G__20965 = seq__20788_20955;
var G__20966 = chunk__20790_20956;
var G__20967 = count__20791_20957;
var G__20968 = (i__20792_20958 + (1));
seq__20788_20955 = G__20965;
chunk__20790_20956 = G__20966;
count__20791_20957 = G__20967;
i__20792_20958 = G__20968;
continue;
} else {
var temp__5804__auto___20969 = cljs.core.seq(seq__20788_20955);
if(temp__5804__auto___20969){
var seq__20788_20970__$1 = temp__5804__auto___20969;
if(cljs.core.chunked_seq_QMARK_(seq__20788_20970__$1)){
var c__5525__auto___20971 = cljs.core.chunk_first(seq__20788_20970__$1);
var G__20972 = cljs.core.chunk_rest(seq__20788_20970__$1);
var G__20973 = c__5525__auto___20971;
var G__20974 = cljs.core.count(c__5525__auto___20971);
var G__20975 = (0);
seq__20788_20955 = G__20972;
chunk__20790_20956 = G__20973;
count__20791_20957 = G__20974;
i__20792_20958 = G__20975;
continue;
} else {
var map__20797_20976 = cljs.core.first(seq__20788_20970__$1);
var map__20797_20977__$1 = cljs.core.__destructure_map(map__20797_20976);
var task_20978 = map__20797_20977__$1;
var fn_str_20979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797_20977__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797_20977__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20981 = goog.getObjectByName(fn_str_20979,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20980)].join(''));

(fn_obj_20981.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20981.cljs$core$IFn$_invoke$arity$2(path,new_link_20954) : fn_obj_20981.call(null,path,new_link_20954));


var G__20982 = cljs.core.next(seq__20788_20970__$1);
var G__20983 = null;
var G__20984 = (0);
var G__20985 = (0);
seq__20788_20955 = G__20982;
chunk__20790_20956 = G__20983;
count__20791_20957 = G__20984;
i__20792_20958 = G__20985;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20952);
});})(seq__20755_20948,chunk__20759_20949,count__20760_20950,i__20761_20951,seq__20641,chunk__20643,count__20644,i__20645,new_link_20954,path_match_20953,node_20952,path,map__20640,map__20640__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20953], 0));

goog.dom.insertSiblingAfter(new_link_20954,node_20952);


var G__20986 = seq__20755_20948;
var G__20987 = chunk__20759_20949;
var G__20988 = count__20760_20950;
var G__20989 = (i__20761_20951 + (1));
seq__20755_20948 = G__20986;
chunk__20759_20949 = G__20987;
count__20760_20950 = G__20988;
i__20761_20951 = G__20989;
continue;
} else {
var G__20990 = seq__20755_20948;
var G__20991 = chunk__20759_20949;
var G__20992 = count__20760_20950;
var G__20993 = (i__20761_20951 + (1));
seq__20755_20948 = G__20990;
chunk__20759_20949 = G__20991;
count__20760_20950 = G__20992;
i__20761_20951 = G__20993;
continue;
}
} else {
var G__20994 = seq__20755_20948;
var G__20995 = chunk__20759_20949;
var G__20996 = count__20760_20950;
var G__20997 = (i__20761_20951 + (1));
seq__20755_20948 = G__20994;
chunk__20759_20949 = G__20995;
count__20760_20950 = G__20996;
i__20761_20951 = G__20997;
continue;
}
} else {
var temp__5804__auto___20998 = cljs.core.seq(seq__20755_20948);
if(temp__5804__auto___20998){
var seq__20755_20999__$1 = temp__5804__auto___20998;
if(cljs.core.chunked_seq_QMARK_(seq__20755_20999__$1)){
var c__5525__auto___21000 = cljs.core.chunk_first(seq__20755_20999__$1);
var G__21001 = cljs.core.chunk_rest(seq__20755_20999__$1);
var G__21002 = c__5525__auto___21000;
var G__21003 = cljs.core.count(c__5525__auto___21000);
var G__21004 = (0);
seq__20755_20948 = G__21001;
chunk__20759_20949 = G__21002;
count__20760_20950 = G__21003;
i__20761_20951 = G__21004;
continue;
} else {
var node_21005 = cljs.core.first(seq__20755_20999__$1);
if(cljs.core.not(node_21005.shadow$old)){
var path_match_21006 = shadow.cljs.devtools.client.browser.match_paths(node_21005.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21006)){
var new_link_21007 = (function (){var G__20798 = node_21005.cloneNode(true);
G__20798.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21006),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20798;
})();
(node_21005.shadow$old = true);

(new_link_21007.onload = ((function (seq__20755_20948,chunk__20759_20949,count__20760_20950,i__20761_20951,seq__20641,chunk__20643,count__20644,i__20645,new_link_21007,path_match_21006,node_21005,seq__20755_20999__$1,temp__5804__auto___20998,path,map__20640,map__20640__$1,msg,updates,reload_info){
return (function (e){
var seq__20799_21008 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20801_21009 = null;
var count__20802_21010 = (0);
var i__20803_21011 = (0);
while(true){
if((i__20803_21011 < count__20802_21010)){
var map__20807_21012 = chunk__20801_21009.cljs$core$IIndexed$_nth$arity$2(null,i__20803_21011);
var map__20807_21013__$1 = cljs.core.__destructure_map(map__20807_21012);
var task_21014 = map__20807_21013__$1;
var fn_str_21015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20807_21013__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20807_21013__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21017 = goog.getObjectByName(fn_str_21015,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21016)].join(''));

(fn_obj_21017.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21017.cljs$core$IFn$_invoke$arity$2(path,new_link_21007) : fn_obj_21017.call(null,path,new_link_21007));


var G__21018 = seq__20799_21008;
var G__21019 = chunk__20801_21009;
var G__21020 = count__20802_21010;
var G__21021 = (i__20803_21011 + (1));
seq__20799_21008 = G__21018;
chunk__20801_21009 = G__21019;
count__20802_21010 = G__21020;
i__20803_21011 = G__21021;
continue;
} else {
var temp__5804__auto___21022__$1 = cljs.core.seq(seq__20799_21008);
if(temp__5804__auto___21022__$1){
var seq__20799_21023__$1 = temp__5804__auto___21022__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20799_21023__$1)){
var c__5525__auto___21024 = cljs.core.chunk_first(seq__20799_21023__$1);
var G__21025 = cljs.core.chunk_rest(seq__20799_21023__$1);
var G__21026 = c__5525__auto___21024;
var G__21027 = cljs.core.count(c__5525__auto___21024);
var G__21028 = (0);
seq__20799_21008 = G__21025;
chunk__20801_21009 = G__21026;
count__20802_21010 = G__21027;
i__20803_21011 = G__21028;
continue;
} else {
var map__20808_21029 = cljs.core.first(seq__20799_21023__$1);
var map__20808_21030__$1 = cljs.core.__destructure_map(map__20808_21029);
var task_21031 = map__20808_21030__$1;
var fn_str_21032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20808_21030__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20808_21030__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21034 = goog.getObjectByName(fn_str_21032,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21033)].join(''));

(fn_obj_21034.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21034.cljs$core$IFn$_invoke$arity$2(path,new_link_21007) : fn_obj_21034.call(null,path,new_link_21007));


var G__21035 = cljs.core.next(seq__20799_21023__$1);
var G__21036 = null;
var G__21037 = (0);
var G__21038 = (0);
seq__20799_21008 = G__21035;
chunk__20801_21009 = G__21036;
count__20802_21010 = G__21037;
i__20803_21011 = G__21038;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21005);
});})(seq__20755_20948,chunk__20759_20949,count__20760_20950,i__20761_20951,seq__20641,chunk__20643,count__20644,i__20645,new_link_21007,path_match_21006,node_21005,seq__20755_20999__$1,temp__5804__auto___20998,path,map__20640,map__20640__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21006], 0));

goog.dom.insertSiblingAfter(new_link_21007,node_21005);


var G__21039 = cljs.core.next(seq__20755_20999__$1);
var G__21040 = null;
var G__21041 = (0);
var G__21042 = (0);
seq__20755_20948 = G__21039;
chunk__20759_20949 = G__21040;
count__20760_20950 = G__21041;
i__20761_20951 = G__21042;
continue;
} else {
var G__21043 = cljs.core.next(seq__20755_20999__$1);
var G__21044 = null;
var G__21045 = (0);
var G__21046 = (0);
seq__20755_20948 = G__21043;
chunk__20759_20949 = G__21044;
count__20760_20950 = G__21045;
i__20761_20951 = G__21046;
continue;
}
} else {
var G__21047 = cljs.core.next(seq__20755_20999__$1);
var G__21048 = null;
var G__21049 = (0);
var G__21050 = (0);
seq__20755_20948 = G__21047;
chunk__20759_20949 = G__21048;
count__20760_20950 = G__21049;
i__20761_20951 = G__21050;
continue;
}
}
} else {
}
}
break;
}


var G__21051 = seq__20641;
var G__21052 = chunk__20643;
var G__21053 = count__20644;
var G__21054 = (i__20645 + (1));
seq__20641 = G__21051;
chunk__20643 = G__21052;
count__20644 = G__21053;
i__20645 = G__21054;
continue;
} else {
var G__21055 = seq__20641;
var G__21056 = chunk__20643;
var G__21057 = count__20644;
var G__21058 = (i__20645 + (1));
seq__20641 = G__21055;
chunk__20643 = G__21056;
count__20644 = G__21057;
i__20645 = G__21058;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20641);
if(temp__5804__auto__){
var seq__20641__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20641__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20641__$1);
var G__21059 = cljs.core.chunk_rest(seq__20641__$1);
var G__21060 = c__5525__auto__;
var G__21061 = cljs.core.count(c__5525__auto__);
var G__21062 = (0);
seq__20641 = G__21059;
chunk__20643 = G__21060;
count__20644 = G__21061;
i__20645 = G__21062;
continue;
} else {
var path = cljs.core.first(seq__20641__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20809_21063 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20813_21064 = null;
var count__20814_21065 = (0);
var i__20815_21066 = (0);
while(true){
if((i__20815_21066 < count__20814_21065)){
var node_21067 = chunk__20813_21064.cljs$core$IIndexed$_nth$arity$2(null,i__20815_21066);
if(cljs.core.not(node_21067.shadow$old)){
var path_match_21068 = shadow.cljs.devtools.client.browser.match_paths(node_21067.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21068)){
var new_link_21069 = (function (){var G__20841 = node_21067.cloneNode(true);
G__20841.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21068),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20841;
})();
(node_21067.shadow$old = true);

(new_link_21069.onload = ((function (seq__20809_21063,chunk__20813_21064,count__20814_21065,i__20815_21066,seq__20641,chunk__20643,count__20644,i__20645,new_link_21069,path_match_21068,node_21067,path,seq__20641__$1,temp__5804__auto__,map__20640,map__20640__$1,msg,updates,reload_info){
return (function (e){
var seq__20842_21070 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20844_21071 = null;
var count__20845_21072 = (0);
var i__20846_21073 = (0);
while(true){
if((i__20846_21073 < count__20845_21072)){
var map__20850_21074 = chunk__20844_21071.cljs$core$IIndexed$_nth$arity$2(null,i__20846_21073);
var map__20850_21075__$1 = cljs.core.__destructure_map(map__20850_21074);
var task_21076 = map__20850_21075__$1;
var fn_str_21077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850_21075__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850_21075__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21079 = goog.getObjectByName(fn_str_21077,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21078)].join(''));

(fn_obj_21079.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21079.cljs$core$IFn$_invoke$arity$2(path,new_link_21069) : fn_obj_21079.call(null,path,new_link_21069));


var G__21080 = seq__20842_21070;
var G__21081 = chunk__20844_21071;
var G__21082 = count__20845_21072;
var G__21083 = (i__20846_21073 + (1));
seq__20842_21070 = G__21080;
chunk__20844_21071 = G__21081;
count__20845_21072 = G__21082;
i__20846_21073 = G__21083;
continue;
} else {
var temp__5804__auto___21084__$1 = cljs.core.seq(seq__20842_21070);
if(temp__5804__auto___21084__$1){
var seq__20842_21085__$1 = temp__5804__auto___21084__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20842_21085__$1)){
var c__5525__auto___21086 = cljs.core.chunk_first(seq__20842_21085__$1);
var G__21087 = cljs.core.chunk_rest(seq__20842_21085__$1);
var G__21088 = c__5525__auto___21086;
var G__21089 = cljs.core.count(c__5525__auto___21086);
var G__21090 = (0);
seq__20842_21070 = G__21087;
chunk__20844_21071 = G__21088;
count__20845_21072 = G__21089;
i__20846_21073 = G__21090;
continue;
} else {
var map__20851_21091 = cljs.core.first(seq__20842_21085__$1);
var map__20851_21092__$1 = cljs.core.__destructure_map(map__20851_21091);
var task_21093 = map__20851_21092__$1;
var fn_str_21094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20851_21092__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20851_21092__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21096 = goog.getObjectByName(fn_str_21094,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21095)].join(''));

(fn_obj_21096.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21096.cljs$core$IFn$_invoke$arity$2(path,new_link_21069) : fn_obj_21096.call(null,path,new_link_21069));


var G__21097 = cljs.core.next(seq__20842_21085__$1);
var G__21098 = null;
var G__21099 = (0);
var G__21100 = (0);
seq__20842_21070 = G__21097;
chunk__20844_21071 = G__21098;
count__20845_21072 = G__21099;
i__20846_21073 = G__21100;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21067);
});})(seq__20809_21063,chunk__20813_21064,count__20814_21065,i__20815_21066,seq__20641,chunk__20643,count__20644,i__20645,new_link_21069,path_match_21068,node_21067,path,seq__20641__$1,temp__5804__auto__,map__20640,map__20640__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21068], 0));

goog.dom.insertSiblingAfter(new_link_21069,node_21067);


var G__21101 = seq__20809_21063;
var G__21102 = chunk__20813_21064;
var G__21103 = count__20814_21065;
var G__21104 = (i__20815_21066 + (1));
seq__20809_21063 = G__21101;
chunk__20813_21064 = G__21102;
count__20814_21065 = G__21103;
i__20815_21066 = G__21104;
continue;
} else {
var G__21105 = seq__20809_21063;
var G__21106 = chunk__20813_21064;
var G__21107 = count__20814_21065;
var G__21108 = (i__20815_21066 + (1));
seq__20809_21063 = G__21105;
chunk__20813_21064 = G__21106;
count__20814_21065 = G__21107;
i__20815_21066 = G__21108;
continue;
}
} else {
var G__21109 = seq__20809_21063;
var G__21110 = chunk__20813_21064;
var G__21111 = count__20814_21065;
var G__21112 = (i__20815_21066 + (1));
seq__20809_21063 = G__21109;
chunk__20813_21064 = G__21110;
count__20814_21065 = G__21111;
i__20815_21066 = G__21112;
continue;
}
} else {
var temp__5804__auto___21113__$1 = cljs.core.seq(seq__20809_21063);
if(temp__5804__auto___21113__$1){
var seq__20809_21114__$1 = temp__5804__auto___21113__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20809_21114__$1)){
var c__5525__auto___21115 = cljs.core.chunk_first(seq__20809_21114__$1);
var G__21116 = cljs.core.chunk_rest(seq__20809_21114__$1);
var G__21117 = c__5525__auto___21115;
var G__21118 = cljs.core.count(c__5525__auto___21115);
var G__21119 = (0);
seq__20809_21063 = G__21116;
chunk__20813_21064 = G__21117;
count__20814_21065 = G__21118;
i__20815_21066 = G__21119;
continue;
} else {
var node_21120 = cljs.core.first(seq__20809_21114__$1);
if(cljs.core.not(node_21120.shadow$old)){
var path_match_21121 = shadow.cljs.devtools.client.browser.match_paths(node_21120.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21121)){
var new_link_21122 = (function (){var G__20852 = node_21120.cloneNode(true);
G__20852.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21121),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20852;
})();
(node_21120.shadow$old = true);

(new_link_21122.onload = ((function (seq__20809_21063,chunk__20813_21064,count__20814_21065,i__20815_21066,seq__20641,chunk__20643,count__20644,i__20645,new_link_21122,path_match_21121,node_21120,seq__20809_21114__$1,temp__5804__auto___21113__$1,path,seq__20641__$1,temp__5804__auto__,map__20640,map__20640__$1,msg,updates,reload_info){
return (function (e){
var seq__20853_21123 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20855_21124 = null;
var count__20856_21125 = (0);
var i__20857_21126 = (0);
while(true){
if((i__20857_21126 < count__20856_21125)){
var map__20861_21127 = chunk__20855_21124.cljs$core$IIndexed$_nth$arity$2(null,i__20857_21126);
var map__20861_21128__$1 = cljs.core.__destructure_map(map__20861_21127);
var task_21129 = map__20861_21128__$1;
var fn_str_21130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20861_21128__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20861_21128__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21132 = goog.getObjectByName(fn_str_21130,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21131)].join(''));

(fn_obj_21132.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21132.cljs$core$IFn$_invoke$arity$2(path,new_link_21122) : fn_obj_21132.call(null,path,new_link_21122));


var G__21133 = seq__20853_21123;
var G__21134 = chunk__20855_21124;
var G__21135 = count__20856_21125;
var G__21136 = (i__20857_21126 + (1));
seq__20853_21123 = G__21133;
chunk__20855_21124 = G__21134;
count__20856_21125 = G__21135;
i__20857_21126 = G__21136;
continue;
} else {
var temp__5804__auto___21137__$2 = cljs.core.seq(seq__20853_21123);
if(temp__5804__auto___21137__$2){
var seq__20853_21138__$1 = temp__5804__auto___21137__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20853_21138__$1)){
var c__5525__auto___21139 = cljs.core.chunk_first(seq__20853_21138__$1);
var G__21140 = cljs.core.chunk_rest(seq__20853_21138__$1);
var G__21141 = c__5525__auto___21139;
var G__21142 = cljs.core.count(c__5525__auto___21139);
var G__21143 = (0);
seq__20853_21123 = G__21140;
chunk__20855_21124 = G__21141;
count__20856_21125 = G__21142;
i__20857_21126 = G__21143;
continue;
} else {
var map__20862_21144 = cljs.core.first(seq__20853_21138__$1);
var map__20862_21145__$1 = cljs.core.__destructure_map(map__20862_21144);
var task_21146 = map__20862_21145__$1;
var fn_str_21147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20862_21145__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20862_21145__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21149 = goog.getObjectByName(fn_str_21147,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21148)].join(''));

(fn_obj_21149.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21149.cljs$core$IFn$_invoke$arity$2(path,new_link_21122) : fn_obj_21149.call(null,path,new_link_21122));


var G__21150 = cljs.core.next(seq__20853_21138__$1);
var G__21151 = null;
var G__21152 = (0);
var G__21153 = (0);
seq__20853_21123 = G__21150;
chunk__20855_21124 = G__21151;
count__20856_21125 = G__21152;
i__20857_21126 = G__21153;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21120);
});})(seq__20809_21063,chunk__20813_21064,count__20814_21065,i__20815_21066,seq__20641,chunk__20643,count__20644,i__20645,new_link_21122,path_match_21121,node_21120,seq__20809_21114__$1,temp__5804__auto___21113__$1,path,seq__20641__$1,temp__5804__auto__,map__20640,map__20640__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21121], 0));

goog.dom.insertSiblingAfter(new_link_21122,node_21120);


var G__21154 = cljs.core.next(seq__20809_21114__$1);
var G__21155 = null;
var G__21156 = (0);
var G__21157 = (0);
seq__20809_21063 = G__21154;
chunk__20813_21064 = G__21155;
count__20814_21065 = G__21156;
i__20815_21066 = G__21157;
continue;
} else {
var G__21158 = cljs.core.next(seq__20809_21114__$1);
var G__21159 = null;
var G__21160 = (0);
var G__21161 = (0);
seq__20809_21063 = G__21158;
chunk__20813_21064 = G__21159;
count__20814_21065 = G__21160;
i__20815_21066 = G__21161;
continue;
}
} else {
var G__21162 = cljs.core.next(seq__20809_21114__$1);
var G__21163 = null;
var G__21164 = (0);
var G__21165 = (0);
seq__20809_21063 = G__21162;
chunk__20813_21064 = G__21163;
count__20814_21065 = G__21164;
i__20815_21066 = G__21165;
continue;
}
}
} else {
}
}
break;
}


var G__21166 = cljs.core.next(seq__20641__$1);
var G__21167 = null;
var G__21168 = (0);
var G__21169 = (0);
seq__20641 = G__21166;
chunk__20643 = G__21167;
count__20644 = G__21168;
i__20645 = G__21169;
continue;
} else {
var G__21170 = cljs.core.next(seq__20641__$1);
var G__21171 = null;
var G__21172 = (0);
var G__21173 = (0);
seq__20641 = G__21170;
chunk__20643 = G__21171;
count__20644 = G__21172;
i__20645 = G__21173;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__20863){
var map__20864 = p__20863;
var map__20864__$1 = cljs.core.__destructure_map(map__20864);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20864__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__20865,done,error){
var map__20866 = p__20865;
var map__20866__$1 = cljs.core.__destructure_map(map__20866);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20866__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__20867,done,error){
var map__20868 = p__20867;
var map__20868__$1 = cljs.core.__destructure_map(map__20868);
var msg = map__20868__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20868__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20868__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20868__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20869){
var map__20870 = p__20869;
var map__20870__$1 = cljs.core.__destructure_map(map__20870);
var src = map__20870__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20870__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__20871 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20871) : done.call(null,G__20871));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__20872){
var map__20873 = p__20872;
var map__20873__$1 = cljs.core.__destructure_map(map__20873);
var msg__$1 = map__20873__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20873__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e20874){var ex = e20874;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__20875){
var map__20876 = p__20875;
var map__20876__$1 = cljs.core.__destructure_map(map__20876);
var env = map__20876__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__20877){
var map__20878 = p__20877;
var map__20878__$1 = cljs.core.__destructure_map(map__20878);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20878__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20878__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__20879){
var map__20880 = p__20879;
var map__20880__$1 = cljs.core.__destructure_map(map__20880);
var svc = map__20880__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20880__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
