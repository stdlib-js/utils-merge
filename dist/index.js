"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=c(function(te,O){"use strict";var K=require("@stdlib/constants-float64-pinf");function N(){return{level:K,override:!0,extend:!0,copy:!0}}O.exports=N});var E=c(function(ve,j){"use strict";var R=require("@stdlib/utils-keys"),z=require("@stdlib/assert-is-object"),D=require("@stdlib/assert-has-own-property"),G=require("@stdlib/assert-is-buffer"),H=require("@stdlib/assert-is-function"),J=require("@stdlib/utils-type-of"),b=require("@stdlib/utils-copy");function h(e,r,n,a,t,o){var i,x,g,q,s,u,v,f,d;for(x=H(t),n-=1,q=R(r),d=0;d<q.length;d++)if(u=q[d],i=D(e,u),!(!i&&!o))if(v=r[u],i){if(s=e[u],g=J(s),!G(s)&&g==="object"&&z(v)&&n){h(s,v,n,a,t,o);continue}x?(f=t(s,v,u),a&&f!==s&&f===v&&(f=b(f)),e[u]=f):t&&(a?e[u]=b(v):e[u]=v)}else a?e[u]=b(v):e[u]=v}j.exports=h});var p=c(function(oe,F){"use strict";var P=require("@stdlib/assert-is-object"),T=require("@stdlib/string-format"),L=E();function Q(e){return r;function r(n){var a,t,o,i;if(a=arguments.length-1,a<1)throw new Error("insufficient arguments. Must provide both a target object and one or more source objects.");if(!P(n))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",n));for(o=new Array(a),i=0;i<a;i++){if(t=arguments[i+1],!P(t))throw new TypeError(T("invalid argument. All arguments must be objects. Index: `%u`. Value: `%s`.",i,t));o[i]=t}for(i=0;i<a;i++)L(n,o[i],e.level,e.copy,e.override,e.extend);return n}}F.exports=Q});var M=c(function(se,I){"use strict";var S=y(),U=p(),W=U(S());I.exports=W});var k=c(function(fe,V){"use strict";var X=require("@stdlib/assert-is-plain-object"),m=require("@stdlib/assert-has-own-property"),w=require("@stdlib/assert-is-boolean").isPrimitive,Y=require("@stdlib/assert-is-function"),Z=require("@stdlib/assert-is-positive-integer").isPrimitive,l=require("@stdlib/string-format");function _(e,r){return X(r)?m(r,"level")&&(e.level=r.level,!Z(e.level))?new TypeError(l("invalid option. `%s` option must be a positive integer. Option: `%s`.","level",e.level)):m(r,"copy")&&(e.copy=r.copy,!w(e.copy))?new TypeError(l("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",e.copy)):m(r,"override")&&(e.override=r.override,!w(e.override)&&!Y(e.override))?new TypeError(l("invalid option. `%s` option must be either a boolean or a function. Option: `%s`.","override",e.override)):m(r,"extend")&&(e.extend=r.extend,!w(e.extend))?new TypeError(l("invalid option. `%s` option must be a boolean. Option: `%s`.","extend",e.extend)):null:new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",r))}V.exports=_});var B=c(function(ce,A){"use strict";var $=k(),ee=y(),re=p();function ie(e){var r,n;if(r=ee(),n=$(r,e),n)throw n;return re(r)}A.exports=ie});var ne=require("@stdlib/utils-define-nonenumerable-read-only-property"),C=M(),ae=B();ne(C,"factory",ae);module.exports=C;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
