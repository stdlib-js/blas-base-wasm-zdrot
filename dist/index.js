"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var E=p(function(Q,m){
var O=require("path").resolve,L=require('@stdlib/fs-read-wasm/dist').sync,P=L(O(__dirname,"..","src","main.wasm"));m.exports=P
});var f=p(function(U,R){
var V=require('@stdlib/assert-is-wasm-memory/dist'),M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/wasm-module-wrapper/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),D=E();function d(e){if(!(this instanceof d))return new d(e);if(!V(e))throw new TypeError(j('279H0',e));return _.call(this,D,e,{env:{memory:e}}),this}g(d,_);M(d.prototype,"main",function(r,n,i,a,t,s,u){return this._instance.exports.c_zdrot(r,n,i,a,t,s,u),a});M(d.prototype,"ndarray",function(r,n,i,a,t,s,u,l,q){return this._instance.exports.c_zdrot_ndarray(r,n,i,a,t,s,u,l,q),t});R.exports=d
});var z=p(function(Z,W){
var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=require('@stdlib/utils-inherit/dist'),b=require('@stdlib/strided-base-stride2offset/dist'),x=require('@stdlib/strided-base-read-dataview/dist').ndarray,C=require('@stdlib/wasm-memory/dist'),F=require('@stdlib/wasm-base-arrays2ptrs/dist'),T=require('@stdlib/wasm-base-strided2object/dist'),h=f();function c(){return this instanceof c?(h.call(this,new C({initial:0})),this):new c}k(c,h);S(c.prototype,"main",function(r,n,i,a,t,s,u){return this.ndarray(r,n,i,b(r,i),a,t,b(r,t),s,u)});S(c.prototype,"ndarray",function(r,n,i,a,t,s,u,l,q){var y,o,v;return y=F(this,[T(r,n,i,a),T(r,t,s,u)]),o=y[0],v=y[1],h.prototype.ndarray.call(this,r,o.ptr,o.stride,o.offset,v.ptr,v.stride,v.offset,l,q),o.copy&&x(r,this.view,o.stride*o.BYTES_PER_ELEMENT,o.ptr,n,i,a,!0),v.copy&&x(r,this.view,v.stride*v.BYTES_PER_ELEMENT,v.ptr,t,s,u,!0),t});W.exports=c
});var B=p(function($,A){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),H=z(),I=f(),w=new H;w.initializeSync();G(w,"Module",I.bind(null));A.exports=w
});var J=B();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
