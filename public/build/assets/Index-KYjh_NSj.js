import b from"./Parent-lAvivz5d.js";import{S as f}from"./sweetalert2.esm.all-JfA7lMxK.js";import{_ as g}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as r,c as w,w as o,a as t,f as l,b as c,e as p,g as v,F as y,t as s,n as x}from"./app-bpHzrBs1.js";import"./Sidebar-_yXJvxLl.js";import"./Header-gXfJbg9Z.js";const C={components:{Parent:b},props:{users:{type:Array,required:!0}},methods:{deleteUser(a){f.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, do it!"}).then(d=>{d.isConfirmed&&window.location.replace(route("users.delete",a.id))})}}},k={class:"container-fluid"},B={class:"row"},A=t("div",{class:"col"},[t("h3",{class:"mb-4"},"Users List")],-1),N={class:"col text-right"},S={class:"card"},L={class:"card-body"},D={class:"table table-bordered table-striped"},E=t("thead",{class:"bg-primary text-white"},[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Name"),t("th",{scope:"col"},"Email"),t("th",{scope:"col"},"Role"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Actions")])],-1),U={scope:"row"};function V(a,d,u,$,F,m){const n=i("Link"),_=i("parent");return r(),w(_,null,{default:o(()=>[t("div",k,[t("div",B,[A,t("div",N,[l(n,{class:"btn btn-primary",href:"/users/add"},{default:o(()=>[c("Add New")]),_:1})])]),t("div",S,[t("div",L,[t("table",D,[E,t("tbody",null,[(r(!0),p(y,null,v(u.users,(e,h)=>(r(),p("tr",{key:e.id},[t("th",U,s(h+1),1),t("td",null,s(e.name),1),t("td",null,s(e.email),1),t("td",null,s(e.role),1),t("td",null,[t("span",{class:x(["badge",{"badge-success":e.status==="Active","badge-info":e.status==="Inactive","badge-warning":e.status==="Suspended","badge-primary":e.status==="Pending","badge-danger":e.status==="Deleted"}])},s(e.status),3)]),t("td",null,[l(n,{class:"btn btn-sm btn-primary",href:a.route("users.edit",e.id)},{default:o(()=>[c("Edit")]),_:2},1032,["href"]),l(n,{class:"btn btn-sm btn-danger ml-1",onClick:I=>m.deleteUser(e)},{default:o(()=>[c("Delete")]),_:2},1032,["onClick"])])]))),128))])])])])])]),_:1})}const j=g(C,[["render",V]]);export{j as default};