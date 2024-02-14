// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).merge=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var n=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var t,e,o;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,o=parseInt(e,10),!isFinite(o)){if(!n(e))throw new Error("invalid integer. Value: "+e);o=0}return o<0&&("u"===r.specifier||10!==t)&&(o=4294967295+o+1),o<0?(e=(-o).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=o.toString(t),o||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var l=Math.abs,p=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,v=/e\+(\d)$/,b=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=y.call(e,m,"$1e"),e=y.call(e,w,"e"),e=y.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=y.call(e,v,"e+0$1"),e=y.call(e,b,"e-0$1"),r.alternate&&(e=y.call(e,g,"$1."),e=y.call(e,d,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):p.call(e)}function A(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function O(r,t,e){var n=t-r.length;return n<0?r:r=e?r+A(n):A(n)+r}var E=String.fromCharCode,_=isNaN,S=Array.isArray;function I(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,e,n,o,a,u,l,p,s;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,p=0;p<r.length;p++)if(f(n=r[p]))u+=n;else{if(t=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function F(r){var t,e,n,o;for(e=[],o=0,n=T.exec(r);n;)(t=r.slice(o,T.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),o=T.lastIndex,n=T.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function U(r){return"string"==typeof r}function k(r){var t,e;if(!U(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[F(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return x.apply(null,t)}var V,C=Object.prototype,N=C.toString,$=C.__defineGetter__,B=C.__defineSetter__,G=C.__lookupGetter__,M=C.__lookupSetter__;V=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(G.call(r,t)||M.call(r,t)?(n=r.__proto__,r.__proto__=C,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,t,e.get),a&&B&&B.call(r,t,e.set),r};var R=V;function L(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var z=Number.POSITIVE_INFINITY;function W(){return{level:z,override:!0,extend:!0,copy:!0}}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var Z=X();function D(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function H(r,t){return null!=r&&q.call(r,t)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=D()?function(r){var t,e,n;if(null==r)return Y.call(r);e=r[K],t=H(r,K);try{r[K]=void 0}catch(t){return Y.call(r)}return n=Y.call(r),t?r[K]=e:delete r[K],n}:function(r){return Y.call(r)};var rr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};function tr(r){return"object"==typeof r&&null!==r&&!rr(r)}function er(r){return Object.keys(Object(r))}var nr,or=void 0!==Object.keys;function ir(r){return"[object Arguments]"===Q(r)}nr=function(){return ir(arguments)}();var ar=nr;function ur(r){return"string"==typeof r}var cr=String.prototype.valueOf;var fr=D();function lr(r){return"object"==typeof r&&(r instanceof String||(fr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Q(r)))}function pr(r){return ur(r)||lr(r)}function sr(r){return"number"==typeof r}L(pr,"isPrimitive",ur),L(pr,"isObject",lr);var yr=Number,vr=yr.prototype.toString;var br=D();function gr(r){return"object"==typeof r&&(r instanceof yr||(br?function(r){try{return vr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function dr(r){return sr(r)||gr(r)}function hr(r){return r!=r}function wr(r){return sr(r)&&hr(r)}function mr(r){return gr(r)&&hr(r.valueOf())}function jr(r){return wr(r)||mr(r)}L(dr,"isPrimitive",sr),L(dr,"isObject",gr),L(jr,"isPrimitive",wr),L(jr,"isObject",mr);var Ar=Number.NEGATIVE_INFINITY,Or=Math.floor;function Er(r){return Or(r)===r}function _r(r){return r<z&&r>Ar&&Er(r)}function Sr(r){return sr(r)&&_r(r)}function Ir(r){return gr(r)&&_r(r.valueOf())}function xr(r){return Sr(r)||Ir(r)}L(xr,"isPrimitive",Sr),L(xr,"isObject",Ir);var Tr=Object.prototype.propertyIsEnumerable;var Pr=!Tr.call("beep","0");var Fr;Fr=ar?ir:function(r){return null!==r&&"object"==typeof r&&!rr(r)&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=4294967295&&H(r,"callee")&&!function(r,t){var e;return null!=r&&(!(e=Tr.call(r,t))&&Pr&&pr(r)?!wr(t=+t)&&Sr(t)&&t>=0&&t<r.length:e)}(r,"callee")};var Ur=Fr,kr=Array.prototype.slice;function Vr(r){return null!==r&&"object"==typeof r}function Cr(r){return"string"==typeof r}L(Vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!rr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Vr));var Nr=String.prototype.valueOf;var $r=D();function Br(r){return"object"==typeof r&&(r instanceof String||($r?function(r){try{return Nr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Q(r)))}function Gr(r){return Cr(r)||Br(r)}function Mr(r){return r!=r}function Rr(r){return sr(r)&&Mr(r)}function Lr(r){return gr(r)&&Mr(r.valueOf())}function zr(r){return Rr(r)||Lr(r)}L(Gr,"isPrimitive",Cr),L(Gr,"isObject",Br),L(zr,"isPrimitive",Rr),L(zr,"isObject",Lr);var Wr=Object.prototype.propertyIsEnumerable;var Xr=!Wr.call("beep","0");function Zr(r,t){var e;return null!=r&&(!(e=Wr.call(r,t))&&Xr&&Gr(r)?!Rr(t=+t)&&Sr(t)&&t>=0&&t<r.length:e)}var Dr=Zr((function(){}),"prototype"),Yr=!Zr({toString:null},"toString");function qr(r){return r!=r}function Hr(r){return sr(r)&&qr(r)}function Jr(r){return gr(r)&&qr(r.valueOf())}function Kr(r){return Hr(r)||Jr(r)}L(Kr,"isPrimitive",Hr),L(Kr,"isObject",Jr);function Qr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=9007199254740991}function rt(r){return"string"==typeof r}var tt=String.prototype.valueOf;var et=D();function nt(r){return"object"==typeof r&&(r instanceof String||(et?function(r){try{return tt.call(r),!0}catch(r){return!1}}(r):"[object String]"===Q(r)))}function ot(r){return rt(r)||nt(r)}function it(r,t,e){var n,o;if(!Qr(r)&&!rt(r))throw new TypeError(k("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Sr(e))throw new TypeError(k("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Kr(t)){for(;o<n;o++)if(Kr(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}L(ot,"isPrimitive",rt),L(ot,"isObject",nt);var at=/./;function ut(r){return"boolean"==typeof r}var ct=Boolean,ft=Boolean.prototype.toString;var lt=D();function pt(r){return"object"==typeof r&&(r instanceof ct||(lt?function(r){try{return ft.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function st(r){return ut(r)||pt(r)}function yt(){return new Function("return this;")()}L(st,"isPrimitive",ut),L(st,"isObject",pt);var vt="object"==typeof self?self:null,bt="object"==typeof window?window:null,gt="object"==typeof global?global:null,dt="object"==typeof globalThis?globalThis:null;var ht=function(r){if(arguments.length){if(!ut(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return yt()}if(dt)return dt;if(vt)return vt;if(bt)return bt;if(gt)return gt;throw new Error("unexpected error. Unable to resolve global object.")}(),wt=ht.document&&ht.document.childNodes,mt=Int8Array;function jt(){return/^\s*function\s*([^(]*)/i}var At=/^\s*function\s*([^(]*)/i;function Ot(r){return Vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function Et(r){var t,e,n;if(("Object"===(e=Q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=At.exec(n.toString()))return t[1]}return Ot(r)?"Buffer":e}L(jt,"REGEXP",At);var _t="function"==typeof at||"object"==typeof mt||"function"==typeof wt?function(r){return Et(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Et(r).toLowerCase():t};function St(r){return r.constructor&&r.constructor.prototype===r}var It=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],xt="undefined"==typeof window?void 0:window;var Tt=function(){var r;if("undefined"===_t(xt))return!1;for(r in xt)try{-1===it(It,r)&&H(xt,r)&&null!==xt[r]&&"object"===_t(xt[r])&&St(xt[r])}catch(r){return!0}return!1}(),Pt="undefined"!=typeof window;var Ft,Ut=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ft=or?function(){return 2!==(er(arguments)||"").length}(1,2)?function(r){return Ur(r)?er(kr.call(r)):er(r)}:er:function(r){var t,e,n,o,i,a,u;if(o=[],Ur(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!H(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Vr(r))return o;e=Dr&&n}for(i in r)e&&"prototype"===i||!H(r,i)||o.push(String(i));if(Yr)for(t=function(r){if(!1===Pt&&!Tt)return St(r);try{return St(r)}catch(r){return!1}}(r),u=0;u<Ut.length;u++)a=Ut[u],t&&"constructor"===a||!H(r,a)||o.push(String(a));return o};var kt=Ft;function Vt(r){return"function"===_t(r)}function Ct(r){return Sr(r)&&r>=0}function Nt(r){return Ir(r)&&r.valueOf()>=0}function $t(r){return Ct(r)||Nt(r)}L($t,"isPrimitive",Ct),L($t,"isObject",Nt);var Bt,Gt=Object,Mt=Object.getPrototypeOf;Bt=Vt(Object.getPrototypeOf)?Mt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Rt=Bt;function Lt(r){return null==r?null:(r=Gt(r),Rt(r))}function zt(r){return"string"==typeof r}var Wt=String.prototype.valueOf;var Xt=D();function Zt(r){return"object"==typeof r&&(r instanceof String||(Xt?function(r){try{return Wt.call(r),!0}catch(r){return!1}}(r):"[object String]"===Q(r)))}function Dt(r){return zt(r)||Zt(r)}function Yt(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}L(Dt,"isPrimitive",zt),L(Dt,"isObject",Zt),L(Yt,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var qt=void 0!==Object.getOwnPropertyNames,Ht=Object,Jt=Ht.getOwnPropertyNames;var Kt=qt?function(r){return Jt(Ht(r))}:function(r){return kt(Ht(r))},Qt=void 0!==Object.getOwnPropertyDescriptor,re=Object.getOwnPropertyDescriptor;var te=Qt?function(r,t){var e;return null==r||void 0===(e=re(r,t))?null:e}:function(r,t){return H(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null},ee="function"==typeof Object.defineProperty?Object.defineProperty:null;var ne,oe=Object.defineProperty,ie=Object.prototype,ae=ie.toString,ue=ie.__defineGetter__,ce=ie.__defineSetter__,fe=ie.__lookupGetter__,le=ie.__lookupSetter__;ne=function(){try{return ee({},"x",{}),!0}catch(r){return!1}}()?oe:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===ae.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===ae.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(fe.call(r,t)||le.call(r,t)?(n=r.__proto__,r.__proto__=ie,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ue&&ue.call(r,t,e.get),a&&ce&&ce.call(r,t,e.set),r};var pe=ne,se="function"==typeof Buffer?Buffer:null;var ye,ve=r.Buffer;ye=function(){var r,t;if("function"!=typeof se)return!1;try{r=Ot(t="function"==typeof se.from?se.from([1,2,3,4]):new se([1,2,3,4]))&&1===t[0]&&2===t[1]&&3===t[2]&&4===t[3]}catch(t){r=!1}return r}()?ve:function(){throw new Error("not implemented")};var be=ye;var ge=Vt(be.from)?function(r){if(!Ot(r))throw new TypeError(k("invalid argument. Must provide a Buffer. Value: `%s`.",r));return be.from(r)}:function(r){if(!Ot(r))throw new TypeError(k("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new be(r)},de="function"==typeof Int8Array;var he="function"==typeof Int8Array?Int8Array:null;var we,me="function"==typeof Int8Array?Int8Array:void 0;we=function(){var r,t,e;if("function"!=typeof he)return!1;try{t=new he([1,3.14,-3.14,128]),e=t,r=(de&&e instanceof Int8Array||"[object Int8Array]"===Q(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?me:function(){throw new Error("not implemented")};var je=we,Ae="function"==typeof Uint8Array;var Oe="function"==typeof Uint8Array?Uint8Array:null;var Ee,_e="function"==typeof Uint8Array?Uint8Array:void 0;Ee=function(){var r,t,e;if("function"!=typeof Oe)return!1;try{t=new Oe(t=[1,3.14,-3.14,256,257]),e=t,r=(Ae&&e instanceof Uint8Array||"[object Uint8Array]"===Q(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_e:function(){throw new Error("not implemented")};var Se=Ee,Ie=X();var xe=Object.prototype.toString;var Te="function"==typeof Symbol?Symbol:void 0,Pe="function"==typeof Te?Te.toStringTag:"";var Fe=Ie&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return xe.call(r);e=r[Pe],t=H(r,Pe);try{r[Pe]=void 0}catch(t){return xe.call(r)}return n=xe.call(r),t?r[Pe]=e:delete r[Pe],n}:function(r){return xe.call(r)},Ue="function"==typeof Uint8ClampedArray;var ke="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Ve,Ce="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Ve=function(){var r,t,e;if("function"!=typeof ke)return!1;try{t=new ke([-1,0,1,3.14,4.99,255,256]),e=t,r=(Ue&&e instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Fe(e))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Ce:function(){throw new Error("not implemented")};var Ne=Ve,$e="function"==typeof Int16Array;var Be="function"==typeof Int16Array?Int16Array:null;var Ge,Me="function"==typeof Int16Array?Int16Array:void 0;Ge=function(){var r,t,e;if("function"!=typeof Be)return!1;try{t=new Be([1,3.14,-3.14,32768]),e=t,r=($e&&e instanceof Int16Array||"[object Int16Array]"===Q(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Me:function(){throw new Error("not implemented")};var Re=Ge,Le="function"==typeof Uint16Array;var ze="function"==typeof Uint16Array?Uint16Array:null;var We,Xe="function"==typeof Uint16Array?Uint16Array:void 0;We=function(){var r,t,e;if("function"!=typeof ze)return!1;try{t=new ze(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Le&&e instanceof Uint16Array||"[object Uint16Array]"===Q(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xe:function(){throw new Error("not implemented")};var Ze=We,De="function"==typeof Int32Array;var Ye="function"==typeof Int32Array?Int32Array:null;var qe,He="function"==typeof Int32Array?Int32Array:void 0;qe=function(){var r,t,e;if("function"!=typeof Ye)return!1;try{t=new Ye([1,3.14,-3.14,2147483648]),e=t,r=(De&&e instanceof Int32Array||"[object Int32Array]"===Q(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?He:function(){throw new Error("not implemented")};var Je=qe,Ke="function"==typeof Uint32Array;var Qe="function"==typeof Uint32Array?Uint32Array:null;var rn,tn="function"==typeof Uint32Array?Uint32Array:void 0;rn=function(){var r,t,e;if("function"!=typeof Qe)return!1;try{t=new Qe(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Ke&&e instanceof Uint32Array||"[object Uint32Array]"===Q(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?tn:function(){throw new Error("not implemented")};var en=rn,nn="function"==typeof Float32Array;var on="function"==typeof Float32Array?Float32Array:null;var an,un="function"==typeof Float32Array?Float32Array:void 0;an=function(){var r,t,e;if("function"!=typeof on)return!1;try{t=new on([1,3.14,-3.14,5e40]),e=t,r=(nn&&e instanceof Float32Array||"[object Float32Array]"===Q(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===z}catch(t){r=!1}return r}()?un:function(){throw new Error("not implemented")};var cn=an,fn="function"==typeof Float64Array;var ln="function"==typeof Float64Array?Float64Array:null;var pn,sn="function"==typeof Float64Array?Float64Array:void 0;pn=function(){var r,t,e;if("function"!=typeof ln)return!1;try{t=new ln([1,3.14,-3.14,NaN]),e=t,r=(fn&&e instanceof Float64Array||"[object Float64Array]"===Q(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?sn:function(){throw new Error("not implemented")};var yn=pn;function vn(r){return new je(r)}function bn(r){return new Se(r)}function gn(r){return new Ne(r)}function dn(r){return new Re(r)}function hn(r){return new Ze(r)}function wn(r){return new Je(r)}function mn(r){return new en(r)}function jn(r){return new cn(r)}function An(r){return new yn(r)}var On={int8array:vn,uint8array:bn,uint8clampedarray:gn,int16array:dn,uint16array:hn,int32array:wn,uint32array:mn,float32array:jn,float64array:An};function En(r,t,e,n,o){var i,a,u,c,f,l,p,s,y,v;if(o-=1,"object"!=typeof r||null===r)return r;if(Ot(r))return ge(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Q(r))return!0;r=Lt(r)}return!1}(r))return function(r){var t,e,n,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),t=kt(r),a=0;a<t.length;a++)o=t[a],H(e=te(r,o),"value")&&(n=rr(r[o])?[]:{},e.value=En(r[o],n,u,c,-1)),pe(i,o,e);return i}(r);if("date"===(u=_t(r)))return new Date(+r);if("regexp"===u)return function(r){if(!zt(r))throw new TypeError(k("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=On[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var t,e,n,o,i,a,u,c;for(t=[],o=[],u=Object.create(Lt(r)),t.push(r),o.push(u),e=Kt(r),c=0;c<e.length;c++)n=e[c],H(i=te(r,n),"value")&&(a=rr(r[n])?[]:{},i.value=En(r[n],a,t,o,-1)),pe(u,n,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=kt(r),o>0)for(i=u,v=0;v<a.length;v++)s=r[l=a[v]],u=_t(s),"object"!=typeof s||null===s||"array"!==u&&"object"!==u||Ot(s)?"object"===i?(H(c=te(r,l),"value")&&(c.value=En(s)),pe(t,l,c)):t[l]=En(s):-1===(y=it(e,s))?(p=rr(s)?new Array(s.length):{},e.push(s),n.push(p),"array"===i?t[l]=En(s,p,e,n,o):(H(c=te(r,l),"value")&&(c.value=En(s,p,e,n,o)),pe(t,l,c))):t[l]=n[y];else if("array"===u)for(v=0;v<a.length;v++)t[l=a[v]]=r[l];else for(v=0;v<a.length;v++)l=a[v],c=te(r,l),pe(t,l,c);return Object.isExtensible(r)||Object.preventExtensions(t),Object.isSealed(r)&&Object.seal(t),Object.isFrozen(r)&&Object.freeze(t),t}function _n(r,t){var e;if(arguments.length>1){if(!Ct(t))throw new TypeError(k("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(0===t)return r}else t=z;return En(r,e=rr(r)?new Array(r.length):{},[r],[e],t)}function Sn(r,t,e,n,o,i){var a,u,c,f,l,p,s,y,v;for(u=Vt(o),e-=1,f=kt(t),v=0;v<f.length;v++)if((a=H(r,p=f[v]))||i)if(s=t[p],a){if(l=r[p],c=_t(l),!Ot(l)&&"object"===c&&tr(s)&&e){Sn(l,s,e,n,o,i);continue}u?(y=o(l,s,p),n&&y!==l&&y===s&&(y=_n(y)),r[p]=y):o&&(r[p]=n?_n(s):s)}else r[p]=n?_n(s):s}function In(r){return function(t){var e,n,o,i;if((e=arguments.length-1)<1)throw new Error("insufficient arguments. Must provide both a target object and one or more source objects.");if(!tr(t))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",t));for(o=new Array(e),i=0;i<e;i++){if(!tr(n=arguments[i+1]))throw new TypeError(k("invalid argument. All arguments must be objects. Index: `%u`. Value: `%s`.",i,n));o[i]=n}for(i=0;i<e;i++)Sn(t,o[i],r.level,r.copy,r.override,r.extend);return t}}var xn=In(W()),Tn=Object.prototype;function Pn(r){var t;return!!tr(r)&&(!(t=Lt(r))||!H(r,"constructor")&&H(t,"constructor")&&Vt(t.constructor)&&"[object Function]"===Q(t.constructor)&&H(t,"isPrototypeOf")&&Vt(t.isPrototypeOf)&&(t===Tn||function(r){var t;for(t in r)if(!H(r,t))return!1;return!0}(r)))}function Fn(r){return Sr(r)&&r>0}function Un(r){return Ir(r)&&r.valueOf()>0}function kn(r){return Fn(r)||Un(r)}return L(kn,"isPrimitive",Fn),L(kn,"isObject",Un),L(xn,"factory",(function(r){var t,e;if(e=function(r,t){return Pn(t)?H(t,"level")&&(r.level=t.level,!Fn(r.level))?new TypeError(k("invalid option. `%s` option must be a positive integer. Option: `%s`.","level",r.level)):H(t,"copy")&&(r.copy=t.copy,!ut(r.copy))?new TypeError(k("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy)):!H(t,"override")||(r.override=t.override,ut(r.override)||Vt(r.override))?H(t,"extend")&&(r.extend=t.extend,!ut(r.extend))?new TypeError(k("invalid option. `%s` option must be a boolean. Option: `%s`.","extend",r.extend)):null:new TypeError(k("invalid option. `%s` option must be either a boolean or a function. Option: `%s`.","override",r.override)):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}(t=W(),r),e)throw e;return In(t)})),xn}));
//# sourceMappingURL=index.js.map
