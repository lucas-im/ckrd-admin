import{g as Z,m as a,O as rr,J as x,U as ce,a5 as nr,j as F,by as tr,a as v,e as s,c as C,d as z,b as N,u as ar,h as ze,bz as lr,av as ir,L as sr,aj as ur,a6 as pe,a0 as cr,aH as dr,ah as ge,K as hr,C as fr,k as vr,M as q,ae as se,ad as pr,F as gr,aA as br,bA as xr,a1 as be,aF as xe,o as ue,af as mr,a8 as me,P as w,aG as we}from"./index.53601f29.js";import{u as wr,a as ye,N as yr}from"./Suffix.8a5dc570.js";import{u as Cr}from"./use-merged-state.7e5a28e5.js";const zr=Z({name:"Eye",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),a("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Ar=Z({name:"EyeOff",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),a("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),a("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),a("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),a("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Ae=rr("n-input");function Sr(r){let p=0;for(const t of r)p++;return p}function Q(r){return r===""||r==null}function _r(r){const p=x(null);function t(){const{value:f}=r;if(!(f!=null&&f.focus)){_();return}const{selectionStart:c,selectionEnd:l,value:i}=f;if(c==null||l==null){_();return}p.value={start:c,end:l,beforeText:i.slice(0,c),afterText:i.slice(l)}}function S(){var f;const{value:c}=p,{value:l}=r;if(!c||!l)return;const{value:i}=l,{start:d,beforeText:u,afterText:m}=c;let y=i.length;if(i.endsWith(m))y=i.length-m.length;else if(i.startsWith(u))y=u.length;else{const j=u[d-1],A=i.indexOf(j,d-1);A!==-1&&(y=A+1)}(f=l.setSelectionRange)===null||f===void 0||f.call(l,y,y)}function _(){p.value=null}return ce(r,_),{recordCursor:t,restoreCursor:S}}const Ce=Z({name:"InputWordCount",setup(r,{slots:p}){const{mergedValueRef:t,maxlengthRef:S,mergedClsPrefixRef:_}=nr(Ae),f=F(()=>{const{value:c}=t;return c===null||Array.isArray(c)?0:Sr(c)});return()=>{const{value:c}=S,{value:l}=t;return a("span",{class:`${_.value}-input-word-count`},tr(p.default,{value:l===null||Array.isArray(l)?"":l},()=>[c===void 0?f.value:`${f.value} / ${c}`]))}}}),Rr=v("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[s("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),s("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),s("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),C("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),C("&:-webkit-autofill ~",[s("placeholder","display: none;")])]),z("round",[N("textarea","border-radius: calc(var(--n-height) / 2);")]),s("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[C("span",`
 width: 100%;
 display: inline-block;
 `)]),z("textarea",[s("placeholder","overflow: visible;")]),N("autosize","width: 100%;"),z("autosize",[s("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),v("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),s("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),s("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[C("+",[s("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),N("textarea",[s("placeholder","white-space: nowrap;")]),s("eye",`
 transition: color .3s var(--n-bezier);
 `),z("textarea","width: 100%;",[v("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),z("resizable",[v("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),s("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),s("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),z("pair",[s("input-el, placeholder","text-align: center;"),s("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[v("icon",`
 color: var(--n-icon-color);
 `),v("base-icon",`
 color: var(--n-icon-color);
 `)])]),z("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[s("border","border: var(--n-border-disabled);"),s("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),s("placeholder","color: var(--n-placeholder-color-disabled);"),s("separator","color: var(--n-text-color-disabled);",[v("icon",`
 color: var(--n-icon-color-disabled);
 `),v("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),v("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),s("suffix, prefix","color: var(--n-text-color-disabled);",[v("icon",`
 color: var(--n-icon-color-disabled);
 `),v("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),N("disabled",[s("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[C("&:hover",`
 color: var(--n-icon-color-hover);
 `),C("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),C("&:hover",[s("state-border","border: var(--n-border-hover);")]),z("focus","background-color: var(--n-color-focus);",[s("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),s("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),s("state-border",`
 border-color: #0000;
 z-index: 1;
 `),s("prefix","margin-right: 4px;"),s("suffix",`
 margin-left: 4px;
 `),s("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[v("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),v("base-clear",`
 font-size: var(--n-icon-size);
 `,[s("placeholder",[v("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),C(">",[v("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),v("base-icon",`
 font-size: var(--n-icon-size);
 `)]),v("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(r=>z(`${r}-status`,[N("disabled",[v("base-loading",`
 color: var(--n-loading-color-${r})
 `),s("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${r});
 `),s("state-border",`
 border: var(--n-border-${r});
 `),C("&:hover",[s("state-border",`
 border: var(--n-border-hover-${r});
 `)]),C("&:focus",`
 background-color: var(--n-color-focus-${r});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)]),z("focus",`
 background-color: var(--n-color-focus-${r});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)])])]))]),Fr=v("input",[z("disabled",[s("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),Br=Object.assign(Object.assign({},ze.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Tr=Z({name:"Input",props:Br,setup(r){const{mergedClsPrefixRef:p,mergedBorderedRef:t,inlineThemeDisabled:S,mergedRtlRef:_}=ar(r),f=ze("Input","-input",Rr,xr,r,p);lr&&ir("-input-safari",Fr,p);const c=x(null),l=x(null),i=x(null),d=x(null),u=x(null),m=x(null),y=x(null),j=_r(y),A=x(null),{localeRef:Se}=wr("Input"),U=x(r.defaultValue),_e=sr(r,"value"),R=Cr(_e,U),M=ur(r),{mergedSizeRef:ee,mergedDisabledRef:T,mergedStatusRef:Re}=M,k=x(!1),V=x(!1),B=x(!1),W=x(!1);let oe=null;const re=F(()=>{const{placeholder:e,pair:o}=r;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[Se.value.placeholder]:[e]}),Fe=F(()=>{const{value:e}=B,{value:o}=R,{value:n}=re;return!e&&(Q(o)||Array.isArray(o)&&Q(o[0]))&&n[0]}),Be=F(()=>{const{value:e}=B,{value:o}=R,{value:n}=re;return!e&&n[1]&&(Q(o)||Array.isArray(o)&&Q(o[1]))}),ne=pe(()=>r.internalForceFocus||k.value),Ee=pe(()=>{if(T.value||r.readonly||!r.clearable||!ne.value&&!V.value)return!1;const{value:e}=R,{value:o}=ne;return r.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(V.value||o):!!e&&(V.value||o)}),te=F(()=>{const{showPasswordOn:e}=r;if(e)return e;if(r.showPasswordToggle)return"click"}),D=x(!1),Pe=F(()=>{const{textDecoration:e}=r;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),de=x(void 0),$e=()=>{var e,o;if(r.type==="textarea"){const{autosize:n}=r;if(n&&(de.value=(o=(e=A.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!l.value||typeof n=="boolean")return;const{paddingTop:h,paddingBottom:g,lineHeight:b}=window.getComputedStyle(l.value),E=Number(h.slice(0,-2)),P=Number(g.slice(0,-2)),$=Number(b.slice(0,-2)),{value:O}=i;if(!O)return;if(n.minRows){const H=Math.max(n.minRows,1),ie=`${E+P+$*H}px`;O.style.minHeight=ie}if(n.maxRows){const H=`${E+P+$*n.maxRows}px`;O.style.maxHeight=H}}},Te=F(()=>{const{maxlength:e}=r;return e===void 0?void 0:Number(e)});cr(()=>{const{value:e}=R;Array.isArray(e)||le(e)});const ke=dr().proxy;function K(e){const{onUpdateValue:o,"onUpdate:value":n,onInput:h}=r,{nTriggerFormInput:g}=M;o&&w(o,e),n&&w(n,e),h&&w(h,e),U.value=e,g()}function L(e){const{onChange:o}=r,{nTriggerFormChange:n}=M;o&&w(o,e),U.value=e,n()}function Ie(e){const{onBlur:o}=r,{nTriggerFormBlur:n}=M;o&&w(o,e),n()}function Me(e){const{onFocus:o}=r,{nTriggerFormFocus:n}=M;o&&w(o,e),n()}function Ve(e){const{onClear:o}=r;o&&w(o,e)}function We(e){const{onInputBlur:o}=r;o&&w(o,e)}function De(e){const{onInputFocus:o}=r;o&&w(o,e)}function Oe(){const{onDeactivate:e}=r;e&&w(e)}function He(){const{onActivate:e}=r;e&&w(e)}function Ne(e){const{onClick:o}=r;o&&w(o,e)}function je(e){const{onWrapperFocus:o}=r;o&&w(o,e)}function Ue(e){const{onWrapperBlur:o}=r;o&&w(o,e)}function Ke(){B.value=!0}function Le(e){B.value=!1,e.target===m.value?X(e,1):X(e,0)}function X(e,o=0,n="input"){const h=e.target.value;if(le(h),e instanceof InputEvent&&!e.isComposing&&(B.value=!1),r.type==="textarea"){const{value:b}=A;b&&b.syncUnifiedContainer()}if(oe=h,B.value)return;j.recordCursor();const g=Xe(h);if(g)if(!r.pair)n==="input"?K(h):L(h);else{let{value:b}=R;Array.isArray(b)?b=[b[0],b[1]]:b=["",""],b[o]=h,n==="input"?K(b):L(b)}ke.$forceUpdate(),g||be(j.restoreCursor)}function Xe(e){const{allowInput:o}=r;return typeof o=="function"?o(e):!0}function Ye(e){We(e),e.relatedTarget===c.value&&Oe(),e.relatedTarget!==null&&(e.relatedTarget===u.value||e.relatedTarget===m.value||e.relatedTarget===l.value)||(W.value=!1),Y(e,"blur"),y.value=null}function Ge(e,o){De(e),k.value=!0,W.value=!0,He(),Y(e,"focus"),o===0?y.value=u.value:o===1?y.value=m.value:o===2&&(y.value=l.value)}function Je(e){r.passivelyActivated&&(Ue(e),Y(e,"blur"))}function qe(e){r.passivelyActivated&&(k.value=!0,je(e),Y(e,"focus"))}function Y(e,o){e.relatedTarget!==null&&(e.relatedTarget===u.value||e.relatedTarget===m.value||e.relatedTarget===l.value||e.relatedTarget===c.value)||(o==="focus"?(Me(e),k.value=!0):o==="blur"&&(Ie(e),k.value=!1))}function Qe(e,o){X(e,o,"change")}function Ze(e){Ne(e)}function eo(e){Ve(e),r.pair?(K(["",""]),L(["",""])):(K(""),L(""))}function oo(e){const{onMousedown:o}=r;o&&o(e);const{tagName:n}=e.target;if(n!=="INPUT"&&n!=="TEXTAREA"){if(r.resizable){const{value:h}=c;if(h){const{left:g,top:b,width:E,height:P}=h.getBoundingClientRect(),$=14;if(g+E-$<e.clientX&&e.clientX<g+E&&b+P-$<e.clientY&&e.clientY<b+P)return}}e.preventDefault(),k.value||he()}}function ro(){var e;V.value=!0,r.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseEnterWrapper())}function no(){var e;V.value=!1,r.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function to(){T.value||te.value==="click"&&(D.value=!D.value)}function ao(e){if(T.value)return;e.preventDefault();const o=h=>{h.preventDefault(),we("mouseup",document,o)};if(xe("mouseup",document,o),te.value!=="mousedown")return;D.value=!0;const n=()=>{D.value=!1,we("mouseup",document,n)};xe("mouseup",document,n)}function lo(e){var o;switch((o=r.onKeydown)===null||o===void 0||o.call(r,e),e.key){case"Escape":ae();break;case"Enter":io(e);break}}function io(e){var o,n;if(r.passivelyActivated){const{value:h}=W;if(h){r.internalDeactivateOnEnter&&ae();return}e.preventDefault(),r.type==="textarea"?(o=l.value)===null||o===void 0||o.focus():(n=u.value)===null||n===void 0||n.focus()}}function ae(){r.passivelyActivated&&(W.value=!1,be(()=>{var e;(e=c.value)===null||e===void 0||e.focus()}))}function he(){var e,o,n;T.value||(r.passivelyActivated?(e=c.value)===null||e===void 0||e.focus():((o=l.value)===null||o===void 0||o.focus(),(n=u.value)===null||n===void 0||n.focus()))}function so(){var e;!((e=c.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function uo(){var e,o;(e=l.value)===null||e===void 0||e.select(),(o=u.value)===null||o===void 0||o.select()}function co(){T.value||(l.value?l.value.focus():u.value&&u.value.focus())}function ho(){const{value:e}=c;(e==null?void 0:e.contains(document.activeElement))&&e!==document.activeElement&&ae()}function fo(e){if(r.type==="textarea"){const{value:o}=l;o==null||o.scrollTo(e)}else{const{value:o}=u;o==null||o.scrollTo(e)}}function le(e){const{type:o,pair:n,autosize:h}=r;if(!n&&h)if(o==="textarea"){const{value:g}=i;g&&(g.textContent=(e!=null?e:"")+`\r
`)}else{const{value:g}=d;g&&(e?g.textContent=e:g.innerHTML="&nbsp;")}}function vo(){$e()}const fe=x({top:"0"});function po(e){var o;const{scrollTop:n}=e.target;fe.value.top=`${-n}px`,(o=A.value)===null||o===void 0||o.syncUnifiedContainer()}let G=null;ge(()=>{const{autosize:e,type:o}=r;e&&o==="textarea"?G=ce(R,n=>{!Array.isArray(n)&&n!==oe&&le(n)}):G==null||G()});let J=null;ge(()=>{r.type==="textarea"?J=ce(R,e=>{var o;!Array.isArray(e)&&e!==oe&&((o=A.value)===null||o===void 0||o.syncUnifiedContainer())}):J==null||J()}),hr(Ae,{mergedValueRef:R,maxlengthRef:Te,mergedClsPrefixRef:p});const go={wrapperElRef:c,inputElRef:u,textareaElRef:l,isCompositing:B,focus:he,blur:so,select:uo,deactivate:ho,activate:co,scrollTo:fo},bo=fr("Input",_,p),ve=F(()=>{const{value:e}=ee,{common:{cubicBezierEaseInOut:o},self:{color:n,borderRadius:h,textColor:g,caretColor:b,caretColorError:E,caretColorWarning:P,textDecorationColor:$,border:O,borderDisabled:H,borderHover:ie,borderFocus:xo,placeholderColor:mo,placeholderColorDisabled:wo,lineHeightTextarea:yo,colorDisabled:Co,colorFocus:zo,textColorDisabled:Ao,boxShadowFocus:So,iconSize:_o,colorFocusWarning:Ro,boxShadowFocusWarning:Fo,borderWarning:Bo,borderFocusWarning:Eo,borderHoverWarning:Po,colorFocusError:$o,boxShadowFocusError:To,borderError:ko,borderFocusError:Io,borderHoverError:Mo,clearSize:Vo,clearColor:Wo,clearColorHover:Do,clearColorPressed:Oo,iconColor:Ho,iconColorDisabled:No,suffixTextColor:jo,countTextColor:Uo,countTextColorDisabled:Ko,iconColorHover:Lo,iconColorPressed:Xo,loadingColor:Yo,loadingColorError:Go,loadingColorWarning:Jo,[ue("padding",e)]:qo,[ue("fontSize",e)]:Qo,[ue("height",e)]:Zo}}=f.value,{left:er,right:or}=mr(qo);return{"--n-bezier":o,"--n-count-text-color":Uo,"--n-count-text-color-disabled":Ko,"--n-color":n,"--n-font-size":Qo,"--n-border-radius":h,"--n-height":Zo,"--n-padding-left":er,"--n-padding-right":or,"--n-text-color":g,"--n-caret-color":b,"--n-text-decoration-color":$,"--n-border":O,"--n-border-disabled":H,"--n-border-hover":ie,"--n-border-focus":xo,"--n-placeholder-color":mo,"--n-placeholder-color-disabled":wo,"--n-icon-size":_o,"--n-line-height-textarea":yo,"--n-color-disabled":Co,"--n-color-focus":zo,"--n-text-color-disabled":Ao,"--n-box-shadow-focus":So,"--n-loading-color":Yo,"--n-caret-color-warning":P,"--n-color-focus-warning":Ro,"--n-box-shadow-focus-warning":Fo,"--n-border-warning":Bo,"--n-border-focus-warning":Eo,"--n-border-hover-warning":Po,"--n-loading-color-warning":Jo,"--n-caret-color-error":E,"--n-color-focus-error":$o,"--n-box-shadow-focus-error":To,"--n-border-error":ko,"--n-border-focus-error":Io,"--n-border-hover-error":Mo,"--n-loading-color-error":Go,"--n-clear-color":Wo,"--n-clear-size":Vo,"--n-clear-color-hover":Do,"--n-clear-color-pressed":Oo,"--n-icon-color":Ho,"--n-icon-color-hover":Lo,"--n-icon-color-pressed":Xo,"--n-icon-color-disabled":No,"--n-suffix-text-color":jo}}),I=S?vr("input",F(()=>{const{value:e}=ee;return e[0]}),ve,r):void 0;return Object.assign(Object.assign({},go),{wrapperElRef:c,inputElRef:u,inputMirrorElRef:d,inputEl2Ref:m,textareaElRef:l,textareaMirrorElRef:i,textareaScrollbarInstRef:A,rtlEnabled:bo,uncontrolledValue:U,mergedValue:R,passwordVisible:D,mergedPlaceholder:re,showPlaceholder1:Fe,showPlaceholder2:Be,mergedFocus:ne,isComposing:B,activated:W,showClearButton:Ee,mergedSize:ee,mergedDisabled:T,textDecorationStyle:Pe,mergedClsPrefix:p,mergedBordered:t,mergedShowPasswordOn:te,placeholderStyle:fe,mergedStatus:Re,textAreaScrollContainerWidth:de,handleTextAreaScroll:po,handleCompositionStart:Ke,handleCompositionEnd:Le,handleInput:X,handleInputBlur:Ye,handleInputFocus:Ge,handleWrapperBlur:Je,handleWrapperFocus:qe,handleMouseEnter:ro,handleMouseLeave:no,handleMouseDown:oo,handleChange:Qe,handleClick:Ze,handleClear:eo,handlePasswordToggleClick:to,handlePasswordToggleMousedown:ao,handleWrapperKeydown:lo,handleTextAreaMirrorResize:vo,getTextareaScrollContainer:()=>l.value,mergedTheme:f,cssVars:S?void 0:ve,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender})},render(){var r,p;const{mergedClsPrefix:t,mergedStatus:S,themeClass:_,type:f,onRender:c}=this,l=this.$slots;return c==null||c(),a("div",{ref:"wrapperElRef",class:[`${t}-input`,_,S&&`${t}-input--${S}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:f==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&f!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},a("div",{class:`${t}-input-wrapper`},q(l.prefix,i=>i&&a("div",{class:`${t}-input__prefix`},i)),f==="textarea"?a(pr,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var i,d;const{textAreaScrollContainerWidth:u}=this,m={width:this.autosize&&u&&`${u}px`};return a(gr,null,a("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(i=this.inputProps)===null||i===void 0?void 0:i.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(d=this.inputProps)===null||d===void 0?void 0:d.style,m],onBlur:this.handleInputBlur,onFocus:y=>this.handleInputFocus(y,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?a("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,m],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?a(br,{onResize:this.handleTextAreaMirrorResize},{default:()=>a("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):a("div",{class:`${t}-input__input`},a("input",Object.assign({type:f==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":f},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(r=this.inputProps)===null||r===void 0?void 0:r.class],style:[this.textDecorationStyle[0],(p=this.inputProps)===null||p===void 0?void 0:p.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:i=>this.handleInputFocus(i,0),onInput:i=>this.handleInput(i,0),onChange:i=>this.handleChange(i,0)})),this.showPlaceholder1?a("div",{class:`${t}-input__placeholder`},a("span",null,this.mergedPlaceholder[0])):null,this.autosize?a("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&q(l.suffix,i=>i||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?a("div",{class:`${t}-input__suffix`},[q(l["clear-icon-placeholder"],d=>(this.clearable||d)&&a(ye,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>d,icon:()=>{var u,m;return(m=(u=this.$slots)["clear-icon"])===null||m===void 0?void 0:m.call(u)}})),this.internalLoadingBeforeSuffix?null:i,this.loading!==void 0?a(yr,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?i:null,this.showCount&&this.type!=="textarea"?a(Ce,null,{default:d=>{var u;return(u=l.count)===null||u===void 0?void 0:u.call(l,d)}}):null,this.mergedShowPasswordOn&&this.type==="password"?a("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?se(l["password-visible-icon"],()=>[a(me,{clsPrefix:t},{default:()=>a(zr,null)})]):se(l["password-invisible-icon"],()=>[a(me,{clsPrefix:t},{default:()=>a(Ar,null)})])):null]):null)),this.pair?a("span",{class:`${t}-input__separator`},se(l.separator,()=>[this.separator])):null,this.pair?a("div",{class:`${t}-input-wrapper`},a("div",{class:`${t}-input__input`},a("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:i=>this.handleInputFocus(i,1),onInput:i=>this.handleInput(i,1),onChange:i=>this.handleChange(i,1)}),this.showPlaceholder2?a("div",{class:`${t}-input__placeholder`},a("span",null,this.mergedPlaceholder[1])):null),q(l.suffix,i=>(this.clearable||i)&&a("div",{class:`${t}-input__suffix`},[this.clearable&&a(ye,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var d;return(d=l["clear-icon"])===null||d===void 0?void 0:d.call(l)},placeholder:()=>{var d;return(d=l["clear-icon-placeholder"])===null||d===void 0?void 0:d.call(l)}}),i]))):null,this.mergedBordered?a("div",{class:`${t}-input__border`}):null,this.mergedBordered?a("div",{class:`${t}-input__state-border`}):null,this.showCount&&f==="textarea"?a(Ce,null,{default:i=>{var d;const{renderCount:u}=this;return u?u(i):(d=l.count)===null||d===void 0?void 0:d.call(l,i)}}):null)}});export{Tr as _};
