(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{166:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),i=(n(185),n(93),n(0)),a=n.n(i),s=n(180),l=Object(s.a)("span",{target:"e1sviop20"})("color:",function(e){return e.color},";margin-left:0.8em;:hover{opacity:0.4;cursor:pointer;}");function c(e){return a.a.createElement(l,{color:e.color,onClick:e.onClick,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut},a.a.createElement("svg",{height:"6",width:"20",style:{marginRight:4}},a.a.createElement("line",{x1:"0",y1:"0",x2:"20",y2:"0",style:{stroke:e.color,strokeWidth:8}})),a.a.createElement("strong",null,e.text))}var u=function(e,t){var n=e.filter(function(e){return e.name===t})[0];return void 0!==n?n.color:"#727272"},p=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.onToggle,n=this.props.show,r=this.props.symbols;return a.a.createElement("div",null,a.a.createElement(c,{key:"showMarketCap",color:n.marketCap?"#6465c6":"#727272",text:"Market Cap",onClick:function(e){return t("marketCap",e)}}),a.a.createElement(c,{key:"showBTC",symbol:"BTC",color:u(r,"BTC"),text:"Price (BTC)",onClick:function(e){return t("btc",e)},onMouseOver:function(){return e.props.onMouseOver("BTC")},onMouseOut:this.props.onMouseOut}),a.a.createElement(c,{key:"showGold",symbol:"GOLD",color:u(r,"GOLD"),text:"Price (Gold) USD / kg",onClick:function(e){return t("gold",e)},onMouseOver:function(){return e.props.onMouseOver("GOLD")},onMouseOut:this.props.onMouseOut}))},t}(i.Component);t.default=p},180:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(85),a=n(2),s=n.n(a),l=n(60),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,u=Object(l.a)(c.test.bind(c));var p,d="__EMOTION_THEMING__",h=((p={})[d]=s.a.object,p);var f=u,m=function(e){return"theme"!==e&&"innerRef"!==e},g=function(){return!0},y=function(e,t){for(var n=2,r=arguments.length;n<r;n++){var o=arguments[n],i=void 0;for(i in o)e(i)&&(t[i]=o[i])}return t};var v=function(e,t){var n=function(r,o){var i,a,s,l;void 0!==o&&(i=o.e,a=o.label,s=o.target,l=r.__emotion_forwardProp&&o.shouldForwardProp?function(e){return r.__emotion_forwardProp(e)&&o.shouldForwardProp(e)}:o.shouldForwardProp);var c=r.__emotion_real===r,u=void 0===i&&c&&r.__emotion_base||r;return"function"!=typeof l&&(l="string"==typeof u&&u.charAt(0)===u.charAt(0).toLowerCase()?f:m),function(){var p=arguments,f=c&&void 0!==r.__emotion_styles?r.__emotion_styles.slice(0):[];if(void 0!==a&&f.push("label:"+a+";"),void 0===i)if(null==p[0]||void 0===p[0].raw)f.push.apply(f,p);else{f.push(p[0][0]);for(var m=p.length,v=1;v<m;v++)f.push(p[v],p[0][v])}var k=function(n){var r,o;function a(){return n.apply(this,arguments)||this}o=n,(r=a).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o;var c=a.prototype;return c.componentWillMount=function(){void 0!==this.context[d]&&(this.unsubscribe=this.context[d].subscribe(function(e){this.setState({theme:e})}.bind(this)))},c.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[d].unsubscribe(this.unsubscribe)},c.render=function(){var n=this.props,r=this.state;this.mergedProps=y(g,{},n,{theme:null!==r&&r.theme||n.theme||{}});var o="",a=[];return n.className&&(o+=void 0===i?e.getRegisteredStyles(a,n.className):n.className+" "),o+=void 0===i?e.css.apply(this,f.concat(a)):i,void 0!==s&&(o+=" "+s),t.createElement(u,y(l,{},n,{className:o,ref:n.innerRef}))},a}(t.Component);return k.displayName=void 0!==a?a:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",void 0!==r.defaultProps&&(k.defaultProps=r.defaultProps),k.contextTypes=h,k.__emotion_styles=f,k.__emotion_base=u,k.__emotion_real=k,k.__emotion_forwardProp=l,Object.defineProperty(k,"toString",{value:function(){return"."+s}}),k.withComponent=function(e,t){return n(e,void 0!==t?y(g,{},o,t):o).apply(void 0,f)},k}};return n};n.d(t,!1,function(){return i.flush}),n.d(t,!1,function(){return i.hydrate}),n.d(t,!1,function(){return i.cx}),n.d(t,!1,function(){return i.merge}),n.d(t,!1,function(){return i.getRegisteredStyles}),n.d(t,!1,function(){return i.injectGlobal}),n.d(t,!1,function(){return i.keyframes}),n.d(t,!1,function(){return i.css}),n.d(t,!1,function(){return i.sheet}),n.d(t,!1,function(){return i.caches});var k=v(i,o.a);t.a=k},185:function(e,t,n){var r=n(29).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(19)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-projects-bitcoinvsgold-components-chart-legend-js-94db7c213498274d40b5.js.map