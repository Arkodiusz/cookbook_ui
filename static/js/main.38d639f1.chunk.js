(this.webpackJsonpcookbook_ui=this.webpackJsonpcookbook_ui||[]).push([[0],{20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(14),a=n.n(i),s=(n(20),n(12)),o=n(5),j=n.n(o),l=n(6),u=n(4),b=n(10),d=n(3),h=n(7),p=n(1),O=function(){var e=Object(d.e)();return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)(h.b,{to:"/",children:Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(b.f,{size:35})})}),Object(p.jsx)("h1",{children:"COOKBOOK"}),"/"===e.pathname?Object(p.jsx)(h.b,{to:"/form",children:Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(b.a,{size:35})})}):Object(p.jsx)("div",{style:{width:35}})]})},x=function(){return Object(p.jsxs)("footer",{children:["2021 @ AJ\xa0\xa0\xa0\xa0\xa0\xa0",Object(p.jsx)(h.b,{to:"/about",children:"About"})]})},v=n.p+"static/media/default-img.b4a515a7.png",f=function(e){var t=e.recipes;return Object(p.jsx)("div",{className:"recipesContainer",children:t.map((function(e){return Object(p.jsx)(h.b,{to:"/recipe/".concat(e.id),children:Object(p.jsxs)("div",{className:"recipesThumbnail",children:[Object(p.jsx)("img",{src:(t=e.imageUrl,void 0===t?v.toString():""!==t&&t.includes("http")?t:v.toString()),alt:""}),Object(p.jsxs)("div",{className:"recipesThumbnailBar",children:[Object(p.jsx)("h3",{children:e.name}),Object(p.jsxs)("div",{className:"recipesThumbnailBarBottom",children:[Object(p.jsxs)("h6",{children:["PORTIONS :\xa0\xa0",0===e.portions?"?":e.portions]}),Object(p.jsxs)("h6",{children:["PREP.\xa0\xa0TIME :\xa0\xa0",""===e.time?"?":e.time]})]})]})]})},e.id);var t}))})},m=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"ABOUT"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)(h.b,{to:"/",children:[Object(p.jsx)("br",{}),"Go back"]})]})},g=n(24),k=function(e){var t=e.extractedRecipeId,n=Object(c.useState)([]),r=Object(u.a)(n,2),i=r[0],a=r[1],o=Object(c.useState)(!1),d=Object(u.a)(o,2),h=d[0],O=d[1],x=Object(c.useState)(0),v=Object(u.a)(x,2),f=v[0],m=v[1],k=Object(c.useState)(""),N=Object(u.a)(k,2),C=N[0],y=N[1],S=Object(c.useState)(""),P=Object(u.a)(S,2),w=P[0],T=P[1],E=Object(c.useState)(""),I=Object(u.a)(E,2),D=I[0],U=I[1],A=t;Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bcookbook.herokuapp.com/recipes/".concat(A,"/ingredients"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("fetched ingredients",n),a(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then()}),[A]);var R=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==C&&""!==w&&""!==D&&"unit"!==D){e.next=3;break}return alert("Please fill all inputs"),e.abrupt("return");case 3:return t={name:C,quantity:w,unit:D},e.next=6,fetch("https://bcookbook.herokuapp.com/recipes/".concat(A,"/ingredients"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 6:return n=e.sent,console.log("saved ingredient",t),L(),O(!1),e.next=12,n.json();case 12:c=e.sent,a([].concat(Object(s.a)(i),[c]));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,c,r,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==C&&""!==w&&""!==D&&"unit"!==D){e.next=3;break}return alert("Please fill all inputs"),e.abrupt("return");case 3:return n={name:C,quantity:w,unit:D},e.next=6,fetch("https://bcookbook.herokuapp.com/recipes/".concat(A,"/ingredients/").concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 6:return c=e.sent,e.next=9,c.json();case 9:r=e.sent,s=i.indexOf(i.find((function(e){return e.id===t}))),(o=i)[s]=r,a(o),console.log("edited ingredient =>",r),L(),m(0);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Are you sure you wish to delete this item?")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://bcookbook.herokuapp.com/recipes/".concat(A,"/ingredients/").concat(t),{method:"DELETE"});case 4:200===e.sent.status?a(i.filter((function(e){return e.id!==t}))):alert("Error Deleting This Ingredient"),console.log("deleted ingredient id =>",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function L(){y(""),T(""),U("")}return Object(p.jsxs)("div",{className:"ingredientsTableContainer",children:[Object(p.jsx)("h3",{children:"INGREDIENTS:"}),Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"NAME"}),Object(p.jsx)("th",{children:"QUANTITY"}),Object(p.jsx)("th",{children:"UNIT"}),Object(p.jsx)("th",{children:"OPTIONS"})]})}),Object(p.jsxs)("tbody",{children:[i.map((function(e){return f!==e.id?Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.quantity}),Object(p.jsx)("td",{children:e.unit.toLowerCase()}),Object(p.jsxs)("td",{className:"ingredientsSetupColumn",children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(b.e,{size:25,onClick:function(){O(!1),y(e.name),T(e.quantity),U(e.unit),m(e.id)}})}),Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(b.d,{size:25,onClick:function(){return z(e.id)}})})]})]},e.id):Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",placeholder:"name",value:C,onChange:function(e){return y(e.target.value)}})}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"number",placeholder:"quantity",value:w,onChange:function(e){return T(e.target.value)}})}),Object(p.jsx)("td",{children:Object(p.jsxs)("select",{name:"newUnit",value:D,onChange:function(e){return U(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"unit"}),Object(p.jsx)("option",{value:"G",children:"g"}),Object(p.jsx)("option",{value:"DAG",children:"dag"}),Object(p.jsx)("option",{value:"KG",children:"kg"}),Object(p.jsx)("option",{value:"ML",children:"ml"}),Object(p.jsx)("option",{value:"L",children:"l"}),Object(p.jsx)("option",{value:"TEASPOON",children:"teaspoon"}),Object(p.jsx)("option",{value:"SPOON",children:"spoon"}),Object(p.jsx)("option",{value:"PINCH",children:"pinch"}),Object(p.jsx)("option",{value:"HANDFUL",children:"handful"}),Object(p.jsx)("option",{value:"PIECE",children:"piece"})]})}),Object(p.jsxs)("td",{className:"ingredientsSetupColumn",children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(b.c,{size:25,onClick:function(){return B(e.id)}})}),Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(b.b,{size:25,onClick:function(){m(0),L()}})})]})]},e.id)})),h?Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",placeholder:"name",value:C,onChange:function(e){return y(e.target.value)}})}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"number",placeholder:"quantity",value:w,onChange:function(e){return T(e.target.value)}})}),Object(p.jsx)("td",{children:Object(p.jsxs)("select",{value:D,onChange:function(e){return U(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"unit"}),Object(p.jsx)("option",{value:"G",children:"g"}),Object(p.jsx)("option",{value:"DAG",children:"dag"}),Object(p.jsx)("option",{value:"KG",children:"kg"}),Object(p.jsx)("option",{value:"ML",children:"ml"}),Object(p.jsx)("option",{value:"L",children:"l"}),Object(p.jsx)("option",{value:"TEASPOON",children:"teaspoon"}),Object(p.jsx)("option",{value:"SPOON",children:"spoon"}),Object(p.jsx)("option",{value:"PINCH",children:"pinch"}),Object(p.jsx)("option",{value:"HANDFUL",children:"handful"}),Object(p.jsx)("option",{value:"PIECE",children:"piece"})]})}),Object(p.jsxs)("td",{className:"ingredientsSetupColumn",children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(b.c,{size:25,onClick:function(){return R()}})}),Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(b.b,{size:25,onClick:function(){L(),O(!1)}})})]})]}):Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{}),Object(p.jsx)("td",{}),Object(p.jsx)("td",{}),Object(p.jsx)("td",{className:"ingredientsSetupColumn",children:Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(g.a,{size:25,onClick:function(){m(0),L(),O(!0)}})})})]})]})]})]})},N=function(e){var t=e.onDelete,n=e.onUpdate,r=Object(c.useState)([]),i=Object(u.a)(r,2),a=i[0],s=i[1],o=Object(c.useState)(!1),h=Object(u.a)(o,2),O=h[0],x=h[1],f=Object(c.useState)(""),m=Object(u.a)(f,2),g=m[0],N=m[1],C=Object(c.useState)(""),y=Object(u.a)(C,2),S=y[0],P=y[1],w=Object(c.useState)(""),T=Object(u.a)(w,2),E=T[0],I=T[1],D=Object(c.useState)(""),U=Object(u.a)(D,2),A=U[0],R=U[1],B=Object(c.useState)(""),z=Object(u.a)(B,2),L=z[0],F=z[1],G=Object(d.f)(),M=Object(d.e)().pathname.split("/").pop();Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bcookbook.herokuapp.com/recipes/".concat(M));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("fetched recipe =>",n),s(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then()}),[M]);var J,q,H=function(){var e=Object(l.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Are you sure you wish to delete this item?")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://bcookbook.herokuapp.com/recipes/".concat(n),{method:"DELETE"});case 4:if(200===e.sent.status){e.next=8;break}return alert("Error Deleting This Recipe"),e.abrupt("return");case 8:return e.next=10,t(n);case 10:G("/",{replace:!0}),console.log("deleted recipe id =>",n);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(j.a.mark((function e(){var t,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==g&&""!==S&&""!==E&&""!==A&&""!==L){e.next=3;break}return alert("Please fill all inputs"),e.abrupt("return");case 3:if(g!==a.name||S!==a.imageUrl||E!==a.portions||A!==a.time||L!==a.preparation){e.next=6;break}return alert("Notching changed"),e.abrupt("return");case 6:return t={id:M,name:g,imageUrl:S,portions:E,time:A,preparation:L},e.next=9,fetch("https://bcookbook.herokuapp.com/recipes",{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 9:return c=e.sent,e.next=12,c.json();case 12:return r=e.sent,s(r),console.log("edited recipe =>",r),x(!1),_(),e.next=19,n(r);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function _(){N(""),P(""),I(""),R(""),F("")}return Object(p.jsxs)("div",{className:"recipe",children:[Object(p.jsxs)("div",{className:"recipePictureContainer",children:[Object(p.jsx)("img",{src:(q=a.imageUrl,void 0===q?v.toString():""!==q&&q.includes("http")?q:v.toString()),alt:""}),Object(p.jsxs)("div",{className:"recipePictureContainerTopBar",children:[O?Object(p.jsxs)("div",{className:"recipePictureContainerTopBarEditBox",children:[Object(p.jsx)("div",{className:"icon",style:{color:"white"},children:Object(p.jsx)(b.c,{size:30,onClick:function(){return K()}})}),Object(p.jsx)("div",{className:"icon",style:{color:"white"},children:Object(p.jsx)(b.b,{size:30,onClick:function(){x(!1),_()}})})]}):Object(p.jsx)("div",{className:"recipePictureContainerTopBarEditBox",children:Object(p.jsx)("div",{className:"icon",style:{color:"white"},children:Object(p.jsx)(b.e,{size:30,onClick:function(){N(a.name),P(a.imageUrl),I(a.portions),R(a.time),F(a.preparation),x(!0)}})})}),O?Object(p.jsx)("input",{type:"text",placeholder:"name",value:g,onChange:function(e){return N(e.target.value)}}):Object(p.jsx)("h2",{children:a.name}),Object(p.jsx)("div",{className:"recipePictureContainerTopBarDeleteBox",children:Object(p.jsx)("div",{className:"icon",style:{color:"white"},children:Object(p.jsx)(b.d,{size:30,onClick:function(){return H(a.id)}})})})]}),O?Object(p.jsx)("input",{id:"recipeImgUrlInput",type:"text",placeholder:"imageUrl",value:S,onChange:function(e){return P(e.target.value)}}):Object(p.jsx)(p.Fragment,{}),O?Object(p.jsxs)("span",{children:[Object(p.jsxs)("div",{className:"recipePictureContainerEditBox",children:[Object(p.jsx)("h5",{children:"PORTIONS :\u2002"}),Object(p.jsxs)("select",{value:E,onChange:function(e){return I(e.target.value)},children:[Object(p.jsx)("option",{value:"0",children:"?"}),Object(p.jsx)("option",{value:"1",children:"1"}),Object(p.jsx)("option",{value:"2",children:"2"}),Object(p.jsx)("option",{value:"3",children:"3"}),Object(p.jsx)("option",{value:"4",children:"4"}),Object(p.jsx)("option",{value:"5",children:"5"}),Object(p.jsx)("option",{value:"6",children:"6"}),Object(p.jsx)("option",{value:"7",children:"7"}),Object(p.jsx)("option",{value:"8",children:"8"}),Object(p.jsx)("option",{value:"9",children:"9"}),Object(p.jsx)("option",{value:"10",children:"10"}),Object(p.jsx)("option",{value:"11",children:"> 10"})]})]}),Object(p.jsxs)("div",{className:"recipePictureContainerEditBox",children:[Object(p.jsx)("h5",{children:"PREP.\u2002TIME :\u2002"}),Object(p.jsxs)("select",{value:A,onChange:function(e){return R(e.target.value)},children:[Object(p.jsx)("option",{value:"?",children:"?"}),Object(p.jsx)("option",{value:"5 min",children:"5 min"}),Object(p.jsx)("option",{value:"10 min",children:"10 min"}),Object(p.jsx)("option",{value:"15 min",children:"15 min"}),Object(p.jsx)("option",{value:"30 min",children:"30 min"}),Object(p.jsx)("option",{value:"45 min",children:"45 min"}),Object(p.jsx)("option",{value:"1 h",children:"1 h"}),Object(p.jsx)("option",{value:"1,5 h",children:"1,5 h"}),Object(p.jsx)("option",{value:"2 h",children:"2 h"}),Object(p.jsx)("option",{value:"3 h",children:"3 h"}),Object(p.jsx)("option",{value:"> 4 h",children:"> 4 h"})]})]})]}):Object(p.jsxs)("span",{children:[Object(p.jsxs)("h5",{children:["PORTIONS :\u2002",(J=a.portions,0===J?"?":J>10?"> 10":J)]}),Object(p.jsxs)("h5",{children:["PREP.\u2002TIME :\u2002",function(e){return""===e?"?":e>10?"> 4 h":e}(a.time)]})]})]}),O?Object(p.jsx)(p.Fragment,{}):Object(p.jsx)(k,{extractedRecipeId:M}),O?Object(p.jsxs)("div",{className:"prepDescriptionInput",children:[Object(p.jsx)("h3",{children:"PREPARATION:"}),Object(p.jsx)("textarea",{className:"prepDescriptionTextarea",placeholder:"preparation description",value:L,onChange:function(e){return F(e.target.value)}})]}):Object(p.jsxs)("div",{className:"prepDescription",children:[Object(p.jsx)("h3",{children:"PREPARATION:"}),"\u2003",a.preparation]}),Object(p.jsx)("div",{})]})},C=function(e){var t=e.onSubmit,n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],a=r[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),O=o[0],x=o[1],v=Object(c.useState)(""),f=Object(u.a)(v,2),m=f[0],g=f[1],k=Object(c.useState)(""),N=Object(u.a)(k,2),C=N[0],y=N[1],S=Object(c.useState)(""),P=Object(u.a)(S,2),w=P[0],T=P[1],E=Object(d.f)(),I=function(){var e=Object(l.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==i){e.next=3;break}return alert("Please fill at least name input"),e.abrupt("return");case 3:return n={name:i,imageUrl:O,portions:""===m?"0":m,time:C,preparation:w},e.next=6,t(n);case 6:E("/",{replace:!0});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"formContainer",children:[Object(p.jsx)("h3",{children:"RECIPE ADD FORM"}),Object(p.jsxs)("div",{className:"formInput",children:[Object(p.jsx)("label",{children:"Name:"}),Object(p.jsx)("input",{type:"text",placeholder:"name",value:i,onChange:function(e){return a(e.target.value)}})]}),Object(p.jsxs)("div",{className:"formInput",children:[Object(p.jsx)("label",{children:"Image URL:"}),Object(p.jsx)("input",{type:"text",placeholder:"imageUrl",value:O,onChange:function(e){return x(e.target.value)}})]}),Object(p.jsxs)("div",{className:"formInput",children:[Object(p.jsx)("label",{children:"Portions:"}),Object(p.jsxs)("select",{value:m,onChange:function(e){return g(e.target.value)},children:[Object(p.jsx)("option",{value:"0",children:"?"}),Object(p.jsx)("option",{value:"1",children:"1"}),Object(p.jsx)("option",{value:"2",children:"2"}),Object(p.jsx)("option",{value:"3",children:"3"}),Object(p.jsx)("option",{value:"4",children:"4"}),Object(p.jsx)("option",{value:"5",children:"5"}),Object(p.jsx)("option",{value:"6",children:"6"}),Object(p.jsx)("option",{value:"7",children:"7"}),Object(p.jsx)("option",{value:"8",children:"8"}),Object(p.jsx)("option",{value:"9",children:"9"}),Object(p.jsx)("option",{value:"10",children:"10"}),Object(p.jsx)("option",{value:"11",children:"> 10"})]})]}),Object(p.jsxs)("div",{className:"formInput",children:[Object(p.jsx)("label",{children:"Preparation time:"}),Object(p.jsxs)("select",{value:C,onChange:function(e){return y(e.target.value)},children:[Object(p.jsx)("option",{value:"?",children:"?"}),Object(p.jsx)("option",{value:"5 min",children:"5 min"}),Object(p.jsx)("option",{value:"10 min",children:"10 min"}),Object(p.jsx)("option",{value:"15 min",children:"15 min"}),Object(p.jsx)("option",{value:"30 min",children:"30 min"}),Object(p.jsx)("option",{value:"45 min",children:"45 min"}),Object(p.jsx)("option",{value:"1 h",children:"1 h"}),Object(p.jsx)("option",{value:"1,5 h",children:"1,5 h"}),Object(p.jsx)("option",{value:"2 h",children:"2 h"}),Object(p.jsx)("option",{value:"3 h",children:"3 h"}),Object(p.jsx)("option",{value:"> 4 h",children:"> 4 h"})]})]}),Object(p.jsxs)("div",{id:"formDescription",children:[Object(p.jsx)("label",{children:"Preparation description:"}),Object(p.jsx)("textarea",{className:"prepDescriptionTextarea",placeholder:"preparation description",value:w,onChange:function(e){return T(e.target.value)}})]}),Object(p.jsxs)("div",{id:"formOptions",children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(b.c,{size:35,onClick:function(){return I()}})}),Object(p.jsx)(h.b,{to:"/",children:Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(b.b,{size:35})})})]})]})};var y=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bcookbook.herokuapp.com/recipes");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("fetched recipes =>",n),r(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then()}),[]);var i=function(){var e=Object(l.a)(j.a.mark((function e(t){var c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bcookbook.herokuapp.com/recipes",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,console.log("saved recipe=>",t),e.next=6,c.json();case 6:i=e.sent,r([].concat(Object(s.a)(n),[i]));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(n.filter((function(e){return e.id!==t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(j.a.mark((function e(t){var c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n.indexOf(n.find((function(e){return e.id===t.id}))),(i=n)[c]=t,r(i),console.log("recipes updated");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(h.a,{hashType:"slash",children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(O,{}),Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{path:"/",element:Object(p.jsx)(f,{recipes:n})}),Object(p.jsx)(d.a,{path:"/recipe/:id",element:Object(p.jsx)(N,{onDelete:function(e){return a(e)},onUpdate:function(e){return o(e)}})}),Object(p.jsx)(d.a,{path:"/form",element:Object(p.jsx)(C,{onSubmit:function(e){return i(e)}})}),Object(p.jsx)(d.a,{path:"/about",element:Object(p.jsx)(m,{})})]}),Object(p.jsx)(x,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),S()}},[[23,1,2]]]);
//# sourceMappingURL=main.38d639f1.chunk.js.map