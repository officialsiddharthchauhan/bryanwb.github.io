(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(191),i=n.n(a);e.default=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Hi from the second page"),o.a.createElement("p",null,"Welcome to page 2"),o.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},191:function(t,e,n){"use strict";var r=n(32);e.__esModule=!0,e.withPrefix=d,e.navigateTo=e.replace=e.push=e.navigate=e.default=void 0;var o=r(n(199)),a=r(n(215)),i=r(n(20)),u=r(n(60)),c=r(n(61)),s=r(n(12)),f=r(n(0)),l=n(29),p=n(220);function d(t){return function(t){return t.replace(/\/+/g,"/")}("/"+t)}var h={activeClassName:s.default.string,activeStyle:s.default.object},v=function(t){function e(e){var n;n=t.call(this)||this,(0,c.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(t){return t.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,a.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var o=e.location;return n.state={IOSupported:r,location:o},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(e,t);var n=e.prototype;return n.componentDidUpdate=function(t,e){this.props.to===t.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(t){var e,n,r,o=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,n=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(e),r.disconnect(),n())})})).observe(e))},n.render=function(){var t=this,e=this.props,n=e.to,r=e.getProps,i=void 0===r?this.defaultGetProps:r,u=e.onClick,c=e.onMouseEnter,s=e.location,h=(e.activeClassName,e.activeStyle,e.ref,e.innerRef,e.state),v=(0,o.default)(e,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state"]),y=d(n);return f.default.createElement(l.Link,(0,a.default)({to:y,state:h,getProps:i,innerRef:this.handleRef,onMouseEnter:function(t){c&&c(t),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(e){if(u&&u(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){e.preventDefault();var n=(0,p.parsePath)(y),r=n.pathname,o=n.hash;if(r===s.pathname||!r){var a=o?document.getElementById(o.substr(1)):null;null!==a?a.scrollIntoView():window.scrollTo(0,0)}b(y,{state:h})}return!0}},v))},e}(f.default.Component);v.propTypes=(0,a.default)({},h,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired});var y,m=(y=v,function(t){return f.default.createElement(l.Location,null,function(e){var n=e.location;return f.default.createElement(y,(0,a.default)({location:n},t))})});e.default=m;var b=function(t,e){window.___navigate(t,e)};e.navigate=b;var g=function(t){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(t)};e.push=g,e.replace=function(t){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(t)},e.navigateTo=function(t){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),g(t)}},192:function(t,e){e.f={}.propertyIsEnumerable},193:function(t,e,n){var r=n(99)("wks"),o=n(95),a=n(31).Symbol,i="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=i&&a[t]||(i?a:o)("Symbol."+t))}).store=r},194:function(t,e){e.f=Object.getOwnPropertySymbols},195:function(t,e,n){e.f=n(193)},196:function(t,e,n){var r=n(103),o=n(59).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},197:function(t,e,n){var r=n(106);t.exports=function(t){return Object(r(t))}},198:function(t,e,n){var r;t.exports=(r=n(221))&&r.default||r},199:function(t,e,n){var r=n(200),o=n(211);t.exports=function(t,e){if(null==t)return{};var n,a,i={},u=o(t);for(a=0;a<u.length;a++)n=u[a],e.indexOf(n)>=0||(i[n]=t[n]);if(r){var c=r(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},200:function(t,e,n){t.exports=n(201)},201:function(t,e,n){n(202),t.exports=n(21).Object.getOwnPropertySymbols},202:function(t,e,n){"use strict";var r=n(31),o=n(56),a=n(22),i=n(57),u=n(203),c=n(204).KEY,s=n(55),f=n(99),l=n(205),p=n(95),d=n(193),h=n(195),v=n(206),y=n(207),m=n(208),b=n(40),g=n(39),w=n(58),O=n(97),S=n(98),P=n(102),E=n(209),x=n(210),j=n(38),_=n(94),k=x.f,R=j.f,N=E.f,T=r.Symbol,q=r.JSON,C=q&&q.stringify,I=d("_hidden"),G=d("toPrimitive"),F={}.propertyIsEnumerable,D=f("symbol-registry"),K=f("symbols"),M=f("op-symbols"),J=Object.prototype,A="function"==typeof T,L=r.QObject,Q=!L||!L.prototype||!L.prototype.findChild,W=a&&s(function(){return 7!=P(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(J,e);r&&delete J[e],R(t,e,n),r&&t!==J&&R(J,e,r)}:R,U=function(t){var e=K[t]=P(T.prototype);return e._k=t,e},B=A&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},Y=function(t,e,n){return t===J&&Y(M,e,n),b(t),e=O(e,!0),b(n),o(K,e)?(n.enumerable?(o(t,I)&&t[I][e]&&(t[I][e]=!1),n=P(n,{enumerable:S(0,!1)})):(o(t,I)||R(t,I,S(1,{})),t[I][e]=!0),W(t,e,n)):R(t,e,n)},z=function(t,e){b(t);for(var n,r=y(e=w(e)),o=0,a=r.length;a>o;)Y(t,n=r[o++],e[n]);return t},H=function(t){var e=F.call(this,t=O(t,!0));return!(this===J&&o(K,t)&&!o(M,t))&&(!(e||!o(this,t)||!o(K,t)||o(this,I)&&this[I][t])||e)},V=function(t,e){if(t=w(t),e=O(e,!0),t!==J||!o(K,e)||o(M,e)){var n=k(t,e);return!n||!o(K,e)||o(t,I)&&t[I][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=N(w(t)),r=[],a=0;n.length>a;)o(K,e=n[a++])||e==I||e==c||r.push(e);return r},Z=function(t){for(var e,n=t===J,r=N(n?M:w(t)),a=[],i=0;r.length>i;)!o(K,e=r[i++])||n&&!o(J,e)||a.push(K[e]);return a};A||(u((T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(M,n),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),W(this,t,S(1,n))};return a&&Q&&W(J,t,{configurable:!0,set:e}),U(t)}).prototype,"toString",function(){return this._k}),x.f=V,j.f=Y,n(196).f=E.f=X,n(192).f=H,n(194).f=Z,a&&!n(100)&&u(J,"propertyIsEnumerable",H,!0),h.f=function(t){return U(d(t))}),i(i.G+i.W+i.F*!A,{Symbol:T});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=_(d.store),nt=0;et.length>nt;)v(et[nt++]);i(i.S+i.F*!A,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=T(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),i(i.S+i.F*!A,"Object",{create:function(t,e){return void 0===e?P(t):z(P(t),e)},defineProperty:Y,defineProperties:z,getOwnPropertyDescriptor:V,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),q&&i(i.S+i.F*(!A||s(function(){var t=T();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!B(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,C.apply(q,r)}}),T.prototype[G]||n(96)(T.prototype,G,T.prototype.valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},203:function(t,e,n){t.exports=n(96)},204:function(t,e,n){var r=n(95)("meta"),o=n(39),a=n(56),i=n(38).f,u=0,c=Object.isExtensible||function(){return!0},s=!n(55)(function(){return c(Object.preventExtensions({}))}),f=function(t){i(t,r,{value:{i:"O"+ ++u,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!a(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&c(t)&&!a(t,r)&&f(t),t}}},205:function(t,e,n){var r=n(38).f,o=n(56),a=n(193)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},206:function(t,e,n){var r=n(31),o=n(21),a=n(100),i=n(195),u=n(38).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=a?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:i.f(t)})}},207:function(t,e,n){var r=n(94),o=n(194),a=n(192);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var i,u=n(t),c=a.f,s=0;u.length>s;)c.call(t,i=u[s++])&&e.push(i);return e}},208:function(t,e,n){var r=n(105);t.exports=Array.isArray||function(t){return"Array"==r(t)}},209:function(t,e,n){var r=n(58),o=n(196).f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?function(t){try{return o(t)}catch(t){return i.slice()}}(t):o(r(t))}},210:function(t,e,n){var r=n(192),o=n(98),a=n(58),i=n(97),u=n(56),c=n(101),s=Object.getOwnPropertyDescriptor;e.f=n(22)?s:function(t,e){if(t=a(t),e=i(e,!0),c)try{return s(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},211:function(t,e,n){t.exports=n(212)},212:function(t,e,n){n(213),t.exports=n(21).Object.keys},213:function(t,e,n){var r=n(197),o=n(94);n(214)("keys",function(){return function(t){return o(r(t))}})},214:function(t,e,n){var r=n(57),o=n(21),a=n(55);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},215:function(t,e,n){var r=n(216);function o(){return t.exports=o=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}t.exports=o},216:function(t,e,n){t.exports=n(217)},217:function(t,e,n){n(218),t.exports=n(21).Object.assign},218:function(t,e,n){var r=n(57);r(r.S+r.F,"Object",{assign:n(219)})},219:function(t,e,n){"use strict";var r=n(94),o=n(194),a=n(192),i=n(197),u=n(104),c=Object.assign;t.exports=!c||n(55)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=i(t),c=arguments.length,s=1,f=o.f,l=a.f;c>s;)for(var p,d=u(arguments[s++]),h=f?r(d).concat(f(d)):r(d),v=h.length,y=0;v>y;)l.call(d,p=h[y++])&&(n[p]=d[p]);return n}:c},220:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return d});var r=n(0),o=n.n(r),a=n(12),i=n.n(a),u=n(191),c=n.n(u);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var s=n(198),f=n.n(s);n.d(e,"PageRenderer",function(){return f.a});var l=n(41);n.d(e,"parsePath",function(){return l.a});var p=o.a.createContext({}),d=function(t){return o.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},221:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(12),i=n.n(a),u=n(52),c=n(1),s=function(t){var e=t.location,n=c.a.getResourcesForPathname(e.pathname);return o.a.createElement(u.a,{location:e,pageResources:n})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s}}]);
//# sourceMappingURL=component---src-pages-page-2-tsx-3aa6279e6f0df4bc73f5.js.map