exports.ids=[7],exports.modules={41:function(e,r,t){"use strict";t.r(r);var o={data:()=>({name:"Supradit Roongsri",salary:2e3,ok:!0}),computed:{upperName(){return this.name.toUpperCase()},tax(){return 12*this.salary<1e5?0:1}},methods:{doSave(){console.log("Save Action!!",this.name,this.upperName)},doToggle(){this.ok=!this.ok}}},l=t(1),component=Object(l.a)(o,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",[e._ssrNode("<h1>Call computed &amp;&amp; method &amp;&amp; v-if &amp;&amp; v-show</h1> <br> <h3>"+e._ssrEscape("Hello, "+e._s(e.name))+"</h3> <br> <h3>"+e._ssrEscape("UpperName, "+e._s(e.upperName))+"</h3> <br> <h3>"+e._ssrEscape("Salary, "+e._s(e.salary))+"</h3> <br> <h3>"+e._ssrEscape("Salary*12, "+e._s(12*e.salary))+"</h3> <br> <h3>"+e._ssrEscape("Salary*12, "+e._s(e.tax))+"</h3> <br> "+(e.ok?"<h3>If True</h3>":"\x3c!----\x3e")+" <br> <h3"+e._ssrStyle(null,null,{display:e.ok?"":"none"})+'>Toggle</h3> <br>One Way -\n  <input type="text"'+e._ssrAttr("value",e.name)+'> <br>Two Way - <input type="text"'+e._ssrAttr("value",e.name)+"> Parameter Will Changed\n  <br>Method -\n  <button>SAVE</button> <br>Toggle -\n  <button>Toggle</button> <br>")])}),[],!1,null,null,"29a662f2");r.default=component.exports}};