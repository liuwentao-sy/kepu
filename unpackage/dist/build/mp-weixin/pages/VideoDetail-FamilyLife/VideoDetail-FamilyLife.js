(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/VideoDetail-FamilyLife/VideoDetail-FamilyLife"],{"1f30":function(e,t,i){"use strict";(function(e){i("4ffc");n(i("66fd"));var t=n(i("9b69"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},2149:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("a34a")),a=i("4029");function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,i,n,a,r,u){try{var o=e[r](u),c=o.value}catch(l){return void i(l)}o.done?t(c):Promise.resolve(c).then(n,a)}function o(e){return function(){var t=this,i=arguments;return new Promise((function(n,a){var r=e.apply(t,i);function o(e){u(r,n,a,o,c,"next",e)}function c(e){u(r,n,a,o,c,"throw",e)}o(void 0)}))}}var c={data:function(){return{sharedata:"",detail:{},id:"",flag:!1,video1:[],article1:[]}},onLoad:function(e){this.id=e.id,this.getVideoDetail(),this.getVideos1(),this.getArticle1()},methods:{one:function(){this.flag=!this.flag},addone:function(e){0==this.flag?(this.detail.praise_num=parseInt(this.detail.praise_num)+1,this.flag=!0):(this.detail.praise_num=this.detail.praise_num-1,this.flag=!1)},open:function(){this.$refs.sharepopup.open()},getVideoDetail:function(){var e=this;return o(n.default.mark((function t(){var i;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.myRequestGet)("/api/v1/fatiao/index/detail?id=\t"+e.id);case 2:i=t.sent,e.detail=i;case 4:case"end":return t.stop()}}),t)})))()},getVideos1:function(){var e=this;return o(n.default.mark((function t(){var i;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.myRequestGet)("/api/v1/fatiao/index/more-detail",{channel_id:28,articleLimit:8,videoLimit:1,clearcache:"redis",limit:1});case 2:i=t.sent,e.video1=i.list;case 4:case"end":return t.stop()}}),t)})))()},getArticle1:function(){var e=this;return o(n.default.mark((function t(){var i;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.myRequestGet)("/api/v1/fatiao/article/more-article",{channel_id:28,articleLimit:8,videoLimit:1,clearcache:"redis",limit:8});case 2:i=t.sent,e.article1=i.list;case 4:case"end":return t.stop()}}),t)})))()},goArticleDetail:function(t){e.navigateTo({url:"/pages/ArticleDetail-FamilyLife/ArticleDetail-FamilyLife?id=".concat(t.id)})},goVideoDetail:function(t){e.navigateTo({url:"/pages/VideoDetail-FamilyLife/VideoDetail-FamilyLife?id=".concat(t.id)})}}};t.default=c}).call(this,i("543d")["default"])},"3cdd":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={uniIcons:function(){return Promise.all([i.e("common/vendor"),i.e("components/uni-icons/uni-icons")]).then(i.bind(null,"4ac2"))},uniPopup:function(){return i.e("components/uni-popup/uni-popup").then(i.bind(null,"36f2"))},shareBtn:function(){return i.e("components/share-btn/share-btn").then(i.bind(null,"228d"))}},a=function(){var e=this,t=e.$createElement;e._self._c},r=[]},"9b69":function(e,t,i){"use strict";i.r(t);var n=i("3cdd"),a=i("e93b");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("e631");var u,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"0629ade1",null,!1,n["a"],u);t["default"]=c.exports},ddfb:function(e,t,i){},e631:function(e,t,i){"use strict";var n=i("ddfb"),a=i.n(n);a.a},e93b:function(e,t,i){"use strict";i.r(t);var n=i("2149"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a}},[["1f30","common/runtime","common/vendor"]]]);