(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"028e":function(t,n,e){"use strict";e.r(n);var a=e("d456"),u=e("d18c");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("dad2");var o,r=e("f0c5"),s=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"7b03586d",null,!1,a["a"],o);n["default"]=s.exports},"469f":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{phoneNumber:"",password:""}},methods:{goDetail:function(){uni.navigateTo({url:"/pages/QuShe-login/QuShe-login"})},account_loginFc:function(){uni.showToast({title:"注册成功"}),uni.setStorage({key:"user",data:[{name:this.phoneNumber,mima:this.password}],success:function(t){console.log(t.data)}})}}};n.default=a},"99f5":function(t,n,e){var a=e("a634");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var u=e("4f06").default;u("0f870d46",a,!0,{sourceMap:!1,shadowMode:!1})},a634:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"uni-input[data-v-7b03586d]{border:1px solid #000;width:90%;margin:%?50?% auto;height:%?50?%}uni-button[data-v-7b03586d]{margin-top:%?100?%;width:80%}uni-text[data-v-7b03586d]{margin-left:%?50?%}.b1[data-v-7b03586d]{background-color:#3c3}",""]),t.exports=n},d18c:function(t,n,e){"use strict";e.r(n);var a=e("469f"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=u.a},d456:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"v1"},[e("v-uni-text",[t._v("请填写用户名：")]),e("v-uni-input",{attrs:{type:"text"},model:{value:t.phoneNumber,callback:function(n){t.phoneNumber=n},expression:"phoneNumber"}}),e("v-uni-text",[t._v("请填写密码：")]),e("v-uni-input",{attrs:{password:"Boolean",maxlength:"8"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1),e("v-uni-view",{staticClass:"v2"},[e("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.account_loginFc()}}},[t._v("注册")]),e("v-uni-button",{staticClass:"b1",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail()}}},[t._v("去登陆")])],1)],1)},i=[]},dad2:function(t,n,e){"use strict";var a=e("99f5"),u=e.n(a);u.a}}]);