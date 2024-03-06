goog.provide('repl_playground.app');
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
if((typeof repl_playground !== 'undefined') && (typeof repl_playground.app !== 'undefined') && (typeof repl_playground.app._BANG_eval_ready_QMARK_ !== 'undefined')){
} else {
repl_playground.app._BANG_eval_ready_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
repl_playground.app.compiling = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
repl_playground.app.code = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("(+ 1 1)");
repl_playground.app.code_result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
repl_playground.app.current_snippet = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((2));
repl_playground.app.snippets = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"1",new cljs.core.Keyword(null,"ns","ns",441598760),"pixi-tutorial-1.game"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"2",new cljs.core.Keyword(null,"ns","ns",441598760),"pixi-tutorial-2.game"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"game",new cljs.core.Keyword(null,"ns","ns",441598760),"pixi-tutorial-final.game"], null)], null);
repl_playground.app.handle_eval = (function repl_playground$app$handle_eval(result){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));

cljs.core.reset_BANG_(repl_playground.app.compiling,false);

var printed_result = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11731_11768 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11732_11769 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11733_11770 = true;
var _STAR_print_fn_STAR__temp_val__11734_11771 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11733_11770);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11734_11771);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11732_11769);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11731_11768);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return cljs.core.reset_BANG_(repl_playground.app.code_result,printed_result);
});
repl_playground.app.compile = repl_playground.repl.make_compile(repl_playground.app.handle_eval);
repl_playground.app.update_result = (function repl_playground$app$update_result(mirror){
cljs.core.reset_BANG_(repl_playground.app.compiling,true);

var value = mirror.getValue();
cljs.core.reset_BANG_(repl_playground.app.code,value);

return repl_playground.app.compile(["(ns pixi-tutorial-final.game)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_playground.app.code))].join(''));
});
repl_playground.app.clear_pixi_BANG_ = (function repl_playground$app$clear_pixi_BANG_(){
return (goog.dom.getElement("pixi-app").innerHTML = "");
});
repl_playground.app.create_editor = (function repl_playground$app$create_editor(node,val){
return module$node_modules$codemirror$lib$codemirror(node,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"theme","theme",-1247880880),"dracula",new cljs.core.Keyword(null,"mode","mode",654403691),"clojure"], null)));
});
repl_playground.app.update_editor_value = (function repl_playground$app$update_editor_value(mirror,val){
mirror.getDoc().setValue(val);

return repl_playground.app.clear_pixi_BANG_();
});
repl_playground.app.editor = (function repl_playground$app$editor(snippet_name){
var root_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var mirror = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var snippet_path = ["/snippets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(snippet_name),".cljs"].join('');
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"editor",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var c__11300__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11301__auto__ = (function (){var switch__11230__auto__ = (function (state_11744){
var state_val_11745 = (state_11744[(1)]);
if((state_val_11745 === (1))){
var inst_11736 = cljs_http.client.get(snippet_path);
var state_11744__$1 = state_11744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11744__$1,(2),inst_11736);
} else {
if((state_val_11745 === (2))){
var inst_11738 = (state_11744[(2)]);
var inst_11739 = cljs.core.deref(root_ref);
var inst_11740 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_11738);
var inst_11741 = repl_playground.app.create_editor(inst_11739,inst_11740);
var inst_11742 = cljs.core.reset_BANG_(mirror,inst_11741);
var state_11744__$1 = state_11744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11744__$1,inst_11742);
} else {
return null;
}
}
});
return (function() {
var repl_playground$app$editor_$_state_machine__11231__auto__ = null;
var repl_playground$app$editor_$_state_machine__11231__auto____0 = (function (){
var statearr_11746 = [null,null,null,null,null,null,null];
(statearr_11746[(0)] = repl_playground$app$editor_$_state_machine__11231__auto__);

(statearr_11746[(1)] = (1));

return statearr_11746;
});
var repl_playground$app$editor_$_state_machine__11231__auto____1 = (function (state_11744){
while(true){
var ret_value__11232__auto__ = (function (){try{while(true){
var result__11233__auto__ = switch__11230__auto__(state_11744);
if(cljs.core.keyword_identical_QMARK_(result__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11233__auto__;
}
break;
}
}catch (e11747){var ex__11234__auto__ = e11747;
var statearr_11748_11772 = state_11744;
(statearr_11748_11772[(2)] = ex__11234__auto__);


if(cljs.core.seq((state_11744[(4)]))){
var statearr_11749_11773 = state_11744;
(statearr_11749_11773[(1)] = cljs.core.first((state_11744[(4)])));

} else {
throw ex__11234__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11774 = state_11744;
state_11744 = G__11774;
continue;
} else {
return ret_value__11232__auto__;
}
break;
}
});
repl_playground$app$editor_$_state_machine__11231__auto__ = function(state_11744){
switch(arguments.length){
case 0:
return repl_playground$app$editor_$_state_machine__11231__auto____0.call(this);
case 1:
return repl_playground$app$editor_$_state_machine__11231__auto____1.call(this,state_11744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_playground$app$editor_$_state_machine__11231__auto__.cljs$core$IFn$_invoke$arity$0 = repl_playground$app$editor_$_state_machine__11231__auto____0;
repl_playground$app$editor_$_state_machine__11231__auto__.cljs$core$IFn$_invoke$arity$1 = repl_playground$app$editor_$_state_machine__11231__auto____1;
return repl_playground$app$editor_$_state_machine__11231__auto__;
})()
})();
var state__11302__auto__ = (function (){var statearr_11750 = f__11301__auto__();
(statearr_11750[(6)] = c__11300__auto__);

return statearr_11750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11302__auto__);
}));

return c__11300__auto__;
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var new_argv = cljs.core.rest(reagent.core.argv(this$));
var snippet_path__$1 = cljs.core.first(new_argv);
var snippet_ns = cljs.core.second(new_argv);
var c__11300__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11301__auto__ = (function (){var switch__11230__auto__ = (function (state_11760){
var state_val_11761 = (state_11760[(1)]);
if((state_val_11761 === (1))){
var inst_11751 = cljs.core.deref(mirror);
var inst_11752 = repl_playground.app.update_editor_value(inst_11751,"Loading snippet...");
var inst_11753 = cljs.core.deref(mirror);
var inst_11754 = cljs_http.client.get(snippet_path__$1);
var state_11760__$1 = (function (){var statearr_11762 = state_11760;
(statearr_11762[(7)] = inst_11753);

(statearr_11762[(8)] = inst_11752);

return statearr_11762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11760__$1,(2),inst_11754);
} else {
if((state_val_11761 === (2))){
var inst_11753 = (state_11760[(7)]);
var inst_11756 = (state_11760[(2)]);
var inst_11757 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_11756);
var inst_11758 = repl_playground.app.update_editor_value(inst_11753,inst_11757);
var state_11760__$1 = state_11760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11760__$1,inst_11758);
} else {
return null;
}
}
});
return (function() {
var repl_playground$app$editor_$_state_machine__11231__auto__ = null;
var repl_playground$app$editor_$_state_machine__11231__auto____0 = (function (){
var statearr_11763 = [null,null,null,null,null,null,null,null,null];
(statearr_11763[(0)] = repl_playground$app$editor_$_state_machine__11231__auto__);

(statearr_11763[(1)] = (1));

return statearr_11763;
});
var repl_playground$app$editor_$_state_machine__11231__auto____1 = (function (state_11760){
while(true){
var ret_value__11232__auto__ = (function (){try{while(true){
var result__11233__auto__ = switch__11230__auto__(state_11760);
if(cljs.core.keyword_identical_QMARK_(result__11233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11233__auto__;
}
break;
}
}catch (e11764){var ex__11234__auto__ = e11764;
var statearr_11765_11775 = state_11760;
(statearr_11765_11775[(2)] = ex__11234__auto__);


if(cljs.core.seq((state_11760[(4)]))){
var statearr_11766_11776 = state_11760;
(statearr_11766_11776[(1)] = cljs.core.first((state_11760[(4)])));

} else {
throw ex__11234__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11777 = state_11760;
state_11760 = G__11777;
continue;
} else {
return ret_value__11232__auto__;
}
break;
}
});
repl_playground$app$editor_$_state_machine__11231__auto__ = function(state_11760){
switch(arguments.length){
case 0:
return repl_playground$app$editor_$_state_machine__11231__auto____0.call(this);
case 1:
return repl_playground$app$editor_$_state_machine__11231__auto____1.call(this,state_11760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repl_playground$app$editor_$_state_machine__11231__auto__.cljs$core$IFn$_invoke$arity$0 = repl_playground$app$editor_$_state_machine__11231__auto____0;
repl_playground$app$editor_$_state_machine__11231__auto__.cljs$core$IFn$_invoke$arity$1 = repl_playground$app$editor_$_state_machine__11231__auto____1;
return repl_playground$app$editor_$_state_machine__11231__auto__;
})()
})();
var state__11302__auto__ = (function (){var statearr_11767 = f__11301__auto__();
(statearr_11767[(6)] = c__11300__auto__);

return statearr_11767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11302__auto__);
}));

return c__11300__auto__;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor","div.editor",-1423342585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__11735_SHARP_){
return cljs.core.reset_BANG_(root_ref,p1__11735_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return repl_playground.app.update_result(cljs.core.deref(mirror));
})], null),"Eval \uD83D\uDE08"], null)], null);
})], null));
});
repl_playground.app.result = (function repl_playground$app$result(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(repl_playground.app.compiling))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"compiling-msg"], null),"Compiling\u2026"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"compile-result"], null),["Last eval result: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_playground.app.code_result))].join('')], null))], null);
});
repl_playground.app.main_editor = (function repl_playground$app$main_editor(snippet){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-wrapper","div.row-wrapper",-411086503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-editor","div.main-editor",-2067828776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_playground.app.editor,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(snippet)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"pixi-app",new cljs.core.Keyword(null,"class","class",-2030961996),"canvas"], null)], null)], null);
});
repl_playground.app.mini_editor = (function repl_playground$app$mini_editor(snippet,title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mini-editor","div.mini-editor",-534837807),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),(cljs.core.truth_(title)?title:snippet)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_playground.app.editor,snippet], null)], null);
});
repl_playground.app.app = (function repl_playground$app$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_playground.app.main_editor,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(repl_playground.app.snippets,cljs.core.deref(repl_playground.app.current_snippet))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mini-editors","div.mini-editors",-121964386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_playground.app.mini_editor,"clear-bullets","Clear bullets"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_playground.app.result], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Eval ready: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(repl_playground.app._BANG_eval_ready_QMARK_))].join('')], null)], null);
});
if((typeof repl_playground !== 'undefined') && (typeof repl_playground.app !== 'undefined') && (typeof repl_playground.app.root !== 'undefined')){
} else {
repl_playground.app.root = module$node_modules$react_dom$client.createRoot(goog.dom.getElement("root"));
}
repl_playground.app.init = (function repl_playground$app$init(){
repl_playground.repl.init(repl_playground.app._BANG_eval_ready_QMARK_);

return repl_playground.app.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repl_playground.app.app], null)));
});
repl_playground.app.re_render = (function repl_playground$app$re_render(){
return repl_playground.app.init();
});

//# sourceMappingURL=repl_playground.app.js.map
