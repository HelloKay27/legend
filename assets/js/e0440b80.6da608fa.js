"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8326],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),k=l,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||o;return a?r.createElement(m,n(n({ref:t},d),{},{components:a})):r.createElement(m,n({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,n=new Array(o);n[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,n[1]=i;for(var s=2;s<o;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(7462),l=a(3366),o=(a(7294),a(3905)),n=["components"],i={id:"studio-profile",title:"Create a Profile",sidebar_label:"Profile"},p=void 0,s={unversionedId:"tutorials/studio-profile",id:"tutorials/studio-profile",title:"Create a Profile",description:"Profile",source:"@site/../docs/tutorials/studio-profile.md",sourceDirName:"tutorials",slug:"/tutorials/studio-profile",permalink:"/docs/tutorials/studio-profile",draft:!1,tags:[],version:"current",frontMatter:{id:"studio-profile",title:"Create a Profile",sidebar_label:"Profile"},sidebar:"docs",previous:{title:"Enumeration",permalink:"/docs/tutorials/studio-enumeration"},next:{title:"Association",permalink:"/docs/tutorials/studio-association"}},d={},u=[{value:"Profile",id:"profile",level:2},{value:"Profile tag",id:"profile-tag",level:3},{value:"Add a tagged value to a class",id:"add-a-tagged-value-to-a-class",level:4},{value:"Stereotype",id:"stereotype",level:2},{value:"Profile stereotype",id:"profile-stereotype",level:3},{value:"Class stereotype",id:"class-stereotype",level:4},{value:"Supertype",id:"supertype",level:2},{value:"More",id:"more",level:2}],c={toc:u},k="wrapper";function m(e){var t=e.components,i=(0,l.Z)(e,n);return(0,o.kt)(k,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"profile"},"Profile"),(0,o.kt)("p",null,"To create a ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/legend-glossary/#profile"},"profile"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("kbd",null,"+")," icon.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("kbd",null,"New Profile"),"."))),(0,o.kt)("h3",{id:"profile-tag"},"Profile tag"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/legend-glossary/#tagged-value"},"tagged values")," to add context to your data model. For example, we can add the tagged value ",(0,o.kt)("strong",{parentName:"p"},"alias")," to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Firm")," class to make it easier for others to navigate our data model."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Profile editor, go to the ",(0,o.kt)("kbd",null,"Tags")," tab and click the ",(0,o.kt)("kbd",null,"+")," icon."),(0,o.kt)("li",{parentName:"ol"},"Type in ",(0,o.kt)("inlineCode",{parentName:"li"},"alias"),".")),(0,o.kt)("h4",{id:"add-a-tagged-value-to-a-class"},"Add a tagged value to a class"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Firm")," class")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("kbd",null,"tagged values")," tab")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Drag and drop the ",(0,o.kt)("kbd",null,"Profile")," element into the Tagged Value tab OR hit the ",(0,o.kt)("kbd",null,"+")," icon.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("kbd",null,"alias"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type in ",(0,o.kt)("strong",{parentName:"p"},"Organization"),"."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Firm")," class now shows the additional context."),(0,o.kt)("h2",{id:"stereotype"},"Stereotype"),(0,o.kt)("p",null,"To create a ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/legend-glossary/#stereotype"},"stereotype"),":"),(0,o.kt)("h3",{id:"profile-stereotype"},"Profile stereotype"),(0,o.kt)("p",null,"Annotate your model with labels like ",(0,o.kt)("em",{parentName:"p"},"legacy")," or ",(0,o.kt)("em",{parentName:"p"},"deprecated"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Profile editor, go to the ",(0,o.kt)("kbd",null,"stereotypes")," tab and click the ",(0,o.kt)("kbd",null,"+")," icon.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type in ",(0,o.kt)("strong",{parentName:"p"},"deprecated"),"."))),(0,o.kt)("h4",{id:"class-stereotype"},"Class stereotype"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Firm")," class")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("kbd",null,"Stereotypes")," tab")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Drag and drop the ",(0,o.kt)("kbd",null,"Profile"),"element into the Stereotypes tab OR hit the ",(0,o.kt)("kbd",null,"+")," icon.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"deprecated"),"."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Firm")," class now shows the additional metadata information."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"add profile",src:a(3042).Z,width:"1382",height:"767"})),(0,o.kt)("h2",{id:"supertype"},"Supertype"),(0,o.kt)("p",null,"To create a ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/legend-glossary/#supertype"},"supertype"),", let's create a new class called ",(0,o.kt)("inlineCode",{parentName:"p"},"LegalEntity"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Moving back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Firm")," class, go to the ",(0,o.kt)("kbd",null,"Super types")," tab and click the ",(0,o.kt)("kbd",null,"+")," icon.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"LegalEntity")," class from the dropdown."),(0,o.kt)("p",{parentName:"li"},"The model visualization on the left now shows the ",(0,o.kt)("strong",{parentName:"p"},"LegalEntity")," class as a super type of ",(0,o.kt)("strong",{parentName:"p"},"Firm"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add a super type",src:a(9996).Z,width:"1385",height:"767"})),(0,o.kt)("h2",{id:"more"},"More"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/showcases/showcase-projects"},"Showcase projects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/overview/legend-features"},"Legend Features")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/overview/legend-glossary"},"Legend Glossary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/legend-language"},"Reference documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/studio-workspace"},"Studio tutorials")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/query-builder"},"Query tutorials"))))}m.isMDXComponent=!0},9996:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add-super-type-47899e4dfffa1f5f376b4ec605fb064b.gif"},3042:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-a-profile-1f34f008d2c8f1d857813e89f7d1cb2a.gif"}}]);