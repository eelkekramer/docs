"use strict";(self.webpackChunkelfsquad=self.webpackChunkelfsquad||[]).push([[727],{7169:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r=["components"],u={title:"Authentication",sidebar_position:1,sidebar_label:"Overview",slug:"./"},s=void 0,l={unversionedId:"Authentication/index",id:"Authentication/index",isDocsHomePage:!1,title:"Authentication",description:"There are three ways to authenticate with the Elfsquad API.",source:"@site/docs/Authentication/index.md",sourceDirName:"Authentication",slug:"/Authentication/",permalink:"/docs/Authentication/",editUrl:"https://github.com/elfsquad/docs/edit/master/docs/Authentication/index.md",version:"current",sidebarPosition:1,frontMatter:{title:"Authentication",sidebar_position:1,sidebar_label:"Overview",slug:"./"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/Introduction"},next:{title:"Client Credentials",permalink:"/docs/Authentication/client-credentials"}},c=[{value:"Anonymous",id:"anonymous",children:[]},{value:"Client Credentials",id:"client-credentials",children:[]},{value:"User authentication",id:"user-authentication",children:[]}],h={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are three ways to authenticate with the Elfsquad API."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Anonymous - for creating custom configurator implements where users are not required to log in."),(0,o.kt)("li",{parentName:"ul"},"Client Credentials authentication - for creating data intgegrations."),(0,o.kt)("li",{parentName:"ul"},"User authentication - for creating custom configurator implements where users are required to log in.")),(0,o.kt)("h2",{id:"anonymous"},"Anonymous"),(0,o.kt)("p",null,"When creating a custom configurator implementation in which you want to allow anonymous users, you can use this authentication method. "),(0,o.kt)("p",null,"The anonymous authentication method only allows calling endpoints in the ",(0,o.kt)("a",{parentName:"p",href:"/apis/configurator/"},"configurator API"),"."),(0,o.kt)("p",null,"Authentication to the API can be performed via a custom HTTP header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"x-elfsquad-id:  {TENANT_ID}\n")),(0,o.kt)("p",null,"The Tenant ID can be found at the bottom of the submenu in the ",(0,o.kt)("a",{parentName:"p",href:"https://ems.elfsquad.io/integration"},"integrations page"),"."),(0,o.kt)("h2",{id:"client-credentials"},"Client Credentials"),(0,o.kt)("p",null,"For integration flows that do not require requests that are issued by a user, you can use this authentication method. For example when creating automation tooling and data integrations."),(0,o.kt)("p",null,"The client credentials authentication method can be used in all available APIs."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"client-credentials"},"Step by step tutorial")),(0,o.kt)("h2",{id:"user-authentication"},"User authentication"),(0,o.kt)("p",null,"For integration flows that require requests that are issued by a user, you can use this authentication method. For example when creating a custom showroom that requires the user to be logged in."),(0,o.kt)("p",null,"The user authentication method can be used in all available APIs."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"user-authentication"},"Step by step tutorial")))}d.isMDXComponent=!0}}]);