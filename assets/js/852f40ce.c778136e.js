"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[2949],{3905:(t,e,l)=>{l.d(e,{Zo:()=>u,kt:()=>k});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function s(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?s(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)l=s[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)l=s[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},y="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,s=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),y=p(l),c=r,k=y["".concat(o,".").concat(c)]||y[c]||d[c]||s;return l?n.createElement(k,a(a({ref:e},u),{},{components:l})):n.createElement(k,a({ref:e},u))}));function k(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=l.length,a=new Array(s);a[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[y]="string"==typeof t?t:r,a[1]=i;for(var p=2;p<s;p++)a[p]=l[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},80991:(t,e,l)=>{l.r(e),l.d(e,{contentTitle:()=>a,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=l(87462),r=(l(67294),l(3905));const s={},a="Query User Messages Cursor",i={type:"api",id:"query-user-messages-cursor",unversionedId:"query-user-messages-cursor",title:"Query User Messages Cursor",description:"",slug:"/query-user-messages-cursor",frontMatter:{},api:{tags:["users"],operationId:"query_user_messages_cursor_api_v1_users__user_id__messages_cursor_get",parameters:[{required:!0,schema:{title:"User Id",type:"string",format:"uuid"},name:"user_id",in:"path"},{required:!1,schema:{title:"Before",type:"string"},name:"before",in:"query"},{required:!1,schema:{title:"After",type:"string"},name:"after",in:"query"},{required:!1,schema:{title:"Only Roots",type:"boolean",default:!1},name:"only_roots",in:"query"},{required:!1,schema:{title:"Include Deleted",type:"boolean",default:!1},name:"include_deleted",in:"query"},{required:!1,schema:{title:"Max Count",maximum:1e3,exclusiveMinimum:0,type:"integer",default:10},name:"max_count",in:"query"},{required:!1,schema:{title:"Desc",type:"boolean",default:!1},name:"desc",in:"query"},{required:!1,schema:{title:"Lang",type:"string"},name:"lang",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"MessagePage",required:["sort_key","items","order"],type:"object",properties:{prev:{title:"Prev",type:"string"},next:{title:"Next",type:"string"},sort_key:{title:"Sort Key",type:"string"},items:{title:"Items",type:"array",items:{title:"Message",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},user_id:{title:"User Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},lang:{title:"Lang",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"},emojis:{title:"Emojis",type:"object",additionalProperties:{type:"integer"}},user_emojis:{title:"User Emojis",type:"array",items:{type:"string"}},parent_id:{title:"Parent Id",type:"string",format:"uuid"},created_date:{title:"Created Date",type:"string",format:"date-time"},review_result:{title:"Review Result",type:"boolean"},review_count:{title:"Review Count",type:"integer"}},description:"Represents a message in a conversation between the user and the assistant."}},order:{title:"Order",enum:["asc","desc"],type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"oasst-user":[]},{"oasst-user":[]},{"api-key":[]},{"api-key":[]}],description:"Query User Messages Cursor",method:"get",path:"/api/v1/users/{user_id}/messages/cursor",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Query User Messages Cursor",description:{type:"text/plain"},url:{path:["api","v1","users",":user_id","messages","cursor"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"before",value:"<string>"},{description:{content:"",type:"text/plain"},key:"after",value:"<string>"},{description:{content:"",type:"text/plain"},key:"only_roots",value:"false"},{description:{content:"",type:"text/plain"},key:"include_deleted",value:"false"},{description:{content:"",type:"text/plain"},key:"max_count",value:"10"},{description:{content:"",type:"text/plain"},key:"desc",value:"false"},{description:{content:"",type:"text/plain"},key:"lang",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"user_id"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/query-user-messages-cursor",previous:{title:"Mark User Messages Deleted",permalink:"/Open-Assistant/api/mark-user-messages-deleted"},next:{title:"Query User Stats",permalink:"/Open-Assistant/api/query-user-stats"}},o=[],p={toc:o},u="wrapper";function y(t){let{components:e,...l}=t;return(0,r.kt)(u,(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query-user-messages-cursor"},"Query User Messages Cursor"),(0,r.kt)("p",null,"Query User Messages Cursor"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"user_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"before"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Before"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"after"),(0,r.kt)("span",{style:{opacity:"0.6"}}," After"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"only_roots"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Only Roots"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"include_deleted"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Include Deleted"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"max_count"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Max Count"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," 0 < value \u2264 1000")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"desc"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Desc"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"lang"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Lang"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful Response"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"prev"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Prev"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"next"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Next"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"sort_key"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Sort Key"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"items"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"user_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"frontend_message_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Frontend Message Id"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"text"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Text"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"lang"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Lang"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"is_assistant"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Is Assistant"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"emojis"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"user_emojis"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"parent_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"created_date"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"review_result"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Review Result"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"review_count"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Review Count"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"order"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Order"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"asc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"desc"),"]"))))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"422")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation Error"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"detail"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"loc"),(0,r.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"msg"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}y.isMDXComponent=!0}}]);