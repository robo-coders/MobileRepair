import f from"./Parent-W4omp5e3.js";import{r as l,o as a,c as _,w as i,a as e,f as h,b as g,h as v,e as c,t as d,d as p}from"./app-A2Ooqnut.js";import{_ as b}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./Sidebar-EJGzqCmH.js";import"./Header-SJ1JIdfU.js";const y={props:["errors"],components:{Parent:f},data(){return{form:{nie:"",modelo:"",others:""}}},methods:{setNieRequest:function(n){this.form.nie=n.target.files[0]},setModelorequest:function(n){this.form.modelo=n.target.files[0]},setOtherRequest:function(n){this.form.others=n.target.files[0]},saveApplication(){this.$inertia.post(route("agent.application.save"),this.form)}}},k={class:"container-fluid"},q={class:"row"},x=e("div",{class:"col"},[e("h3",{class:"mb-4"},"Upload Documents"),e("p",{class:"text-muted mb-4"},"Please upload PDF documents only.")],-1),N={class:"col text-right"},C={class:"form-group"},D=e("label",null,"NIE/DNI/CIF",-1),O={key:0,class:"text-danger"},R={class:"form-group"},B=e("label",null,"MODELO 036/037",-1),M={key:0,class:"text-danger"},w={class:"form-group"},V=e("label",null,"Other Documents",-1),A=e("hr",null,null,-1),E=e("div",{class:"form-group"},[e("button",{type:"submit",class:"btn btn-primary btn-block"},"Upload")],-1);function I(n,t,r,L,P,s){const u=l("Link"),m=l("parent");return a(),_(m,null,{default:i(()=>[e("div",k,[e("div",q,[x,e("div",N,[h(u,{class:"btn btn-primary",href:"/agent/applications"},{default:i(()=>[g("Back")]),_:1})])]),e("form",{onSubmit:t[3]||(t[3]=v((...o)=>s.saveApplication&&s.saveApplication(...o),["prevent"])),class:"p-4 card"},[e("div",C,[D,e("input",{type:"file",accept:"application/pdf",class:"form-control",onChange:t[0]||(t[0]=(...o)=>s.setNieRequest&&s.setNieRequest(...o))},null,32),r.errors.nie?(a(),c("div",O,d(r.errors.nie),1)):p("",!0)]),e("div",R,[B,e("input",{type:"file",accept:"application/pdf",class:"form-control",onChange:t[1]||(t[1]=(...o)=>s.setModelorequest&&s.setModelorequest(...o))},null,32),r.errors.modelo?(a(),c("div",M,d(r.errors.modelo),1)):p("",!0)]),e("div",w,[V,e("input",{type:"file",accept:"application/pdf",class:"form-control",onChange:t[2]||(t[2]=(...o)=>s.setOtherRequest&&s.setOtherRequest(...o))},null,32)]),A,E],32)])]),_:1})}const z=b(y,[["render",I]]);export{z as default};
