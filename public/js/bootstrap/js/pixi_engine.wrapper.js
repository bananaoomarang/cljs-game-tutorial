goog.provide('pixi_engine.wrapper');
pixi_engine.wrapper.vec2 = (function pixi_engine$wrapper$vec2(x,y){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
pixi_engine.wrapper.vec_x = (function pixi_engine$wrapper$vec_x(v){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v);
});
pixi_engine.wrapper.vec_y = (function pixi_engine$wrapper$vec_y(v){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v);
});
pixi_engine.wrapper.set_vec2 = (function pixi_engine$wrapper$set_vec2(var_args){
var G__11734 = arguments.length;
switch (G__11734) {
case 2:
return pixi_engine.wrapper.set_vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pixi_engine.wrapper.set_vec2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pixi_engine.wrapper.set_vec2.cljs$core$IFn$_invoke$arity$2 = (function (v,xy){
return pixi_engine.wrapper.set_vec2.cljs$core$IFn$_invoke$arity$3(v,xy,xy);
}));

(pixi_engine.wrapper.set_vec2.cljs$core$IFn$_invoke$arity$3 = (function (v,x,y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0));
}));

(pixi_engine.wrapper.set_vec2.cljs$lang$maxFixedArity = 3);

pixi_engine.wrapper.vec2_STAR_ = (function pixi_engine$wrapper$vec2_STAR_(v,n){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"x","x",2099068185),(n * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(n * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v))], 0));
});
pixi_engine.wrapper.vec2_add = (function pixi_engine$wrapper$vec2_add(v1,v2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v1,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2))], 0));
});
pixi_engine.wrapper.get_app_element = (function pixi_engine$wrapper$get_app_element(selector){
return document.querySelector(selector);
});
pixi_engine.wrapper.create_on_keydown = (function pixi_engine$wrapper$create_on_keydown(on_keydown){
return (function (e){
return (on_keydown.cljs$core$IFn$_invoke$arity$1 ? on_keydown.cljs$core$IFn$_invoke$arity$1(e) : on_keydown.call(null,e));
});
});
pixi_engine.wrapper.create_on_keyup = (function pixi_engine$wrapper$create_on_keyup(on_keyup){
return (function (e){
return (on_keyup.cljs$core$IFn$_invoke$arity$1 ? on_keyup.cljs$core$IFn$_invoke$arity$1(e) : on_keyup.call(null,e));
});
});
pixi_engine.wrapper.key_subscribe_BANG_ = (function pixi_engine$wrapper$key_subscribe_BANG_(on_keydown,on_keyup){
if(cljs.core.truth_(on_keydown)){
window.addEventListener("keydown",pixi_engine.wrapper.create_on_keydown(on_keydown),false);
} else {
}

if(cljs.core.truth_(on_keyup)){
return window.addEventListener("keyup",pixi_engine.wrapper.create_on_keyup(on_keyup),false);
} else {
return null;
}
});
pixi_engine.wrapper.load_sprites_BANG_ = (function pixi_engine$wrapper$load_sprites_BANG_(app,sprites){
var seq__11735_11754 = cljs.core.seq(sprites);
var chunk__11736_11755 = null;
var count__11737_11756 = (0);
var i__11738_11757 = (0);
while(true){
if((i__11738_11757 < count__11737_11756)){
var vec__11745_11758 = chunk__11736_11755.cljs$core$IIndexed$_nth$arity$2(null,i__11738_11757);
var key_11759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11745_11758,(0),null);
var val_11760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11745_11758,(1),null);
pixi_engine.core.Assets.add(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),cljs.core.name(key_11759),new cljs.core.Keyword(null,"src","src",-1651076051),val_11760], null)));


var G__11761 = seq__11735_11754;
var G__11762 = chunk__11736_11755;
var G__11763 = count__11737_11756;
var G__11764 = (i__11738_11757 + (1));
seq__11735_11754 = G__11761;
chunk__11736_11755 = G__11762;
count__11737_11756 = G__11763;
i__11738_11757 = G__11764;
continue;
} else {
var temp__5804__auto___11765 = cljs.core.seq(seq__11735_11754);
if(temp__5804__auto___11765){
var seq__11735_11766__$1 = temp__5804__auto___11765;
if(cljs.core.chunked_seq_QMARK_(seq__11735_11766__$1)){
var c__5525__auto___11767 = cljs.core.chunk_first(seq__11735_11766__$1);
var G__11768 = cljs.core.chunk_rest(seq__11735_11766__$1);
var G__11769 = c__5525__auto___11767;
var G__11770 = cljs.core.count(c__5525__auto___11767);
var G__11771 = (0);
seq__11735_11754 = G__11768;
chunk__11736_11755 = G__11769;
count__11737_11756 = G__11770;
i__11738_11757 = G__11771;
continue;
} else {
var vec__11748_11772 = cljs.core.first(seq__11735_11766__$1);
var key_11773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748_11772,(0),null);
var val_11774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748_11772,(1),null);
pixi_engine.core.Assets.add(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),cljs.core.name(key_11773),new cljs.core.Keyword(null,"src","src",-1651076051),val_11774], null)));


var G__11775 = cljs.core.next(seq__11735_11766__$1);
var G__11776 = null;
var G__11777 = (0);
var G__11778 = (0);
seq__11735_11754 = G__11775;
chunk__11736_11755 = G__11776;
count__11737_11756 = G__11777;
i__11738_11757 = G__11778;
continue;
}
} else {
}
}
break;
}

return pixi_engine.core.Assets.load(cljs.core.clj__GT_js(cljs.core.keys(sprites)));
});
pixi_engine.wrapper.create_sprite = (function pixi_engine$wrapper$create_sprite(app,resource_key,opts){
return pixi_engine.core.create_sprite(app,resource_key,opts);
});
pixi_engine.wrapper.add_sprite_BANG_ = (function pixi_engine$wrapper$add_sprite_BANG_(app,sprite){
return pixi_engine.core.add_child_BANG_(app.stage,sprite);
});
pixi_engine.wrapper.remove_sprite_BANG_ = (function pixi_engine$wrapper$remove_sprite_BANG_(app,sprite){
return pixi_engine.core.remove_child_BANG_(app.stage,sprite);
});
pixi_engine.wrapper.create_rectangle = pixi_engine.core.create_rectangle;
/**
 * Init stuff
 */
pixi_engine.wrapper.init_BANG_ = (function pixi_engine$wrapper$init_BANG_(el_selector,p__11751){
var map__11752 = p__11751;
var map__11752__$1 = cljs.core.__destructure_map(map__11752);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprites = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var setup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,new cljs.core.Keyword(null,"setup","setup",1987730512));
var update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var on_keydown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495));
var on_keyup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11752__$1,new cljs.core.Keyword(null,"on-keyup","on-keyup",-1326731418));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["running init..."], 0));

var app = pixi_engine.core.create_application(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
pixi_engine.wrapper.get_app_element(el_selector).appendChild(app.view);

return pixi_engine.wrapper.load_sprites_BANG_(app,sprites).then((function (){
pixi_engine.wrapper.key_subscribe_BANG_(on_keydown,on_keyup);

(setup.cljs$core$IFn$_invoke$arity$1 ? setup.cljs$core$IFn$_invoke$arity$1(app) : setup.call(null,app));

return app.ticker.add(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(update,app));
}));
});

//# sourceMappingURL=pixi_engine.wrapper.js.map
