/*! For license information please see 38e7c4a3.34778345.js.LICENSE.txt */
(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[639],{8113:(e,t,l)=>{"use strict";l.r(t),l.d(t,{assets:()=>S,contentTitle:()=>_,default:()=>$,frontMatter:()=>w,metadata:()=>s,moduleName:()=>y,toc:()=>I,topicId:()=>k});const s=JSON.parse('{"type":"mdx","permalink":"/SeaFarmers/modules/LearnToCode/TimeComplexity","source":"@site/src/pages/modules/LearnToCode/TimeComplexity.mdx","frontMatter":{},"unlisted":false}');var a=l(4848),n=l(8453),r=l(6540),o=(l(2407),l(4335));const c={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",helpColumn:"helpColumn_ZjTn",helpCell:"helpCell_EU_m",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9"},m=l(9236).customFields.backendUrl,i=e=>{let{moduleName:t,topicId:l,location:s}=e;const[a,n]=(0,r.useState)(null),[i,u]=(0,r.useState)(null),[d,p]=(0,r.useState)(!1),[C,f]=(0,r.useState)(null),[E,h]=(0,r.useState)(null),[g,b]=(0,r.useState)({}),[N,w]=(0,r.useState)(null),[_,S]=(0,r.useState)({});(0,r.useEffect)((()=>{t&&async function(){p(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${m}/api/module/${t}?userId=${e}`,{withCredentials:!0});n(l.data)}catch(C){f(C.response?C.response.data:C.message)}finally{p(!1)}}()}),[t]),(0,r.useEffect)((()=>{if(!a||!l)return;const e=a.topics.find((e=>e.topicId===l));e?u(e):f("Topic not found")}),[a,l]);const y=async(e,s)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await o.A.post(`${m}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:l,problemId:a,newState:s},{withCredentials:!0});u((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:s}:e));return{...e,problems:t}})),h(null)}catch(C){console.error("Error updating problem state:",C)}};return d?r.createElement("p",null,"Loading data..."):C?r.createElement("p",null,"Error: ",C):r.createElement("div",null,i&&i.problems&&r.createElement("table",{className:c.problemTable},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:c.statusColumn},"Status"),r.createElement("th",{className:c.sourceColumn},"Source"),r.createElement("th",{className:c.starredColumn},"Starred"),r.createElement("th",{className:c.problemColumn},"Problem"),r.createElement("th",{className:c.difficultyColumn},"Difficulty"),r.createElement("th",{className:c.tagsColumn},"Tags"),r.createElement("th",{className:c.helpColumn},"Help"))),r.createElement("tbody",null,i.problems&&Array.isArray(i.problems)&&i.problems.filter((e=>e.location===s)).map(((e,t)=>e?r.createElement("tr",{key:e.uniqueId||t},r.createElement("td",{className:c.statusCell},r.createElement("span",{className:`${c.stateCircle} ${c[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(E===e)h(null),b({});else{const l=t.target.getBoundingClientRect();b({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),h(e)}})(t,e)}),E===t&&r.createElement("div",{className:c.dropdownMenu,style:{position:"absolute",top:`${g.top}px`,left:`${g.left}px`}},r.createElement("ul",null,r.createElement("li",{onClick:()=>y(e,2)},"Solved"),r.createElement("li",{onClick:()=>y(e,1)},"Skipped"),r.createElement("li",{onClick:()=>y(e,0)},"Unseen")))),r.createElement("td",{className:c.sourceCell},e.source),r.createElement("td",{className:c.starredCell},e.star?"\u2b50":""),r.createElement("td",{className:c.problemCell},r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:c.problemLink},e.name)),r.createElement("td",{className:c.difficultyCell},e.difficulty),r.createElement("td",{className:c.tagsCell},e.tags&&Array.isArray(e.tags)?e.tags.join(", "):"No tags"),r.createElement("td",{className:c.helpCell},r.createElement("span",{className:c.helpButton,onClick:e=>((e,t)=>{if(N===e)w(null),S({});else{const l=t.target.getBoundingClientRect();S({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),w(e)}})(t,e)},"Show Helps"),N===t&&r.createElement("div",{className:c.helpDropdownMenu,style:{position:"absolute",top:`${_.top}px`,left:`${_.left}px`}},r.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>r.createElement("li",{key:t},r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:c.helpLink},e.name)))):r.createElement("li",null,"No helps"))))):null)))))},u={problemTable:"problemTable_Z_QZ",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",helpColumn:"helpColumn_Zqsi",helpCell:"helpCell_SYir",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v"},d=l(9236).customFields.backendUrl,p=e=>{let{moduleName:t,topicId:l,location:s}=e;const[a,n]=(0,r.useState)(null),[c,m]=(0,r.useState)(null),[i,p]=(0,r.useState)(!1),[C,f]=(0,r.useState)(null),[E,h]=(0,r.useState)(null),[g,b]=(0,r.useState)({}),[N,w]=(0,r.useState)(null),[_,S]=(0,r.useState)({});(0,r.useEffect)((()=>{t&&async function(){p(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${d}/api/module/${t}?userId=${e}`,{withCredentials:!0});n(l.data)}catch(C){f(C.response?C.response.data:C.message)}finally{p(!1)}}()}),[t]),(0,r.useEffect)((()=>{if(!a||!l)return;const e=a.topics.find((e=>e.topicId===l));e?m(e):f("Topic not found")}),[a,l]);const y=async(e,s)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await o.A.post(`${d}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:l,problemId:a,newState:s},{withCredentials:!0}),m((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:s}:e));return{...e,problems:t}})),h(null)}catch(C){console.error("Error updating problem state:",C)}};return i?r.createElement("p",null,"Loading data..."):C?r.createElement("p",null,"Error: ",C):r.createElement("div",null,c?.problems?.length>0?r.createElement("table",{className:u.problemTable},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:u.statusColumn},"Status"),r.createElement("th",{className:u.sourceColumn},"Source"),r.createElement("th",{className:u.starredColumn},"Starred"),r.createElement("th",{className:u.problemColumn},"Problem"),r.createElement("th",{className:u.difficultyColumn},"Difficulty"),r.createElement("th",{className:u.tagsColumn},"Tags"),r.createElement("th",{className:u.helpColumn},"Help"))),r.createElement("tbody",null,c.problems.some((e=>e.location===s))?c.problems.filter((e=>e.location===s)).map(((e,t)=>r.createElement("tr",{key:e.uniqueId||t},r.createElement("td",{className:u.statusCell},r.createElement("span",{className:`${u.stateCircle} ${u[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(E===e)h(null),b({});else{const l=t.target.getBoundingClientRect();b({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),h(e)}})(t,e)}),E===t&&r.createElement("div",{className:u.dropdownMenu,style:{position:"absolute",top:`${g.top}px`,left:`${g.left}px`}},r.createElement("ul",null,r.createElement("li",{onClick:()=>y(e,2)},"Solved"),r.createElement("li",{onClick:()=>y(e,1)},"Skipped"),r.createElement("li",{onClick:()=>y(e,0)},"Unseen")))),r.createElement("td",{className:u.sourceCell},e.source),r.createElement("td",{className:u.starredCell},e.star?"\u2b50":""),r.createElement("td",{className:u.problemCell},r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:u.problemLink},e.name)),r.createElement("td",{className:u.difficultyCell},e.difficulty||"Unknown"),r.createElement("td",{className:u.tagsCell},e.tags&&Array.isArray(e.tags)?e.tags.join(", "):"No tags"),r.createElement("td",{className:u.helpCell},r.createElement("span",{className:u.helpButton,onClick:e=>((e,t)=>{if(N===e)w(null),S({});else{const l=t.target.getBoundingClientRect();S({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),w(e)}})(t,e)},"Show Helps"),N===t&&r.createElement("div",{className:u.helpDropdownMenu,style:{position:"absolute",top:`${_.top}px`,left:`${_.left}px`}},r.createElement("ul",null,e.helps&&e.helps.length>0?e.helps.map(((e,t)=>r.createElement("li",{key:t},r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:u.helpLink},e.name)))):r.createElement("li",null,"No helps"))))))):r.createElement("tr",null,r.createElement("td",{colSpan:"7"},"No problems found for this location.")))):r.createElement("p",null,"No problems data available."))},C={resourceTable:"resourceTable_ow7w",nameColumn:"nameColumn_cltC",sourceColumn:"sourceColumn_R2BC",starredColumn:"starredColumn_Ycnc",descriptionColumn:"descriptionColumn_X0UP",helpColumn:"helpColumn_XBzN",helpCell:"helpCell_KKdL",resourceLink:"resourceLink_QTdW",starredCell:"starredCell_Cq7S"},f=l(9236).customFields.backendUrl,E=e=>{let{moduleName:t,topicId:l}=e;const[s,a]=(0,r.useState)(null),[n,c]=(0,r.useState)(null),[m,i]=(0,r.useState)(!1),[u,d]=(0,r.useState)(null);return(0,r.useEffect)((()=>{t&&async function(){i(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${f}/api/module/${t}?userId=${e}`,{withCredentials:!0});a(l.data)}catch(u){d(u.response?u.response.data:u.message)}finally{i(!1)}}()}),[t]),(0,r.useEffect)((()=>{if(!s||!l)return;const e=s.topics.find((e=>e.topicId===l));e?c(e):d("Topic not found")}),[s,l]),m?r.createElement("p",null,"Loading data..."):u?r.createElement("p",null,"Error: ",u):r.createElement("div",null,n&&n.resources&&r.createElement("table",{className:C.resourceTable},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:C.nameColumn},"Name"),r.createElement("th",{className:C.sourceColumn},"Source"),r.createElement("th",{className:C.starredColumn},"Starred"),r.createElement("th",{className:C.descriptionColumn},"Description"))),r.createElement("tbody",null,n.resources.map(((e,t)=>r.createElement("tr",{key:e.uniqueId||t},r.createElement("td",{className:C.nameCell},r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:C.resourceLink},e.name)),r.createElement("td",{className:C.sourceCell},e.source),r.createElement("td",{className:C.starredCell},e.star?"\u2b50":""),r.createElement("td",{className:C.descriptionCell},e.description)))))))},h={topicProgress:"topicProgress_vBvg",label:"label_wsxD",stateCircle:"stateCircle_E6bh",state0:"state0_qFD_",state1:"state1_sQKs",state2:"state2_w3Ye",dropdown:"dropdown_WV7Y",dropdownContent:"dropdownContent_etXv",dropdownItem:"dropdownItem_VeAh",dropdownButton:"dropdownButton_GCel"},g=l(9236).customFields.backendUrl,b=e=>{let{moduleName:t,topicId:l}=e;const[s,a]=(0,r.useState)(null),[n,c]=(0,r.useState)(null),[m,i]=(0,r.useState)(!0),[u,d]=(0,r.useState)(null),[p,C]=(0,r.useState)(!1);(0,r.useEffect)((()=>{t&&async function(){i(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${g}/api/module/${t}?userId=${e}`,{withCredentials:!0});a(l.data)}catch(u){d(u.response?u.response.data:u.message)}finally{i(!1)}}()}),[t]),(0,r.useEffect)((()=>{if(!s||!l)return;const e=s.topics.find((e=>e.topicId===l));e?c(e):d("Topic not found")}),[s,l]);const f=async e=>{c((t=>({...t,state:e})));try{const s=sessionStorage.getItem("userId")||"guest";if(!s)throw new Error("User ID not found in session storage");await o.A.post(`${g}/api/topic/updateState?userId=${s}`,{moduleName:t,topicId:l,newState:e},{withCredentials:!0}),C(!1)}catch(s){d("Failed to update state."),c((e=>({...e,state:e.state})))}};return m?r.createElement("p",null,"Loading data..."):u?r.createElement("p",null,"Error: ",u):r.createElement("div",{className:h.topicProgress},r.createElement("div",{className:"label"},"Topic Progress:"),r.createElement("div",{className:`${h.stateCircle} ${h[`state${n?.state??0}`]}`,onClick:()=>C(!p)}),p&&r.createElement("div",{className:"dropdown"},r.createElement("div",{onClick:()=>f(0),className:"dropdownItem"},"Unseen"),r.createElement("div",{onClick:()=>f(1),className:"dropdownItem"},"Skipped"),r.createElement("div",{onClick:()=>f(2),className:"dropdownItem"},"Solved")))};var N=l(8092);const w={},_="Example Problem List",S={},y="LearnToCode",k="TimeComplexity",I=[];function v(e){const t={h1:"h1",header:"header",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N.A,{moduleName:y}),"\n",(0,a.jsx)(E,{moduleName:y,topicId:k}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"example-problem-list",children:"Example Problem List"})}),"\n",(0,a.jsx)(p,{moduleName:y,topicId:k,location:"sample1"}),"\n",(0,a.jsx)(i,{moduleName:y,topicId:k,location:"problemlist"}),"\n",(0,a.jsx)(b,{moduleName:y,topicId:k})]})}function $(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},9236:(e,t,l)=>{l(6540);const s={title:"My Site",tagline:"Dinosaurs are cool",favicon:"img/favicon.ico",url:"https://trmatherz.github.io",baseUrl:"/SeaFarmers/",organizationName:"trMatherz",projectName:"SeaFarmers",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:"./sidebars.js",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:"./src/css/custom.css"}}]],themeConfig:{colorMode:{disableSwitch:!0}},plugins:[["@docusaurus/plugin-client-redirects",{createRedirects:e=>e.startsWith("/auth")?["/auth/*"]:[]}]],customFields:{backendUrl:"https://seafarmers.onrender.com"}};e.exports=s},1115:(e,t,l)=>{"use strict";l.d(t,{A:()=>m});var s=l(6540),a=l(8774);const n="navbarItems_SNXV",r="dropdown_tS68",o="dropdownButton_p_GL",c="dropdownContent_RHbB",m=()=>{const[e,t]=(0,s.useState)(!1);return s.createElement("div",{className:n},s.createElement("div",{className:r},s.createElement("button",{className:o,onClick:()=>{t(!e)}},"Sections"),e&&s.createElement("div",{className:c},s.createElement(a.A,{to:"/SeaFarmers/modules/LearnToCode/LearnToCodeHome/"},"Learn To Code"),s.createElement(a.A,{to:"/SeaFarmers/modules/Novice/NoviceHome/"},"Novice"))))}},8092:(e,t,l)=>{"use strict";l.d(t,{A:()=>i});var s=l(6540),a=l(4335);const n="sidebarContainer_RDdI",r="sidebarHeader_hC8H",o="dropdown_xzkb";var c=l(1115);const m=l(9236).customFields.backendUrl;const i=function(e){let{moduleName:t}=e;const[l,i]=(0,s.useState)(null),[u,d]=(0,s.useState)(!1),[p,C]=(0,s.useState)(null);if((0,s.useEffect)((()=>{t&&async function(){d(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await a.A.get(`${m}/api/module/${t}?userId=${e}`,{withCredentials:!0});i(l.data)}catch(p){C(p.response?p.response.data:p.message)}finally{d(!1)}}()}),[t]),u)return s.createElement("p",null,"Loading module data...");if(p)return s.createElement("p",null,"Error: ",p);const{genericTopics:f=[],topics:E=[]}=l||{};return s.createElement("div",{className:n},s.createElement("header",{className:r},s.createElement("div",{className:o},s.createElement(c.A,null))),s.createElement("div",{className:"generic-topics-container"},f.map(((e,l)=>{const a=e.topics.map((e=>E.find((t=>t.topicId===e))));return s.createElement("div",{key:l,className:"generic-topic"},s.createElement("h3",null,e.genericTopicName),s.createElement("ul",null,a.map(((e,l)=>e&&s.createElement("li",{key:l,className:"matchingTopic"},s.createElement("a",{href:`/SeaFarmers/modules/${t}/${e.topicId}/`},e.topicName))))))}))))}},2407:(e,t,l)=>{"use strict";l.d(t,{A:()=>s});const s={}},1020:(e,t,l)=>{"use strict";var s=l(6540),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function m(e,t,l){var s,n={},m=null,i=null;for(s in void 0!==l&&(m=""+l),void 0!==t.key&&(m=""+t.key),void 0!==t.ref&&(i=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:a,type:e,key:m,ref:i,props:n,_owner:o.current}}t.Fragment=n,t.jsx=m,t.jsxs=m},4848:(e,t,l)=>{"use strict";e.exports=l(1020)},8453:(e,t,l)=>{"use strict";l.d(t,{R:()=>r,x:()=>o});var s=l(6540);const a={},n=s.createContext(a);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);