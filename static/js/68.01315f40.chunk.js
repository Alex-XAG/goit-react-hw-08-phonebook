"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[68],{6068:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,o,i,a,l,s,u,c,d,f,h=t(9439),p=t(2791),g=t(168),x=t(7686),m=x.Z.form(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),b=x.Z.label(o||(o=(0,g.Z)(["\n  font-size: large;\n  line-height: 1.5;\n  font-weight: 700;\n"]))),y=x.Z.input(i||(i=(0,g.Z)(["\n  font-size: 18px;\n  line-height: 1.5;\n  font-weight: 400;\n\n  outline: 1px solid gray;\n  border: none;\n  border-radius: 10px;\n  padding: 5px;\n\n  &:focus {\n    outline: 2px solid yellowgreen;\n  }\n"]))),Z=x.Z.button(a||(a=(0,g.Z)(["\n  font-size: large;\n  line-height: 1.5;\n  font-weight: 700;\n  text-align: center;\n\n  outline: 1px solid gray;\n  border: none;\n  border-radius: 10px;\n  margin-top: 35px;\n  background-color: yellow;\n  transform: scale(1);\n  transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  &:focus {\n    outline: 2px solid yellowgreen;\n  }\n"]))),w=t(3855),v=function(n){return n.contacts.items},j=t(3141),k=t(184),z=function(){var n=(0,w.I0)(),e=(0,w.v9)(v),t=(0,p.useState)(""),r=(0,h.Z)(t,2),o=r[0],i=r[1],a=(0,p.useState)(""),l=(0,h.Z)(a,2),s=l[0],u=l[1],c=function(n){var e=n.target;switch(e.name){case"name":i(e.value);break;case"number":u(e.value);break;default:return}},d=function(t,r){e.find((function(n){return n.name===t}))?alert("".concat(t," is already in your phonebook")):e.find((function(n){return n.number===r}))?alert("This number exist in your phonebook"):n((0,j.uK)({name:t,number:r}))};return(0,k.jsxs)(m,{onSubmit:function(n){n.preventDefault(),d(o,s),n.currentTarget.reset()},children:[(0,k.jsx)(b,{htmlFor:"name",children:"Name"}),(0,k.jsx)(y,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:c}),(0,k.jsx)(b,{htmlFor:"number",children:"Number"}),(0,k.jsx)(y,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:c}),(0,k.jsx)(Z,{type:"submit",children:(0,k.jsx)("h3",{children:"Add contact"})})]})},C=x.Z.ul(l||(l=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 500px;\n  padding: 0;\n  margin: 0;\n"]))),_=x.Z.li(s||(s=(0,g.Z)(["\n  font-size: large;\n  line-height: 1.5;\n  font-weight: 700;\n\n  display: flex;\n  align-items: center;\n"]))),A=x.Z.p(u||(u=(0,g.Z)(["\n  font-size: 18px;\n  line-height: 1.5;\n  font-weight: 400;\n\n  outline: 1px solid gray;\n  border: none;\n  border-radius: 10px;\n  padding: 5px;\n\n  &:hover {\n    outline: 3px solid yellowgreen;\n  }\n"]))),F=x.Z.button(c||(c=(0,g.Z)(["\n  font-size: large;\n  line-height: 1.5;\n  font-weight: 700;\n  text-align: center;\n\n  outline: 1px solid gray;\n  border: none;\n  border-radius: 10px;\n  margin-left: auto;\n  background-color: yellowgreen;\n  color: #fff;\n  transform: scale(1);\n  transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n\n  &:hover,\n  :focus {\n    transform: scale(1.1);\n    background-color: #fff;\n    color: yellowgreen;\n  }\n"]))),I=function(){var n=(0,w.I0)(),e=(0,w.v9)(v),t=(0,w.v9)((function(n){return n.filter})),r=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,k.jsx)(C,{children:r.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,k.jsxs)(_,{children:[(0,k.jsxs)(A,{children:[r,": ",o]}),(0,k.jsx)(F,{type:"button",onClick:function(){return n((0,j.GK)(t))},children:"Remove"})]},t)}))})},S=x.Z.label(d||(d=(0,g.Z)(["\n  font-size: large;\n  line-height: 1.5;\n  font-weight: 700;\n  margin-bottom: 15px;\n"]))),N=x.Z.input(f||(f=(0,g.Z)(["\n  display: block;\n  font-size: 18px;\n  line-height: 1.5;\n  font-weight: 400;\n\n  outline: 1px solid gray;\n  border: none;\n  border-radius: 10px;\n  padding: 5px;\n  margin-bottom: 20px;\n\n  &:focus {\n    outline: 3px solid yellowgreen;\n  }\n"]))),T=t(4808),q=function(){var n=(0,w.I0)(),e=(0,w.v9)((function(n){return n.filter}));return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(S,{htmlFor:"filter",children:"Find contacts by name"}),(0,k.jsx)(N,{name:"filter",type:"text",value:e,onChange:function(e){return n((0,T.T)(e.target.value))}})]})},D=function(){var n=(0,w.v9)(v);return(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:20,color:"#010101"},children:[(0,k.jsx)("h1",{children:"Phonebook"}),(0,k.jsx)(z,{}),(0,k.jsx)("h2",{children:"Contacts"}),(0,k.jsx)(q,{}),n&&(0,k.jsx)(I,{})]})}}}]);
//# sourceMappingURL=68.01315f40.chunk.js.map