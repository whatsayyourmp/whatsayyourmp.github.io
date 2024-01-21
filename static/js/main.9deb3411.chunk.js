(this["webpackJsonpdebates-frontend"]=this["webpackJsonpdebates-frontend"]||[]).push([[0],{296:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){},452:function(e,t,a){},453:function(e,t,a){},457:function(e,t,a){},459:function(e,t,a){"use strict";a.r(t);var s,n,r=a(0),o=a.n(r),c=a(42),i=a.n(c),l=(a(296),a(173)),d=a.n(l),j=a(33),u=a.n(j);const b="production",h={default:"http://localhost:6969/counts-per-mp",production:"https://hidden-pad-313204.as.r.appspot.com/counts-per-mp"},O={default:"http://localhost:6969/current-mps",production:"https://hidden-pad-313204.as.r.appspot.com/current-mps"};var p={DEFAULT_COUNT_RANGE_END_DATE:u()(Date.now()),DEFAULT_COUNT_RANGE_START_DATE:u()(new Date("2020-08-24")),GET_COUNTS_PER_MP_FOR_DATE_RANGE:null!==(s=h[b])&&void 0!==s?s:h.default,GET_CURRENT_MPS:null!==(n=O[b])&&void 0!==n?n:O.default};a(314);var f=a(528),m=a(529),x=a(533),D=a(245),C=a(246),E=a(117),g=a(258),T=(a(315),a(2));const F="#3498db",_="#2ecc71",A="#e74c3c",v="#f39c12",P="#9b59b6",S="#1abc9c",M="#e67e22",N={"Written Answers to Questions for Oral Answer Not Answered by End of Question Time":F,"Written Answers to Questions":_,"Oral Answers to Questions":A,"President's Address":v,Budget:P,"Ministerial Statement":S,Clarification:M,Bills:"#34495e","Bills Introduced":"#95a5a6","Matter Raised On Adjournment Motion":"#2c3e50",Motion:M,"Corrections by Written Statements":"#27ae60",Tributes:"#8e44ad","Point Of Order":"#f1c40f",Petitions:F,"Permission to Members to be Absent":_,"Speaker / Announcement by Speaker":A,"Administration Of Oaths":v,Attendance:P,"Personal Explanation":S},L=e=>{let{transformedDebatesCount:t,uniqueReportTypes:a}=e;return Object(T.jsxs)("div",{id:"debate-statistics-section",children:[Object(T.jsx)("h3",{children:"Debates Participated Per Selected MP"}),Object(T.jsx)(f.a,{width:"100%",minHeight:"50vh",children:Object(T.jsxs)(m.a,{width:500,height:300,data:t,margin:{top:20,right:30,left:20,bottom:5},children:[Object(T.jsx)(x.a,{strokeDasharray:"3 3"}),Object(T.jsx)(D.a,{dataKey:"name"}),Object(T.jsx)(C.a,{}),Object(T.jsx)(E.a,{}),a.map(((e,t)=>Object(T.jsx)(g.a,{dataKey:e,stackId:"a",fill:N[e]},t)))]})})]})};var y=Object(r.memo)(L),R=a(548),w=a(558);a(452);var U=e=>{let{allMPs:t,selectedMPs:a,selectMPs:s,isLoading:n}=e;const r=t.map((e=>{const t=e.name;return{name:t,value:t}})),o=t.length>0;return Object(T.jsx)(R.a,{options:r,multiple:!0,search:!0,closeOnSelect:!0,filterOptions:w.a,placeholder:o?"Please select Members of Parliament to get counts for":"Loading the list of Members of Parliament...",onChange:s,value:a,printOptions:"on-focus",disabled:n})},k=a(250),G=a(545),B=a(546),I=a(547);a(453);var q=e=>{let{startDateForCount:t,selectStartDateForCount:a,endDateForCount:s,selectEndDateForCount:n,isLoading:r}=e;return Object(T.jsxs)("div",{id:"date-range-picker",children:[Object(T.jsx)(B.a,{label:"Start Year & Month",views:["year","month"],minDate:p.DEFAULT_COUNT_RANGE_START_DATE,maxDate:p.DEFAULT_COUNT_RANGE_END_DATE,value:t,onChange:a,renderInput:e=>Object(T.jsx)(I.a,{...e,helperText:null}),disabled:r}),Object(T.jsx)(B.a,{label:"End Year & Month",views:["year","month"],minDate:t,maxDate:p.DEFAULT_COUNT_RANGE_END_DATE,value:s,onChange:n,renderInput:e=>Object(T.jsx)(I.a,{...e,error:!0,helperText:"End date cannot be earlier than start."}),disabled:r})]})};a(457);var z=e=>{let{authors:t,selectedMPsForCount:a,selectMPsForCount:s,startDateForCount:n,selectStartDateForCount:r,endDateForCount:o,selectEndDateForCount:c,isLoading:i}=e;return Object(T.jsxs)("div",{id:"select-stats-filters",children:[Object(T.jsx)(U,{allMPs:t,selectedMPs:a,selectMPs:s,isLoading:i}),Object(T.jsx)(k.a,{dateAdapter:G.a,children:Object(T.jsx)(q,{startDateForCount:n,selectStartDateForCount:r,endDateForCount:o,selectEndDateForCount:c,isLoading:i})})]})},Q=a(551),H=a(557),W=a(140),Y=a.n(W),J=a(550);var K=e=>{let{didCountLoadFail:t,setDidCountLoadFail:a}=e;const s=()=>a(!1);return Object(T.jsx)(Q.a,{open:t,autoHideDuration:6e3,onClose:s,message:"",action:Object(T.jsx)(r.Fragment,{children:Object(T.jsx)(H.a,{size:"small","aria-label":"close",color:"inherit",onClick:s,children:Object(T.jsx)(Y.a,{fontSize:"small"})})}),children:Object(T.jsx)(J.a,{onClose:s,severity:"error",variant:"filled",sx:{width:"100%"},children:"Failed to load the counts, please try again"})})};var $=e=>{let{didMPsLoadFail:t,setDidMPsLoadFail:a}=e;const s=()=>a(!1);return Object(T.jsx)(Q.a,{open:t,autoHideDuration:6e4,onClose:s,message:"",action:Object(T.jsx)(r.Fragment,{children:Object(T.jsx)(H.a,{size:"small","aria-label":"close",color:"inherit",onClick:s,children:Object(T.jsx)(Y.a,{fontSize:"small"})})}),children:Object(T.jsx)(J.a,{onClose:s,severity:"error",variant:"filled",sx:{width:"100%"},children:"Failed to load MPs to select, please reload the page or try again later."})})};var X=function(){const[e,t]=Object(r.useState)([]),[a,s]=Object(r.useState)([]),[n,o]=Object(r.useState)([]),[c,i]=Object(r.useState)([]),[l,j]=Object(r.useState)(!1),[u,b]=Object(r.useState)(p.DEFAULT_COUNT_RANGE_START_DATE),[h,O]=Object(r.useState)(p.DEFAULT_COUNT_RANGE_END_DATE),[f,m]=Object(r.useState)(!1),[x,D]=Object(r.useState)(!1);Object(r.useEffect)((()=>{d.a.get(p.GET_CURRENT_MPS).then((e=>{e.data&&t(e.data)})).catch((e=>{D(!0)}))}),[]),Object(r.useEffect)((()=>{h<u||0!==a.length&&j(!0)}),[a,u,h]),Object(r.useEffect)((()=>{l&&(async(e,t,a)=>d.a.get(p.GET_COUNTS_PER_MP_FOR_DATE_RANGE,{params:{mpNames:e,startDate:t.$d,endDate:a.$d}}))(a,u,h).then((e=>{const[t,a]=(e=>{const t=[];for(const r in e){const a=e[r];e[r]||(e[r]={});for(const e in a)t.includes(e)||t.push(e)}const a=[],s=Object.keys(e),n=Object.values(e);for(let r=0;r<Object.entries(e).length;r++)a.push({name:s[r],...n[r]});return[a,t]})(e.data);o(t),i(a)})).catch((e=>{console.error("See error when fetching count:",e),m(!0)})).finally((()=>j(!1)))}),[l,a,u,h]);const C=a.length>0,E=c.length>0;return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("header",{children:Object(T.jsx)("h1",{children:"What Say Your MP"})}),Object(T.jsx)("div",{children:Object(T.jsxs)("p",{children:["This project uses the"," ",Object(T.jsx)("a",{href:"https://www.parliament.gov.sg/parliamentary-business/official-reports-(parl-debates)",children:"official reports"})," ","of each parliamentary session to collect debate records, a.k.a. Hansards. These debates are then analyzed to investigate the involvement of each MP in debates."]})}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{children:"Overall Statistics"}),!C&&!l&&Object(T.jsx)("div",{children:Object(T.jsx)("p",{children:"Please Select Some MPs"})}),C&&!l&&!E&&Object(T.jsx)("div",{children:Object(T.jsx)("p",{children:"No results from the selection filter"})}),l?Object(T.jsx)("p",{children:"Loading..."}):E&&Object(T.jsx)(y,{transformedDebatesCount:n,uniqueReportTypes:c}),Object(T.jsx)(z,{authors:e,selectedMPsForCount:a,selectMPsForCount:e=>{s(e)},startDateForCount:u,selectStartDateForCount:e=>{b(e)},endDateForCount:h,selectEndDateForCount:e=>{O(e)},isLoading:l})]}),Object(T.jsxs)("footer",{className:"note",children:[Object(T.jsx)("p",{children:"Made for the collective knowledge of Singaporeans and the betterment of Singaporean Democracy \ud83c\uddf8\ud83c\uddec"}),Object(T.jsxs)("p",{children:["Please submit bugs, feature requests, and general feedback"," ",Object(T.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://forms.gle/seEDmBqZrQrqXeja8",children:"here"})]}),Object(T.jsx)("br",{})]}),Object(T.jsx)(K,{didCountLoadFail:f,setDidCountLoadFail:m}),Object(T.jsx)($,{didMPsLoadFail:x,setDidMPsLoadFail:D})]})};var Z=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,562)).then((t=>{let{getCLS:a,getFID:s,getFCP:n,getLCP:r,getTTFB:o}=t;a(e),s(e),n(e),r(e),o(e)}))};i.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(X,{})}),document.getElementById("root")),Z()}},[[459,1,2]]]);
//# sourceMappingURL=main.9deb3411.chunk.js.map