import{J as N,U as fe,g as D,m as d,h as V,j as y,bC as Ne,a as _,b as te,d as O,u as ve,bD as ke,az as ie,O as le,a5 as M,aE as he,K as G,a6 as J,a9 as Ce,a7 as X,bE as _e,bF as Oe,F as Ke,b9 as Ie,aC as Te,aD as De,aa as $e,c as q,e as F,L as j,P as ne,k as je,bc as ze,bG as Ae,o as E}from"./index.53601f29.js";import{a as be,p as de,r as Fe}from"./Popover.0a8891c8.js";import{h as ae}from"./FocusDetector.af05415e.js";import{V as Le,b as Be,c as Ee}from"./Follower.3bd7a0ed.js";import{u as Me}from"./use-merged-state.7e5a28e5.js";import{u as He}from"./use-keyboard.4decbd94.js";import{c as Ue}from"./Select.d558eed6.js";function qe(e){return o=>{o?e.value=o.$el:e.value=null}}function Ge(e,o,i){if(!o)return e;const n=N(e.value);let t=null;return fe(e,r=>{t!==null&&window.clearTimeout(t),r===!0?i&&!i.value?n.value=!0:t=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}const Ve=D({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),We=Object.assign(Object.assign({},de),V.props),Je=D({name:"Tooltip",props:We,__popover__:!0,setup(e){const o=V("Tooltip","-tooltip",void 0,Ne,e),i=N(null);return Object.assign(Object.assign({},{syncPosition(){i.value.syncPosition()},setShow(t){i.value.setShow(t)}}),{popoverRef:i,mergedTheme:o,popoverThemeOverrides:y(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return d(be,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Xe=_("ellipsis",{overflow:"hidden"},[te("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),O("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),O("cursor-pointer",`
 cursor: pointer;
 `)]);function ue(e){return`${e}-ellipsis--line-clamp`}function ce(e,o){return`${e}-ellipsis--cursor-${o}`}const Ze=Object.assign(Object.assign({},V.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),ho=D({name:"Ellipsis",inheritAttrs:!1,props:Ze,setup(e,{slots:o,attrs:i}){const{mergedClsPrefixRef:n}=ve(e),t=V("Ellipsis","-ellipsis",Xe,ke,e,n),r=N(null),v=N(null),h=N(null),u=N(!1),S=y(()=>{const{lineClamp:l}=e,{value:p}=u;return l!==void 0?{textOverflow:"","-webkit-line-clamp":p?"":l}:{textOverflow:p?"":"ellipsis","-webkit-line-clamp":""}});function x(){let l=!1;const{value:p}=u;if(p)return!0;const{value:m}=r;if(m){const{lineClamp:T}=e;if(k(m),T!==void 0)l=m.scrollHeight<=m.offsetHeight;else{const{value:z}=v;z&&(l=z.getBoundingClientRect().width<=m.getBoundingClientRect().width)}I(m,l)}return l}const R=y(()=>e.expandTrigger==="click"?()=>{var l;const{value:p}=u;p&&((l=h.value)===null||l===void 0||l.setShow(!1)),u.value=!p}:void 0),K=()=>d("span",Object.assign({},ie(i,{class:[`${n.value}-ellipsis`,e.lineClamp!==void 0?ue(n.value):void 0,e.expandTrigger==="click"?ce(n.value,"pointer"):void 0],style:S.value}),{ref:"triggerRef",onClick:R.value,onMouseenter:e.expandTrigger==="click"?x:void 0}),e.lineClamp?o:d("span",{ref:"triggerInnerRef"},o));function k(l){if(!l)return;const p=S.value,m=ue(n.value);e.lineClamp!==void 0?C(l,m,"add"):C(l,m,"remove");for(const T in p)l.style[T]!==p[T]&&(l.style[T]=p[T])}function I(l,p){const m=ce(n.value,"pointer");e.expandTrigger==="click"&&!p?C(l,m,"add"):C(l,m,"remove")}function C(l,p,m){m==="add"?l.classList.contains(p)||l.classList.add(p):l.classList.contains(p)&&l.classList.remove(p)}return{mergedTheme:t,triggerRef:r,triggerInnerRef:v,tooltipRef:h,handleClick:R,renderTrigger:K,getTooltipDisabled:x}},render(){var e;const{tooltip:o,renderTrigger:i,$slots:n}=this;if(o){const{mergedTheme:t}=this;return d(Je,Object.assign({ref:"tooltipRef",placement:"top"},o,{getDisabled:this.getTooltipDisabled,theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip}),{trigger:i,default:(e=n.tooltip)!==null&&e!==void 0?e:n.default})}else return i()}}),me=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),se=le("n-dropdown-menu"),Z=le("n-dropdown"),pe=le("n-dropdown-option");function re(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function Qe(e){return e.type==="group"}function we(e){return e.type==="divider"}function Ye(e){return e.type==="render"}const ge=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=M(Z),{hoverKeyRef:i,keyboardKeyRef:n,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:r,activeKeyPathRef:v,animatedRef:h,mergedShowRef:u,renderLabelRef:S,renderIconRef:x,labelFieldRef:R,childrenFieldRef:K,renderOptionRef:k,nodePropsRef:I,menuPropsRef:C}=o,l=M(pe,null),p=M(se),m=M(he),T=y(()=>e.tmNode.rawNode),z=y(()=>{const{value:a}=K;return re(e.tmNode.rawNode,a)}),Q=y(()=>{const{disabled:a}=e.tmNode;return a}),Y=y(()=>{if(!z.value)return!1;const{key:a,disabled:g}=e.tmNode;if(g)return!1;const{value:$}=i,{value:L}=n,{value:oe}=t,{value:B}=r;return $!==null?B.includes(a):L!==null?B.includes(a)&&B[B.length-1]!==a:oe!==null?B.includes(a):!1}),ee=y(()=>n.value===null&&!h.value),W=Ge(Y,300,ee),H=y(()=>!!(l!=null&&l.enteringSubmenuRef.value)),U=N(!1);G(pe,{enteringSubmenuRef:U});function A(){U.value=!0}function s(){U.value=!1}function w(){const{parentKey:a,tmNode:g}=e;g.disabled||!u.value||(t.value=a,n.value=null,i.value=g.key)}function f(){const{tmNode:a}=e;a.disabled||!u.value||i.value!==a.key&&w()}function c(a){if(e.tmNode.disabled||!u.value)return;const{relatedTarget:g}=a;g&&!ae({target:g},"dropdownOption")&&!ae({target:g},"scrollbarRail")&&(i.value=null)}function P(){const{value:a}=z,{tmNode:g}=e;!u.value||!a&&!g.disabled&&(o.doSelect(g.key,g.rawNode),o.doUpdateShow(!1))}return{labelField:R,renderLabel:S,renderIcon:x,siblingHasIcon:p.showIconRef,siblingHasSubmenu:p.hasSubmenuRef,menuProps:C,popoverBody:m,animated:h,mergedShowSubmenu:y(()=>W.value&&!H.value),rawNode:T,hasSubmenu:z,pending:J(()=>{const{value:a}=r,{key:g}=e.tmNode;return a.includes(g)}),childActive:J(()=>{const{value:a}=v,{key:g}=e.tmNode,$=a.findIndex(L=>g===L);return $===-1?!1:$<a.length-1}),active:J(()=>{const{value:a}=v,{key:g}=e.tmNode,$=a.findIndex(L=>g===L);return $===-1?!1:$===a.length-1}),mergedDisabled:Q,renderOption:k,nodeProps:I,handleClick:P,handleMouseMove:f,handleMouseEnter:w,handleMouseLeave:c,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:s}},render(){var e,o;const{animated:i,rawNode:n,mergedShowSubmenu:t,clsPrefix:r,siblingHasIcon:v,siblingHasSubmenu:h,renderLabel:u,renderIcon:S,renderOption:x,nodeProps:R,props:K,scrollable:k}=this;let I=null;if(t){const m=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);I=d(ye,Object.assign({},m,{clsPrefix:r,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const C={class:[`${r}-dropdown-option-body`,this.pending&&`${r}-dropdown-option-body--pending`,this.active&&`${r}-dropdown-option-body--active`,this.childActive&&`${r}-dropdown-option-body--child-active`,this.mergedDisabled&&`${r}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},l=R==null?void 0:R(n),p=d("div",Object.assign({class:[`${r}-dropdown-option`,l==null?void 0:l.class],"data-dropdown-option":!0},l),d("div",ie(C,K),[d("div",{class:[`${r}-dropdown-option-body__prefix`,v&&`${r}-dropdown-option-body__prefix--show-icon`]},[S?S(n):X(n.icon)]),d("div",{"data-dropdown-option":!0,class:`${r}-dropdown-option-body__label`},u?u(n):X((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),d("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__suffix`,h&&`${r}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(_e,null,{default:()=>d(Ve,null)}):null)]),this.hasSubmenu?d(Le,null,{default:()=>[d(Be,null,{default:()=>d("div",{class:`${r}-dropdown-offset-container`},d(Ee,{show:this.mergedShowSubmenu,placement:this.placement,to:k&&this.popoverBody||void 0,teleportDisabled:!k},{default:()=>d("div",{class:`${r}-dropdown-menu-wrapper`},i?d(Ce,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>I}):I)}))})]}):null);return x?x({node:p,option:n}):p}}),eo=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=M(se),{renderLabelRef:i,labelFieldRef:n,nodePropsRef:t,renderOptionRef:r}=M(Z);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:t,renderOption:r}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:n,nodeProps:t,renderLabel:r,renderOption:v}=this,{rawNode:h}=this.tmNode,u=d("div",Object.assign({class:`${o}-dropdown-option`},t==null?void 0:t(h)),d("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},X(h.icon)),d("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},r?r(h):X((e=h.title)!==null&&e!==void 0?e:h[this.labelField])),d("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return v?v({node:u,option:h}):u}}),oo=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:n}=e;return d(Ke,null,d(eo,{clsPrefix:i,tmNode:e,key:e.key}),n==null?void 0:n.map(t=>we(t.rawNode)?d(me,{clsPrefix:i,key:t.key}):t.isGroup?(Oe("dropdown","`group` node is not allowed to be put in `group` node."),null):d(ge,{clsPrefix:i,tmNode:t,parentKey:o,key:t.key})))}}),no=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return d("div",o,[e==null?void 0:e()])}}),ye=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=M(Z);G(se,{showIconRef:y(()=>{const t=o.value;return e.tmNodes.some(r=>{var v;if(r.isGroup)return(v=r.children)===null||v===void 0?void 0:v.some(({rawNode:u})=>t?t(u):u.icon);const{rawNode:h}=r;return t?t(h):h.icon})}),hasSubmenuRef:y(()=>{const{value:t}=i;return e.tmNodes.some(r=>{var v;if(r.isGroup)return(v=r.children)===null||v===void 0?void 0:v.some(({rawNode:u})=>re(u,t));const{rawNode:h}=r;return re(h,t)})})});const n=N(null);return G(Te,null),G(De,null),G(he,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,n=this.tmNodes.map(t=>{const{rawNode:r}=t;return Ye(r)?d(no,{tmNode:t,key:t.key}):we(r)?d(me,{clsPrefix:o,key:t.key}):Qe(r)?d(oo,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):d(ge,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:r.props,scrollable:i})});return d("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?d(Ie,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Fe({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),to=_("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[$e(),_("dropdown-option",`
 position: relative;
 `,[q("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[q("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),_("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[q("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),te("disabled",[O("pending",`
 color: var(--n-option-text-color-hover);
 `,[F("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),q("&::before","background-color: var(--n-option-color-hover);")]),O("active",`
 color: var(--n-option-text-color-active);
 `,[F("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),q("&::before","background-color: var(--n-option-color-active);")]),O("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[F("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),O("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),O("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[F("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[O("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),F("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[O("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),F("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),F("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[O("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),_("dropdown-menu","pointer-events: all;")]),_("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),_("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),_("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),q(">",[_("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),te("scrollable",`
 padding: var(--n-padding);
 `),O("scrollable",[F("content",`
 padding: var(--n-padding);
 `)])]),ro={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},io=Object.keys(de),lo=Object.assign(Object.assign(Object.assign({},de),ro),V.props),bo=D({name:"Dropdown",inheritAttrs:!1,props:lo,setup(e){const o=N(!1),i=Me(j(e,"show"),o),n=y(()=>{const{keyField:s,childrenField:w}=e;return Ue(e.options,{getKey(f){return f[s]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[w]}})}),t=y(()=>n.value.treeNodes),r=N(null),v=N(null),h=N(null),u=y(()=>{var s,w,f;return(f=(w=(s=r.value)!==null&&s!==void 0?s:v.value)!==null&&w!==void 0?w:h.value)!==null&&f!==void 0?f:null}),S=y(()=>n.value.getPath(u.value).keyPath),x=y(()=>n.value.getPath(e.value).keyPath),R=J(()=>e.keyboard&&i.value);He({keydown:{ArrowUp:{prevent:!0,handler:Q},ArrowRight:{prevent:!0,handler:z},ArrowDown:{prevent:!0,handler:Y},ArrowLeft:{prevent:!0,handler:T},Escape:m},keyup:{Enter:ee}},R);const{mergedClsPrefixRef:K,inlineThemeDisabled:k}=ve(e),I=V("Dropdown","-dropdown",to,Ae,e,K);G(Z,{labelFieldRef:j(e,"labelField"),childrenFieldRef:j(e,"childrenField"),renderLabelRef:j(e,"renderLabel"),renderIconRef:j(e,"renderIcon"),hoverKeyRef:r,keyboardKeyRef:v,lastToggledSubmenuKeyRef:h,pendingKeyPathRef:S,activeKeyPathRef:x,animatedRef:j(e,"animated"),mergedShowRef:i,nodePropsRef:j(e,"nodeProps"),renderOptionRef:j(e,"renderOption"),menuPropsRef:j(e,"menuProps"),doSelect:C,doUpdateShow:l}),fe(i,s=>{!e.animated&&!s&&p()});function C(s,w){const{onSelect:f}=e;f&&ne(f,s,w)}function l(s){const{"onUpdate:show":w,onUpdateShow:f}=e;w&&ne(w,s),f&&ne(f,s),o.value=s}function p(){r.value=null,v.value=null,h.value=null}function m(){l(!1)}function T(){H("left")}function z(){H("right")}function Q(){H("up")}function Y(){H("down")}function ee(){const s=W();s!=null&&s.isLeaf&&(C(s.key,s.rawNode),l(!1))}function W(){var s;const{value:w}=n,{value:f}=u;return!w||f===null?null:(s=w.getNode(f))!==null&&s!==void 0?s:null}function H(s){const{value:w}=u,{value:{getFirstAvailableNode:f}}=n;let c=null;if(w===null){const P=f();P!==null&&(c=P.key)}else{const P=W();if(P){let a;switch(s){case"down":a=P.getNext();break;case"up":a=P.getPrev();break;case"right":a=P.getChild();break;case"left":a=P.getParent();break}a&&(c=a.key)}}c!==null&&(r.value=null,v.value=c)}const U=y(()=>{const{size:s,inverted:w}=e,{common:{cubicBezierEaseInOut:f},self:c}=I.value,{padding:P,dividerColor:a,borderRadius:g,optionOpacityDisabled:$,[E("optionIconSuffixWidth",s)]:L,[E("optionSuffixWidth",s)]:oe,[E("optionIconPrefixWidth",s)]:B,[E("optionPrefixWidth",s)]:xe,[E("fontSize",s)]:Se,[E("optionHeight",s)]:Re,[E("optionIconSize",s)]:Pe}=c,b={"--n-bezier":f,"--n-font-size":Se,"--n-padding":P,"--n-border-radius":g,"--n-option-height":Re,"--n-option-prefix-width":xe,"--n-option-icon-prefix-width":B,"--n-option-suffix-width":oe,"--n-option-icon-suffix-width":L,"--n-option-icon-size":Pe,"--n-divider-color":a,"--n-option-opacity-disabled":$};return w?(b["--n-color"]=c.colorInverted,b["--n-option-color-hover"]=c.optionColorHoverInverted,b["--n-option-color-active"]=c.optionColorActiveInverted,b["--n-option-text-color"]=c.optionTextColorInverted,b["--n-option-text-color-hover"]=c.optionTextColorHoverInverted,b["--n-option-text-color-active"]=c.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=c.optionTextColorChildActiveInverted,b["--n-prefix-color"]=c.prefixColorInverted,b["--n-suffix-color"]=c.suffixColorInverted,b["--n-group-header-text-color"]=c.groupHeaderTextColorInverted):(b["--n-color"]=c.color,b["--n-option-color-hover"]=c.optionColorHover,b["--n-option-color-active"]=c.optionColorActive,b["--n-option-text-color"]=c.optionTextColor,b["--n-option-text-color-hover"]=c.optionTextColorHover,b["--n-option-text-color-active"]=c.optionTextColorActive,b["--n-option-text-color-child-active"]=c.optionTextColorChildActive,b["--n-prefix-color"]=c.prefixColor,b["--n-suffix-color"]=c.suffixColor,b["--n-group-header-text-color"]=c.groupHeaderTextColor),b}),A=k?je("dropdown",y(()=>`${e.size[0]}${e.inverted?"i":""}`),U,e):void 0;return{mergedClsPrefix:K,mergedTheme:I,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{!e.animated||p()},doUpdateShow:l,cssVars:k?void 0:U,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const e=(n,t,r,v,h)=>{var u;const{mergedClsPrefix:S,menuProps:x}=this;(u=this.onRender)===null||u===void 0||u.call(this);const R=(x==null?void 0:x(void 0,this.tmNodes.map(k=>k.rawNode)))||{},K={ref:qe(t),class:[n,`${S}-dropdown`,this.themeClass],clsPrefix:S,tmNodes:this.tmNodes,style:[r,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:v,onMouseleave:h};return d(ye,ie(this.$attrs,K,R))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(be,Object.assign({},ze(this.$props,io),i),{trigger:()=>{var n,t;return(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n)}})}});export{Ve as C,bo as _,ho as a,Je as b,qe as c};
