"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5186],{5338:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r,a=n(7294),o=n(2066),i=new Uint8Array(16);function u(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}var d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(e){return"string"==typeof e&&d.test(e)},c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};var l=function(e,t,n){var r=(e=e||{}).random||(e.rng||u)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return m(r)},p=function(e,t){window.hbspt.forms.create({region:"na1",portalId:"14552909",formId:e,target:"#form-"+t,formInstanceId:"instance-"+t})},g=function(e){var t=e.formId,n=(0,a.useState)(null),r=n[0],o=n[1],i=(0,a.useState)(!0),u=i[0],d=i[1];return(0,a.useEffect)((function(){o(l())}),[]),(0,a.useEffect)((function(){r&&(window.hbspt?p(t,r):function(e,t){var n=document.createElement("script");n.defer=!0,n.onload=function(){p(e,t)},n.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(n)}(t,r),d(!1))}),[r]),a.createElement(a.Fragment,null,u?a.createElement(a.Fragment,null,"Loading..."):a.createElement("div",{id:"form-"+r}))};var v=function(){return a.createElement(o.Z,{title:"Managed DataHub"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row",style:{padding:"5vh 2rem",justifyContent:"center"}},a.createElement("div",{className:"col col--6"},a.createElement("div",{style:{background:"white",padding:"2rem",borderRadius:"10px"}},a.createElement(g,{formId:"ae8c7cd1-1db3-4483-b1db-b169813b9129"}))))))}}}]);