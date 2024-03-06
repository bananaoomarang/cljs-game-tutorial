goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13651 = (function (f,blockable,meta13652){
this.f = f;
this.blockable = blockable;
this.meta13652 = meta13652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13653,meta13652__$1){
var self__ = this;
var _13653__$1 = this;
return (new cljs.core.async.t_cljs$core$async13651(self__.f,self__.blockable,meta13652__$1));
}));

(cljs.core.async.t_cljs$core$async13651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13653){
var self__ = this;
var _13653__$1 = this;
return self__.meta13652;
}));

(cljs.core.async.t_cljs$core$async13651.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13651.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13652","meta13652",1061314771,null)], null);
}));

(cljs.core.async.t_cljs$core$async13651.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13651");

(cljs.core.async.t_cljs$core$async13651.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13651");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13651.
 */
cljs.core.async.__GT_t_cljs$core$async13651 = (function cljs$core$async$__GT_t_cljs$core$async13651(f,blockable,meta13652){
return (new cljs.core.async.t_cljs$core$async13651(f,blockable,meta13652));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13646 = arguments.length;
switch (G__13646) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13651(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13666 = arguments.length;
switch (G__13666) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13679 = arguments.length;
switch (G__13679) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13690 = arguments.length;
switch (G__13690) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17006 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17006) : fn1.call(null,val_17006));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17006) : fn1.call(null,val_17006));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13717 = arguments.length;
switch (G__13717) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17008 = n;
var x_17009 = (0);
while(true){
if((x_17009 < n__5593__auto___17008)){
(a[x_17009] = x_17009);

var G__17010 = (x_17009 + (1));
x_17009 = G__17010;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13771 = (function (flag,meta13772){
this.flag = flag;
this.meta13772 = meta13772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13773,meta13772__$1){
var self__ = this;
var _13773__$1 = this;
return (new cljs.core.async.t_cljs$core$async13771(self__.flag,meta13772__$1));
}));

(cljs.core.async.t_cljs$core$async13771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13773){
var self__ = this;
var _13773__$1 = this;
return self__.meta13772;
}));

(cljs.core.async.t_cljs$core$async13771.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13772","meta13772",514079502,null)], null);
}));

(cljs.core.async.t_cljs$core$async13771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13771");

(cljs.core.async.t_cljs$core$async13771.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13771.
 */
cljs.core.async.__GT_t_cljs$core$async13771 = (function cljs$core$async$__GT_t_cljs$core$async13771(flag,meta13772){
return (new cljs.core.async.t_cljs$core$async13771(flag,meta13772));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13771(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13804 = (function (flag,cb,meta13805){
this.flag = flag;
this.cb = cb;
this.meta13805 = meta13805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13806,meta13805__$1){
var self__ = this;
var _13806__$1 = this;
return (new cljs.core.async.t_cljs$core$async13804(self__.flag,self__.cb,meta13805__$1));
}));

(cljs.core.async.t_cljs$core$async13804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13806){
var self__ = this;
var _13806__$1 = this;
return self__.meta13805;
}));

(cljs.core.async.t_cljs$core$async13804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13805","meta13805",95084158,null)], null);
}));

(cljs.core.async.t_cljs$core$async13804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13804");

(cljs.core.async.t_cljs$core$async13804.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13804.
 */
cljs.core.async.__GT_t_cljs$core$async13804 = (function cljs$core$async$__GT_t_cljs$core$async13804(flag,cb,meta13805){
return (new cljs.core.async.t_cljs$core$async13804(flag,cb,meta13805));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13804(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13837_SHARP_){
var G__13853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13837_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13853) : fret.call(null,G__13853));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13839_SHARP_){
var G__13855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13839_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13855) : fret.call(null,G__13855));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17031 = (i + (1));
i = G__17031;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17032 = arguments.length;
var i__5727__auto___17033 = (0);
while(true){
if((i__5727__auto___17033 < len__5726__auto___17032)){
args__5732__auto__.push((arguments[i__5727__auto___17033]));

var G__17034 = (i__5727__auto___17033 + (1));
i__5727__auto___17033 = G__17034;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13871){
var map__13872 = p__13871;
var map__13872__$1 = cljs.core.__destructure_map(map__13872);
var opts = map__13872__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13863){
var G__13864 = cljs.core.first(seq13863);
var seq13863__$1 = cljs.core.next(seq13863);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13864,seq13863__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13890 = arguments.length;
switch (G__13890) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13566__auto___17036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_13934){
var state_val_13935 = (state_13934[(1)]);
if((state_val_13935 === (7))){
var inst_13929 = (state_13934[(2)]);
var state_13934__$1 = state_13934;
var statearr_13961_17037 = state_13934__$1;
(statearr_13961_17037[(2)] = inst_13929);

(statearr_13961_17037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13935 === (1))){
var state_13934__$1 = state_13934;
var statearr_13965_17038 = state_13934__$1;
(statearr_13965_17038[(2)] = null);

(statearr_13965_17038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13935 === (4))){
var inst_13908 = (state_13934[(7)]);
var inst_13908__$1 = (state_13934[(2)]);
var inst_13909 = (inst_13908__$1 == null);
var state_13934__$1 = (function (){var statearr_13966 = state_13934;
(statearr_13966[(7)] = inst_13908__$1);

return statearr_13966;
})();
if(cljs.core.truth_(inst_13909)){
var statearr_13976_17039 = state_13934__$1;
(statearr_13976_17039[(1)] = (5));

} else {
var statearr_13977_17040 = state_13934__$1;
(statearr_13977_17040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13935 === (13))){
var state_13934__$1 = state_13934;
var statearr_13992_17041 = state_13934__$1;
(statearr_13992_17041[(2)] = null);

(statearr_13992_17041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13935 === (6))){
var inst_13908 = (state_13934[(7)]);
var state_13934__$1 = state_13934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13934__$1,(11),to,inst_13908);
} else {
if((state_val_13935 === (3))){
var inst_13931 = (state_13934[(2)]);
var state_13934__$1 = state_13934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13934__$1,inst_13931);
} else {
if((state_val_13935 === (12))){
var state_13934__$1 = state_13934;
var statearr_13999_17044 = state_13934__$1;
(statearr_13999_17044[(2)] = null);

(statearr_13999_17044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13935 === (2))){
var state_13934__$1 = state_13934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13934__$1,(4),from);
} else {
if((state_val_13935 === (11))){
var inst_13922 = (state_13934[(2)]);
var state_13934__$1 = state_13934;
if(cljs.core.truth_(inst_13922)){
var statearr_14001_17045 = state_13934__$1;
(statearr_14001_17045[(1)] = (12));

} else {
var statearr_14004_17046 = state_13934__$1;
(statearr_14004_17046[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13935 === (9))){
var state_13934__$1 = state_13934;
var statearr_14015_17047 = state_13934__$1;
(statearr_14015_17047[(2)] = null);

(statearr_14015_17047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13935 === (5))){
var state_13934__$1 = state_13934;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14024_17048 = state_13934__$1;
(statearr_14024_17048[(1)] = (8));

} else {
var statearr_14029_17049 = state_13934__$1;
(statearr_14029_17049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13935 === (14))){
var inst_13927 = (state_13934[(2)]);
var state_13934__$1 = state_13934;
var statearr_14031_17050 = state_13934__$1;
(statearr_14031_17050[(2)] = inst_13927);

(statearr_14031_17050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13935 === (10))){
var inst_13919 = (state_13934[(2)]);
var state_13934__$1 = state_13934;
var statearr_14034_17051 = state_13934__$1;
(statearr_14034_17051[(2)] = inst_13919);

(statearr_14034_17051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13935 === (8))){
var inst_13913 = cljs.core.async.close_BANG_(to);
var state_13934__$1 = state_13934;
var statearr_14037_17052 = state_13934__$1;
(statearr_14037_17052[(2)] = inst_13913);

(statearr_14037_17052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13169__auto__ = null;
var cljs$core$async$state_machine__13169__auto____0 = (function (){
var statearr_14047 = [null,null,null,null,null,null,null,null];
(statearr_14047[(0)] = cljs$core$async$state_machine__13169__auto__);

(statearr_14047[(1)] = (1));

return statearr_14047;
});
var cljs$core$async$state_machine__13169__auto____1 = (function (state_13934){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_13934);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e14056){var ex__13172__auto__ = e14056;
var statearr_14061_17053 = state_13934;
(statearr_14061_17053[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_13934[(4)]))){
var statearr_14062_17054 = state_13934;
(statearr_14062_17054[(1)] = cljs.core.first((state_13934[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17055 = state_13934;
state_13934 = G__17055;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$state_machine__13169__auto__ = function(state_13934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13169__auto____1.call(this,state_13934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13169__auto____0;
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13169__auto____1;
return cljs$core$async$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_14078 = f__13567__auto__();
(statearr_14078[(6)] = c__13566__auto___17036);

return statearr_14078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14118){
var vec__14119 = p__14118;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14119,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14119,(1),null);
var job = vec__14119;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13566__auto___17058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_14134){
var state_val_14135 = (state_14134[(1)]);
if((state_val_14135 === (1))){
var state_14134__$1 = state_14134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14134__$1,(2),res,v);
} else {
if((state_val_14135 === (2))){
var inst_14131 = (state_14134[(2)]);
var inst_14132 = cljs.core.async.close_BANG_(res);
var state_14134__$1 = (function (){var statearr_14148 = state_14134;
(statearr_14148[(7)] = inst_14131);

return statearr_14148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14134__$1,inst_14132);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0 = (function (){
var statearr_14150 = [null,null,null,null,null,null,null,null];
(statearr_14150[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__);

(statearr_14150[(1)] = (1));

return statearr_14150;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1 = (function (state_14134){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_14134);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e14153){var ex__13172__auto__ = e14153;
var statearr_14156_17071 = state_14134;
(statearr_14156_17071[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_14134[(4)]))){
var statearr_14157_17072 = state_14134;
(statearr_14157_17072[(1)] = cljs.core.first((state_14134[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17073 = state_14134;
state_14134 = G__17073;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__ = function(state_14134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1.call(this,state_14134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_14159 = f__13567__auto__();
(statearr_14159[(6)] = c__13566__auto___17058);

return statearr_14159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14161){
var vec__14163 = p__14161;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14163,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14163,(1),null);
var job = vec__14163;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17074 = n;
var __17075 = (0);
while(true){
if((__17075 < n__5593__auto___17074)){
var G__14169_17076 = type;
var G__14169_17077__$1 = (((G__14169_17076 instanceof cljs.core.Keyword))?G__14169_17076.fqn:null);
switch (G__14169_17077__$1) {
case "compute":
var c__13566__auto___17079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17075,c__13566__auto___17079,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async){
return (function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = ((function (__17075,c__13566__auto___17079,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async){
return (function (state_14182){
var state_val_14183 = (state_14182[(1)]);
if((state_val_14183 === (1))){
var state_14182__$1 = state_14182;
var statearr_14185_17081 = state_14182__$1;
(statearr_14185_17081[(2)] = null);

(statearr_14185_17081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (2))){
var state_14182__$1 = state_14182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14182__$1,(4),jobs);
} else {
if((state_val_14183 === (3))){
var inst_14180 = (state_14182[(2)]);
var state_14182__$1 = state_14182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14182__$1,inst_14180);
} else {
if((state_val_14183 === (4))){
var inst_14172 = (state_14182[(2)]);
var inst_14173 = process__$1(inst_14172);
var state_14182__$1 = state_14182;
if(cljs.core.truth_(inst_14173)){
var statearr_14190_17082 = state_14182__$1;
(statearr_14190_17082[(1)] = (5));

} else {
var statearr_14191_17083 = state_14182__$1;
(statearr_14191_17083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (5))){
var state_14182__$1 = state_14182;
var statearr_14192_17086 = state_14182__$1;
(statearr_14192_17086[(2)] = null);

(statearr_14192_17086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (6))){
var state_14182__$1 = state_14182;
var statearr_14193_17088 = state_14182__$1;
(statearr_14193_17088[(2)] = null);

(statearr_14193_17088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14183 === (7))){
var inst_14178 = (state_14182[(2)]);
var state_14182__$1 = state_14182;
var statearr_14195_17089 = state_14182__$1;
(statearr_14195_17089[(2)] = inst_14178);

(statearr_14195_17089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17075,c__13566__auto___17079,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async))
;
return ((function (__17075,switch__13168__auto__,c__13566__auto___17079,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0 = (function (){
var statearr_14198 = [null,null,null,null,null,null,null];
(statearr_14198[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__);

(statearr_14198[(1)] = (1));

return statearr_14198;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1 = (function (state_14182){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_14182);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e14201){var ex__13172__auto__ = e14201;
var statearr_14202_17090 = state_14182;
(statearr_14202_17090[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_14182[(4)]))){
var statearr_14203_17091 = state_14182;
(statearr_14203_17091[(1)] = cljs.core.first((state_14182[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17093 = state_14182;
state_14182 = G__17093;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__ = function(state_14182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1.call(this,state_14182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__;
})()
;})(__17075,switch__13168__auto__,c__13566__auto___17079,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async))
})();
var state__13568__auto__ = (function (){var statearr_14205 = f__13567__auto__();
(statearr_14205[(6)] = c__13566__auto___17079);

return statearr_14205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
});})(__17075,c__13566__auto___17079,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async))
);


break;
case "async":
var c__13566__auto___17094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17075,c__13566__auto___17094,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async){
return (function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = ((function (__17075,c__13566__auto___17094,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async){
return (function (state_14222){
var state_val_14223 = (state_14222[(1)]);
if((state_val_14223 === (1))){
var state_14222__$1 = state_14222;
var statearr_14229_17095 = state_14222__$1;
(statearr_14229_17095[(2)] = null);

(statearr_14229_17095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (2))){
var state_14222__$1 = state_14222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14222__$1,(4),jobs);
} else {
if((state_val_14223 === (3))){
var inst_14220 = (state_14222[(2)]);
var state_14222__$1 = state_14222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14222__$1,inst_14220);
} else {
if((state_val_14223 === (4))){
var inst_14211 = (state_14222[(2)]);
var inst_14212 = async(inst_14211);
var state_14222__$1 = state_14222;
if(cljs.core.truth_(inst_14212)){
var statearr_14233_17096 = state_14222__$1;
(statearr_14233_17096[(1)] = (5));

} else {
var statearr_14234_17097 = state_14222__$1;
(statearr_14234_17097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (5))){
var state_14222__$1 = state_14222;
var statearr_14235_17098 = state_14222__$1;
(statearr_14235_17098[(2)] = null);

(statearr_14235_17098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (6))){
var state_14222__$1 = state_14222;
var statearr_14236_17099 = state_14222__$1;
(statearr_14236_17099[(2)] = null);

(statearr_14236_17099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14223 === (7))){
var inst_14218 = (state_14222[(2)]);
var state_14222__$1 = state_14222;
var statearr_14237_17100 = state_14222__$1;
(statearr_14237_17100[(2)] = inst_14218);

(statearr_14237_17100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17075,c__13566__auto___17094,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async))
;
return ((function (__17075,switch__13168__auto__,c__13566__auto___17094,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0 = (function (){
var statearr_14238 = [null,null,null,null,null,null,null];
(statearr_14238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__);

(statearr_14238[(1)] = (1));

return statearr_14238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1 = (function (state_14222){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_14222);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e14239){var ex__13172__auto__ = e14239;
var statearr_14240_17101 = state_14222;
(statearr_14240_17101[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_14222[(4)]))){
var statearr_14241_17102 = state_14222;
(statearr_14241_17102[(1)] = cljs.core.first((state_14222[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17103 = state_14222;
state_14222 = G__17103;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__ = function(state_14222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1.call(this,state_14222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__;
})()
;})(__17075,switch__13168__auto__,c__13566__auto___17094,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async))
})();
var state__13568__auto__ = (function (){var statearr_14242 = f__13567__auto__();
(statearr_14242[(6)] = c__13566__auto___17094);

return statearr_14242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
});})(__17075,c__13566__auto___17094,G__14169_17076,G__14169_17077__$1,n__5593__auto___17074,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14169_17077__$1)].join('')));

}

var G__17105 = (__17075 + (1));
__17075 = G__17105;
continue;
} else {
}
break;
}

var c__13566__auto___17106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_14276){
var state_val_14277 = (state_14276[(1)]);
if((state_val_14277 === (7))){
var inst_14270 = (state_14276[(2)]);
var state_14276__$1 = state_14276;
var statearr_14283_17108 = state_14276__$1;
(statearr_14283_17108[(2)] = inst_14270);

(statearr_14283_17108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14277 === (1))){
var state_14276__$1 = state_14276;
var statearr_14285_17109 = state_14276__$1;
(statearr_14285_17109[(2)] = null);

(statearr_14285_17109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14277 === (4))){
var inst_14250 = (state_14276[(7)]);
var inst_14250__$1 = (state_14276[(2)]);
var inst_14251 = (inst_14250__$1 == null);
var state_14276__$1 = (function (){var statearr_14289 = state_14276;
(statearr_14289[(7)] = inst_14250__$1);

return statearr_14289;
})();
if(cljs.core.truth_(inst_14251)){
var statearr_14290_17111 = state_14276__$1;
(statearr_14290_17111[(1)] = (5));

} else {
var statearr_14293_17112 = state_14276__$1;
(statearr_14293_17112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14277 === (6))){
var inst_14257 = (state_14276[(8)]);
var inst_14250 = (state_14276[(7)]);
var inst_14257__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14262 = [inst_14250,inst_14257__$1];
var inst_14263 = (new cljs.core.PersistentVector(null,2,(5),inst_14260,inst_14262,null));
var state_14276__$1 = (function (){var statearr_14297 = state_14276;
(statearr_14297[(8)] = inst_14257__$1);

return statearr_14297;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14276__$1,(8),jobs,inst_14263);
} else {
if((state_val_14277 === (3))){
var inst_14272 = (state_14276[(2)]);
var state_14276__$1 = state_14276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14276__$1,inst_14272);
} else {
if((state_val_14277 === (2))){
var state_14276__$1 = state_14276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14276__$1,(4),from);
} else {
if((state_val_14277 === (9))){
var inst_14267 = (state_14276[(2)]);
var state_14276__$1 = (function (){var statearr_14307 = state_14276;
(statearr_14307[(9)] = inst_14267);

return statearr_14307;
})();
var statearr_14309_17113 = state_14276__$1;
(statearr_14309_17113[(2)] = null);

(statearr_14309_17113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14277 === (5))){
var inst_14254 = cljs.core.async.close_BANG_(jobs);
var state_14276__$1 = state_14276;
var statearr_14313_17117 = state_14276__$1;
(statearr_14313_17117[(2)] = inst_14254);

(statearr_14313_17117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14277 === (8))){
var inst_14257 = (state_14276[(8)]);
var inst_14265 = (state_14276[(2)]);
var state_14276__$1 = (function (){var statearr_14314 = state_14276;
(statearr_14314[(10)] = inst_14265);

return statearr_14314;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14276__$1,(9),results,inst_14257);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0 = (function (){
var statearr_14321 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14321[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__);

(statearr_14321[(1)] = (1));

return statearr_14321;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1 = (function (state_14276){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_14276);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e14327){var ex__13172__auto__ = e14327;
var statearr_14328_17120 = state_14276;
(statearr_14328_17120[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_14276[(4)]))){
var statearr_14331_17121 = state_14276;
(statearr_14331_17121[(1)] = cljs.core.first((state_14276[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17122 = state_14276;
state_14276 = G__17122;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__ = function(state_14276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1.call(this,state_14276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_14335 = f__13567__auto__();
(statearr_14335[(6)] = c__13566__auto___17106);

return statearr_14335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


var c__13566__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_14381){
var state_val_14382 = (state_14381[(1)]);
if((state_val_14382 === (7))){
var inst_14377 = (state_14381[(2)]);
var state_14381__$1 = state_14381;
var statearr_14387_17124 = state_14381__$1;
(statearr_14387_17124[(2)] = inst_14377);

(statearr_14387_17124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (20))){
var state_14381__$1 = state_14381;
var statearr_14388_17125 = state_14381__$1;
(statearr_14388_17125[(2)] = null);

(statearr_14388_17125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (1))){
var state_14381__$1 = state_14381;
var statearr_14391_17127 = state_14381__$1;
(statearr_14391_17127[(2)] = null);

(statearr_14391_17127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (4))){
var inst_14343 = (state_14381[(7)]);
var inst_14343__$1 = (state_14381[(2)]);
var inst_14344 = (inst_14343__$1 == null);
var state_14381__$1 = (function (){var statearr_14393 = state_14381;
(statearr_14393[(7)] = inst_14343__$1);

return statearr_14393;
})();
if(cljs.core.truth_(inst_14344)){
var statearr_14394_17129 = state_14381__$1;
(statearr_14394_17129[(1)] = (5));

} else {
var statearr_14395_17130 = state_14381__$1;
(statearr_14395_17130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (15))){
var inst_14358 = (state_14381[(8)]);
var state_14381__$1 = state_14381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14381__$1,(18),to,inst_14358);
} else {
if((state_val_14382 === (21))){
var inst_14372 = (state_14381[(2)]);
var state_14381__$1 = state_14381;
var statearr_14400_17131 = state_14381__$1;
(statearr_14400_17131[(2)] = inst_14372);

(statearr_14400_17131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (13))){
var inst_14374 = (state_14381[(2)]);
var state_14381__$1 = (function (){var statearr_14401 = state_14381;
(statearr_14401[(9)] = inst_14374);

return statearr_14401;
})();
var statearr_14402_17132 = state_14381__$1;
(statearr_14402_17132[(2)] = null);

(statearr_14402_17132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (6))){
var inst_14343 = (state_14381[(7)]);
var state_14381__$1 = state_14381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14381__$1,(11),inst_14343);
} else {
if((state_val_14382 === (17))){
var inst_14367 = (state_14381[(2)]);
var state_14381__$1 = state_14381;
if(cljs.core.truth_(inst_14367)){
var statearr_14408_17133 = state_14381__$1;
(statearr_14408_17133[(1)] = (19));

} else {
var statearr_14411_17134 = state_14381__$1;
(statearr_14411_17134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (3))){
var inst_14379 = (state_14381[(2)]);
var state_14381__$1 = state_14381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14381__$1,inst_14379);
} else {
if((state_val_14382 === (12))){
var inst_14355 = (state_14381[(10)]);
var state_14381__$1 = state_14381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14381__$1,(14),inst_14355);
} else {
if((state_val_14382 === (2))){
var state_14381__$1 = state_14381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14381__$1,(4),results);
} else {
if((state_val_14382 === (19))){
var state_14381__$1 = state_14381;
var statearr_14418_17137 = state_14381__$1;
(statearr_14418_17137[(2)] = null);

(statearr_14418_17137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (11))){
var inst_14355 = (state_14381[(2)]);
var state_14381__$1 = (function (){var statearr_14420 = state_14381;
(statearr_14420[(10)] = inst_14355);

return statearr_14420;
})();
var statearr_14421_17139 = state_14381__$1;
(statearr_14421_17139[(2)] = null);

(statearr_14421_17139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (9))){
var state_14381__$1 = state_14381;
var statearr_14423_17140 = state_14381__$1;
(statearr_14423_17140[(2)] = null);

(statearr_14423_17140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (5))){
var state_14381__$1 = state_14381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14424_17141 = state_14381__$1;
(statearr_14424_17141[(1)] = (8));

} else {
var statearr_14425_17142 = state_14381__$1;
(statearr_14425_17142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (14))){
var inst_14358 = (state_14381[(8)]);
var inst_14361 = (state_14381[(11)]);
var inst_14358__$1 = (state_14381[(2)]);
var inst_14360 = (inst_14358__$1 == null);
var inst_14361__$1 = cljs.core.not(inst_14360);
var state_14381__$1 = (function (){var statearr_14427 = state_14381;
(statearr_14427[(8)] = inst_14358__$1);

(statearr_14427[(11)] = inst_14361__$1);

return statearr_14427;
})();
if(inst_14361__$1){
var statearr_14429_17143 = state_14381__$1;
(statearr_14429_17143[(1)] = (15));

} else {
var statearr_14430_17144 = state_14381__$1;
(statearr_14430_17144[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (16))){
var inst_14361 = (state_14381[(11)]);
var state_14381__$1 = state_14381;
var statearr_14435_17145 = state_14381__$1;
(statearr_14435_17145[(2)] = inst_14361);

(statearr_14435_17145[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (10))){
var inst_14352 = (state_14381[(2)]);
var state_14381__$1 = state_14381;
var statearr_14437_17146 = state_14381__$1;
(statearr_14437_17146[(2)] = inst_14352);

(statearr_14437_17146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (18))){
var inst_14364 = (state_14381[(2)]);
var state_14381__$1 = state_14381;
var statearr_14438_17147 = state_14381__$1;
(statearr_14438_17147[(2)] = inst_14364);

(statearr_14438_17147[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14382 === (8))){
var inst_14349 = cljs.core.async.close_BANG_(to);
var state_14381__$1 = state_14381;
var statearr_14439_17149 = state_14381__$1;
(statearr_14439_17149[(2)] = inst_14349);

(statearr_14439_17149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0 = (function (){
var statearr_14445 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14445[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__);

(statearr_14445[(1)] = (1));

return statearr_14445;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1 = (function (state_14381){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_14381);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e14446){var ex__13172__auto__ = e14446;
var statearr_14447_17152 = state_14381;
(statearr_14447_17152[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_14381[(4)]))){
var statearr_14450_17153 = state_14381;
(statearr_14450_17153[(1)] = cljs.core.first((state_14381[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17154 = state_14381;
state_14381 = G__17154;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__ = function(state_14381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1.call(this,state_14381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13169__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_14454 = f__13567__auto__();
(statearr_14454[(6)] = c__13566__auto__);

return statearr_14454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));

return c__13566__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14468 = arguments.length;
switch (G__14468) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14483 = arguments.length;
switch (G__14483) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14493 = arguments.length;
switch (G__14493) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13566__auto___17164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_14526){
var state_val_14529 = (state_14526[(1)]);
if((state_val_14529 === (7))){
var inst_14522 = (state_14526[(2)]);
var state_14526__$1 = state_14526;
var statearr_14534_17165 = state_14526__$1;
(statearr_14534_17165[(2)] = inst_14522);

(statearr_14534_17165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (1))){
var state_14526__$1 = state_14526;
var statearr_14535_17166 = state_14526__$1;
(statearr_14535_17166[(2)] = null);

(statearr_14535_17166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (4))){
var inst_14501 = (state_14526[(7)]);
var inst_14501__$1 = (state_14526[(2)]);
var inst_14502 = (inst_14501__$1 == null);
var state_14526__$1 = (function (){var statearr_14537 = state_14526;
(statearr_14537[(7)] = inst_14501__$1);

return statearr_14537;
})();
if(cljs.core.truth_(inst_14502)){
var statearr_14538_17167 = state_14526__$1;
(statearr_14538_17167[(1)] = (5));

} else {
var statearr_14539_17168 = state_14526__$1;
(statearr_14539_17168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (13))){
var state_14526__$1 = state_14526;
var statearr_14541_17171 = state_14526__$1;
(statearr_14541_17171[(2)] = null);

(statearr_14541_17171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (6))){
var inst_14501 = (state_14526[(7)]);
var inst_14508 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14501) : p.call(null,inst_14501));
var state_14526__$1 = state_14526;
if(cljs.core.truth_(inst_14508)){
var statearr_14543_17173 = state_14526__$1;
(statearr_14543_17173[(1)] = (9));

} else {
var statearr_14544_17174 = state_14526__$1;
(statearr_14544_17174[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (3))){
var inst_14524 = (state_14526[(2)]);
var state_14526__$1 = state_14526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14526__$1,inst_14524);
} else {
if((state_val_14529 === (12))){
var state_14526__$1 = state_14526;
var statearr_14545_17175 = state_14526__$1;
(statearr_14545_17175[(2)] = null);

(statearr_14545_17175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (2))){
var state_14526__$1 = state_14526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14526__$1,(4),ch);
} else {
if((state_val_14529 === (11))){
var inst_14501 = (state_14526[(7)]);
var inst_14513 = (state_14526[(2)]);
var state_14526__$1 = state_14526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14526__$1,(8),inst_14513,inst_14501);
} else {
if((state_val_14529 === (9))){
var state_14526__$1 = state_14526;
var statearr_14549_17180 = state_14526__$1;
(statearr_14549_17180[(2)] = tc);

(statearr_14549_17180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (5))){
var inst_14504 = cljs.core.async.close_BANG_(tc);
var inst_14505 = cljs.core.async.close_BANG_(fc);
var state_14526__$1 = (function (){var statearr_14551 = state_14526;
(statearr_14551[(8)] = inst_14504);

return statearr_14551;
})();
var statearr_14552_17184 = state_14526__$1;
(statearr_14552_17184[(2)] = inst_14505);

(statearr_14552_17184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (14))){
var inst_14520 = (state_14526[(2)]);
var state_14526__$1 = state_14526;
var statearr_14553_17191 = state_14526__$1;
(statearr_14553_17191[(2)] = inst_14520);

(statearr_14553_17191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (10))){
var state_14526__$1 = state_14526;
var statearr_14554_17198 = state_14526__$1;
(statearr_14554_17198[(2)] = fc);

(statearr_14554_17198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14529 === (8))){
var inst_14515 = (state_14526[(2)]);
var state_14526__$1 = state_14526;
if(cljs.core.truth_(inst_14515)){
var statearr_14556_17203 = state_14526__$1;
(statearr_14556_17203[(1)] = (12));

} else {
var statearr_14557_17204 = state_14526__$1;
(statearr_14557_17204[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13169__auto__ = null;
var cljs$core$async$state_machine__13169__auto____0 = (function (){
var statearr_14559 = [null,null,null,null,null,null,null,null,null];
(statearr_14559[(0)] = cljs$core$async$state_machine__13169__auto__);

(statearr_14559[(1)] = (1));

return statearr_14559;
});
var cljs$core$async$state_machine__13169__auto____1 = (function (state_14526){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_14526);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e14560){var ex__13172__auto__ = e14560;
var statearr_14561_17218 = state_14526;
(statearr_14561_17218[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_14526[(4)]))){
var statearr_14562_17221 = state_14526;
(statearr_14562_17221[(1)] = cljs.core.first((state_14526[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17227 = state_14526;
state_14526 = G__17227;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$state_machine__13169__auto__ = function(state_14526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13169__auto____1.call(this,state_14526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13169__auto____0;
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13169__auto____1;
return cljs$core$async$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_14569 = f__13567__auto__();
(statearr_14569[(6)] = c__13566__auto___17164);

return statearr_14569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13566__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_14608){
var state_val_14609 = (state_14608[(1)]);
if((state_val_14609 === (7))){
var inst_14604 = (state_14608[(2)]);
var state_14608__$1 = state_14608;
var statearr_14614_17237 = state_14608__$1;
(statearr_14614_17237[(2)] = inst_14604);

(statearr_14614_17237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (1))){
var inst_14584 = init;
var inst_14585 = inst_14584;
var state_14608__$1 = (function (){var statearr_14615 = state_14608;
(statearr_14615[(7)] = inst_14585);

return statearr_14615;
})();
var statearr_14616_17238 = state_14608__$1;
(statearr_14616_17238[(2)] = null);

(statearr_14616_17238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (4))){
var inst_14589 = (state_14608[(8)]);
var inst_14589__$1 = (state_14608[(2)]);
var inst_14590 = (inst_14589__$1 == null);
var state_14608__$1 = (function (){var statearr_14617 = state_14608;
(statearr_14617[(8)] = inst_14589__$1);

return statearr_14617;
})();
if(cljs.core.truth_(inst_14590)){
var statearr_14618_17246 = state_14608__$1;
(statearr_14618_17246[(1)] = (5));

} else {
var statearr_14619_17247 = state_14608__$1;
(statearr_14619_17247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (6))){
var inst_14589 = (state_14608[(8)]);
var inst_14593 = (state_14608[(9)]);
var inst_14585 = (state_14608[(7)]);
var inst_14593__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14585,inst_14589) : f.call(null,inst_14585,inst_14589));
var inst_14594 = cljs.core.reduced_QMARK_(inst_14593__$1);
var state_14608__$1 = (function (){var statearr_14621 = state_14608;
(statearr_14621[(9)] = inst_14593__$1);

return statearr_14621;
})();
if(inst_14594){
var statearr_14622_17255 = state_14608__$1;
(statearr_14622_17255[(1)] = (8));

} else {
var statearr_14623_17256 = state_14608__$1;
(statearr_14623_17256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (3))){
var inst_14606 = (state_14608[(2)]);
var state_14608__$1 = state_14608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14608__$1,inst_14606);
} else {
if((state_val_14609 === (2))){
var state_14608__$1 = state_14608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14608__$1,(4),ch);
} else {
if((state_val_14609 === (9))){
var inst_14593 = (state_14608[(9)]);
var inst_14585 = inst_14593;
var state_14608__$1 = (function (){var statearr_14625 = state_14608;
(statearr_14625[(7)] = inst_14585);

return statearr_14625;
})();
var statearr_14626_17257 = state_14608__$1;
(statearr_14626_17257[(2)] = null);

(statearr_14626_17257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (5))){
var inst_14585 = (state_14608[(7)]);
var state_14608__$1 = state_14608;
var statearr_14627_17258 = state_14608__$1;
(statearr_14627_17258[(2)] = inst_14585);

(statearr_14627_17258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (10))){
var inst_14602 = (state_14608[(2)]);
var state_14608__$1 = state_14608;
var statearr_14628_17259 = state_14608__$1;
(statearr_14628_17259[(2)] = inst_14602);

(statearr_14628_17259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14609 === (8))){
var inst_14593 = (state_14608[(9)]);
var inst_14598 = cljs.core.deref(inst_14593);
var state_14608__$1 = state_14608;
var statearr_14629_17260 = state_14608__$1;
(statearr_14629_17260[(2)] = inst_14598);

(statearr_14629_17260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13169__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13169__auto____0 = (function (){
var statearr_14631 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14631[(0)] = cljs$core$async$reduce_$_state_machine__13169__auto__);

(statearr_14631[(1)] = (1));

return statearr_14631;
});
var cljs$core$async$reduce_$_state_machine__13169__auto____1 = (function (state_14608){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_14608);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e14632){var ex__13172__auto__ = e14632;
var statearr_14633_17264 = state_14608;
(statearr_14633_17264[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_14608[(4)]))){
var statearr_14635_17265 = state_14608;
(statearr_14635_17265[(1)] = cljs.core.first((state_14608[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17267 = state_14608;
state_14608 = G__17267;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13169__auto__ = function(state_14608){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13169__auto____1.call(this,state_14608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13169__auto____0;
cljs$core$async$reduce_$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13169__auto____1;
return cljs$core$async$reduce_$_state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_14638 = f__13567__auto__();
(statearr_14638[(6)] = c__13566__auto__);

return statearr_14638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));

return c__13566__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13566__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_14650){
var state_val_14651 = (state_14650[(1)]);
if((state_val_14651 === (1))){
var inst_14645 = cljs.core.async.reduce(f__$1,init,ch);
var state_14650__$1 = state_14650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14650__$1,(2),inst_14645);
} else {
if((state_val_14651 === (2))){
var inst_14647 = (state_14650[(2)]);
var inst_14648 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14647) : f__$1.call(null,inst_14647));
var state_14650__$1 = state_14650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14650__$1,inst_14648);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13169__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13169__auto____0 = (function (){
var statearr_14660 = [null,null,null,null,null,null,null];
(statearr_14660[(0)] = cljs$core$async$transduce_$_state_machine__13169__auto__);

(statearr_14660[(1)] = (1));

return statearr_14660;
});
var cljs$core$async$transduce_$_state_machine__13169__auto____1 = (function (state_14650){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_14650);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e14661){var ex__13172__auto__ = e14661;
var statearr_14662_17275 = state_14650;
(statearr_14662_17275[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_14650[(4)]))){
var statearr_14666_17276 = state_14650;
(statearr_14666_17276[(1)] = cljs.core.first((state_14650[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17278 = state_14650;
state_14650 = G__17278;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13169__auto__ = function(state_14650){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13169__auto____1.call(this,state_14650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13169__auto____0;
cljs$core$async$transduce_$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13169__auto____1;
return cljs$core$async$transduce_$_state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_14667 = f__13567__auto__();
(statearr_14667[(6)] = c__13566__auto__);

return statearr_14667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));

return c__13566__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14669 = arguments.length;
switch (G__14669) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13566__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_14701){
var state_val_14702 = (state_14701[(1)]);
if((state_val_14702 === (7))){
var inst_14683 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
var statearr_14709_17281 = state_14701__$1;
(statearr_14709_17281[(2)] = inst_14683);

(statearr_14709_17281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (1))){
var inst_14676 = cljs.core.seq(coll);
var inst_14677 = inst_14676;
var state_14701__$1 = (function (){var statearr_14710 = state_14701;
(statearr_14710[(7)] = inst_14677);

return statearr_14710;
})();
var statearr_14711_17283 = state_14701__$1;
(statearr_14711_17283[(2)] = null);

(statearr_14711_17283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (4))){
var inst_14677 = (state_14701[(7)]);
var inst_14681 = cljs.core.first(inst_14677);
var state_14701__$1 = state_14701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14701__$1,(7),ch,inst_14681);
} else {
if((state_val_14702 === (13))){
var inst_14695 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
var statearr_14718_17284 = state_14701__$1;
(statearr_14718_17284[(2)] = inst_14695);

(statearr_14718_17284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (6))){
var inst_14686 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
if(cljs.core.truth_(inst_14686)){
var statearr_14722_17285 = state_14701__$1;
(statearr_14722_17285[(1)] = (8));

} else {
var statearr_14723_17286 = state_14701__$1;
(statearr_14723_17286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (3))){
var inst_14699 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14701__$1,inst_14699);
} else {
if((state_val_14702 === (12))){
var state_14701__$1 = state_14701;
var statearr_14730_17290 = state_14701__$1;
(statearr_14730_17290[(2)] = null);

(statearr_14730_17290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (2))){
var inst_14677 = (state_14701[(7)]);
var state_14701__$1 = state_14701;
if(cljs.core.truth_(inst_14677)){
var statearr_14737_17291 = state_14701__$1;
(statearr_14737_17291[(1)] = (4));

} else {
var statearr_14738_17292 = state_14701__$1;
(statearr_14738_17292[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (11))){
var inst_14692 = cljs.core.async.close_BANG_(ch);
var state_14701__$1 = state_14701;
var statearr_14743_17293 = state_14701__$1;
(statearr_14743_17293[(2)] = inst_14692);

(statearr_14743_17293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (9))){
var state_14701__$1 = state_14701;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14745_17294 = state_14701__$1;
(statearr_14745_17294[(1)] = (11));

} else {
var statearr_14752_17296 = state_14701__$1;
(statearr_14752_17296[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (5))){
var inst_14677 = (state_14701[(7)]);
var state_14701__$1 = state_14701;
var statearr_14753_17298 = state_14701__$1;
(statearr_14753_17298[(2)] = inst_14677);

(statearr_14753_17298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (10))){
var inst_14697 = (state_14701[(2)]);
var state_14701__$1 = state_14701;
var statearr_14760_17300 = state_14701__$1;
(statearr_14760_17300[(2)] = inst_14697);

(statearr_14760_17300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14702 === (8))){
var inst_14677 = (state_14701[(7)]);
var inst_14688 = cljs.core.next(inst_14677);
var inst_14677__$1 = inst_14688;
var state_14701__$1 = (function (){var statearr_14761 = state_14701;
(statearr_14761[(7)] = inst_14677__$1);

return statearr_14761;
})();
var statearr_14762_17301 = state_14701__$1;
(statearr_14762_17301[(2)] = null);

(statearr_14762_17301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13169__auto__ = null;
var cljs$core$async$state_machine__13169__auto____0 = (function (){
var statearr_14767 = [null,null,null,null,null,null,null,null];
(statearr_14767[(0)] = cljs$core$async$state_machine__13169__auto__);

(statearr_14767[(1)] = (1));

return statearr_14767;
});
var cljs$core$async$state_machine__13169__auto____1 = (function (state_14701){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_14701);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e14769){var ex__13172__auto__ = e14769;
var statearr_14773_17302 = state_14701;
(statearr_14773_17302[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_14701[(4)]))){
var statearr_14776_17303 = state_14701;
(statearr_14776_17303[(1)] = cljs.core.first((state_14701[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17304 = state_14701;
state_14701 = G__17304;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$state_machine__13169__auto__ = function(state_14701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13169__auto____1.call(this,state_14701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13169__auto____0;
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13169__auto____1;
return cljs$core$async$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_14780 = f__13567__auto__();
(statearr_14780[(6)] = c__13566__auto__);

return statearr_14780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));

return c__13566__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14787 = arguments.length;
switch (G__14787) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17314 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17314(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17315 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17315(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17319 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17319(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17330 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17330(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14810 = (function (ch,cs,meta14811){
this.ch = ch;
this.cs = cs;
this.meta14811 = meta14811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14812,meta14811__$1){
var self__ = this;
var _14812__$1 = this;
return (new cljs.core.async.t_cljs$core$async14810(self__.ch,self__.cs,meta14811__$1));
}));

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14812){
var self__ = this;
var _14812__$1 = this;
return self__.meta14811;
}));

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14811","meta14811",-942937227,null)], null);
}));

(cljs.core.async.t_cljs$core$async14810.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14810");

(cljs.core.async.t_cljs$core$async14810.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14810");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14810.
 */
cljs.core.async.__GT_t_cljs$core$async14810 = (function cljs$core$async$__GT_t_cljs$core$async14810(ch,cs,meta14811){
return (new cljs.core.async.t_cljs$core$async14810(ch,cs,meta14811));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14810(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13566__auto___17333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_14971){
var state_val_14972 = (state_14971[(1)]);
if((state_val_14972 === (7))){
var inst_14967 = (state_14971[(2)]);
var state_14971__$1 = state_14971;
var statearr_14977_17334 = state_14971__$1;
(statearr_14977_17334[(2)] = inst_14967);

(statearr_14977_17334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (20))){
var inst_14863 = (state_14971[(7)]);
var inst_14877 = cljs.core.first(inst_14863);
var inst_14878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14877,(0),null);
var inst_14879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14877,(1),null);
var state_14971__$1 = (function (){var statearr_14978 = state_14971;
(statearr_14978[(8)] = inst_14878);

return statearr_14978;
})();
if(cljs.core.truth_(inst_14879)){
var statearr_14980_17341 = state_14971__$1;
(statearr_14980_17341[(1)] = (22));

} else {
var statearr_14981_17345 = state_14971__$1;
(statearr_14981_17345[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (27))){
var inst_14919 = (state_14971[(9)]);
var inst_14914 = (state_14971[(10)]);
var inst_14829 = (state_14971[(11)]);
var inst_14912 = (state_14971[(12)]);
var inst_14919__$1 = cljs.core._nth(inst_14912,inst_14914);
var inst_14920 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14919__$1,inst_14829,done);
var state_14971__$1 = (function (){var statearr_14983 = state_14971;
(statearr_14983[(9)] = inst_14919__$1);

return statearr_14983;
})();
if(cljs.core.truth_(inst_14920)){
var statearr_14985_17346 = state_14971__$1;
(statearr_14985_17346[(1)] = (30));

} else {
var statearr_14986_17347 = state_14971__$1;
(statearr_14986_17347[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (1))){
var state_14971__$1 = state_14971;
var statearr_14987_17348 = state_14971__$1;
(statearr_14987_17348[(2)] = null);

(statearr_14987_17348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (24))){
var inst_14863 = (state_14971[(7)]);
var inst_14884 = (state_14971[(2)]);
var inst_14885 = cljs.core.next(inst_14863);
var inst_14838 = inst_14885;
var inst_14839 = null;
var inst_14840 = (0);
var inst_14841 = (0);
var state_14971__$1 = (function (){var statearr_14988 = state_14971;
(statearr_14988[(13)] = inst_14839);

(statearr_14988[(14)] = inst_14840);

(statearr_14988[(15)] = inst_14884);

(statearr_14988[(16)] = inst_14841);

(statearr_14988[(17)] = inst_14838);

return statearr_14988;
})();
var statearr_14989_17352 = state_14971__$1;
(statearr_14989_17352[(2)] = null);

(statearr_14989_17352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (39))){
var state_14971__$1 = state_14971;
var statearr_14994_17353 = state_14971__$1;
(statearr_14994_17353[(2)] = null);

(statearr_14994_17353[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (4))){
var inst_14829 = (state_14971[(11)]);
var inst_14829__$1 = (state_14971[(2)]);
var inst_14830 = (inst_14829__$1 == null);
var state_14971__$1 = (function (){var statearr_14999 = state_14971;
(statearr_14999[(11)] = inst_14829__$1);

return statearr_14999;
})();
if(cljs.core.truth_(inst_14830)){
var statearr_15000_17354 = state_14971__$1;
(statearr_15000_17354[(1)] = (5));

} else {
var statearr_15001_17355 = state_14971__$1;
(statearr_15001_17355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (15))){
var inst_14839 = (state_14971[(13)]);
var inst_14840 = (state_14971[(14)]);
var inst_14841 = (state_14971[(16)]);
var inst_14838 = (state_14971[(17)]);
var inst_14859 = (state_14971[(2)]);
var inst_14860 = (inst_14841 + (1));
var tmp14991 = inst_14839;
var tmp14992 = inst_14840;
var tmp14993 = inst_14838;
var inst_14838__$1 = tmp14993;
var inst_14839__$1 = tmp14991;
var inst_14840__$1 = tmp14992;
var inst_14841__$1 = inst_14860;
var state_14971__$1 = (function (){var statearr_15002 = state_14971;
(statearr_15002[(13)] = inst_14839__$1);

(statearr_15002[(14)] = inst_14840__$1);

(statearr_15002[(16)] = inst_14841__$1);

(statearr_15002[(17)] = inst_14838__$1);

(statearr_15002[(18)] = inst_14859);

return statearr_15002;
})();
var statearr_15003_17356 = state_14971__$1;
(statearr_15003_17356[(2)] = null);

(statearr_15003_17356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (21))){
var inst_14888 = (state_14971[(2)]);
var state_14971__$1 = state_14971;
var statearr_15007_17357 = state_14971__$1;
(statearr_15007_17357[(2)] = inst_14888);

(statearr_15007_17357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (31))){
var inst_14919 = (state_14971[(9)]);
var inst_14923 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14919);
var state_14971__$1 = state_14971;
var statearr_15009_17359 = state_14971__$1;
(statearr_15009_17359[(2)] = inst_14923);

(statearr_15009_17359[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (32))){
var inst_14911 = (state_14971[(19)]);
var inst_14913 = (state_14971[(20)]);
var inst_14914 = (state_14971[(10)]);
var inst_14912 = (state_14971[(12)]);
var inst_14925 = (state_14971[(2)]);
var inst_14926 = (inst_14914 + (1));
var tmp15004 = inst_14911;
var tmp15005 = inst_14913;
var tmp15006 = inst_14912;
var inst_14911__$1 = tmp15004;
var inst_14912__$1 = tmp15006;
var inst_14913__$1 = tmp15005;
var inst_14914__$1 = inst_14926;
var state_14971__$1 = (function (){var statearr_15011 = state_14971;
(statearr_15011[(19)] = inst_14911__$1);

(statearr_15011[(21)] = inst_14925);

(statearr_15011[(20)] = inst_14913__$1);

(statearr_15011[(10)] = inst_14914__$1);

(statearr_15011[(12)] = inst_14912__$1);

return statearr_15011;
})();
var statearr_15012_17360 = state_14971__$1;
(statearr_15012_17360[(2)] = null);

(statearr_15012_17360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (40))){
var inst_14938 = (state_14971[(22)]);
var inst_14942 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14938);
var state_14971__$1 = state_14971;
var statearr_15013_17361 = state_14971__$1;
(statearr_15013_17361[(2)] = inst_14942);

(statearr_15013_17361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (33))){
var inst_14929 = (state_14971[(23)]);
var inst_14931 = cljs.core.chunked_seq_QMARK_(inst_14929);
var state_14971__$1 = state_14971;
if(inst_14931){
var statearr_15017_17365 = state_14971__$1;
(statearr_15017_17365[(1)] = (36));

} else {
var statearr_15018_17366 = state_14971__$1;
(statearr_15018_17366[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (13))){
var inst_14852 = (state_14971[(24)]);
var inst_14856 = cljs.core.async.close_BANG_(inst_14852);
var state_14971__$1 = state_14971;
var statearr_15019_17367 = state_14971__$1;
(statearr_15019_17367[(2)] = inst_14856);

(statearr_15019_17367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (22))){
var inst_14878 = (state_14971[(8)]);
var inst_14881 = cljs.core.async.close_BANG_(inst_14878);
var state_14971__$1 = state_14971;
var statearr_15021_17368 = state_14971__$1;
(statearr_15021_17368[(2)] = inst_14881);

(statearr_15021_17368[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (36))){
var inst_14929 = (state_14971[(23)]);
var inst_14933 = cljs.core.chunk_first(inst_14929);
var inst_14934 = cljs.core.chunk_rest(inst_14929);
var inst_14935 = cljs.core.count(inst_14933);
var inst_14911 = inst_14934;
var inst_14912 = inst_14933;
var inst_14913 = inst_14935;
var inst_14914 = (0);
var state_14971__$1 = (function (){var statearr_15025 = state_14971;
(statearr_15025[(19)] = inst_14911);

(statearr_15025[(20)] = inst_14913);

(statearr_15025[(10)] = inst_14914);

(statearr_15025[(12)] = inst_14912);

return statearr_15025;
})();
var statearr_15026_17370 = state_14971__$1;
(statearr_15026_17370[(2)] = null);

(statearr_15026_17370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (41))){
var inst_14929 = (state_14971[(23)]);
var inst_14944 = (state_14971[(2)]);
var inst_14945 = cljs.core.next(inst_14929);
var inst_14911 = inst_14945;
var inst_14912 = null;
var inst_14913 = (0);
var inst_14914 = (0);
var state_14971__$1 = (function (){var statearr_15031 = state_14971;
(statearr_15031[(19)] = inst_14911);

(statearr_15031[(20)] = inst_14913);

(statearr_15031[(10)] = inst_14914);

(statearr_15031[(25)] = inst_14944);

(statearr_15031[(12)] = inst_14912);

return statearr_15031;
})();
var statearr_15033_17372 = state_14971__$1;
(statearr_15033_17372[(2)] = null);

(statearr_15033_17372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (43))){
var state_14971__$1 = state_14971;
var statearr_15035_17373 = state_14971__$1;
(statearr_15035_17373[(2)] = null);

(statearr_15035_17373[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (29))){
var inst_14953 = (state_14971[(2)]);
var state_14971__$1 = state_14971;
var statearr_15036_17374 = state_14971__$1;
(statearr_15036_17374[(2)] = inst_14953);

(statearr_15036_17374[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (44))){
var inst_14962 = (state_14971[(2)]);
var state_14971__$1 = (function (){var statearr_15038 = state_14971;
(statearr_15038[(26)] = inst_14962);

return statearr_15038;
})();
var statearr_15039_17375 = state_14971__$1;
(statearr_15039_17375[(2)] = null);

(statearr_15039_17375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (6))){
var inst_14903 = (state_14971[(27)]);
var inst_14902 = cljs.core.deref(cs);
var inst_14903__$1 = cljs.core.keys(inst_14902);
var inst_14904 = cljs.core.count(inst_14903__$1);
var inst_14905 = cljs.core.reset_BANG_(dctr,inst_14904);
var inst_14910 = cljs.core.seq(inst_14903__$1);
var inst_14911 = inst_14910;
var inst_14912 = null;
var inst_14913 = (0);
var inst_14914 = (0);
var state_14971__$1 = (function (){var statearr_15044 = state_14971;
(statearr_15044[(27)] = inst_14903__$1);

(statearr_15044[(19)] = inst_14911);

(statearr_15044[(20)] = inst_14913);

(statearr_15044[(28)] = inst_14905);

(statearr_15044[(10)] = inst_14914);

(statearr_15044[(12)] = inst_14912);

return statearr_15044;
})();
var statearr_15045_17377 = state_14971__$1;
(statearr_15045_17377[(2)] = null);

(statearr_15045_17377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (28))){
var inst_14911 = (state_14971[(19)]);
var inst_14929 = (state_14971[(23)]);
var inst_14929__$1 = cljs.core.seq(inst_14911);
var state_14971__$1 = (function (){var statearr_15046 = state_14971;
(statearr_15046[(23)] = inst_14929__$1);

return statearr_15046;
})();
if(inst_14929__$1){
var statearr_15048_17378 = state_14971__$1;
(statearr_15048_17378[(1)] = (33));

} else {
var statearr_15049_17379 = state_14971__$1;
(statearr_15049_17379[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (25))){
var inst_14913 = (state_14971[(20)]);
var inst_14914 = (state_14971[(10)]);
var inst_14916 = (inst_14914 < inst_14913);
var inst_14917 = inst_14916;
var state_14971__$1 = state_14971;
if(cljs.core.truth_(inst_14917)){
var statearr_15050_17380 = state_14971__$1;
(statearr_15050_17380[(1)] = (27));

} else {
var statearr_15051_17381 = state_14971__$1;
(statearr_15051_17381[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (34))){
var state_14971__$1 = state_14971;
var statearr_15052_17382 = state_14971__$1;
(statearr_15052_17382[(2)] = null);

(statearr_15052_17382[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (17))){
var state_14971__$1 = state_14971;
var statearr_15054_17383 = state_14971__$1;
(statearr_15054_17383[(2)] = null);

(statearr_15054_17383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (3))){
var inst_14969 = (state_14971[(2)]);
var state_14971__$1 = state_14971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14971__$1,inst_14969);
} else {
if((state_val_14972 === (12))){
var inst_14894 = (state_14971[(2)]);
var state_14971__$1 = state_14971;
var statearr_15055_17387 = state_14971__$1;
(statearr_15055_17387[(2)] = inst_14894);

(statearr_15055_17387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (2))){
var state_14971__$1 = state_14971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14971__$1,(4),ch);
} else {
if((state_val_14972 === (23))){
var state_14971__$1 = state_14971;
var statearr_15056_17388 = state_14971__$1;
(statearr_15056_17388[(2)] = null);

(statearr_15056_17388[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (35))){
var inst_14951 = (state_14971[(2)]);
var state_14971__$1 = state_14971;
var statearr_15063_17390 = state_14971__$1;
(statearr_15063_17390[(2)] = inst_14951);

(statearr_15063_17390[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (19))){
var inst_14863 = (state_14971[(7)]);
var inst_14868 = cljs.core.chunk_first(inst_14863);
var inst_14869 = cljs.core.chunk_rest(inst_14863);
var inst_14870 = cljs.core.count(inst_14868);
var inst_14838 = inst_14869;
var inst_14839 = inst_14868;
var inst_14840 = inst_14870;
var inst_14841 = (0);
var state_14971__$1 = (function (){var statearr_15065 = state_14971;
(statearr_15065[(13)] = inst_14839);

(statearr_15065[(14)] = inst_14840);

(statearr_15065[(16)] = inst_14841);

(statearr_15065[(17)] = inst_14838);

return statearr_15065;
})();
var statearr_15066_17392 = state_14971__$1;
(statearr_15066_17392[(2)] = null);

(statearr_15066_17392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (11))){
var inst_14863 = (state_14971[(7)]);
var inst_14838 = (state_14971[(17)]);
var inst_14863__$1 = cljs.core.seq(inst_14838);
var state_14971__$1 = (function (){var statearr_15068 = state_14971;
(statearr_15068[(7)] = inst_14863__$1);

return statearr_15068;
})();
if(inst_14863__$1){
var statearr_15069_17393 = state_14971__$1;
(statearr_15069_17393[(1)] = (16));

} else {
var statearr_15070_17394 = state_14971__$1;
(statearr_15070_17394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (9))){
var inst_14896 = (state_14971[(2)]);
var state_14971__$1 = state_14971;
var statearr_15074_17396 = state_14971__$1;
(statearr_15074_17396[(2)] = inst_14896);

(statearr_15074_17396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (5))){
var inst_14836 = cljs.core.deref(cs);
var inst_14837 = cljs.core.seq(inst_14836);
var inst_14838 = inst_14837;
var inst_14839 = null;
var inst_14840 = (0);
var inst_14841 = (0);
var state_14971__$1 = (function (){var statearr_15076 = state_14971;
(statearr_15076[(13)] = inst_14839);

(statearr_15076[(14)] = inst_14840);

(statearr_15076[(16)] = inst_14841);

(statearr_15076[(17)] = inst_14838);

return statearr_15076;
})();
var statearr_15077_17399 = state_14971__$1;
(statearr_15077_17399[(2)] = null);

(statearr_15077_17399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (14))){
var state_14971__$1 = state_14971;
var statearr_15078_17401 = state_14971__$1;
(statearr_15078_17401[(2)] = null);

(statearr_15078_17401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (45))){
var inst_14959 = (state_14971[(2)]);
var state_14971__$1 = state_14971;
var statearr_15081_17402 = state_14971__$1;
(statearr_15081_17402[(2)] = inst_14959);

(statearr_15081_17402[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (26))){
var inst_14903 = (state_14971[(27)]);
var inst_14955 = (state_14971[(2)]);
var inst_14956 = cljs.core.seq(inst_14903);
var state_14971__$1 = (function (){var statearr_15082 = state_14971;
(statearr_15082[(29)] = inst_14955);

return statearr_15082;
})();
if(inst_14956){
var statearr_15083_17403 = state_14971__$1;
(statearr_15083_17403[(1)] = (42));

} else {
var statearr_15085_17404 = state_14971__$1;
(statearr_15085_17404[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (16))){
var inst_14863 = (state_14971[(7)]);
var inst_14866 = cljs.core.chunked_seq_QMARK_(inst_14863);
var state_14971__$1 = state_14971;
if(inst_14866){
var statearr_15087_17407 = state_14971__$1;
(statearr_15087_17407[(1)] = (19));

} else {
var statearr_15088_17408 = state_14971__$1;
(statearr_15088_17408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (38))){
var inst_14948 = (state_14971[(2)]);
var state_14971__$1 = state_14971;
var statearr_15089_17409 = state_14971__$1;
(statearr_15089_17409[(2)] = inst_14948);

(statearr_15089_17409[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (30))){
var state_14971__$1 = state_14971;
var statearr_15090_17411 = state_14971__$1;
(statearr_15090_17411[(2)] = null);

(statearr_15090_17411[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (10))){
var inst_14839 = (state_14971[(13)]);
var inst_14841 = (state_14971[(16)]);
var inst_14850 = cljs.core._nth(inst_14839,inst_14841);
var inst_14852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14850,(0),null);
var inst_14853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14850,(1),null);
var state_14971__$1 = (function (){var statearr_15095 = state_14971;
(statearr_15095[(24)] = inst_14852);

return statearr_15095;
})();
if(cljs.core.truth_(inst_14853)){
var statearr_15097_17417 = state_14971__$1;
(statearr_15097_17417[(1)] = (13));

} else {
var statearr_15098_17418 = state_14971__$1;
(statearr_15098_17418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (18))){
var inst_14892 = (state_14971[(2)]);
var state_14971__$1 = state_14971;
var statearr_15100_17419 = state_14971__$1;
(statearr_15100_17419[(2)] = inst_14892);

(statearr_15100_17419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (42))){
var state_14971__$1 = state_14971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14971__$1,(45),dchan);
} else {
if((state_val_14972 === (37))){
var inst_14938 = (state_14971[(22)]);
var inst_14829 = (state_14971[(11)]);
var inst_14929 = (state_14971[(23)]);
var inst_14938__$1 = cljs.core.first(inst_14929);
var inst_14939 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14938__$1,inst_14829,done);
var state_14971__$1 = (function (){var statearr_15102 = state_14971;
(statearr_15102[(22)] = inst_14938__$1);

return statearr_15102;
})();
if(cljs.core.truth_(inst_14939)){
var statearr_15103_17422 = state_14971__$1;
(statearr_15103_17422[(1)] = (39));

} else {
var statearr_15104_17423 = state_14971__$1;
(statearr_15104_17423[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (8))){
var inst_14840 = (state_14971[(14)]);
var inst_14841 = (state_14971[(16)]);
var inst_14843 = (inst_14841 < inst_14840);
var inst_14844 = inst_14843;
var state_14971__$1 = state_14971;
if(cljs.core.truth_(inst_14844)){
var statearr_15109_17424 = state_14971__$1;
(statearr_15109_17424[(1)] = (10));

} else {
var statearr_15110_17425 = state_14971__$1;
(statearr_15110_17425[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13169__auto__ = null;
var cljs$core$async$mult_$_state_machine__13169__auto____0 = (function (){
var statearr_15113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15113[(0)] = cljs$core$async$mult_$_state_machine__13169__auto__);

(statearr_15113[(1)] = (1));

return statearr_15113;
});
var cljs$core$async$mult_$_state_machine__13169__auto____1 = (function (state_14971){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_14971);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e15114){var ex__13172__auto__ = e15114;
var statearr_15115_17426 = state_14971;
(statearr_15115_17426[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_14971[(4)]))){
var statearr_15116_17427 = state_14971;
(statearr_15116_17427[(1)] = cljs.core.first((state_14971[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17429 = state_14971;
state_14971 = G__17429;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13169__auto__ = function(state_14971){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13169__auto____1.call(this,state_14971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13169__auto____0;
cljs$core$async$mult_$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13169__auto____1;
return cljs$core$async$mult_$_state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_15117 = f__13567__auto__();
(statearr_15117[(6)] = c__13566__auto___17333);

return statearr_15117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15120 = arguments.length;
switch (G__15120) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17432 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17432(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17434 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17434(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17441 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17441(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17443 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17443(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17444 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17444(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17449 = arguments.length;
var i__5727__auto___17450 = (0);
while(true){
if((i__5727__auto___17450 < len__5726__auto___17449)){
args__5732__auto__.push((arguments[i__5727__auto___17450]));

var G__17451 = (i__5727__auto___17450 + (1));
i__5727__auto___17450 = G__17451;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15157){
var map__15158 = p__15157;
var map__15158__$1 = cljs.core.__destructure_map(map__15158);
var opts = map__15158__$1;
var statearr_15159_17453 = state;
(statearr_15159_17453[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15160_17454 = state;
(statearr_15160_17454[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15161_17455 = state;
(statearr_15161_17455[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15151){
var G__15152 = cljs.core.first(seq15151);
var seq15151__$1 = cljs.core.next(seq15151);
var G__15153 = cljs.core.first(seq15151__$1);
var seq15151__$2 = cljs.core.next(seq15151__$1);
var G__15154 = cljs.core.first(seq15151__$2);
var seq15151__$3 = cljs.core.next(seq15151__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15152,G__15153,G__15154,seq15151__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15169 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15170){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15170 = meta15170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15171,meta15170__$1){
var self__ = this;
var _15171__$1 = this;
return (new cljs.core.async.t_cljs$core$async15169(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15170__$1));
}));

(cljs.core.async.t_cljs$core$async15169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15171){
var self__ = this;
var _15171__$1 = this;
return self__.meta15170;
}));

(cljs.core.async.t_cljs$core$async15169.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15169.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15169.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15169.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15169.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15169.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15169.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15170","meta15170",-240881582,null)], null);
}));

(cljs.core.async.t_cljs$core$async15169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15169");

(cljs.core.async.t_cljs$core$async15169.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15169.
 */
cljs.core.async.__GT_t_cljs$core$async15169 = (function cljs$core$async$__GT_t_cljs$core$async15169(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15170){
return (new cljs.core.async.t_cljs$core$async15169(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15170));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15169(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13566__auto___17485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_15264){
var state_val_15265 = (state_15264[(1)]);
if((state_val_15265 === (7))){
var inst_15223 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
if(cljs.core.truth_(inst_15223)){
var statearr_15267_17486 = state_15264__$1;
(statearr_15267_17486[(1)] = (8));

} else {
var statearr_15268_17487 = state_15264__$1;
(statearr_15268_17487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (20))){
var inst_15216 = (state_15264[(7)]);
var state_15264__$1 = state_15264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15264__$1,(23),out,inst_15216);
} else {
if((state_val_15265 === (1))){
var inst_15199 = calc_state();
var inst_15200 = cljs.core.__destructure_map(inst_15199);
var inst_15201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15200,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15200,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15200,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15204 = inst_15199;
var state_15264__$1 = (function (){var statearr_15270 = state_15264;
(statearr_15270[(8)] = inst_15203);

(statearr_15270[(9)] = inst_15202);

(statearr_15270[(10)] = inst_15204);

(statearr_15270[(11)] = inst_15201);

return statearr_15270;
})();
var statearr_15272_17488 = state_15264__$1;
(statearr_15272_17488[(2)] = null);

(statearr_15272_17488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (24))){
var inst_15207 = (state_15264[(12)]);
var inst_15204 = inst_15207;
var state_15264__$1 = (function (){var statearr_15274 = state_15264;
(statearr_15274[(10)] = inst_15204);

return statearr_15274;
})();
var statearr_15275_17489 = state_15264__$1;
(statearr_15275_17489[(2)] = null);

(statearr_15275_17489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (4))){
var inst_15216 = (state_15264[(7)]);
var inst_15218 = (state_15264[(13)]);
var inst_15215 = (state_15264[(2)]);
var inst_15216__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15215,(0),null);
var inst_15217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15215,(1),null);
var inst_15218__$1 = (inst_15216__$1 == null);
var state_15264__$1 = (function (){var statearr_15276 = state_15264;
(statearr_15276[(7)] = inst_15216__$1);

(statearr_15276[(13)] = inst_15218__$1);

(statearr_15276[(14)] = inst_15217);

return statearr_15276;
})();
if(cljs.core.truth_(inst_15218__$1)){
var statearr_15278_17497 = state_15264__$1;
(statearr_15278_17497[(1)] = (5));

} else {
var statearr_15279_17498 = state_15264__$1;
(statearr_15279_17498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (15))){
var inst_15208 = (state_15264[(15)]);
var inst_15237 = (state_15264[(16)]);
var inst_15237__$1 = cljs.core.empty_QMARK_(inst_15208);
var state_15264__$1 = (function (){var statearr_15281 = state_15264;
(statearr_15281[(16)] = inst_15237__$1);

return statearr_15281;
})();
if(inst_15237__$1){
var statearr_15285_17499 = state_15264__$1;
(statearr_15285_17499[(1)] = (17));

} else {
var statearr_15286_17500 = state_15264__$1;
(statearr_15286_17500[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (21))){
var inst_15207 = (state_15264[(12)]);
var inst_15204 = inst_15207;
var state_15264__$1 = (function (){var statearr_15287 = state_15264;
(statearr_15287[(10)] = inst_15204);

return statearr_15287;
})();
var statearr_15288_17501 = state_15264__$1;
(statearr_15288_17501[(2)] = null);

(statearr_15288_17501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (13))){
var inst_15230 = (state_15264[(2)]);
var inst_15231 = calc_state();
var inst_15204 = inst_15231;
var state_15264__$1 = (function (){var statearr_15289 = state_15264;
(statearr_15289[(17)] = inst_15230);

(statearr_15289[(10)] = inst_15204);

return statearr_15289;
})();
var statearr_15290_17502 = state_15264__$1;
(statearr_15290_17502[(2)] = null);

(statearr_15290_17502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (22))){
var inst_15258 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
var statearr_15291_17503 = state_15264__$1;
(statearr_15291_17503[(2)] = inst_15258);

(statearr_15291_17503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (6))){
var inst_15217 = (state_15264[(14)]);
var inst_15221 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15217,change);
var state_15264__$1 = state_15264;
var statearr_15293_17504 = state_15264__$1;
(statearr_15293_17504[(2)] = inst_15221);

(statearr_15293_17504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (25))){
var state_15264__$1 = state_15264;
var statearr_15294_17505 = state_15264__$1;
(statearr_15294_17505[(2)] = null);

(statearr_15294_17505[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (17))){
var inst_15217 = (state_15264[(14)]);
var inst_15209 = (state_15264[(18)]);
var inst_15240 = (inst_15209.cljs$core$IFn$_invoke$arity$1 ? inst_15209.cljs$core$IFn$_invoke$arity$1(inst_15217) : inst_15209.call(null,inst_15217));
var inst_15241 = cljs.core.not(inst_15240);
var state_15264__$1 = state_15264;
var statearr_15295_17506 = state_15264__$1;
(statearr_15295_17506[(2)] = inst_15241);

(statearr_15295_17506[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (3))){
var inst_15262 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15264__$1,inst_15262);
} else {
if((state_val_15265 === (12))){
var state_15264__$1 = state_15264;
var statearr_15296_17507 = state_15264__$1;
(statearr_15296_17507[(2)] = null);

(statearr_15296_17507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (2))){
var inst_15207 = (state_15264[(12)]);
var inst_15204 = (state_15264[(10)]);
var inst_15207__$1 = cljs.core.__destructure_map(inst_15204);
var inst_15208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15207__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15207__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15207__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15264__$1 = (function (){var statearr_15306 = state_15264;
(statearr_15306[(15)] = inst_15208);

(statearr_15306[(12)] = inst_15207__$1);

(statearr_15306[(18)] = inst_15209);

return statearr_15306;
})();
return cljs.core.async.ioc_alts_BANG_(state_15264__$1,(4),inst_15210);
} else {
if((state_val_15265 === (23))){
var inst_15249 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
if(cljs.core.truth_(inst_15249)){
var statearr_15312_17514 = state_15264__$1;
(statearr_15312_17514[(1)] = (24));

} else {
var statearr_15313_17515 = state_15264__$1;
(statearr_15313_17515[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (19))){
var inst_15244 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
var statearr_15314_17519 = state_15264__$1;
(statearr_15314_17519[(2)] = inst_15244);

(statearr_15314_17519[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (11))){
var inst_15217 = (state_15264[(14)]);
var inst_15227 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15217);
var state_15264__$1 = state_15264;
var statearr_15321_17520 = state_15264__$1;
(statearr_15321_17520[(2)] = inst_15227);

(statearr_15321_17520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (9))){
var inst_15208 = (state_15264[(15)]);
var inst_15217 = (state_15264[(14)]);
var inst_15234 = (state_15264[(19)]);
var inst_15234__$1 = (inst_15208.cljs$core$IFn$_invoke$arity$1 ? inst_15208.cljs$core$IFn$_invoke$arity$1(inst_15217) : inst_15208.call(null,inst_15217));
var state_15264__$1 = (function (){var statearr_15324 = state_15264;
(statearr_15324[(19)] = inst_15234__$1);

return statearr_15324;
})();
if(cljs.core.truth_(inst_15234__$1)){
var statearr_15326_17525 = state_15264__$1;
(statearr_15326_17525[(1)] = (14));

} else {
var statearr_15327_17526 = state_15264__$1;
(statearr_15327_17526[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (5))){
var inst_15218 = (state_15264[(13)]);
var state_15264__$1 = state_15264;
var statearr_15329_17532 = state_15264__$1;
(statearr_15329_17532[(2)] = inst_15218);

(statearr_15329_17532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (14))){
var inst_15234 = (state_15264[(19)]);
var state_15264__$1 = state_15264;
var statearr_15330_17533 = state_15264__$1;
(statearr_15330_17533[(2)] = inst_15234);

(statearr_15330_17533[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (26))){
var inst_15254 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
var statearr_15332_17534 = state_15264__$1;
(statearr_15332_17534[(2)] = inst_15254);

(statearr_15332_17534[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (16))){
var inst_15246 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
if(cljs.core.truth_(inst_15246)){
var statearr_15337_17535 = state_15264__$1;
(statearr_15337_17535[(1)] = (20));

} else {
var statearr_15338_17536 = state_15264__$1;
(statearr_15338_17536[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (10))){
var inst_15260 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
var statearr_15339_17537 = state_15264__$1;
(statearr_15339_17537[(2)] = inst_15260);

(statearr_15339_17537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (18))){
var inst_15237 = (state_15264[(16)]);
var state_15264__$1 = state_15264;
var statearr_15344_17538 = state_15264__$1;
(statearr_15344_17538[(2)] = inst_15237);

(statearr_15344_17538[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (8))){
var inst_15216 = (state_15264[(7)]);
var inst_15225 = (inst_15216 == null);
var state_15264__$1 = state_15264;
if(cljs.core.truth_(inst_15225)){
var statearr_15346_17541 = state_15264__$1;
(statearr_15346_17541[(1)] = (11));

} else {
var statearr_15348_17542 = state_15264__$1;
(statearr_15348_17542[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13169__auto__ = null;
var cljs$core$async$mix_$_state_machine__13169__auto____0 = (function (){
var statearr_15352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15352[(0)] = cljs$core$async$mix_$_state_machine__13169__auto__);

(statearr_15352[(1)] = (1));

return statearr_15352;
});
var cljs$core$async$mix_$_state_machine__13169__auto____1 = (function (state_15264){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_15264);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e15353){var ex__13172__auto__ = e15353;
var statearr_15354_17543 = state_15264;
(statearr_15354_17543[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_15264[(4)]))){
var statearr_15355_17544 = state_15264;
(statearr_15355_17544[(1)] = cljs.core.first((state_15264[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17545 = state_15264;
state_15264 = G__17545;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13169__auto__ = function(state_15264){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13169__auto____1.call(this,state_15264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13169__auto____0;
cljs$core$async$mix_$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13169__auto____1;
return cljs$core$async$mix_$_state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_15356 = f__13567__auto__();
(statearr_15356[(6)] = c__13566__auto___17485);

return statearr_15356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17546 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17546(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17547 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17547(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17548 = (function() {
var G__17549 = null;
var G__17549__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17549__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17549 = function(p,v){
switch(arguments.length){
case 1:
return G__17549__1.call(this,p);
case 2:
return G__17549__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17549.cljs$core$IFn$_invoke$arity$1 = G__17549__1;
G__17549.cljs$core$IFn$_invoke$arity$2 = G__17549__2;
return G__17549;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15407 = arguments.length;
switch (G__15407) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17548(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17548(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15439 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15440){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15440 = meta15440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15441,meta15440__$1){
var self__ = this;
var _15441__$1 = this;
return (new cljs.core.async.t_cljs$core$async15439(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15440__$1));
}));

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15441){
var self__ = this;
var _15441__$1 = this;
return self__.meta15440;
}));

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15440","meta15440",-1130594843,null)], null);
}));

(cljs.core.async.t_cljs$core$async15439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15439");

(cljs.core.async.t_cljs$core$async15439.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15439.
 */
cljs.core.async.__GT_t_cljs$core$async15439 = (function cljs$core$async$__GT_t_cljs$core$async15439(ch,topic_fn,buf_fn,mults,ensure_mult,meta15440){
return (new cljs.core.async.t_cljs$core$async15439(ch,topic_fn,buf_fn,mults,ensure_mult,meta15440));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15428 = arguments.length;
switch (G__15428) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15417_SHARP_){
if(cljs.core.truth_((p1__15417_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15417_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15417_SHARP_.call(null,topic)))){
return p1__15417_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15417_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15439(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13566__auto___17562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_15568){
var state_val_15570 = (state_15568[(1)]);
if((state_val_15570 === (7))){
var inst_15563 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15575_17563 = state_15568__$1;
(statearr_15575_17563[(2)] = inst_15563);

(statearr_15575_17563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (20))){
var state_15568__$1 = state_15568;
var statearr_15576_17564 = state_15568__$1;
(statearr_15576_17564[(2)] = null);

(statearr_15576_17564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (1))){
var state_15568__$1 = state_15568;
var statearr_15580_17568 = state_15568__$1;
(statearr_15580_17568[(2)] = null);

(statearr_15580_17568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (24))){
var inst_15544 = (state_15568[(7)]);
var inst_15555 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15544);
var state_15568__$1 = state_15568;
var statearr_15582_17569 = state_15568__$1;
(statearr_15582_17569[(2)] = inst_15555);

(statearr_15582_17569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (4))){
var inst_15477 = (state_15568[(8)]);
var inst_15477__$1 = (state_15568[(2)]);
var inst_15479 = (inst_15477__$1 == null);
var state_15568__$1 = (function (){var statearr_15586 = state_15568;
(statearr_15586[(8)] = inst_15477__$1);

return statearr_15586;
})();
if(cljs.core.truth_(inst_15479)){
var statearr_15587_17573 = state_15568__$1;
(statearr_15587_17573[(1)] = (5));

} else {
var statearr_15588_17574 = state_15568__$1;
(statearr_15588_17574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (15))){
var inst_15537 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15590_17575 = state_15568__$1;
(statearr_15590_17575[(2)] = inst_15537);

(statearr_15590_17575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (21))){
var inst_15560 = (state_15568[(2)]);
var state_15568__$1 = (function (){var statearr_15593 = state_15568;
(statearr_15593[(9)] = inst_15560);

return statearr_15593;
})();
var statearr_15595_17576 = state_15568__$1;
(statearr_15595_17576[(2)] = null);

(statearr_15595_17576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (13))){
var inst_15510 = (state_15568[(10)]);
var inst_15516 = cljs.core.chunked_seq_QMARK_(inst_15510);
var state_15568__$1 = state_15568;
if(inst_15516){
var statearr_15597_17580 = state_15568__$1;
(statearr_15597_17580[(1)] = (16));

} else {
var statearr_15598_17581 = state_15568__$1;
(statearr_15598_17581[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (22))){
var inst_15550 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
if(cljs.core.truth_(inst_15550)){
var statearr_15602_17582 = state_15568__$1;
(statearr_15602_17582[(1)] = (23));

} else {
var statearr_15603_17583 = state_15568__$1;
(statearr_15603_17583[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (6))){
var inst_15546 = (state_15568[(11)]);
var inst_15477 = (state_15568[(8)]);
var inst_15544 = (state_15568[(7)]);
var inst_15544__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15477) : topic_fn.call(null,inst_15477));
var inst_15545 = cljs.core.deref(mults);
var inst_15546__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15545,inst_15544__$1);
var state_15568__$1 = (function (){var statearr_15606 = state_15568;
(statearr_15606[(11)] = inst_15546__$1);

(statearr_15606[(7)] = inst_15544__$1);

return statearr_15606;
})();
if(cljs.core.truth_(inst_15546__$1)){
var statearr_15615_17584 = state_15568__$1;
(statearr_15615_17584[(1)] = (19));

} else {
var statearr_15617_17585 = state_15568__$1;
(statearr_15617_17585[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (25))){
var inst_15557 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15619_17586 = state_15568__$1;
(statearr_15619_17586[(2)] = inst_15557);

(statearr_15619_17586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (17))){
var inst_15510 = (state_15568[(10)]);
var inst_15528 = cljs.core.first(inst_15510);
var inst_15529 = cljs.core.async.muxch_STAR_(inst_15528);
var inst_15530 = cljs.core.async.close_BANG_(inst_15529);
var inst_15531 = cljs.core.next(inst_15510);
var inst_15488 = inst_15531;
var inst_15489 = null;
var inst_15490 = (0);
var inst_15491 = (0);
var state_15568__$1 = (function (){var statearr_15623 = state_15568;
(statearr_15623[(12)] = inst_15530);

(statearr_15623[(13)] = inst_15488);

(statearr_15623[(14)] = inst_15491);

(statearr_15623[(15)] = inst_15489);

(statearr_15623[(16)] = inst_15490);

return statearr_15623;
})();
var statearr_15625_17590 = state_15568__$1;
(statearr_15625_17590[(2)] = null);

(statearr_15625_17590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (3))){
var inst_15566 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15568__$1,inst_15566);
} else {
if((state_val_15570 === (12))){
var inst_15539 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15630_17591 = state_15568__$1;
(statearr_15630_17591[(2)] = inst_15539);

(statearr_15630_17591[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (2))){
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15568__$1,(4),ch);
} else {
if((state_val_15570 === (23))){
var state_15568__$1 = state_15568;
var statearr_15632_17592 = state_15568__$1;
(statearr_15632_17592[(2)] = null);

(statearr_15632_17592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (19))){
var inst_15546 = (state_15568[(11)]);
var inst_15477 = (state_15568[(8)]);
var inst_15548 = cljs.core.async.muxch_STAR_(inst_15546);
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15568__$1,(22),inst_15548,inst_15477);
} else {
if((state_val_15570 === (11))){
var inst_15488 = (state_15568[(13)]);
var inst_15510 = (state_15568[(10)]);
var inst_15510__$1 = cljs.core.seq(inst_15488);
var state_15568__$1 = (function (){var statearr_15638 = state_15568;
(statearr_15638[(10)] = inst_15510__$1);

return statearr_15638;
})();
if(inst_15510__$1){
var statearr_15639_17596 = state_15568__$1;
(statearr_15639_17596[(1)] = (13));

} else {
var statearr_15640_17597 = state_15568__$1;
(statearr_15640_17597[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (9))){
var inst_15541 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15644_17598 = state_15568__$1;
(statearr_15644_17598[(2)] = inst_15541);

(statearr_15644_17598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (5))){
var inst_15485 = cljs.core.deref(mults);
var inst_15486 = cljs.core.vals(inst_15485);
var inst_15487 = cljs.core.seq(inst_15486);
var inst_15488 = inst_15487;
var inst_15489 = null;
var inst_15490 = (0);
var inst_15491 = (0);
var state_15568__$1 = (function (){var statearr_15669 = state_15568;
(statearr_15669[(13)] = inst_15488);

(statearr_15669[(14)] = inst_15491);

(statearr_15669[(15)] = inst_15489);

(statearr_15669[(16)] = inst_15490);

return statearr_15669;
})();
var statearr_15677_17599 = state_15568__$1;
(statearr_15677_17599[(2)] = null);

(statearr_15677_17599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (14))){
var state_15568__$1 = state_15568;
var statearr_15682_17600 = state_15568__$1;
(statearr_15682_17600[(2)] = null);

(statearr_15682_17600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (16))){
var inst_15510 = (state_15568[(10)]);
var inst_15519 = cljs.core.chunk_first(inst_15510);
var inst_15521 = cljs.core.chunk_rest(inst_15510);
var inst_15522 = cljs.core.count(inst_15519);
var inst_15488 = inst_15521;
var inst_15489 = inst_15519;
var inst_15490 = inst_15522;
var inst_15491 = (0);
var state_15568__$1 = (function (){var statearr_15687 = state_15568;
(statearr_15687[(13)] = inst_15488);

(statearr_15687[(14)] = inst_15491);

(statearr_15687[(15)] = inst_15489);

(statearr_15687[(16)] = inst_15490);

return statearr_15687;
})();
var statearr_15689_17604 = state_15568__$1;
(statearr_15689_17604[(2)] = null);

(statearr_15689_17604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (10))){
var inst_15488 = (state_15568[(13)]);
var inst_15491 = (state_15568[(14)]);
var inst_15489 = (state_15568[(15)]);
var inst_15490 = (state_15568[(16)]);
var inst_15503 = cljs.core._nth(inst_15489,inst_15491);
var inst_15504 = cljs.core.async.muxch_STAR_(inst_15503);
var inst_15505 = cljs.core.async.close_BANG_(inst_15504);
var inst_15506 = (inst_15491 + (1));
var tmp15678 = inst_15488;
var tmp15679 = inst_15489;
var tmp15680 = inst_15490;
var inst_15488__$1 = tmp15678;
var inst_15489__$1 = tmp15679;
var inst_15490__$1 = tmp15680;
var inst_15491__$1 = inst_15506;
var state_15568__$1 = (function (){var statearr_15694 = state_15568;
(statearr_15694[(13)] = inst_15488__$1);

(statearr_15694[(14)] = inst_15491__$1);

(statearr_15694[(17)] = inst_15505);

(statearr_15694[(15)] = inst_15489__$1);

(statearr_15694[(16)] = inst_15490__$1);

return statearr_15694;
})();
var statearr_15698_17608 = state_15568__$1;
(statearr_15698_17608[(2)] = null);

(statearr_15698_17608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (18))){
var inst_15534 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15701_17610 = state_15568__$1;
(statearr_15701_17610[(2)] = inst_15534);

(statearr_15701_17610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15570 === (8))){
var inst_15491 = (state_15568[(14)]);
var inst_15490 = (state_15568[(16)]);
var inst_15499 = (inst_15491 < inst_15490);
var inst_15500 = inst_15499;
var state_15568__$1 = state_15568;
if(cljs.core.truth_(inst_15500)){
var statearr_15703_17614 = state_15568__$1;
(statearr_15703_17614[(1)] = (10));

} else {
var statearr_15706_17615 = state_15568__$1;
(statearr_15706_17615[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13169__auto__ = null;
var cljs$core$async$state_machine__13169__auto____0 = (function (){
var statearr_15722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15722[(0)] = cljs$core$async$state_machine__13169__auto__);

(statearr_15722[(1)] = (1));

return statearr_15722;
});
var cljs$core$async$state_machine__13169__auto____1 = (function (state_15568){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_15568);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e15724){var ex__13172__auto__ = e15724;
var statearr_15725_17621 = state_15568;
(statearr_15725_17621[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_15568[(4)]))){
var statearr_15726_17622 = state_15568;
(statearr_15726_17622[(1)] = cljs.core.first((state_15568[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17626 = state_15568;
state_15568 = G__17626;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$state_machine__13169__auto__ = function(state_15568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13169__auto____1.call(this,state_15568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13169__auto____0;
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13169__auto____1;
return cljs$core$async$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_15733 = f__13567__auto__();
(statearr_15733[(6)] = c__13566__auto___17562);

return statearr_15733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15745 = arguments.length;
switch (G__15745) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15768 = arguments.length;
switch (G__15768) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15777 = arguments.length;
switch (G__15777) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13566__auto___17638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_15866){
var state_val_15867 = (state_15866[(1)]);
if((state_val_15867 === (7))){
var state_15866__$1 = state_15866;
var statearr_15873_17639 = state_15866__$1;
(statearr_15873_17639[(2)] = null);

(statearr_15873_17639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (1))){
var state_15866__$1 = state_15866;
var statearr_15875_17640 = state_15866__$1;
(statearr_15875_17640[(2)] = null);

(statearr_15875_17640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (4))){
var inst_15809 = (state_15866[(7)]);
var inst_15808 = (state_15866[(8)]);
var inst_15812 = (inst_15809 < inst_15808);
var state_15866__$1 = state_15866;
if(cljs.core.truth_(inst_15812)){
var statearr_15876_17641 = state_15866__$1;
(statearr_15876_17641[(1)] = (6));

} else {
var statearr_15880_17642 = state_15866__$1;
(statearr_15880_17642[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (15))){
var inst_15851 = (state_15866[(9)]);
var inst_15856 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15851);
var state_15866__$1 = state_15866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15866__$1,(17),out,inst_15856);
} else {
if((state_val_15867 === (13))){
var inst_15851 = (state_15866[(9)]);
var inst_15851__$1 = (state_15866[(2)]);
var inst_15852 = cljs.core.some(cljs.core.nil_QMARK_,inst_15851__$1);
var state_15866__$1 = (function (){var statearr_15882 = state_15866;
(statearr_15882[(9)] = inst_15851__$1);

return statearr_15882;
})();
if(cljs.core.truth_(inst_15852)){
var statearr_15883_17655 = state_15866__$1;
(statearr_15883_17655[(1)] = (14));

} else {
var statearr_15884_17656 = state_15866__$1;
(statearr_15884_17656[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (6))){
var state_15866__$1 = state_15866;
var statearr_15888_17657 = state_15866__$1;
(statearr_15888_17657[(2)] = null);

(statearr_15888_17657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (17))){
var inst_15858 = (state_15866[(2)]);
var state_15866__$1 = (function (){var statearr_15895 = state_15866;
(statearr_15895[(10)] = inst_15858);

return statearr_15895;
})();
var statearr_15897_17661 = state_15866__$1;
(statearr_15897_17661[(2)] = null);

(statearr_15897_17661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (3))){
var inst_15864 = (state_15866[(2)]);
var state_15866__$1 = state_15866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15866__$1,inst_15864);
} else {
if((state_val_15867 === (12))){
var _ = (function (){var statearr_15903 = state_15866;
(statearr_15903[(4)] = cljs.core.rest((state_15866[(4)])));

return statearr_15903;
})();
var state_15866__$1 = state_15866;
var ex15894 = (state_15866__$1[(2)]);
var statearr_15907_17662 = state_15866__$1;
(statearr_15907_17662[(5)] = ex15894);


if((ex15894 instanceof Object)){
var statearr_15909_17663 = state_15866__$1;
(statearr_15909_17663[(1)] = (11));

(statearr_15909_17663[(5)] = null);

} else {
throw ex15894;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (2))){
var inst_15807 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15808 = cnt;
var inst_15809 = (0);
var state_15866__$1 = (function (){var statearr_15914 = state_15866;
(statearr_15914[(7)] = inst_15809);

(statearr_15914[(11)] = inst_15807);

(statearr_15914[(8)] = inst_15808);

return statearr_15914;
})();
var statearr_15915_17664 = state_15866__$1;
(statearr_15915_17664[(2)] = null);

(statearr_15915_17664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (11))){
var inst_15822 = (state_15866[(2)]);
var inst_15823 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15866__$1 = (function (){var statearr_15920 = state_15866;
(statearr_15920[(12)] = inst_15822);

return statearr_15920;
})();
var statearr_15921_17665 = state_15866__$1;
(statearr_15921_17665[(2)] = inst_15823);

(statearr_15921_17665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (9))){
var inst_15809 = (state_15866[(7)]);
var _ = (function (){var statearr_15922 = state_15866;
(statearr_15922[(4)] = cljs.core.cons((12),(state_15866[(4)])));

return statearr_15922;
})();
var inst_15833 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15809) : chs__$1.call(null,inst_15809));
var inst_15834 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15809) : done.call(null,inst_15809));
var inst_15835 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15833,inst_15834);
var ___$1 = (function (){var statearr_15926 = state_15866;
(statearr_15926[(4)] = cljs.core.rest((state_15866[(4)])));

return statearr_15926;
})();
var state_15866__$1 = state_15866;
var statearr_15928_17667 = state_15866__$1;
(statearr_15928_17667[(2)] = inst_15835);

(statearr_15928_17667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (5))){
var inst_15846 = (state_15866[(2)]);
var state_15866__$1 = (function (){var statearr_15929 = state_15866;
(statearr_15929[(13)] = inst_15846);

return statearr_15929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15866__$1,(13),dchan);
} else {
if((state_val_15867 === (14))){
var inst_15854 = cljs.core.async.close_BANG_(out);
var state_15866__$1 = state_15866;
var statearr_15931_17669 = state_15866__$1;
(statearr_15931_17669[(2)] = inst_15854);

(statearr_15931_17669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (16))){
var inst_15861 = (state_15866[(2)]);
var state_15866__$1 = state_15866;
var statearr_15935_17671 = state_15866__$1;
(statearr_15935_17671[(2)] = inst_15861);

(statearr_15935_17671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (10))){
var inst_15809 = (state_15866[(7)]);
var inst_15838 = (state_15866[(2)]);
var inst_15840 = (inst_15809 + (1));
var inst_15809__$1 = inst_15840;
var state_15866__$1 = (function (){var statearr_15936 = state_15866;
(statearr_15936[(14)] = inst_15838);

(statearr_15936[(7)] = inst_15809__$1);

return statearr_15936;
})();
var statearr_15937_17672 = state_15866__$1;
(statearr_15937_17672[(2)] = null);

(statearr_15937_17672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15867 === (8))){
var inst_15844 = (state_15866[(2)]);
var state_15866__$1 = state_15866;
var statearr_15938_17673 = state_15866__$1;
(statearr_15938_17673[(2)] = inst_15844);

(statearr_15938_17673[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13169__auto__ = null;
var cljs$core$async$state_machine__13169__auto____0 = (function (){
var statearr_15946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15946[(0)] = cljs$core$async$state_machine__13169__auto__);

(statearr_15946[(1)] = (1));

return statearr_15946;
});
var cljs$core$async$state_machine__13169__auto____1 = (function (state_15866){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_15866);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e15948){var ex__13172__auto__ = e15948;
var statearr_15950_17674 = state_15866;
(statearr_15950_17674[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_15866[(4)]))){
var statearr_15952_17675 = state_15866;
(statearr_15952_17675[(1)] = cljs.core.first((state_15866[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17676 = state_15866;
state_15866 = G__17676;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$state_machine__13169__auto__ = function(state_15866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13169__auto____1.call(this,state_15866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13169__auto____0;
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13169__auto____1;
return cljs$core$async$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_15958 = f__13567__auto__();
(statearr_15958[(6)] = c__13566__auto___17638);

return statearr_15958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15966 = arguments.length;
switch (G__15966) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13566__auto___17678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_16004){
var state_val_16005 = (state_16004[(1)]);
if((state_val_16005 === (7))){
var inst_15983 = (state_16004[(7)]);
var inst_15982 = (state_16004[(8)]);
var inst_15982__$1 = (state_16004[(2)]);
var inst_15983__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15982__$1,(0),null);
var inst_15984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15982__$1,(1),null);
var inst_15986 = (inst_15983__$1 == null);
var state_16004__$1 = (function (){var statearr_16014 = state_16004;
(statearr_16014[(9)] = inst_15984);

(statearr_16014[(7)] = inst_15983__$1);

(statearr_16014[(8)] = inst_15982__$1);

return statearr_16014;
})();
if(cljs.core.truth_(inst_15986)){
var statearr_16016_17679 = state_16004__$1;
(statearr_16016_17679[(1)] = (8));

} else {
var statearr_16017_17680 = state_16004__$1;
(statearr_16017_17680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16005 === (1))){
var inst_15972 = cljs.core.vec(chs);
var inst_15973 = inst_15972;
var state_16004__$1 = (function (){var statearr_16019 = state_16004;
(statearr_16019[(10)] = inst_15973);

return statearr_16019;
})();
var statearr_16021_17681 = state_16004__$1;
(statearr_16021_17681[(2)] = null);

(statearr_16021_17681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16005 === (4))){
var inst_15973 = (state_16004[(10)]);
var state_16004__$1 = state_16004;
return cljs.core.async.ioc_alts_BANG_(state_16004__$1,(7),inst_15973);
} else {
if((state_val_16005 === (6))){
var inst_16000 = (state_16004[(2)]);
var state_16004__$1 = state_16004;
var statearr_16029_17682 = state_16004__$1;
(statearr_16029_17682[(2)] = inst_16000);

(statearr_16029_17682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16005 === (3))){
var inst_16002 = (state_16004[(2)]);
var state_16004__$1 = state_16004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16004__$1,inst_16002);
} else {
if((state_val_16005 === (2))){
var inst_15973 = (state_16004[(10)]);
var inst_15975 = cljs.core.count(inst_15973);
var inst_15976 = (inst_15975 > (0));
var state_16004__$1 = state_16004;
if(cljs.core.truth_(inst_15976)){
var statearr_16035_17683 = state_16004__$1;
(statearr_16035_17683[(1)] = (4));

} else {
var statearr_16036_17684 = state_16004__$1;
(statearr_16036_17684[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16005 === (11))){
var inst_15973 = (state_16004[(10)]);
var inst_15993 = (state_16004[(2)]);
var tmp16030 = inst_15973;
var inst_15973__$1 = tmp16030;
var state_16004__$1 = (function (){var statearr_16061 = state_16004;
(statearr_16061[(10)] = inst_15973__$1);

(statearr_16061[(11)] = inst_15993);

return statearr_16061;
})();
var statearr_16062_17686 = state_16004__$1;
(statearr_16062_17686[(2)] = null);

(statearr_16062_17686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16005 === (9))){
var inst_15983 = (state_16004[(7)]);
var state_16004__$1 = state_16004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16004__$1,(11),out,inst_15983);
} else {
if((state_val_16005 === (5))){
var inst_15998 = cljs.core.async.close_BANG_(out);
var state_16004__$1 = state_16004;
var statearr_16067_17687 = state_16004__$1;
(statearr_16067_17687[(2)] = inst_15998);

(statearr_16067_17687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16005 === (10))){
var inst_15996 = (state_16004[(2)]);
var state_16004__$1 = state_16004;
var statearr_16068_17698 = state_16004__$1;
(statearr_16068_17698[(2)] = inst_15996);

(statearr_16068_17698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16005 === (8))){
var inst_15973 = (state_16004[(10)]);
var inst_15984 = (state_16004[(9)]);
var inst_15983 = (state_16004[(7)]);
var inst_15982 = (state_16004[(8)]);
var inst_15988 = (function (){var cs = inst_15973;
var vec__15978 = inst_15982;
var v = inst_15983;
var c = inst_15984;
return (function (p1__15964_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15964_SHARP_);
});
})();
var inst_15989 = cljs.core.filterv(inst_15988,inst_15973);
var inst_15973__$1 = inst_15989;
var state_16004__$1 = (function (){var statearr_16071 = state_16004;
(statearr_16071[(10)] = inst_15973__$1);

return statearr_16071;
})();
var statearr_16074_17699 = state_16004__$1;
(statearr_16074_17699[(2)] = null);

(statearr_16074_17699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13169__auto__ = null;
var cljs$core$async$state_machine__13169__auto____0 = (function (){
var statearr_16075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16075[(0)] = cljs$core$async$state_machine__13169__auto__);

(statearr_16075[(1)] = (1));

return statearr_16075;
});
var cljs$core$async$state_machine__13169__auto____1 = (function (state_16004){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_16004);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e16076){var ex__13172__auto__ = e16076;
var statearr_16077_17703 = state_16004;
(statearr_16077_17703[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_16004[(4)]))){
var statearr_16079_17705 = state_16004;
(statearr_16079_17705[(1)] = cljs.core.first((state_16004[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17706 = state_16004;
state_16004 = G__17706;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$state_machine__13169__auto__ = function(state_16004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13169__auto____1.call(this,state_16004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13169__auto____0;
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13169__auto____1;
return cljs$core$async$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_16086 = f__13567__auto__();
(statearr_16086[(6)] = c__13566__auto___17678);

return statearr_16086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16093 = arguments.length;
switch (G__16093) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13566__auto___17709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_16120){
var state_val_16121 = (state_16120[(1)]);
if((state_val_16121 === (7))){
var inst_16101 = (state_16120[(7)]);
var inst_16101__$1 = (state_16120[(2)]);
var inst_16102 = (inst_16101__$1 == null);
var inst_16103 = cljs.core.not(inst_16102);
var state_16120__$1 = (function (){var statearr_16123 = state_16120;
(statearr_16123[(7)] = inst_16101__$1);

return statearr_16123;
})();
if(inst_16103){
var statearr_16124_17710 = state_16120__$1;
(statearr_16124_17710[(1)] = (8));

} else {
var statearr_16125_17714 = state_16120__$1;
(statearr_16125_17714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16121 === (1))){
var inst_16096 = (0);
var state_16120__$1 = (function (){var statearr_16126 = state_16120;
(statearr_16126[(8)] = inst_16096);

return statearr_16126;
})();
var statearr_16127_17715 = state_16120__$1;
(statearr_16127_17715[(2)] = null);

(statearr_16127_17715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16121 === (4))){
var state_16120__$1 = state_16120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16120__$1,(7),ch);
} else {
if((state_val_16121 === (6))){
var inst_16115 = (state_16120[(2)]);
var state_16120__$1 = state_16120;
var statearr_16128_17716 = state_16120__$1;
(statearr_16128_17716[(2)] = inst_16115);

(statearr_16128_17716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16121 === (3))){
var inst_16117 = (state_16120[(2)]);
var inst_16118 = cljs.core.async.close_BANG_(out);
var state_16120__$1 = (function (){var statearr_16133 = state_16120;
(statearr_16133[(9)] = inst_16117);

return statearr_16133;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16120__$1,inst_16118);
} else {
if((state_val_16121 === (2))){
var inst_16096 = (state_16120[(8)]);
var inst_16098 = (inst_16096 < n);
var state_16120__$1 = state_16120;
if(cljs.core.truth_(inst_16098)){
var statearr_16142_17717 = state_16120__$1;
(statearr_16142_17717[(1)] = (4));

} else {
var statearr_16143_17718 = state_16120__$1;
(statearr_16143_17718[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16121 === (11))){
var inst_16096 = (state_16120[(8)]);
var inst_16106 = (state_16120[(2)]);
var inst_16107 = (inst_16096 + (1));
var inst_16096__$1 = inst_16107;
var state_16120__$1 = (function (){var statearr_16144 = state_16120;
(statearr_16144[(10)] = inst_16106);

(statearr_16144[(8)] = inst_16096__$1);

return statearr_16144;
})();
var statearr_16145_17719 = state_16120__$1;
(statearr_16145_17719[(2)] = null);

(statearr_16145_17719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16121 === (9))){
var state_16120__$1 = state_16120;
var statearr_16151_17720 = state_16120__$1;
(statearr_16151_17720[(2)] = null);

(statearr_16151_17720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16121 === (5))){
var state_16120__$1 = state_16120;
var statearr_16152_17721 = state_16120__$1;
(statearr_16152_17721[(2)] = null);

(statearr_16152_17721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16121 === (10))){
var inst_16111 = (state_16120[(2)]);
var state_16120__$1 = state_16120;
var statearr_16153_17722 = state_16120__$1;
(statearr_16153_17722[(2)] = inst_16111);

(statearr_16153_17722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16121 === (8))){
var inst_16101 = (state_16120[(7)]);
var state_16120__$1 = state_16120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16120__$1,(11),out,inst_16101);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13169__auto__ = null;
var cljs$core$async$state_machine__13169__auto____0 = (function (){
var statearr_16154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16154[(0)] = cljs$core$async$state_machine__13169__auto__);

(statearr_16154[(1)] = (1));

return statearr_16154;
});
var cljs$core$async$state_machine__13169__auto____1 = (function (state_16120){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_16120);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e16155){var ex__13172__auto__ = e16155;
var statearr_16156_17723 = state_16120;
(statearr_16156_17723[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_16120[(4)]))){
var statearr_16157_17727 = state_16120;
(statearr_16157_17727[(1)] = cljs.core.first((state_16120[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17728 = state_16120;
state_16120 = G__17728;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$state_machine__13169__auto__ = function(state_16120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13169__auto____1.call(this,state_16120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13169__auto____0;
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13169__auto____1;
return cljs$core$async$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_16158 = f__13567__auto__();
(statearr_16158[(6)] = c__13566__auto___17709);

return statearr_16158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16183 = (function (f,ch,meta16164,_,fn1,meta16184){
this.f = f;
this.ch = ch;
this.meta16164 = meta16164;
this._ = _;
this.fn1 = fn1;
this.meta16184 = meta16184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16185,meta16184__$1){
var self__ = this;
var _16185__$1 = this;
return (new cljs.core.async.t_cljs$core$async16183(self__.f,self__.ch,self__.meta16164,self__._,self__.fn1,meta16184__$1));
}));

(cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16185){
var self__ = this;
var _16185__$1 = this;
return self__.meta16184;
}));

(cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16160_SHARP_){
var G__16200 = (((p1__16160_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16160_SHARP_) : self__.f.call(null,p1__16160_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16200) : f1.call(null,G__16200));
});
}));

(cljs.core.async.t_cljs$core$async16183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16164","meta16164",-689548823,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16163","cljs.core.async/t_cljs$core$async16163",-1533229805,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16184","meta16184",908182454,null)], null);
}));

(cljs.core.async.t_cljs$core$async16183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16183");

(cljs.core.async.t_cljs$core$async16183.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16183.
 */
cljs.core.async.__GT_t_cljs$core$async16183 = (function cljs$core$async$__GT_t_cljs$core$async16183(f,ch,meta16164,_,fn1,meta16184){
return (new cljs.core.async.t_cljs$core$async16183(f,ch,meta16164,_,fn1,meta16184));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16163 = (function (f,ch,meta16164){
this.f = f;
this.ch = ch;
this.meta16164 = meta16164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16165,meta16164__$1){
var self__ = this;
var _16165__$1 = this;
return (new cljs.core.async.t_cljs$core$async16163(self__.f,self__.ch,meta16164__$1));
}));

(cljs.core.async.t_cljs$core$async16163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16165){
var self__ = this;
var _16165__$1 = this;
return self__.meta16164;
}));

(cljs.core.async.t_cljs$core$async16163.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16163.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16163.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16163.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16163.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16183(self__.f,self__.ch,self__.meta16164,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16210 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16210) : self__.f.call(null,G__16210));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16163.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16163.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16164","meta16164",-689548823,null)], null);
}));

(cljs.core.async.t_cljs$core$async16163.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16163");

(cljs.core.async.t_cljs$core$async16163.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16163");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16163.
 */
cljs.core.async.__GT_t_cljs$core$async16163 = (function cljs$core$async$__GT_t_cljs$core$async16163(f,ch,meta16164){
return (new cljs.core.async.t_cljs$core$async16163(f,ch,meta16164));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16163(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16220 = (function (f,ch,meta16221){
this.f = f;
this.ch = ch;
this.meta16221 = meta16221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16222,meta16221__$1){
var self__ = this;
var _16222__$1 = this;
return (new cljs.core.async.t_cljs$core$async16220(self__.f,self__.ch,meta16221__$1));
}));

(cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16222){
var self__ = this;
var _16222__$1 = this;
return self__.meta16221;
}));

(cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16221","meta16221",-1238753077,null)], null);
}));

(cljs.core.async.t_cljs$core$async16220.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16220");

(cljs.core.async.t_cljs$core$async16220.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16220");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16220.
 */
cljs.core.async.__GT_t_cljs$core$async16220 = (function cljs$core$async$__GT_t_cljs$core$async16220(f,ch,meta16221){
return (new cljs.core.async.t_cljs$core$async16220(f,ch,meta16221));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16220(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16232 = (function (p,ch,meta16233){
this.p = p;
this.ch = ch;
this.meta16233 = meta16233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16234,meta16233__$1){
var self__ = this;
var _16234__$1 = this;
return (new cljs.core.async.t_cljs$core$async16232(self__.p,self__.ch,meta16233__$1));
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16234){
var self__ = this;
var _16234__$1 = this;
return self__.meta16233;
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16233","meta16233",-854287320,null)], null);
}));

(cljs.core.async.t_cljs$core$async16232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16232");

(cljs.core.async.t_cljs$core$async16232.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16232.
 */
cljs.core.async.__GT_t_cljs$core$async16232 = (function cljs$core$async$__GT_t_cljs$core$async16232(p,ch,meta16233){
return (new cljs.core.async.t_cljs$core$async16232(p,ch,meta16233));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16232(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16268 = arguments.length;
switch (G__16268) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13566__auto___17754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_16297){
var state_val_16300 = (state_16297[(1)]);
if((state_val_16300 === (7))){
var inst_16291 = (state_16297[(2)]);
var state_16297__$1 = state_16297;
var statearr_16319_17758 = state_16297__$1;
(statearr_16319_17758[(2)] = inst_16291);

(statearr_16319_17758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (1))){
var state_16297__$1 = state_16297;
var statearr_16326_17760 = state_16297__$1;
(statearr_16326_17760[(2)] = null);

(statearr_16326_17760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (4))){
var inst_16277 = (state_16297[(7)]);
var inst_16277__$1 = (state_16297[(2)]);
var inst_16278 = (inst_16277__$1 == null);
var state_16297__$1 = (function (){var statearr_16334 = state_16297;
(statearr_16334[(7)] = inst_16277__$1);

return statearr_16334;
})();
if(cljs.core.truth_(inst_16278)){
var statearr_16335_17761 = state_16297__$1;
(statearr_16335_17761[(1)] = (5));

} else {
var statearr_16336_17762 = state_16297__$1;
(statearr_16336_17762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (6))){
var inst_16277 = (state_16297[(7)]);
var inst_16282 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16277) : p.call(null,inst_16277));
var state_16297__$1 = state_16297;
if(cljs.core.truth_(inst_16282)){
var statearr_16338_17763 = state_16297__$1;
(statearr_16338_17763[(1)] = (8));

} else {
var statearr_16339_17764 = state_16297__$1;
(statearr_16339_17764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (3))){
var inst_16295 = (state_16297[(2)]);
var state_16297__$1 = state_16297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16297__$1,inst_16295);
} else {
if((state_val_16300 === (2))){
var state_16297__$1 = state_16297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16297__$1,(4),ch);
} else {
if((state_val_16300 === (11))){
var inst_16285 = (state_16297[(2)]);
var state_16297__$1 = state_16297;
var statearr_16348_17766 = state_16297__$1;
(statearr_16348_17766[(2)] = inst_16285);

(statearr_16348_17766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (9))){
var state_16297__$1 = state_16297;
var statearr_16360_17767 = state_16297__$1;
(statearr_16360_17767[(2)] = null);

(statearr_16360_17767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (5))){
var inst_16280 = cljs.core.async.close_BANG_(out);
var state_16297__$1 = state_16297;
var statearr_16368_17771 = state_16297__$1;
(statearr_16368_17771[(2)] = inst_16280);

(statearr_16368_17771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (10))){
var inst_16288 = (state_16297[(2)]);
var state_16297__$1 = (function (){var statearr_16369 = state_16297;
(statearr_16369[(8)] = inst_16288);

return statearr_16369;
})();
var statearr_16370_17772 = state_16297__$1;
(statearr_16370_17772[(2)] = null);

(statearr_16370_17772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (8))){
var inst_16277 = (state_16297[(7)]);
var state_16297__$1 = state_16297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16297__$1,(11),out,inst_16277);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13169__auto__ = null;
var cljs$core$async$state_machine__13169__auto____0 = (function (){
var statearr_16374 = [null,null,null,null,null,null,null,null,null];
(statearr_16374[(0)] = cljs$core$async$state_machine__13169__auto__);

(statearr_16374[(1)] = (1));

return statearr_16374;
});
var cljs$core$async$state_machine__13169__auto____1 = (function (state_16297){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_16297);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e16375){var ex__13172__auto__ = e16375;
var statearr_16377_17775 = state_16297;
(statearr_16377_17775[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_16297[(4)]))){
var statearr_16378_17776 = state_16297;
(statearr_16378_17776[(1)] = cljs.core.first((state_16297[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17777 = state_16297;
state_16297 = G__17777;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$state_machine__13169__auto__ = function(state_16297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13169__auto____1.call(this,state_16297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13169__auto____0;
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13169__auto____1;
return cljs$core$async$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_16379 = f__13567__auto__();
(statearr_16379[(6)] = c__13566__auto___17754);

return statearr_16379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16383 = arguments.length;
switch (G__16383) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13566__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_16467){
var state_val_16471 = (state_16467[(1)]);
if((state_val_16471 === (7))){
var inst_16459 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16476_17783 = state_16467__$1;
(statearr_16476_17783[(2)] = inst_16459);

(statearr_16476_17783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (20))){
var inst_16427 = (state_16467[(7)]);
var inst_16440 = (state_16467[(2)]);
var inst_16441 = cljs.core.next(inst_16427);
var inst_16410 = inst_16441;
var inst_16411 = null;
var inst_16412 = (0);
var inst_16413 = (0);
var state_16467__$1 = (function (){var statearr_16477 = state_16467;
(statearr_16477[(8)] = inst_16412);

(statearr_16477[(9)] = inst_16440);

(statearr_16477[(10)] = inst_16413);

(statearr_16477[(11)] = inst_16411);

(statearr_16477[(12)] = inst_16410);

return statearr_16477;
})();
var statearr_16479_17786 = state_16467__$1;
(statearr_16479_17786[(2)] = null);

(statearr_16479_17786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (1))){
var state_16467__$1 = state_16467;
var statearr_16482_17787 = state_16467__$1;
(statearr_16482_17787[(2)] = null);

(statearr_16482_17787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (4))){
var inst_16399 = (state_16467[(13)]);
var inst_16399__$1 = (state_16467[(2)]);
var inst_16400 = (inst_16399__$1 == null);
var state_16467__$1 = (function (){var statearr_16484 = state_16467;
(statearr_16484[(13)] = inst_16399__$1);

return statearr_16484;
})();
if(cljs.core.truth_(inst_16400)){
var statearr_16487_17791 = state_16467__$1;
(statearr_16487_17791[(1)] = (5));

} else {
var statearr_16488_17792 = state_16467__$1;
(statearr_16488_17792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (15))){
var state_16467__$1 = state_16467;
var statearr_16492_17793 = state_16467__$1;
(statearr_16492_17793[(2)] = null);

(statearr_16492_17793[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (21))){
var state_16467__$1 = state_16467;
var statearr_16496_17795 = state_16467__$1;
(statearr_16496_17795[(2)] = null);

(statearr_16496_17795[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (13))){
var inst_16412 = (state_16467[(8)]);
var inst_16413 = (state_16467[(10)]);
var inst_16411 = (state_16467[(11)]);
var inst_16410 = (state_16467[(12)]);
var inst_16422 = (state_16467[(2)]);
var inst_16424 = (inst_16413 + (1));
var tmp16489 = inst_16412;
var tmp16490 = inst_16411;
var tmp16491 = inst_16410;
var inst_16410__$1 = tmp16491;
var inst_16411__$1 = tmp16490;
var inst_16412__$1 = tmp16489;
var inst_16413__$1 = inst_16424;
var state_16467__$1 = (function (){var statearr_16498 = state_16467;
(statearr_16498[(8)] = inst_16412__$1);

(statearr_16498[(14)] = inst_16422);

(statearr_16498[(10)] = inst_16413__$1);

(statearr_16498[(11)] = inst_16411__$1);

(statearr_16498[(12)] = inst_16410__$1);

return statearr_16498;
})();
var statearr_16501_17798 = state_16467__$1;
(statearr_16501_17798[(2)] = null);

(statearr_16501_17798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (22))){
var state_16467__$1 = state_16467;
var statearr_16503_17799 = state_16467__$1;
(statearr_16503_17799[(2)] = null);

(statearr_16503_17799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (6))){
var inst_16399 = (state_16467[(13)]);
var inst_16408 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16399) : f.call(null,inst_16399));
var inst_16409 = cljs.core.seq(inst_16408);
var inst_16410 = inst_16409;
var inst_16411 = null;
var inst_16412 = (0);
var inst_16413 = (0);
var state_16467__$1 = (function (){var statearr_16505 = state_16467;
(statearr_16505[(8)] = inst_16412);

(statearr_16505[(10)] = inst_16413);

(statearr_16505[(11)] = inst_16411);

(statearr_16505[(12)] = inst_16410);

return statearr_16505;
})();
var statearr_16506_17800 = state_16467__$1;
(statearr_16506_17800[(2)] = null);

(statearr_16506_17800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (17))){
var inst_16427 = (state_16467[(7)]);
var inst_16431 = cljs.core.chunk_first(inst_16427);
var inst_16432 = cljs.core.chunk_rest(inst_16427);
var inst_16433 = cljs.core.count(inst_16431);
var inst_16410 = inst_16432;
var inst_16411 = inst_16431;
var inst_16412 = inst_16433;
var inst_16413 = (0);
var state_16467__$1 = (function (){var statearr_16509 = state_16467;
(statearr_16509[(8)] = inst_16412);

(statearr_16509[(10)] = inst_16413);

(statearr_16509[(11)] = inst_16411);

(statearr_16509[(12)] = inst_16410);

return statearr_16509;
})();
var statearr_16512_17806 = state_16467__$1;
(statearr_16512_17806[(2)] = null);

(statearr_16512_17806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (3))){
var inst_16461 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16467__$1,inst_16461);
} else {
if((state_val_16471 === (12))){
var inst_16449 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16514_17810 = state_16467__$1;
(statearr_16514_17810[(2)] = inst_16449);

(statearr_16514_17810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (2))){
var state_16467__$1 = state_16467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16467__$1,(4),in$);
} else {
if((state_val_16471 === (23))){
var inst_16457 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16523_17817 = state_16467__$1;
(statearr_16523_17817[(2)] = inst_16457);

(statearr_16523_17817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (19))){
var inst_16444 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16524_17823 = state_16467__$1;
(statearr_16524_17823[(2)] = inst_16444);

(statearr_16524_17823[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (11))){
var inst_16410 = (state_16467[(12)]);
var inst_16427 = (state_16467[(7)]);
var inst_16427__$1 = cljs.core.seq(inst_16410);
var state_16467__$1 = (function (){var statearr_16528 = state_16467;
(statearr_16528[(7)] = inst_16427__$1);

return statearr_16528;
})();
if(inst_16427__$1){
var statearr_16529_17831 = state_16467__$1;
(statearr_16529_17831[(1)] = (14));

} else {
var statearr_16530_17832 = state_16467__$1;
(statearr_16530_17832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (9))){
var inst_16451 = (state_16467[(2)]);
var inst_16452 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16467__$1 = (function (){var statearr_16531 = state_16467;
(statearr_16531[(15)] = inst_16451);

return statearr_16531;
})();
if(cljs.core.truth_(inst_16452)){
var statearr_16532_17833 = state_16467__$1;
(statearr_16532_17833[(1)] = (21));

} else {
var statearr_16534_17834 = state_16467__$1;
(statearr_16534_17834[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (5))){
var inst_16402 = cljs.core.async.close_BANG_(out);
var state_16467__$1 = state_16467;
var statearr_16535_17837 = state_16467__$1;
(statearr_16535_17837[(2)] = inst_16402);

(statearr_16535_17837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (14))){
var inst_16427 = (state_16467[(7)]);
var inst_16429 = cljs.core.chunked_seq_QMARK_(inst_16427);
var state_16467__$1 = state_16467;
if(inst_16429){
var statearr_16538_17838 = state_16467__$1;
(statearr_16538_17838[(1)] = (17));

} else {
var statearr_16539_17839 = state_16467__$1;
(statearr_16539_17839[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (16))){
var inst_16447 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16547_17840 = state_16467__$1;
(statearr_16547_17840[(2)] = inst_16447);

(statearr_16547_17840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16471 === (10))){
var inst_16413 = (state_16467[(10)]);
var inst_16411 = (state_16467[(11)]);
var inst_16420 = cljs.core._nth(inst_16411,inst_16413);
var state_16467__$1 = state_16467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16467__$1,(13),out,inst_16420);
} else {
if((state_val_16471 === (18))){
var inst_16427 = (state_16467[(7)]);
var inst_16438 = cljs.core.first(inst_16427);
var state_16467__$1 = state_16467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16467__$1,(20),out,inst_16438);
} else {
if((state_val_16471 === (8))){
var inst_16412 = (state_16467[(8)]);
var inst_16413 = (state_16467[(10)]);
var inst_16415 = (inst_16413 < inst_16412);
var inst_16416 = inst_16415;
var state_16467__$1 = state_16467;
if(cljs.core.truth_(inst_16416)){
var statearr_16548_17841 = state_16467__$1;
(statearr_16548_17841[(1)] = (10));

} else {
var statearr_16549_17872 = state_16467__$1;
(statearr_16549_17872[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13169__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13169__auto____0 = (function (){
var statearr_16550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16550[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13169__auto__);

(statearr_16550[(1)] = (1));

return statearr_16550;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13169__auto____1 = (function (state_16467){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_16467);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e16552){var ex__13172__auto__ = e16552;
var statearr_16553_17875 = state_16467;
(statearr_16553_17875[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_16467[(4)]))){
var statearr_16554_17876 = state_16467;
(statearr_16554_17876[(1)] = cljs.core.first((state_16467[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17877 = state_16467;
state_16467 = G__17877;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13169__auto__ = function(state_16467){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13169__auto____1.call(this,state_16467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13169__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13169__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_16555 = f__13567__auto__();
(statearr_16555[(6)] = c__13566__auto__);

return statearr_16555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));

return c__13566__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16558 = arguments.length;
switch (G__16558) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16565 = arguments.length;
switch (G__16565) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16569 = arguments.length;
switch (G__16569) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13566__auto___17899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_16600){
var state_val_16601 = (state_16600[(1)]);
if((state_val_16601 === (7))){
var inst_16595 = (state_16600[(2)]);
var state_16600__$1 = state_16600;
var statearr_16603_17904 = state_16600__$1;
(statearr_16603_17904[(2)] = inst_16595);

(statearr_16603_17904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16601 === (1))){
var inst_16576 = null;
var state_16600__$1 = (function (){var statearr_16605 = state_16600;
(statearr_16605[(7)] = inst_16576);

return statearr_16605;
})();
var statearr_16606_17905 = state_16600__$1;
(statearr_16606_17905[(2)] = null);

(statearr_16606_17905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16601 === (4))){
var inst_16579 = (state_16600[(8)]);
var inst_16579__$1 = (state_16600[(2)]);
var inst_16581 = (inst_16579__$1 == null);
var inst_16582 = cljs.core.not(inst_16581);
var state_16600__$1 = (function (){var statearr_16607 = state_16600;
(statearr_16607[(8)] = inst_16579__$1);

return statearr_16607;
})();
if(inst_16582){
var statearr_16609_17906 = state_16600__$1;
(statearr_16609_17906[(1)] = (5));

} else {
var statearr_16610_17907 = state_16600__$1;
(statearr_16610_17907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16601 === (6))){
var state_16600__$1 = state_16600;
var statearr_16611_17909 = state_16600__$1;
(statearr_16611_17909[(2)] = null);

(statearr_16611_17909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16601 === (3))){
var inst_16597 = (state_16600[(2)]);
var inst_16598 = cljs.core.async.close_BANG_(out);
var state_16600__$1 = (function (){var statearr_16613 = state_16600;
(statearr_16613[(9)] = inst_16597);

return statearr_16613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16600__$1,inst_16598);
} else {
if((state_val_16601 === (2))){
var state_16600__$1 = state_16600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16600__$1,(4),ch);
} else {
if((state_val_16601 === (11))){
var inst_16579 = (state_16600[(8)]);
var inst_16589 = (state_16600[(2)]);
var inst_16576 = inst_16579;
var state_16600__$1 = (function (){var statearr_16620 = state_16600;
(statearr_16620[(7)] = inst_16576);

(statearr_16620[(10)] = inst_16589);

return statearr_16620;
})();
var statearr_16621_17922 = state_16600__$1;
(statearr_16621_17922[(2)] = null);

(statearr_16621_17922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16601 === (9))){
var inst_16579 = (state_16600[(8)]);
var state_16600__$1 = state_16600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16600__$1,(11),out,inst_16579);
} else {
if((state_val_16601 === (5))){
var inst_16579 = (state_16600[(8)]);
var inst_16576 = (state_16600[(7)]);
var inst_16584 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16579,inst_16576);
var state_16600__$1 = state_16600;
if(inst_16584){
var statearr_16626_17924 = state_16600__$1;
(statearr_16626_17924[(1)] = (8));

} else {
var statearr_16627_17925 = state_16600__$1;
(statearr_16627_17925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16601 === (10))){
var inst_16592 = (state_16600[(2)]);
var state_16600__$1 = state_16600;
var statearr_16628_17926 = state_16600__$1;
(statearr_16628_17926[(2)] = inst_16592);

(statearr_16628_17926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16601 === (8))){
var inst_16576 = (state_16600[(7)]);
var tmp16625 = inst_16576;
var inst_16576__$1 = tmp16625;
var state_16600__$1 = (function (){var statearr_16629 = state_16600;
(statearr_16629[(7)] = inst_16576__$1);

return statearr_16629;
})();
var statearr_16630_17927 = state_16600__$1;
(statearr_16630_17927[(2)] = null);

(statearr_16630_17927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13169__auto__ = null;
var cljs$core$async$state_machine__13169__auto____0 = (function (){
var statearr_16631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16631[(0)] = cljs$core$async$state_machine__13169__auto__);

(statearr_16631[(1)] = (1));

return statearr_16631;
});
var cljs$core$async$state_machine__13169__auto____1 = (function (state_16600){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_16600);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e16634){var ex__13172__auto__ = e16634;
var statearr_16635_17928 = state_16600;
(statearr_16635_17928[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_16600[(4)]))){
var statearr_16636_17929 = state_16600;
(statearr_16636_17929[(1)] = cljs.core.first((state_16600[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17930 = state_16600;
state_16600 = G__17930;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$state_machine__13169__auto__ = function(state_16600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13169__auto____1.call(this,state_16600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13169__auto____0;
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13169__auto____1;
return cljs$core$async$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_16637 = f__13567__auto__();
(statearr_16637[(6)] = c__13566__auto___17899);

return statearr_16637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16643 = arguments.length;
switch (G__16643) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13566__auto___17933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_16689){
var state_val_16690 = (state_16689[(1)]);
if((state_val_16690 === (7))){
var inst_16685 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16693_17934 = state_16689__$1;
(statearr_16693_17934[(2)] = inst_16685);

(statearr_16693_17934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (1))){
var inst_16650 = (new Array(n));
var inst_16653 = inst_16650;
var inst_16654 = (0);
var state_16689__$1 = (function (){var statearr_16694 = state_16689;
(statearr_16694[(7)] = inst_16653);

(statearr_16694[(8)] = inst_16654);

return statearr_16694;
})();
var statearr_16695_17935 = state_16689__$1;
(statearr_16695_17935[(2)] = null);

(statearr_16695_17935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (4))){
var inst_16657 = (state_16689[(9)]);
var inst_16657__$1 = (state_16689[(2)]);
var inst_16658 = (inst_16657__$1 == null);
var inst_16659 = cljs.core.not(inst_16658);
var state_16689__$1 = (function (){var statearr_16699 = state_16689;
(statearr_16699[(9)] = inst_16657__$1);

return statearr_16699;
})();
if(inst_16659){
var statearr_16700_17936 = state_16689__$1;
(statearr_16700_17936[(1)] = (5));

} else {
var statearr_16701_17937 = state_16689__$1;
(statearr_16701_17937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (15))){
var inst_16679 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16702_17938 = state_16689__$1;
(statearr_16702_17938[(2)] = inst_16679);

(statearr_16702_17938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (13))){
var state_16689__$1 = state_16689;
var statearr_16703_17939 = state_16689__$1;
(statearr_16703_17939[(2)] = null);

(statearr_16703_17939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (6))){
var inst_16654 = (state_16689[(8)]);
var inst_16675 = (inst_16654 > (0));
var state_16689__$1 = state_16689;
if(cljs.core.truth_(inst_16675)){
var statearr_16707_17940 = state_16689__$1;
(statearr_16707_17940[(1)] = (12));

} else {
var statearr_16709_17941 = state_16689__$1;
(statearr_16709_17941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (3))){
var inst_16687 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16689__$1,inst_16687);
} else {
if((state_val_16690 === (12))){
var inst_16653 = (state_16689[(7)]);
var inst_16677 = cljs.core.vec(inst_16653);
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16689__$1,(15),out,inst_16677);
} else {
if((state_val_16690 === (2))){
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16689__$1,(4),ch);
} else {
if((state_val_16690 === (11))){
var inst_16669 = (state_16689[(2)]);
var inst_16670 = (new Array(n));
var inst_16653 = inst_16670;
var inst_16654 = (0);
var state_16689__$1 = (function (){var statearr_16716 = state_16689;
(statearr_16716[(7)] = inst_16653);

(statearr_16716[(10)] = inst_16669);

(statearr_16716[(8)] = inst_16654);

return statearr_16716;
})();
var statearr_16717_17942 = state_16689__$1;
(statearr_16717_17942[(2)] = null);

(statearr_16717_17942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (9))){
var inst_16653 = (state_16689[(7)]);
var inst_16667 = cljs.core.vec(inst_16653);
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16689__$1,(11),out,inst_16667);
} else {
if((state_val_16690 === (5))){
var inst_16653 = (state_16689[(7)]);
var inst_16654 = (state_16689[(8)]);
var inst_16657 = (state_16689[(9)]);
var inst_16662 = (state_16689[(11)]);
var inst_16661 = (inst_16653[inst_16654] = inst_16657);
var inst_16662__$1 = (inst_16654 + (1));
var inst_16663 = (inst_16662__$1 < n);
var state_16689__$1 = (function (){var statearr_16718 = state_16689;
(statearr_16718[(12)] = inst_16661);

(statearr_16718[(11)] = inst_16662__$1);

return statearr_16718;
})();
if(cljs.core.truth_(inst_16663)){
var statearr_16719_17943 = state_16689__$1;
(statearr_16719_17943[(1)] = (8));

} else {
var statearr_16720_17944 = state_16689__$1;
(statearr_16720_17944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (14))){
var inst_16682 = (state_16689[(2)]);
var inst_16683 = cljs.core.async.close_BANG_(out);
var state_16689__$1 = (function (){var statearr_16722 = state_16689;
(statearr_16722[(13)] = inst_16682);

return statearr_16722;
})();
var statearr_16724_17947 = state_16689__$1;
(statearr_16724_17947[(2)] = inst_16683);

(statearr_16724_17947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (10))){
var inst_16673 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16725_17948 = state_16689__$1;
(statearr_16725_17948[(2)] = inst_16673);

(statearr_16725_17948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (8))){
var inst_16653 = (state_16689[(7)]);
var inst_16662 = (state_16689[(11)]);
var tmp16721 = inst_16653;
var inst_16653__$1 = tmp16721;
var inst_16654 = inst_16662;
var state_16689__$1 = (function (){var statearr_16726 = state_16689;
(statearr_16726[(7)] = inst_16653__$1);

(statearr_16726[(8)] = inst_16654);

return statearr_16726;
})();
var statearr_16727_17952 = state_16689__$1;
(statearr_16727_17952[(2)] = null);

(statearr_16727_17952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13169__auto__ = null;
var cljs$core$async$state_machine__13169__auto____0 = (function (){
var statearr_16730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16730[(0)] = cljs$core$async$state_machine__13169__auto__);

(statearr_16730[(1)] = (1));

return statearr_16730;
});
var cljs$core$async$state_machine__13169__auto____1 = (function (state_16689){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_16689);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e16733){var ex__13172__auto__ = e16733;
var statearr_16734_17956 = state_16689;
(statearr_16734_17956[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_16689[(4)]))){
var statearr_16736_17961 = state_16689;
(statearr_16736_17961[(1)] = cljs.core.first((state_16689[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17962 = state_16689;
state_16689 = G__17962;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$state_machine__13169__auto__ = function(state_16689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13169__auto____1.call(this,state_16689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13169__auto____0;
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13169__auto____1;
return cljs$core$async$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_16738 = f__13567__auto__();
(statearr_16738[(6)] = c__13566__auto___17933);

return statearr_16738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16745 = arguments.length;
switch (G__16745) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13566__auto___17964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13567__auto__ = (function (){var switch__13168__auto__ = (function (state_16804){
var state_val_16805 = (state_16804[(1)]);
if((state_val_16805 === (7))){
var inst_16798 = (state_16804[(2)]);
var state_16804__$1 = state_16804;
var statearr_16807_17965 = state_16804__$1;
(statearr_16807_17965[(2)] = inst_16798);

(statearr_16807_17965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (1))){
var inst_16752 = [];
var inst_16753 = inst_16752;
var inst_16754 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16804__$1 = (function (){var statearr_16810 = state_16804;
(statearr_16810[(7)] = inst_16754);

(statearr_16810[(8)] = inst_16753);

return statearr_16810;
})();
var statearr_16812_17966 = state_16804__$1;
(statearr_16812_17966[(2)] = null);

(statearr_16812_17966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (4))){
var inst_16760 = (state_16804[(9)]);
var inst_16760__$1 = (state_16804[(2)]);
var inst_16761 = (inst_16760__$1 == null);
var inst_16762 = cljs.core.not(inst_16761);
var state_16804__$1 = (function (){var statearr_16815 = state_16804;
(statearr_16815[(9)] = inst_16760__$1);

return statearr_16815;
})();
if(inst_16762){
var statearr_16816_17967 = state_16804__$1;
(statearr_16816_17967[(1)] = (5));

} else {
var statearr_16818_17968 = state_16804__$1;
(statearr_16818_17968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (15))){
var inst_16753 = (state_16804[(8)]);
var inst_16790 = cljs.core.vec(inst_16753);
var state_16804__$1 = state_16804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16804__$1,(18),out,inst_16790);
} else {
if((state_val_16805 === (13))){
var inst_16783 = (state_16804[(2)]);
var state_16804__$1 = state_16804;
var statearr_16822_17972 = state_16804__$1;
(statearr_16822_17972[(2)] = inst_16783);

(statearr_16822_17972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (6))){
var inst_16753 = (state_16804[(8)]);
var inst_16785 = inst_16753.length;
var inst_16786 = (inst_16785 > (0));
var state_16804__$1 = state_16804;
if(cljs.core.truth_(inst_16786)){
var statearr_16824_17973 = state_16804__$1;
(statearr_16824_17973[(1)] = (15));

} else {
var statearr_16826_17974 = state_16804__$1;
(statearr_16826_17974[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (17))){
var inst_16795 = (state_16804[(2)]);
var inst_16796 = cljs.core.async.close_BANG_(out);
var state_16804__$1 = (function (){var statearr_16830 = state_16804;
(statearr_16830[(10)] = inst_16795);

return statearr_16830;
})();
var statearr_16831_17976 = state_16804__$1;
(statearr_16831_17976[(2)] = inst_16796);

(statearr_16831_17976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (3))){
var inst_16800 = (state_16804[(2)]);
var state_16804__$1 = state_16804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16804__$1,inst_16800);
} else {
if((state_val_16805 === (12))){
var inst_16753 = (state_16804[(8)]);
var inst_16776 = cljs.core.vec(inst_16753);
var state_16804__$1 = state_16804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16804__$1,(14),out,inst_16776);
} else {
if((state_val_16805 === (2))){
var state_16804__$1 = state_16804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16804__$1,(4),ch);
} else {
if((state_val_16805 === (11))){
var inst_16760 = (state_16804[(9)]);
var inst_16764 = (state_16804[(11)]);
var inst_16753 = (state_16804[(8)]);
var inst_16772 = inst_16753.push(inst_16760);
var tmp16832 = inst_16753;
var inst_16753__$1 = tmp16832;
var inst_16754 = inst_16764;
var state_16804__$1 = (function (){var statearr_16833 = state_16804;
(statearr_16833[(12)] = inst_16772);

(statearr_16833[(7)] = inst_16754);

(statearr_16833[(8)] = inst_16753__$1);

return statearr_16833;
})();
var statearr_16834_17983 = state_16804__$1;
(statearr_16834_17983[(2)] = null);

(statearr_16834_17983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (9))){
var inst_16754 = (state_16804[(7)]);
var inst_16768 = cljs.core.keyword_identical_QMARK_(inst_16754,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16804__$1 = state_16804;
var statearr_16835_17984 = state_16804__$1;
(statearr_16835_17984[(2)] = inst_16768);

(statearr_16835_17984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (5))){
var inst_16765 = (state_16804[(13)]);
var inst_16760 = (state_16804[(9)]);
var inst_16754 = (state_16804[(7)]);
var inst_16764 = (state_16804[(11)]);
var inst_16764__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16760) : f.call(null,inst_16760));
var inst_16765__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16764__$1,inst_16754);
var state_16804__$1 = (function (){var statearr_16839 = state_16804;
(statearr_16839[(13)] = inst_16765__$1);

(statearr_16839[(11)] = inst_16764__$1);

return statearr_16839;
})();
if(inst_16765__$1){
var statearr_16842_17985 = state_16804__$1;
(statearr_16842_17985[(1)] = (8));

} else {
var statearr_16843_17987 = state_16804__$1;
(statearr_16843_17987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (14))){
var inst_16760 = (state_16804[(9)]);
var inst_16764 = (state_16804[(11)]);
var inst_16778 = (state_16804[(2)]);
var inst_16779 = [];
var inst_16780 = inst_16779.push(inst_16760);
var inst_16753 = inst_16779;
var inst_16754 = inst_16764;
var state_16804__$1 = (function (){var statearr_16849 = state_16804;
(statearr_16849[(14)] = inst_16778);

(statearr_16849[(7)] = inst_16754);

(statearr_16849[(8)] = inst_16753);

(statearr_16849[(15)] = inst_16780);

return statearr_16849;
})();
var statearr_16850_17993 = state_16804__$1;
(statearr_16850_17993[(2)] = null);

(statearr_16850_17993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (16))){
var state_16804__$1 = state_16804;
var statearr_16854_17994 = state_16804__$1;
(statearr_16854_17994[(2)] = null);

(statearr_16854_17994[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (10))){
var inst_16770 = (state_16804[(2)]);
var state_16804__$1 = state_16804;
if(cljs.core.truth_(inst_16770)){
var statearr_16855_17995 = state_16804__$1;
(statearr_16855_17995[(1)] = (11));

} else {
var statearr_16860_17996 = state_16804__$1;
(statearr_16860_17996[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (18))){
var inst_16792 = (state_16804[(2)]);
var state_16804__$1 = state_16804;
var statearr_16868_17997 = state_16804__$1;
(statearr_16868_17997[(2)] = inst_16792);

(statearr_16868_17997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16805 === (8))){
var inst_16765 = (state_16804[(13)]);
var state_16804__$1 = state_16804;
var statearr_16873_17998 = state_16804__$1;
(statearr_16873_17998[(2)] = inst_16765);

(statearr_16873_17998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13169__auto__ = null;
var cljs$core$async$state_machine__13169__auto____0 = (function (){
var statearr_16874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16874[(0)] = cljs$core$async$state_machine__13169__auto__);

(statearr_16874[(1)] = (1));

return statearr_16874;
});
var cljs$core$async$state_machine__13169__auto____1 = (function (state_16804){
while(true){
var ret_value__13170__auto__ = (function (){try{while(true){
var result__13171__auto__ = switch__13168__auto__(state_16804);
if(cljs.core.keyword_identical_QMARK_(result__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13171__auto__;
}
break;
}
}catch (e16875){var ex__13172__auto__ = e16875;
var statearr_16876_17999 = state_16804;
(statearr_16876_17999[(2)] = ex__13172__auto__);


if(cljs.core.seq((state_16804[(4)]))){
var statearr_16877_18000 = state_16804;
(statearr_16877_18000[(1)] = cljs.core.first((state_16804[(4)])));

} else {
throw ex__13172__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18001 = state_16804;
state_16804 = G__18001;
continue;
} else {
return ret_value__13170__auto__;
}
break;
}
});
cljs$core$async$state_machine__13169__auto__ = function(state_16804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13169__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13169__auto____1.call(this,state_16804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13169__auto____0;
cljs$core$async$state_machine__13169__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13169__auto____1;
return cljs$core$async$state_machine__13169__auto__;
})()
})();
var state__13568__auto__ = (function (){var statearr_16892 = f__13567__auto__();
(statearr_16892[(6)] = c__13566__auto___17964);

return statearr_16892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13568__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
