(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/Game/Game"],{"322e":function(e,t,n){},"3a38":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("a34a")),r=n("4029");function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,r,a,u){try{var c=e[a](u),o=c.value}catch(s){return void n(s)}c.done?t(o):Promise.resolve(o).then(i,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function c(e){u(a,i,r,c,o,"next",e)}function o(e){u(a,i,r,c,o,"throw",e)}c(void 0)}))}}var o={data:function(){return{sharedata:"",video1:[],article1:[],video2:[],article2:[],video3:[],article3:[]}},created:function(){this.getVideos1(),this.getArticle1(),this.getVideos2(),this.getArticle2(),this.getVideos3(),this.getArticle3()},methods:{goArticleDetail:function(t){e.navigateTo({url:"/pages/ArticleDetail-Game/ArticleDetail-Game?id=".concat(t.id)})},goVideoDetail:function(t){e.navigateTo({url:"/pages/VideoDetail-Game/VideoDetail-Game?id=".concat(t.id)})},getVideos1:function(){var e=this;return c(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/index/list",{id:26,p:1,order:1,limit:1,channel_id:26});case 2:n=t.sent,e.video1=n;case 4:case"end":return t.stop()}}),t)})))()},getArticle1:function(){var e=this;return c(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/article/list",{id:26,p:1,order:1,limit:6,channel_id:26});case 2:n=t.sent,e.article1=n;case 4:case"end":return t.stop()}}),t)})))()},getVideos2:function(){var e=this;return c(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/index/list",{id:26,p:2,order:1,limit:1,channel_id:26});case 2:n=t.sent,e.video2=n;case 4:case"end":return t.stop()}}),t)})))()},getArticle2:function(){var e=this;return c(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/article/list",{id:26,p:2,order:1,limit:6,channel_id:26});case 2:n=t.sent,e.article2=n;case 4:case"end":return t.stop()}}),t)})))()},getVideos3:function(){var e=this;return c(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/index/list",{id:26,p:3,order:1,limit:1,channel_id:26});case 2:n=t.sent,e.video3=n;case 4:case"end":return t.stop()}}),t)})))()},getArticle3:function(){var e=this;return c(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestGet)("/api/v1/fatiao/article/list",{id:26,p:3,order:1,limit:6,channel_id:26});case 2:n=t.sent,e.article3=n;case 4:case"end":return t.stop()}}),t)})))()},open:function(){this.$refs.sharepopup.open()}}};t.default=o}).call(this,n("543d")["default"])},"520c":function(e,t,n){"use strict";n.r(t);var i=n("ff3e"),r=n("875b");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("717c");var u,c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"456b290f",null,!1,i["a"],u);t["default"]=o.exports},"717c":function(e,t,n){"use strict";var i=n("322e"),r=n.n(i);r.a},"875b":function(e,t,n){"use strict";n.r(t);var i=n("3a38"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},ff3e:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"4ac2"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"36f2"))},shareBtn:function(){return n.e("components/share-btn/share-btn").then(n.bind(null,"228d"))}},r=function(){var e=this,t=e.$createElement;e._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/Game/Game-create-component',
    {
        'components/Game/Game-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("520c"))
        })
    },
    [['components/Game/Game-create-component']]
]);