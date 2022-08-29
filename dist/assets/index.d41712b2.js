import{c as _,a as t,b as ne,d as D,e as J,i as oe,f as re,g as m,u as se,h as Q,j as W,k as ie,l as le,m as u,n as ae,o as O,p as g,q as y,w as c,r as L,_ as T,s as p,t as $,v as B,x as v,y as X,z as Z,F as ee}from"./index.53601f29.js";import{u as ce}from"./use-compitable.1ce3181b.js";import{g as de,_ as ue}from"./Space.5825aa0a.js";import{N as pe}from"./Tag.c6ee1a54.js";function Y(e,i="default",s=[]){const{children:l}=e;if(l!==null&&typeof l=="object"&&!Array.isArray(l)){const b=l[i];if(typeof b=="function")return b()}return s}const te=Symbol("DESCRIPTION_ITEM_FLAG");function be(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[te]:!1}const me=_([t("descriptions",{fontSize:"var(--n-font-size)"},[t("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[t("descriptions-table-header",{padding:"var(--n-th-padding)"}),t("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),ne("bordered",[t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[_("&:last-child",[t("descriptions-table-content",{paddingBottom:0})])])])])]),D("left-label-placement",[t("descriptions-table-content",[_("> *",{verticalAlign:"top"})])]),D("left-label-align",[_("th",{textAlign:"left"})]),D("center-label-align",[_("th",{textAlign:"center"})]),D("right-label-align",[_("th",{textAlign:"right"})]),D("bordered",[t("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[t("descriptions-table",[t("descriptions-table-row",[_("&:not(:last-child)",[t("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),t("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[_("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-content",[_("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),t("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),t("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[t("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[t("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[t("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),t("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[J("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),J("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),oe(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),re(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),he=Object.assign(Object.assign({},Q.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),G=m({name:"Descriptions",props:he,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=se(e),l=Q("Descriptions","-descriptions",me,ae,e,i),b=W(()=>{const{size:o,bordered:a}=e,{common:{cubicBezierEaseInOut:f},self:{titleTextColor:r,thColor:V,thColorModal:x,thColorPopover:j,thTextColor:R,thFontWeight:U,tdTextColor:P,tdColor:n,tdColorModal:F,tdColorPopover:N,borderColor:h,borderColorModal:E,borderColorPopover:w,borderRadius:z,lineHeight:C,[O("fontSize",o)]:S,[O(a?"thPaddingBordered":"thPadding",o)]:k,[O(a?"tdPaddingBordered":"tdPadding",o)]:A}}=l.value;return{"--n-title-text-color":r,"--n-th-padding":k,"--n-td-padding":A,"--n-font-size":S,"--n-bezier":f,"--n-th-font-weight":U,"--n-line-height":C,"--n-th-text-color":R,"--n-td-text-color":P,"--n-th-color":V,"--n-th-color-modal":x,"--n-th-color-popover":j,"--n-td-color":n,"--n-td-color-modal":F,"--n-td-color-popover":N,"--n-border-radius":z,"--n-border-color":h,"--n-border-color-modal":E,"--n-border-color-popover":w}}),d=s?ie("descriptions",W(()=>{let o="";const{size:a,bordered:f}=e;return f&&(o+="a"),o+=a[0],o}),b,e):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:b,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender,compitableColumn:ce(e,["columns","column"]),inlineThemeDisabled:s}},render(){const e=this.$slots.default,i=e?le(e()):[];i.length;const{compitableColumn:s,labelPlacement:l,labelAlign:b,size:d,bordered:o,title:a,cssVars:f,mergedClsPrefix:r,separator:V,onRender:x}=this;x==null||x();const j=i.filter(n=>be(n)),R={span:0,row:[],secondRow:[],rows:[]},P=j.reduce((n,F,N)=>{const h=F.props||{},E=j.length-1===N,w=["label"in h?h.label:Y(F,"label")],z=[Y(F)],C=h.span||1,S=n.span;n.span+=C;const k=h.labelStyle||h["label-style"]||this.labelStyle,A=h.contentStyle||h["content-style"]||this.contentStyle;if(l==="left")o?n.row.push(u("th",{class:`${r}-descriptions-table-header`,colspan:1,style:k},w),u("td",{class:`${r}-descriptions-table-content`,colspan:E?(s-S)*2+1:C*2-1,style:A},z)):n.row.push(u("td",{class:`${r}-descriptions-table-content`,colspan:E?(s-S)*2:C*2},u("span",{class:`${r}-descriptions-table-content__label`,style:k},[...w,V&&u("span",{class:`${r}-descriptions-separator`},V)]),u("span",{class:`${r}-descriptions-table-content__content`,style:A},z)));else{const q=E?(s-S)*2:C*2;n.row.push(u("th",{class:`${r}-descriptions-table-header`,colspan:q,style:k},w)),n.secondRow.push(u("td",{class:`${r}-descriptions-table-content`,colspan:q,style:A},z))}return(n.span>=s||E)&&(n.span=0,n.row.length&&(n.rows.push(n.row),n.row=[]),l!=="left"&&n.secondRow.length&&(n.rows.push(n.secondRow),n.secondRow=[])),n},R).rows.map(n=>u("tr",{class:`${r}-descriptions-table-row`},n));return u("div",{style:f,class:[`${r}-descriptions`,this.themeClass,`${r}-descriptions--${l}-label-placement`,`${r}-descriptions--${b}-label-align`,`${r}-descriptions--${d}-size`,o&&`${r}-descriptions--bordered`]},a||this.$slots.header?u("div",{class:`${r}-descriptions-header`},a||de(this,"header")):null,u("div",{class:`${r}-descriptions-table-wrapper`},u("table",{class:`${r}-descriptions-table`},u("tbody",null,P))))}}),_e={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},M=m({name:"DescriptionsItem",[te]:!0,props:_e,render(){return null}}),ge=L("p",{class:"leading-24px"}," Soybean Admin \u662F\u4E00\u4E2A\u57FA\u4E8E Vue3\u3001Vite\u3001Naive UI\u3001TypeScript \u7684\u4E2D\u540E\u53F0\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u4F7F\u7528\u4E86\u6700\u65B0\u7684\u524D\u7AEF\u6280\u672F\u6808\uFF0C\u5E76\u63D0\u70BC\u4E86\u5178\u578B\u7684\u4E1A\u52A1\u6A21\u578B\uFF0C\u9875\u9762\uFF0C\u5305\u62EC\u4E8C\u6B21\u5C01\u88C5\u7EC4\u4EF6\u3001\u52A8\u6001\u83DC\u5355\u3001\u6743\u9650\u6821\u9A8C\u3001\u7C92\u5B50\u5316\u6743\u9650\u63A7\u5236\u7B49\u529F\u80FD\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5FEB\u901F\u642D\u5EFA\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u9879\u76EE\uFF0C\u76F8\u4FE1\u4E0D\u7BA1\u662F\u4ECE\u65B0\u6280\u672F\u4F7F\u7528\u8FD8\u662F\u5176\u4ED6\u65B9\u9762\uFF0C\u90FD\u80FD\u5E2E\u52A9\u5230\u4F60\u3002 ",-1),ve=m({name:"ProjectIntroduction"}),fe=m({...ve,setup(e){return(i,s)=>{const l=T;return g(),y(l,{title:"\u5173\u4E8E",bordered:!1,size:"large",class:"rounded-16px shadow-sm"},{default:c(()=>[ge]),_:1})}}}),ye="ckrd-admin",Ee="1.0.0",Ce="An admin panel for cryptokrd",xe={name:"Joong Hyuk Im",email:"lucas@koup.dev"},Fe=["Vue","Vue3","admin","admin-template","vue-admin","vue-admin-template","Vite3","Vite","vite-admin","TypeScript","TS","NaiveUI","naive-ui","naive-admin","NaiveUI-Admin","naive-ui-admin","UnoCSS"],we={dev:"cross-env VITE_SERVICE_ENV=dev vite","dev:test":"cross-env VITE_SERVICE_ENV=test vite","dev:prod":"cross-env VITE_SERVICE_ENV=prod vite",build:"cross-env VITE_SERVICE_ENV=prod vite build","build:dev":"npm run typecheck && cross-env VITE_SERVICE_ENV=dev vite build","build:test":"npm run typecheck && cross-env VITE_SERVICE_ENV=test vite build","build:vercel":"cross-env VITE_HASH_ROUTE=Y VITE_VERCEL=Y vite build",preview:"vite preview",typecheck:"vue-tsc --noEmit --skipLibCheck",lint:"eslint . --fix",prepare:"husky install",postinstall:"patch-package",release:"standard-version",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"},ze={"@antv/data-set":"^0.11.8","@antv/g2":"^4.2.6","@better-scroll/core":"^2.4.2","@soybeanjs/vue-admin-layout":"^1.1.1","@soybeanjs/vue-admin-tab":"^1.0.5","@vueuse/core":"^9.1.0",axios:"^0.27.2",clipboard:"^2.0.11",colord:"^2.9.3","crypto-js":"^4.1.1",dayjs:"^1.11.5",echarts:"^5.3.3",firebase:"^9.9.2","form-data":"^4.0.0","lodash-es":"^4.17.21","naive-ui":"^2.32.1",pinia:"^2.0.18","print-js":"^1.6.0",qs:"^6.11.0",swiper:"^8.3.2","ua-parser-js":"^1.0.2",vditor:"^3.8.17",vue:"3.2.37","vue-router":"^4.1.3",wangeditor:"^4.7.15",xgplayer:"^2.31.7","@vicons/ionicons5":"^0.12.0"},Se={"@amap/amap-jsapi-types":"^0.0.8","@commitlint/cli":"^17.0.3","@commitlint/config-conventional":"^17.0.3","@iconify/json":"^2.1.92","@iconify/vue":"^3.2.1","@milahu/patch-package":"^6.4.14","@soybeanjs/eslint-config":"0.2.10","@types/bmapgl":"^0.0.5","@types/crypto-js":"^4.1.1","@types/node":"^18.7.3","@types/qs":"^6.9.7","@types/ua-parser-js":"^0.7.36","@vitejs/plugin-vue":"^3.0.3","@vitejs/plugin-vue-jsx":"^2.0.0",commitizen:"^4.2.5","cross-env":"^7.0.3","cz-conventional-changelog":"^3.3.0","cz-customizable":"^6.9.1",eslint:"^8.22.0",husky:"^8.0.1","lint-staged":"^13.0.3",mockjs:"^1.1.0","postinstall-postinstall":"^2.1.0","rollup-plugin-visualizer":"^5.7.1",sass:"^1.54.4","standard-version":"^9.5.0",typescript:"^4.7.4",unocss:"^0.45.6","unplugin-icons":"^0.14.8","unplugin-vue-components":"0.22.4","unplugin-vue-define-options":"^0.9.2",vite:"^3.0.7","vite-plugin-compression":"^0.5.1","vite-plugin-html":"^3.2.0","vite-plugin-mock":"^2.9.6","vite-plugin-svg-icons":"^2.0.1","vue-tsc":"^0.40.1"},ke={commitizen:{path:"./node_modules/cz-customizable"}},Ae={name:ye,version:Ee,description:Ce,author:xe,keywords:Fe,scripts:we,dependencies:ze,devDependencies:Se,"lint-staged":{"*.{vue,js,jsx,ts,tsx,json}":"eslint --fix"},config:ke},I=Ae;function K(e){const[i,s]=e;return{name:i,version:s}}const H={name:I.name,version:I.version,dependencies:Object.entries(I.dependencies).map(e=>K(e)),devDependencies:Object.entries(I.devDependencies).map(e=>K(e))},De=L("a",{class:"text-primary",href:"https://github.com/honghuangdc/soybean-admin",target:"_blank"},"Github\u5730\u5740",-1),Ve=L("a",{class:"text-primary",href:"https://soybean.pro",target:"_blank"},"\u9884\u89C8\u5730\u5740",-1),je=m({name:"ProjectInfo"}),Ie=m({...je,setup(e){const{version:i}=H,s="2022-08-29 15:20:14";return(l,b)=>{const d=pe,o=M,a=G,f=T;return g(),y(f,{title:"\u9879\u76EE\u4FE1\u606F",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:c(()=>[p(a,{"label-placement":"left",bordered:"",size:"small",column:2},{default:c(()=>[p(o,{label:"\u7248\u672C"},{default:c(()=>[p(d,{type:"primary"},{default:c(()=>[$(B(v(i)),1)]),_:1})]),_:1}),p(o,{label:"\u6700\u540E\u7F16\u8BD1\u65F6\u95F4"},{default:c(()=>[p(d,{type:"primary"},{default:c(()=>[$(B(v(s)),1)]),_:1})]),_:1}),p(o,{label:"Github\u5730\u5740"},{default:c(()=>[De]),_:1}),p(o,{label:"\u9884\u89C8\u5730\u5740"},{default:c(()=>[Ve]),_:1})]),_:1})]),_:1})}}}),$e=m({name:"ProDependency"}),Be=m({...$e,setup(e){const{dependencies:i}=H;return(s,l)=>{const b=M,d=G,o=T;return g(),y(o,{title:"\u751F\u4EA7\u73AF\u5883\u4F9D\u8D56",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:c(()=>[p(d,{"label-placement":"left",bordered:"",size:"small"},{default:c(()=>[(g(!0),X(ee,null,Z(v(i),a=>(g(),y(b,{key:a.name,label:a.name},{default:c(()=>[$(B(a.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),Te=m({name:"DevDependency"}),Re=m({...Te,setup(e){const{devDependencies:i}=H;return(s,l)=>{const b=M,d=G,o=T;return g(),y(o,{title:"\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:c(()=>[p(d,{"label-placement":"left",bordered:"",size:"small"},{default:c(()=>[(g(!0),X(ee,null,Z(v(i),a=>(g(),y(b,{key:a.name,label:a.name},{default:c(()=>[$(B(a.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),Ge=m({__name:"index",setup(e){return(i,s)=>{const l=ue;return g(),y(l,{vertical:!0,size:16},{default:c(()=>[p(v(fe)),p(v(Ie)),p(v(Be)),p(v(Re))]),_:1})}}});export{Ge as default};
