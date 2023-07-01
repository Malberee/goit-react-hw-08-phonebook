import{n as K,j as a,g as D,f as _,r as b,a as v,h as T,k as Q,o as X,m as Y,G as V,u as L,p as ee,q as C,s as te,b as re,Q as ne,t as ae,F as N,S as oe,B as A,I as ie,v as ce,T as se,w as le,x as ue}from"./index-e8179a86.js";import{g as de,F as he,I as q,a as M,b as W}from"./chunk-GYFRIY2Z-19caccc2.js";import{H as P}from"./chunk-B2MGPQRJ-fe07fab3.js";var E="NOT_FOUND";function pe(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:E},put:function(n,o){t={key:n,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function me(e,t){var r=[];function n(c){var i=r.findIndex(function(p){return t(c,p.key)});if(i>-1){var h=r[i];return i>0&&(r.splice(i,1),r.unshift(h)),h.value}return E}function o(c,i){n(c)===E&&(r.unshift({key:c,value:i}),r.length>e&&r.pop())}function s(){return r}function d(){r=[]}return{get:n,put:o,getEntries:s,clear:d}}var fe=function(t,r){return t===r};function ve(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var o=r.length,s=0;s<o;s++)if(!e(r[s],n[s]))return!1;return!0}}function ge(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,o=n===void 0?fe:n,s=r.maxSize,d=s===void 0?1:s,c=r.resultEqualityCheck,i=ve(o),h=d===1?pe(i):me(d,i);function p(){var l=h.get(arguments);if(l===E){if(l=e.apply(null,arguments),c){var u=h.getEntries(),m=u.find(function(g){return c(g.value,l)});m&&(l=m.value)}h.put(arguments,l)}return l}return p.clearCache=function(){return h.clear()},p}function ye(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function be(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=function(){for(var d=arguments.length,c=new Array(d),i=0;i<d;i++)c[i]=arguments[i];var h=0,p,l={memoizeOptions:void 0},u=c.pop();if(typeof u=="object"&&(l=u,u=c.pop()),typeof u!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var m=l,g=m.memoizeOptions,f=g===void 0?r:g,z=Array.isArray(f)?f:[f],S=ye(c),F=e.apply(void 0,[function(){return h++,u.apply(null,arguments)}].concat(z)),x=e(function(){for(var w=[],I=S.length,k=0;k<I;k++)w.push(S[k].apply(null,arguments));return p=F.apply(null,w),p});return Object.assign(x,{resultFunc:u,memoizedResultFunc:F,dependencies:S,lastResult:function(){return p},recomputations:function(){return h},resetRecomputations:function(){return h=0}}),x};return o}var Ce=be(ge);function xe(e,t){return Array.isArray(e)?e.map(r=>r===null?null:t(r)):K(e)?Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{}):e!=null?t(e):null}var $=e=>a(D.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});$.displayName="StackItem";function Se(e){const{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":xe(r,o=>n[o])}}var H=_((e,t)=>{const{isInline:r,direction:n,align:o,justify:s,spacing:d="0.5rem",wrap:c,children:i,divider:h,className:p,shouldWrapChildren:l,...u}=e,m=r?"row":n??"column",g=b.useMemo(()=>Se({spacing:d,direction:m}),[d,m]),f=!!h,z=!l&&!f,S=b.useMemo(()=>{const x=de(i);return z?x:x.map((y,w)=>{const I=typeof y.key<"u"?y.key:w,k=w+1===x.length,R=l?a($,{children:y},I):y;if(!f)return R;const Z=b.cloneElement(h,{__css:g}),J=k?null:Z;return v(b.Fragment,{children:[R,J]},I)})},[h,g,f,z,l,i]),F=T("chakra-stack",p);return a(D.div,{ref:t,display:"flex",alignItems:o,justifyContent:s,flexDirection:m,flexWrap:c,gap:f?void 0:d,className:F,...u,children:S})});H.displayName="Stack";var B=_((e,t)=>a(H,{align:"center",...e,direction:"column",ref:t}));B.displayName="VStack";var U=_(function(t,r){const{borderLeftWidth:n,borderBottomWidth:o,borderTopWidth:s,borderRightWidth:d,borderWidth:c,borderStyle:i,borderColor:h,...p}=Q("Divider",t),{className:l,orientation:u="horizontal",__css:m,...g}=X(t),f={vertical:{borderLeftWidth:n||d||c||"1px",height:"100%"},horizontal:{borderBottomWidth:o||s||c||"1px",width:"100%"}};return a(D.hr,{ref:r,"aria-orientation":u,...g,__css:{...p,border:"0",borderColor:h,borderStyle:i,...f[u],...m},className:T("chakra-divider",l)})});U.displayName="Divider";var we=Y({displayName:"DeleteIcon",path:a("g",{fill:"currentColor",children:a("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})});const j=e=>e.contacts.items,ke=e=>e.contacts.isLoading,ze=e=>e.contacts.error;function Fe(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function Ie(e){return V({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}const Ne=()=>{const e=L(),t=ee(),r=C(j),n=C(te),[o,s]=b.useState(""),[d,c]=b.useState(""),i=p=>{const{name:l,value:u}=p.target;l==="name"&&s(u),l==="number"&&c(u)};return v(he,{as:"form",onSubmit:p=>{if(p.preventDefault(),n){if(r.some(u=>u.name.toLowerCase()===o.toLowerCase())){ne.warning(`${o} is already in contacts`,{position:"bottom-center"});return}e(ae({name:o,number:d}))}else t("/login",{replace:!0});s(""),c("")},children:[v(q,{mt:"20px",children:[a(M,{children:a(Ie,{})}),a(W,{placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:o,onChange:i})]}),v(q,{mt:"10px",children:[a(M,{children:a(Fe,{})}),a(W,{placeholder:"Number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:i})]}),a(re,{type:"submit",colorScheme:"blue",mt:"10px",w:"100%",children:"Add contact"})]})},G=e=>e.filter,Ee=Ce([j,G],(e,t)=>e.filter(({name:r})=>r.toLowerCase().includes(t.toLowerCase()))),Le=()=>{const e=L(),t=C(Ee),r=C(ke),n=C(ze);return v(N,{children:[r&&a(oe,{color:"blue.500"}),n&&a("p",{children:"Error"}),!r&&!n&&t.length<1&&a("p",{children:"Ничё не нашли"}),!r&&!n&&a(B,{spacing:"15px",as:"ul",children:t.map(({id:o,name:s,number:d})=>v(A,{as:"li",w:"100%",display:"flex",justifyContent:"space-between",padding:"10px",borderRadius:"md",bgColor:"blackAlpha.200",alignItems:"center",children:[a("p",{children:s}),a("p",{children:d}),a(ie,{"aria-label":"Delete contact",colorScheme:"red",variant:"ghost",icon:a(we,{}),onClick:()=>e(ce(o))})]},o))})]})},Ae=()=>{const e=C(G),t=L();return v(N,{children:[a(se,{children:"Find contacts by name"}),a(W,{type:"text",name:"filter",title:"",value:e,onChange:({target:n})=>t(le(n.value)),mb:"15px",w:"100%"})]})},O=()=>{const e=C(j),t=L();return b.useEffect(()=>{t(ue())},[t]),a(N,{children:v(B,{children:[v(A,{as:"section",w:"350px",children:[a(P,{children:"Phonebook"}),a(Ne,{})]}),a(U,{w:"370px"}),a(A,{as:"section",w:"350px",children:e.length?v(N,{children:[a(P,{children:"Contacts"}),a(Ae,{}),a(Le,{contacts:e})]}):a("p",{children:"Empty"})})]})})};O.propTypes={};O.defaultProps={};const je=O;export{je as default};
