"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(7462),s=n(3366),i=(n(7294),n(3905)),a=["components"],o={id:"studio-servicestore",title:"Service Store",sidebar_label:"Service Store"},l=void 0,c={unversionedId:"tutorials/studio-servicestore",id:"tutorials/studio-servicestore",title:"Service Store",description:"This tutorial demonstrates the use of the Service Store feature.",source:"@site/../docs/tutorials/studio-servicestore.md",sourceDirName:"tutorials",slug:"/tutorials/studio-servicestore",permalink:"/docs/tutorials/studio-servicestore",draft:!1,tags:[],version:"current",frontMatter:{id:"studio-servicestore",title:"Service Store",sidebar_label:"Service Store"},sidebar:"docs",previous:{title:"Persistence",permalink:"/docs/tutorials/studio-persistence"},next:{title:"Studio Tests",permalink:"/docs/tutorials/studio-tests"}},p={},d=[{value:"Requirements",id:"requirements",level:3},{value:"Showcase project",id:"showcase-project",level:3},{value:"Overview",id:"overview",level:2},{value:"1. Basic modeling",id:"1-basic-modeling",level:2},{value:"2. Service Store",id:"2-service-store",level:2},{value:"3. Binding",id:"3-binding",level:2},{value:"4. Mapping",id:"4-mapping",level:2},{value:"5. Connection",id:"5-connection",level:2},{value:"6. Legend Service",id:"6-legend-service",level:2},{value:"7. Execution",id:"7-execution",level:2},{value:"Reference",id:"reference",level:2},{value:"Code",id:"code",level:2},{value:"More",id:"more",level:2}],u={toc:d},h="wrapper";function m(e){var t=e.components,o=(0,s.Z)(e,a);return(0,i.kt)(h,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial demonstrates the use of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/overview/legend-features/#service-store"},"Service Store")," feature."),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/installation-guide"},"installation of Legend")," with the following components:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Studio "),(0,i.kt)("li",{parentName:"ul"},"Engine "),(0,i.kt)("li",{parentName:"ul"},"SDLC"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Familiarity with the following ",(0,i.kt)("a",{parentName:"p",href:"/docs/overview/legend-features"},"Legend concepts"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Data modeling with classes, associations "),(0,i.kt)("li",{parentName:"ul"},"Data modeling with stores, mappings, connections and runtimes "),(0,i.kt)("li",{parentName:"ul"},"Data modeling with Legend services ")))),(0,i.kt)("h3",{id:"showcase-project"},"Showcase project"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/showcases/showcase-projects/#service-store"},"Service Store showcase project")," "),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In Legend, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Store"),' is a "system" that stores data. A common store is a relational database like say Postgres. '),(0,i.kt)("p",null,"But data is stored and served by other systems that are not databases. A ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceStore"),' treats a REST/HTTP based API (or "service") as a store of data.'),(0,i.kt)("p",null,"This allows users to model and access data the same way irrespective of whether the data is from a relational database or a REST API.  "),(0,i.kt)("p",null,"With this definition in place, we can query a GraphQL server that implements the above types, as follows :"),(0,i.kt)("h2",{id:"1-basic-modeling"},"1. Basic modeling"),(0,i.kt)("p",null,"We start with a simple model of ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"Repositories"),". This tutorial demonstrates how we map these logical concepts to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest?apiVersion=2022-11-28"},"Github API"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// A user is associated with one/more repositories\n\nClass legend::showcase::servicestore::models::Repository\n{\n  id: Integer[1];\n  name: String[1];\n  full_name: String[1];\n  private: Boolean[1];\n}\n\nClass legend::showcase::servicestore::models::User\n{\n  name: String[0..1];\n  email: String[0..1];\n  login: String[1];\n  id: Integer[1];\n  node_id: String[1];\n  avatar_url: String[1];\n  gravatar_id: String[1];\n  // elided ... \n  site_admin: Boolean[1];\n  starred_at: String[0..1];\n}\n\nAssociation legend::showcase::servicestore::models::UserRepository\n{\n  user: legend::showcase::servicestore::models::User[0..1];\n  repositories: legend::showcase::servicestore::models::Repository[*];\n}\n")),(0,i.kt)("h2",{id:"2-service-store"},"2. Service Store"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceStore"),' DSL is how we describe the logical shape of an API or "service" that provides data.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"###ServiceStore\nServiceStore legend::showcase::servicestore::store::GithubApis\n(\n  Service UsersApi\n  (\n    path : '/users';\n    method : GET;\n    response : [legend::showcase::servicestore::models::User <- legend::showcase::servicestore::store::GithubApisBinding];\n    security : [];\n  )\n  ServiceGroup UserApiGroup\n  (\n    path : '/users';\n\n    Service UserApi\n    (\n      path : '/{username}';\n      method : GET;\n      parameters :\n      (\n        username : String ( location = path )\n      );\n      response : legend::showcase::servicestore::models::User <- legend::showcase::servicestore::store::GithubApisBinding;\n      security : [];\n    )\n    Service RepoApi\n    (\n      path : '/{username}/repos';\n      method : GET;\n      parameters :\n      (\n        username : String ( location = path )\n      );\n      response : legend::showcase::servicestore::models::Repository <- legend::showcase::servicestore::store::GithubApisBinding;\n      security : [];\n    )\n  )\n)\n")),(0,i.kt)("p",null,'In the example above, we declare a "service" called ',(0,i.kt)("inlineCode",{parentName:"p"},"UserApi")," that is accessible over an HTTP path ",(0,i.kt)("inlineCode",{parentName:"p"},"/users/{username}")," and returns data that can be mapped to the logical model class ",(0,i.kt)("inlineCode",{parentName:"p"},"legend::showcase::servicestore::models::User")),(0,i.kt)("h2",{id:"3-binding"},"3. Binding"),(0,i.kt)("p",null,"A binding is how we bind to an external data format. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," definition points to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Binding"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Service UserApi\n    (\n      path : '/{username}';\n      method : GET;\n      parameters :\n      (\n        username : String ( location = path )\n      );\n      response : legend::showcase::servicestore::models::User <- legend::showcase::servicestore::store::GithubApisBinding;\n      security : [];\n    )\n")),(0,i.kt)("p",null,'The definition of the binding declares that the "service" returns data of type JSON.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"###ExternalFormat\nBinding legend::showcase::servicestore::store::GithubApisBinding\n{\n  contentType: 'application/json';\n  modelIncludes: [\n    legend::showcase::servicestore::models::User,\n    legend::showcase::servicestore::models::Repository\n  ];\n}\n")),(0,i.kt)("h2",{id:"4-mapping"},"4. Mapping"),(0,i.kt)("p",null,"Just as with other stores in Legend, the logical model is mapped to the logical definition of the store."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"###Mapping\nMapping legend::showcase::servicestore::mapping::GithubAPIMapping\n(\n  *legend::showcase::servicestore::models::User[user]: ServiceStore\n  {\n    ~service [legend::showcase::servicestore::store::GithubApis] UsersApi\n    ~service [legend::showcase::servicestore::store::GithubApis] UserApiGroup.UserApi\n    (\n      ~request\n      (\n        parameters\n        (\n          username = $this.login\n        )\n      )\n    )\n  }\n  // elided ...\n  \n  legend::showcase::servicestore::models::UserRepository: XStore\n  {\n    user[repo, user]: $that.login == $this.username,\n    repositories[user, repo]: $that.username == $this.login\n  }\n)\n")),(0,i.kt)("p",null,"In the example above, we map the logical class ",(0,i.kt)("inlineCode",{parentName:"p"},"legend::showcase::servicestore::models::User")," to the data returned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"UsersApi"),". "),(0,i.kt)("p",null,"We also map the class to the data returned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserApiGroup.UserApi"),". Since this service definition accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," parameter, we map the parameter as well. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TODO - Update the explanation of parameter mapping and also describe XStore\n")),(0,i.kt)("h2",{id:"5-connection"},"5. Connection"),(0,i.kt)("p",null,'So far we have modeled a logical "service". Using the ',(0,i.kt)("inlineCode",{parentName:"p"},"Connection")," we describe a specific physical service. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"###Connection\nServiceStoreConnection legend::showcase::servicestore::connection::GithubConnection\n{\n  store: legend::showcase::servicestore::store::GithubApis;\n  baseUrl: 'https://api.github.com';\n}\n")),(0,i.kt)("p",null,"In the above example, we declare that we want to consume data from the Github API hosted at ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.github.com"),"."),(0,i.kt)("p",null,"For production use cases, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connection")," should include a definition of the authentication protocol to be used when connecting to the service."),(0,i.kt)("h2",{id:"6-legend-service"},"6. Legend Service"),(0,i.kt)("p",null,'Finally, we have a "Legend Service" that groups all the above concepts.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"###Service\nService legend::showcase::servicestore::service::FetchGithubUsers\n{\n  pattern: '/legend/showcase/servicestore/fetchUsers';\n  owners:\n  [\n    'hardik121998'\n  ];\n  documentation: '';\n  autoActivateUpdates: true;\n  execution: Single\n  {\n    query: |legend::showcase::servicestore::models::User.all()->graphFetch(#{legend::showcase::servicestore::models::User{avatar_url,email,events_url,followers_url,following_url,gists_url,gravatar_id,html_url,id,login,name,node_id,organizations_url,received_events_url,repos_url,site_admin,starred_at,starred_url,subscriptions_url,type,url}}#)->serialize(#{legend::showcase::servicestore::models::User{avatar_url,email,events_url,followers_url,following_url,gists_url,gravatar_id,html_url,id,login,name,node_id,organizations_url,received_events_url,repos_url,site_admin,starred_at,starred_url,subscriptions_url,type,url}}#);\n    mapping: legend::showcase::servicestore::mapping::GithubAPIMapping;\n    runtime: legend::showcase::servicestore::runtime::ServiceStoreRuntime;\n  }\n")),(0,i.kt)("h2",{id:"7-execution"},"7. Execution"),(0,i.kt)("p",null,"When the above service is executed, Legend connects to the Github API via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connection"),", fetches the data and maps it to the logical domain classes.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Service UI",src:n(4008).Z,width:"1288",height:"851"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Service Execution",src:n(3054).Z,width:"1319",height:"946"})),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,"Reference documentation on the design/implementation of the ServiceStore integration can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/finos/legend-engine/tree/master/docs/store/extensions/ServiceStore"},"here"),"."),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("p",null,"Legend Engine source code is in the Maven modules named ",(0,i.kt)("inlineCode",{parentName:"p"},"legend-engine-xt-servicestore-XXXX")),(0,i.kt)("h2",{id:"more"},"More"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/showcases/showcase-projects"},"Showcase projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/overview/legend-features"},"Legend Features")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/overview/legend-glossary"},"Legend Glossary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/legend-language"},"Reference documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/studio-workspace"},"Studio tutorials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/query-builder"},"Query tutorials"))))}m.isMDXComponent=!0},3054:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/service-execution-45a869ecbd550009f3ea2bff29841dd3.png"},4008:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/service-12144f4991e835195d2ec93c646328fc.png"}}]);