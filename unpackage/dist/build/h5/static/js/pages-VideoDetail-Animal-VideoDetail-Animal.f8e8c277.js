(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-VideoDetail-Animal-VideoDetail-Animal"],{"468a":function(t,i,e){var a=e("8998");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("579d3693",a,!0,{sourceMap:!1,shadowMode:!1})},"4b37":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={uniIcons:e("9f05").default,uniPopup:e("0f12").default,shareBtn:e("c706").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"Box"},[e("v-uni-view",{staticClass:"video"},[e("v-uni-video",{attrs:{src:t.lists.info&&t.lists.info.video_url,autoplay:"true",loop:"true","enable-play-gesture":"true","object-fit":"cover",poster:t.lists.info&&t.lists.info.video_img}})],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.lists.title))]),e("v-uni-view",{staticClass:"author"},[e("v-uni-image",{staticClass:"author_img",attrs:{src:t.lists.author&&t.lists.author.img,mode:"widthFix"}}),e("v-uni-text",{staticClass:"text_name"},[t._v(t._s(t.lists.author&&t.lists.author.name))]),e("v-uni-text",{staticClass:"text_time"},[t._v("2020-09-15")])],1),e("v-uni-view",{staticClass:"introduce"},[t._v(t._s(t.lists.info&&t.lists.info.video_note))]),e("v-uni-view",{staticClass:"bottom"}),e("v-uni-view",{staticClass:"interact"},[e("v-uni-view",{staticClass:"zan"},[e("v-uni-text",{staticClass:"iconfont icon-dianzan",style:t.flag?"color:blue":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addone()}}}),e("v-uni-text",[t._v(t._s(t.lists.praise_num))])],1),e("v-uni-view",{staticClass:"share",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.open.apply(void 0,arguments)}}},[e("uni-icons",{attrs:{type:"redo",size:"15",color:"#00b894"}}),e("v-uni-text",[t._v("分享")])],1)],1)],1),e("v-uni-view",{staticClass:"center"}),e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"likes"},[t._v("猜你喜欢")]),t._l(t.Videos,(function(i){return e("v-uni-view",{key:i.id,staticClass:"box1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goVideos4(i)}}},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"imgbox"},[e("v-uni-image",{staticClass:"imgbox_img",attrs:{src:i.video_img,mode:"widthFix"}}),e("v-uni-view",{staticClass:"imgbox_length"},[t._v(t._s(i.video_length))])],1),e("v-uni-view",{staticClass:"channel"},[e("v-uni-view",{staticClass:"author_name"},[t._v(t._s(i.author_name))]),e("v-uni-view",{staticClass:"interact"},[e("v-uni-view",{staticClass:"zan"},[e("uni-icons",{attrs:{type:"hand-thumbsup",size:"14",color:"#a4b0be"}}),e("v-uni-text",[t._v(t._s(i.praise_num))]),e("uni-icons",{attrs:{type:"eye",size:"14",color:"#a4b0be"}}),e("v-uni-text",[t._v(t._s(i.play_num))])],1),e("v-uni-view",{staticClass:"share",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.open.apply(void 0,arguments)}}},[e("uni-icons",{attrs:{type:"redo",size:"15",color:"#00b894"}}),e("v-uni-text",[t._v("分享")])],1)],1)],1)],1)})),t._l(t.Lists,(function(i){return e("v-uni-view",{key:i.id,staticClass:"box2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLists4(i)}}},[e("v-uni-view",{staticClass:"classify"},[e("v-uni-image",{staticClass:"cover_img",attrs:{src:i.c_img,mode:"widthFix"}}),e("v-uni-view",{staticClass:"explain"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"name"},[e("v-uni-view",{staticClass:"author_name"},[t._v(t._s(i.author_name))]),e("v-uni-view",{staticClass:"interact"},[e("v-uni-view",{staticClass:"zan"},[e("uni-icons",{attrs:{type:"hand-thumbsup",size:"14",color:"#a4b0be"}}),e("v-uni-text",[t._v(t._s(i.praise_num))]),e("uni-icons",{attrs:{type:"eye",size:"14",color:"#a4b0be"}}),e("v-uni-text",[t._v(t._s(i.play_num))])],1),e("v-uni-view",{staticClass:"share",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.open.apply(void 0,arguments)}}},[e("uni-icons",{attrs:{type:"redo",size:"15",color:"#00b894"}}),e("v-uni-text",[t._v("分享")])],1)],1)],1)],1)],1)],1)})),e("v-uni-view",{staticClass:"box3"})],2),e("uni-popup",{ref:"sharepopup",attrs:{type:"bottom"}},[e("share-btn",{attrs:{sharedataTemp:t.sharedata}})],1)],1)},o=[]},"5f93":function(t,i,e){"use strict";e.r(i);var a=e("a1d2"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},8998:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.Box .video[data-v-221b64fe]{width:100%;height:%?400?%}.Box .video uni-video[data-v-221b64fe]{width:100%;height:100%}.Box .content[data-v-221b64fe]{padding:%?40?% %?20?%}.Box .content .title[data-v-221b64fe]{font-size:%?50?%;font-weight:700}.Box .content .author[data-v-221b64fe]{margin-top:%?20?%;font-size:%?28?%;position:relative}.Box .content .author .author_img[data-v-221b64fe]{width:%?50?%;height:%?50?%;-webkit-border-radius:50%;border-radius:50%;position:absolute;top:%?-10?%;left:0}.Box .content .author .text_name[data-v-221b64fe]{margin-left:%?70?%}.Box .content .author .text_time[data-v-221b64fe]{color:#a4b0be;margin-left:%?20?%}.Box .content .introduce[data-v-221b64fe]{margin-top:%?30?%;font-size:%?28?%;color:#8395a7}.Box .content .bottom[data-v-221b64fe]{margin-top:%?50?%;border-top:%?2?% solid #bdc3c7}.Box .content .interact[data-v-221b64fe]{margin-top:%?30?%;width:100%}.Box .content .interact .zan[data-v-221b64fe]{float:left;margin-left:%?20?%;color:#a4b0be;font-size:%?30?%}.Box .content .interact .zan uni-icons[data-v-221b64fe]{margin-left:%?8?%}.Box .content .interact .zan uni-text[data-v-221b64fe]{font-size:%?30?%;margin-right:%?8?%}.Box .content .interact .share[data-v-221b64fe]{float:right;font-weight:700;color:#747d8c;font-size:%?30?%}.Box .content .interact .share uni-icons[data-v-221b64fe]{margin-right:%?8?%}.Box .center[data-v-221b64fe]{margin-top:%?30?%;border-bottom:%?20?% solid #bdc3c7}.Box .box[data-v-221b64fe]{padding:%?20?% %?20?% 0 %?20?%}.Box .box .likes[data-v-221b64fe]{font-size:%?30?%;font-weight:700;padding-bottom:%?20?%;border-bottom:1px solid #bdc3c7}.Box .box .box1[data-v-221b64fe]{margin-top:%?20?%;height:%?520?%}.Box .box .box1 .title[data-v-221b64fe]{font-size:%?32?%}.Box .box .box1 .imgbox[data-v-221b64fe]{position:relative;margin-top:%?20?%}.Box .box .box1 .imgbox .imgbox_img[data-v-221b64fe]{-webkit-border-radius:%?10?%;border-radius:%?10?%;width:100%}.Box .box .box1 .imgbox .imgbox_length[data-v-221b64fe]{position:absolute;bottom:%?20?%;right:%?20?%;width:%?80?%;height:%?30?%;font-size:%?20?%;text-align:center;-webkit-border-radius:%?20?%;border-radius:%?20?%;color:#fff;background-color:rgba(45,52,54,.6)}.Box .box .box1 .channel[data-v-221b64fe]{margin-top:%?10?%;width:100%}.Box .box .box1 .channel .author_name[data-v-221b64fe]{float:left;font-size:%?24?%;color:#2f3640;font-weight:700;position:relative}.Box .box .box1 .channel .author_name[data-v-221b64fe]::after{content:"";display:block;position:absolute;top:%?30?%;width:%?70?%;height:%?8?%;background-color:#74b9ff}.Box .box .box1 .channel .interact[data-v-221b64fe]{float:right;margin-top:%?7?%;display:-webkit-box;display:-webkit-flex;display:flex}.Box .box .box1 .channel .interact .zan[data-v-221b64fe]{color:#a4b0be;font-size:%?24?%}.Box .box .box1 .channel .interact .zan uni-icons[data-v-221b64fe]{margin-right:%?8?%}.Box .box .box1 .channel .interact .zan uni-text[data-v-221b64fe]{font-size:%?24?%;margin-right:%?8?%}.Box .box .box1 .channel .interact .share[data-v-221b64fe]{font-weight:700;color:#747d8c;font-size:%?24?%}.Box .box .box1 .channel .interact .share uni-icons[data-v-221b64fe]{margin-right:%?8?%}.Box .box .box2 .classify[data-v-221b64fe]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?24?%;border-top:1px solid #bdc3c7}.Box .box .box2 .classify .cover_img[data-v-221b64fe]{margin-top:%?24?%;width:%?250?%}.Box .box .box2 .classify .explain[data-v-221b64fe]{margin:%?24?% 0 0 %?20?%;width:%?440?%}.Box .box .box2 .classify .explain .title[data-v-221b64fe]{font-size:%?32?%}.Box .box .box2 .classify .explain .name[data-v-221b64fe]{width:100%;margin-top:%?60?%}.Box .box .box2 .classify .explain .name .author_name[data-v-221b64fe]{display:inline-block;float:left;font-size:%?24?%;color:#2f3640;font-weight:700;position:relative}.Box .box .box2 .classify .explain .name .author_name[data-v-221b64fe]::after{content:"";display:block;position:absolute;top:%?30?%;width:%?70?%;height:%?8?%;background-color:#74b9ff}.Box .box .box2 .classify .explain .name .interact[data-v-221b64fe]{float:right;margin-top:%?7?%;display:-webkit-box;display:-webkit-flex;display:flex}.Box .box .box2 .classify .explain .name .interact .zan[data-v-221b64fe]{color:#a4b0be;font-size:%?24?%}.Box .box .box2 .classify .explain .name .interact .zan uni-icons[data-v-221b64fe]{margin-right:%?8?%}.Box .box .box2 .classify .explain .name .interact .zan uni-text[data-v-221b64fe]{margin-right:%?8?%}.Box .box .box2 .classify .explain .name .interact .share[data-v-221b64fe]{float:right;font-weight:700;font-size:%?24?%;color:#747d8c}.Box .box .box2 .classify .explain .name .interact .share uni-icons[data-v-221b64fe]{margin-right:%?8?%}.Box .box .box3[data-v-221b64fe]{margin-top:%?24?%;border-top:%?2?% solid #bdc3c7}',""]),t.exports=i},a1d2:function(t,i,e){"use strict";var a=e("4ea4");e("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var n=a(e("1da1")),o=e("4fac"),s=(e("f21a"),a(e("8ca2")),{data:function(){return{id:"",lists:[],sharedata:"",Videos:[],Lists:[],flag:!1}},onLoad:function(t){this.id=t.id,this.getNewsDetail(),this.getList(),this.getVideos()},methods:{open:function(){this.$refs.sharepopup.open()},one:function(){this.flag=!this.flag},addone:function(t){0==this.flag?(this.lists.praise_num=parseInt(this.lists.praise_num)+1,this.flag=!0):(this.lists.praise_num=this.lists.praise_num-1,this.flag=!1)},getNewsDetail:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,o.myRequestGet)("/api/v1/fatiao/index/detail?id=\t"+t.id);case 2:e=i.sent,t.lists=e;case 4:case"end":return i.stop()}}),i)})))()},getVideos:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,o.myRequestGet)("/api/v1/fatiao/index/more-detail",{channel_id:3,articleLimit:8,videoLimit:1,clearcache:"redis",limit:1});case 2:e=i.sent,t.Videos=e.list;case 4:case"end":return i.stop()}}),i)})))()},getList:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,(0,o.myRequestGet)("/api/v1/fatiao/article/more-article",{channel_id:3,articleLimit:8,videoLimit:1,clearcache:"redis",limit:8});case 2:e=i.sent,t.Lists=e.list;case 4:case"end":return i.stop()}}),i)})))()},goLists4:function(t){uni.navigateTo({url:"/pages/ArticleDetail-Animal/ArticleDetail-Animal?id=".concat(t.id)})},goVideos4:function(t){uni.navigateTo({url:"/pages/VideoDetail-Animal/VideoDetail-Animal?id=".concat(t.id)})}}});i.default=s},b12a:function(t,i,e){"use strict";var a=e("468a"),n=e.n(a);n.a},f8b9:function(t,i,e){"use strict";e.r(i);var a=e("4b37"),n=e("5f93");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("b12a");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"221b64fe",null,!1,a["a"],s);i["default"]=c.exports}}]);