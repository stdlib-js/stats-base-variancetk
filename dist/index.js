"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=o(function(j,x){
function m(r,e,c,n){var s,v,t,a,i,u;if(i=r-e,r<=0||i<=0)return NaN;if(r===1||n===0)return 0;for(n<0?v=(1-r)*n:v=0,s=0,t=0,u=0;u<r;u++)a=c[v],s+=a*a,t+=a,v+=n;return(s-t/r*t)/i}x.exports=m
});var S=o(function(w,q){
function O(r,e,c,n,s){var v,t,a,i,u,f;if(u=r-e,r<=0||u<=0)return NaN;if(r===1||n===0)return 0;for(t=s,v=0,a=0,f=0;f<r;f++)i=c[t],v+=i*i,a+=i,t+=n;return(v-a/r*a)/u}q.exports=O
});var l=o(function(z,y){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=p(),b=S();R(k,"ndarray",b);y.exports=k
});var g=l();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
