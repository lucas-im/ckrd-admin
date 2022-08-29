import{g as he,J as A,$ as Hn,a0 as Le,a1 as rn,m as f,a2 as qn,a3 as dn,a4 as mn,a5 as yn,a6 as He,a7 as we,a8 as Jn,a9 as wn,a as z,e as L,d as Y,c as ee,b as nn,aa as xn,h as xe,L as q,ab as Yn,j as K,U as Pe,K as un,k as ln,M as Zn,ac as Qn,ad as Xn,ae as et,E as nt,o as fe,af as qe,ag as tt,ah as ot,ai as it,F as rt,u as lt,aj as at,ak as st,V as dt,al as ut,am as cn,an as ct,ao as ft,ap as ht,P as X}from"./index.53601f29.js";import{u as fn}from"./use-merged-state.7e5a28e5.js";import{N as vt,u as gt}from"./Suffix.8a5dc570.js";import{u as bt}from"./use-compitable.1ce3181b.js";import{N as Je}from"./Tag.c6ee1a54.js";import{c as pt,a as mt}from"./cssr.5230a11d.js";import{_ as yt,a as wt}from"./Popover.0a8891c8.js";import{V as xt,h as Be,F as Ct}from"./FocusDetector.af05415e.js";import{i as an,a as St,u as tn,V as Ot,b as Ft,c as kt}from"./Follower.3bd7a0ed.js";function Tt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Ye(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(i=>{i&&i(n)})}}const ce="v-hidden",Rt=mt("[v-hidden]",{display:"none!important"}),hn=he({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=A(null),i=A(null);function r(){const{value:a}=n,{getCounter:l,getTail:y}=e;let h;if(l!==void 0?h=l():h=i.value,!a||!h)return;h.hasAttribute(ce)&&h.removeAttribute(ce);const{children:m}=a,x=a.offsetWidth,k=[],_=t.tail?y==null?void 0:y():null;let g=_?_.offsetWidth:0,T=!1;const D=a.children.length-(t.tail?1:0);for(let O=0;O<D-1;++O){if(O<0)continue;const I=m[O];if(T){I.hasAttribute(ce)||I.setAttribute(ce,"");continue}else I.hasAttribute(ce)&&I.removeAttribute(ce);const b=I.offsetWidth;if(g+=b,k[O]=b,g>x){const{updateCounter:w}=e;for(let F=O;F>=0;--F){const B=D-1-F;w!==void 0?w(B):h.textContent=`${B}`;const E=h.offsetWidth;if(g-=k[F],g+E<=x||F===0){T=!0,O=F-1,_&&(O===-1?(_.style.maxWidth=`${x-E}px`,_.style.boxSizing="border-box"):_.style.maxWidth="");break}}}}const{onUpdateOverflow:C}=e;T?C!==void 0&&C(!0):(C!==void 0&&C(!1),h.setAttribute(ce,""))}const u=Hn();return Rt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:pt,ssr:u}),Le(r),{selfRef:n,counterRef:i,sync:r}},render(){const{$slots:e}=this;return rn(this.sync),f("div",{class:"v-overflow",ref:"selfRef"},[qn(e,"default"),e.counter?e.counter():f("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Cn(e,t){t&&(Le(()=>{const{value:n}=e;n&&dn.registerHandler(n,t)}),mn(()=>{const{value:n}=e;n&&dn.unregisterHandler(n)}))}const Pt=he({name:"Checkmark",render(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},f("g",{fill:"none"},f("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}});function vn(e){return Array.isArray(e)?e:[e]}const on={STOP:"STOP"};function Sn(e,t){const n=t(e);e.children!==void 0&&n!==on.STOP&&e.children.forEach(i=>Sn(i,t))}function Mt(e,t={}){const{preserveGroup:n=!1}=t,i=[],r=n?a=>{a.isLeaf||(i.push(a.key),u(a.children))}:a=>{a.isLeaf||(a.isGroup||i.push(a.key),u(a.children))};function u(a){a.forEach(r)}return u(e),i}function _t(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function zt(e){return e.children}function At(e){return e.key}function Nt(){return!1}function It(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function Bt(e){return e.disabled===!0}function $t(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Ze(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Qe(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function Et(e,t){const n=new Set(e);return t.forEach(i=>{n.has(i)||n.add(i)}),Array.from(n)}function Lt(e,t){const n=new Set(e);return t.forEach(i=>{n.has(i)&&n.delete(i)}),Array.from(n)}function Kt(e){return(e==null?void 0:e.type)==="group"}function Dt(e){const t=new Map;return e.forEach((n,i)=>{t.set(n.key,i)}),n=>{var i;return(i=t.get(n))!==null&&i!==void 0?i:null}}class Vt extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Wt(e,t,n,i){return $e(t.concat(e),n,i,!1)}function jt(e,t){const n=new Set;return e.forEach(i=>{const r=t.treeNodeMap.get(i);if(r!==void 0){let u=r.parent;for(;u!==null&&!(u.disabled||n.has(u.key));)n.add(u.key),u=u.parent}}),n}function Gt(e,t,n,i){const r=$e(t,n,i,!1),u=$e(e,n,i,!0),a=jt(e,n),l=[];return r.forEach(y=>{(u.has(y)||a.has(y))&&l.push(y)}),l.forEach(y=>r.delete(y)),r}function Xe(e,t){const{checkedKeys:n,keysToCheck:i,keysToUncheck:r,indeterminateKeys:u,cascade:a,leafOnly:l,checkStrategy:y,allowNotLoaded:h}=e;if(!a)return i!==void 0?{checkedKeys:Et(n,i),indeterminateKeys:Array.from(u)}:r!==void 0?{checkedKeys:Lt(n,r),indeterminateKeys:Array.from(u)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(u)};const{levelTreeNodeMap:m}=t;let x;r!==void 0?x=Gt(r,n,t,h):i!==void 0?x=Wt(i,n,t,h):x=$e(n,t,h,!1);const k=y==="parent",_=y==="child"||l,g=x,T=new Set,D=Math.max.apply(null,Array.from(m.keys()));for(let C=D;C>=0;C-=1){const O=C===0,I=m.get(C);for(const b of I){if(b.isLeaf)continue;const{key:w,shallowLoaded:F}=b;if(_&&F&&b.children.forEach($=>{!$.disabled&&!$.isLeaf&&$.shallowLoaded&&g.has($.key)&&g.delete($.key)}),b.disabled||!F)continue;let B=!0,E=!1,U=!0;for(const $ of b.children){const H=$.key;if(!$.disabled){if(U&&(U=!1),g.has(H))E=!0;else if(T.has(H)){E=!0,B=!1;break}else if(B=!1,E)break}}B&&!U?(k&&b.children.forEach($=>{!$.disabled&&g.has($.key)&&g.delete($.key)}),g.add(w)):E&&T.add(w),O&&_&&g.has(w)&&g.delete(w)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(T)}}function $e(e,t,n,i){const{treeNodeMap:r,getChildren:u}=t,a=new Set,l=new Set(e);return e.forEach(y=>{const h=r.get(y);h!==void 0&&Sn(h,m=>{if(m.disabled)return on.STOP;const{key:x}=m;if(!a.has(x)&&(a.add(x),l.add(x),$t(m.rawNode,u))){if(i)return on.STOP;if(!n)throw new Vt}})}),l}function Ut(e,{includeGroup:t=!1,includeSelf:n=!0},i){var r;const u=i.treeNodeMap;let a=e==null?null:(r=u.get(e))!==null&&r!==void 0?r:null;const l={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return l.treeNode=null,l;for(;a;)!a.ignored&&(t||!a.isGroup)&&l.treeNodePath.push(a),a=a.parent;return l.treeNodePath.reverse(),n||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(y=>y.key),l}function Ht(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function qt(e,t){const n=e.siblings,i=n.length,{index:r}=e;return t?n[(r+1)%i]:r===n.length-1?null:n[r+1]}function gn(e,t,{loop:n=!1,includeDisabled:i=!1}={}){const r=t==="prev"?Jt:qt,u={reverse:t==="prev"};let a=!1,l=null;function y(h){if(h!==null){if(h===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!h.disabled||i)&&!h.ignored&&!h.isGroup){l=h;return}if(h.isGroup){const m=sn(h,u);m!==null?l=m:y(r(h,n))}else{const m=r(h,!1);if(m!==null)y(m);else{const x=Yt(h);x!=null&&x.isGroup?y(r(x,n)):n&&y(r(h,!0))}}}}return y(e),l}function Jt(e,t){const n=e.siblings,i=n.length,{index:r}=e;return t?n[(r-1+i)%i]:r===0?null:n[r-1]}function Yt(e){return e.parent}function sn(e,t={}){const{reverse:n=!1}=t,{children:i}=e;if(i){const{length:r}=i,u=n?r-1:0,a=n?-1:r,l=n?-1:1;for(let y=u;y!==a;y+=l){const h=i[y];if(!h.disabled&&!h.ignored)if(h.isGroup){const m=sn(h,t);if(m!==null)return m}else return h}}return null}const Zt={getChild(){return this.ignored?null:sn(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return gn(this,"next",e)},getPrev(e={}){return gn(this,"prev",e)}};function Qt(e,t){const n=t?new Set(t):void 0,i=[];function r(u){u.forEach(a=>{i.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||n===void 0||n.has(a.key))&&r(a.children)})}return r(e),i}function Xt(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function On(e,t,n,i,r,u=null,a=0){const l=[];return e.forEach((y,h)=>{var m;const x=Object.create(i);if(x.rawNode=y,x.siblings=l,x.level=a,x.index=h,x.isFirstChild=h===0,x.isLastChild=h+1===e.length,x.parent=u,!x.ignored){const k=r(y);Array.isArray(k)&&(x.children=On(k,t,n,i,r,x,a+1))}l.push(x),t.set(x.key,x),n.has(a)||n.set(a,[]),(m=n.get(a))===null||m===void 0||m.push(x)}),l}function eo(e,t={}){var n;const i=new Map,r=new Map,{getDisabled:u=Bt,getIgnored:a=Nt,getIsGroup:l=Kt,getKey:y=At}=t,h=(n=t.getChildren)!==null&&n!==void 0?n:zt,m=t.ignoreEmptyChildren?b=>{const w=h(b);return Array.isArray(w)?w.length?w:null:w}:h,x=Object.assign({get key(){return y(this.rawNode)},get disabled(){return u(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return _t(this.rawNode,m)},get shallowLoaded(){return It(this.rawNode,m)},get ignored(){return a(this.rawNode)},contains(b){return Xt(this,b)}},Zt),k=On(e,i,r,x,m);function _(b){if(b==null)return null;const w=i.get(b);return w&&!w.isGroup&&!w.ignored?w:null}function g(b){if(b==null)return null;const w=i.get(b);return w&&!w.ignored?w:null}function T(b,w){const F=g(b);return F?F.getPrev(w):null}function D(b,w){const F=g(b);return F?F.getNext(w):null}function C(b){const w=g(b);return w?w.getParent():null}function O(b){const w=g(b);return w?w.getChild():null}const I={treeNodes:k,treeNodeMap:i,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:m,getFlattenedNodes(b){return Qt(k,b)},getNode:_,getPrev:T,getNext:D,getParent:C,getChild:O,getFirstAvailableNode(){return Ht(k)},getPath(b,w={}){return Ut(b,w,I)},getCheckedKeys(b,w={}){const{cascade:F=!0,leafOnly:B=!1,checkStrategy:E="all",allowNotLoaded:U=!1}=w;return Xe({checkedKeys:Ze(b),indeterminateKeys:Qe(b),cascade:F,leafOnly:B,checkStrategy:E,allowNotLoaded:U},I)},check(b,w,F={}){const{cascade:B=!0,leafOnly:E=!1,checkStrategy:U="all",allowNotLoaded:$=!1}=F;return Xe({checkedKeys:Ze(w),indeterminateKeys:Qe(w),keysToCheck:b==null?[]:vn(b),cascade:B,leafOnly:E,checkStrategy:U,allowNotLoaded:$},I)},uncheck(b,w,F={}){const{cascade:B=!0,leafOnly:E=!1,checkStrategy:U="all",allowNotLoaded:$=!1}=F;return Xe({checkedKeys:Ze(w),indeterminateKeys:Qe(w),keysToUncheck:b==null?[]:vn(b),cascade:B,leafOnly:E,checkStrategy:U,allowNotLoaded:$},I)},getNonLeafKeys(b={}){return Mt(k,b)}};return I}function no(e,t){return f(wn,{name:"fade-in-scale-up-transition"},{default:()=>e?f(Jn,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>f(Pt)}):null})}const bn=he({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:i,valueSetRef:r,renderLabelRef:u,renderOptionRef:a,labelFieldRef:l,valueFieldRef:y,showCheckmarkRef:h,nodePropsRef:m,handleOptionClick:x,handleOptionMouseEnter:k}=yn(an),_=He(()=>{const{value:C}=n;return C?e.tmNode.key===C.key:!1});function g(C){const{tmNode:O}=e;O.disabled||x(C,O)}function T(C){const{tmNode:O}=e;O.disabled||k(C,O)}function D(C){const{tmNode:O}=e,{value:I}=_;O.disabled||I||k(C,O)}return{multiple:i,isGrouped:He(()=>{const{tmNode:C}=e,{parent:O}=C;return O&&O.rawNode.type==="group"}),showCheckmark:h,nodeProps:m,isPending:_,isSelected:He(()=>{const{value:C}=t,{value:O}=i;if(C===null)return!1;const I=e.tmNode.rawNode[y.value];if(O){const{value:b}=r;return b.has(I)}else return C===I}),labelField:l,renderLabel:u,renderOption:a,handleMouseMove:D,handleMouseEnter:T,handleClick:g}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:i,isGrouped:r,showCheckmark:u,nodeProps:a,renderOption:l,renderLabel:y,handleClick:h,handleMouseEnter:m,handleMouseMove:x}=this,k=no(n,e),_=y?[y(t,n),u&&k]:[we(t[this.labelField],t,n),u&&k],g=a==null?void 0:a(t),T=f("div",Object.assign({},g,{class:[`${e}-base-select-option`,t.class,g==null?void 0:g.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:u}],style:[(g==null?void 0:g.style)||"",t.style||""],onClick:Ye([h,g==null?void 0:g.onClick]),onMouseenter:Ye([m,g==null?void 0:g.onMouseenter]),onMousemove:Ye([x,g==null?void 0:g.onMousemove])}),f("div",{class:`${e}-base-select-option__content`},_));return t.render?t.render({node:T,option:t,selected:n}):l?l({node:T,option:t,selected:n}):T}}),pn=he({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:i}=yn(an);return{labelField:n,nodeProps:i,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:i,tmNode:{rawNode:r}}=this,u=i==null?void 0:i(r),a=t?t(r,!1):we(r[this.labelField],r,!1),l=f("div",Object.assign({},u,{class:[`${e}-base-select-group-header`,u==null?void 0:u.class]}),a);return r.render?r.render({node:l,option:r}):n?n({node:l,option:r,selected:!1}):l}}),to=z("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[z("scrollbar",`
 max-height: var(--n-height);
 `),z("virtual-list",`
 max-height: var(--n-height);
 `),z("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[L("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),z("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),z("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),L("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),L("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),L("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),z("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),z("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Y("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ee("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ee("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Y("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Y("pending",[ee("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Y("selected",`
 color: var(--n-option-text-color-active);
 `,[ee("&::before",`
 background-color: var(--n-option-color-active);
 `),Y("pending",[ee("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Y("disabled",`
 cursor: not-allowed;
 `,[nn("selected",`
 color: var(--n-option-text-color-disabled);
 `),Y("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),L("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[xn({enterScale:"0.5"})])])]),oo=he({name:"InternalSelectMenu",props:Object.assign(Object.assign({},xe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=xe("InternalSelectMenu","-internal-select-menu",to,Yn,e,q(e,"clsPrefix")),n=A(null),i=A(null),r=A(null),u=K(()=>e.treeMate.getFlattenedNodes()),a=K(()=>Dt(u.value)),l=A(null);function y(){const{treeMate:s}=e;let v=null;const{value:W}=e;W===null?v=s.getFirstAvailableNode():(e.multiple?v=s.getNode((W||[])[(W||[]).length-1]):v=s.getNode(W),(!v||v.disabled)&&(v=s.getFirstAvailableNode())),H(v||null)}function h(){const{value:s}=l;s&&!e.treeMate.getNode(s.key)&&(l.value=null)}let m;Pe(()=>e.show,s=>{s?m=Pe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?y():h(),rn(j)):h()},{immediate:!0}):m==null||m()},{immediate:!0}),mn(()=>{m==null||m()});const x=K(()=>nt(t.value.self[fe("optionHeight",e.size)])),k=K(()=>qe(t.value.self[fe("padding",e.size)])),_=K(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),g=K(()=>{const s=u.value;return s&&s.length===0});function T(s){const{onToggle:v}=e;v&&v(s)}function D(s){const{onScroll:v}=e;v&&v(s)}function C(s){var v;(v=r.value)===null||v===void 0||v.sync(),D(s)}function O(){var s;(s=r.value)===null||s===void 0||s.sync()}function I(){const{value:s}=l;return s||null}function b(s,v){v.disabled||H(v,!1)}function w(s,v){v.disabled||T(v)}function F(s){var v;Be(s,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,s)}function B(s){var v;Be(s,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,s)}function E(s){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,s),!e.focusable&&s.preventDefault()}function U(){const{value:s}=l;s&&H(s.getNext({loop:!0}),!0)}function $(){const{value:s}=l;s&&H(s.getPrev({loop:!0}),!0)}function H(s,v=!1){l.value=s,v&&j()}function j(){var s,v;const W=l.value;if(!W)return;const te=a.value(W.key);te!==null&&(e.virtualScroll?(s=i.value)===null||s===void 0||s.scrollTo({index:te}):(v=r.value)===null||v===void 0||v.scrollTo({index:te,elSize:x.value}))}function ae(s){var v,W;!((v=n.value)===null||v===void 0)&&v.contains(s.target)&&((W=e.onFocus)===null||W===void 0||W.call(e,s))}function ve(s){var v,W;!((v=n.value)===null||v===void 0)&&v.contains(s.relatedTarget)||(W=e.onBlur)===null||W===void 0||W.call(e,s)}un(an,{handleOptionMouseEnter:b,handleOptionClick:w,valueSetRef:_,pendingTmNodeRef:l,nodePropsRef:q(e,"nodeProps"),showCheckmarkRef:q(e,"showCheckmark"),multipleRef:q(e,"multiple"),valueRef:q(e,"value"),renderLabelRef:q(e,"renderLabel"),renderOptionRef:q(e,"renderOption"),labelFieldRef:q(e,"labelField"),valueFieldRef:q(e,"valueField")}),un(St,n),Le(()=>{const{value:s}=r;s&&s.sync()});const se=K(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:v},self:{height:W,borderRadius:te,color:Ce,groupHeaderTextColor:Se,actionDividerColor:Oe,optionTextColorPressed:ge,optionTextColor:be,optionTextColorDisabled:ie,optionTextColorActive:J,optionOpacityDisabled:pe,optionCheckColor:re,actionTextColor:Fe,optionColorPending:de,optionColorActive:ue,loadingColor:ke,loadingSize:Te,optionColorActivePending:Re,[fe("optionFontSize",s)]:me,[fe("optionHeight",s)]:ye,[fe("optionPadding",s)]:Z}}=t.value;return{"--n-height":W,"--n-action-divider-color":Oe,"--n-action-text-color":Fe,"--n-bezier":v,"--n-border-radius":te,"--n-color":Ce,"--n-option-font-size":me,"--n-group-header-text-color":Se,"--n-option-check-color":re,"--n-option-color-pending":de,"--n-option-color-active":ue,"--n-option-color-active-pending":Re,"--n-option-height":ye,"--n-option-opacity-disabled":pe,"--n-option-text-color":be,"--n-option-text-color-active":J,"--n-option-text-color-disabled":ie,"--n-option-text-color-pressed":ge,"--n-option-padding":Z,"--n-option-padding-left":qe(Z,"left"),"--n-option-padding-right":qe(Z,"right"),"--n-loading-color":ke,"--n-loading-size":Te}}),{inlineThemeDisabled:ne}=e,Q=ne?ln("internal-select-menu",K(()=>e.size[0]),se,e):void 0,oe={selfRef:n,next:U,prev:$,getPendingTmNode:I};return Cn(n,e.onResize),Object.assign({mergedTheme:t,virtualListRef:i,scrollbarRef:r,itemSize:x,padding:k,flattenedNodes:u,empty:g,virtualListContainer(){const{value:s}=i;return s==null?void 0:s.listElRef},virtualListContent(){const{value:s}=i;return s==null?void 0:s.itemsElRef},doScroll:D,handleFocusin:ae,handleFocusout:ve,handleKeyUp:F,handleKeyDown:B,handleMouseDown:E,handleVirtualListResize:O,handleVirtualListScroll:C,cssVars:ne?void 0:se,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender},oe)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:i,themeClass:r,onRender:u}=this;return u==null||u(),f("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,r,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?f("div",{class:`${n}-base-select-menu__loading`},f(Qn,{clsPrefix:n,strokeWidth:20})):this.empty?f("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},et(e.empty,()=>[f(yt,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):f(Xn,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?f(xt,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?f(pn,{key:a.key,clsPrefix:n,tmNode:a}):a.ignored?null:f(bn,{clsPrefix:n,key:a.key,tmNode:a})}):f("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?f(pn,{key:a.key,clsPrefix:n,tmNode:a}):f(bn,{clsPrefix:n,key:a.key,tmNode:a})))}),Zn(e.action,a=>a&&[f("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},a),f(Ct,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),io=ee([z("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[z("base-loading",`
 color: var(--n-loading-color);
 `),z("base-selection-tags","min-height: var(--n-height);"),L("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),L("state-border",`
 z-index: 1;
 border-color: #0000;
 `),z("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[L("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),z("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[L("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),z("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[L("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),z("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),z("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[z("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[L("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),L("render-label",`
 color: var(--n-text-color);
 `)]),nn("disabled",[ee("&:hover",[L("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Y("focus",[L("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Y("active",[L("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),z("base-selection-label","background-color: var(--n-color-active);"),z("base-selection-tags","background-color: var(--n-color-active);")])]),Y("disabled","cursor: not-allowed;",[L("arrow",`
 color: var(--n-arrow-color-disabled);
 `),z("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[z("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),L("render-label",`
 color: var(--n-text-color-disabled);
 `)]),z("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),z("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),z("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[L("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),L("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Y(`${e}-status`,[L("state-border",`border: var(--n-border-${e});`),nn("disabled",[ee("&:hover",[L("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Y("active",[L("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),z("base-selection-label",`background-color: var(--n-color-active-${e});`),z("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Y("focus",[L("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),z("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),z("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ee("&:last-child","padding-right: 0;"),z("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[L("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ro=he({name:"InternalSelection",props:Object.assign(Object.assign({},xe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(e){const t=A(null),n=A(null),i=A(null),r=A(null),u=A(null),a=A(null),l=A(null),y=A(null),h=A(null),m=A(null),x=A(!1),k=A(!1),_=A(!1),g=xe("InternalSelection","-internal-selection",io,tt,e,q(e,"clsPrefix")),T=K(()=>e.clearable&&!e.disabled&&(_.value||e.active)),D=K(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):we(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),C=K(()=>{const d=e.selectedOption;if(!!d)return d[e.labelField]}),O=K(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function I(){var d;const{value:p}=t;if(p){const{value:V}=n;V&&(V.style.width=`${p.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=h.value)===null||d===void 0||d.sync()))}}function b(){const{value:d}=m;d&&(d.style.display="none")}function w(){const{value:d}=m;d&&(d.style.display="inline-block")}Pe(q(e,"active"),d=>{d||b()}),Pe(q(e,"pattern"),()=>{e.multiple&&rn(I)});function F(d){const{onFocus:p}=e;p&&p(d)}function B(d){const{onBlur:p}=e;p&&p(d)}function E(d){const{onDeleteOption:p}=e;p&&p(d)}function U(d){const{onClear:p}=e;p&&p(d)}function $(d){const{onPatternInput:p}=e;p&&p(d)}function H(d){var p;(!d.relatedTarget||!(!((p=i.value)===null||p===void 0)&&p.contains(d.relatedTarget)))&&F(d)}function j(d){var p;!((p=i.value)===null||p===void 0)&&p.contains(d.relatedTarget)||B(d)}function ae(d){U(d)}function ve(){_.value=!0}function se(){_.value=!1}function ne(d){!e.active||!e.filterable||d.target!==n.value&&d.preventDefault()}function Q(d){E(d)}function oe(d){if(d.key==="Backspace"&&!s.value&&!e.pattern.length){const{selectedOptions:p}=e;p!=null&&p.length&&Q(p[p.length-1])}}const s=A(!1);let v=null;function W(d){const{value:p}=t;if(p){const V=d.target.value;p.textContent=V,I()}s.value?v=d:$(d)}function te(){s.value=!0}function Ce(){s.value=!1,$(v),v=null}function Se(d){var p;k.value=!0,(p=e.onPatternFocus)===null||p===void 0||p.call(e,d)}function Oe(d){var p;k.value=!1,(p=e.onPatternBlur)===null||p===void 0||p.call(e,d)}function ge(){var d,p;if(e.filterable)k.value=!1,(d=a.value)===null||d===void 0||d.blur(),(p=n.value)===null||p===void 0||p.blur();else if(e.multiple){const{value:V}=r;V==null||V.blur()}else{const{value:V}=u;V==null||V.blur()}}function be(){var d,p,V;e.filterable?(k.value=!1,(d=a.value)===null||d===void 0||d.focus()):e.multiple?(p=r.value)===null||p===void 0||p.focus():(V=u.value)===null||V===void 0||V.focus()}function ie(){const{value:d}=n;d&&(w(),d.focus())}function J(){const{value:d}=n;d&&d.blur()}function pe(d){const{value:p}=l;p&&p.setTextContent(`+${d}`)}function re(){const{value:d}=y;return d}function Fe(){return n.value}let de=null;function ue(){de!==null&&window.clearTimeout(de)}function ke(){e.disabled||e.active||(ue(),de=window.setTimeout(()=>{x.value=!0},100))}function Te(){ue()}function Re(d){d||(ue(),x.value=!1)}Le(()=>{ot(()=>{const d=a.value;!d||(d.tabIndex=e.disabled||k.value?-1:0)})}),Cn(i,e.onResize);const{inlineThemeDisabled:me}=e,ye=K(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:p},self:{borderRadius:V,color:Me,placeholderColor:Ke,textColor:De,paddingSingle:Ve,paddingMultiple:We,caretColor:_e,colorDisabled:ze,textColorDisabled:Ae,placeholderColorDisabled:je,colorActive:Ge,boxShadowFocus:Ne,boxShadowActive:le,boxShadowHover:o,border:c,borderFocus:S,borderHover:N,borderActive:R,arrowColor:M,arrowColorDisabled:P,loadingColor:G,colorActiveWarning:Ie,boxShadowFocusWarning:Ue,boxShadowActiveWarning:kn,boxShadowHoverWarning:Tn,borderWarning:Rn,borderFocusWarning:Pn,borderHoverWarning:Mn,borderActiveWarning:_n,colorActiveError:zn,boxShadowFocusError:An,boxShadowActiveError:Nn,boxShadowHoverError:In,borderError:Bn,borderFocusError:$n,borderHoverError:En,borderActiveError:Ln,clearColor:Kn,clearColorHover:Dn,clearColorPressed:Vn,clearSize:Wn,arrowSize:jn,[fe("height",d)]:Gn,[fe("fontSize",d)]:Un}}=g.value;return{"--n-bezier":p,"--n-border":c,"--n-border-active":R,"--n-border-focus":S,"--n-border-hover":N,"--n-border-radius":V,"--n-box-shadow-active":le,"--n-box-shadow-focus":Ne,"--n-box-shadow-hover":o,"--n-caret-color":_e,"--n-color":Me,"--n-color-active":Ge,"--n-color-disabled":ze,"--n-font-size":Un,"--n-height":Gn,"--n-padding-single":Ve,"--n-padding-multiple":We,"--n-placeholder-color":Ke,"--n-placeholder-color-disabled":je,"--n-text-color":De,"--n-text-color-disabled":Ae,"--n-arrow-color":M,"--n-arrow-color-disabled":P,"--n-loading-color":G,"--n-color-active-warning":Ie,"--n-box-shadow-focus-warning":Ue,"--n-box-shadow-active-warning":kn,"--n-box-shadow-hover-warning":Tn,"--n-border-warning":Rn,"--n-border-focus-warning":Pn,"--n-border-hover-warning":Mn,"--n-border-active-warning":_n,"--n-color-active-error":zn,"--n-box-shadow-focus-error":An,"--n-box-shadow-active-error":Nn,"--n-box-shadow-hover-error":In,"--n-border-error":Bn,"--n-border-focus-error":$n,"--n-border-hover-error":En,"--n-border-active-error":Ln,"--n-clear-size":Wn,"--n-clear-color":Kn,"--n-clear-color-hover":Dn,"--n-clear-color-pressed":Vn,"--n-arrow-size":jn}}),Z=me?ln("internal-selection",K(()=>e.size[0]),ye,e):void 0;return{mergedTheme:g,mergedClearable:T,patternInputFocused:k,filterablePlaceholder:D,label:C,selected:O,showTagsPanel:x,isCompositing:s,counterRef:l,counterWrapperRef:y,patternInputMirrorRef:t,patternInputRef:n,selfRef:i,multipleElRef:r,singleElRef:u,patternInputWrapperRef:a,overflowRef:h,inputTagElRef:m,handleMouseDown:ne,handleFocusin:H,handleClear:ae,handleMouseEnter:ve,handleMouseLeave:se,handleDeleteOption:Q,handlePatternKeyDown:oe,handlePatternInputInput:W,handlePatternInputBlur:Oe,handlePatternInputFocus:Se,handleMouseEnterCounter:ke,handleMouseLeaveCounter:Te,handleFocusout:j,handleCompositionEnd:Ce,handleCompositionStart:te,onPopoverUpdateShow:Re,focus:be,focusInput:ie,blur:ge,blurInput:J,updateCounter:pe,getCounter:re,getTail:Fe,renderLabel:e.renderLabel,cssVars:me?void 0:ye,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender}},render(){const{status:e,multiple:t,size:n,disabled:i,filterable:r,maxTagCount:u,bordered:a,clsPrefix:l,onRender:y,renderTag:h,renderLabel:m}=this;y==null||y();const x=u==="responsive",k=typeof u=="number",_=x||k,g=f(it,null,{default:()=>f(vt,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var D,C;return(C=(D=this.$slots).arrow)===null||C===void 0?void 0:C.call(D)}})});let T;if(t){const{labelField:D}=this,C=j=>f("div",{class:`${l}-base-selection-tag-wrapper`,key:j.value},h?h({option:j,handleClose:()=>this.handleDeleteOption(j)}):f(Je,{size:n,closable:!j.disabled,disabled:i,onClose:()=>this.handleDeleteOption(j),internalCloseFocusable:!1},{default:()=>m?m(j,!0):we(j[D],j,!0)})),O=(k?this.selectedOptions.slice(0,u):this.selectedOptions).map(C),I=r?f("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),f("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,b=x?()=>f("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},f(Je,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let w;if(k){const j=this.selectedOptions.length-u;j>0&&(w=f("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},f(Je,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${j}`})))}const F=x?r?f(hn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>O,counter:b,tail:()=>I}):f(hn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>O,counter:b}):k?O.concat(w):O,B=_?()=>f("div",{class:`${l}-base-selection-popover`},x?O:this.selectedOptions.map(C)):void 0,E=_?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,$=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},f("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,H=r?f("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},F,x?null:I,g):f("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:i?void 0:0},F,g);T=f(rt,null,_?f(wt,Object.assign({},E,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>H,default:B}):H,$)}else if(r){const D=this.pattern||this.isCompositing,C=this.active?!D:!this.selected,O=this.active?!1:this.selected;T=f("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),O?f("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},f("div",{class:`${l}-base-selection-overlay__wrapper`},h?h({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):we(this.label,this.selectedOption,!0))):null,C?f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else T=f("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?f("div",{class:`${l}-base-selection-input`,title:Tt(this.label),key:"input"},f("div",{class:`${l}-base-selection-input__content`},h?h({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):we(this.label,this.selectedOption,!0))):f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),g);return f("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},T,a?f("div",{class:`${l}-base-selection__border`}):null,a?f("div",{class:`${l}-base-selection__state-border`}):null)}});function Ee(e){return e.type==="group"}function Fn(e){return e.type==="ignored"}function en(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function lo(e,t){return{getIsGroup:Ee,getIgnored:Fn,getKey(i){return Ee(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[t]}}}function ao(e,t,n,i){if(!t)return e;function r(u){if(!Array.isArray(u))return[];const a=[];for(const l of u)if(Ee(l)){const y=r(l[i]);y.length&&a.push(Object.assign({},l,{[i]:y}))}else{if(Fn(l))continue;t(n,l)&&a.push(l)}return a}return r(e)}function so(e,t,n){const i=new Map;return e.forEach(r=>{Ee(r)?r[n].forEach(u=>{i.set(u[t],u)}):i.set(r[t],r)}),i}const uo=ee([z("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),z("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[xn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),co=Object.assign(Object.assign({},xe.props),{to:tn.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,internalShowCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),xo=he({name:"Select",props:co,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:i,inlineThemeDisabled:r}=lt(e),u=xe("Select","-select",uo,ct,e,t),a=A(e.defaultValue),l=q(e,"value"),y=fn(l,a),h=A(!1),m=A(""),x=K(()=>{const{valueField:o,childrenField:c}=e,S=lo(o,c);return eo(j.value,S)}),k=K(()=>so($.value,e.valueField,e.childrenField)),_=A(!1),g=fn(q(e,"show"),_),T=A(null),D=A(null),C=A(null),{localeRef:O}=gt("Select"),I=K(()=>{var o;return(o=e.placeholder)!==null&&o!==void 0?o:O.value.placeholder}),b=bt(e,["items","options"]),w=[],F=A([]),B=A([]),E=A(new Map),U=K(()=>{const{fallbackOption:o}=e;if(o===void 0){const{labelField:c,valueField:S}=e;return N=>({[c]:String(N),[S]:N})}return o===!1?!1:c=>Object.assign(o(c),{value:c})}),$=K(()=>B.value.concat(F.value).concat(b.value)),H=K(()=>{const{filter:o}=e;if(o)return o;const{labelField:c,valueField:S}=e;return(N,R)=>{if(!R)return!1;const M=R[c];if(typeof M=="string")return en(N,M);const P=R[S];return typeof P=="string"?en(N,P):typeof P=="number"?en(N,String(P)):!1}}),j=K(()=>{if(e.remote)return b.value;{const{value:o}=$,{value:c}=m;return!c.length||!e.filterable?o:ao(o,H.value,c,e.childrenField)}});function ae(o){const c=e.remote,{value:S}=E,{value:N}=k,{value:R}=U,M=[];return o.forEach(P=>{if(N.has(P))M.push(N.get(P));else if(c&&S.has(P))M.push(S.get(P));else if(R){const G=R(P);G&&M.push(G)}}),M}const ve=K(()=>{if(e.multiple){const{value:o}=y;return Array.isArray(o)?ae(o):[]}return null}),se=K(()=>{const{value:o}=y;return!e.multiple&&!Array.isArray(o)?o===null?null:ae([o])[0]||null:null}),ne=at(e),{mergedSizeRef:Q,mergedDisabledRef:oe,mergedStatusRef:s}=ne;function v(o,c){const{onChange:S,"onUpdate:value":N,onUpdateValue:R}=e,{nTriggerFormChange:M,nTriggerFormInput:P}=ne;S&&X(S,o,c),R&&X(R,o,c),N&&X(N,o,c),a.value=o,M(),P()}function W(o){const{onBlur:c}=e,{nTriggerFormBlur:S}=ne;c&&X(c,o),S()}function te(){const{onClear:o}=e;o&&X(o)}function Ce(o){const{onFocus:c}=e,{nTriggerFormFocus:S}=ne;c&&X(c,o),S()}function Se(o){const{onSearch:c}=e;c&&X(c,o)}function Oe(o){const{onScroll:c}=e;c&&X(c,o)}function ge(){var o;const{remote:c,multiple:S}=e;if(c){const{value:N}=E;if(S){const{valueField:R}=e;(o=ve.value)===null||o===void 0||o.forEach(M=>{N.set(M[R],M)})}else{const R=se.value;R&&N.set(R[e.valueField],R)}}}function be(o){const{onUpdateShow:c,"onUpdate:show":S}=e;c&&X(c,o),S&&X(S,o),_.value=o}function ie(){oe.value||(be(!0),_.value=!0,e.filterable&&Ae())}function J(){be(!1)}function pe(){m.value="",B.value=w}const re=A(!1);function Fe(){e.filterable&&(re.value=!0)}function de(){e.filterable&&(re.value=!1,g.value||pe())}function ue(){oe.value||(g.value?e.filterable?Ae():J():ie())}function ke(o){var c,S;!((S=(c=C.value)===null||c===void 0?void 0:c.selfRef)===null||S===void 0)&&S.contains(o.relatedTarget)||(h.value=!1,W(o),J())}function Te(o){Ce(o),h.value=!0}function Re(o){h.value=!0}function me(o){var c;!((c=T.value)===null||c===void 0)&&c.$el.contains(o.relatedTarget)||(h.value=!1,W(o),J())}function ye(){var o;(o=T.value)===null||o===void 0||o.focus(),J()}function Z(o){var c;g.value&&(!((c=T.value)===null||c===void 0)&&c.$el.contains(ft(o))||J())}function d(o){if(!Array.isArray(o))return[];if(U.value)return Array.from(o);{const{remote:c}=e,{value:S}=k;if(c){const{value:N}=E;return o.filter(R=>S.has(R)||N.has(R))}else return o.filter(N=>S.has(N))}}function p(o){V(o.rawNode)}function V(o){if(oe.value)return;const{tag:c,remote:S,clearFilterAfterSelect:N,valueField:R}=e;if(c&&!S){const{value:M}=B,P=M[0]||null;if(P){const G=F.value;G.length?G.push(P):F.value=[P],B.value=w}}if(S&&E.value.set(o[R],o),e.multiple){const M=d(y.value),P=M.findIndex(G=>G===o[R]);if(~P){if(M.splice(P,1),c&&!S){const G=Me(o[R]);~G&&(F.value.splice(G,1),N&&(m.value=""))}}else M.push(o[R]),N&&(m.value="");v(M,ae(M))}else{if(c&&!S){const M=Me(o[R]);~M?F.value=[F.value[M]]:F.value=w}ze(),J(),v(o[R],o)}}function Me(o){return F.value.findIndex(S=>S[e.valueField]===o)}function Ke(o){g.value||ie();const{value:c}=o.target;m.value=c;const{tag:S,remote:N}=e;if(Se(c),S&&!N){if(!c){B.value=w;return}const{onCreate:R}=e,M=R?R(c):{[e.labelField]:c,[e.valueField]:c},{valueField:P}=e;b.value.some(G=>G[P]===M[P])||F.value.some(G=>G[P]===M[P])?B.value=w:B.value=[M]}}function De(o){o.stopPropagation();const{multiple:c}=e;!c&&e.filterable&&J(),te(),c?v([],[]):v(null,null)}function Ve(o){!Be(o,"action")&&!Be(o,"empty")&&o.preventDefault()}function We(o){Oe(o)}function _e(o){var c,S,N,R,M;switch(o.key){case" ":if(e.filterable)break;o.preventDefault();case"Enter":if(!(!((c=T.value)===null||c===void 0)&&c.isCompositing)){if(g.value){const P=(S=C.value)===null||S===void 0?void 0:S.getPendingTmNode();P?p(P):e.filterable||(J(),ze())}else if(ie(),e.tag&&re.value){const P=B.value[0];if(P){const G=P[e.valueField],{value:Ie}=y;e.multiple&&Array.isArray(Ie)&&Ie.some(Ue=>Ue===G)||V(P)}}}o.preventDefault();break;case"ArrowUp":if(o.preventDefault(),e.loading)return;g.value&&((N=C.value)===null||N===void 0||N.prev());break;case"ArrowDown":if(o.preventDefault(),e.loading)return;g.value?(R=C.value)===null||R===void 0||R.next():ie();break;case"Escape":g.value&&(ht(o),J()),(M=T.value)===null||M===void 0||M.focus();break}}function ze(){var o;(o=T.value)===null||o===void 0||o.focus()}function Ae(){var o;(o=T.value)===null||o===void 0||o.focusInput()}function je(){var o;!g.value||(o=D.value)===null||o===void 0||o.syncPosition()}ge(),Pe(q(e,"options"),ge);const Ge={focus:()=>{var o;(o=T.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=T.value)===null||o===void 0||o.blur()}},Ne=K(()=>{const{self:{menuBoxShadow:o}}=u.value;return{"--n-menu-box-shadow":o}}),le=r?ln("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},Ge),{mergedStatus:s,mergedClsPrefix:t,mergedBordered:n,namespace:i,treeMate:x,isMounted:st(),triggerRef:T,menuRef:C,pattern:m,uncontrolledShow:_,mergedShow:g,adjustedTo:tn(e),uncontrolledValue:a,mergedValue:y,followerRef:D,localizedPlaceholder:I,selectedOption:se,selectedOptions:ve,mergedSize:Q,mergedDisabled:oe,focused:h,activeWithoutMenuOpen:re,inlineThemeDisabled:r,onTriggerInputFocus:Fe,onTriggerInputBlur:de,handleTriggerOrMenuResize:je,handleMenuFocus:Re,handleMenuBlur:me,handleMenuTabOut:ye,handleTriggerClick:ue,handleToggle:p,handleDeleteOption:V,handlePatternInput:Ke,handleClear:De,handleTriggerBlur:ke,handleTriggerFocus:Te,handleKeydown:_e,handleMenuAfterLeave:pe,handleMenuClickOutside:Z,handleMenuScroll:We,handleMenuKeydown:_e,handleMenuMousedown:Ve,mergedTheme:u,cssVars:r?void 0:Ne,themeClass:le==null?void 0:le.themeClass,onRender:le==null?void 0:le.onRender})},render(){return f("div",{class:`${this.mergedClsPrefix}-select`},f(Ot,null,{default:()=>[f(Ft,null,{default:()=>f(ro,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),f(kt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===tn.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>f(wn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),dt(f(oo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.internalShowCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,r;return[(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)]},action:()=>{var i,r;return[(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)]}}),this.displayDirective==="show"?[[ut,this.mergedShow],[cn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[cn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{oo as N,xo as _,lo as a,eo as c,Tt as g,Ye as m};
