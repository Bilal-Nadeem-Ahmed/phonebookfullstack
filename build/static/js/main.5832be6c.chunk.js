(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),s=n(14),c=n.n(s),a=n(3),i=n(0),u=function(e){var t=e.filterCriteria,n=e.handleChangeFilter;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{value:t,onChange:n})]}),Object(i.jsx)("br",{})]})},l=function(e){var t=e.message,n=e.mstyle,r={color:"".concat(n),background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return Object(i.jsx)("p",{style:r,children:t})},d=function(e){var t=e.newName,n=e.handleChange,r=e.newNumber,o=e.handleChangeNumber,s=e.handleClick;return Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:n})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:r,onChange:o})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:s,type:"submit",children:"add"})})]})},h=n(4),j=n.n(h),b="https://peaceful-shelf-11380.herokuapp.com/api/persons",f=function(){return j.a.get(b).then((function(e){return e.data}))},p=function(e){return j.a.post(b,e).then((function(e){return e.data}))},m=function(e){return j.a.delete("http://localhost:3001/persons/".concat(e)).then((function(e){return console.log(e)}))},O=function(e,t){return j.a.put("http://localhost:3001/persons/".concat(e),t).then((function(e){return e}))},g=function(e){var t=e.id,n=e.persons,r=e.setPersons,o=e.setErrorMessage,s=e.setErrorMessageType;return Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),window.confirm("are you sure you want to delete this person?")?m(t).then((function(e){r(n.filter((function(e){return e.id!==t}))),console.log("person actually deleted")})).catch((function(e){s("red"),o("Error, this person has already been Deleted"),r(n.filter((function(e){return e.id!==t}))),setTimeout((function(){o(null)}),3e3)})):console.log("maybe not")},children:" delete"})},x=function(e){var t=e.showFiltered,n=e.filteredPerson,r=e.setPersons,o=e.persons,s=e.setErrorMessage,c=e.setErrorMessageType;return Object(i.jsx)(i.Fragment,{children:t?n.map((function(e){return Object(i.jsxs)("p",{children:[e.name,"  ",e.number," ",Object(i.jsx)(g,{setErrorMessageType:c,setErrorMessage:s,persons:o,setPersons:r,id:e.id})," "]},e.name)})):o.map((function(e){return Object(i.jsxs)("p",{children:[e.name," ",e.number,Object(i.jsx)(g,{setErrorMessageType:c,setErrorMessage:s,persons:o,setPersons:r,id:e.id})]},e.name)}))})};var v=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1];Object(r.useEffect)((function(){f().then((function(e){return o(e)}))}),[]);var s=Object(r.useState)(""),c=Object(a.a)(s,2),h=c[0],j=c[1],b=Object(r.useState)(""),m=Object(a.a)(b,2),g=m[0],v=m[1],w=Object(r.useState)(""),y=Object(a.a)(w,2),C=y[0],k=y[1],E=Object(r.useState)(""),M=Object(a.a)(E,2),S=M[0],P=M[1],T=Object(r.useState)(!1),N=Object(a.a)(T,2),F=N[0],D=N[1],B=Object(r.useState)(null),J=Object(a.a)(B,2),L=J[0],z=J[1],A=Object(r.useState)("green"),I=Object(a.a)(A,2),R=I[0],q=I[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),L?Object(i.jsx)(l,{mstyle:R,message:L}):null,Object(i.jsx)(u,{filterCriteria:C,handleChangeFilter:function(e){k(e.target.value.toLowerCase());for(var t=[],r=[],o=0;o<n.length;o++)t.push(n[o].name.toLowerCase()),t[o].includes(C)&&(r.push(n[o]),P(r),console.log(S),D(!0))}}),Object(i.jsx)("h3",{children:"Add a new"}),Object(i.jsx)(d,{newName:h,handleChange:function(e){j(e.target.value)},newNumber:g,handleChangeNumber:function(e){v(e.target.value)},handleClick:function(e){(e.preventDefault(),function(e,t){for(var n=[],r=0;r<e.length;r++)n.push(e[r].name);if(-1!==n.indexOf(t))return!0}(n,h))?window.confirm("".concat(h," is already added to Phonebook, would you like to update"))?function(e){var t=n.filter((function(t){return t.name===e})),r={name:h,number:g};O(t[0].id,r).then((function(e){o(n.map((function(n){return n.id!==t[0].id?n:e.data}))),q("green"),z(" ".concat(h,"'s contact information was updated!")),setTimeout((function(){q("green"),z(null)}),3e3)})).catch((function(e){q("red"),z(" ".concat(e," Error!")),setTimeout((function(){z(null)}),3e3)})),console.log(t[0].id),j(""),v("")}(h):j(""):p({name:h,number:g}).then((function(e){o(n.concat(e)),j(""),v(""),z("'".concat(h,"' was added to the phonebook")),setTimeout((function(){z(null)}),3e3)}))}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(x,{showFiltered:F,filteredPerson:S,setErrorMessageType:q,setErrorMessage:z,setPersons:o,persons:n})]})};n(38);c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.5832be6c.chunk.js.map