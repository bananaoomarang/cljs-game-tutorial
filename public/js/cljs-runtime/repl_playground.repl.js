goog.provide('repl_playground.repl');
(cljs.js._STAR_eval_fn_STAR_ = cljs.js.js_eval);
repl_playground.repl.comp_state = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
repl_playground.repl.make_compile = (function repl_playground$repl$make_compile(handle_eval){
return (function (str,ns){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(repl_playground.repl.comp_state,str,"random-name",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,repl_playground.repl.comp_state),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null),handle_eval);
});
});
repl_playground.repl.init = (function repl_playground$repl$init(_BANG_eval_ready_QMARK_){
return shadow.cljs.bootstrap.browser.init(repl_playground.repl.comp_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/js/bootstrap",new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"shadow-eval.user","shadow-eval.user",-2103561177,null),"null"], null), null)], null),(function (){
return cljs.core.reset_BANG_(_BANG_eval_ready_QMARK_,true);
}));
});

//# sourceMappingURL=repl_playground.repl.js.map
