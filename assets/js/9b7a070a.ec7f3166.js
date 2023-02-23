"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),g=a,v=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},892:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"legend-overview",title:"What is Legend?",sidebar_label:"What is Legend?"},s=void 0,d={unversionedId:"overview/legend-overview",id:"overview/legend-overview",title:"What is Legend?",description:"Legend is a data platform that provides a single place to access data via APIs or self-service queries, with built-in governance!",source:"@site/../docs/overview/legend-overview.md",sourceDirName:"overview",slug:"/overview/legend-overview",permalink:"/docs/overview/legend-overview",draft:!1,tags:[],version:"current",frontMatter:{id:"legend-overview",title:"What is Legend?",sidebar_label:"What is Legend?"},sidebar:"docs",next:{title:"Legend Features",permalink:"/docs/overview/legend-features"}},c={},u=[{value:"Legend Products",id:"legend-products",level:2},{value:"Studio",id:"studio",level:3},{value:"Query",id:"query",level:3},{value:"Services",id:"services",level:3},{value:"Engine",id:"engine",level:3},{value:"SDLC",id:"sdlc",level:3}],p={toc:u},g="wrapper";function v(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(g,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Legend is a data platform that provides a single place to access data via APIs or self-service queries, with built-in governance!"),(0,i.kt)("p",null,"Build a graph of information by ",(0,i.kt)("strong",{parentName:"p"},"describing and connecting")," data in Legend data models. They foster a common data vocabulary and help everyone understand the data better. Being able to navigate the entire graph of information using terms that make sense and are agreed upon, makes it so much easier to ",(0,i.kt)("strong",{parentName:"p"},"find meaningful data"),"."),(0,i.kt)("p",null,"Legend data models connect to all type of data. Once you found the data you were looking for, ",(0,i.kt)("strong",{parentName:"p"},"query")," away with a simple click of a button! With Legend you can access data self-service, understand it and experiment with it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transform")," the shape of data by projecting the graph of information into a flat structure to unlock additional query methods. When ready, leverage Legend APIs to reliably and systematically ",(0,i.kt)("strong",{parentName:"p"},"share")," data with other applications. It's also easy to build customized user interfaces with those APIs increasing both developer productivity and time to market of your data products."),(0,i.kt)("p",null,"Data powered by Legend ensures ",(0,i.kt)("strong",{parentName:"p"},"data quality by design"),". Automated lineage captures how data is transformed along the way. You know where your data is coming from, starting with the raw data source all the way up to the productized data service or user query.\nAll data models in Legend are 100% codified (and SDLC-backed!) in the Legend language, which can express structural and non-structural quality criteria for additional validations."),(0,i.kt)("p",null,"Legend can elevate all sort of data-driven processes, such as creating client, financial or regulatory reports, building applications or powering data analytics and predications."),(0,i.kt)("h2",{id:"legend-products"},"Legend Products"),(0,i.kt)("h3",{id:"studio"},"Studio"),(0,i.kt)("p",null,"Legend Studio is a data model editor that allows you to describe, connect, and visualize your data."),(0,i.kt)("h3",{id:"query"},"Query"),(0,i.kt)("p",null,"Legend Query enables users to access modelled data in Legend, using a hosted graphical, drag-and-drop, self-service user interface. "),(0,i.kt)("h3",{id:"services"},"Services"),(0,i.kt)("p",null,"Legend Services can be used to share high quality data reliably with other applications via APIs. Any self-service query can be promoted to a production-quality Legend service, fully backed by SDLC."),(0,i.kt)("h3",{id:"engine"},"Engine"),(0,i.kt)("p",null,"Legend Engine is the execution engine for Legend."),(0,i.kt)("h3",{id:"sdlc"},"SDLC"),(0,i.kt)("p",null,"The Legend SDLC Server provides a rich REST API allowing users to safely manage metadata. Most SDLCs are file- and text-centric, but the Legend SDLC is model-centric. That is, users interact with model entities rather than with files and folders."))}v.isMDXComponent=!0}}]);