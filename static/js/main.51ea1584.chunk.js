(this.webpackJsonpreactcovid19tracker=this.webpackJsonpreactcovid19tracker||[]).push([[0],{33:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),r=c.n(s),n=c(25),i=c.n(n),j=(c(33),c(12)),l=c(6),d=c(26),o=(c(34),c(10)),x=c.n(o),h=c(27),b=c(11),O=c(15);var u=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)([]),i=Object(j.a)(n,2),o=i[0],u=i[1],g=Object(s.useState)(""),p=Object(j.a)(g,2),m=p[0],y=p[1];Object(s.useEffect)((function(){O.a.initialize("G-D4V29PHVG5"),O.a.pageview("/"),x.a.all([x.a.get("https://corona.lmao.ninja/v2/all"),x.a.get("https://corona.lmao.ninja/v2/countries")]).then((function(e){r(e[0].data),u(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var v=o.filter((function(e){return""!==m?e.country.includes(m):e})).map((function(e,t){return Object(a.jsxs)(l.a,{className:"text-center",bg:"light",text:"dark",border:"dark",style:{margin:"10px"},children:[Object(a.jsx)(l.a.Img,{variant:"top",src:e.countryInfo.flag,style:{height:"300px"}}),Object(a.jsxs)(l.a.Body,{children:[Object(a.jsx)(l.a.Title,{children:e.country}),Object(a.jsxs)(l.a.Text,{children:["Cases    ",e.cases]}),Object(a.jsxs)(l.a.Text,{children:[" Deaths   ",e.deaths]}),Object(a.jsxs)(l.a.Text,{children:[" Recovered ",e.recovered]}),Object(a.jsxs)(l.a.Text,{children:[" TodayCases ",e.todayCases]}),Object(a.jsxs)(l.a.Text,{children:[" TodayDeaths ",e.todayDeaths]}),Object(a.jsxs)(l.a.Text,{children:["Active ",e.active]}),Object(a.jsxs)(l.a.Text,{children:["Critical ",e.critical]})]})]},t)})),f=new Date(parseInt(c.updated)).toLocaleString();return Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsxs)("h3",{style:{textAlign:"center"},children:["Covid-19 Live Stats",Object(a.jsx)("sub",{children:"naveenprabhu"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(l.a,{className:"text-center",bg:"warning",text:"white",border:"dark",style:{margin:"10px"},children:[Object(a.jsxs)(l.a.Body,{children:[Object(a.jsx)(l.a.Title,{children:"Cases"}),Object(a.jsx)(l.a.Text,{children:c.cases})]}),Object(a.jsx)(l.a.Footer,{children:Object(a.jsxs)("small",{children:["Last Update ",f," "]})})]}),Object(a.jsxs)(l.a,{className:"text-center",bg:"danger",text:"white",border:"dark",style:{margin:"10px"},children:[Object(a.jsxs)(l.a.Body,{children:[Object(a.jsx)(l.a.Title,{children:"Deaths"}),Object(a.jsx)(l.a.Text,{children:c.deaths})]}),Object(a.jsx)(l.a.Footer,{children:Object(a.jsxs)("small",{children:["Last Update ",f," "]})})]}),Object(a.jsxs)(l.a,{className:"text-center",bg:"success",text:"white",border:"dark",style:{margin:"10px"},children:[Object(a.jsxs)(l.a.Body,{children:[Object(a.jsx)(l.a.Title,{children:"Recovered"}),Object(a.jsx)(l.a.Text,{children:c.recovered})]}),Object(a.jsx)(l.a.Footer,{children:Object(a.jsxs)("small",{children:["Last Update ",f]})})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)(b.a,{children:Object(a.jsx)(b.a.Group,{controlId:"formGroupSearch",style:{width:"50%",marginLeft:"30%"},children:Object(a.jsx)(b.a.Control,{type:"text",placeholder:"Search a Country",onChange:function(e){return y(e.target.value)}})})}),Object(a.jsx)(h.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}],children:v})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),g()}},[[55,1,2]]]);
//# sourceMappingURL=main.51ea1584.chunk.js.map