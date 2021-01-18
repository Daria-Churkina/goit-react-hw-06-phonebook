(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),s=n(7),i=n.n(s),b=(n(26),function(e){return e.contacts.items}),l=function(e){return e.contacts.filter},o=function(e){var t=b(e),n=l(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},j=n(3),u=n(39),d=n(4),O=Object(d.b)("contacts/new",(function(e,t){return{payload:{id:Object(u.a)(),name:e,number:t}}})),m=Object(d.b)("contacts/delete"),f=Object(d.b)("contacts/filter");var h=function(){var e=Object(j.b)(),t=Object(j.c)(o);return Object(j.c)(b).length?Object(c.jsx)("ul",{className:"contactList",children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(c.jsxs)("li",{className:"contactItem",children:[Object(c.jsxs)("p",{children:[a," : ",r]}),Object(c.jsx)("button",{type:"button",onClick:function(){return e(m(n))},className:"deleteContactButton",children:"Delete"})]},n)}))}):Object(c.jsx)("h3",{children:"Add new contacts"})};var p=function(){var e=Object(j.b)(),t=Object(j.c)(l);return Object(j.c)(b),Object(c.jsxs)("label",{children:["Find contacts by name",Object(c.jsx)("input",{type:"text",value:t,name:"filter",onChange:function(t){e(f(t.target.value))}})]})},x=n(14);var v=function(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(x.a)(s,2),b=i[0],l=i[1],o=Object(j.b)(),u=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":r(c);break;case"number":l(c);break;default:return}},d=function(){r(""),l("")};return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(O(n,b)),d()},children:[Object(c.jsxs)("label",{className:"label name",children:["Enter name",Object(c.jsx)("input",{type:"text",value:n,name:"name",onChange:u,placeholder:"Jony Depp"})]}),Object(c.jsxs)("label",{className:"label number",children:["\u0415nter number",Object(c.jsx)("input",{type:"tel",value:b,name:"number",onChange:u,placeholder:"Number (7 to 9 digits)",pattern:"[0-9]{7,9}",title:"7 to 9 digits allowed"})]}),Object(c.jsx)("button",{type:"submit",className:"addContact",children:"Add contact"})]})},y=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:"section",children:[Object(c.jsx)("h2",{children:t}),n]})};n(34);var g,C=function(){return Object(c.jsxs)("div",{className:"main-container",children:[Object(c.jsx)(y,{title:"Phonebook",children:Object(c.jsx)(v,{})}),Object(c.jsxs)(y,{title:"Contacts",children:[Object(c.jsx)(p,{}),Object(c.jsx)(h,{})]})]})},k=n(18),w=n(9),N=n(5),S=n(19),A=n.n(S),D=n(20),J=n.n(D),L=n(10),B=n(2),E=Object(d.c)([],(g={},Object(L.a)(g,O,(function(e,t){var n=t.payload;return[].concat(Object(w.a)(e),[n])})),Object(L.a)(g,m,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),g)),I=Object(d.c)("",Object(L.a)({},f,(function(e,t){return t.payload}))),z=Object(B.c)({items:E,filter:I}),F={key:"contacts",storage:J.a,blacklist:["filter"]},M=[].concat(Object(w.a)(Object(d.d)({serializableCheck:{ignoredActions:[N.a,N.f,N.b,N.c,N.d,N.e]}})),[A.a]),P=Object(d.a)({reducer:{contacts:Object(N.g)(F,z)},middleware:M,devTools:!1}),T=Object(N.h)(P);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j.a,{store:P,children:Object(c.jsx)(k.a,{loading:null,persistor:T,children:Object(c.jsx)(C,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.40e3f736.chunk.js.map