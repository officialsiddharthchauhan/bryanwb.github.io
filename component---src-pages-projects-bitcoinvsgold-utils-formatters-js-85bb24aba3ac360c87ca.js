(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{264:function(t,r,n){"use strict";n.r(r),n.d(r,"commarize",function(){return e}),n.d(r,"formatNum",function(){return o}),n(293),n(146),n(294);var e=function(t){if(t>=1e3){var r=3*Math.floor((t.toFixed(0).length-1)/3);return(t/Number("1e"+r)).toFixed(1)+" "+["k","M","Billion","Trillion"][Math.floor(r/3)-1]}return t.toFixed(2)},o=function(t,r){var n=r.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,"$1,");return t.measure&&(n+=t.measure),n}},284:function(t,r,n){"use strict";var e=n(15);t.exports=function(){var t=e(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},286:function(t,r,n){var e=n(14),o=n(50),i=n(16),u=n(297),c="["+u+"]",a=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),s=function(t,r,n){var o={},c=i(function(){return!!u[t]()||"​"!="​"[t]()}),a=o[t]=c?r(p):u[t];n&&(o[n]=a),e(e.P+e.F*c,"String",o)},p=s.trim=function(t,r){return t=String(o(t)),1&r&&(t=t.replace(a,"")),2&r&&(t=t.replace(f,"")),t};t.exports=s},293:function(t,r,n){"use strict";n(301);var e=n(15),o=n(284),i=n(21),u=/./.toString,c=function(t){n(28)(RegExp.prototype,"toString",t,!0)};n(16)(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?c(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)}):"toString"!=u.name&&c(function(){return u.call(this)})},294:function(t,r,n){"use strict";var e=n(6),o=n(24),i=n(31),u=n(295),c=n(61),a=n(16),f=n(87).f,s=n(135).f,p=n(22).f,l=n(286).trim,g=e.Number,N=g,v=g.prototype,h="Number"==i(n(85)(v)),_="trim"in String.prototype,d=function(t){var r=c(t,!1);if("string"==typeof r&&r.length>2){var n,e,o,i=(r=_?r.trim():l(r,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=r.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(r.charCodeAt(1)){case 66:case 98:e=2,o=49;break;case 79:case 111:e=8,o=55;break;default:return+r}for(var u,a=r.slice(2),f=0,s=a.length;f<s;f++)if((u=a.charCodeAt(f))<48||u>o)return NaN;return parseInt(a,e)}}return+r};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var r=arguments.length<1?0:t,n=this;return n instanceof g&&(h?a(function(){v.valueOf.call(n)}):"Number"!=i(n))?u(new N(d(r)),n,g):d(r)};for(var I,m=n(21)?f(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;m.length>E;E++)o(N,I=m[E])&&!o(g,I)&&p(g,I,s(N,I));g.prototype=v,v.constructor=g,n(28)(e,"Number",g)}},295:function(t,r,n){var e=n(10),o=n(296).set;t.exports=function(t,r,n){var i,u=r.constructor;return u!==n&&"function"==typeof u&&(i=u.prototype)!==n.prototype&&e(i)&&o&&o(t,i),t}},296:function(t,r,n){var e=n(10),o=n(15),i=function(t,r){if(o(t),!e(r)&&null!==r)throw TypeError(r+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,e){try{(e=n(37)(Function.call,n(135).f(Object.prototype,"__proto__").set,2))(t,[]),r=!(t instanceof Array)}catch(t){r=!0}return function(t,n){return i(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):void 0),check:i}},297:function(t,r){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},301:function(t,r,n){n(21)&&"g"!=/./g.flags&&n(22).f(RegExp.prototype,"flags",{configurable:!0,get:n(284)})}}]);
//# sourceMappingURL=component---src-pages-projects-bitcoinvsgold-utils-formatters-js-85bb24aba3ac360c87ca.js.map