import{a5 as h,aq as v,j as c,ar as C,as as L,g as i,m as e,at as w,a as p,c as s,e as t,au as m,av as x,L as g,aw as b,ae as d,a8 as u,ac as y}from"./index.53601f29.js";function D(a){const{mergedLocaleRef:o,mergedDateLocaleRef:l}=h(v,null)||{},f=c(()=>{var r,n;return(n=(r=o==null?void 0:o.value)===null||r===void 0?void 0:r[a])!==null&&n!==void 0?n:C[a]});return{dateLocaleRef:c(()=>{var r;return(r=l==null?void 0:l.value)!==null&&r!==void 0?r:L}),localeRef:f}}const B=i({name:"ChevronDown",render(){return e("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),S=w("clear",e("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},e("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},e("g",{fill:"currentColor","fill-rule":"nonzero"},e("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),_=p("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[s(">",[t("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[s("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),s("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),t("placeholder",`
 display: flex;
 `),t("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[m({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),P=i({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(a){return x("-base-clear",_,g(a,"clsPrefix")),{handleMouseDown(o){o.preventDefault()}}},render(){const{clsPrefix:a}=this;return e("div",{class:`${a}-base-clear`},e(b,null,{default:()=>{var o,l;return this.show?e("div",{key:"dismiss",class:`${a}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},d(this.$slots.icon,()=>[e(u,{clsPrefix:a},{default:()=>e(S,null)})])):e("div",{key:"icon",class:`${a}-base-clear__placeholder`},(l=(o=this.$slots).placeholder)===null||l===void 0?void 0:l.call(o))}}))}}),I=i({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(a,{slots:o}){return()=>{const{clsPrefix:l}=a;return e(y,{clsPrefix:l,class:`${l}-base-suffix`,strokeWidth:24,scale:.85,show:a.loading},{default:()=>a.showArrow?e(P,{clsPrefix:l,show:a.showClear,onClear:a.onClear},{placeholder:()=>e(u,{clsPrefix:l,class:`${l}-base-suffix__arrow`},{default:()=>d(o.default,()=>[e(B,null)])})}):null})}}});export{B as C,I as N,P as a,D as u};
