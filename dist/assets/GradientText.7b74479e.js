import{B as C,G as x,I as a,a as v,g as w,u as z,j as s,h as y,k as T,m as E,Z as R,o as h}from"./index.53601f29.js";let S=!1;function P(){if(!!C&&!!window.CSS&&!S&&(S=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const I=t=>{const{primaryColor:n,successColor:i,warningColor:r,errorColor:l,infoColor:c,fontWeightStrong:d}=t;return{fontWeight:d,rotate:"252deg",colorStartPrimary:a(n,{alpha:.6}),colorEndPrimary:n,colorStartInfo:a(c,{alpha:.6}),colorEndInfo:c,colorStartWarning:a(r,{alpha:.6}),colorEndWarning:r,colorStartError:a(l,{alpha:.6}),colorEndError:l,colorStartSuccess:a(i,{alpha:.6}),colorEndSuccess:i}},$={name:"GradientText",common:x,self:I},k=$,B=v("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),j=Object.assign(Object.assign({},y.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),V=w({name:"GradientText",props:j,setup(t){P();const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=z(t),r=s(()=>{const{type:e}=t;return e==="danger"?"error":e}),l=s(()=>{let e=t.size||t.fontSize;return e&&(e=R(e)),e||void 0}),c=s(()=>{const e=t.color||t.gradient;if(typeof e=="string")return e;if(e){const g=e.deg||0,u=e.from,f=e.to;return`linear-gradient(${g}deg, ${u} 0%, ${f} 100%)`}}),d=y("GradientText","-gradient-text",B,k,t,n),m=s(()=>{const{value:e}=r,{common:{cubicBezierEaseInOut:g},self:{rotate:u,[h("colorStart",e)]:f,[h("colorEnd",e)]:p,fontWeight:b}}=d.value;return{"--n-bezier":g,"--n-rotate":u,"--n-color-start":f,"--n-color-end":p,"--n-font-weight":b}}),o=i?T("gradient-text",s(()=>r.value[0]),m,t):void 0;return{mergedClsPrefix:n,compatibleType:r,styleFontSize:l,styleBgImage:c,cssVars:i?void 0:m,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:t,onRender:n}=this;return n==null||n(),E("span",{class:[`${t}-gradient-text`,`${t}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}});export{V as _};
