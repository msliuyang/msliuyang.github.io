(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"3ebb":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-layout",{attrs:{view:"hHh lpR fFf"}},[t("q-page-container",[t("q-btn",{directives:[{name:"permission",rawName:"v-permission",value:["function_edit"],expression:"['function_edit']"}],attrs:{small:"",round:"",push:"",glossy:"",dense:"",icon:"edit",color:"primary"},on:{click:function(n){return e.editFunction(e.props.value)}}}),t("q-btn",{directives:[{name:"permission",rawName:"v-permission",value:["function_del"],expression:"['function_del']"}],attrs:{small:"",round:"",push:"",glossy:"",dense:"",icon:"delete",color:"red"},on:{click:function(n){return e.delFunction(e.props.value)}}})],1)],1)},o=[],s=(t("e6cf"),{data(){return{}},created(){this.handleLogin()},methods:{async handleLogin(){localStorage.setItem("permission",JSON.stringify(["function_edit","function_add"])),this.$router.push({path:"/index"})}}}),r=s,a=t("2877"),c=t("4d5a"),u=t("09e3"),l=t("9c40"),d=t("eebe"),p=t.n(d),f=Object(a["a"])(r,i,o,!1,null,null,null);n["default"]=f.exports;p()(f,"components",{QLayout:c["a"],QPageContainer:u["a"],QBtn:l["a"]})}}]);