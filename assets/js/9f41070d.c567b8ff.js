(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[462,772],{9236:(e,t,a)=>{a(6540);const s={title:"My Site",tagline:"Dinosaurs are cool",favicon:"img/favicon.ico",url:"https://trmatherz.github.io",baseUrl:"/SeaFarmers/",organizationName:"trMatherz",projectName:"SeaFarmers",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:"./sidebars.js",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:"./src/css/custom.css"}}]],themeConfig:{colorMode:{disableSwitch:!0}},plugins:[["@docusaurus/plugin-client-redirects",{createRedirects:e=>e.startsWith("/auth")?["/auth/*"]:[]}]],customFields:{backendUrl:"https://seafarmers.onrender.com"}};e.exports=s},1115:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var s=a(6540),n=a(8774);const r="navbarItems_SNXV",c="dropdown_tS68",l="dropdownButton_p_GL",o="dropdownContent_RHbB",i=()=>{const[e,t]=(0,s.useState)(!1);return s.createElement("div",{className:r},s.createElement("div",{className:c},s.createElement("button",{className:l,onClick:()=>{t(!e)}},"Sections"),e&&s.createElement("div",{className:o},s.createElement(n.A,{to:"/SeaFarmers/modules/LearnToCode/LearnToCodeHome"},"Learn To Code"),s.createElement(n.A,{to:"/SeaFarmers/modules/Novice/NoviceHome"},"Novice"))))}},3844:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var s=a(6540);const n=a(9236).customFields.backendUrl,r=()=>{const[e,t]=(0,s.useState)(null),[a,r]=(0,s.useState)(!0);(0,s.useEffect)((()=>{c(),function(){const e=new URLSearchParams(window.location.search).get("userId");e&&(sessionStorage.setItem("userId",e),window.location.href="https://trmatherz.github.io/SeaFarmers/")}()}),[]);const c=async()=>{r(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const a=await fetch(`${n}/api/user?userId=${e}`,{method:"GET",credentials:"include"});if(!a.ok)throw new Error("User not authenticated");const s=await a.json();t(s)}catch(e){console.error("Error fetching user data:",e),t(null)}finally{r(!1)}},l=async()=>{window.location.href=`${n}/auth/github`};return e?s.createElement("div",null,s.createElement("img",{src:e.avatarUrl,alt:"User Avatar",width:"40",height:"40",style:{borderRadius:"50%"}})):s.createElement("div",null,s.createElement("button",{onClick:l},"Login with GitHub"))};var c=a(1115);const l="customNavbar_mklA",o="customNavbarTitle_hVCA",i="customNavbarItems_gN4E",m="customNavbarProfile_zS9W",d="customUserProfile_Q1sk",u=()=>s.createElement("nav",{className:l},s.createElement("div",{className:o},s.createElement("h1",null,"Sea Farmers")),s.createElement("div",{className:i},s.createElement(c.A,null)),s.createElement("div",{className:m},s.createElement("div",{className:d},s.createElement(r,null))))},8092:(e,t,a)=>{"use strict";a.d(t,{A:()=>m});var s=a(6540),n=a(4335);const r="sidebarContainer_RDdI",c="sidebarHeader_hC8H",l="dropdown_xzkb";var o=a(1115);const i=a(9236).customFields.backendUrl;const m=function(e){let{moduleName:t}=e;const[a,m]=(0,s.useState)(null),[d,u]=(0,s.useState)(!1),[E,p]=(0,s.useState)(null);if((0,s.useEffect)((()=>{t&&async function(){u(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const a=await n.A.get(`${i}/api/module/${t}?userId=${e}`,{withCredentials:!0});m(a.data)}catch(E){p(E.response?E.response.data:E.message)}finally{u(!1)}}()}),[t]),d)return s.createElement("p",null,"Loading module data...");if(E)return s.createElement("p",null,"Error: ",E);const{genericTopics:v=[],topics:h=[]}=a||{};return s.createElement("div",{className:r},s.createElement("header",{className:c},s.createElement("div",{className:l},s.createElement(o.A,null))),s.createElement("div",{className:"generic-topics-container"},v.map(((e,a)=>{const n=e.topics.map((e=>h.find((t=>t.topicId===e))));return s.createElement("div",{key:a,className:"generic-topic"},s.createElement("h3",null,e.genericTopicName),s.createElement("ul",null,n.map(((e,a)=>e&&s.createElement("li",{key:a},s.createElement("a",{href:`/SeaFarmers/modules/${t}/${e.topicId}`},e.topicName))))))}))))}},5257:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(6540),n=a(4625),r=(a(8092),a(2407));a(2477);const c=function(){const[e,t]=(0,s.useState)([{name:"Vscode Installer",url:"https://code.visualstudio.com/download",description:"A link to download Vscode.",source:"VSC",circleState:"unseen",showMenu:!1},{name:"C++ in Vscode",url:"https://code.visualstudio.com/docs/languages/cpp",description:"A tutorial for setting up c++ in Vscode.",source:"VSC",circleState:"unseen",showMenu:!1},{name:"Code Runner",url:"https://www.youtube.com/watch?v=XM68JTpYznU",description:"A tutorial for setting up Code Runner in Vscode.",source:"Youtube",circleState:"unseen",showMenu:!1}]),a=(a,s)=>{const n=[...e];n[a].circleState=s,n[a].showMenu=!1,t(n)};return s.createElement("div",{className:r.A.pageContainer},s.createElement("div",{className:r.A.content},s.createElement("div",{className:r.A.header},s.createElement("h1",null,"How To Code"),s.createElement("h3",null,"Resources and Learning Materials"),s.createElement("p",null,"To code, you need to be able to run it. You will need to establish a coding environment for yourself. Visual Studio Code is the reccomended IDE, but any will work. Below is a resource to teach you how to download and setup Visual Studio Code for c++.")),s.createElement("div",{className:r.A.resourcesBlock,id:"resources"},s.createElement("h2",null,"Resources"),s.createElement("ul",null,e.map(((c,l)=>s.createElement("li",{key:l,className:l%2==0?r.A.evenItem:r.A.oddItem},s.createElement("div",{className:r.A.resourceItem},s.createElement("div",{className:`${r.A.circle} ${r.A[c.circleState]}`,onClick:()=>(a=>{const s=[...e];s[a].showMenu=!s[a].showMenu,t(s)})(l)}),s.createElement("div",{className:r.A.source},c.source),s.createElement(n.N_,{to:c.url,target:"_blank",rel:"noopener noreferrer"},s.createElement("div",{className:r.A.name},c.name)),s.createElement("div",{className:r.A.description},c.description),c.showMenu&&s.createElement("div",{className:r.A.circleMenu},s.createElement("button",{onClick:()=>a(l,"unseen")},"Unseen"),s.createElement("button",{onClick:()=>a(l,"skipped")},"Skipped"),s.createElement("button",{onClick:()=>a(l,"done")},"Done"))))))))))}},2477:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var s=a(6540);const n="moduleHome_u5vS",r="informationBackground_VCss",c="progressCardsContainer_V6aV",l="progressCard_aCO4",o="progressBar_seXh",i="progressFill_fdGT",m="unseen_tEWQ",d="skipped_EduS",u="solved_bEdP",E="progressNumbers_rb88",p="number_Ug68",v="label_each",h="topicsContainer_aDad",N="topicRow_wTHb",g="genericTopic_4L_7",w="specificTopicsContainer_uy8U";var b=a(781),f=a(3844);a(9236).customFields.backendUrl;const _=function(e){let{moduleName:t,description:a,unseenTopics:_,skippedTopics:k,solvedTopics:S,unseenProblems:C,skippedProblems:I,solvedProblems:y,totalTopics:A,totalProblems:$,genericTopics:T=[],topics:U=[]}=e;return s.createElement(b.A,null,s.createElement(f.A,null),s.createElement("div",{className:n},s.createElement("div",{className:r},s.createElement("h1",null,t),s.createElement("p",null,a),s.createElement("div",{className:c},s.createElement("div",{className:l},s.createElement("h3",null,"Progress on Problems"),s.createElement("div",{className:o},s.createElement("div",{className:`${i} ${m}`,style:{width:"100%"}}),s.createElement("div",{className:`${i} ${d}`,style:{width:(I+y)/$*100+"%"}}),s.createElement("div",{className:`${i} ${u}`,style:{width:y/$*100+"%"}})),s.createElement("div",{className:E},s.createElement("span",null,s.createElement("div",{className:p},C),s.createElement("div",{className:v},"Unseen")),s.createElement("span",null,s.createElement("div",{className:p},I),s.createElement("div",{className:v},"Skipped")),s.createElement("span",null,s.createElement("div",{className:p},y),s.createElement("div",{className:v},"Solved")))),s.createElement("div",{className:l},s.createElement("h3",null,"Progress on Topics"),s.createElement("div",{className:o},s.createElement("div",{className:`${i} ${m}`,style:{width:"100%"}}),s.createElement("div",{className:`${i} ${d}`,style:{width:(k+S)/A*100+"%"}}),s.createElement("div",{className:`${i} ${u}`,style:{width:S/A*100+"%"}})),s.createElement("div",{className:E},s.createElement("span",null,s.createElement("div",{className:p},_),s.createElement("div",{className:v},"Unseen")),s.createElement("span",null,s.createElement("div",{className:p},k),s.createElement("div",{className:v},"Skipped")),s.createElement("span",null,s.createElement("div",{className:p},S),s.createElement("div",{className:v},"Solved")))))),s.createElement("h3",null,"Topics in This Module:"),s.createElement("div",{className:h},T.map(((e,a)=>{const n=e.topics.map((e=>U.find((t=>t.topicId===e))));return s.createElement("div",{key:a,className:N},s.createElement("div",{className:g},s.createElement("h3",null,e.genericTopicName)),s.createElement("div",{className:w},s.createElement("ul",null,n.map(((e,a)=>e&&s.createElement("li",{key:a},s.createElement("a",{href:`/SeaFarmers/modules/${t}/${e.topicId}`},e.topicName)))))))})))))};var k=a(4335);const S=a(9236).customFields.backendUrl,C=()=>{const[e,t]=(0,s.useState)(null),[a,n]=(0,s.useState)(null),[r,c]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async a=>{c(!0);try{const e=sessionStorage.getItem("userId")||"guest";if(!e)throw new Error("User ID not found in session storage");const t=await k.A.get(`${S}/api/module/${a}?userId=${e}`,{withCredentials:!0,credentials:"include"});n(t.data),c(!1)}catch(e){t(e.response?e.response.data:e.message),c(!1)}})("LearnToCode")}),[]),r?s.createElement("p",null,"Loading module data..."):e?s.createElement("div",null,"Error: ",e):s.createElement("div",null,a?s.createElement(_,a):s.createElement("div",null,"Error: No data available"))}},2407:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});const s={pageContainer:"pageContainer_bYcu",sidebarContainer:"sidebarContainer_MWlL",content:"content_aZeY",header:"header_SwC0",tableOfContents:"tableOfContents_HMov",resourcesBlock:"resourcesBlock_cL99",evenItem:"evenItem_Ng7T",oddItem:"oddItem_UIlS",resourceItem:"resourceItem_Q3gY",source:"source_EmqQ",name:"name_HJ2r",description:"description_vCqv",circle:"circle_ksJ9",unseen:"unseen_xJhJ",skipped:"skipped_ioux",done:"done_xL5X",circleMenu:"circleMenu_chy7"}}}]);