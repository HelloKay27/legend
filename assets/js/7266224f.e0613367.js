"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8612],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),v=n,y=c["".concat(s,".").concat(v)]||c[v]||u[v]||o;return r?a.createElement(y,l(l({ref:t},d),{},{components:r})):a.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"data-modeling-concepts",title:"Elements of a Data Model",sidebar_label:"Data Modeling"},s=void 0,p={unversionedId:"overview/data-modeling-concepts",id:"overview/data-modeling-concepts",title:"Elements of a Data Model",description:"Data models allow you to describe your data and data relationships.",source:"@site/../docs/overview/data-modeling-concepts.md",sourceDirName:"overview",slug:"/overview/data-modeling-concepts",permalink:"/docs/overview/data-modeling-concepts",draft:!1,tags:[],version:"current",frontMatter:{id:"data-modeling-concepts",title:"Elements of a Data Model",sidebar_label:"Data Modeling"}},d={},c=[{value:"Class",id:"class",level:2},{value:"Property",id:"property",level:2},{value:"Derived property",id:"derived-property",level:2},{value:"Tagged value",id:"tagged-value",level:2},{value:"Stereotype",id:"stereotype",level:2},{value:"Enumeration",id:"enumeration",level:2},{value:"Constraint",id:"constraint",level:2},{value:"Super type",id:"super-type",level:2},{value:"Data Types",id:"data-types",level:2}],u={toc:c},v="wrapper";function y(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)(v,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data models allow you to describe your data and data relationships. "),(0,o.kt)("h2",{id:"class"},"Class"),(0,o.kt)("p",null,"Classes define a business concept."),(0,o.kt)("h2",{id:"property"},"Property"),(0,o.kt)("p",null,"Properties are components of classes that define the attributes of a business concept. Properties can be both primitives (like strings or integers) or other properties. Use properties in a class to define attributes of the business concept."),(0,o.kt)("h2",{id:"derived-property"},"Derived property"),(0,o.kt)("p",null,"Derived properties use functions to operate on other attributes in the data model."),(0,o.kt)("h2",{id:"tagged-value"},"Tagged value"),(0,o.kt)("p",null,"Tagged values allow you to add context to your data model. Tagged values can be added at the class level and at the property level."),(0,o.kt)("h2",{id:"stereotype"},"Stereotype"),(0,o.kt)("p",null,"Stereotypes allow you to extend metadata information about a model."),(0,o.kt)("h2",{id:"enumeration"},"Enumeration"),(0,o.kt)("p",null,"An enumeration is a model attribute that has a finite list of values."),(0,o.kt)("h2",{id:"constraint"},"Constraint"),(0,o.kt)("p",null,"A data model has built-in governance features, called ",(0,o.kt)("em",{parentName:"p"},"data quality controls"),". You create data quality controls every time you define a model. Constraints are governance tools added on top of quality controls. Use constraints to define a validation or condition on the model that's expected to be met."),(0,o.kt)("h2",{id:"super-type"},"Super type"),(0,o.kt)("p",null,"Super types show a relationship between classes or business concepts within a model. Add a super type to the model to show a hierarchical relationship between classes or business concepts. "),(0,o.kt)("h2",{id:"data-types"},"Data Types"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"COMING SOON")))}y.isMDXComponent=!0}}]);