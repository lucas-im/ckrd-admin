import{g as n,J as i,p as _,q as u,w as l,t as m,v as c,_ as p}from"./index.53601f29.js";import{e as f}from"./management.e4cac47e.js";const g=n({__name:"index",setup(d){const e=i(),a=async()=>{var s;const t=await f();t.data?e.value=t.data:(s=window.$message)==null||s.info("Error")};function r(){a()}return r(),(t,s)=>{const o=p;return _(),u(o,{style:{"white-space":"pre-line"}},{default:l(()=>[m(c(e.value?`Total Users: ${e.value.total_users}
Total Premium Users: ${e.value.total_premium_users}
Total Former Premium Users: ${e.value.total_former_premium_users}
Total Never Been Premium Users: ${e.value.total_never_premium_users}`:""),1)]),_:1})}}});export{g as default};
