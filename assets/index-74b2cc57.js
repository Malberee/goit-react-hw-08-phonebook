import{i as K,j as a,c as D,f as _,r as C,a as v,b as T,u as Q,o as X,d as Y,G as V,e as A,g as ee,h as b,s as te,B as re,k as ne,F as L,l as E,I as ae,m as oe,T as ie,n as ce,p as se}from"./index-0c332da0.js";import{g as le,F as ue,I as M,a as q,b as W}from"./chunk-GYFRIY2Z-b8849955.js";import{H as P}from"./chunk-B2MGPQRJ-217a0629.js";var N="NOT_FOUND";function de(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:N},put:function(n,o){t={key:n,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function he(e,t){var r=[];function n(c){var i=r.findIndex(function(p){return t(c,p.key)});if(i>-1){var h=r[i];return i>0&&(r.splice(i,1),r.unshift(h)),h.value}return N}function o(c,i){n(c)===N&&(r.unshift({key:c,value:i}),r.length>e&&r.pop())}function s(){return r}function d(){r=[]}return{get:n,put:o,getEntries:s,clear:d}}var pe=function(t,r){return t===r};function me(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var o=r.length,s=0;s<o;s++)if(!e(r[s],n[s]))return!1;return!0}}function fe(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,o=n===void 0?pe:n,s=r.maxSize,d=s===void 0?1:s,c=r.resultEqualityCheck,i=me(o),h=d===1?de(i):he(d,i);function p(){var l=h.get(arguments);if(l===N){if(l=e.apply(null,arguments),c){var u=h.getEntries(),m=u.find(function(g){return c(g.value,l)});m&&(l=m.value)}h.put(arguments,l)}return l}return p.clearCache=function(){return h.clear()},p}function ve(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function ge(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=function(){for(var d=arguments.length,c=new Array(d),i=0;i<d;i++)c[i]=arguments[i];var h=0,p,l={memoizeOptions:void 0},u=c.pop();if(typeof u=="object"&&(l=u,u=c.pop()),typeof u!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var m=l,g=m.memoizeOptions,f=g===void 0?r:g,z=Array.isArray(f)?f:[f],S=ve(c),F=e.apply(void 0,[function(){return h++,u.apply(null,arguments)}].concat(z)),x=e(function(){for(var w=[],I=S.length,k=0;k<I;k++)w.push(S[k].apply(null,arguments));return p=F.apply(null,w),p});return Object.assign(x,{resultFunc:u,memoizedResultFunc:F,dependencies:S,lastResult:function(){return p},recomputations:function(){return h},resetRecomputations:function(){return h=0}}),x};return o}var ye=ge(fe);function Ce(e,t){return Array.isArray(e)?e.map(r=>r===null?null:t(r)):K(e)?Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{}):e!=null?t(e):null}var $=e=>a(D.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});$.displayName="StackItem";function be(e){const{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Ce(r,o=>n[o])}}var H=_((e,t)=>{const{isInline:r,direction:n,align:o,justify:s,spacing:d="0.5rem",wrap:c,children:i,divider:h,className:p,shouldWrapChildren:l,...u}=e,m=r?"row":n??"column",g=C.useMemo(()=>be({spacing:d,direction:m}),[d,m]),f=!!h,z=!l&&!f,S=C.useMemo(()=>{const x=le(i);return z?x:x.map((y,w)=>{const I=typeof y.key<"u"?y.key:w,k=w+1===x.length,R=l?a($,{children:y},I):y;if(!f)return R;const Z=C.cloneElement(h,{__css:g}),J=k?null:Z;return v(C.Fragment,{children:[R,J]},I)})},[h,g,f,z,l,i]),F=T("chakra-stack",p);return a(D.div,{ref:t,display:"flex",alignItems:o,justifyContent:s,flexDirection:m,flexWrap:c,gap:f?void 0:d,className:F,...u,children:S})});H.displayName="Stack";var B=_((e,t)=>a(H,{align:"center",...e,direction:"column",ref:t}));B.displayName="VStack";var U=_(function(t,r){const{borderLeftWidth:n,borderBottomWidth:o,borderTopWidth:s,borderRightWidth:d,borderWidth:c,borderStyle:i,borderColor:h,...p}=Q("Divider",t),{className:l,orientation:u="horizontal",__css:m,...g}=X(t),f={vertical:{borderLeftWidth:n||d||c||"1px",height:"100%"},horizontal:{borderBottomWidth:o||s||c||"1px",width:"100%"}};return a(D.hr,{ref:r,"aria-orientation":u,...g,__css:{...p,border:"0",borderColor:h,borderStyle:i,...f[u],...m},className:T("chakra-divider",l)})});U.displayName="Divider";var xe=Y({displayName:"DeleteIcon",path:a("g",{fill:"currentColor",children:a("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})});const j=e=>e.contacts.items,Se=e=>e.contacts.isLoading,we=e=>e.contacts.error;function ke(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function ze(e){return V({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}const Fe=()=>{const e=A(),t=ee(),r=b(j),n=b(te),[o,s]=C.useState(""),[d,c]=C.useState(""),i=p=>{const{name:l,value:u}=p.target;l==="name"&&s(u),l==="number"&&c(u)};return v(ue,{as:"form",onSubmit:p=>{if(p.preventDefault(),n){if(r.some(u=>u.name.toLowerCase()===o.toLowerCase())){alert(`${o} is already in contacts`);return}e(ne({name:o,number:d}))}else t("/login",{replace:!0});s(""),c("")},children:[v(M,{mt:"20px",children:[a(q,{children:a(ze,{})}),a(W,{placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:o,onChange:i})]}),v(M,{mt:"10px",children:[a(q,{children:a(ke,{})}),a(W,{placeholder:"Number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:i})]}),a(re,{type:"submit",colorScheme:"blue",mt:"10px",w:"100%",children:"Add contact"})]})},G=e=>e.filter,Ie=ye([j,G],(e,t)=>e.filter(({name:r})=>r.toLowerCase().includes(t.toLowerCase()))),Le=()=>{const e=A(),t=b(Ie),r=b(Se),n=b(we);return v(L,{children:[r&&a("p",{children:"Loading..."}),n&&a("p",{children:"error"}),!r&&!n&&t.length<1&&a("p",{children:"Ничё не нашли"}),!r&&!n&&a(B,{spacing:"15px",as:"ul",children:t.map(({id:o,name:s,number:d})=>v(E,{as:"li",w:"100%",display:"flex",justifyContent:"space-between",padding:"10px",borderRadius:"md",bgColor:"blackAlpha.200",alignItems:"center",children:[a("p",{children:s}),a("p",{children:d}),a(ae,{"aria-label":"Delete contact",colorScheme:"red",variant:"ghost",icon:a(xe,{}),onClick:()=>e(oe(o))})]},o))})]})},Ne=()=>{const e=b(G),t=A();return v(L,{children:[a(ie,{children:"Find contacts by name"}),a(W,{type:"text",name:"filter",title:"",value:e,onChange:({target:n})=>t(ce(n.value)),mb:"15px",w:"360px"})]})},O=()=>{const e=b(j),t=A();return C.useEffect(()=>{t(se())},[t]),a(L,{children:v(B,{children:[v(E,{as:"section",w:"350px",children:[a(P,{children:"Phonebook"}),a(Fe,{})]}),a(U,{w:"370px"}),a(E,{as:"section",w:"350px",children:e.length?v(L,{children:[a(P,{children:"Contacts"}),a(Ne,{}),a(Le,{contacts:e})]}):a("p",{children:"Empty"})})]})})};O.propTypes={};O.defaultProps={};const _e=O;export{_e as default};
