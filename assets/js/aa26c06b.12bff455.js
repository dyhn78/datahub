"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5758],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),p=r,b=m["".concat(d,".").concat(p)]||m[p]||u[p]||o;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:24,title:"DataHubRole",slug:"/generated/metamodel/entities/datahubrole",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRole.md"},l="DataHubRole",i={unversionedId:"docs/generated/metamodel/entities/dataHubRole",id:"docs/generated/metamodel/entities/dataHubRole",title:"DataHubRole",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/dataHubRole.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubrole",permalink:"/docs/generated/metamodel/entities/datahubrole",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRole.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24,title:"DataHubRole",slug:"/generated/metamodel/entities/datahubrole",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRole.md"},sidebar:"overviewSidebar",previous:{title:"SchemaField",permalink:"/docs/generated/metamodel/entities/schemafield"},next:{title:"Post",permalink:"/docs/generated/metamodel/entities/post"}},d={},s=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubRoleInfo",id:"datahubroleinfo",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Incoming",id:"incoming",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datahubrole"},"DataHubRole"),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"datahubroleinfo"},"dataHubRoleInfo"),(0,r.kt)("p",null,"Information about a DataHub Role."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubRoleInfo"\n  },\n  "name": "DataHubRoleInfo",\n  "namespace": "com.linkedin.policy",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Name of the Role"\n    },\n    {\n      "Searchable": {\n        "fieldType": "TEXT"\n      },\n      "type": "string",\n      "name": "description",\n      "doc": "Description of the Role"\n    },\n    {\n      "type": "boolean",\n      "name": "editable",\n      "default": false,\n      "doc": "Whether the role should be editable via the UI"\n    }\n  ],\n  "doc": "Information about a DataHub Role."\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h3",{id:"incoming"},"Incoming"),(0,r.kt)("p",null,"These are the relationships stored in other entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IsAssociatedWithRole"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DataHubPolicy via ",(0,r.kt)("inlineCode",{parentName:"li"},"dataHubPolicyInfo.actors.roles")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IsMemberOfRole"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corpuser via ",(0,r.kt)("inlineCode",{parentName:"li"},"roleMembership.roles"))))),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);