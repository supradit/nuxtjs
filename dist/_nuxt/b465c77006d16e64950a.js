(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{151:function(t,e,n){var content=n(153);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("6ac8466f",content,!0,{sourceMap:!1})},152:function(t,e,n){"use strict";var o=n(151);n.n(o).a},153:function(t,e,n){(e=n(52)(!1)).push([t.i,".container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),t.exports=e},154:function(t,e,n){"use strict";n(152);var o=n(13),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[this._v("\n      nuxt-app\n    ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("\n      Nuxt.js project\n    ")]),this._v(" "),e("div",{staticClass:"links"},[e("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[this._v("Documentation")]),this._v(" "),e("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[this._v("GitHub")])])])])}],!1,null,null,null);e.a=component.exports},179:function(t,e,n){"use strict";n.r(e);n(154);var o={computed:{posts:function(){return this.$store.state.posts.all}}},l=n(13),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Get Data From State")]),n("br"),t._v(" "),n("ul",t._l(t.posts,(function(e){return n("li",{key:e.id},[t._v("\n            "+t._s(e.title)),n("br")])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);