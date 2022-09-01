// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-type-of@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";var v={level:r,override:!0,extend:!0,copy:!0};function c(e,r,s,p,j,f){var v,h,a,u,b,x,y,g,w;for(h=d(j),s-=1,u=i(r),w=0;w<u.length;w++)if(x=u[w],(v=n(e,x))||f)if(y=r[x],v){if(b=e[x],a=l(b),!o(b)&&"object"===a&&t(y)&&s){c(b,y,s,p,j,f);continue}h?(g=j(b,y,x),p&&g!==b&&g===y&&(g=m(g)),e[x]=g):j&&(e[x]=p?m(y):y)}else e[x]=p?m(y):y}function h(e){return function(r){var i,n,o,d;if((i=arguments.length-1)<1)throw new Error("insufficient arguments. Must provide both a target object and one or more source objects.");if(!t(r))throw new TypeError(s("0kj3X",r));for(o=new Array(i),d=0;d<i;d++){if(!t(n=arguments[d+1]))throw new TypeError(s("invalid argument. All arguments must be objects. Index: `%u`. Value: `%s`.",d,n));o[d]=n}for(d=0;d<i;d++)c(r,o[d],e.level,e.copy,e.override,e.extend);return r}}var a=h(v);function u(e){var r,t;if(t=function(e,r){return p(r)?n(r,"level")&&(e.level=r.level,!f(e.level))?new TypeError(s("0kj3b","level",e.level)):n(r,"copy")&&(e.copy=r.copy,!j(e.copy))?new TypeError(s("0kj30","copy",e.copy)):!n(r,"override")||(e.override=r.override,j(e.override)||d(e.override))?n(r,"extend")&&(e.extend=r.extend,!j(e.extend))?new TypeError(s("0kj30","extend",e.extend)):null:new TypeError(s("0kjCJ","override",e.override)):new TypeError(s("0kj2h",r))}(r=m(v),e),t)throw t;return h(r)}e(a,"factory",u);export{a as default,u as factory};
//# sourceMappingURL=index.mjs.map