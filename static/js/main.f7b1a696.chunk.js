(this.webpackJsonpapipracticeapp=this.webpackJsonpapipracticeapp||[]).push([[0],{20:function(t,e,i){},21:function(t,e,i){},22:function(t,e){},29:function(t,e,i){"use strict";i.r(e);var n=i(0),c=i(9),s=i.n(c),A=(i(20),i(10)),r=i(11),a=i(15),d=i(14),p=(i(21),i.p+"static/media/pic2.ed64d2d0.png"),o=(i(22),i(1)),j=function(t){Object(a.a)(i,t);var e=Object(d.a)(i);function i(){var t;return Object(A.a)(this,i),(t=e.call(this)).findMakeup=function(){fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl",{headers:{Accept:"applcation/json"}}).then((function(t){return t.json()})).then((function(e){return t.setState({isLoaded:!0,items:e})})),console.log("Where are my results",t.state.items)},t.state={items:[],isLoaded:!1},t}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.findMakeup()}},{key:"render",value:function(){var t=this.state,e=t.isLoaded,i=t.items;return e?Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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"}),Object(o.jsx)("img",{src:p,className:"pics"}),Object(o.jsx)("div",{className:"list",children:i.map((function(t){return Object(o.jsxs)("div",{className:"group",children:[Object(o.jsx)("p",{className:"bold",children:t.name}),Object(o.jsx)("p",{children:Object(o.jsx)("img",{src:t.image_link})}),Object(o.jsxs)("p",{className:"price",children:["Price: $",t.price]}),Object(o.jsx)("button",{onClick:function(){return alert("Your item has been added to the cart")},children:" Add"}),Object(o.jsx)("p",{children:t.description})]},t.id)}))}),Object(o.jsx)("footer",{className:"name",children:"Shanica Denis \xa92021"})]}):Object(o.jsx)("div",{children:"Loading..."})}}]),i}(n.Component),u=i(13),l=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,30)).then((function(e){var i=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,A=e.getTTFB;i(t),n(t),c(t),s(t),A(t)}))};s.a.render(Object(o.jsx)(u.a,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),l()}},[[29,1,2]]]);
//# sourceMappingURL=main.f7b1a696.chunk.js.map