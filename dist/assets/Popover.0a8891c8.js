import{aF as re,aG as oe,aM as Ue,aN as ve,aO as We,aP as he,aQ as pe,aR as V,aS as ge,aT as me,aU as k,aV as Ge,aW as we,aX as Ze,aY as Oe,aZ as Ve,a_ as Xe,a$ as Je,b0 as Ye,b1 as ke,b2 as Pe,b3 as qe,g as te,m,a as P,e as F,c as z,u as Te,h as X,b4 as je,a5 as Me,aq as Qe,j as T,o as ye,k as Be,a8 as en,b as ae,d as Q,b5 as nn,J as D,ah as tn,a4 as rn,U as on,L as q,K as j,aE as an,aD as sn,aC as ln,a9 as dn,b6 as un,am as be,al as cn,Z as ie,ao as _e,b7 as Ce,b8 as fn,az as vn,V as Ie,M as se,F as hn,b9 as pn,ak as gn,a6 as Se,ba as xe,bb as mn,aK as wn,bc as yn,t as bn,P as J}from"./index.53601f29.js";import{u as _n}from"./Suffix.8a5dc570.js";import{c as Cn,t as ce,i as ze,g as Sn,b as xn}from"./get.4ea905a4.js";import{u as ee,c as $n,b as An,V as Rn}from"./Follower.3bd7a0ed.js";import{u as En}from"./use-merged-state.7e5a28e5.js";import{u as On}from"./use-compitable.1ce3181b.js";let le;function Pn(){return le===void 0&&(le=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),le}const U="@@mmoContext",Tn={mounted(e,{value:n}){e[U]={handler:void 0},typeof n=="function"&&(e[U].handler=n,re("mousemoveoutside",e,n))},updated(e,{value:n}){const t=e[U];typeof n=="function"?t.handler?t.handler!==n&&(oe("mousemoveoutside",e,t.handler),t.handler=n,re("mousemoveoutside",e,n)):(e[U].handler=n,re("mousemoveoutside",e,n)):t.handler&&(oe("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:n}=e[U];n&&oe("mousemoveoutside",e,n),e[U].handler=void 0}},Mn=Tn;var Bn="__lodash_hash_undefined__";function In(e){return this.__data__.set(e,Bn),this}function zn(e){return this.__data__.has(e)}function ne(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new Ue;++n<t;)this.add(e[n])}ne.prototype.add=ne.prototype.push=In;ne.prototype.has=zn;function Ln(e,n){for(var t=-1,r=e==null?0:e.length;++t<r;)if(n(e[t],t,e))return!0;return!1}function Dn(e,n){return e.has(n)}var Fn=1,Hn=2;function Le(e,n,t,r,a,o){var s=t&Fn,i=e.length,l=n.length;if(i!=l&&!(s&&l>i))return!1;var c=o.get(e),d=o.get(n);if(c&&d)return c==n&&d==e;var f=-1,v=!0,w=t&Hn?new ne:void 0;for(o.set(e,n),o.set(n,e);++f<i;){var y=e[f],h=n[f];if(r)var A=s?r(h,y,f,n,e,o):r(y,h,f,e,n,o);if(A!==void 0){if(A)continue;v=!1;break}if(w){if(!Ln(n,function(S,x){if(!Dn(w,x)&&(y===S||a(y,S,t,r,o)))return w.push(x)})){v=!1;break}}else if(!(y===h||a(y,h,t,r,o))){v=!1;break}}return o.delete(e),o.delete(n),v}function Nn(e){var n=-1,t=Array(e.size);return e.forEach(function(r,a){t[++n]=[a,r]}),t}function Kn(e){var n=-1,t=Array(e.size);return e.forEach(function(r){t[++n]=r}),t}var Un=1,Wn=2,Gn="[object Boolean]",Zn="[object Date]",Vn="[object Error]",Xn="[object Map]",Jn="[object Number]",Yn="[object RegExp]",kn="[object Set]",qn="[object String]",jn="[object Symbol]",Qn="[object ArrayBuffer]",et="[object DataView]",$e=ve?ve.prototype:void 0,de=$e?$e.valueOf:void 0;function nt(e,n,t,r,a,o,s){switch(t){case et:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Qn:return!(e.byteLength!=n.byteLength||!o(new he(e),new he(n)));case Gn:case Zn:case Jn:return We(+e,+n);case Vn:return e.name==n.name&&e.message==n.message;case Yn:case qn:return e==n+"";case Xn:var i=Nn;case kn:var l=r&Un;if(i||(i=Kn),e.size!=n.size&&!l)return!1;var c=s.get(e);if(c)return c==n;r|=Wn,s.set(e,n);var d=Le(i(e),i(n),r,a,o,s);return s.delete(e),d;case jn:if(de)return de.call(e)==de.call(n)}return!1}var tt=1,rt=Object.prototype,ot=rt.hasOwnProperty;function at(e,n,t,r,a,o){var s=t&tt,i=pe(e),l=i.length,c=pe(n),d=c.length;if(l!=d&&!s)return!1;for(var f=l;f--;){var v=i[f];if(!(s?v in n:ot.call(n,v)))return!1}var w=o.get(e),y=o.get(n);if(w&&y)return w==n&&y==e;var h=!0;o.set(e,n),o.set(n,e);for(var A=s;++f<l;){v=i[f];var S=e[v],x=n[v];if(r)var H=s?r(x,S,v,n,e,o):r(S,x,v,e,n,o);if(!(H===void 0?S===x||a(S,x,t,r,o):H)){h=!1;break}A||(A=v=="constructor")}if(h&&!A){var M=e.constructor,O=n.constructor;M!=O&&"constructor"in e&&"constructor"in n&&!(typeof M=="function"&&M instanceof M&&typeof O=="function"&&O instanceof O)&&(h=!1)}return o.delete(e),o.delete(n),h}var it=1,Ae="[object Arguments]",Re="[object Array]",Y="[object Object]",st=Object.prototype,Ee=st.hasOwnProperty;function lt(e,n,t,r,a,o){var s=V(e),i=V(n),l=s?Re:ge(e),c=i?Re:ge(n);l=l==Ae?Y:l,c=c==Ae?Y:c;var d=l==Y,f=c==Y,v=l==c;if(v&&me(e)){if(!me(n))return!1;s=!0,d=!1}if(v&&!d)return o||(o=new k),s||Ge(e)?Le(e,n,t,r,a,o):nt(e,n,l,t,r,a,o);if(!(t&it)){var w=d&&Ee.call(e,"__wrapped__"),y=f&&Ee.call(n,"__wrapped__");if(w||y){var h=w?e.value():e,A=y?n.value():n;return o||(o=new k),a(h,A,t,r,o)}}return v?(o||(o=new k),at(e,n,t,r,a,o)):!1}function fe(e,n,t,r,a){return e===n?!0:e==null||n==null||!we(e)&&!we(n)?e!==e&&n!==n:lt(e,n,t,r,fe,a)}var dt=1,ut=2;function ct(e,n,t,r){var a=t.length,o=a,s=!r;if(e==null)return!o;for(e=Object(e);a--;){var i=t[a];if(s&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<o;){i=t[a];var l=i[0],c=e[l],d=i[1];if(s&&i[2]){if(c===void 0&&!(l in e))return!1}else{var f=new k;if(r)var v=r(c,d,l,e,n,f);if(!(v===void 0?fe(d,c,dt|ut,r,f):v))return!1}}return!0}function De(e){return e===e&&!Ze(e)}function ft(e){for(var n=Oe(e),t=n.length;t--;){var r=n[t],a=e[r];n[t]=[r,a,De(a)]}return n}function Fe(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function vt(e){var n=ft(e);return n.length==1&&n[0][2]?Fe(n[0][0],n[0][1]):function(t){return t===e||ct(t,e,n)}}function ht(e,n){return e!=null&&n in Object(e)}function pt(e,n,t){n=Cn(n,e);for(var r=-1,a=n.length,o=!1;++r<a;){var s=ce(n[r]);if(!(o=e!=null&&t(e,s)))break;e=e[s]}return o||++r!=a?o:(a=e==null?0:e.length,!!a&&Ve(a)&&Xe(s,a)&&(V(e)||Je(e)))}function gt(e,n){return e!=null&&pt(e,n,ht)}var mt=1,wt=2;function yt(e,n){return ze(e)&&De(n)?Fe(ce(e),n):function(t){var r=Sn(t,e);return r===void 0&&r===n?gt(t,e):fe(n,r,mt|wt)}}function bt(e){return function(n){return n==null?void 0:n[e]}}function _t(e){return function(n){return xn(n,e)}}function Ct(e){return ze(e)?bt(ce(e)):_t(e)}function St(e){return typeof e=="function"?e:e==null?Ye:typeof e=="object"?V(e)?yt(e[0],e[1]):vt(e):Ct(e)}function xt(e,n){return e&&ke(e,n,Oe)}function $t(e,n){return function(t,r){if(t==null)return t;if(!Pe(t))return e(t,r);for(var a=t.length,o=n?a:-1,s=Object(t);(n?o--:++o<a)&&r(s[o],o,s)!==!1;);return t}}var At=$t(xt);const Rt=At;function Et(e,n){var t=-1,r=Pe(e)?Array(e.length):[];return Rt(e,function(a,o,s){r[++t]=n(a,o,s)}),r}function Ot(e,n){var t=V(e)?qe:Et;return t(e,St(n))}const Pt=te({name:"Empty",render(){return m("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),m("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Tt=P("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[F("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[z("+",[F("description",`
 margin-top: 8px;
 `)])]),F("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),F("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Mt=Object.assign(Object.assign({},X.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Jt=te({name:"Empty",props:Mt,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=Te(e),r=X("Empty","-empty",Tt,je,e,n),{localeRef:a}=_n("Empty"),o=Me(Qe,null),s=T(()=>{var d,f,v;return(d=e.description)!==null&&d!==void 0?d:(v=(f=o==null?void 0:o.mergedComponentPropsRef.value)===null||f===void 0?void 0:f.Empty)===null||v===void 0?void 0:v.description}),i=T(()=>{var d,f;return((f=(d=o==null?void 0:o.mergedComponentPropsRef.value)===null||d===void 0?void 0:d.Empty)===null||f===void 0?void 0:f.renderIcon)||(()=>m(Pt,null))}),l=T(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:f},self:{[ye("iconSize",d)]:v,[ye("fontSize",d)]:w,textColor:y,iconColor:h,extraTextColor:A}}=r.value;return{"--n-icon-size":v,"--n-font-size":w,"--n-bezier":f,"--n-text-color":y,"--n-icon-color":h,"--n-extra-text-color":A}}),c=t?Be("empty",T(()=>{let d="";const{size:f}=e;return d+=f[0],d}),l,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:i,localizedDescription:T(()=>s.value||a.value.description),cssVars:t?void 0:l,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:t}=this;return t==null||t(),m("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?m("div",{class:`${n}-empty__icon`},e.icon?e.icon():m(en,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?m("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?m("div",{class:`${n}-empty__extra`},e.extra()):null)}}),ue={top:"bottom",bottom:"top",left:"right",right:"left"},_="var(--n-arrow-height) * 1.414",Bt=z([P("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 `,[z(">",[P("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ae("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[ae("scrollable",[ae("show-header-or-footer","padding: var(--n-padding);")])]),F("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),F("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Q("scrollable, show-header-or-footer",[F("content",`
 padding: var(--n-padding);
 `)])]),P("popover-shared",`
 transform-origin: inherit;
 `,[P("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[P("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${_});
 height: calc(${_});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),z("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),z("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),z("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),z("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),E("top-start",`
 top: calc(${_} / -2);
 left: calc(${I("top-start")} - var(--v-offset-left));
 `),E("top",`
 top: calc(${_} / -2);
 transform: translateX(calc(${_} / -2)) rotate(45deg);
 left: 50%;
 `),E("top-end",`
 top: calc(${_} / -2);
 right: calc(${I("top-end")} + var(--v-offset-left));
 `),E("bottom-start",`
 bottom: calc(${_} / -2);
 left: calc(${I("bottom-start")} - var(--v-offset-left));
 `),E("bottom",`
 bottom: calc(${_} / -2);
 transform: translateX(calc(${_} / -2)) rotate(45deg);
 left: 50%;
 `),E("bottom-end",`
 bottom: calc(${_} / -2);
 right: calc(${I("bottom-end")} + var(--v-offset-left));
 `),E("left-start",`
 left: calc(${_} / -2);
 top: calc(${I("left-start")} - var(--v-offset-top));
 `),E("left",`
 left: calc(${_} / -2);
 transform: translateY(calc(${_} / -2)) rotate(45deg);
 top: 50%;
 `),E("left-end",`
 left: calc(${_} / -2);
 bottom: calc(${I("left-end")} + var(--v-offset-top));
 `),E("right-start",`
 right: calc(${_} / -2);
 top: calc(${I("right-start")} - var(--v-offset-top));
 `),E("right",`
 right: calc(${_} / -2);
 transform: translateY(calc(${_} / -2)) rotate(45deg);
 top: 50%;
 `),E("right-end",`
 right: calc(${_} / -2);
 bottom: calc(${I("right-end")} + var(--v-offset-top));
 `),...Ot({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const t=["right","left"].includes(n),r=t?"width":"height";return e.map(a=>{const o=a.split("-")[1]==="end",i=`calc((${`var(--v-target-${r}, 0px)`} - ${_}) / 2)`,l=I(a);return z(`[v-placement="${a}"] >`,[P("popover-shared",[Q("center-arrow",[P("popover-arrow",`${n}: calc(max(${i}, ${l}) ${o?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function I(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function E(e,n){const t=e.split("-")[0],r=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return z(`[v-placement="${e}"] >`,[P("popover-shared",`
 margin-${ue[t]}: var(--n-space);
 `,[Q("show-arrow",`
 margin-${ue[t]}: var(--n-space-arrow);
 `),Q("overlap",`
 margin: 0;
 `),nn("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${ue[t]}: auto;
 ${r}
 `,[P("popover-arrow",n)])])])}const He=Object.assign(Object.assign({},X.props),{to:ee.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),It=({arrowStyle:e,clsPrefix:n})=>m("div",{key:"__popover-arrow__",class:`${n}-popover-arrow-wrapper`},m("div",{class:`${n}-popover-arrow`,style:e})),zt=te({name:"PopoverBody",inheritAttrs:!1,props:He,setup(e,{slots:n,attrs:t}){const{namespaceRef:r,mergedClsPrefixRef:a,inlineThemeDisabled:o}=Te(e),s=X("Popover","-popover",Bt,un,e,a),i=D(null),l=Me("NPopover"),c=D(null),d=D(e.show),f=D(!1);tn(()=>{const{show:p}=e;p&&!Pn()&&!e.internalDeactivateImmediately&&(f.value=!0)});const v=T(()=>{const{trigger:p,onClickoutside:C}=e,$=[],{positionManuallyRef:{value:g}}=l;return g||(p==="click"&&!C&&$.push([be,M,void 0,{capture:!0}]),p==="hover"&&$.push([Mn,H])),C&&$.push([be,M,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&f.value)&&$.push([cn,e.show]),$}),w=T(()=>{const p=e.width==="trigger"?void 0:ie(e.width),C=[];p&&C.push({width:p});const{maxWidth:$,minWidth:g}=e;return $&&C.push({maxWidth:ie($)}),g&&C.push({maxWidth:ie(g)}),o||C.push(y.value),C}),y=T(()=>{const{common:{cubicBezierEaseInOut:p,cubicBezierEaseIn:C,cubicBezierEaseOut:$},self:{space:g,spaceArrow:G,padding:Z,fontSize:L,textColor:u,dividerColor:b,color:R,boxShadow:N,borderRadius:K,arrowHeight:B,arrowOffset:Ne,arrowOffsetVertical:Ke}}=s.value;return{"--n-box-shadow":N,"--n-bezier":p,"--n-bezier-ease-in":C,"--n-bezier-ease-out":$,"--n-font-size":L,"--n-text-color":u,"--n-color":R,"--n-divider-color":b,"--n-border-radius":K,"--n-arrow-height":B,"--n-arrow-offset":Ne,"--n-arrow-offset-vertical":Ke,"--n-padding":Z,"--n-space":g,"--n-space-arrow":G}}),h=o?Be("popover",void 0,y,e):void 0;l.setBodyInstance({syncPosition:A}),rn(()=>{l.setBodyInstance(null)}),on(q(e,"show"),p=>{e.animated||(p?d.value=!0:d.value=!1)});function A(){var p;(p=i.value)===null||p===void 0||p.syncPosition()}function S(p){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(p)}function x(p){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(p)}function H(p){e.trigger==="hover"&&!O().contains(_e(p))&&l.handleMouseMoveOutside(p)}function M(p){(e.trigger==="click"&&!O().contains(_e(p))||e.onClickoutside)&&l.handleClickOutside(p)}function O(){return l.getTriggerElement()}j(an,c),j(sn,null),j(ln,null);function W(){if(h==null||h.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&f.value))return null;let C;const $=l.internalRenderBodyRef.value,{value:g}=a;if($)C=$([`${g}-popover-shared`,h==null?void 0:h.themeClass.value,e.overlap&&`${g}-popover-shared--overlap`,e.showArrow&&`${g}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${g}-popover-shared--center-arrow`],c,w.value,S,x);else{const{value:G}=l.extraClassRef,{internalTrapFocus:Z}=e,L=!Ce(n.header)||!Ce(n.footer),u=()=>{var b;const R=L?m(hn,null,se(n.header,B=>B?m("div",{class:`${g}-popover__header`,style:e.headerStyle},B):null),se(n.default,B=>B?m("div",{class:`${g}-popover__content`,style:e.contentStyle},n):null),se(n.footer,B=>B?m("div",{class:`${g}-popover__footer`,style:e.footerStyle},B):null)):e.scrollable?(b=n.default)===null||b===void 0?void 0:b.call(n):m("div",{class:`${g}-popover__content`,style:e.contentStyle},n),N=e.scrollable?m(pn,{contentClass:L?void 0:`${g}-popover__content`,contentStyle:L?void 0:e.contentStyle},{default:()=>R}):R,K=e.showArrow?It({arrowStyle:e.arrowStyle,clsPrefix:g}):null;return[N,K]};C=m("div",vn({class:[`${g}-popover`,`${g}-popover-shared`,h==null?void 0:h.themeClass.value,G.map(b=>`${g}-${b}`),{[`${g}-popover--scrollable`]:e.scrollable,[`${g}-popover--show-header-or-footer`]:L,[`${g}-popover--raw`]:e.raw,[`${g}-popover-shared--overlap`]:e.overlap,[`${g}-popover-shared--show-arrow`]:e.showArrow,[`${g}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:w.value,onKeydown:l.handleKeydown,onMouseenter:S,onMouseleave:x},t),Z?m(fn,{active:e.show,autoFocus:!0},{default:u}):u())}return Ie(C,v.value)}return{displayed:f,namespace:r,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:i,adjustedTo:ee(e),followerEnabled:d,renderContentNode:W}},render(){return m($n,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===ee.tdkey},{default:()=>this.animated?m(dn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Lt=Object.keys(He),Dt={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Ft(e,n,t){Dt[n].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const a=e.props[r],o=t[r];a?e.props[r]=(...s)=>{a(...s),o(...s)}:e.props[r]=o})}const Ht=bn("").type,Nt={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:ee.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Kt=Object.assign(Object.assign(Object.assign({},X.props),Nt),{internalOnAfterLeave:Function,internalRenderBody:Function}),Yt=te({name:"Popover",inheritAttrs:!1,props:Kt,__popover__:!0,setup(e){const n=gn(),t=D(null),r=T(()=>e.show),a=D(e.defaultShow),o=En(r,a),s=Se(()=>e.disabled?!1:o.value),i=()=>{if(e.disabled)return!0;const{getDisabled:u}=e;return!!(u!=null&&u())},l=()=>i()?!1:o.value,c=On(e,["arrow","showArrow"]),d=T(()=>e.overlap?!1:c.value);let f=null;const v=D(null),w=D(null),y=Se(()=>e.x!==void 0&&e.y!==void 0);function h(u){const{"onUpdate:show":b,onUpdateShow:R,onShow:N,onHide:K}=e;a.value=u,b&&J(b,u),R&&J(R,u),u&&N&&J(N,!0),u&&K&&J(K,!1)}function A(){f&&f.syncPosition()}function S(){const{value:u}=v;u&&(window.clearTimeout(u),v.value=null)}function x(){const{value:u}=w;u&&(window.clearTimeout(u),w.value=null)}function H(){const u=i();if(e.trigger==="focus"&&!u){if(l())return;h(!0)}}function M(){const u=i();if(e.trigger==="focus"&&!u){if(!l())return;h(!1)}}function O(){const u=i();if(e.trigger==="hover"&&!u){if(x(),v.value!==null||l())return;const b=()=>{h(!0),v.value=null},{delay:R}=e;R===0?b():v.value=window.setTimeout(b,R)}}function W(){const u=i();if(e.trigger==="hover"&&!u){if(S(),w.value!==null||!l())return;const b=()=>{h(!1),w.value=null},{duration:R}=e;R===0?b():w.value=window.setTimeout(b,R)}}function p(){W()}function C(u){var b;!l()||(e.trigger==="click"&&(S(),x(),h(!1)),(b=e.onClickoutside)===null||b===void 0||b.call(e,u))}function $(){if(e.trigger==="click"&&!i()){S(),x();const u=!l();h(u)}}function g(u){!e.internalTrapFocus||u.key==="Escape"&&(S(),x(),h(!1))}function G(u){a.value=u}function Z(){var u;return(u=t.value)===null||u===void 0?void 0:u.targetRef}function L(u){f=u}return j("NPopover",{getTriggerElement:Z,handleKeydown:g,handleMouseEnter:O,handleMouseLeave:W,handleClickOutside:C,handleMouseMoveOutside:p,setBodyInstance:L,positionManuallyRef:y,isMountedRef:n,zIndexRef:q(e,"zIndex"),extraClassRef:q(e,"internalExtraClass"),internalRenderBodyRef:q(e,"internalRenderBody")}),{binderInstRef:t,positionManually:y,mergedShowConsideringDisabledProp:s,uncontrolledShow:a,mergedShowArrow:d,getMergedShow:l,setShow:G,handleClick:$,handleMouseEnter:O,handleMouseLeave:W,handleFocus:H,handleBlur:M,syncPosition:A}},render(){var e;const{positionManually:n,$slots:t}=this;let r,a=!1;if(!n&&(t.activator?r=xe(t,"activator"):r=xe(t,"trigger"),r)){r=mn(r),r=r.type===Ht?m("span",[r]):r;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)a=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[o,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:s}=this,i=[o,...s],l={onBlur:c=>{i.forEach(d=>{d.onBlur(c)})},onFocus:c=>{i.forEach(d=>{d.onFocus(c)})},onClick:c=>{i.forEach(d=>{d.onClick(c)})},onMouseenter:c=>{i.forEach(d=>{d.onMouseenter(c)})},onMouseleave:c=>{i.forEach(d=>{d.onMouseleave(c)})}};Ft(r,s?"nested":n?"manual":this.trigger,l)}}return m(Rn,{ref:"binderInstRef",syncTarget:!a,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?Ie(m("div",{style:{position:"fixed",inset:0}}),[[wn,{enabled:o,zIndex:this.zIndex}]]):null,n?null:m(An,null,{default:()=>r}),m(zt,yn(this.$props,Lt,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var s,i;return(i=(s=this.$slots).default)===null||i===void 0?void 0:i.call(s)},header:()=>{var s,i;return(i=(s=this.$slots).header)===null||i===void 0?void 0:i.call(s)},footer:()=>{var s,i;return(i=(s=this.$slots).footer)===null||i===void 0?void 0:i.call(s)}})]}})}});export{Jt as _,Yt as a,Nt as p,It as r};
