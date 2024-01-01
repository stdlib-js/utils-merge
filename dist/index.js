"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=c(function(te,O){
var K=require('@stdlib/constants-float64-pinf/dist');function N(){return{level:K,override:!0,extend:!0,copy:!0}}O.exports=N
});var E=c(function(ve,j){
var R=require('@stdlib/utils-keys/dist'),z=require('@stdlib/assert-is-object/dist'),D=require('@stdlib/assert-has-own-property/dist'),G=require('@stdlib/assert-is-buffer/dist'),H=require('@stdlib/assert-is-function/dist'),J=require('@stdlib/utils-type-of/dist'),b=require('@stdlib/utils-copy/dist');function h(e,r,n,a,t,o){var i,x,g,q,s,u,v,f,d;for(x=H(t),n-=1,q=R(r),d=0;d<q.length;d++)if(u=q[d],i=D(e,u),!(!i&&!o))if(v=r[u],i){if(s=e[u],g=J(s),!G(s)&&g==="object"&&z(v)&&n){h(s,v,n,a,t,o);continue}x?(f=t(s,v,u),a&&f!==s&&f===v&&(f=b(f)),e[u]=f):t&&(a?e[u]=b(v):e[u]=v)}else a?e[u]=b(v):e[u]=v}j.exports=h
});var p=c(function(oe,F){
var P=require('@stdlib/assert-is-object/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),L=E();function Q(e){return r;function r(n){var a,t,o,i;if(a=arguments.length-1,a<1)throw new Error(l('1Vl1l'));if(!P(n))throw new TypeError(T('1Vl3L',n));for(o=new Array(a),i=0;i<a;i++){if(t=arguments[i+1],!P(t))throw new TypeError(T('1VlEY',i,t));o[i]=t}for(i=0;i<a;i++)L(n,o[i],e.level,e.copy,e.override,e.extend);return n}}F.exports=Q
});var M=c(function(se,I){
var S=y(),U=p(),W=U(S());I.exports=W
});var k=c(function(fe,V){
var X=require('@stdlib/assert-is-plain-object/dist'),m=require('@stdlib/assert-has-own-property/dist'),w=require('@stdlib/assert-is-boolean/dist').isPrimitive,Y=require('@stdlib/assert-is-function/dist'),Z=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,l=require('@stdlib/error-tools-fmtprodmsg/dist');function _(e,r){return X(r)?m(r,"level")&&(e.level=r.level,!Z(e.level))?new TypeError(l('1Vl3P',"level",e.level)):m(r,"copy")&&(e.copy=r.copy,!w(e.copy))?new TypeError(l('1Vl2o',"copy",e.copy)):m(r,"override")&&(e.override=r.override,!w(e.override)&&!Y(e.override))?new TypeError(l('1VlBW',"override",e.override)):m(r,"extend")&&(e.extend=r.extend,!w(e.extend))?new TypeError(l('1Vl2o',"extend",e.extend)):null:new TypeError(l('1Vl2V',r));}V.exports=_
});var B=c(function(ce,A){
var $=k(),ee=y(),re=p();function ie(e){var r,n;if(r=ee(),n=$(r,e),n)throw n;return re(r)}A.exports=ie
});var ne=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=M(),ae=B();ne(C,"factory",ae);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
