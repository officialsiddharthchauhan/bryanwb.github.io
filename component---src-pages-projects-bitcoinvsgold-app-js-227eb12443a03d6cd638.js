(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{318:function(t,n){var r,e,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(n){try{return r.call(null,t,0)}catch(n){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(t){r=o}try{e="function"==typeof clearTimeout?clearTimeout:u}catch(t){e=u}}();var c,l=[],f=!1,a=-1;function h(){f&&c&&(f=!1,c.length?l=c.concat(l):a=-1,l.length&&p())}function p(){if(!f){var t=s(h);f=!0;for(var n=l.length;n;){for(c=l,l=[];++a<n;)c&&c[a].run();a=-1,n=l.length}c=null,f=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===u||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}(t)}}function v(t,n){this.fun=t,this.array=n}function m(){}i.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];l.push(new v(t,n)),1!==l.length||f||s(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},339:function(t,n,r){(function(t){function r(t,n){for(var r=0,e=t.length-1;e>=0;e--){var i=t[e];"."===i?t.splice(e,1):".."===i?(t.splice(e,1),r++):r&&(t.splice(e,1),r--)}if(n)for(;r--;r)t.unshift("..");return t}var e=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return e.exec(t).slice(1)};function o(t,n){if(t.filter)return t.filter(n);for(var r=[],e=0;e<t.length;e++)n(t[e],e,t)&&r.push(t[e]);return r}n.resolve=function(){for(var n="",e=!1,i=arguments.length-1;i>=-1&&!e;i--){var u=i>=0?arguments[i]:t.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(n=u+"/"+n,e="/"===u.charAt(0))}return n=r(o(n.split("/"),function(t){return!!t}),!e).join("/"),(e?"/":"")+n||"."},n.normalize=function(t){var e=n.isAbsolute(t),i="/"===u(t,-1);return(t=r(o(t.split("/"),function(t){return!!t}),!e).join("/"))||e||(t="."),t&&i&&(t+="/"),(e?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(o(t,function(t,n){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},n.relative=function(t,r){function e(t){for(var n=0;n<t.length&&""===t[n];n++);for(var r=t.length-1;r>=0&&""===t[r];r--);return n>r?[]:t.slice(n,r-n+1)}t=n.resolve(t).substr(1),r=n.resolve(r).substr(1);for(var i=e(t.split("/")),o=e(r.split("/")),u=Math.min(i.length,o.length),s=u,c=0;c<u;c++)if(i[c]!==o[c]){s=c;break}var l=[];for(c=s;c<i.length;c++)l.push("..");return(l=l.concat(o.slice(s))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){var n=i(t),r=n[0],e=n[1];return r||e?(e&&(e=e.substr(0,e.length-1)),r+e):"."},n.basename=function(t,n){var r=i(t)[2];return n&&r.substr(-1*n.length)===n&&(r=r.substr(0,r.length-n.length)),r},n.extname=function(t){return i(t)[3]};var u="b"==="ab".substr(-1)?function(t,n,r){return t.substr(n,r)}:function(t,n,r){return n<0&&(n=t.length+n),t.substr(n,r)}}).call(this,r(318))}}]);
//# sourceMappingURL=component---src-pages-projects-bitcoinvsgold-app-js-227eb12443a03d6cd638.js.map