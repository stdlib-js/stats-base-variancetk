// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function e(r,e,n,t){var i,f,u,a,o,d;if(o=r-e,r<=0||o<=0)return NaN;if(1===r||0===t)return 0;for(f=t<0?(1-r)*t:0,i=0,u=0,d=0;d<r;d++)i+=(a=n[f])*a,u+=a,f+=t;return(i-u/r*u)/o}r(e,"ndarray",(function(r,e,n,t,i){var f,u,a,o,d,s;if(d=r-e,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(u=i,f=0,a=0,s=0;s<r;s++)f+=(o=n[u])*o,a+=o,u+=t;return(f-a/r*a)/d}));export{e as default};
//# sourceMappingURL=index.mjs.map
