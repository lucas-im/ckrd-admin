import{g as r,p as n,y as a,r as o,j as i,s as d,x as e,hh as p}from"./index.53601f29.js";const _={height:"1337",width:"1337"},h=o("path",{id:"path-1",opacity:"1","fill-rule":"evenodd",d:"M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"},null,-1),f={id:"linearGradient-2",x1:"0.79",y1:"0.62",x2:"0.21",y2:"0.86"},u=["stop-color"],C=["stop-color"],x=o("g",{opacity:"1"},[o("use",{"xlink:href":"#path-1",fill:"url(#linearGradient-2)","fill-opacity":"1"})],-1),m=r({__name:"CornerTop",props:{startColor:{default:"#28aff0"},endColor:{default:"#120fc4"}},setup(t){return(s,l)=>(n(),a("svg",_,[o("defs",null,[h,o("linearGradient",f,[o("stop",{offset:"0","stop-color":t.startColor,"stop-opacity":"1"},null,8,u),o("stop",{offset:"1","stop-color":t.endColor,"stop-opacity":"1"},null,8,C)])]),x]))}}),y={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"896",width:"967.8852157128662"},g=o("path",{id:"path-2",opacity:"1","fill-rule":"evenodd",d:"M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"},null,-1),w={id:"linearGradient-3",x1:"0.5",y1:"0",x2:"0.5",y2:"1"},$=["stop-color"],v=["stop-color"],k=o("g",{opacity:"1"},[o("use",{"xlink:href":"#path-2",fill:"url(#linearGradient-3)","fill-opacity":"1"})],-1),G=r({__name:"CornerBottom",props:{startColor:{default:"#28aff0"},endColor:{default:"#120fc4"}},setup(t){return(s,l)=>(n(),a("svg",y,[o("defs",null,[g,o("linearGradient",w,[o("stop",{offset:"0","stop-color":t.startColor,"stop-opacity":"1"},null,8,$),o("stop",{offset:"1","stop-color":t.endColor,"stop-opacity":"1"},null,8,v)])]),k]))}}),b={class:"absolute-lt z-1 wh-full overflow-hidden"},B={class:"absolute -right-300px -top-900px <sm:(-right-100px -top-1170px)"},M={class:"absolute -left-200px -bottom-400px <sm:(-left-100px -bottom-760px)"},j=r({__name:"index",props:{themeColor:null},setup(t){const s=t,l=i(()=>p(s.themeColor,3)),c=i(()=>p(s.themeColor,6));return(N,V)=>(n(),a("div",b,[o("div",B,[d(e(m),{"start-color":e(l),"end-color":e(c)},null,8,["start-color","end-color"])]),o("div",M,[d(e(G),{"start-color":e(c),"end-color":e(l)},null,8,["start-color","end-color"])])]))}});export{j as _};
