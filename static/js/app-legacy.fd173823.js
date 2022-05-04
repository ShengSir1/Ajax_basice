(function(){"use strict";var t={3573:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("Banner")],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-2 col-xs-offset-2"},[n("div",{staticClass:"list-group"},[n("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/home"}},[t._v("Home")]),n("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/about"}},[t._v("About")])],1)]),n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("router-view")],1)])])])])},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-offset-2 col-xs-8"},[n("div",{staticClass:"page-header"},[n("h2",[t._v("Vue Router Demo")]),n("button",{on:{click:t.back}},[t._v("后退")]),n("button",{on:{click:t.forward}},[t._v("前进")]),n("button",{on:{click:t.testGo}},[t._v("测试一下Go Api")])])])},s=[],l={name:"Banner",methods:{back:function(){console.log(this.$router),this.$router.back()},forward:function(){this.$router.forward()},testGo:function(){this.$router.go(-2)}}},u=l,c=n(1001),f=(0,c.Z)(u,a,s,!1,null,"9a5095ba",null),v=f.exports,p={name:"App",components:{Banner:v}},m=p,h=(0,c.Z)(m,o,r,!1,null,null,null),d=h.exports,_=n(2809),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("我是About的内容")])])}],w={name:"About",mounted:function(){},beforeRouteEnter:function(t,e,n){console.log("路由守卫",t,e),t.meta.isAuth?"atguigu"===localStorage.getItem("school")?n():alert("学校错误，无权限查看"):n()},beforeRouteLeave:function(t,e,n){console.log("beforeRouteLeave",t,e),n()}},y=w,x=(0,c.Z)(y,g,b,!1,null,"a383c0d4",null),k=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Home组件内容")]),n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),n("li",[n("router-link",{staticClass:"list-group-item ",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),n("keep-alive",{attrs:{include:"News"}},[n("router-view")],1)],1)])},$=[],E={name:"Home",mounted:function(){console.log("Home组件挂载了")}},Z=E,O=(0,c.Z)(Z,C,$,!1,null,"571f4de8",null),A=O.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{style:{opacity:t.opacity}},[t._v("欢迎学习Vue")]),t._m(0),t._m(1),t._m(2)])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news001 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news002 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news003 "),n("input",{attrs:{type:"text"}})])}],N={name:"News",data:function(){return{opacity:1}},activated:function(){var t=this;console.log("News组件被激活了"),this.timer=setInterval((function(){t.opacity-=.01,t.opacity<=0&&(t.opacity=1)}),16)},deactivated:function(){console.log("News组件失活了"),clearInterval(this.timer)}},S=N,H=(0,c.Z)(S,q,j,!1,null,"668907a9",null),L=H.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.messageList,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"xiangqing",query:{id:e.id,title:e.title}}}},[t._v(" "+t._s(e.title)+" ")]),n("button",{staticClass:"btn btn-secondary",on:{click:function(n){return t.pushShow(e)}}},[t._v("push查看")]),n("button",{staticClass:"btn btn-info",on:{click:function(n){return t.replaceShow(e)}}},[t._v("replace查看")])],1)})),0),n("hr"),n("router-view")],1)},B=[],G=(n(4916),n(5306),{name:"Message",data:function(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow:function(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow:function(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}}}),I=G,M=(0,c.Z)(I,R,B,!1,null,"489258e6",null),T=M.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("消息编号:"+t._s(t.id))]),n("li",[t._v("消息标题:"+t._s(t.title))])])},D=[],P={name:"Detail",props:["id","title"],computed:{},mounted:function(){}},z=P,F=(0,c.Z)(z,V,D,!1,null,"10ec0d37",null),J=F.exports,K=new _.Z({mode:"history",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"关于"}},{name:"zhuye",path:"/home",component:A,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:L,meta:{isAuth:!0,title:"新闻"}},{name:"xiaoxi",path:"message",component:T,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail",component:J,meta:{isAuth:!0,title:"详情"},props:function(t){return{id:t.query.id,title:t.query.title,a:1,b:"hello"}}}]}]}]});K.afterEach((function(t,e){console.log("后置路由守卫",t,e),document.title=t.meta.title||"Vue路由守卫案例"}));var Q=K;i.Z.use(_.Z),i.Z.config.productionTip=!1,new i.Z({el:"#app",render:function(t){return t(d)},router:Q})}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var a=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,a=i[0],s=i[1],l=i[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(e&&e(i);u<a.length;u++)r=a[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3573)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.fd173823.js.map