goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18457 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18457(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18461 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18461(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17042 = coll;
var G__17043 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17042,G__17043) : shadow.dom.lazy_native_coll_seq.call(null,G__17042,G__17043));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17202 = arguments.length;
switch (G__17202) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17282 = arguments.length;
switch (G__17282) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17299 = arguments.length;
switch (G__17299) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17313 = arguments.length;
switch (G__17313) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17376 = arguments.length;
switch (G__17376) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17416 = arguments.length;
switch (G__17416) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17442){if((e17442 instanceof Object)){
var e = e17442;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17442;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17460 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17461 = null;
var count__17462 = (0);
var i__17463 = (0);
while(true){
if((i__17463 < count__17462)){
var el = chunk__17461.cljs$core$IIndexed$_nth$arity$2(null,i__17463);
var handler_18552__$1 = ((function (seq__17460,chunk__17461,count__17462,i__17463,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17460,chunk__17461,count__17462,i__17463,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18552__$1);


var G__18553 = seq__17460;
var G__18554 = chunk__17461;
var G__18555 = count__17462;
var G__18556 = (i__17463 + (1));
seq__17460 = G__18553;
chunk__17461 = G__18554;
count__17462 = G__18555;
i__17463 = G__18556;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17460);
if(temp__5804__auto__){
var seq__17460__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17460__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17460__$1);
var G__18566 = cljs.core.chunk_rest(seq__17460__$1);
var G__18567 = c__5525__auto__;
var G__18568 = cljs.core.count(c__5525__auto__);
var G__18569 = (0);
seq__17460 = G__18566;
chunk__17461 = G__18567;
count__17462 = G__18568;
i__17463 = G__18569;
continue;
} else {
var el = cljs.core.first(seq__17460__$1);
var handler_18572__$1 = ((function (seq__17460,chunk__17461,count__17462,i__17463,el,seq__17460__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17460,chunk__17461,count__17462,i__17463,el,seq__17460__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18572__$1);


var G__18586 = cljs.core.next(seq__17460__$1);
var G__18587 = null;
var G__18588 = (0);
var G__18589 = (0);
seq__17460 = G__18586;
chunk__17461 = G__18587;
count__17462 = G__18588;
i__17463 = G__18589;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17531 = arguments.length;
switch (G__17531) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17553 = cljs.core.seq(events);
var chunk__17554 = null;
var count__17555 = (0);
var i__17556 = (0);
while(true){
if((i__17556 < count__17555)){
var vec__17570 = chunk__17554.cljs$core$IIndexed$_nth$arity$2(null,i__17556);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17570,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18598 = seq__17553;
var G__18599 = chunk__17554;
var G__18600 = count__17555;
var G__18601 = (i__17556 + (1));
seq__17553 = G__18598;
chunk__17554 = G__18599;
count__17555 = G__18600;
i__17556 = G__18601;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17553);
if(temp__5804__auto__){
var seq__17553__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17553__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17553__$1);
var G__18609 = cljs.core.chunk_rest(seq__17553__$1);
var G__18610 = c__5525__auto__;
var G__18611 = cljs.core.count(c__5525__auto__);
var G__18612 = (0);
seq__17553 = G__18609;
chunk__17554 = G__18610;
count__17555 = G__18611;
i__17556 = G__18612;
continue;
} else {
var vec__17601 = cljs.core.first(seq__17553__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17601,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17601,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18620 = cljs.core.next(seq__17553__$1);
var G__18621 = null;
var G__18622 = (0);
var G__18623 = (0);
seq__17553 = G__18620;
chunk__17554 = G__18621;
count__17555 = G__18622;
i__17556 = G__18623;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17605 = cljs.core.seq(styles);
var chunk__17606 = null;
var count__17607 = (0);
var i__17609 = (0);
while(true){
if((i__17609 < count__17607)){
var vec__17628 = chunk__17606.cljs$core$IIndexed$_nth$arity$2(null,i__17609);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17628,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17628,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18628 = seq__17605;
var G__18629 = chunk__17606;
var G__18630 = count__17607;
var G__18631 = (i__17609 + (1));
seq__17605 = G__18628;
chunk__17606 = G__18629;
count__17607 = G__18630;
i__17609 = G__18631;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17605);
if(temp__5804__auto__){
var seq__17605__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17605__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17605__$1);
var G__18632 = cljs.core.chunk_rest(seq__17605__$1);
var G__18633 = c__5525__auto__;
var G__18634 = cljs.core.count(c__5525__auto__);
var G__18635 = (0);
seq__17605 = G__18632;
chunk__17606 = G__18633;
count__17607 = G__18634;
i__17609 = G__18635;
continue;
} else {
var vec__17658 = cljs.core.first(seq__17605__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17658,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17658,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18636 = cljs.core.next(seq__17605__$1);
var G__18637 = null;
var G__18638 = (0);
var G__18639 = (0);
seq__17605 = G__18636;
chunk__17606 = G__18637;
count__17607 = G__18638;
i__17609 = G__18639;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17666_18640 = key;
var G__17666_18641__$1 = (((G__17666_18640 instanceof cljs.core.Keyword))?G__17666_18640.fqn:null);
switch (G__17666_18641__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18646 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_18646,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_18646,"aria-");
}
})())){
el.setAttribute(ks_18646,value);
} else {
(el[ks_18646] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17729){
var map__17733 = p__17729;
var map__17733__$1 = cljs.core.__destructure_map(map__17733);
var props = map__17733__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17733__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17734 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17734,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17734,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17734,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17737 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17737,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17737;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17741 = arguments.length;
switch (G__17741) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17779){
var vec__17780 = p__17779;
var seq__17781 = cljs.core.seq(vec__17780);
var first__17782 = cljs.core.first(seq__17781);
var seq__17781__$1 = cljs.core.next(seq__17781);
var nn = first__17782;
var first__17782__$1 = cljs.core.first(seq__17781__$1);
var seq__17781__$2 = cljs.core.next(seq__17781__$1);
var np = first__17782__$1;
var nc = seq__17781__$2;
var node = vec__17780;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17784 = nn;
var G__17785 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17784,G__17785) : create_fn.call(null,G__17784,G__17785));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17801 = nn;
var G__17802 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17801,G__17802) : create_fn.call(null,G__17801,G__17802));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17811 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17811,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17811,(1),null);
var seq__17816_18678 = cljs.core.seq(node_children);
var chunk__17818_18679 = null;
var count__17819_18680 = (0);
var i__17820_18681 = (0);
while(true){
if((i__17820_18681 < count__17819_18680)){
var child_struct_18682 = chunk__17818_18679.cljs$core$IIndexed$_nth$arity$2(null,i__17820_18681);
var children_18683 = shadow.dom.dom_node(child_struct_18682);
if(cljs.core.seq_QMARK_(children_18683)){
var seq__17883_18684 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18683));
var chunk__17885_18685 = null;
var count__17886_18686 = (0);
var i__17887_18687 = (0);
while(true){
if((i__17887_18687 < count__17886_18686)){
var child_18688 = chunk__17885_18685.cljs$core$IIndexed$_nth$arity$2(null,i__17887_18687);
if(cljs.core.truth_(child_18688)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18688);


var G__18689 = seq__17883_18684;
var G__18690 = chunk__17885_18685;
var G__18691 = count__17886_18686;
var G__18692 = (i__17887_18687 + (1));
seq__17883_18684 = G__18689;
chunk__17885_18685 = G__18690;
count__17886_18686 = G__18691;
i__17887_18687 = G__18692;
continue;
} else {
var G__18694 = seq__17883_18684;
var G__18695 = chunk__17885_18685;
var G__18696 = count__17886_18686;
var G__18697 = (i__17887_18687 + (1));
seq__17883_18684 = G__18694;
chunk__17885_18685 = G__18695;
count__17886_18686 = G__18696;
i__17887_18687 = G__18697;
continue;
}
} else {
var temp__5804__auto___18698 = cljs.core.seq(seq__17883_18684);
if(temp__5804__auto___18698){
var seq__17883_18699__$1 = temp__5804__auto___18698;
if(cljs.core.chunked_seq_QMARK_(seq__17883_18699__$1)){
var c__5525__auto___18700 = cljs.core.chunk_first(seq__17883_18699__$1);
var G__18701 = cljs.core.chunk_rest(seq__17883_18699__$1);
var G__18702 = c__5525__auto___18700;
var G__18703 = cljs.core.count(c__5525__auto___18700);
var G__18704 = (0);
seq__17883_18684 = G__18701;
chunk__17885_18685 = G__18702;
count__17886_18686 = G__18703;
i__17887_18687 = G__18704;
continue;
} else {
var child_18705 = cljs.core.first(seq__17883_18699__$1);
if(cljs.core.truth_(child_18705)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18705);


var G__18706 = cljs.core.next(seq__17883_18699__$1);
var G__18707 = null;
var G__18708 = (0);
var G__18709 = (0);
seq__17883_18684 = G__18706;
chunk__17885_18685 = G__18707;
count__17886_18686 = G__18708;
i__17887_18687 = G__18709;
continue;
} else {
var G__18710 = cljs.core.next(seq__17883_18699__$1);
var G__18711 = null;
var G__18712 = (0);
var G__18713 = (0);
seq__17883_18684 = G__18710;
chunk__17885_18685 = G__18711;
count__17886_18686 = G__18712;
i__17887_18687 = G__18713;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18683);
}


var G__18714 = seq__17816_18678;
var G__18715 = chunk__17818_18679;
var G__18716 = count__17819_18680;
var G__18717 = (i__17820_18681 + (1));
seq__17816_18678 = G__18714;
chunk__17818_18679 = G__18715;
count__17819_18680 = G__18716;
i__17820_18681 = G__18717;
continue;
} else {
var temp__5804__auto___18718 = cljs.core.seq(seq__17816_18678);
if(temp__5804__auto___18718){
var seq__17816_18719__$1 = temp__5804__auto___18718;
if(cljs.core.chunked_seq_QMARK_(seq__17816_18719__$1)){
var c__5525__auto___18720 = cljs.core.chunk_first(seq__17816_18719__$1);
var G__18721 = cljs.core.chunk_rest(seq__17816_18719__$1);
var G__18722 = c__5525__auto___18720;
var G__18723 = cljs.core.count(c__5525__auto___18720);
var G__18724 = (0);
seq__17816_18678 = G__18721;
chunk__17818_18679 = G__18722;
count__17819_18680 = G__18723;
i__17820_18681 = G__18724;
continue;
} else {
var child_struct_18725 = cljs.core.first(seq__17816_18719__$1);
var children_18726 = shadow.dom.dom_node(child_struct_18725);
if(cljs.core.seq_QMARK_(children_18726)){
var seq__17916_18727 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18726));
var chunk__17918_18728 = null;
var count__17919_18729 = (0);
var i__17920_18730 = (0);
while(true){
if((i__17920_18730 < count__17919_18729)){
var child_18731 = chunk__17918_18728.cljs$core$IIndexed$_nth$arity$2(null,i__17920_18730);
if(cljs.core.truth_(child_18731)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18731);


var G__18732 = seq__17916_18727;
var G__18733 = chunk__17918_18728;
var G__18734 = count__17919_18729;
var G__18735 = (i__17920_18730 + (1));
seq__17916_18727 = G__18732;
chunk__17918_18728 = G__18733;
count__17919_18729 = G__18734;
i__17920_18730 = G__18735;
continue;
} else {
var G__18736 = seq__17916_18727;
var G__18737 = chunk__17918_18728;
var G__18738 = count__17919_18729;
var G__18739 = (i__17920_18730 + (1));
seq__17916_18727 = G__18736;
chunk__17918_18728 = G__18737;
count__17919_18729 = G__18738;
i__17920_18730 = G__18739;
continue;
}
} else {
var temp__5804__auto___18740__$1 = cljs.core.seq(seq__17916_18727);
if(temp__5804__auto___18740__$1){
var seq__17916_18742__$1 = temp__5804__auto___18740__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17916_18742__$1)){
var c__5525__auto___18744 = cljs.core.chunk_first(seq__17916_18742__$1);
var G__18749 = cljs.core.chunk_rest(seq__17916_18742__$1);
var G__18750 = c__5525__auto___18744;
var G__18751 = cljs.core.count(c__5525__auto___18744);
var G__18752 = (0);
seq__17916_18727 = G__18749;
chunk__17918_18728 = G__18750;
count__17919_18729 = G__18751;
i__17920_18730 = G__18752;
continue;
} else {
var child_18753 = cljs.core.first(seq__17916_18742__$1);
if(cljs.core.truth_(child_18753)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18753);


var G__18754 = cljs.core.next(seq__17916_18742__$1);
var G__18755 = null;
var G__18756 = (0);
var G__18757 = (0);
seq__17916_18727 = G__18754;
chunk__17918_18728 = G__18755;
count__17919_18729 = G__18756;
i__17920_18730 = G__18757;
continue;
} else {
var G__18758 = cljs.core.next(seq__17916_18742__$1);
var G__18759 = null;
var G__18760 = (0);
var G__18761 = (0);
seq__17916_18727 = G__18758;
chunk__17918_18728 = G__18759;
count__17919_18729 = G__18760;
i__17920_18730 = G__18761;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18726);
}


var G__18763 = cljs.core.next(seq__17816_18719__$1);
var G__18764 = null;
var G__18765 = (0);
var G__18766 = (0);
seq__17816_18678 = G__18763;
chunk__17818_18679 = G__18764;
count__17819_18680 = G__18765;
i__17820_18681 = G__18766;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17957 = cljs.core.seq(node);
var chunk__17958 = null;
var count__17959 = (0);
var i__17960 = (0);
while(true){
if((i__17960 < count__17959)){
var n = chunk__17958.cljs$core$IIndexed$_nth$arity$2(null,i__17960);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18776 = seq__17957;
var G__18777 = chunk__17958;
var G__18778 = count__17959;
var G__18779 = (i__17960 + (1));
seq__17957 = G__18776;
chunk__17958 = G__18777;
count__17959 = G__18778;
i__17960 = G__18779;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17957);
if(temp__5804__auto__){
var seq__17957__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17957__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17957__$1);
var G__18780 = cljs.core.chunk_rest(seq__17957__$1);
var G__18781 = c__5525__auto__;
var G__18782 = cljs.core.count(c__5525__auto__);
var G__18783 = (0);
seq__17957 = G__18780;
chunk__17958 = G__18781;
count__17959 = G__18782;
i__17960 = G__18783;
continue;
} else {
var n = cljs.core.first(seq__17957__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18784 = cljs.core.next(seq__17957__$1);
var G__18785 = null;
var G__18786 = (0);
var G__18787 = (0);
seq__17957 = G__18784;
chunk__17958 = G__18785;
count__17959 = G__18786;
i__17960 = G__18787;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17981 = arguments.length;
switch (G__17981) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17988 = arguments.length;
switch (G__17988) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18011 = arguments.length;
switch (G__18011) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18805 = arguments.length;
var i__5727__auto___18808 = (0);
while(true){
if((i__5727__auto___18808 < len__5726__auto___18805)){
args__5732__auto__.push((arguments[i__5727__auto___18808]));

var G__18809 = (i__5727__auto___18808 + (1));
i__5727__auto___18808 = G__18809;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18060_18810 = cljs.core.seq(nodes);
var chunk__18061_18811 = null;
var count__18062_18812 = (0);
var i__18063_18813 = (0);
while(true){
if((i__18063_18813 < count__18062_18812)){
var node_18814 = chunk__18061_18811.cljs$core$IIndexed$_nth$arity$2(null,i__18063_18813);
fragment.appendChild(shadow.dom._to_dom(node_18814));


var G__18815 = seq__18060_18810;
var G__18816 = chunk__18061_18811;
var G__18817 = count__18062_18812;
var G__18818 = (i__18063_18813 + (1));
seq__18060_18810 = G__18815;
chunk__18061_18811 = G__18816;
count__18062_18812 = G__18817;
i__18063_18813 = G__18818;
continue;
} else {
var temp__5804__auto___18819 = cljs.core.seq(seq__18060_18810);
if(temp__5804__auto___18819){
var seq__18060_18820__$1 = temp__5804__auto___18819;
if(cljs.core.chunked_seq_QMARK_(seq__18060_18820__$1)){
var c__5525__auto___18823 = cljs.core.chunk_first(seq__18060_18820__$1);
var G__18824 = cljs.core.chunk_rest(seq__18060_18820__$1);
var G__18825 = c__5525__auto___18823;
var G__18826 = cljs.core.count(c__5525__auto___18823);
var G__18827 = (0);
seq__18060_18810 = G__18824;
chunk__18061_18811 = G__18825;
count__18062_18812 = G__18826;
i__18063_18813 = G__18827;
continue;
} else {
var node_18830 = cljs.core.first(seq__18060_18820__$1);
fragment.appendChild(shadow.dom._to_dom(node_18830));


var G__18831 = cljs.core.next(seq__18060_18820__$1);
var G__18832 = null;
var G__18833 = (0);
var G__18834 = (0);
seq__18060_18810 = G__18831;
chunk__18061_18811 = G__18832;
count__18062_18812 = G__18833;
i__18063_18813 = G__18834;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18056){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18056));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18064_18835 = cljs.core.seq(scripts);
var chunk__18065_18836 = null;
var count__18066_18837 = (0);
var i__18067_18838 = (0);
while(true){
if((i__18067_18838 < count__18066_18837)){
var vec__18076_18840 = chunk__18065_18836.cljs$core$IIndexed$_nth$arity$2(null,i__18067_18838);
var script_tag_18841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18076_18840,(0),null);
var script_body_18842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18076_18840,(1),null);
eval(script_body_18842);


var G__18843 = seq__18064_18835;
var G__18844 = chunk__18065_18836;
var G__18845 = count__18066_18837;
var G__18846 = (i__18067_18838 + (1));
seq__18064_18835 = G__18843;
chunk__18065_18836 = G__18844;
count__18066_18837 = G__18845;
i__18067_18838 = G__18846;
continue;
} else {
var temp__5804__auto___18847 = cljs.core.seq(seq__18064_18835);
if(temp__5804__auto___18847){
var seq__18064_18848__$1 = temp__5804__auto___18847;
if(cljs.core.chunked_seq_QMARK_(seq__18064_18848__$1)){
var c__5525__auto___18849 = cljs.core.chunk_first(seq__18064_18848__$1);
var G__18850 = cljs.core.chunk_rest(seq__18064_18848__$1);
var G__18851 = c__5525__auto___18849;
var G__18852 = cljs.core.count(c__5525__auto___18849);
var G__18853 = (0);
seq__18064_18835 = G__18850;
chunk__18065_18836 = G__18851;
count__18066_18837 = G__18852;
i__18067_18838 = G__18853;
continue;
} else {
var vec__18079_18854 = cljs.core.first(seq__18064_18848__$1);
var script_tag_18855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18079_18854,(0),null);
var script_body_18856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18079_18854,(1),null);
eval(script_body_18856);


var G__18861 = cljs.core.next(seq__18064_18848__$1);
var G__18862 = null;
var G__18863 = (0);
var G__18864 = (0);
seq__18064_18835 = G__18861;
chunk__18065_18836 = G__18862;
count__18066_18837 = G__18863;
i__18067_18838 = G__18864;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18082){
var vec__18083 = p__18082;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18083,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18083,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18087 = arguments.length;
switch (G__18087) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18105 = cljs.core.seq(style_keys);
var chunk__18106 = null;
var count__18107 = (0);
var i__18108 = (0);
while(true){
if((i__18108 < count__18107)){
var it = chunk__18106.cljs$core$IIndexed$_nth$arity$2(null,i__18108);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18896 = seq__18105;
var G__18897 = chunk__18106;
var G__18898 = count__18107;
var G__18899 = (i__18108 + (1));
seq__18105 = G__18896;
chunk__18106 = G__18897;
count__18107 = G__18898;
i__18108 = G__18899;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18105);
if(temp__5804__auto__){
var seq__18105__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18105__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18105__$1);
var G__18901 = cljs.core.chunk_rest(seq__18105__$1);
var G__18902 = c__5525__auto__;
var G__18903 = cljs.core.count(c__5525__auto__);
var G__18904 = (0);
seq__18105 = G__18901;
chunk__18106 = G__18902;
count__18107 = G__18903;
i__18108 = G__18904;
continue;
} else {
var it = cljs.core.first(seq__18105__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18905 = cljs.core.next(seq__18105__$1);
var G__18906 = null;
var G__18907 = (0);
var G__18908 = (0);
seq__18105 = G__18905;
chunk__18106 = G__18906;
count__18107 = G__18907;
i__18108 = G__18908;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18120,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18130 = k18120;
var G__18130__$1 = (((G__18130 instanceof cljs.core.Keyword))?G__18130.fqn:null);
switch (G__18130__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18120,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18133){
var vec__18134 = p__18133;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18134,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18134,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18119){
var self__ = this;
var G__18119__$1 = this;
return (new cljs.core.RecordIter((0),G__18119__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18121,other18122){
var self__ = this;
var this18121__$1 = this;
return (((!((other18122 == null)))) && ((((this18121__$1.constructor === other18122.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18121__$1.x,other18122.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18121__$1.y,other18122.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18121__$1.__extmap,other18122.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18120){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18163 = k18120;
var G__18163__$1 = (((G__18163 instanceof cljs.core.Keyword))?G__18163.fqn:null);
switch (G__18163__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18120);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18119){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18164 = cljs.core.keyword_identical_QMARK_;
var expr__18165 = k__5309__auto__;
if(cljs.core.truth_((pred__18164.cljs$core$IFn$_invoke$arity$2 ? pred__18164.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18165) : pred__18164.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18165)))){
return (new shadow.dom.Coordinate(G__18119,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18164.cljs$core$IFn$_invoke$arity$2 ? pred__18164.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18165) : pred__18164.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18165)))){
return (new shadow.dom.Coordinate(self__.x,G__18119,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18119),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18119){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18119,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18123){
var extmap__5342__auto__ = (function (){var G__18177 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18123,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18123)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18177);
} else {
return G__18177;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18123),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18123),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18193,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18200 = k18193;
var G__18200__$1 = (((G__18200 instanceof cljs.core.Keyword))?G__18200.fqn:null);
switch (G__18200__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18193,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18202){
var vec__18206 = p__18202;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18206,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18206,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18192){
var self__ = this;
var G__18192__$1 = this;
return (new cljs.core.RecordIter((0),G__18192__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18194,other18195){
var self__ = this;
var this18194__$1 = this;
return (((!((other18195 == null)))) && ((((this18194__$1.constructor === other18195.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18194__$1.w,other18195.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18194__$1.h,other18195.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18194__$1.__extmap,other18195.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18193){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18213 = k18193;
var G__18213__$1 = (((G__18213 instanceof cljs.core.Keyword))?G__18213.fqn:null);
switch (G__18213__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18193);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18192){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18216 = cljs.core.keyword_identical_QMARK_;
var expr__18217 = k__5309__auto__;
if(cljs.core.truth_((pred__18216.cljs$core$IFn$_invoke$arity$2 ? pred__18216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18217) : pred__18216.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18217)))){
return (new shadow.dom.Size(G__18192,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18216.cljs$core$IFn$_invoke$arity$2 ? pred__18216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18217) : pred__18216.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18217)))){
return (new shadow.dom.Size(self__.w,G__18192,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18192),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18192){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18192,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18199){
var extmap__5342__auto__ = (function (){var G__18233 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18199,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18199)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18233);
} else {
return G__18233;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18199),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18199),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__19078 = (i + (1));
var G__19079 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19078;
ret = G__19079;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18264){
var vec__18269 = p__18264;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18269,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18269,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18277 = arguments.length;
switch (G__18277) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19094 = ps;
var G__19095 = (i + (1));
el__$1 = G__19094;
i = G__19095;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18293 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18293,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18293,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18293,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18300_19125 = cljs.core.seq(props);
var chunk__18301_19126 = null;
var count__18302_19127 = (0);
var i__18303_19128 = (0);
while(true){
if((i__18303_19128 < count__18302_19127)){
var vec__18319_19129 = chunk__18301_19126.cljs$core$IIndexed$_nth$arity$2(null,i__18303_19128);
var k_19130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18319_19129,(0),null);
var v_19131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18319_19129,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19130);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19130),v_19131);


var G__19132 = seq__18300_19125;
var G__19133 = chunk__18301_19126;
var G__19134 = count__18302_19127;
var G__19135 = (i__18303_19128 + (1));
seq__18300_19125 = G__19132;
chunk__18301_19126 = G__19133;
count__18302_19127 = G__19134;
i__18303_19128 = G__19135;
continue;
} else {
var temp__5804__auto___19140 = cljs.core.seq(seq__18300_19125);
if(temp__5804__auto___19140){
var seq__18300_19141__$1 = temp__5804__auto___19140;
if(cljs.core.chunked_seq_QMARK_(seq__18300_19141__$1)){
var c__5525__auto___19142 = cljs.core.chunk_first(seq__18300_19141__$1);
var G__19143 = cljs.core.chunk_rest(seq__18300_19141__$1);
var G__19144 = c__5525__auto___19142;
var G__19145 = cljs.core.count(c__5525__auto___19142);
var G__19146 = (0);
seq__18300_19125 = G__19143;
chunk__18301_19126 = G__19144;
count__18302_19127 = G__19145;
i__18303_19128 = G__19146;
continue;
} else {
var vec__18322_19147 = cljs.core.first(seq__18300_19141__$1);
var k_19148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18322_19147,(0),null);
var v_19149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18322_19147,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19148);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19148),v_19149);


var G__19153 = cljs.core.next(seq__18300_19141__$1);
var G__19154 = null;
var G__19155 = (0);
var G__19156 = (0);
seq__18300_19125 = G__19153;
chunk__18301_19126 = G__19154;
count__18302_19127 = G__19155;
i__18303_19128 = G__19156;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18329 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(1),null);
var seq__18334_19160 = cljs.core.seq(node_children);
var chunk__18336_19161 = null;
var count__18337_19162 = (0);
var i__18338_19163 = (0);
while(true){
if((i__18338_19163 < count__18337_19162)){
var child_struct_19164 = chunk__18336_19161.cljs$core$IIndexed$_nth$arity$2(null,i__18338_19163);
if((!((child_struct_19164 == null)))){
if(typeof child_struct_19164 === 'string'){
var text_19165 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19165),child_struct_19164].join(''));
} else {
var children_19167 = shadow.dom.svg_node(child_struct_19164);
if(cljs.core.seq_QMARK_(children_19167)){
var seq__18367_19168 = cljs.core.seq(children_19167);
var chunk__18369_19169 = null;
var count__18370_19170 = (0);
var i__18371_19171 = (0);
while(true){
if((i__18371_19171 < count__18370_19170)){
var child_19172 = chunk__18369_19169.cljs$core$IIndexed$_nth$arity$2(null,i__18371_19171);
if(cljs.core.truth_(child_19172)){
node.appendChild(child_19172);


var G__19173 = seq__18367_19168;
var G__19174 = chunk__18369_19169;
var G__19175 = count__18370_19170;
var G__19176 = (i__18371_19171 + (1));
seq__18367_19168 = G__19173;
chunk__18369_19169 = G__19174;
count__18370_19170 = G__19175;
i__18371_19171 = G__19176;
continue;
} else {
var G__19177 = seq__18367_19168;
var G__19178 = chunk__18369_19169;
var G__19179 = count__18370_19170;
var G__19180 = (i__18371_19171 + (1));
seq__18367_19168 = G__19177;
chunk__18369_19169 = G__19178;
count__18370_19170 = G__19179;
i__18371_19171 = G__19180;
continue;
}
} else {
var temp__5804__auto___19181 = cljs.core.seq(seq__18367_19168);
if(temp__5804__auto___19181){
var seq__18367_19182__$1 = temp__5804__auto___19181;
if(cljs.core.chunked_seq_QMARK_(seq__18367_19182__$1)){
var c__5525__auto___19183 = cljs.core.chunk_first(seq__18367_19182__$1);
var G__19184 = cljs.core.chunk_rest(seq__18367_19182__$1);
var G__19185 = c__5525__auto___19183;
var G__19186 = cljs.core.count(c__5525__auto___19183);
var G__19187 = (0);
seq__18367_19168 = G__19184;
chunk__18369_19169 = G__19185;
count__18370_19170 = G__19186;
i__18371_19171 = G__19187;
continue;
} else {
var child_19188 = cljs.core.first(seq__18367_19182__$1);
if(cljs.core.truth_(child_19188)){
node.appendChild(child_19188);


var G__19189 = cljs.core.next(seq__18367_19182__$1);
var G__19190 = null;
var G__19191 = (0);
var G__19192 = (0);
seq__18367_19168 = G__19189;
chunk__18369_19169 = G__19190;
count__18370_19170 = G__19191;
i__18371_19171 = G__19192;
continue;
} else {
var G__19196 = cljs.core.next(seq__18367_19182__$1);
var G__19197 = null;
var G__19198 = (0);
var G__19199 = (0);
seq__18367_19168 = G__19196;
chunk__18369_19169 = G__19197;
count__18370_19170 = G__19198;
i__18371_19171 = G__19199;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19167);
}
}


var G__19200 = seq__18334_19160;
var G__19201 = chunk__18336_19161;
var G__19202 = count__18337_19162;
var G__19203 = (i__18338_19163 + (1));
seq__18334_19160 = G__19200;
chunk__18336_19161 = G__19201;
count__18337_19162 = G__19202;
i__18338_19163 = G__19203;
continue;
} else {
var G__19204 = seq__18334_19160;
var G__19205 = chunk__18336_19161;
var G__19206 = count__18337_19162;
var G__19207 = (i__18338_19163 + (1));
seq__18334_19160 = G__19204;
chunk__18336_19161 = G__19205;
count__18337_19162 = G__19206;
i__18338_19163 = G__19207;
continue;
}
} else {
var temp__5804__auto___19208 = cljs.core.seq(seq__18334_19160);
if(temp__5804__auto___19208){
var seq__18334_19209__$1 = temp__5804__auto___19208;
if(cljs.core.chunked_seq_QMARK_(seq__18334_19209__$1)){
var c__5525__auto___19210 = cljs.core.chunk_first(seq__18334_19209__$1);
var G__19211 = cljs.core.chunk_rest(seq__18334_19209__$1);
var G__19212 = c__5525__auto___19210;
var G__19213 = cljs.core.count(c__5525__auto___19210);
var G__19214 = (0);
seq__18334_19160 = G__19211;
chunk__18336_19161 = G__19212;
count__18337_19162 = G__19213;
i__18338_19163 = G__19214;
continue;
} else {
var child_struct_19215 = cljs.core.first(seq__18334_19209__$1);
if((!((child_struct_19215 == null)))){
if(typeof child_struct_19215 === 'string'){
var text_19216 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19216),child_struct_19215].join(''));
} else {
var children_19217 = shadow.dom.svg_node(child_struct_19215);
if(cljs.core.seq_QMARK_(children_19217)){
var seq__18384_19218 = cljs.core.seq(children_19217);
var chunk__18386_19219 = null;
var count__18387_19220 = (0);
var i__18388_19221 = (0);
while(true){
if((i__18388_19221 < count__18387_19220)){
var child_19235 = chunk__18386_19219.cljs$core$IIndexed$_nth$arity$2(null,i__18388_19221);
if(cljs.core.truth_(child_19235)){
node.appendChild(child_19235);


var G__19236 = seq__18384_19218;
var G__19237 = chunk__18386_19219;
var G__19238 = count__18387_19220;
var G__19239 = (i__18388_19221 + (1));
seq__18384_19218 = G__19236;
chunk__18386_19219 = G__19237;
count__18387_19220 = G__19238;
i__18388_19221 = G__19239;
continue;
} else {
var G__19240 = seq__18384_19218;
var G__19241 = chunk__18386_19219;
var G__19242 = count__18387_19220;
var G__19243 = (i__18388_19221 + (1));
seq__18384_19218 = G__19240;
chunk__18386_19219 = G__19241;
count__18387_19220 = G__19242;
i__18388_19221 = G__19243;
continue;
}
} else {
var temp__5804__auto___19244__$1 = cljs.core.seq(seq__18384_19218);
if(temp__5804__auto___19244__$1){
var seq__18384_19245__$1 = temp__5804__auto___19244__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18384_19245__$1)){
var c__5525__auto___19246 = cljs.core.chunk_first(seq__18384_19245__$1);
var G__19251 = cljs.core.chunk_rest(seq__18384_19245__$1);
var G__19252 = c__5525__auto___19246;
var G__19253 = cljs.core.count(c__5525__auto___19246);
var G__19254 = (0);
seq__18384_19218 = G__19251;
chunk__18386_19219 = G__19252;
count__18387_19220 = G__19253;
i__18388_19221 = G__19254;
continue;
} else {
var child_19255 = cljs.core.first(seq__18384_19245__$1);
if(cljs.core.truth_(child_19255)){
node.appendChild(child_19255);


var G__19256 = cljs.core.next(seq__18384_19245__$1);
var G__19257 = null;
var G__19258 = (0);
var G__19259 = (0);
seq__18384_19218 = G__19256;
chunk__18386_19219 = G__19257;
count__18387_19220 = G__19258;
i__18388_19221 = G__19259;
continue;
} else {
var G__19260 = cljs.core.next(seq__18384_19245__$1);
var G__19261 = null;
var G__19262 = (0);
var G__19263 = (0);
seq__18384_19218 = G__19260;
chunk__18386_19219 = G__19261;
count__18387_19220 = G__19262;
i__18388_19221 = G__19263;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19217);
}
}


var G__19264 = cljs.core.next(seq__18334_19209__$1);
var G__19265 = null;
var G__19266 = (0);
var G__19267 = (0);
seq__18334_19160 = G__19264;
chunk__18336_19161 = G__19265;
count__18337_19162 = G__19266;
i__18338_19163 = G__19267;
continue;
} else {
var G__19268 = cljs.core.next(seq__18334_19209__$1);
var G__19269 = null;
var G__19270 = (0);
var G__19271 = (0);
seq__18334_19160 = G__19268;
chunk__18336_19161 = G__19269;
count__18337_19162 = G__19270;
i__18338_19163 = G__19271;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19272 = arguments.length;
var i__5727__auto___19273 = (0);
while(true){
if((i__5727__auto___19273 < len__5726__auto___19272)){
args__5732__auto__.push((arguments[i__5727__auto___19273]));

var G__19274 = (i__5727__auto___19273 + (1));
i__5727__auto___19273 = G__19274;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18408){
var G__18409 = cljs.core.first(seq18408);
var seq18408__$1 = cljs.core.next(seq18408);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18409,seq18408__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18411 = arguments.length;
switch (G__18411) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__13566__auto___19283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_18420){
var state_val_18421 = (state_18420[(1)]);
if((state_val_18421 === (1))){
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18420__$1,(2),once_or_cleanup);
} else {
if((state_val_18421 === (2))){
var inst_18417 = (state_18420[(2)]);
var inst_18418 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18420__$1 = (function (){var statearr_18425 = state_18420;
(statearr_18425[(7)] = inst_18417);

return statearr_18425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18420__$1,inst_18418);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13169__auto__ = null;
var shadow$dom$state_machine__13169__auto____0 = (function (){
var statearr_18426 = [null,null,null,null,null,null,null,null];
(statearr_18426[(0)] = shadow$dom$state_machine__13169__auto__);

(statearr_18426[(1)] = (1));

return statearr_18426;
});
var shadow$dom$state_machine__13169__auto____1 = (function (state_18420){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_18420);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e18427){var ex__13172__auto__ = e18427;
var statearr_18428_19289 = state_18420;
(statearr_18428_19289[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_18420[(4)]))){
var statearr_18430_19290 = state_18420;
(statearr_18430_19290[(1)] = cljs.core.first((state_18420[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19291 = state_18420;
state_18420 = G__19291;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
shadow$dom$state_machine__13169__auto__ = function(state_18420){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13169__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13169__auto____1.call(this,state_18420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13169__auto____0;
shadow$dom$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13169__auto____1;
return shadow$dom$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_18433 = f__13567__auto__();
(statearr_18433[(6)] = c__13566__auto___19283);

return statearr_18433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
