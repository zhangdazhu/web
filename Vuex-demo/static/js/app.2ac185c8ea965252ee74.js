webpackJsonp([1],{"/45A":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),c=n("Dd8w"),u=n.n(c),o=n("NYxO"),s={computed:u()({products:function(){return this.$store.state.products}},Object(o.c)(["saleProducts","function2"])),methods:u()({},Object(o.b)({reducePrice:"reduce2"}))},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"one"}},[n("h1",[t._v("productlistone")]),t._v(" "),t._l(t.saleProducts,function(e){return n("ul",[n("li",[n("span",[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"price"},[t._v("$"+t._s(e.price))])])])}),t._v(" "),n("button",{on:{click:function(e){t.reducePrice(5)}}},[t._v("商品降价")])],2)},staticRenderFns:[]};var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"two"}},[n("h1",[t._v("productlisttwo")]),t._v(" "),t._l(t.saleProducts,function(e){return n("ul",[n("li",[n("span",[t._v(t._s(e.name))]),t._v(" "),n("span",[t._v("$"+t._s(e.price))])])])})],2)},staticRenderFns:[]};var p={name:"App",data:function(){return{}},components:{productListOne:n("VU/8")(s,i,!1,function(t){n("uJ2u")},"data-v-536675e6",null).exports,productListTwo:n("VU/8")({computed:{products:function(){return this.$store.state.products},saleProducts:function(){return this.$store.getters.saleProducts}}},a,!1,function(t){n("/45A")},"data-v-735c65d3",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("productListOne"),this._v(" "),e("productListTwo")],1)},staticRenderFns:[]};var l=n("VU/8")(p,d,!1,function(t){n("UiEV")},null,null).exports,f=n("YaEn"),v=n.n(f);r.a.use(o.a);var _=new o.a.Store({state:{products:[{name:"Herry",price:200},{name:"Bukcy",price:150},{name:"Elicy",price:100},{name:"joket",price:50}]},getters:{saleProducts:function(t){var e=t.products.map(function(t){return{name:"**"+t.name+"**",price:t.price/2}});return e}},mutations:{reduce1:function(t,e){t.products.forEach(function(t){t.price-=e})}},actions:{reduce2:function(t,e){setTimeout(function(){t.commit("reduce1",e)},2e3)}}});r.a.config.productionTip=!1,new r.a({store:_,el:"#app",router:v.a,components:{App:l},template:"<App/>"})},UiEV:function(t,e){},YaEn:function(t,e){},uJ2u:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2ac185c8ea965252ee74.js.map