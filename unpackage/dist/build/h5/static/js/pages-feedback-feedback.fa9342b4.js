(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-feedback-feedback"],{"2a42":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{}},methods:{upload:function(){uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["albuum"],success:function(n){uni.getImageInfo({src:n.tempFilePaths[0],success:function(n){console.log(n)}}),uni.previewImage({urls:n.tempFilePaths,longPressActions:{itemList:["首页","收藏","系统"],success:function(n){console.log(n)}}})},fail:function(n){console.log(n)}})},sub:function(){uni.showToast({title:"上传成功",icon:"success",duration:1e3}),setTimeout((function(){uni.switchTab({url:"../my/my"})}),600)}}};t.default=a},"36a2":function(n,t,e){"use strict";e.r(t);var a=e("e2fc"),i=e("a9b2");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("52fc");var o,c=e("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"4b869764",null,!1,a["a"],o);t["default"]=u.exports},"52fc":function(n,t,e){"use strict";var a=e("6500"),i=e.n(a);i.a},6500:function(n,t,e){var a=e("b64d");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("37d5cebe",a,!0,{sourceMap:!1,shadowMode:!1})},a9b2:function(n,t,e){"use strict";e.r(t);var a=e("2a42"),i=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=i.a},b64d:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-4b869764]{background-color:#f1f1f1}.Box .uni-textarea[data-v-4b869764]{margin-top:%?20?%;padding:%?40?% 0 0 %?70?%;background-color:#fff}.Box .picture[data-v-4b869764]{margin:%?60?% 0 0 %?60?%;width:%?200?%;height:%?180?%;border:1px dashed #a4b0be;padding:%?20?% 0 0 0;text-align:center}.Box .picture .tianjia[data-v-4b869764]{font-size:%?30?%;color:#a4b0be}.Box .button[data-v-4b869764]{margin-top:%?60?%;padding:%?60?%}body.?%PAGE?%[data-v-4b869764]{background-color:#f1f1f1}',""]),n.exports=t},e2fc:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var a={uniIcons:e("9f05").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"Box"},[e("v-uni-view",{staticClass:"uni-textarea"},[e("v-uni-textarea",{attrs:{"placeholder-style":"color:black",placeholder:"请输入内容"}})],1),e("v-uni-view",{staticClass:"picture",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.upload.apply(void 0,arguments)}}},[e("uni-icons",{attrs:{type:"camera",size:"50",color:"#a4b0be"}}),e("v-uni-view",{staticClass:"tianjia"},[n._v("添加图片")])],1),e("v-uni-view",{staticClass:"button"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.sub.apply(void 0,arguments)}}},[n._v("提交")])],1)],1)},r=[]}}]);