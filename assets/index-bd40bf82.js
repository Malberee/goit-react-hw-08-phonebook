import{u as I,r as f,l as x,j as e,B as o,a as r,I as g,b as L,T as E,L as F}from"./index-16196ca6.js";import{u as P,c as S,a as i,F as t,E as V,b as n,L as k,V as y,d as v}from"./index.esm-b5236ba1.js";import{H as j}from"./chunk-B2MGPQRJ-84816522.js";import{L as q}from"./chunk-YTV6DHKL-7b11e7f0.js";import{F as l,I as c,a as d,b as m,c as B}from"./chunk-GYFRIY2Z-75a23288.js";const C=()=>{const p=I(),[a,u]=f.useState(!1),s=P({initialValues:{email:"",password:""},validationSchema:S({email:i().email().required("Email required"),password:i().required("Password required").min(8,"Password is too short")}),onSubmit:(w,b)=>{try{p(x(w))}catch{console.log("text")}b.resetForm()}}),h=()=>u(!a);return e(o,{as:"form",display:"flex",justifyContent:"center",alignItems:"center",onSubmit:s.handleSubmit,children:r(o,{w:"300px",children:[e(j,{children:"Log In"}),r(l,{isInvalid:s.errors.email&&s.touched.email,children:[e(t,{mb:"2px",children:"E-mail"}),r(c,{children:[e(d,{children:e(V,{})}),e(m,{name:"email",placeholder:"Enter e-mail",...s.getFieldProps("email")})]}),e(n,{children:s.errors.email})]}),r(l,{mt:"10px",isInvalid:s.errors.password&&s.touched.password,children:[e(t,{mb:"2px",children:"Password"}),r(c,{children:[e(d,{children:e(k,{})}),e(m,{name:"password",placeholder:"Enter password",type:a?"text":"password",...s.getFieldProps("password")}),e(B,{children:e(g,{variant:"flushed",type:"button",icon:a?e(y,{}):e(v,{}),onClick:h})})]}),e(n,{children:s.errors.password})]}),e(L,{type:"submit",colorScheme:"blue",mt:"10px",w:"100%",children:"Submit"}),r(E,{mt:"10px",children:["Don't have account?"," ",e(q,{to:"/register",as:F,color:"#2b6cb0",children:"Create account"})]})]})})},O=C;export{O as default};
