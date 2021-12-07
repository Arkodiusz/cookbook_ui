(this.webpackJsonpcookbook_ui=this.webpackJsonpcookbook_ui||[]).push([[0],{26:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(21),a=n.n(i),s=(n(26),n(15)),o=n(3),j=n.n(o),l=n(8),u=n(5),d=n(12),b=n(10),h=n(1),p=function(){return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)("div",{style:{width:80,display:"flex",justifyContent:"space-between"},children:[Object(h.jsx)(b.b,{to:"/",children:Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(d.f,{size:35})})}),Object(h.jsx)(b.b,{to:"/about",children:Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(d.g,{size:35})})})]}),Object(h.jsx)("h1",{children:"COOKBOOK"}),Object(h.jsx)("div",{style:{width:80}})]})},O=function(){return Object(h.jsxs)("footer",{children:["2021 @ ",Object(h.jsx)("a",{href:"https://arkodiusz.github.io/",children:"arkodiusz.github.io"})]})},x=n.p+"static/media/default-img.b0520a1e.svg",f=n(14),m=function(e){var t=e.recipes;return null===t?Object(h.jsxs)("div",{className:"loaderContainer",children:[Object(h.jsx)("div",{className:"spinner",children:Object(h.jsx)(f.PacmanLoader,{size:25})}),Object(h.jsx)("h3",{children:"FETCHING DATA..."}),Object(h.jsx)("h4",{children:"please wait while backend is waking up..."})]}):Object(h.jsxs)("div",{className:"recipesContainer",children:[t.map((function(e){return Object(h.jsx)(b.b,{to:"/recipe/".concat(e.id),children:Object(h.jsxs)("div",{className:"recipesThumbnail",children:[Object(h.jsx)("img",{src:(n=e.imageUrl,void 0===n?x.toString():""!==n&&n.includes("http")?n:x.toString()),alt:""}),Object(h.jsxs)("div",{className:"recipesThumbnailBar",children:[Object(h.jsx)("h3",{children:e.name}),Object(h.jsxs)("div",{className:"recipesThumbnailBarBottom",children:[Object(h.jsxs)("h6",{children:["PORTIONS :\xa0\xa0",(t=e.portions,0===t?"?":t>10?"> 10":t)]}),Object(h.jsxs)("h6",{children:["PREP.\xa0\xa0TIME :\xa0\xa0",""===e.time?"?":e.time]})]})]}),e.isDefault?Object(h.jsx)("div",{id:"defaultWatermark",style:{top:-2},children:"DEFAULT RECIPE"}):Object(h.jsx)(h.Fragment,{})]})},e.id);var t,n})),Object(h.jsx)(b.b,{to:"/form",children:Object(h.jsx)("div",{className:"recipesThumbnailAdd",children:Object(h.jsx)(d.a,{id:"addIcon",size:50})})})]})},v=n(4),g=function(){return Object(h.jsxs)("div",{id:"about",children:[Object(h.jsx)("h3",{children:"Welcome to my CookBook App!"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),"This UI is made with React and it consumes REST API of my Spring project deployed on Heroku.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Fell free to add some recipes and test my app :)",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"I will be grateful for comments and reported issues on my GitHub!",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"https://github.com/Arkodiusz/cookbook_ui",children:"Frontend repository"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"https://github.com/Arkodiusz/cookbook",children:"Backend repository"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"logo & default image vector created by freepik - ",Object(h.jsx)("a",{href:"https://www.freepik.com",children:"www.freepik.com"})]})]})},k=function(e){var t=e.value,n=e.onChange;function c(e){var t=e.replace(",",".");parseFloat(t)<0&&(t=""),n(t)}return Object(h.jsx)("input",{type:"number",placeholder:"quantity",value:t,onKeyDown:function(e){return function(e){["e","+","-"].includes(e.key)&&e.preventDefault()}(e)},onChange:function(e){return c(e.target.value)}})},N=function(e){var t=e.value,n=e.onChange;return Object(h.jsxs)("select",{required:!0,value:t,onChange:function(e){return n(e.target.value)},children:[Object(h.jsx)("option",{value:"",hidden:!0,children:"unit"}),Object(h.jsx)("option",{value:"G",children:"g"}),Object(h.jsx)("option",{value:"DAG",children:"dag"}),Object(h.jsx)("option",{value:"KG",children:"kg"}),Object(h.jsx)("option",{value:"ML",children:"ml"}),Object(h.jsx)("option",{value:"L",children:"l"}),Object(h.jsx)("option",{value:"TEASPOON",children:"teaspoon"}),Object(h.jsx)("option",{value:"TABLESPOON",children:"tablespoon"}),Object(h.jsx)("option",{value:"PINCH",children:"pinch"}),Object(h.jsx)("option",{value:"HANDFUL",children:"handful"}),Object(h.jsx)("option",{value:"PIECE",children:"piece"}),Object(h.jsx)("option",{value:"CUP",children:"cup"})]})},C=function(e){var t=e.onEdit,n=e.onDelete;return console.log(t),Object(h.jsxs)("div",{className:"ingredientsSetupColumn",children:[!1!==t?Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(d.e,{size:25,onClick:t})}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(d.d,{size:25,onClick:n})})]})},y=function(e){var t=e.value,n=e.onChange;return Object(h.jsx)("input",{maxLength:"32",type:"text",placeholder:"name",value:t,onChange:function(e){return n(e.target.value)}})},w=function(e){var t=e.onAccept,n=e.onCancel;return Object(h.jsxs)("div",{className:"ingredientsSetupColumn",children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(d.c,{size:25,onClick:t})}),Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(d.b,{size:25,onClick:n})})]})},E=n(58),S=function(e){var t=e.onAdd;return Object(h.jsx)("div",{className:"ingredientsSetupColumn",children:Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(E.a,{size:25,onClick:t})})})},T=function(e){var t=e.extractedRecipeId,n=e.recipeIsDefault,r=Object(c.useState)(null),i=Object(u.a)(r,2),a=i[0],o=i[1],d=Object(c.useState)(!1),b=Object(u.a)(d,2),p=b[0],O=b[1],x=Object(c.useState)(0),m=Object(u.a)(x,2),v=m[0],g=m[1],E=Object(c.useState)(""),T=Object(u.a)(E,2),P=T[0],D=T[1],I=Object(c.useState)(""),A=Object(u.a)(I,2),U=A[0],z=A[1],R=Object(c.useState)(""),L=Object(u.a)(R,2),B=L[0],M=L[1],F=t;Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bcookbook.herokuapp.com/recipes/".concat(F,"/ingredients"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("fetched ingredients",n),o(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then()}),[F]);var Y=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t=H()).name){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("https://bcookbook.herokuapp.com/recipes/".concat(F,"/ingredients"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 5:return n=e.sent,console.log("saved ingredient",t),J(),O(!1),e.next=11,n.json();case 11:c=e.sent,o([].concat(Object(s.a)(a),[c]));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,c,r,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(n=H()).name){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("https://bcookbook.herokuapp.com/recipes/".concat(F,"/ingredients/").concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 5:return c=e.sent,e.next=8,c.json();case 8:r=e.sent,i=a.indexOf(a.find((function(e){return e.id===t}))),(s=a)[i]=r,o(s),console.log("edited ingredient =>",r),J(),g(0);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return alert("You can't delete ingredients of default recipe"),e.abrupt("return");case 3:if(window.confirm("Are you sure you wish to delete this item?")){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,fetch("https://bcookbook.herokuapp.com/recipes/".concat(F,"/ingredients/").concat(t),{method:"DELETE"});case 7:200===e.sent.status?o(a.filter((function(e){return e.id!==t}))):alert("Error Deleting This Ingredient"),console.log("deleted ingredient id =>",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function H(){return""===P||""===U||""===B||"unit"===B?(alert("Please fill all inputs"),{name:""}):parseFloat(U)>1e3?(alert("Quantity max value is 1000"),{name:""}):parseFloat(U)<=0?(alert("Quantity min value must be grater than 0"),{name:""}):{name:P,quantity:U,unit:B}}function J(){D(""),z(""),M("")}return null===a?Object(h.jsx)("div",{className:"loaderContainer",children:Object(h.jsx)("div",{className:"spinner",children:Object(h.jsx)(f.PacmanLoader,{size:25})})}):Object(h.jsxs)("div",{className:"ingredientsTableContainer",children:[Object(h.jsx)("h3",{children:"INGREDIENTS:"}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"NAME"}),Object(h.jsx)("th",{children:"QUANTITY"}),Object(h.jsx)("th",{children:"UNIT"}),Object(h.jsx)("th",{children:"OPTIONS"})]})}),Object(h.jsxs)("tbody",{children:[a.map((function(e){return v!==e.id?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.quantity}),Object(h.jsx)("td",{children:e.unit.toLowerCase()}),Object(h.jsx)("td",{children:Object(h.jsx)(C,{onEdit:function(){return function(e){n?alert("You can't edit ingredients of default recipe"):(O(!1),D(e.name),z(e.quantity),M(e.unit),g(e.id))}(e)},onDelete:function(){return G(e.id)}})})]},e.id):Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)(y,{value:P,onChange:D})}),Object(h.jsx)("td",{children:Object(h.jsx)(k,{value:U,onChange:z})}),Object(h.jsx)("td",{children:Object(h.jsx)(N,{value:B,onChange:M})}),Object(h.jsx)("td",{children:Object(h.jsx)(w,{onAccept:function(){return q(e.id)},onCancel:function(){g(0),J()}})})]},e.id)})),p?Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)(y,{value:P,onChange:D})}),Object(h.jsx)("td",{children:Object(h.jsx)(k,{value:U,onChange:z})}),Object(h.jsx)("td",{children:Object(h.jsx)(N,{value:B,onChange:M})}),Object(h.jsx)("td",{children:Object(h.jsx)(w,{onAccept:function(){return Y()},onCancel:function(){O(!1),J()}})})]}):Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{children:Object(h.jsx)(S,{onAdd:function(){n?alert("You can't add ingredients to default recipe"):(g(0),J(),O(!0))}})})]})]})]})]})},P=function(e){var t=e.description,n=e.editMode,r=e.onEnableEditMode,i=e.onDisableEditMode,a=e.onUpdate,s=Object(c.useState)(""),o=Object(u.a)(s,2),b=o[0],p=o[1];if(!n)return Object(h.jsxs)("div",{className:"prepDescription",children:[Object(h.jsxs)("div",{id:"prepDescriptionHeader",children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(d.e,{size:30,onClick:function(){r(),p(t)}})}),Object(h.jsx)("h3",{children:"PREPARATION:"}),Object(h.jsx)("div",{style:{width:30}})]}),"\u2003",t]});var O=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(b);case 2:p("");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"prepDescriptionInput",children:[Object(h.jsxs)("div",{id:"prepDescriptionHeader",children:[Object(h.jsxs)("div",{id:"descOptions",children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(d.c,{size:30,onClick:function(){return O()}})}),Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(d.b,{size:30,onClick:function(){i(),p("")}})})]}),Object(h.jsx)("h3",{children:"PREPARATION:"}),Object(h.jsx)("div",{style:{width:80}})]}),Object(h.jsx)("textarea",{maxLength:"4000",className:"prepDescriptionTextarea",placeholder:"preparation description",value:b,onChange:function(e){return p(e.target.value)}})]})},D=function(e){var t=e.value,n=e.onChange;return Object(h.jsxs)("select",{value:t,onChange:function(e){return n(e.target.value)},children:[Object(h.jsx)("option",{value:"?",children:"?"}),Object(h.jsx)("option",{value:"5 min",children:"5 min"}),Object(h.jsx)("option",{value:"10 min",children:"10 min"}),Object(h.jsx)("option",{value:"15 min",children:"15 min"}),Object(h.jsx)("option",{value:"30 min",children:"30 min"}),Object(h.jsx)("option",{value:"45 min",children:"45 min"}),Object(h.jsx)("option",{value:"1 h",children:"1 h"}),Object(h.jsx)("option",{value:"1,5 h",children:"1,5 h"}),Object(h.jsx)("option",{value:"2 h",children:"2 h"}),Object(h.jsx)("option",{value:"3 h",children:"3 h"}),Object(h.jsx)("option",{value:"> 4 h",children:"> 4 h"})]})},I=function(e){var t=e.value,n=e.onChange;return Object(h.jsxs)("select",{value:t,onChange:function(e){return n(e.target.value)},children:[Object(h.jsx)("option",{value:"0",children:"?"}),Object(h.jsx)("option",{value:"1",children:"1"}),Object(h.jsx)("option",{value:"2",children:"2"}),Object(h.jsx)("option",{value:"3",children:"3"}),Object(h.jsx)("option",{value:"4",children:"4"}),Object(h.jsx)("option",{value:"5",children:"5"}),Object(h.jsx)("option",{value:"6",children:"6"}),Object(h.jsx)("option",{value:"7",children:"7"}),Object(h.jsx)("option",{value:"8",children:"8"}),Object(h.jsx)("option",{value:"9",children:"9"}),Object(h.jsx)("option",{value:"10",children:"10"}),Object(h.jsx)("option",{value:"11",children:"> 10"})]})},A=function(e){var t,n=e.recipe,r=e.editMode,i=e.onEnableEditMode,a=e.onDisableEditMode,s=e.onUpdate,o=e.onDelete,b=Object(c.useState)(""),p=Object(u.a)(b,2),O=p[0],f=p[1],m=Object(c.useState)(""),v=Object(u.a)(m,2),g=v[0],k=v[1],N=Object(c.useState)(""),C=Object(u.a)(N,2),y=C[0],w=C[1],E=Object(c.useState)(""),S=Object(u.a)(E,2),T=S[0],P=S[1],A=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==O){e.next=3;break}return alert("Name input can't be empty"),e.abrupt("return");case 3:if(O!==n.name||g!==n.imageUrl||y!==n.portions||T!==n.time){e.next=6;break}return alert("Notching changed"),e.abrupt("return");case 6:return t={name:O,imageUrl:g,portions:""===y?"0":y,time:""===T?"?":T},e.next=9,s(t);case 9:z();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function U(e){return void 0===e?x.toString():""!==e&&e.includes("http")?e:x.toString()}function z(){f(""),k(""),w(""),P("")}return r?Object(h.jsxs)("div",{className:"recipePictureContainer",children:[Object(h.jsx)("img",{src:U(g),alt:""}),Object(h.jsxs)("div",{className:"recipePictureContainerTopBar",children:[Object(h.jsxs)("div",{className:"recipePictureContainerTopBarEditBox",children:[Object(h.jsx)("div",{className:"icon",style:{color:"white"},children:Object(h.jsx)(d.c,{size:30,onClick:function(){return A()}})}),Object(h.jsx)("div",{className:"icon",style:{color:"white"},children:Object(h.jsx)(d.b,{size:30,onClick:function(){a(),z()}})})]}),Object(h.jsx)("input",{maxLength:"32",type:"text",placeholder:"name",value:O,onChange:function(e){return f(e.target.value)}}),Object(h.jsx)("div",{className:"recipePictureContainerTopBarDeleteBox",children:Object(h.jsx)("div",{className:"icon",style:{color:"white"},children:Object(h.jsx)(d.d,{size:30,onClick:function(){return o(n.id)}})})})]}),Object(h.jsx)("input",{maxLength:"255",id:"recipeImgUrlInput",type:"text",placeholder:"imageUrl",value:g,onChange:function(e){return k(e.target.value)}}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("div",{className:"recipePictureContainerEditBox",children:[Object(h.jsx)("h5",{children:"PORTIONS :\u2002"}),Object(h.jsx)(I,{value:y,onChange:w})]}),Object(h.jsxs)("div",{className:"recipePictureContainerEditBox",children:[Object(h.jsx)("h5",{children:"PREP.\u2002TIME :\u2002"}),Object(h.jsx)(D,{value:T,onChange:P})]})]})]}):Object(h.jsxs)("div",{className:"recipePictureContainer",children:[Object(h.jsx)("img",{src:U(n.imageUrl),alt:""}),Object(h.jsxs)("div",{className:"recipePictureContainerTopBar",children:[Object(h.jsx)("div",{className:"recipePictureContainerTopBarEditBox",children:Object(h.jsx)("div",{className:"icon",style:{color:"white"},children:Object(h.jsx)(d.e,{size:30,onClick:function(){i(),f(n.name),k(n.imageUrl),w(n.portions),P(n.time)}})})}),Object(h.jsx)("h2",{children:n.name}),Object(h.jsx)("div",{className:"recipePictureContainerTopBarDeleteBox",children:Object(h.jsx)("div",{className:"icon",style:{color:"white"},children:Object(h.jsx)(d.d,{size:30,onClick:function(){return o()}})})})]}),n.isDefault?Object(h.jsx)("div",{id:"defaultWatermark",children:"DEFAULT RECIPE"}):Object(h.jsx)(h.Fragment,{}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("h5",{children:["PORTIONS :\u2002",(t=n.portions,0===t?"?":t>10?"> 10":t)]}),Object(h.jsxs)("h5",{children:["PREP.\u2002TIME :\u2002",function(e){return""===e?"?":e>10?"> 4 h":e}(n.time)]})]})]})},U=function(e){var t=e.onDelete,n=e.onUpdate,r=Object(c.useState)(null),i=Object(u.a)(r,2),a=i[0],s=i[1],o=Object(c.useState)(!1),d=Object(u.a)(o,2),b=d[0],p=d[1],O=Object(c.useState)(!1),x=Object(u.a)(O,2),m=x[0],g=x[1],k=Object(v.f)(),N=Object(v.e)().pathname.split("/").pop();Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bcookbook.herokuapp.com/recipes/".concat(N));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("fetched recipe =>",n),s(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then()}),[N]);var C=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isDefault){e.next=3;break}return alert("You can't delete default recipes"),e.abrupt("return");case 3:if(window.confirm("Are you sure you wish to delete this item?")){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,fetch("https://bcookbook.herokuapp.com/recipes/".concat(N),{method:"DELETE"});case 7:if(200===e.sent.status){e.next=11;break}return alert("Error Deleting This Recipe"),e.abrupt("return");case 11:return e.next=13,t(N);case 13:k("/",{replace:!0}),console.log("deleted recipe id =>",N);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bcookbook.herokuapp.com/recipes",{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,s(r),console.log("edited recipe =>",r),e.next=10,n(r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:a.id,name:t.name,imageUrl:t.imageUrl,portions:""===t.portions?"0":t.portions,time:""===t.time?"?":t.time,preparation:a.preparation},e.next=3,y(n);case 3:p(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:N,name:a.name,imageUrl:a.imageUrl,portions:a.portions,time:a.time,preparation:t},e.next=3,y(n);case 3:g(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null===a?Object(h.jsx)("div",{className:"loaderContainer",children:Object(h.jsx)("div",{className:"spinner",children:Object(h.jsx)(f.PacmanLoader,{size:25})})}):Object(h.jsxs)("div",{className:"recipe",children:[Object(h.jsx)(A,{recipe:a,editMode:b,onEnableEditMode:function(){a.isDefault?alert("You can't edit default recipes"):p(!0)},onDisableEditMode:function(){return p(!1)},onUpdate:function(e){return w(e)},onDelete:function(){return C()}}),Object(h.jsx)(T,{extractedRecipeId:N,recipeIsDefault:a.isDefault}),Object(h.jsx)(P,{description:a.preparation,editMode:m,onEnableEditMode:function(){a.isDefault?alert("You can't edit default recipes"):g(!0)},onDisableEditMode:function(){return g(!1)},onUpdate:function(e){return E(e)}})]})},z=function(e){var t,n=e.onSubmit,r=Object(c.useState)(""),i=Object(u.a)(r,2),a=i[0],o=i[1],p=Object(c.useState)(""),O=Object(u.a)(p,2),f=O[0],m=O[1],g=Object(c.useState)(""),E=Object(u.a)(g,2),S=E[0],T=E[1],P=Object(c.useState)(""),A=Object(u.a)(P,2),U=A[0],z=A[1],R=Object(c.useState)(""),L=Object(u.a)(R,2),B=L[0],M=L[1],F=Object(c.useState)(""),Y=Object(u.a)(F,2),q=Y[0],G=Y[1],H=Object(c.useState)(""),J=Object(u.a)(H,2),Q=J[0],K=J[1],W=Object(c.useState)(""),_=Object(u.a)(W,2),V=_[0],X=_[1],Z=Object(c.useState)([]),$=Object(u.a)(Z,2),ee=$[0],te=$[1],ne=Object(v.f)(),ce=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a){e.next=3;break}return alert("Please fill at least name input"),e.abrupt("return");case 3:return t={name:a,imageUrl:f,portions:""===S?"0":S,time:""===U?"?":U,preparation:B,isDefault:!1},e.next=6,n(t,ee);case 6:ne("/",{replace:!0});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function re(){G(""),K(""),X("")}return Object(h.jsxs)("div",{className:"formContainer",children:[Object(h.jsx)("h2",{children:"RECIPE ADD FORM"}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{children:"INFO:"}),Object(h.jsxs)("div",{className:"formInput",children:[Object(h.jsx)("label",{children:"Name:"}),Object(h.jsx)("input",{maxLength:"32",type:"text",placeholder:"name",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(h.jsxs)("div",{className:"formInput",children:[Object(h.jsx)("label",{children:"Image URL:"}),Object(h.jsx)("input",{maxLength:"255",type:"text",placeholder:"imageUrl",value:f,onChange:function(e){return m(e.target.value)}})]}),Object(h.jsx)("img",{id:"imagePreview",src:(t=f,void 0===t?x.toString():""!==t&&t.includes("http")?t:x.toString()),alt:""}),Object(h.jsxs)("div",{className:"formInput",children:[Object(h.jsx)("label",{children:"Portions:"}),Object(h.jsx)(I,{value:S,onChange:T})]}),Object(h.jsxs)("div",{className:"formInput",children:[Object(h.jsx)("label",{children:"Preparation time:"}),Object(h.jsx)(D,{value:U,onChange:z})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{id:"formDescription",children:[Object(h.jsx)("h3",{children:"PREPARATION:"}),Object(h.jsx)("textarea",{maxLength:"4000",className:"prepDescriptionTextarea",placeholder:"preparation description",value:B,onChange:function(e){return M(e.target.value)}})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"ingredientsTableContainer",children:[Object(h.jsx)("h3",{children:"INGREDIENTS:"}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"NAME"}),Object(h.jsx)("th",{children:"QUANTITY"}),Object(h.jsx)("th",{children:"UNIT"}),Object(h.jsx)("th",{children:"OPTIONS"})]})}),Object(h.jsxs)("tbody",{children:[ee.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.quantity}),Object(h.jsx)("td",{children:e.unit}),Object(h.jsx)("td",{children:Object(h.jsx)(C,{onEdit:!1,onDelete:function(){return function(e){var t=ee.filter((function(t){return t!==e}));te(t)}(e)}})})]},e.id)})),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)(y,{value:q,onChange:G})}),Object(h.jsx)("td",{children:Object(h.jsx)(k,{value:Q,onChange:K})}),Object(h.jsx)("td",{children:Object(h.jsx)(N,{value:V,onChange:X})}),Object(h.jsx)("td",{children:Object(h.jsx)(w,{onAccept:function(){return function(){if(""!==q&&""!==Q&&""!==V&&"unit"!==V){if(parseFloat(Q)>1e3)return alert("Quantity max value is 1000"),"";var e={name:q,quantity:Q,unit:V};te([].concat(Object(s.a)(ee),[e])),console.log(ee),re()}else alert("Please fill inputs of new ingredient")}()},onCancel:function(){return re()}})})]})]})]})]}),Object(h.jsxs)("div",{id:"formOptions",children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(d.c,{size:40,onClick:function(){return ce()}})}),Object(h.jsx)(b.b,{to:"/",children:Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(d.b,{size:40})})})]})]})};var R=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bcookbook.herokuapp.com/recipes");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("fetched recipes =>",n),r(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then()}),[]);var i=function(){var e=Object(l.a)(j.a.mark((function e(t,c){var i,a,o,l,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bcookbook.herokuapp.com/recipes",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return i=e.sent,e.next=5,i.json();case 5:return a=e.sent,r([].concat(Object(s.a)(n),[a])),o=a.id,e.next=10,fetch("https://bcookbook.herokuapp.com/recipes/".concat(o,"/ingredients/list"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 10:return l=e.sent,e.next=13,l.json();case 13:u=e.sent,console.log("saved recipe =>",a),console.log("saved ingredients =>",u);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(n.filter((function(e){return e.id.toString()!==t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(j.a.mark((function e(t){var c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n.indexOf(n.find((function(e){return e.id===t.id}))),(i=n)[c]=t,r(i),console.log("recipes updated");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(b.a,{hashType:"slash",children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(p,{}),Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{path:"/",element:Object(h.jsx)(m,{recipes:n})}),Object(h.jsx)(v.a,{path:"/recipe/:id",element:Object(h.jsx)(U,{onDelete:function(e){return a(e)},onUpdate:function(e){return o(e)}})}),Object(h.jsx)(v.a,{path:"/form",element:Object(h.jsx)(z,{onSubmit:function(e,t){return i(e,t)}})}),Object(h.jsx)(v.a,{path:"/about",element:Object(h.jsx)(g,{})})]}),Object(h.jsx)(O,{})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root")),L()}},[[57,1,2]]]);
//# sourceMappingURL=main.b8a3bc18.chunk.js.map