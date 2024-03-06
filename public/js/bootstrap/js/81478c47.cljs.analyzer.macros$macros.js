goog.provide('cljs.analyzer.macros$macros');
var ret__5781__auto___11798 = (function (){
cljs.analyzer.macros$macros.with_warning_handlers = (function cljs$analyzer$macros$macros$with_warning_handlers(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11799 = arguments.length;
var i__5727__auto___11800 = (0);
while(true){
if((i__5727__auto___11800 < len__5726__auto___11799)){
args__5732__auto__.push((arguments[i__5727__auto___11800]));

var G__11802 = (i__5727__auto___11800 + (1));
i__5727__auto___11800 = G__11802;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.analyzer.macros$macros.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,handlers,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warning-handlers*","cljs.analyzer/*cljs-warning-handlers*",882579751,null),null,(1),null)),(new cljs.core.List(null,handlers,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$applyTo = (function (seq11680){
var G__11681 = cljs.core.first(seq11680);
var seq11680__$1 = cljs.core.next(seq11680);
var G__11682 = cljs.core.first(seq11680__$1);
var seq11680__$2 = cljs.core.next(seq11680__$1);
var G__11683 = cljs.core.first(seq11680__$2);
var seq11680__$3 = cljs.core.next(seq11680__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11681,G__11682,G__11683,seq11680__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_warning_handlers.cljs$lang$macro = true);

var ret__5781__auto___11815 = (function (){
cljs.analyzer.macros$macros.no_warn = (function cljs$analyzer$macros$macros$no_warn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11821 = arguments.length;
var i__5727__auto___11822 = (0);
while(true){
if((i__5727__auto___11822 < len__5726__auto___11821)){
args__5732__auto__.push((arguments[i__5727__auto___11822]));

var G__11823 = (i__5727__auto___11822 + (1));
i__5727__auto___11822 = G__11823;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(cljs.analyzer.macros$macros.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",-289667730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",-289667730,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.no_warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.no_warn.cljs$lang$applyTo = (function (seq11696){
var G__11697 = cljs.core.first(seq11696);
var seq11696__$1 = cljs.core.next(seq11696);
var G__11698 = cljs.core.first(seq11696__$1);
var seq11696__$2 = cljs.core.next(seq11696__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11697,G__11698,seq11696__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.no_warn.cljs$lang$macro = true);

var ret__5781__auto___11824 = (function (){
cljs.analyzer.macros$macros.with_core_macros = (function cljs$analyzer$macros$macros$with_core_macros(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11825 = arguments.length;
var i__5727__auto___11826 = (0);
while(true){
if((i__5727__auto___11826 < len__5726__auto___11825)){
args__5732__auto__.push((arguments[i__5727__auto___11826]));

var G__11827 = (i__5727__auto___11826 + (1));
i__5727__auto___11826 = G__11827;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_core_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.analyzer.macros$macros.with_core_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,path,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,path,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","-cljs-macros-loaded","cljs.analyzer/-cljs-macros-loaded",1918493478,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),(new cljs.core.List(null,path,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.analyzer.macros$macros.with_core_macros.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.with_core_macros.cljs$lang$applyTo = (function (seq11720){
var G__11721 = cljs.core.first(seq11720);
var seq11720__$1 = cljs.core.next(seq11720);
var G__11722 = cljs.core.first(seq11720__$1);
var seq11720__$2 = cljs.core.next(seq11720__$1);
var G__11723 = cljs.core.first(seq11720__$2);
var seq11720__$3 = cljs.core.next(seq11720__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11721,G__11722,G__11723,seq11720__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_core_macros.cljs$lang$macro = true);

var ret__5781__auto___11831 = (function (){
cljs.analyzer.macros$macros.with_core_macros_file = (function cljs$analyzer$macros$macros$with_core_macros_file(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11832 = arguments.length;
var i__5727__auto___11833 = (0);
while(true){
if((i__5727__auto___11833 < len__5726__auto___11832)){
args__5732__auto__.push((arguments[i__5727__auto___11833]));

var G__11835 = (i__5727__auto___11833 + (1));
i__5727__auto___11833 = G__11835;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.with_core_macros_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.analyzer.macros$macros.with_core_macros_file.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,path,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,path,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","-cljs-macros-loaded","cljs.analyzer/-cljs-macros-loaded",1918493478,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-path*","cljs.analyzer/*cljs-macros-path*",-1737616995,null),null,(1),null)),(new cljs.core.List(null,path,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-macros-is-classpath*","cljs.analyzer/*cljs-macros-is-classpath*",1674023778,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$applyTo = (function (seq11735){
var G__11736 = cljs.core.first(seq11735);
var seq11735__$1 = cljs.core.next(seq11735);
var G__11737 = cljs.core.first(seq11735__$1);
var seq11735__$2 = cljs.core.next(seq11735__$1);
var G__11738 = cljs.core.first(seq11735__$2);
var seq11735__$3 = cljs.core.next(seq11735__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11736,G__11737,G__11738,seq11735__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.with_core_macros_file.cljs$lang$macro = true);

var ret__5781__auto___11836 = (function (){
cljs.analyzer.macros$macros.wrapping_errors = (function cljs$analyzer$macros$macros$wrapping_errors(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11837 = arguments.length;
var i__5727__auto___11838 = (0);
while(true){
if((i__5727__auto___11838 < len__5726__auto___11837)){
args__5732__auto__.push((arguments[i__5727__auto___11838]));

var G__11840 = (i__5727__auto___11838 + (1));
i__5727__auto___11838 = G__11840;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.analyzer.macros$macros.wrapping_errors.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"err__11755__auto__","err__11755__auto__",-1036982012,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","has-error-data?","cljs.analyzer/has-error-data?",-2145150806,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__11755__auto__","err__11755__auto__",-1036982012,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__11755__auto__","err__11755__auto__",-1036982012,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","analysis-error?","cljs.analyzer/analysis-error?",-1824961346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__11755__auto__","err__11755__auto__",-1036982012,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error-data","cljs.analyzer/error-data",-70583485,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__11755__auto__","err__11755__auto__",-1036982012,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error-data","cljs.analyzer/error-data",-70583485,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","error","cljs.analyzer/error",1575241885,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__11755__auto__","err__11755__auto__",-1036982012,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__11755__auto__","err__11755__auto__",-1036982012,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$applyTo = (function (seq11756){
var G__11757 = cljs.core.first(seq11756);
var seq11756__$1 = cljs.core.next(seq11756);
var G__11758 = cljs.core.first(seq11756__$1);
var seq11756__$2 = cljs.core.next(seq11756__$1);
var G__11759 = cljs.core.first(seq11756__$2);
var seq11756__$3 = cljs.core.next(seq11756__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11757,G__11758,G__11759,seq11756__$3);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.wrapping_errors.cljs$lang$macro = true);

var ret__5781__auto___11851 = (function (){
cljs.analyzer.macros$macros.disallowing_recur = (function cljs$analyzer$macros$macros$disallowing_recur(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11852 = arguments.length;
var i__5727__auto___11853 = (0);
while(true){
if((i__5727__auto___11853 < len__5726__auto___11852)){
args__5732__auto__.push((arguments[i__5727__auto___11853]));

var G__11854 = (i__5727__auto___11853 + (1));
i__5727__auto___11853 = G__11854;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.disallowing_recur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(cljs.analyzer.macros$macros.disallowing_recur.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*recur-frames*","cljs.analyzer/*recur-frames*",-431441741,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*recur-frames*","cljs.analyzer/*recur-frames*",-431441741,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$applyTo = (function (seq11770){
var G__11771 = cljs.core.first(seq11770);
var seq11770__$1 = cljs.core.next(seq11770);
var G__11772 = cljs.core.first(seq11770__$1);
var seq11770__$2 = cljs.core.next(seq11770__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11771,G__11772,seq11770__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.disallowing_recur.cljs$lang$macro = true);

var ret__5781__auto___11856 = (function (){
cljs.analyzer.macros$macros.allowing_redef = (function cljs$analyzer$macros$macros$allowing_redef(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11857 = arguments.length;
var i__5727__auto___11858 = (0);
while(true){
if((i__5727__auto___11858 < len__5726__auto___11857)){
args__5732__auto__.push((arguments[i__5727__auto___11858]));

var G__11859 = (i__5727__auto___11858 + (1));
i__5727__auto___11858 = G__11859;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.allowing_redef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(cljs.analyzer.macros$macros.allowing_redef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*allow-redef*","cljs.analyzer/*allow-redef*",-501091249,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.allowing_redef.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.allowing_redef.cljs$lang$applyTo = (function (seq11775){
var G__11776 = cljs.core.first(seq11775);
var seq11775__$1 = cljs.core.next(seq11775);
var G__11777 = cljs.core.first(seq11775__$1);
var seq11775__$2 = cljs.core.next(seq11775__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11776,G__11777,seq11775__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.allowing_redef.cljs$lang$macro = true);

var ret__5781__auto___11860 = (function (){
cljs.analyzer.macros$macros.disallowing_ns_STAR_ = (function cljs$analyzer$macros$macros$disallowing_ns_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11861 = arguments.length;
var i__5727__auto___11863 = (0);
while(true){
if((i__5727__auto___11863 < len__5726__auto___11861)){
args__5732__auto__.push((arguments[i__5727__auto___11863]));

var G__11864 = (i__5727__auto___11863 + (1));
i__5727__auto___11863 = G__11864;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*allow-ns*","cljs.analyzer/*allow-ns*",-141648458,null),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$applyTo = (function (seq11785){
var G__11786 = cljs.core.first(seq11785);
var seq11785__$1 = cljs.core.next(seq11785);
var G__11787 = cljs.core.first(seq11785__$1);
var seq11785__$2 = cljs.core.next(seq11785__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11786,G__11787,seq11785__$2);
}));

return null;
})()
;
(cljs.analyzer.macros$macros.disallowing_ns_STAR_.cljs$lang$macro = true);

