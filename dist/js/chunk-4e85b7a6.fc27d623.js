(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e85b7a6"],{1557:function(t,s,e){},"7a3b":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pg-tasks"},[e("DashboardHeader",{attrs:{title:"任务"}}),e("div",{staticClass:"content"},[e("div",{staticClass:"left"},t._l(t.scripts,(function(s,a){return e("div",{key:a,staticClass:"item",class:{active:a===t.activeName},on:{click:function(e){return t.clickHandler(s,a)}}},[e("img",{attrs:{src:"https://gw.alipayobjects.com/zos/basement_prod/fb3b6fab-253e-41fc-981a-8bfc5dc4fede.svg"}}),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[t._v(t._s(a))]),e("div",{staticClass:"detail"},[t._v(t._s(s))])])])})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentScript,expression:"currentScript"}],staticClass:"right"},[e("Button",{staticClass:"mb20",attrs:{type:"primary"},on:{click:t.execHandler}},[t._v("执行")]),e("p",[t._v(t._s(t.currentScript))])],1)])],1)},c=[],i=e("365c"),n=e("3a43"),r={name:"Tasks",data:function(){return{scripts:{},activeName:"",currentScript:null}},methods:{clickHandler:function(t,s){this.activeName=s,this.currentScript=t},execHandler:function(){var t=this;this.$store.commit("setLogShow",!0),setTimeout((function(){n["a"].emit("exec task",t.activeName)}),1e3)}},mounted:function(){var t=this;i["a"].get("/pkg/scripts").then((function(s){t.scripts=s}))}},o=r,l=(e("f534"),e("2877")),u=Object(l["a"])(o,a,c,!1,null,"0dca3446",null);s["default"]=u.exports},f534:function(t,s,e){"use strict";var a=e("1557"),c=e.n(a);c.a}}]);
//# sourceMappingURL=chunk-4e85b7a6.fc27d623.js.map