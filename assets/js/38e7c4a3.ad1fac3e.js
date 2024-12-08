/*! For license information please see 38e7c4a3.ad1fac3e.js.LICENSE.txt */
(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[639],{8113:(e,t,l)=>{"use strict";l.r(t),l.d(t,{assets:()=>S,contentTitle:()=>y,default:()=>$,frontMatter:()=>w,metadata:()=>s,moduleName:()=>I,toc:()=>v,topicId:()=>k});const s=JSON.parse('{"type":"mdx","permalink":"/SeaFarmers/modules/LearnToCode/TimeComplexity","source":"@site/src/pages/modules/LearnToCode/TimeComplexity.mdx","frontMatter":{},"unlisted":false}');var a=l(4848),r=l(8453),n=l(6540),o=l(4335);const c={problemTable:"problemTable_EnWh",statusColumn:"statusColumn_pDFx",statusCell:"statusCell_r3Mo",sourceColumn:"sourceColumn_mjRw",sourceCell:"sourceCell_cg9N",starredColumn:"starredColumn_lhJp",starredCell:"starredCell_hhdy",problemColumn:"problemColumn_sAaJ",problemCell:"problemCell_fdow",difficultyColumn:"difficultyColumn_r8f8",difficultyCell:"difficultyCell_t476",tagsColumn:"tagsColumn_iyz0",tagsCell:"tagsCell_uOUP",stateCircle:"stateCircle_KgE8",state0:"state0_ZKJZ",state1:"state1_jLSw",state2:"state2_BbJB",problemLink:"problemLink_s2DX",dropdownMenu:"dropdownMenu_JAW9"},m=l(9236).customFields.backendUrl,i=e=>{let{moduleName:t,topicId:l,location:s}=e;const[a,r]=(0,n.useState)(null),[i,u]=(0,n.useState)(null),[d,p]=(0,n.useState)(!1),[f,C]=(0,n.useState)(null),[E,b]=(0,n.useState)(null),[g,h]=(0,n.useState)({});(0,n.useEffect)((()=>{t&&async function(){p(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${m}/api/module/${t}?userId=${e}`,{withCredentials:!0});r(l.data)}catch(f){C(f.response?f.response.data:f.message)}finally{p(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!a||!l)return;const e=a.topics.find((e=>e.topicId===l));e?u(e):C("Topic not found")}),[a,l]);const N=async(e,s)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await o.A.post(`${m}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:l,problemId:a,newState:s},{withCredentials:!0});u((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:s}:e));return{...e,problems:t}})),b(null)}catch(f){console.error("Error updating problem state:",f)}};return d?n.createElement("p",null,"Loading data..."):f?n.createElement("p",null,"Error: ",f):n.createElement("div",null,i&&i.problems&&n.createElement("table",{className:c.problemTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:c.statusColumn},"Status"),n.createElement("th",{className:c.sourceColumn},"Source"),n.createElement("th",{className:c.starredColumn},"Starred"),n.createElement("th",{className:c.problemColumn},"Problem"),n.createElement("th",{className:c.difficultyColumn},"Difficulty"),n.createElement("th",{className:c.tagsColumn},"Tags"))),n.createElement("tbody",null,i.problems.filter((e=>e.location===s)).map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:c.statusCell},n.createElement("span",{className:`${c.stateCircle} ${c[`state${e.state}`]}`,onClick:e=>((e,t)=>{if(E===e)b(null),h({});else{const l=t.target.getBoundingClientRect();h({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),b(e)}})(t,e)}),E===t&&n.createElement("div",{className:c.dropdownMenu,style:{position:"absolute",top:`${g.top}px`,left:`${g.left}px`}},n.createElement("ul",null,n.createElement("li",{onClick:()=>N(e,2)},"Solved"),n.createElement("li",{onClick:()=>N(e,1)},"Skipped"),n.createElement("li",{onClick:()=>N(e,0)},"Unseen")))),n.createElement("td",{className:c.sourceCell},e.source),n.createElement("td",{className:c.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:c.problemCell},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:c.problemLink},e.name)),n.createElement("td",{className:c.difficultyCell},e.difficulty),n.createElement("td",{className:c.tagsCell},e.tags&&Array.isArray(e.tags)?e.tags.join(", "):"No tags")))))))},u={problemTable:"problemTable_Z_QZ",statusColumn:"statusColumn_SSuc",statusCell:"statusCell_qscZ",sourceColumn:"sourceColumn_l9Gf",sourceCell:"sourceCell_eTCO",starredColumn:"starredColumn_QHmQ",starredCell:"starredCell_LjUf",problemColumn:"problemColumn_QqLL",problemCell:"problemCell_f4Xa",difficultyColumn:"difficultyColumn_dLMQ",difficultyCell:"difficultyCell_TYpE",tagsColumn:"tagsColumn_dryM",tagsCell:"tagsCell_X8Zz",stateCircle:"stateCircle_q4Uk",state0:"state0_hG1k",state1:"state1_if8p",state2:"state2_ATXG",problemLink:"problemLink_c8Mo",dropdownMenu:"dropdownMenu_wG6v"},d=l(9236).customFields.backendUrl,p=e=>{let{moduleName:t,topicId:l,location:s}=e;const[a,r]=(0,n.useState)(null),[c,m]=(0,n.useState)(null),[i,p]=(0,n.useState)(!1),[f,C]=(0,n.useState)(null),[E,b]=(0,n.useState)(null),[g,h]=(0,n.useState)({});(0,n.useEffect)((()=>{t&&async function(){p(!0);try{const e=sessionStorage.getItem("userId");if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${d}/api/module/${t}?userId=${e}`,{withCredentials:!0});r(l.data)}catch(f){C(f.response?f.response.data:f.message)}finally{p(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!a||!l)return;const e=a.topics.find((e=>e.topicId===l));e?m(e):C("Topic not found")}),[a,l]);const N=async(e,s)=>{const a=e.problemId;try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");await o.A.post(`${d}/api/problem/updateState?userId=${e}`,{moduleName:t,topicId:l,problemId:a,newState:s},{withCredentials:!0});m((e=>{const t=e.problems.map((e=>e.problemId===a?{...e,state:s}:e));return{...e,problems:t}})),b(null)}catch(f){console.error("Error updating problem state:",f)}};return i?n.createElement("p",null,"Loading data..."):f?n.createElement("p",null,"Error: ",f):n.createElement("div",null,c&&c.problems&&n.createElement("table",{className:u.problemTable},n.createElement("tbody",null,c.problems.find((e=>e.location===s))&&n.createElement("tr",{key:problem.uniqueId||index},n.createElement("td",{className:u.statusCell},n.createElement("span",{className:`${u.stateCircle} ${u[`state${problem.state}`]}`,onClick:e=>((e,t)=>{if(E===e)b(null),h({});else{const l=t.target.getBoundingClientRect();h({top:l.bottom+window.scrollY,left:l.left+window.scrollX}),b(e)}})(index,e)}),E===index&&n.createElement("div",{className:u.dropdownMenu,style:{position:"absolute",top:`${g.top}px`,left:`${g.left}px`}},n.createElement("ul",null,n.createElement("li",{onClick:()=>N(problem,2)},"Solved"),n.createElement("li",{onClick:()=>N(problem,1)},"Skipped"),n.createElement("li",{onClick:()=>N(problem,0)},"Unseen")))),n.createElement("td",{className:u.sourceCell},problem.source),n.createElement("td",{className:u.starredCell},problem.star?"\u2b50":""),n.createElement("td",{className:u.problemCell},n.createElement("a",{href:problem.link,target:"_blank",rel:"noopener noreferrer",className:u.problemLink},problem.name)),n.createElement("td",{className:u.difficultyCell},problem.difficulty),n.createElement("td",{className:u.tagsCell},problem.tags&&Array.isArray(problem.tags)?problem.tags.join(", "):"No tags")))))},f={resourceTable:"resourceTable_ow7w",nameColumn:"nameColumn_cltC",sourceColumn:"sourceColumn_R2BC",starredColumn:"starredColumn_Ycnc",descriptionColumn:"descriptionColumn_X0UP",resourceLink:"resourceLink_QTdW",starredCell:"starredCell_Cq7S"},C=l(9236).customFields.backendUrl,E=e=>{let{moduleName:t,topicId:l}=e;const[s,a]=(0,n.useState)(null),[r,c]=(0,n.useState)(null),[m,i]=(0,n.useState)(!1),[u,d]=(0,n.useState)(null);return(0,n.useEffect)((()=>{t&&async function(){i(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${C}/api/module/${t}?userId=${e}`,{withCredentials:!0});a(l.data)}catch(u){d(u.response?u.response.data:u.message)}finally{i(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!s||!l)return;const e=s.topics.find((e=>e.topicId===l));e?c(e):d("Topic not found")}),[s,l]),m?n.createElement("p",null,"Loading data..."):u?n.createElement("p",null,"Error: ",u):n.createElement("div",null,r&&r.resources&&n.createElement("table",{className:f.resourceTable},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:f.nameColumn},"Name"),n.createElement("th",{className:f.sourceColumn},"Source"),n.createElement("th",{className:f.starredColumn},"Starred"),n.createElement("th",{className:f.descriptionColumn},"Description"))),n.createElement("tbody",null,r.resources.map(((e,t)=>n.createElement("tr",{key:e.uniqueId||t},n.createElement("td",{className:f.nameCell},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:f.resourceLink},e.name)),n.createElement("td",{className:f.sourceCell},e.source),n.createElement("td",{className:f.starredCell},e.star?"\u2b50":""),n.createElement("td",{className:f.descriptionCell},e.description)))))))},b={topicProgress:"topicProgress_vBvg",stateCircle:"stateCircle_E6bh",state0:"state0_qFD_",state1:"state1_sQKs",state2:"state2_w3Ye"},g=l(9236).customFields.backendUrl,h=e=>{let{moduleName:t,topicId:l}=e;const[s,a]=(0,n.useState)(null),[r,c]=(0,n.useState)(null),[m,i]=(0,n.useState)(!0),[u,d]=(0,n.useState)(null),[p,f]=(0,n.useState)(!1);(0,n.useEffect)((()=>{t&&async function(){i(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await o.A.get(`${g}/api/module/${t}?userId=${e}`,{withCredentials:!0});a(l.data)}catch(u){d(u.response?u.response.data:u.message)}finally{i(!1)}}()}),[t]),(0,n.useEffect)((()=>{if(!s||!l)return;const e=s.topics.find((e=>e.topicId===l));e?c(e):d("Topic not found")}),[s,l]);const C=async e=>{c((t=>({...t,state:e})));try{const s=sessionStorage.getItem("userId")||"guest";if(!s)throw new Error("User ID not found in session storage");await o.A.post(`${g}/api/topic/updateState?userId=${s}`,{moduleName:t,topicId:l,newState:e},{withCredentials:!0}),f(!1)}catch(s){d("Failed to update state."),c((e=>({...e,state:e.state})))}};return m?n.createElement("p",null,"Loading data..."):u?n.createElement("p",null,"Error: ",u):n.createElement("div",{className:b.topicProgress},n.createElement("div",{className:`${b.stateCircle} ${b[`state${r?.state??0}`]}`,onClick:()=>f(!p)}),p&&n.createElement("div",{className:b.dropdown},n.createElement("div",{onClick:()=>C(0),className:b.dropdownItem},"Unseen"),n.createElement("div",{onClick:()=>C(1),className:b.dropdownItem},"Skipped"),n.createElement("div",{onClick:()=>C(2),className:b.dropdownItem},"Solved")))};var N=l(8092);const _=()=>n.createElement("div",null,n.createElement("a",{href:"/auth/github",style:{padding:"10px",backgroundColor:"#24292f",color:"white",borderRadius:"5px",textDecoration:"none"}},"Sign in with GitHub")),w={},y="Example Problem List",S={},I="LearnToCode",k="TimeComplexity",v=[];function x(e){const t={h1:"h1",header:"header",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N.A,{moduleName:I}),"\n",(0,a.jsx)(_,{}),"\n",(0,a.jsx)(E,{moduleName:I,topicId:k}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"example-problem-list",children:"Example Problem List"})}),"\n",(0,a.jsx)(p,{moduleName:I,topicId:k,location:"sample1"}),"\n",(0,a.jsx)(i,{moduleName:I,topicId:k,location:"problemlist"}),"\n",(0,a.jsx)(h,{moduleName:I,topicId:k})]})}function $(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},9236:(e,t,l)=>{l(6540);const s={title:"My Site",tagline:"Dinosaurs are cool",favicon:"img/favicon.ico",url:"https://trmatherz.github.io",baseUrl:"/SeaFarmers/",organizationName:"trMatherz",projectName:"SeaFarmers",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:"./sidebars.js",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:"./src/css/custom.css"}}]],themeConfig:{colorMode:{disableSwitch:!0}},plugins:[["@docusaurus/plugin-client-redirects",{createRedirects:e=>e.startsWith("/auth")?["/auth/*"]:[]}]],customFields:{backendUrl:"https://seafarmers.onrender.com"}};e.exports=s},1115:(e,t,l)=>{"use strict";l.d(t,{A:()=>m});var s=l(6540),a=l(8774);const r="navbarItems_SNXV",n="dropdown_tS68",o="dropdownButton_p_GL",c="dropdownContent_RHbB",m=()=>{const[e,t]=(0,s.useState)(!1);return s.createElement("div",{className:r},s.createElement("div",{className:n},s.createElement("button",{className:o,onClick:()=>{t(!e)}},"Sections"),e&&s.createElement("div",{className:c},s.createElement(a.A,{to:"/SeaFarmers/modules/LearnToCode/LearnToCodeHome"},"Learn To Code"),s.createElement(a.A,{to:"/SeaFarmers/modules/Novice/NoviceHome"},"Novice"))))}},8092:(e,t,l)=>{"use strict";l.d(t,{A:()=>i});var s=l(6540),a=l(4335);const r="sidebarContainer_RDdI",n="sidebarHeader_hC8H",o="dropdown_xzkb";var c=l(1115);const m=l(9236).customFields.backendUrl;const i=function(e){let{moduleName:t}=e;const[l,i]=(0,s.useState)(null),[u,d]=(0,s.useState)(!1),[p,f]=(0,s.useState)(null);if((0,s.useEffect)((()=>{t&&async function(){d(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const l=await a.A.get(`${m}/api/module/${t}?userId=${e}`,{withCredentials:!0});i(l.data)}catch(p){f(p.response?p.response.data:p.message)}finally{d(!1)}}()}),[t]),u)return s.createElement("p",null,"Loading module data...");if(p)return s.createElement("p",null,"Error: ",p);const{genericTopics:C=[],topics:E=[]}=l||{};return s.createElement("div",{className:r},s.createElement("header",{className:n},s.createElement("div",{className:o},s.createElement(c.A,null))),s.createElement("div",{className:"generic-topics-container"},C.map(((e,t)=>{const l=e.topics.map((e=>E.find((t=>t.topicId===e))));return s.createElement("div",{key:t,className:"generic-topic"},s.createElement("h3",null,e.genericTopicName),s.createElement("ul",null,l.map(((e,t)=>e&&s.createElement("li",{key:t},e.topicName)))))}))))}},1020:(e,t,l)=>{"use strict";var s=l(6540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function m(e,t,l){var s,r={},m=null,i=null;for(s in void 0!==l&&(m=""+l),void 0!==t.key&&(m=""+t.key),void 0!==t.ref&&(i=t.ref),t)n.call(t,s)&&!c.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:a,type:e,key:m,ref:i,props:r,_owner:o.current}}t.Fragment=r,t.jsx=m,t.jsxs=m},4848:(e,t,l)=>{"use strict";e.exports=l(1020)},8453:(e,t,l)=>{"use strict";l.d(t,{R:()=>n,x:()=>o});var s=l(6540);const a={},r=s.createContext(a);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);