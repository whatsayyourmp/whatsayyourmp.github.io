(this["webpackJsonpdebates-frontend"]=this["webpackJsonpdebates-frontend"]||[]).push([[0],{189:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},210:function(e,t,a){},216:function(e,t,a){},220:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n,s,o,r=a(0),c=a.n(r),i=a(47),l=a.n(i),d=a(315),u=a(317),h=a(321),b=(a(189),a(136)),p=a.n(b),j=a(32),O=a.n(j);const E="production",f=null!==(n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).HOST)&&void 0!==n?n:"localhost",m={local:"http://".concat(f,":6969/counts-per-mp"),default:"https://hidden-pad-313204.as.r.appspot.com/counts-per-mp",production:"https://hidden-pad-313204.as.r.appspot.com/counts-per-mp"},T={local:"http://".concat(f,":6969/current-mps"),default:"https://hidden-pad-313204.as.r.appspot.com/current-mps",production:"https://hidden-pad-313204.as.r.appspot.com/current-mps"};var _={DEFAULT_COUNT_RANGE_END_DATE:O()(Date.now()),DEFAULT_COUNT_RANGE_START_DATE:O()(new Date("2020-08-24")),GET_COUNTS_PER_MP_FOR_DATE_RANGE:null!==(s=m[E])&&void 0!==s?s:m.default,GET_CURRENT_MPS:null!==(o=T[E])&&void 0!==o?o:T.default,STAGE:E};const C=p.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,headers:{"Content-Type":"application/json",..."production"!==_.STAGE?{Authorization:localStorage.getItem("DEVELOPER_API_KEY")}:{}}});a(207);var S=a(316),g=a(329),D=(a(208),a(2));var x=e=>{let{allMPs:t,selectedMPs:a,selectMPs:n,isLoading:s}=e;const o=t.map((e=>{const t=e.name;return{name:t,value:t}})),r=t.length>0;return Object(D.jsx)(S.a,{options:o,multiple:!0,search:!0,closeOnSelect:!0,filterOptions:g.a,placeholder:r?"Please select Members of Parliament to get counts for":"Loading the list of Members of Parliament...",onChange:n,value:a,printOptions:"on-focus",disabled:s})},A=a(140),v=a(305),F=a(313),P=a(314);a(210);var R=e=>{let{startDateForCount:t,selectStartDateForCount:a,endDateForCount:n,selectEndDateForCount:s,isLoading:o}=e;return Object(D.jsxs)("div",{id:"date-range-picker",children:[Object(D.jsx)(F.a,{label:"Start Year & Month",views:["year","month"],minDate:_.DEFAULT_COUNT_RANGE_START_DATE,maxDate:_.DEFAULT_COUNT_RANGE_END_DATE,value:t,onChange:a,renderInput:e=>Object(D.jsx)(P.a,{...e,helperText:null}),disabled:o}),Object(D.jsx)(F.a,{label:"End Year & Month",views:["year","month"],minDate:t,maxDate:_.DEFAULT_COUNT_RANGE_END_DATE,value:n,onChange:s,renderInput:e=>Object(D.jsx)(P.a,{...e,error:!0,helperText:"End date cannot be earlier than start."}),disabled:o})]})};a(216);var L=e=>{let{authors:t,selectedMPsForCount:a,selectMPsForCount:n,startDateForCount:s,selectStartDateForCount:o,endDateForCount:r,selectEndDateForCount:c,isLoading:i}=e;return Object(D.jsxs)("div",{id:"select-stats-filters",children:[Object(D.jsx)(x,{allMPs:t,selectedMPs:a,selectMPs:n,isLoading:i}),Object(D.jsx)(A.a,{dateAdapter:v.a,children:Object(D.jsx)(R,{startDateForCount:s,selectStartDateForCount:o,endDateForCount:r,selectEndDateForCount:c,isLoading:i})})]})},M=a(319),N=a(327),y=a(101),U=a.n(y),w=a(318);var k=e=>{let{didCountLoadFail:t,setDidCountLoadFail:a}=e;const n=()=>a(!1);return Object(D.jsx)(M.a,{open:t,autoHideDuration:6e3,onClose:n,message:"",action:Object(D.jsx)(r.Fragment,{children:Object(D.jsx)(N.a,{size:"small","aria-label":"close",color:"inherit",onClick:n,children:Object(D.jsx)(U.a,{fontSize:"small"})})}),children:Object(D.jsx)(w.a,{onClose:n,severity:"error",variant:"filled",sx:{width:"100%"},children:"Failed to load the counts, please try again"})})};var G=e=>{let{didMPsLoadFail:t,setDidMPsLoadFail:a}=e;const n=()=>a(!1);return Object(D.jsx)(M.a,{open:t,autoHideDuration:6e4,onClose:n,message:"",action:Object(D.jsx)(r.Fragment,{children:Object(D.jsx)(N.a,{size:"small","aria-label":"close",color:"inherit",onClick:n,children:Object(D.jsx)(U.a,{fontSize:"small"})})}),children:Object(D.jsx)(w.a,{onClose:n,severity:"error",variant:"filled",sx:{width:"100%"},children:"Failed to load MPs to select, please reload the page or try again later."})})},I=a(116);a(220);I.a.CanvasJS;const H=I.a.CanvasJSChart,W="#3498db",B="#2ecc71",K="#e74c3c",z="#f39c12",Q="#9b59b6",Y="#1abc9c",J="#e67e22",q={"Written Answers to Questions for Oral Answer Not Answered by End of Question Time":W,"Written Answers to Questions":B,"Oral Answers to Questions":K,"President's Address":z,Budget:Q,"Ministerial Statement":Y,Clarification:J,Bills:"#34495e","Bills Introduced":"#95a5a6","Matter Raised On Adjournment Motion":"#2c3e50",Motion:J,"Corrections by Written Statements":"#27ae60",Tributes:"#8e44ad","Point Of Order":"#f1c40f",Petitions:W,"Permission to Members to be Absent":B,"Speaker / Announcement by Speaker":K,"Administration Of Oaths":z,Attendance:Q,"Personal Explanation":Y};function V(e){const t=[];return e.forEach((e=>{const{name:a}=e;t.includes(a)||t.push(a)})),t}var X=e=>{let{debatesCount:t}=e;const a=function(e){const t={};e.forEach((e=>{const{name:a,...n}=e;Object.keys(n).forEach((e=>{t[e]?t[e].push({label:a,y:n[e]}):t[e]=[{label:a,y:n[e]}]}))}));const a=V(e);return Object.values(t).forEach((e=>{const t=e.map((e=>e.label));a.forEach((a=>{t.includes(a)||e.push({label:a,y:0})}))})),Object.entries(t).forEach((e=>{let[a,n]=e;n.sort(((e,t)=>e.label.localeCompare(t.label))),t[a]=n})),t}(t),n=V(t).length;const s=(o=n)<=3?300:300+100*Math.log2(o);var o;const r={height:s},c={height:s,toolTip:{shared:!0},legend:{verticalAlign:"top"},axisX:{interval:1===n?0:1},axisY:{gridThickness:0,tickLength:5},data:Object.keys(a).map((e=>({type:"stackedBar",color:q[e],name:e,showInLegend:!0,indexLabelFontColor:"white",dataPoints:a[e]})))};return Object(D.jsx)(H,{containerProps:r,options:c})};var $=function(){const[e,t]=Object(r.useState)([]),[a,n]=Object(r.useState)([]),[s,o]=Object(r.useState)([]),[c,i]=Object(r.useState)([]),[l,d]=Object(r.useState)(!1),[u,h]=Object(r.useState)(_.DEFAULT_COUNT_RANGE_START_DATE),[b,p]=Object(r.useState)(_.DEFAULT_COUNT_RANGE_END_DATE),[j,O]=Object(r.useState)(!1),[E,f]=Object(r.useState)(!1);Object(r.useEffect)((()=>{C.get(_.GET_CURRENT_MPS).then((e=>{e.data&&t(e.data)})).catch((e=>{f(!0)}))}),[]),Object(r.useEffect)((()=>{b<u||0!==a.length&&d(!0)}),[a,u,b]),Object(r.useEffect)((()=>{l&&(async(e,t,a)=>C.get(_.GET_COUNTS_PER_MP_FOR_DATE_RANGE,{params:{mpNames:e,startDate:t.$d,endDate:a.$d}}))(a,u,b).then((e=>{const[t,a]=(e=>{const t=[];for(const o in e){const a=e[o];e[o]||(e[o]={});for(const e in a)t.includes(e)||t.push(e)}const a=[],n=Object.keys(e),s=Object.values(e);for(let o=0;o<Object.entries(e).length;o++)a.push({name:n[o],...s[o]});return[a,t]})(e.data);o(t),i(a)})).catch((e=>{console.error("See error when fetching count:",e),O(!0)})).finally((()=>d(!1)))}),[l,a,u,b]);const m=a.length>0,T=c.length>0;return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)("header",{children:Object(D.jsx)("h1",{children:"What Say Your MP"})}),Object(D.jsx)("div",{children:Object(D.jsxs)("p",{style:{padding:10,paddingLeft:15,paddingRight:15},children:["This project uses the"," ",Object(D.jsx)("a",{href:"https://www.parliament.gov.sg/parliamentary-business/official-reports-(parl-debates)",children:"official reports"})," ","of each parliamentary session to collect debate records, a.k.a. Hansards. These debates are then analyzed to investigate the involvement of each MP in debates."]})}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{children:"Overall Statistics"}),!m&&!l&&Object(D.jsx)("div",{children:Object(D.jsx)("p",{children:"Please Select Some MPs"})}),m&&!l&&!T&&Object(D.jsx)("div",{children:Object(D.jsx)("p",{children:"No results from the selection filter"})}),l?Object(D.jsx)("p",{children:"Loading..."}):T&&Object(D.jsx)(X,{debatesCount:s})]}),Object(D.jsx)(L,{authors:e,selectedMPsForCount:a,selectMPsForCount:e=>{n(e)},startDateForCount:u,selectStartDateForCount:e=>{h(e)},endDateForCount:b,selectEndDateForCount:e=>{p(e)},isLoading:l}),Object(D.jsxs)("footer",{className:"note",children:[Object(D.jsx)("p",{children:"Made for the collective knowledge of Singaporeans and the betterment of Singaporean Democracy \ud83c\uddf8\ud83c\uddec"}),Object(D.jsxs)("p",{children:["Please submit bugs, feature requests, and general feedback"," ",Object(D.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://forms.gle/seEDmBqZrQrqXeja8",children:"here"})]}),Object(D.jsx)("br",{})]}),Object(D.jsx)(k,{didCountLoadFail:j,setDidCountLoadFail:O}),Object(D.jsx)(G,{didMPsLoadFail:E,setDidMPsLoadFail:f})]})};var Z=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,333)).then((t=>{let{getCLS:a,getFID:n,getFCP:s,getLCP:o,getTTFB:r}=t;a(e),n(e),s(e),o(e),r(e)}))};d.a({dsn:"https://84525b373b9474b69bd9a6243c119d22@o4506650230194176.ingest.sentry.io/4506650231898112",integrations:"production"===_.STAGE&&[new u.a({tracePropagationTargets:["https://hidden-pad-313204.as.r.appspot.com"]}),new h.a({maskAllText:!1,blockAllMedia:!1})],tracesSampleRate:1,replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1}),l.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)($,{})}),document.getElementById("root")),Z()}},[[222,1,2]]]);
//# sourceMappingURL=main.450fa6df.chunk.js.map