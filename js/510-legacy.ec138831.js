"use strict";(self["webpackChunkwork_qianfeng"]=self["webpackChunkwork_qianfeng"]||[]).push([[510],{510:function(e,a,n){n.r(a),n.d(a,{default:function(){return c}});var s=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"login-box"},[n("van-form",{on:{submit:e.submitLogin}},[n("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",autocomplete:"off",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),n("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",loading:e.loading,"loading-text":"登录中..."}},[e._v(" 登录 ")])],1)],1)],1)},t=[],o=(n(4916),n(5306),n(525)),r={name:"Login",data:function(){return{username:"",password:"",loading:!1}},methods:{submitLogin:function(){var e=this;this.loading=!0,(0,o.yq)({userName:this.username,password:this.password}).then((function(a){"success"===a.code?(e.$toast("用户登录成功，稍后跳转至首页"),localStorage.setItem("token",a.token),localStorage.setItem("username",e.username),e.$router.replace("/")):(e.$toast("账号或密码错误"),e.username=e.password="",e.loading=!1)})).catch((function(a){e.$toast.fail("未知错误，请稍后重试"),e.loading=!1}))}}},l=r,i=n(1001),u=(0,i.Z)(l,s,t,!1,null,"d9cb9cf0",null),c=u.exports}}]);
//# sourceMappingURL=510-legacy.ec138831.js.map