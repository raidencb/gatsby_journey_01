(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var n=a(7),r=a.n(n),l=a(0),i=a.n(l),u=a(33),s=a.n(u),o=a(4),c=a.n(o),d=a(155),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data;return i.a.createElement(d.a,null,i.a.createElement("div",null,i.a.createElement("h1",null,"Posts"),e.allWordpressPost.edges.map(function(e){var t=e.node;return i.a.createElement("div",{key:t.slug,className:"post",style:{marginBottom:50}},i.a.createElement(s.a,{to:"post/"+t.slug},i.a.createElement("h3",null,t.title)),i.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:t.excerpt}}),t.date)})))},t}(l.Component);m.propTypes={data:c.a.object.isRequired,edges:c.a.array},t.default=m;var p="2629141262"},150:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),u=a(33),s=a.n(u);a.d(t,"a",function(){return s.a});a(151);var o=r.a.createContext({}),c=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),u=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},154:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{id:"7ec551e2-9cf4-5d96-9a9c-ddf78ff760ff",name:"Main menu",items:[{title:"Sample Page",url:"http://localhost/playground/sample-page/",object_slug:"sample-page"},{title:"Ut exercitationem sapiente omnis animi",url:"http://localhost/playground/2019/04/15/ut-exercitationem-sapiente-omnis-animi/",object_slug:"ut-exercitationem-sapiente-omnis-animi"},{title:"Unde est eum amet",url:"http://localhost/playground/2019/04/15/unde-est-eum-amet/",object_slug:"unde-est-eum-amet"},{title:"test",url:"#",object_slug:"test"}]}}]}}}},155:function(e,t,a){"use strict";var n=a(152),r=a(0),l=a.n(r),i=a(4),u=a.n(i),s=a(150),o=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.propTypes={siteTitle:u.a.string},o.defaultProps={siteTitle:""};var c=o,d=(a(156),a(154)),m=a(33),p=a.n(m),f=function(){return l.a.createElement(s.b,{query:"1091162957",render:function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Main Menu"),l.a.createElement("ul",null,e.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(function(e){return l.a.createElement("li",{key:e.object_slug},l.a.createElement(p.a,{to:e.url},e.title))})))},data:d})},g=function(e){var t=e.children;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,l.a.createElement(f,null),t),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})};g.propTypes={children:u.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-posts-old-index-js-3b5226c6d0fcce30ca9e.js.map