goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__19604,p__19605){
var map__19606 = p__19604;
var map__19606__$1 = cljs.core.__destructure_map(map__19606);
var svc = map__19606__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19606__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19606__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19606__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19607 = p__19605;
var map__19607__$1 = cljs.core.__destructure_map(map__19607);
var msg = map__19607__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19607__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19607__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19607__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19607__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__19618,p__19619){
var map__19620 = p__19618;
var map__19620__$1 = cljs.core.__destructure_map(map__19620);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19620__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__19621 = p__19619;
var map__19621__$1 = cljs.core.__destructure_map(map__19621);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19621__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__19628,p__19629){
var map__19630 = p__19628;
var map__19630__$1 = cljs.core.__destructure_map(map__19630);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19630__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19630__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19631 = p__19629;
var map__19631__$1 = cljs.core.__destructure_map(map__19631);
var msg = map__19631__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19631__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__19634,tid){
var map__19635 = p__19634;
var map__19635__$1 = cljs.core.__destructure_map(map__19635);
var svc = map__19635__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19635__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__19712 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__19713 = null;
var count__19714 = (0);
var i__19715 = (0);
while(true){
if((i__19715 < count__19714)){
var vec__19733 = chunk__19713.cljs$core$IIndexed$_nth$arity$2(null,i__19715);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19733,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19733,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__19791 = seq__19712;
var G__19792 = chunk__19713;
var G__19793 = count__19714;
var G__19794 = (i__19715 + (1));
seq__19712 = G__19791;
chunk__19713 = G__19792;
count__19714 = G__19793;
i__19715 = G__19794;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19712);
if(temp__5804__auto__){
var seq__19712__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19712__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19712__$1);
var G__19795 = cljs.core.chunk_rest(seq__19712__$1);
var G__19796 = c__5525__auto__;
var G__19797 = cljs.core.count(c__5525__auto__);
var G__19798 = (0);
seq__19712 = G__19795;
chunk__19713 = G__19796;
count__19714 = G__19797;
i__19715 = G__19798;
continue;
} else {
var vec__19736 = cljs.core.first(seq__19712__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__19800 = cljs.core.next(seq__19712__$1);
var G__19801 = null;
var G__19802 = (0);
var G__19803 = (0);
seq__19712 = G__19800;
chunk__19713 = G__19801;
count__19714 = G__19802;
i__19715 = G__19803;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__19685_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__19685_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__19686_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__19686_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__19687_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__19687_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__19688_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__19688_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__19747){
var map__19749 = p__19747;
var map__19749__$1 = cljs.core.__destructure_map(map__19749);
var svc = map__19749__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19749__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19749__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
