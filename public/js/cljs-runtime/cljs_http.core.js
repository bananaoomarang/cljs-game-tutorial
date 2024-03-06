goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = (function (){var fexpr__12111 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__12111.cljs$core$IFn$_invoke$arity$1 ? fexpr__12111.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__12111.call(null,channel));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12112){
var vec__12113 = p__12112;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12113,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12113,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__12116 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__12116)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__12116)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__12116)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__12116)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__12116)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__12116)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12116)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__12117){
var map__12118 = p__12117;
var map__12118__$1 = cljs.core.__destructure_map(map__12118);
var request = map__12118__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12118__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12118__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12118__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__12119 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__12119,default_headers);

cljs_http.core.apply_response_type_BANG_(G__12119,response_type);

G__12119.setTimeoutInterval(timeout);

G__12119.setWithCredentials(send_credentials);

return G__12119;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__12120){
var map__12121 = p__12120;
var map__12121__$1 = cljs.core.__destructure_map(map__12121);
var request = map__12121__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12121__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5002__auto__ = request_method;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__12122 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__12122) : cljs_http.core.error_kw.call(null,G__12122));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_12162 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__12123_12164 = xhr;
G__12123_12164.setProgressEventsEnabled(true);

G__12123_12164.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_12162,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__12123_12164.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_12162,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__11290__auto___12166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11291__auto__ = (function (){var switch__11126__auto__ = (function (state_12134){
var state_val_12135 = (state_12134[(1)]);
if((state_val_12135 === (1))){
var state_12134__$1 = state_12134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12134__$1,(2),cancel);
} else {
if((state_val_12135 === (2))){
var inst_12125 = (state_12134[(2)]);
var inst_12126 = xhr.isComplete();
var inst_12127 = cljs.core.not(inst_12126);
var state_12134__$1 = (function (){var statearr_12136 = state_12134;
(statearr_12136[(7)] = inst_12125);

return statearr_12136;
})();
if(inst_12127){
var statearr_12137_12170 = state_12134__$1;
(statearr_12137_12170[(1)] = (3));

} else {
var statearr_12138_12171 = state_12134__$1;
(statearr_12138_12171[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (3))){
var inst_12129 = xhr.abort();
var state_12134__$1 = state_12134;
var statearr_12139_12172 = state_12134__$1;
(statearr_12139_12172[(2)] = inst_12129);

(statearr_12139_12172[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (4))){
var state_12134__$1 = state_12134;
var statearr_12140_12173 = state_12134__$1;
(statearr_12140_12173[(2)] = null);

(statearr_12140_12173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12135 === (5))){
var inst_12132 = (state_12134[(2)]);
var state_12134__$1 = state_12134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12134__$1,inst_12132);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__11127__auto__ = null;
var cljs_http$core$xhr_$_state_machine__11127__auto____0 = (function (){
var statearr_12141 = [null,null,null,null,null,null,null,null];
(statearr_12141[(0)] = cljs_http$core$xhr_$_state_machine__11127__auto__);

(statearr_12141[(1)] = (1));

return statearr_12141;
});
var cljs_http$core$xhr_$_state_machine__11127__auto____1 = (function (state_12134){
while(true){
var ret_value__11128__auto__ = (function (){try{while(true){
var result__11129__auto__ = switch__11126__auto__(state_12134);
if(cljs.core.keyword_identical_QMARK_(result__11129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11129__auto__;
}
break;
}
}catch (e12142){var ex__11130__auto__ = e12142;
var statearr_12143_12174 = state_12134;
(statearr_12143_12174[(2)] = ex__11130__auto__);


if(cljs.core.seq((state_12134[(4)]))){
var statearr_12144_12175 = state_12134;
(statearr_12144_12175[(1)] = cljs.core.first((state_12134[(4)])));

} else {
throw ex__11130__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12176 = state_12134;
state_12134 = G__12176;
continue;
} else {
return ret_value__11128__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__11127__auto__ = function(state_12134){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__11127__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__11127__auto____1.call(this,state_12134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__11127__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__11127__auto____0;
cljs_http$core$xhr_$_state_machine__11127__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__11127__auto____1;
return cljs_http$core$xhr_$_state_machine__11127__auto__;
})()
})();
var state__11292__auto__ = (function (){var statearr_12145 = f__11291__auto__();
(statearr_12145[(6)] = c__11290__auto___12166);

return statearr_12145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11292__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__12146){
var map__12147 = p__12146;
var map__12147__$1 = cljs.core.__destructure_map(map__12147);
var request = map__12147__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12147__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12147__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12147__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12147__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_12178 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_12178], null));

if(cljs.core.truth_(cancel)){
var c__11290__auto___12183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11291__auto__ = (function (){var switch__11126__auto__ = (function (state_12152){
var state_val_12153 = (state_12152[(1)]);
if((state_val_12153 === (1))){
var state_12152__$1 = state_12152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12152__$1,(2),cancel);
} else {
if((state_val_12153 === (2))){
var inst_12149 = (state_12152[(2)]);
var inst_12150 = jsonp.cancel(req_12178);
var state_12152__$1 = (function (){var statearr_12154 = state_12152;
(statearr_12154[(7)] = inst_12149);

return statearr_12154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12152__$1,inst_12150);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__11127__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__11127__auto____0 = (function (){
var statearr_12155 = [null,null,null,null,null,null,null,null];
(statearr_12155[(0)] = cljs_http$core$jsonp_$_state_machine__11127__auto__);

(statearr_12155[(1)] = (1));

return statearr_12155;
});
var cljs_http$core$jsonp_$_state_machine__11127__auto____1 = (function (state_12152){
while(true){
var ret_value__11128__auto__ = (function (){try{while(true){
var result__11129__auto__ = switch__11126__auto__(state_12152);
if(cljs.core.keyword_identical_QMARK_(result__11129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11129__auto__;
}
break;
}
}catch (e12156){var ex__11130__auto__ = e12156;
var statearr_12157_12185 = state_12152;
(statearr_12157_12185[(2)] = ex__11130__auto__);


if(cljs.core.seq((state_12152[(4)]))){
var statearr_12158_12186 = state_12152;
(statearr_12158_12186[(1)] = cljs.core.first((state_12152[(4)])));

} else {
throw ex__11130__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12187 = state_12152;
state_12152 = G__12187;
continue;
} else {
return ret_value__11128__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__11127__auto__ = function(state_12152){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__11127__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__11127__auto____1.call(this,state_12152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__11127__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__11127__auto____0;
cljs_http$core$jsonp_$_state_machine__11127__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__11127__auto____1;
return cljs_http$core$jsonp_$_state_machine__11127__auto__;
})()
})();
var state__11292__auto__ = (function (){var statearr_12159 = f__11291__auto__();
(statearr_12159[(6)] = c__11290__auto___12183);

return statearr_12159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11292__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__12160){
var map__12161 = p__12160;
var map__12161__$1 = cljs.core.__destructure_map(map__12161);
var request = map__12161__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12161__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
