import{m as t,g as j,u as N,aj as E,J as P,j as M,K as te,L as U,O as se,P as l,c as b,a as r,e as y,d as $,au as ue,i as be,f as he,a5 as fe,a6 as ke,h as H,C as ve,k as me,bw as xe,aw as ge,aF as pe,bB as Ce,o as K}from"./index.53601f29.js";import{u as G}from"./use-merged-state.7e5a28e5.js";const ye=t("svg",{viewBox:"0 0 64 64",class:"check-icon"},t("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Re=t("svg",{viewBox:"0 0 100 100",class:"line-icon"},t("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),L=se("n-checkbox-group"),we={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},_e=j({name:"CheckboxGroup",props:we,setup(o){const{mergedClsPrefixRef:x}=N(o),g=E(o),{mergedSizeRef:R,mergedDisabledRef:S}=g,s=P(o.defaultValue),w=M(()=>o.value),u=G(w,s),c=M(()=>{var h;return((h=u.value)===null||h===void 0?void 0:h.length)||0}),a=M(()=>Array.isArray(u.value)?new Set(u.value):new Set);function A(h,n){const{nTriggerFormInput:p,nTriggerFormChange:C}=g,{onChange:f,"onUpdate:value":k,onUpdateValue:v}=o;if(Array.isArray(u.value)){const i=Array.from(u.value),B=i.findIndex(I=>I===n);h?~B||(i.push(n),v&&l(v,i,{actionType:"check",value:n}),k&&l(k,i,{actionType:"check",value:n}),p(),C(),s.value=i,f&&l(f,i)):~B&&(i.splice(B,1),v&&l(v,i,{actionType:"uncheck",value:n}),k&&l(k,i,{actionType:"uncheck",value:n}),f&&l(f,i),s.value=i,p(),C())}else h?(v&&l(v,[n],{actionType:"check",value:n}),k&&l(k,[n],{actionType:"check",value:n}),f&&l(f,[n]),s.value=[n],p(),C()):(v&&l(v,[],{actionType:"uncheck",value:n}),k&&l(k,[],{actionType:"uncheck",value:n}),f&&l(f,[]),s.value=[],p(),C())}return te(L,{checkedCountRef:c,maxRef:U(o,"max"),minRef:U(o,"min"),valueSetRef:a,disabledRef:S,mergedSizeRef:R,toggleCheckbox:A}),{mergedClsPrefix:x}},render(){return t("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),ze=b([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[b("&:hover",[r("checkbox-box",[y("border",{border:"var(--n-border-checked)"})])]),b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),$("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),$("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[b(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),$("indeterminate",[r("checkbox-box",[r("checkbox-icon",[b(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),b(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),$("checked, indeterminate",[b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[y("border",{border:"var(--n-border-checked)"})])]),$("disabled",{cursor:"not-allowed"},[$("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[y("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[y("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),y("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[y("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[b(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ue({left:"1px",top:"1px"})])]),y("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 `,[b("&:empty",{display:"none"})])]),be(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),he(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Se=Object.assign(Object.assign({},H.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),$e=j({name:"Checkbox",props:Se,setup(o){const x=P(null),{mergedClsPrefixRef:g,inlineThemeDisabled:R,mergedRtlRef:S}=N(o),s=E(o,{mergedSize(e){const{size:m}=o;if(m!==void 0)return m;if(c){const{value:d}=c.mergedSizeRef;if(d!==void 0)return d}if(e){const{mergedSize:d}=e;if(d!==void 0)return d.value}return"medium"},mergedDisabled(e){const{disabled:m}=o;if(m!==void 0)return m;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:d},checkedCountRef:z}=c;if(d!==void 0&&z.value>=d&&!n.value)return!0;const{minRef:{value:D}}=c;if(D!==void 0&&z.value<=D&&n.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:w,mergedSizeRef:u}=s,c=fe(L,null),a=P(o.defaultChecked),A=U(o,"checked"),h=G(A,a),n=ke(()=>{if(c){const e=c.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return h.value===o.checkedValue}),p=H("Checkbox","-checkbox",ze,Ce,o,g);function C(e){if(c&&o.value!==void 0)c.toggleCheckbox(!n.value,o.value);else{const{onChange:m,"onUpdate:checked":d,onUpdateChecked:z}=o,{nTriggerFormInput:D,nTriggerFormChange:F}=s,_=n.value?o.uncheckedValue:o.checkedValue;d&&l(d,_,e),z&&l(z,_,e),m&&l(m,_,e),D(),F(),a.value=_}}function f(e){w.value||C(e)}function k(e){if(!w.value)switch(e.key){case" ":case"Enter":C(e)}}function v(e){switch(e.key){case" ":e.preventDefault()}}const i={focus:()=>{var e;(e=x.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=x.value)===null||e===void 0||e.blur()}},B=ve("Checkbox",S,g),I=M(()=>{const{value:e}=u,{common:{cubicBezierEaseInOut:m},self:{borderRadius:d,color:z,colorChecked:D,colorDisabled:F,colorTableHeader:_,colorTableHeaderModal:O,colorTableHeaderPopover:V,checkMarkColor:J,checkMarkColorDisabled:Y,border:q,borderFocus:Q,borderDisabled:W,borderChecked:X,boxShadowFocus:Z,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:ne,colorDisabledChecked:re,borderDisabledChecked:ae,labelPadding:ce,labelLineHeight:le,[K("fontSize",e)]:ie,[K("size",e)]:de}}=p.value;return{"--n-label-line-height":le,"--n-size":de,"--n-bezier":m,"--n-border-radius":d,"--n-border":q,"--n-border-checked":X,"--n-border-focus":Q,"--n-border-disabled":W,"--n-border-disabled-checked":ae,"--n-box-shadow-focus":Z,"--n-color":z,"--n-color-checked":D,"--n-color-table":_,"--n-color-table-modal":O,"--n-color-table-popover":V,"--n-color-disabled":F,"--n-color-disabled-checked":re,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":J,"--n-check-mark-color-disabled":Y,"--n-check-mark-color-disabled-checked":ne,"--n-font-size":ie,"--n-label-padding":ce}}),T=R?me("checkbox",M(()=>u.value[0]),I,o):void 0;return Object.assign(s,i,{rtlEnabled:B,selfRef:x,mergedClsPrefix:g,mergedDisabled:w,renderedChecked:n,mergedTheme:p,labelId:xe(),handleClick:f,handleKeyUp:k,handleKeyDown:v,cssVars:R?void 0:I,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var o;const{$slots:x,renderedChecked:g,mergedDisabled:R,indeterminate:S,privateInsideTable:s,cssVars:w,labelId:u,label:c,mergedClsPrefix:a,focusable:A,handleKeyUp:h,handleKeyDown:n,handleClick:p}=this;return(o=this.onRender)===null||o===void 0||o.call(this),t("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,g&&`${a}-checkbox--checked`,R&&`${a}-checkbox--disabled`,S&&`${a}-checkbox--indeterminate`,s&&`${a}-checkbox--inside-table`],tabindex:R||!A?void 0:0,role:"checkbox","aria-checked":S?"mixed":g,"aria-labelledby":u,style:w,onKeyup:h,onKeydown:n,onClick:p,onMousedown:()=>{pe("selectstart",window,C=>{C.preventDefault()},{once:!0})}},t("div",{class:`${a}-checkbox-box-wrapper`},"\xA0",t("div",{class:`${a}-checkbox-box`},t(ge,null,{default:()=>this.indeterminate?t("div",{key:"indeterminate",class:`${a}-checkbox-icon`},Re):t("div",{key:"check",class:`${a}-checkbox-icon`},ye)}),t("div",{class:`${a}-checkbox-box__border`}))),c!==null||x.default?t("span",{class:`${a}-checkbox__label`,id:u},x.default?x.default():c):null)}});export{_e as N,$e as _};
