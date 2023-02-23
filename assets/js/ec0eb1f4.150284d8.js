"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3563],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return a?i.createElement(v,s(s({ref:t},d),{},{components:a})):i.createElement(v,s({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=a(7462),r=a(3366),n=(a(7294),a(3905)),s=["components"],o={id:"services-service",title:"Create and Consume Services",sidebar_label:"Services"},l=void 0,c={unversionedId:"tutorials/services-service",id:"tutorials/services-service",title:"Create and Consume Services",description:"Create a Service",source:"@site/../docs/tutorials/services-service.md",sourceDirName:"tutorials",slug:"/tutorials/services-service",permalink:"/docs/tutorials/services-service",draft:!1,tags:[],version:"current",frontMatter:{id:"services-service",title:"Create and Consume Services",sidebar_label:"Services"},sidebar:"docs",previous:{title:"Connection",permalink:"/docs/tutorials/services-connection"},next:{title:"Generate Files",permalink:"/docs/tutorials/studio-file-generation"}},d={},u=[{value:"Create a Service",id:"create-a-service",level:2},{value:"General Tab",id:"general-tab",level:3},{value:"Execution Tab",id:"execution-tab",level:3},{value:"Tests Tab",id:"tests-tab",level:3},{value:"See features in action",id:"see-features-in-action",level:2},{value:"Create a Service",id:"create-a-service-1",level:3},{value:"Create a multi execution service",id:"create-a-multi-execution-service",level:3},{value:"Create a Service Test",id:"create-a-service-test",level:2},{value:"Create connection test data",id:"create-connection-test-data",level:3},{value:"Relational",id:"relational",level:3},{value:"External Format (M2M)",id:"external-format-m2m",level:3},{value:"Data element",id:"data-element",level:3},{value:"Service Store",id:"service-store",level:4},{value:"Relational",id:"relational-1",level:2},{value:"Model to Model",id:"model-to-model",level:2},{value:"Service Store",id:"service-store-1",level:2},{value:"With Data Element",id:"with-data-element",level:2},{value:"With Parameters",id:"with-parameters",level:2},{value:"Promote a model-to-model mapping query to a service",id:"promote-a-model-to-model-mapping-query-to-a-service",level:2},{value:"Promote a relational-to-model query to a service",id:"promote-a-relational-to-model-query-to-a-service",level:2},{value:"Consume a Service",id:"consume-a-service",level:2},{value:"Creating and Consuming a Service Execution JAR file",id:"creating-and-consuming-a-service-execution-jar-file",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Showcase project",id:"showcase-project",level:4},{value:"1. Service Execution Primer",id:"1-service-execution-primer",level:3},{value:"2. Service Execution Class",id:"2-service-execution-class",level:3},{value:"3. Building a Service Execution Jar",id:"3-building-a-service-execution-jar",level:3},{value:"4. Using a Service Execution Jar",id:"4-using-a-service-execution-jar",level:3},{value:"Retrieve Services Metadata via API Endpoints",id:"retrieve-services-metadata-via-api-endpoints",level:2},{value:"See features in action",id:"see-features-in-action-1",level:2},{value:"More",id:"more",level:2}],p={toc:u},m="wrapper";function v(e){var t=e.components,o=(0,r.Z)(e,s);return(0,n.kt)(m,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-a-service"},"Create a Service"),(0,n.kt)("p",null,"Build services on top of data queries to consume modeled data systematically. To create a service select ",(0,n.kt)("kbd",null,"New Service")," from the drop down menu to launch the ",(0,n.kt)("a",{parentName:"p",href:"../concepts/legend-concepts.md/#service-editor"},"Service Editor")),(0,n.kt)("h3",{id:"general-tab"},"General Tab"),(0,n.kt)("p",null,"In the ",(0,n.kt)("kbd",null,"General")," tab of the Service Editor, users can specify metadata of their service including the service URL, documentation and owners. URL parameters can be directly defined within the {} sytnax."),(0,n.kt)("p",null,"   ",(0,n.kt)("img",{alt:"Service Editor - General",src:a(623).Z,width:"1249",height:"1146"})),(0,n.kt)("h3",{id:"execution-tab"},"Execution Tab"),(0,n.kt)("p",null,"In the execution tab, users can create and edit their service query. By hitting the pencil icon button, users can edit the query using the ",(0,n.kt)("a",{parentName:"p",href:"../concepts/legend-concepts.md/#query-builder"},"Query Builder"),". Users can make changes to the query either in the user-friendly form mode or in text mode. "),(0,n.kt)("p",null,"Additonally the bottom panel lets you define your execution context which represents the mapping and runtime used when executing your query."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Multi")," Executions lets you use a service parameter to decide what execution context (mapping, runtime) to use. You can switch between multi and single using the top right icon on the context panel. "),(0,n.kt)("p",null,"   ",(0,n.kt)("img",{alt:"Service Editor - Execution",src:a(8714).Z,width:"1254",height:"1143"})),(0,n.kt)("h3",{id:"tests-tab"},"Tests Tab"),(0,n.kt)("p",null,"This panel lets you define tests for the services you write by specifying test data, serialization format of your test and the assertions. "),(0,n.kt)("h2",{id:"see-features-in-action"},"See features in action"),(0,n.kt)("h3",{id:"create-a-service-1"},"Create a Service"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a Service",src:a(851).Z,width:"1280",height:"720"})),(0,n.kt)("h3",{id:"create-a-multi-execution-service"},"Create a multi execution service"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a multi execution service",src:a(4014).Z,width:"1280",height:"720"})),(0,n.kt)("h2",{id:"create-a-service-test"},"Create a Service Test"),(0,n.kt)("h3",{id:"create-connection-test-data"},"Create connection test data"),(0,n.kt)("p",null,"Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"generate")," button to automatically generate test data if possible. Otherwise, manually create test data."),(0,n.kt)("h3",{id:"relational"},"Relational"),(0,n.kt)("p",null,"Add relational data tables based on databases to which the service's mapping connects. "),(0,n.kt)("p",null,"It is unnecessary to provide all columns with test data. The columns used in the service, however, require test data. Besides, the primary keys have to be distinct.\n",(0,n.kt)("img",{alt:"Create connections test data - Relational",src:a(9510).Z,width:"3482",height:"1984"})),(0,n.kt)("h3",{id:"external-format-m2m"},"External Format (M2M)"),(0,n.kt)("p",null,"Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"generate")," button to automatically generate test data if possible. Otherwise, manually provide test data for the source class' properties that serve as the foundation for the properties used in the service. e.g. As shown in the video, _Firm's name is used in the service, which comes from Firm's legalName. Therefore, manually providing test data for legalName will be sufficient if the ",(0,n.kt)("inlineCode",{parentName:"p"},"generate")," button is not working.\n",(0,n.kt)("img",{alt:"Create connections test data - Relational",src:a(4233).Z,width:"3584",height:"2026"})),(0,n.kt)("h3",{id:"data-element"},"Data element"),(0,n.kt)("p",null,"More examples of different types of Data element creation could be found ",(0,n.kt)("a",{parentName:"p",href:"../tutorials/studio-create-test-data"},"here"),".\n",(0,n.kt)("img",{alt:"Create connections test data - Data Element",src:a(132).Z,width:"3482",height:"1984"})),(0,n.kt)("h4",{id:"service-store"},"Service Store"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create connections test data - Data Element",src:a(5346).Z,width:"3584",height:"2026"})),(0,n.kt)("h2",{id:"relational-1"},"Relational"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a service test - Relational",src:a(9114).Z,width:"1280",height:"720"})),(0,n.kt)("h2",{id:"model-to-model"},"Model to Model"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a service test - M2M",src:a(5479).Z,width:"1280",height:"720"})),(0,n.kt)("h2",{id:"service-store-1"},"Service Store"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a service test - ServiceStore",src:a(144).Z,width:"768",height:"380"})),(0,n.kt)("h2",{id:"with-data-element"},"With Data Element"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a service test - DataElement",src:a(144).Z,width:"768",height:"380"})),(0,n.kt)("h2",{id:"with-parameters"},"With Parameters"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create a service test - Parameters",src:a(2601).Z,width:"1280",height:"720"})),(0,n.kt)("h2",{id:"promote-a-model-to-model-mapping-query-to-a-service"},"Promote a model-to-model mapping query to a service"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a model-to-model mapping (find instructions here) and select the ",(0,n.kt)("kbd",null,(0,n.kt)("strong",{parentName:"p"},"Promote to Service"))," icon.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add a name for the service and hit create to launch the Service Editor."))),(0,n.kt)("h2",{id:"promote-a-relational-to-model-query-to-a-service"},"Promote a relational-to-model query to a service"),(0,n.kt)("p",null,"This feature is not yet supported."),(0,n.kt)("h2",{id:"consume-a-service"},"Consume a Service"),(0,n.kt)("p",null,"Consume data services via ",(0,n.kt)("kbd",null,"executable service JAR files"),". As part of the project build, an executable JAR file is generated for each service defined in the project. The executable service JAR file will be published in the Gitlab project that stores the data model code. The JAR file can be consumed by any Java application."),(0,n.kt)("h2",{id:"creating-and-consuming-a-service-execution-jar-file"},"Creating and Consuming a Service Execution JAR file"),(0,n.kt)("h3",{id:"introduction"},"Introduction"),(0,n.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Legend Studio project with a ",(0,n.kt)("inlineCode",{parentName:"li"},"Service")," model"),(0,n.kt)("li",{parentName:"ul"},"Familiarity with the following Legend concepts :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Data modeling with classes, associations "),(0,n.kt)("li",{parentName:"ul"},"Data modeling with stores, mappings, connections and runtimes "),(0,n.kt)("li",{parentName:"ul"},"Data modeling with Legend services")))),(0,n.kt)("h4",{id:"showcase-project"},"Showcase project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/showcases/showcase-projects/#service-execution-jar"},"Service Execution JAR showcase project"),"  ")),(0,n.kt)("h3",{id:"1-service-execution-primer"},"1. Service Execution Primer"),(0,n.kt)("p",null,'A "service execution" jar is a Java library generated from a Legend model.'),(0,n.kt)("p",null,"Consider the service model below. It is a grouping of a data access query, a mapping to\na physical (relational) store and a specific database connection."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Service service::persons\n{\n  pattern: '/api/persons';\n  documentation: '';\n  autoActivateUpdates: true;\n  execution: Single\n  {\n    query: |domain::Person.all()->project([x|$x.name, x|$x.firmId], ['Name', 'FirmId']);\n    mapping: mapping::firmperson;\n    runtime: runtime::firmperson;\n  }\n}\n")),(0,n.kt)("h3",{id:"2-service-execution-class"},"2. Service Execution Class"),(0,n.kt)("p",null,"Once modeled in Legend, the Legend project's SDLC infrastucture consumes this model and generates a Java class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"personsService service = new personsService();\n")),(0,n.kt)("p",null,"When executed, this class connects to the database specified in the model, queries and returns the data."),(0,n.kt)("h3",{id:"3-building-a-service-execution-jar"},"3. Building a Service Execution Jar"),(0,n.kt)("p",null,"In the simplest case, a service execution jar is autogenerated by the Legend project's SDLC."),(0,n.kt)("p",null,"To generate a service execution jar using Legend SDLC:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a Legend Studio project "),(0,n.kt)("li",{parentName:"ul"},"Use Legend Studio to create a Legend model. This model should include a service definition as shown above"),(0,n.kt)("li",{parentName:"ul"},"Use Legend Studio SDLC controls or native Gitlab controls to merge your model to the master branch"),(0,n.kt)("li",{parentName:"ul"},"Once merged, the Gitlab pipeline configured by Legend SDLC runs a code generation plugin which generate a service execution jar"),(0,n.kt)("li",{parentName:"ul"},"The Gitlab pipeline also publishes the generated jar to a Gitlab Maven registry.")),(0,n.kt)("p",null,"As a concrete example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Legend Studio Project ",(0,n.kt)("a",{parentName:"li",href:"https://legend.finos.org/studio/-/view/UAT-29500652"},"https://legend.finos.org/studio/-/view/UAT-29500652")),(0,n.kt)("li",{parentName:"ul"},"Legend Studio Project Pipeline ",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/finosfoundation/legend/showcase/legend-showcase-project2/-/pipelines"},"https://gitlab.com/finosfoundation/legend/showcase/legend-showcase-project2/-/pipelines")),(0,n.kt)("li",{parentName:"ul"},"Legend SDLC Generated Artifacts ",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/finosfoundation/legend/showcase/legend-showcase-project2/-/packages"},"https://gitlab.com/finosfoundation/legend/showcase/legend-showcase-project2/-/packages"))),(0,n.kt)("h3",{id:"4-using-a-service-execution-jar"},"4. Using a Service Execution Jar"),(0,n.kt)("p",null,"Just as with other stores in Legend, the logical model is mapped to the logical definition of the store."),(0,n.kt)("p",null,"Once a jar has been created it can be consumed like any other jar in a Java application. See:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/finos/legend/blob/service-exec-jar-example/examples/service-execution-jar/legend-application/src/main/java/org/finos/legend/demo/app/LegendApplication.java"},"LegendApplication.java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/finos/legend/blob/service-exec-jar-example/examples/service-execution-jar/legend-application/src/test/java/org/finos/legend/demo/app/LegendApplicationTest.java"},"LegendApplicationTest.java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/finos/legend/blob/service-exec-jar-example/examples/service-execution-jar/legend-application/src/test/java/org/finos/legend/demo/app/LegendExecutionPlanTest.java"},"LegendExecutionPlanTest.java"))),(0,n.kt)("h2",{id:"retrieve-services-metadata-via-api-endpoints"},"Retrieve Services Metadata via API Endpoints"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Coming soon.")),(0,n.kt)("h2",{id:"see-features-in-action-1"},"See features in action"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"consume a service",src:a(6450).Z,width:"1420",height:"789"})),(0,n.kt)("h2",{id:"more"},"More"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/showcases/showcase-projects"},"Showcase projects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/overview/legend-features"},"Legend Features")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/overview/legend-glossary"},"Legend Glossary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/reference/legend-language"},"Reference documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/tutorials/studio-workspace"},"Studio tutorials")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/tutorials/query-builder"},"Query tutorials"))))}v.isMDXComponent=!0},6450:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/consume-service-8781f5cae56f60e03eae91a2ce34e405.gif"},9510:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-a-relational-service-connection-test-data-ef10dc911fd80f75f6302631a284cf50.gif"},4233:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-a-service-connection-test-data-with-external-format-bd3742cba445cff908285033f9870596.gif"},5346:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-a-service-connection-test-data-with-service-store-728e766903fd9e66d256a7867293af36.gif"},132:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-a-service-connection-test-with-data-element-386f11b546bb8ec99ee72624ae33fd62.gif"},4014:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-a-service-multi-execution-b54c1b6466d23d879fc0fdbd487ca6fd.gif"},5479:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-a-service-test-m2m-0d4a28737676fcaac1536bd417e0ae22.gif"},2601:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-a-service-test-parameters-3887cdd617c578df911671375a8e1792.gif"},9114:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-a-service-test-relational-5ac27c0774930dd313195879bd46b995.gif"},144:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-a-service-test-servicestore-0903ed768698f715c5d25ec47eea9c5c.gif"},851:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-a-service-2e3b33f68f951ec71848ae0abcebebf6.gif"},8714:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/service-editor-execution-6c79513141b42742f081ff1cd56fe1b1.JPG"},623:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/service-editor-general-3de46605f1217c499e252b5f8669941a.JPG"}}]);