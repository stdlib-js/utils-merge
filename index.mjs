// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-type-of@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import{isPrimitive as v}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";function f(){return{level:r,override:!0,extend:!0,copy:!0}}function c(e,r,s,p,v,j){var f,h,a,y,x,u,b,g,w;for(h=d(v),s-=1,y=i(r),w=0;w<y.length;w++)if(u=y[w],(f=n(e,u))||j)if(b=r[u],f){if(x=e[u],a=l(x),!o(x)&&"object"===a&&t(b)&&s){c(x,b,s,p,v,j);continue}h?(g=v(x,b,u),p&&g!==x&&g===b&&(g=m(g)),e[u]=g):v&&(e[u]=p?m(b):b)}else e[u]=p?m(b):b}function h(e){return function(r){var i,n,o,d;if(i=arguments.length-1,i<1)throw new Error(s("1Vl1l"));if(!t(r))throw new TypeError(s("1Vl3L",r));for(o=new Array(i),d=0;d<i;d++){if(!t(n=arguments[d+1]))throw new TypeError(s("1VlEY",d,n));o[d]=n}for(d=0;d<i;d++)c(r,o[d],e.level,e.copy,e.override,e.extend);return r}}var a=h(f());function y(e){var r,t;if(t=function(e,r){return p(r)?n(r,"level")&&(e.level=r.level,!j(e.level))?new TypeError(s("1Vl3P","level",e.level)):n(r,"copy")&&(e.copy=r.copy,!v(e.copy))?new TypeError(s("1Vl2o","copy",e.copy)):!n(r,"override")||(e.override=r.override,v(e.override)||d(e.override))?n(r,"extend")&&(e.extend=r.extend,!v(e.extend))?new TypeError(s("1Vl2o","extend",e.extend)):null:new TypeError(s("1VlBW","override",e.override)):new TypeError(s("1Vl2V",r))}(r=f(),e),t)throw t;return h(r)}e(a,"factory",y);export{a as default,y as factory};
//# sourceMappingURL=index.mjs.map
