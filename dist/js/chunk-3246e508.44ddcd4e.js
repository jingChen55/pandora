(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3246e508"],{"129f":function(t,a){t.exports=Object.is||function(t,a){return t===a?0!==t||1/t===1/a:t!=t&&a!=a}},"75c2":function(t,a,e){},"841c":function(t,a,e){"use strict";var s=e("d784"),n=e("825a"),i=e("1d80"),r=e("129f"),o=e("14c3");s("search",1,(function(t,a,e){return[function(a){var e=i(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,e):new RegExp(a)[t](String(e))},function(t){var s=e(a,t,this);if(s.done)return s.value;var i=n(t),c=String(this),l=i.lastIndex;r(l,0)||(i.lastIndex=0);var u=o(i,c);return r(i.lastIndex,l)||(i.lastIndex=l),null===u?-1:u.index}]}))},"86ef":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("DashboardHeader",{attrs:{title:"物料"}},[e("Input",{staticStyle:{width:"100%"},attrs:{placeholder:"输入关键词搜索"},on:{"on-enter":t.searchHandler},model:{value:t.search.name,callback:function(a){t.$set(t.search,"name",a)},expression:"search.name"}},[e("Icon",{attrs:{slot:"suffix",type:"ios-search"},slot:"suffix"})],1)],1),e("PageWrap",[e("MyFilter",{on:{change:t.filterHandler},model:{value:t.search.tag,callback:function(a){t.$set(t.search,"tag",a)},expression:"search.tag"}}),e("div",{staticClass:"blocks"},[t.blocks.length?e("Row",{attrs:{gutter:24}},t._l(t.blocks,(function(a,s){return e("Col",{key:s,attrs:{span:"6"}},[e("block-item",{attrs:{materialsName:t.materialsName,info:a}})],1)})),1):e("Empty"),t.spinShow?e("Spin",{attrs:{fix:""}}):t._e()],1),e("Page",{staticClass:"pages",attrs:{"show-total":!0,current:t.search.page,total:t.total,"page-size":t.search.pageSize},on:{"on-change":t.pageChange}})],1)],1)},n=[],i=(e("b0c0"),e("d3b7"),e("ac1f"),e("841c"),e("365c")),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"block-item"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.info.screenshot},on:{click:t.previewImg}})]),e("div",{staticClass:"name"},[t._v(t._s(t.info.name))]),e("div",{staticClass:"desc"},[t._v(t._s(t.info.description))]),e("div",{staticClass:"options"},[e("a",{on:{click:function(a){return t.openSource(t.info.sourceCode)}}},[t._v("源码")]),t._v("/ "),t.info.previewUrl?e("a",{attrs:{href:t.info.previewUrl,target:"_blank"}},[t._v("预览")]):t._e(),t._v("/ "),e("a",{on:{click:function(a){return t.download(t.info)}}},[t._v("下载")])])])},o=[],c=(e("d81d"),{name:"BlockItem",data:function(){return{colors:["primary","success","warning","error"]}},props:{info:{type:Object,default:function(){return{}}},materialsName:{type:String,required:!0}},methods:{previewImg:function(){var t=this,a=this.info.screenshot;this.$Modal.info({title:"大图预览",width:"80%",closable:!0,okText:"",render:function(e){var s=t.info.tags||[],n=s.map((function(a){return e("Tag",{props:{color:t.colors[Math.floor(4*Math.random())]}},a)}));return e("div",["标签：",n,e("div",{class:"preview-img"},[e("img",{attrs:{src:a}})])])}})},openSource:function(t){window.open(t)},download:function(t){var a=this;i["a"].get("/blocks/".concat(t.name),{params:{materialsName:this.materialsName,blockPath:t.downloadPath}}).then((function(t){a.$Notice.success({title:"提示",desc:"下载区块位于".concat(t.downloadPath)})}))}}}),l=c,u=(e("c2e6"),e("2877")),h=Object(u["a"])(l,r,o,!1,null,null,null),f=h.exports,m={name:"Blocks",data:function(){return{materialsName:this.$route.params.materialsName,blocks:[],search:{materialsName:this.$route.params.materialsName,name:"",category:"全部",page:1,pageSize:24},spinShow:!1,total:0}},methods:{filterHandler:function(t){this.initParams(this.$route),this.search.category=t,this.getList()},searchHandler:function(){this.search.page=1,this.search.category="全部",this.getList()},getList:function(){var t=this;this.spinShow=!0,i["a"].get("/blocks",{params:this.search}).then((function(a){t.blocks=a.list,t.total=a.total})).finally((function(){t.spinShow=!1}))},initParams:function(t){this.materialsName=t.params.materialsName,this.search.name="",this.search.category="全部",this.search.materialsName=t.params.materialsName,this.search.page=1,this.total=0},pageChange:function(t){this.search.page=t,this.getList()}},components:{BlockItem:f},watch:{$route:function(t){this.initParams(t),this.getList()}},mounted:function(){this.getList()}},d=m,p=(e("ca1c"),Object(u["a"])(d,s,n,!1,null,"9f530ed0",null));a["default"]=p.exports},adf7:function(t,a,e){},c2e6:function(t,a,e){"use strict";var s=e("75c2"),n=e.n(s);n.a},ca1c:function(t,a,e){"use strict";var s=e("adf7"),n=e.n(s);n.a},d81d:function(t,a,e){"use strict";var s=e("23e7"),n=e("b727").map,i=e("1dde"),r=e("ae40"),o=i("map"),c=r("map");s({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-3246e508.44ddcd4e.js.map