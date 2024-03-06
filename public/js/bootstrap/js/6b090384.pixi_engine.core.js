goog.provide('pixi_engine.core');
goog.scope(function(){
  pixi_engine.core.goog$module$goog$object = goog.module.get('goog.object');
});
pixi_engine.core.PIXIApplication = module$node_modules$pixi_DOT_js$lib$index.Application;
pixi_engine.core.Sprite = module$node_modules$pixi_DOT_js$lib$index.Sprite;
pixi_engine.core.Assets = module$node_modules$pixi_DOT_js$lib$index.Assets;
pixi_engine.core.Graphics = module$node_modules$pixi_DOT_js$lib$index.Graphics;
pixi_engine.core.create_application = (function pixi_engine$core$create_application(config){
return (new pixi_engine.core.PIXIApplication(cljs.core.clj__GT_js(config)));
});
pixi_engine.core.add_child_BANG_ = (function pixi_engine$core$add_child_BANG_(container,sprite){
return container.addChild(sprite);
});
pixi_engine.core.remove_child_BANG_ = (function pixi_engine$core$remove_child_BANG_(container,sprite){
return container.removeChild(sprite);
});
pixi_engine.core.get_resource = (function pixi_engine$core$get_resource(name){
return pixi_engine.core.Assets.get(name);
});
pixi_engine.core.create_sprite = (function pixi_engine$core$create_sprite(app,resource_key,p__5730){
var map__5733 = p__5730;
var map__5733__$1 = cljs.core.__destructure_map(map__5733);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5733__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5733__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5733__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5733__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var resource = pixi_engine.core.get_resource(resource_key);
var sprite = pixi_engine.core.Sprite.from(resource);
if(cljs.core.truth_(position)){
sprite.position.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position));
} else {
}

if(cljs.core.truth_(anchor)){
sprite.anchor.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(anchor),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(anchor));
} else {
}

if(cljs.core.truth_(rotation)){
(sprite.rotation = rotation);
} else {
}

if(cljs.core.truth_(scale)){
sprite.scale.set(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(scale),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(scale));
} else {
}

return sprite;
});
pixi_engine.core.create_graphics = (function pixi_engine$core$create_graphics(){
return (new pixi_engine.core.Graphics());
});
pixi_engine.core.create_rectangle = (function pixi_engine$core$create_rectangle(w,h,color){
var graphics = pixi_engine.core.create_graphics();
graphics.beginFill(color);

graphics.drawRect((0),(0),w,h);

return graphics.endFill();
});
