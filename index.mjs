// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,t){var a,i,f,o,u,d;if(u=r-n,r<=0||u<=0)return NaN;if(1===r||0===t)return 0;for(i=t<0?(1-r)*t:0,a=0,f=0,d=0;d<r;d++)a+=(o=e[i])*o,f+=o,i+=t;return(a-f/r*f)/u}r(n,"ndarray",(function(r,n,e,t,a){var i,f,o,u,d,s;if(d=r-n,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(f=a,i=0,o=0,s=0;s<r;s++)i+=(u=e[f])*u,o+=u,f+=t;return(i-o/r*o)/d}));const{ndarray:e}=variancetk;export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
