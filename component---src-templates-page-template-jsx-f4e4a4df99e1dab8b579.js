(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"pageTemplateQuery",function(){return s});var n=a(0),r=a.n(n),i=a(165),o=a.n(i),l=a(164);function c(e){var t=e.data.markdownRemark;return r.a.createElement(l.a,null,r.a.createElement("div",{className:"blog-post-container"},r.a.createElement(o.a,{title:"Hot Air - "+t.frontmatter.title}),r.a.createElement("div",{className:"blog-post"},r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:t.html}}))))}var s="1523227355"},153:function(e,t,a){"use strict";var n=a(37);t.__esModule=!0,t.withPrefix=m,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(159)),i=n(a(160)),o=n(a(7)),l=n(a(51)),c=n(a(52)),s=n(a(4)),u=n(a(0)),d=a(14),p=a(154);function m(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,c.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,l=t.onClick,c=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),f=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=m(a);return u.default.createElement(d.Link,(0,i.default)({to:v,state:s,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:s,replace:f})),!0}},h))},t}(u.default.Component);h.propTypes=(0,i.default)({},f,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(m(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(m(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(m(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),y(e)}},154:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(153),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(25);a.d(t,"waitForRouteChange",function(){return s.c});var u=a(155),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var p=a(36);a.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},158:function(e){e.exports={data:{site:{siteMetadata:{siteName:"Hot Air",description:"What's Legit and What to Quit in Decentralized Finance"}}}}},159:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},160:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},161:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(53),c=a(1),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},162:function(e,t,a){},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(35),a(158)),o=a(154),l=a(165),c=a.n(l),s=a(4),u=a.n(s),d=a(153),p=a.n(d),m=a(156),f=Object(m.b)("div",{target:"e1duu8xz0"})("z-index:1;position:relative;@media (min-width:820px){height:50vh;}@media (max-width:820px){height:80vh;}"),h=Object(m.b)("div",{target:"e1duu8xz1"})("filter:brightness(70%);height:100%;position:absolute;width:100%;z-index:-1;@media (min-width:820px){background-image:url(/aerial-view-cappadocia-2.jpg);}@media (max-width:820px){background-image:url(/aerial-view-cappadocia-vert.jpg);}"),v=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},r.a.createElement(p.a,{to:e.to},e.children))},g=function(e){return r.a.createElement("div",null,r.a.createElement(c.a,{link:[{rel:"shortcut icon",type:"image/png",href:"favicon.png"}]},r.a.createElement("title",null,e.data.site.siteMetadata.siteName),r.a.createElement("link",{rel:"canonical",href:"https://hotair.tech"}),r.a.createElement("meta",{name:"description",content:e.data.site.siteMetadata.description})),r.a.createElement("header",{id:"header"},r.a.createElement(f,null,r.a.createElement(h,null),r.a.createElement("div",{className:"inner",style:{color:"white",fontWeight:"bolder",textAlign:"center",textShadow:"5px 5px 5px rgba(0, 0, 0, 0.7)"}},r.a.createElement("div",{style:{fontSize:"8vh",paddingTop:"2vh"}},"Welcome to ",r.a.createElement("span",{style:{display:"inline-block"}},"Hot Air")),r.a.createElement("br",null),r.a.createElement("div",{style:{fontSize:"6vh"}},"What's Legit ",r.a.createElement("span",{style:{display:"inline-block"}},"and What to Quit")),r.a.createElement("br",null),r.a.createElement("div",{style:{fontSize:"6vh"}},"in Decentralized Finance"),r.a.createElement("br",null))),r.a.createElement("div",{style:{textAlign:"center",bottom:0}},r.a.createElement("ul",{style:{listStyle:"none",float:"none",color:"white",fontSize:"3vh",display:"inline-block",marginRight:"1.5rem"}},r.a.createElement(v,{to:"/"},"Home"),r.a.createElement(v,{to:"/blog/"},"Blog"),r.a.createElement(v,{to:"/podcast/"},"Podcast"),r.a.createElement(v,{to:"/learn/"},"Learn"),r.a.createElement(v,{to:"/about/"},"About"),r.a.createElement(v,{to:"/isbitcoinworthmorethangoldyet/"},"Charts")))))},y=function(e){return r.a.createElement(o.StaticQuery,{query:"1731611311",render:function(t){return r.a.createElement(g,Object.assign({data:t},e))},data:i})};g.propTypes={data:u.a.shape({site:u.a.shape({siteMetadata:u.a.shape({siteName:u.a.string.isRequired,description:u.a.string.isRequired}).isRequired}).isRequired}).isRequired};var b=function(e){return r.a.createElement("footer",{id:"footer",style:{backgroundColor:"rgba(96, 135, 192, 0.82)",color:"white",textAlign:"center",bottom:0,clear:"left"}},r.a.createElement("div",{className:"copyright",style:{marginLeft:"1rem",paddingTop:"1rem"}},r.a.createElement(p.a,{to:"/"},r.a.createElement("img",{style:{maxWidth:57.5,maxHeight:75,verticalAlign:"middle"},src:"/favicon.png",alt:"Cool balloon"})),"  © 2018 Bryan Willson Berry  ",r.a.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}),r.a.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"},"  ",r.a.createElement("img",{alt:"Creative Commons License",style:{borderWidth:0,marginBottom:0,verticalAlign:"middle"},src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}))))};a(162),t.a=function(e){var t=e.children;e.data,e.location;return r.a.createElement("div",null,r.a.createElement("div",{id:"wrapper"},r.a.createElement(y,null),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),r.a.createElement(b,null)))}}}]);
//# sourceMappingURL=component---src-templates-page-template-jsx-f4e4a4df99e1dab8b579.js.map