(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(t,n,r){"use strict";var e=r(6),o=r(157)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),e(e.P+e.F*l,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(74)("find")},157:function(t,n,r){var e=r(27),o=r(73),l=r(28),c=r(19),f=r(158);t.exports=function(t,n){var r=1==t,d=2==t,v=3==t,_=4==t,h=6==t,y=5==t||h,w=n||f;return function(n,f,k){for(var m,R,x=l(n),A=o(x),$=e(f,k,3),C=c(A.length),J=0,N=r?w(n,C):d?w(n,0):void 0;C>J;J++)if((y||J in A)&&(R=$(m=A[J],J,x),t))if(r)N[J]=R;else if(R)switch(t){case 3:return!0;case 5:return m;case 6:return J;case 2:N.push(m)}else if(_)return!1;return h?-1:v||_?_:N}}},158:function(t,n,r){var e=r(159);t.exports=function(t,n){return new(e(t))(n)}},159:function(t,n,r){var e=r(9),o=r(99),l=r(2)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),e(n)&&null===(n=n[l])&&(n=void 0)),void 0===n?Array:n}},182:function(t,n,r){"use strict";r.r(n);r(156);var e={data:function(){return{id:this.$route.params.id}},computed:{post:function(){var t=this;return this.$store.state.posts.all.find((function(n){return n.id===t.id}))},relatepost:function(){var t=this;return this.$store.state.posts.all.filter((function(n){return n.id!==t.id}))}}},o=r(13),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("h1",[t._v("Dynamic Routes")]),r("br"),t._v("\n    เรียกแบบนี้ http://localhost:3000/posts/game "),r("br"),t._v("\n    "+t._s(t.id)+" - "+t._s(t.post.title)+" "),r("br"),t._v("\n    Relate Content - แบบที่ 1 - Refresh"),r("br"),t._v(" "),r("ul",t._l(t.relatepost,(function(n){return r("li",{key:n.id},[r("a",{attrs:{href:"/posts/"+n.id}},[t._v(t._s(n.title))])])})),0),t._v("\n    Relate Content - แบบที่ 2 - Non Refresh"),r("br"),t._v(" "),r("ul",t._l(t.relatepost,(function(n){return r("li",{key:n.id},[r("nuxt-link",{attrs:{to:"/posts/"+n.id}},[t._v(t._s(n.title))])],1)})),0),t._v("\n    Relate Content - แบบที่ 3 - Non Refresh"),r("br"),t._v(" "),r("ul",t._l(t.relatepost,(function(n){return r("li",{key:n.id},[r("nuxt-link",{attrs:{to:{name:"posts-id",params:{id:n.id}}}},[t._v(t._s(n.title))])],1)})),0)])}),[],!1,null,null,null);n.default=component.exports}}]);