(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],v=0,f=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/uss-septarian/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"3c61":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:t.$vuetify.theme.dark=!0}},[n("div",{attrs:{id:"stars"}}),n("div",{attrs:{id:"stars2"}}),n("div",{attrs:{id:"stars3"}}),n("div",{staticClass:"gradient"}),n("div",[n("div",[n("v-card",{staticClass:"nav"},[n("v-app-bar-nav-icon",{attrs:{fixed:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-navigation-drawer",{attrs:{temporary:"",dark:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-img",{attrs:{src:r("cf05")}}),n("v-list",{attrs:{nav:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("i",{staticClass:"fas fa-rocket"})]),n("v-list-item-title",[t._v("About the ship, recruitment, contact")])],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("i",{staticClass:"fas fa-hand-spock"})]),n("v-list-item-title",[t._v("History")])],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("i",{staticClass:"fas fa-user-astronaut"})]),n("v-list-item-title",[t._v("Crew")])],1)],1)],1)],1)],1),n("div",{staticClass:"hero"},[n("v-container",[n("h1",[t._v(t._s(t.hero.title.value))]),n("h2",{staticStyle:{position:"relative"}},[t._v(" test!!! "),n("a",{attrs:{href:"https://www.twitter.com/intent/tweet?url=https://www.bizstream.com&text=My%20Title+%7C+Bridgespan"}},[t._v("social link test")])])])],1)]),n("v-main",[n("v-container",[n("div",[t._v("Here is a section where we'll write about us content. Summary of what the Septarian is and what we do")])]),n("ul",t._l(t.crew,(function(e,r){return n("li",{key:r},[n("img",{attrs:{src:e.photo.value[0].url,alt:""}}),n("h2",[t._v(t._s(e.name.value))]),n("p",[t._v(t._s(e.rank.value))])])})),0),n("ul",t._l(t.events,(function(e,r){return n("li",{key:r},[n("img",{attrs:{src:e.main_image.value[0].url,alt:""}}),n("h2",[t._v(t._s(e.name.value))]),n("p",[t._v("Start Date: "+t._s(e.start_date.value))]),n("p",[t._v("End Date: "+t._s(e.end_date.value))]),n("p",[t._v(t._s(e.link.value))]),n("div",{domProps:{innerHTML:t._s(e.short_description.value)}})])})),0)],1)],1)},i=[],s={name:"App",data:function(){return{articles:[],hero:{title:""},events:[],crew:[],facts:[],drawer:!1}},mounted:function(){this.getEvents(),this.getHero(),this.getCrew()},methods:{getContentItems:function(t){return t},getEvents:function(){var t=this,e=r("2516"),n=new e.DeliveryClient({projectId:"1f1f4265-7223-0092-ffae-6eb20679c9cb"});n.itemsFeedAll().type("event").toPromise().then((function(e){t.events=t.getContentItems(e.items)}))},getHero:function(){var t=this,e=r("2516"),n=new e.DeliveryClient({projectId:"1f1f4265-7223-0092-ffae-6eb20679c9cb"});n.itemsFeedAll().type("hero").toPromise().then((function(e){t.hero=t.getContentItems(e.items[0])}))},getCrew:function(){var t=this,e=r("2516"),n=new e.DeliveryClient({projectId:"1f1f4265-7223-0092-ffae-6eb20679c9cb"});n.itemsFeedAll().type("crew").orderParameter("elements.display_order",e.SortOrder.desc).toPromise().then((function(e){console.log(e),t.crew=t.getContentItems(e.items)}))}}},o=s,l=r("2877"),c=r("6544"),u=r.n(c),v=r("7496"),f=r("5bc1"),d=r("b0af"),p=r("a523"),m=r("adda"),h=r("8860"),w=r("da13"),g=r("34c3"),_=r("5d23"),b=r("f6c4"),y=r("f774"),C=Object(l["a"])(o,a,i,!1,null,null,null),k=C.exports;u()(C,{VApp:v["a"],VAppBarNavIcon:f["a"],VCard:d["a"],VContainer:p["a"],VImg:m["a"],VList:h["a"],VListItem:w["a"],VListItemIcon:g["a"],VListItemTitle:_["a"],VMain:b["a"],VNavigationDrawer:y["a"]});var j=r("f309");n["a"].use(j["a"]);var I=new j["a"]({icons:{iconfont:"fa"}});n["a"].config.productionTip=!1,new n["a"]({vuetify:I,render:function(t){return t(k)}}).$mount("#app"),r("3c61")},cf05:function(t,e,r){t.exports=r.p+"img/logo.ea651ad1.png"}});
//# sourceMappingURL=app.8bd6be38.js.map