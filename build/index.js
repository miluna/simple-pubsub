!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(3)),u={};t.subscribe=((e,t)=>{const n=new o.default(t);return u[e]=u[e]?[...u[e],n]:[n],n}),t.unsubscribe=((e,t)=>{if(e&&u[e]&&t&&t instanceof o.default){const n=u[e].findIndex(e=>e.id===t.id);n>-1&&u[e].splice(n,1)}}),t.publish=((e,t)=>{u[e]&&u[e].length>0&&u[e].forEach(e=>{e.cb(t)})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(4);t.default=class{constructor(e){this.cb=(()=>{}),this.id=r.v4(),"function"==typeof e&&(this.cb=e)}}},function(e,t,n){var r=n(5),o=n(6),u=o;u.v1=r,u.v4=o,e.exports=u},function(e,t,n){var r,o,u=n(0),i=n(1),c=0,s=0;e.exports=function(e,t,n){var a=t&&n||0,f=t||[],l=(e=e||{}).node||r,d=void 0!==e.clockseq?e.clockseq:o;if(null==l||null==d){var p=u();null==l&&(l=r=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==d&&(d=o=16383&(p[6]<<8|p[7]))}var v=void 0!==e.msecs?e.msecs:(new Date).getTime(),y=void 0!==e.nsecs?e.nsecs:s+1,b=v-c+(y-s)/1e4;if(b<0&&void 0===e.clockseq&&(d=d+1&16383),(b<0||v>c)&&void 0===e.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=v,s=y,o=d;var m=(1e4*(268435455&(v+=122192928e5))+y)%4294967296;f[a++]=m>>>24&255,f[a++]=m>>>16&255,f[a++]=m>>>8&255,f[a++]=255&m;var g=v/4294967296*1e4&268435455;f[a++]=g>>>8&255,f[a++]=255&g,f[a++]=g>>>24&15|16,f[a++]=g>>>16&255,f[a++]=d>>>8|128,f[a++]=255&d;for(var _=0;_<6;++_)f[a+_]=l[_];return t||i(f)}},function(e,t,n){var r=n(0),o=n(1);e.exports=function(e,t,n){var u=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var c=0;c<16;++c)t[u+c]=i[c];return t||o(i)}}]);