"use strict";var x=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var p=x(function(B,k){
function g(r,a,n,v,f){var s,c,u,t,e,i,o,q;for(s=n.data,c=n.accessors[0],o=r-a,t=f,u=0,e=0,q=0;q<r;q++)i=c(s,t),u+=i*i,e+=i,t+=v;return(u-e/r*e)/o}k.exports=g
});var y=x(function(C,S){
var j=require('@stdlib/array-base-arraylike2object/dist'),m=p();function O(r,a,n,v,f){var s,c,u,t,e,i,o;if(i=r-a,r<=0||i<=0)return NaN;if(r===1||v===0)return 0;if(u=j(n),u.accessorProtocol)return m(r,a,u,v,f);for(c=f,s=0,t=0,o=0;o<r;o++)e=n[c],s+=e*e,t+=e,c+=v;return(s-t/r*t)/i}S.exports=O
});var l=x(function(D,d){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=y();function h(r,a,n,v){return R(r,a,n,v,P(r,v))}d.exports=h
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=l(),z=y();w(b,"ndarray",z);module.exports=b;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
