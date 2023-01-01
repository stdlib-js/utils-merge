// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).merge=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,t){var n,l,p,s;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),p="get"in t,s="set"in t,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(r,e,t.get),s&&u&&u.call(r,e,t.set),r};var l=t;function p(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var s=Number.POSITIVE_INFINITY,y={level:s,override:!0,extend:!0,copy:!0};var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return v&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function h(r,e){return null!=r&&b.call(r,e)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var m=g()?function(r){var e,t,n;if(null==r)return d.call(r);t=r[w],e=h(r,w);try{r[w]=void 0}catch(e){return d.call(r)}return n=d.call(r),e?r[w]=t:delete r[w],n}:function(r){return d.call(r)};var j=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)};function A(r){return"object"==typeof r&&null!==r&&!j(r)}function O(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function E(r){return Object.keys(Object(r))}var I,x=void 0!==Object.keys;function S(r){return"[object Arguments]"===m(r)}I=function(){return S(arguments)}();var _=I;function k(r){return"string"==typeof r}var T=String.prototype.valueOf;var U=g();function F(r){return"object"==typeof r&&(r instanceof String||(U?function(r){try{return T.call(r),!0}catch(r){return!1}}(r):"[object String]"===m(r)))}function P(r){return k(r)||F(r)}function V(r){return"number"==typeof r}p(P,"isPrimitive",k),p(P,"isObject",F);var C=Number,N=C.prototype.toString;var $=g();function B(r){return"object"==typeof r&&(r instanceof C||($?function(r){try{return N.call(r),!0}catch(r){return!1}}(r):"[object Number]"===m(r)))}function R(r){return V(r)||B(r)}function M(r){return r!=r}function L(r){return V(r)&&M(r)}function G(r){return B(r)&&M(r.valueOf())}function X(r){return L(r)||G(r)}p(R,"isPrimitive",V),p(R,"isObject",B),p(X,"isPrimitive",L),p(X,"isObject",G);var z=C.NEGATIVE_INFINITY,W=Math.floor;function Z(r){return W(r)===r}function D(r){return r<s&&r>z&&Z(r)}function Y(r){return V(r)&&D(r)}function q(r){return B(r)&&D(r.valueOf())}function H(r){return Y(r)||q(r)}p(H,"isPrimitive",Y),p(H,"isObject",q);var J=Object.prototype.propertyIsEnumerable;var K=!J.call("beep","0");function Q(r,e){var t;return null!=r&&(!(t=J.call(r,e))&&K&&P(r)?!L(e=+e)&&Y(e)&&e>=0&&e<r.length:t)}var rr=4294967295;var er=_?S:function(r){return null!==r&&"object"==typeof r&&!j(r)&&"number"==typeof r.length&&Z(r.length)&&r.length>=0&&r.length<=rr&&h(r,"callee")&&!Q(r,"callee")},tr=Array.prototype.slice;function nr(r){return null!==r&&"object"==typeof r}p(nr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!j(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(nr));var or=Q((function(){}),"prototype"),ir=!Q({toString:null},"toString");function ar(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Z(r.length)&&r.length>=0&&r.length<=9007199254740991}function ur(r,e,t){var n,o;if(!ar(r)&&!k(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!Y(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(X(e)){for(;o<n;o++)if(X(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var cr=/./;function fr(r){return"boolean"==typeof r}var lr=Boolean.prototype.toString;var pr=g();function sr(r){return"object"==typeof r&&(r instanceof Boolean||(pr?function(r){try{return lr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===m(r)))}function yr(r){return fr(r)||sr(r)}function vr(){return new Function("return this;")()}p(yr,"isPrimitive",fr),p(yr,"isObject",sr);var gr="object"==typeof self?self:null,dr="object"==typeof window?window:null,br="object"==typeof global?global:null;var hr=function(r){if(arguments.length){if(!fr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return vr()}if(gr)return gr;if(dr)return dr;if(br)return br;throw new Error("unexpected error. Unable to resolve global object.")}(),wr=hr.document&&hr.document.childNodes,mr=Int8Array;function jr(){return/^\s*function\s*([^(]*)/i}var Ar=/^\s*function\s*([^(]*)/i;function Or(r){return nr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function Er(r){var e,t,n;if(("Object"===(t=m(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ar.exec(n.toString()))return e[1]}return Or(r)?"Buffer":t}p(jr,"REGEXP",Ar);var Ir="function"==typeof cr||"object"==typeof mr||"function"==typeof wr?function(r){return Er(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Er(r).toLowerCase():e};function xr(r){return r.constructor&&r.constructor.prototype===r}var Sr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_r="undefined"==typeof window?void 0:window;var kr=function(){var r;if("undefined"===Ir(_r))return!1;for(r in _r)try{-1===ur(Sr,r)&&h(_r,r)&&null!==_r[r]&&"object"===Ir(_r[r])&&xr(_r[r])}catch(r){return!0}return!1}(),Tr="undefined"!=typeof window;var Ur,Fr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ur=x?function(){return 2!==(E(arguments)||"").length}(1,2)?function(r){return er(r)?E(tr.call(r)):E(r)}:E:function(r){var e,t,n,o,i,a,u;if(o=[],er(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!h(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!nr(r))return o;t=or&&n}for(i in r)t&&"prototype"===i||!h(r,i)||o.push(String(i));if(ir)for(e=function(r){if(!1===Tr&&!kr)return xr(r);try{return xr(r)}catch(r){return!1}}(r),u=0;u<Fr.length;u++)a=Fr[u],e&&"constructor"===a||!h(r,a)||o.push(String(a));return o};var Pr=Ur;function Vr(r){return"function"===Ir(r)}function Cr(r){return Y(r)&&r>=0}function Nr(r){return q(r)&&r.valueOf()>=0}function $r(r){return Cr(r)||Nr(r)}p($r,"isPrimitive",Cr),p($r,"isObject",Nr);var Br,Rr=Object.getPrototypeOf;Br=Vr(Object.getPrototypeOf)?Rr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===m(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Mr=Br;function Lr(r){return null==r?null:(r=Object(r),Mr(r))}function Gr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function Xr(r){return"number"==typeof r}function zr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Wr(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+zr(o):zr(o)+r,n&&(r="-"+r)),r}p(Gr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var Zr=String.prototype.toLowerCase,Dr=String.prototype.toUpperCase;function Yr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Xr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Wr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Wr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Dr.call(r.specifier)?Dr.call(t):Zr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function qr(r){return"string"==typeof r}var Hr=Math.abs,Jr=String.prototype.toLowerCase,Kr=String.prototype.toUpperCase,Qr=String.prototype.replace,re=/e\+(\d)$/,ee=/e-(\d)$/,te=/^(\d+)$/,ne=/^(\d+)e/,oe=/\.0$/,ie=/\.0*e/,ae=/(\..*[^0])0*e/;function ue(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Xr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Hr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Qr.call(t,ae,"$1e"),t=Qr.call(t,ie,"e"),t=Qr.call(t,oe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Qr.call(t,re,"e+0$1"),t=Qr.call(t,ee,"e-0$1"),r.alternate&&(t=Qr.call(t,te,"$1."),t=Qr.call(t,ne,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Kr.call(r.specifier)?Kr.call(t):Jr.call(t)}function ce(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function fe(r,e,t){var n=e-r.length;return n<0?r:r=t?r+ce(n):ce(n)+r}var le=String.fromCharCode,pe=isNaN,se=Array.isArray;function ye(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ve(r){var e,t,n,o,i,a,u,c,f;if(!se(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(qr(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=ye(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,pe(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,pe(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Yr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!pe(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=pe(i)?String(n.arg):le(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=ue(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Wr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=fe(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var ge=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function de(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function be(r){var e,t,n,o;for(t=[],o=0,n=ge.exec(r);n;)(e=r.slice(o,ge.lastIndex-n[0].length)).length&&t.push(e),t.push(de(n)),o=ge.lastIndex,n=ge.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function he(r){return"string"==typeof r}function we(r){var e,t,n;if(!he(r))throw new TypeError(we("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=be(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return ve.apply(null,t)}function me(r){if(!k(r))throw new TypeError(we("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}var je=void 0!==Object.getOwnPropertyNames,Ae=Object.getOwnPropertyNames;var Oe=je?function(r){return Ae(Object(r))}:function(r){return Pr(Object(r))},Ee=void 0!==Object.getOwnPropertyDescriptor,Ie=Object.getOwnPropertyDescriptor;var xe=Ee?function(r,e){var t;return null==r||void 0===(t=Ie(r,e))?null:t}:function(r,e){return h(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null},Se="function"==typeof Buffer?Buffer:null;var _e,ke=r.Buffer;_e=function(){var r,e;if("function"!=typeof Se)return!1;try{r=Or(e="function"==typeof Se.from?Se.from([1,2,3,4]):new Se([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?ke:function(){throw new Error("not implemented")};var Te=_e;var Ue=Vr(Te.from)?function(r){if(!Or(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return Te.from(r)}:function(r){if(!Or(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new Te(r)},Fe="function"==typeof Int8Array;var Pe="function"==typeof Int8Array?Int8Array:null;var Ve,Ce="function"==typeof Int8Array?Int8Array:void 0;Ve=function(){var r,e,t;if("function"!=typeof Pe)return!1;try{e=new Pe([1,3.14,-3.14,128]),t=e,r=(Fe&&t instanceof Int8Array||"[object Int8Array]"===m(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Ce:function(){throw new Error("not implemented")};var Ne=Ve,$e="function"==typeof Uint8Array;var Be="function"==typeof Uint8Array?Uint8Array:null;var Re,Me="function"==typeof Uint8Array?Uint8Array:void 0;Re=function(){var r,e,t;if("function"!=typeof Be)return!1;try{e=new Be(e=[1,3.14,-3.14,256,257]),t=e,r=($e&&t instanceof Uint8Array||"[object Uint8Array]"===m(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Me:function(){throw new Error("not implemented")};var Le=Re,Ge="function"==typeof Uint8ClampedArray;var Xe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ze,We="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;ze=function(){var r,e,t;if("function"!=typeof Xe)return!1;try{e=new Xe([-1,0,1,3.14,4.99,255,256]),t=e,r=(Ge&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===m(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?We:function(){throw new Error("not implemented")};var Ze=ze,De="function"==typeof Int16Array;var Ye="function"==typeof Int16Array?Int16Array:null;var qe,He="function"==typeof Int16Array?Int16Array:void 0;qe=function(){var r,e,t;if("function"!=typeof Ye)return!1;try{e=new Ye([1,3.14,-3.14,32768]),t=e,r=(De&&t instanceof Int16Array||"[object Int16Array]"===m(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?He:function(){throw new Error("not implemented")};var Je=qe,Ke="function"==typeof Uint16Array;var Qe="function"==typeof Uint16Array?Uint16Array:null;var rt,et="function"==typeof Uint16Array?Uint16Array:void 0;rt=function(){var r,e,t;if("function"!=typeof Qe)return!1;try{e=new Qe(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ke&&t instanceof Uint16Array||"[object Uint16Array]"===m(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?et:function(){throw new Error("not implemented")};var tt=rt,nt="function"==typeof Int32Array;var ot="function"==typeof Int32Array?Int32Array:null;var it,at="function"==typeof Int32Array?Int32Array:void 0;it=function(){var r,e,t;if("function"!=typeof ot)return!1;try{e=new ot([1,3.14,-3.14,2147483648]),t=e,r=(nt&&t instanceof Int32Array||"[object Int32Array]"===m(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?at:function(){throw new Error("not implemented")};var ut=it,ct="function"==typeof Uint32Array;var ft="function"==typeof Uint32Array?Uint32Array:null;var lt,pt="function"==typeof Uint32Array?Uint32Array:void 0;lt=function(){var r,e,t;if("function"!=typeof ft)return!1;try{e=new ft(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ct&&t instanceof Uint32Array||"[object Uint32Array]"===m(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pt:function(){throw new Error("not implemented")};var st=lt,yt="function"==typeof Float32Array;var vt="function"==typeof Float32Array?Float32Array:null;var gt,dt="function"==typeof Float32Array?Float32Array:void 0;gt=function(){var r,e,t;if("function"!=typeof vt)return!1;try{e=new vt([1,3.14,-3.14,5e40]),t=e,r=(yt&&t instanceof Float32Array||"[object Float32Array]"===m(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===s}catch(e){r=!1}return r}()?dt:function(){throw new Error("not implemented")};var bt=gt,ht="function"==typeof Float64Array;var wt="function"==typeof Float64Array?Float64Array:null;var mt,jt="function"==typeof Float64Array?Float64Array:void 0;mt=function(){var r,e,t;if("function"!=typeof wt)return!1;try{e=new wt([1,3.14,-3.14,NaN]),t=e,r=(ht&&t instanceof Float64Array||"[object Float64Array]"===m(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?jt:function(){throw new Error("not implemented")};var At=mt;function Ot(r){return new Ne(r)}function Et(r){return new Le(r)}function It(r){return new Ze(r)}function xt(r){return new Je(r)}function St(r){return new tt(r)}function _t(r){return new ut(r)}function kt(r){return new st(r)}function Tt(r){return new bt(r)}function Ut(r){return new At(r)}var Ft={int8array:Ot,uint8array:Et,uint8clampedarray:It,int16array:xt,uint16array:St,int32array:_t,uint32array:kt,float32array:Tt,float64array:Ut};function Pt(r,e,t,n,o){var i,a,u,c,f,p,s,y,v,g;if(o-=1,"object"!=typeof r||null===r)return r;if(Or(r))return Ue(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===m(r))return!0;r=Lr(r)}return!1}(r))return function(r){var e,t,n,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),e=Pr(r),a=0;a<e.length;a++)o=e[a],h(t=xe(r,o),"value")&&(n=j(r[o])?[]:{},t.value=Pt(r[o],n,u,c,-1)),l(i,o,t);return i}(r);if("date"===(u=Ir(r)))return new Date(+r);if("regexp"===u)return me(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=Ft[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var e,t,n,o,i,a,u,c;for(e=[],o=[],u=Object.create(Lr(r)),e.push(r),o.push(u),t=Oe(r),c=0;c<t.length;c++)n=t[c],h(i=xe(r,n),"value")&&(a=j(r[n])?[]:{},i.value=Pt(r[n],a,e,o,-1)),l(u,n,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=Pr(r),o>0)for(i=u,g=0;g<a.length;g++)y=r[p=a[g]],u=Ir(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||Or(y)?"object"===i?(h(c=xe(r,p),"value")&&(c.value=Pt(y)),l(e,p,c)):e[p]=Pt(y):-1===(v=ur(t,y))?(s=j(y)?new Array(y.length):{},t.push(y),n.push(s),"array"===i?e[p]=Pt(y,s,t,n,o):(h(c=xe(r,p),"value")&&(c.value=Pt(y,s,t,n,o)),l(e,p,c))):e[p]=n[v];else if("array"===u)for(g=0;g<a.length;g++)e[p=a[g]]=r[p];else for(g=0;g<a.length;g++)p=a[g],c=xe(r,p),l(e,p,c);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}function Vt(r,e){var t;if(arguments.length>1){if(!Cr(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(0===e)return r}else e=s;return Pt(r,t=j(r)?new Array(r.length):{},[r],[t],e)}function Ct(r,e,t,n,o,i){var a,u,c,f,l,p,s,y,v;for(u=Vr(o),t-=1,f=Pr(e),v=0;v<f.length;v++)if((a=h(r,p=f[v]))||i)if(s=e[p],a){if(l=r[p],c=Ir(l),!Or(l)&&"object"===c&&A(s)&&t){Ct(l,s,t,n,o,i);continue}u?(y=o(l,s,p),n&&y!==l&&y===s&&(y=Vt(y)),r[p]=y):o&&(r[p]=n?Vt(s):s)}else r[p]=n?Vt(s):s}function Nt(r){return function(e){var t,n,o,i;if((t=arguments.length-1)<1)throw new Error("insufficient arguments. Must provide both a target object and one or more source objects.");if(!A(e))throw new TypeError(O("0kj3X",e));for(o=new Array(t),i=0;i<t;i++){if(!A(n=arguments[i+1]))throw new TypeError(O("invalid argument. All arguments must be objects. Index: `%u`. Value: `%s`.",i,n));o[i]=n}for(i=0;i<t;i++)Ct(e,o[i],r.level,r.copy,r.override,r.extend);return e}}var $t=Nt(y),Bt=Object.prototype;function Rt(r){var e;return!!A(r)&&(!(e=Lr(r))||!h(r,"constructor")&&h(e,"constructor")&&Vr(e.constructor)&&"[object Function]"===m(e.constructor)&&h(e,"isPrototypeOf")&&Vr(e.isPrototypeOf)&&(e===Bt||function(r){var e;for(e in r)if(!h(r,e))return!1;return!0}(r)))}function Mt(r){return Y(r)&&r>0}function Lt(r){return q(r)&&r.valueOf()>0}function Gt(r){return Mt(r)||Lt(r)}return p(Gt,"isPrimitive",Mt),p(Gt,"isObject",Lt),p($t,"factory",(function(r){var e,t;if(t=function(r,e){return Rt(e)?h(e,"level")&&(r.level=e.level,!Mt(r.level))?new TypeError(O("0kj3b","level",r.level)):h(e,"copy")&&(r.copy=e.copy,!fr(r.copy))?new TypeError(O("0kj30","copy",r.copy)):!h(e,"override")||(r.override=e.override,fr(r.override)||Vr(r.override))?h(e,"extend")&&(r.extend=e.extend,!fr(r.extend))?new TypeError(O("0kj30","extend",r.extend)):null:new TypeError(O("0kjCJ","override",r.override)):new TypeError(O("0kj2h",e))}(e=Vt(y),r),t)throw t;return Nt(e)})),$t}));
//# sourceMappingURL=index.js.map
