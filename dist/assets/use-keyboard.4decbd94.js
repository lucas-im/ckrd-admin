import{bH as y,bI as m,aF as r,U as b,bJ as h,bK as w,a4 as v,aG as c}from"./index.53601f29.js";function M(p={},n){const t=y({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:u,keyup:i}=p,o=e=>{switch(e.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}u!==void 0&&Object.keys(u).forEach(s=>{if(s!==e.key)return;const a=u[s];if(typeof a=="function")a(e);else{const{stop:d=!1,prevent:l=!1}=a;d&&e.stopPropagation(),l&&e.preventDefault(),a.handler(e)}})},f=e=>{switch(e.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}i!==void 0&&Object.keys(i).forEach(s=>{if(s!==e.key)return;const a=i[s];if(typeof a=="function")a(e);else{const{stop:d=!1,prevent:l=!1}=a;d&&e.stopPropagation(),l&&e.preventDefault(),a.handler(e)}})},k=()=>{(n===void 0||n.value)&&(r("keydown",document,o),r("keyup",document,f)),n!==void 0&&b(n,e=>{e?(r("keydown",document,o),r("keyup",document,f)):(c("keydown",document,o),c("keyup",document,f))})};return h()?(w(k),v(()=>{(n===void 0||n.value)&&(c("keydown",document,o),c("keyup",document,f))})):k(),m(t)}export{M as u};
