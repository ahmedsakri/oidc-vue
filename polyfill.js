// this file contains polyfill required for oidc-client
// with Array.from,Array.prototype.find,String.prototype.startsWith
Array.from||(Array.from=function(){var t=Object.prototype.toString,u=function(r){return"function"==typeof r||"[object Function]"===t.call(r)},e=Math.pow(2,53)-1,h=function(r){var t,n=(t=Number(r),isNaN(t)?0:0!==t&&isFinite(t)?(0<t?1:-1)*Math.floor(Math.abs(t)):t);return Math.min(Math.max(n,0),e)};return function(r){var t=Object(r);if(null==r)throw new TypeError("Array.from requires an array-like object - not null or undefined");var n,e=1<arguments.length?arguments[1]:void 0;if(void 0!==e){if(!u(e))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(n=arguments[2])}for(var o,i=h(t.length),a=u(this)?Object(new this(i)):new Array(i),f=0;f<i;)o=t[f],a[f]=e?void 0===n?e(o,f):e.call(n,o,f):o,f+=1;return a.length=i,a}}()),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(r){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var e=arguments[1],o=0;o<n;){var i=t[o];if(r.call(e,i,o,t))return i;o++}},configurable:!0,writable:!0}),String.prototype.startsWith||(String.prototype.startsWith=function(r,t){return this.substr(!t||t<0?0:+t,r.length)===r});