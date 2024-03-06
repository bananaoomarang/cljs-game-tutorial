goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13691){
var map__13692 = p__13691;
var map__13692__$1 = cljs.core.__destructure_map(map__13692);
var runtime = map__13692__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13692__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13933 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13933)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13698 = runtime;
var G__13699 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13933);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13698,G__13699) : shadow.remote.runtime.shared.process.call(null,G__13698,G__13699));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13705,res){
var map__13706 = p__13705;
var map__13706__$1 = cljs.core.__destructure_map(map__13706);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13706__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13707 = res;
var G__13707__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13707,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13707);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13707__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13707__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13718 = arguments.length;
switch (G__13718) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13725,msg,handlers,timeout_after_ms){
var map__13728 = p__13725;
var map__13728__$1 = cljs.core.__destructure_map(map__13728);
var runtime = map__13728__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13728__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13962 = arguments.length;
var i__5727__auto___13963 = (0);
while(true){
if((i__5727__auto___13963 < len__5726__auto___13962)){
args__5732__auto__.push((arguments[i__5727__auto___13963]));

var G__13964 = (i__5727__auto___13963 + (1));
i__5727__auto___13963 = G__13964;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13745,ev,args){
var map__13750 = p__13745;
var map__13750__$1 = cljs.core.__destructure_map(map__13750);
var runtime = map__13750__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13750__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13751 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13755 = null;
var count__13756 = (0);
var i__13757 = (0);
while(true){
if((i__13757 < count__13756)){
var ext = chunk__13755.cljs$core$IIndexed$_nth$arity$2(null,i__13757);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13967 = seq__13751;
var G__13968 = chunk__13755;
var G__13969 = count__13756;
var G__13970 = (i__13757 + (1));
seq__13751 = G__13967;
chunk__13755 = G__13968;
count__13756 = G__13969;
i__13757 = G__13970;
continue;
} else {
var G__13971 = seq__13751;
var G__13972 = chunk__13755;
var G__13973 = count__13756;
var G__13974 = (i__13757 + (1));
seq__13751 = G__13971;
chunk__13755 = G__13972;
count__13756 = G__13973;
i__13757 = G__13974;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13751);
if(temp__5804__auto__){
var seq__13751__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13751__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13751__$1);
var G__13979 = cljs.core.chunk_rest(seq__13751__$1);
var G__13980 = c__5525__auto__;
var G__13981 = cljs.core.count(c__5525__auto__);
var G__13982 = (0);
seq__13751 = G__13979;
chunk__13755 = G__13980;
count__13756 = G__13981;
i__13757 = G__13982;
continue;
} else {
var ext = cljs.core.first(seq__13751__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13983 = cljs.core.next(seq__13751__$1);
var G__13984 = null;
var G__13985 = (0);
var G__13986 = (0);
seq__13751 = G__13983;
chunk__13755 = G__13984;
count__13756 = G__13985;
i__13757 = G__13986;
continue;
} else {
var G__13988 = cljs.core.next(seq__13751__$1);
var G__13989 = null;
var G__13990 = (0);
var G__13991 = (0);
seq__13751 = G__13988;
chunk__13755 = G__13989;
count__13756 = G__13990;
i__13757 = G__13991;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13732){
var G__13733 = cljs.core.first(seq13732);
var seq13732__$1 = cljs.core.next(seq13732);
var G__13734 = cljs.core.first(seq13732__$1);
var seq13732__$2 = cljs.core.next(seq13732__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13733,G__13734,seq13732__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13792,p__13793){
var map__13796 = p__13792;
var map__13796__$1 = cljs.core.__destructure_map(map__13796);
var runtime = map__13796__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13796__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13797 = p__13793;
var map__13797__$1 = cljs.core.__destructure_map(map__13797);
var msg = map__13797__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13797__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__13801 = cljs.core.deref(state_ref);
var map__13801__$1 = cljs.core.__destructure_map(map__13801);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13801__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13801__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13811,msg){
var map__13812 = p__13811;
var map__13812__$1 = cljs.core.__destructure_map(map__13812);
var runtime = map__13812__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13825,key,p__13826){
var map__13829 = p__13825;
var map__13829__$1 = cljs.core.__destructure_map(map__13829);
var state = map__13829__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13829__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13830 = p__13826;
var map__13830__$1 = cljs.core.__destructure_map(map__13830);
var spec = map__13830__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13830__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13840,key,spec){
var map__13842 = p__13840;
var map__13842__$1 = cljs.core.__destructure_map(map__13842);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13842__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13844_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13844_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13845_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13845_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13846_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13846_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13847_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13847_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13848_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13848_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13857,key){
var map__13860 = p__13857;
var map__13860__$1 = cljs.core.__destructure_map(map__13860);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13860__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13865,msg){
var map__13866 = p__13865;
var map__13866__$1 = cljs.core.__destructure_map(map__13866);
var runtime = map__13866__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13881,p__13882){
var map__13883 = p__13881;
var map__13883__$1 = cljs.core.__destructure_map(map__13883);
var runtime = map__13883__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13883__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13884 = p__13882;
var map__13884__$1 = cljs.core.__destructure_map(map__13884);
var msg = map__13884__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13884__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13884__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13891 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13893 = null;
var count__13894 = (0);
var i__13895 = (0);
while(true){
if((i__13895 < count__13894)){
var map__13904 = chunk__13893.cljs$core$IIndexed$_nth$arity$2(null,i__13895);
var map__13904__$1 = cljs.core.__destructure_map(map__13904);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13904__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14090 = seq__13891;
var G__14091 = chunk__13893;
var G__14092 = count__13894;
var G__14093 = (i__13895 + (1));
seq__13891 = G__14090;
chunk__13893 = G__14091;
count__13894 = G__14092;
i__13895 = G__14093;
continue;
} else {
var G__14094 = seq__13891;
var G__14095 = chunk__13893;
var G__14096 = count__13894;
var G__14097 = (i__13895 + (1));
seq__13891 = G__14094;
chunk__13893 = G__14095;
count__13894 = G__14096;
i__13895 = G__14097;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13891);
if(temp__5804__auto__){
var seq__13891__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13891__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13891__$1);
var G__14098 = cljs.core.chunk_rest(seq__13891__$1);
var G__14099 = c__5525__auto__;
var G__14100 = cljs.core.count(c__5525__auto__);
var G__14101 = (0);
seq__13891 = G__14098;
chunk__13893 = G__14099;
count__13894 = G__14100;
i__13895 = G__14101;
continue;
} else {
var map__13906 = cljs.core.first(seq__13891__$1);
var map__13906__$1 = cljs.core.__destructure_map(map__13906);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13906__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14102 = cljs.core.next(seq__13891__$1);
var G__14103 = null;
var G__14104 = (0);
var G__14105 = (0);
seq__13891 = G__14102;
chunk__13893 = G__14103;
count__13894 = G__14104;
i__13895 = G__14105;
continue;
} else {
var G__14106 = cljs.core.next(seq__13891__$1);
var G__14107 = null;
var G__14108 = (0);
var G__14109 = (0);
seq__13891 = G__14106;
chunk__13893 = G__14107;
count__13894 = G__14108;
i__13895 = G__14109;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
