"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[7481],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(o,".").concat(c)]||u[c]||y[c]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[u]="string"==typeof t?t:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20323:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={},i="Get Users Ordered By Username",s={type:"api",id:"get-users-ordered-by-username-1",unversionedId:"get-users-ordered-by-username-1",title:"Get Users Ordered By Username",description:"",slug:"/get-users-ordered-by-username-1",frontMatter:{},api:{tags:["frontend_users"],operationId:"get_users_ordered_by_username_api_v1_frontend_users__get",parameters:[{required:!1,schema:{title:"Api Client Id",type:"string",format:"uuid"},name:"api_client_id",in:"query"},{required:!1,schema:{title:"Gte Username",type:"string"},name:"gte_username",in:"query"},{required:!1,schema:{title:"Gt Id",type:"string",format:"uuid"},name:"gt_id",in:"query"},{required:!1,schema:{title:"Lte Username",type:"string"},name:"lte_username",in:"query"},{required:!1,schema:{title:"Lt Id",type:"string",format:"uuid"},name:"lt_id",in:"query"},{required:!1,schema:{title:"Search Text",type:"string"},name:"search_text",in:"query"},{required:!1,schema:{title:"Auth Method",type:"string"},name:"auth_method",in:"query"},{required:!1,schema:{title:"Max Count",maximum:1e4,exclusiveMinimum:0,type:"integer",default:100},name:"max_count",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Get Users Ordered By Username Api V1 Frontend Users  Get",type:"array",items:{title:"FrontEndUser",required:["id","display_name","auth_method","user_id","enabled","deleted","notes","show_on_leaderboard"],type:"object",properties:{id:{title:"Id",type:"string"},display_name:{title:"Display Name",type:"string"},auth_method:{title:"Auth Method",enum:["discord","local","system"],type:"string"},user_id:{title:"User Id",type:"string",format:"uuid"},enabled:{title:"Enabled",type:"boolean"},deleted:{title:"Deleted",type:"boolean"},notes:{title:"Notes",type:"string"},created_date:{title:"Created Date",type:"string",format:"date-time"},show_on_leaderboard:{title:"Show On Leaderboard",type:"boolean"},streak_days:{title:"Streak Days",type:"integer"},streak_last_day_date:{title:"Streak Last Day Date",type:"string",format:"date-time"},last_activity_date:{title:"Last Activity Date",type:"string",format:"date-time"}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},deprecated:!0,security:[{"api-key":[]},{"api-key":[]}],description:"Get Users Ordered By Username",method:"get",path:"/api/v1/frontend_users/",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Users Ordered By Username",description:{type:"text/plain"},url:{path:["api","v1","frontend_users",""],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"api_client_id",value:"<uuid>"},{description:{content:"",type:"text/plain"},key:"gte_username",value:"<string>"},{description:{content:"",type:"text/plain"},key:"gt_id",value:"<uuid>"},{description:{content:"",type:"text/plain"},key:"lte_username",value:"<string>"},{description:{content:"",type:"text/plain"},key:"lt_id",value:"<uuid>"},{description:{content:"",type:"text/plain"},key:"search_text",value:"<string>"},{description:{content:"",type:"text/plain"},key:"auth_method",value:"<string>"},{description:{content:"",type:"text/plain"},key:"max_count",value:"100"}],variable:[]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-users-ordered-by-username-1",previous:{title:"Query User Stats Timeframe Window",permalink:"/Open-Assistant/api/query-user-stats-timeframe-window"},next:{title:"Query Frontend User",permalink:"/Open-Assistant/api/query-frontend-user"}},o=[],d={toc:o},p="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-users-ordered-by-username"},"Get Users Ordered By Username"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"deprecated")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This endpoint has been deprecated and may be removed in future versions of the API."))),(0,r.kt)("p",null,"Get Users Ordered By Username"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"api_client_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"gte_username"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Gte Username"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"gt_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"lte_username"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Lte Username"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"lt_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"search_text"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Search Text"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"auth_method"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Auth Method"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"max_count"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Max Count"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," 0 < value \u2264 10000")))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful Response"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"display_name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Display Name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"auth_method"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Auth Method"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"discord"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"system"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"user_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"enabled"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Enabled"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"deleted"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Deleted"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"notes"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Notes"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"created_date"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"show_on_leaderboard"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Show On Leaderboard"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"streak_days"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Streak Days"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"streak_last_day_date"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"last_activity_date"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time")))))))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"422")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation Error"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"detail"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"loc"),(0,r.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"msg"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}u.isMDXComponent=!0}}]);