"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[1161],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},s=Object.keys(t);for(l=0;l<s.length;l++)n=s[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(l=0;l<s.length;l++)n=s[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},d="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(o,".").concat(u)]||d[u]||y[u]||s;return n?l.createElement(k,r(r({ref:e},c),{},{components:n})):l.createElement(k,r({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:a,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25579:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var l=n(87462),a=(n(67294),n(3905));const s={},r="Get Longest Conv",i={type:"api",id:"get-longest-conv",unversionedId:"get-longest-conv",title:"Get Longest Conv",description:"",slug:"/get-longest-conv",frontMatter:{},api:{tags:["messages"],description:"Get the longest conversation from the tree of the message.",operationId:"get_longest_conv_api_v1_messages__message_id__longest_conversation_in_tree_get",parameters:[{required:!0,schema:{title:"Message Id",type:"string",format:"uuid"},name:"message_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Conversation",type:"object",properties:{messages:{title:"Messages",type:"array",items:{title:"ConversationMessage",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},user_id:{title:"User Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},lang:{title:"Lang",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"},emojis:{title:"Emojis",type:"object",additionalProperties:{type:"integer"}},user_emojis:{title:"User Emojis",type:"array",items:{type:"string"}}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"Represents a conversation between the prompter and the assistant."}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"oasst-user":[]},{"oasst-user":[]},{"api-key":[]},{"api-key":[]}],method:"get",path:"/api/v1/messages/{message_id}/longest_conversation_in_tree",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Longest Conv",description:{content:"Get the longest conversation from the tree of the message.",type:"text/plain"},url:{path:["api","v1","messages",":message_id","longest_conversation_in_tree"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"message_id"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-longest-conv",previous:{title:"Get Descendants",permalink:"/Open-Assistant/api/get-descendants"},next:{title:"Get Max Children",permalink:"/Open-Assistant/api/get-max-children"}},o=[],p={toc:o},c="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-longest-conv"},"Get Longest Conv"),(0,a.kt)("p",null,"Get the longest conversation from the tree of the message."),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"message_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Successful Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"messages"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"user_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"frontend_message_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Frontend Message Id"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"text"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Text"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"lang"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Lang"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"is_assistant"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Is Assistant"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"emojis"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"user_emojis"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string[]")))))))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"422")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Validation Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"detail"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"loc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"msg"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}d.isMDXComponent=!0}}]);