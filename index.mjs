// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t){var a,i,f,u,o,d;if(o=r-e,r<=0||o<=0)return NaN;if(1===r||0===t)return 0;for(i=t<0?(1-r)*t:0,a=0,f=0,d=0;d<r;d++)a+=(u=n[i])*u,f+=u,i+=t;return(a-f/r*f)/o};r(e,"ndarray",(function(r,e,n,t,a){var i,f,u,o,d,s;if(d=r-e,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(f=a,i=0,u=0,s=0;s<r;s++)i+=(o=n[f])*o,u+=o,f+=t;return(i-u/r*u)/d}));var n=e;export{n as default};
//# sourceMappingURL=index.mjs.map
