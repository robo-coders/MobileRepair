import f from"./Parent-CdhewzKC.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as c,c as _,w as a,o as l,a as t,f as r,b as d,e as p,g as h,F as y,t as o,n as v}from"./app-B1MnwQxF.js";import"./Sidebar-BztHXFLZ.js";import"./Header-R0qRKiDo.js";const w={components:{Parent:f},props:{users:{type:Array,required:!0}}},k={class:"container-fluid"},x={class:"row"},A={class:"col text-right"},N={class:"table table-bordered table-striped"},B={scope:"row"};function C(i,s,m,L,D,E){const n=c("Link"),u=c("parent");return l(),_(u,null,{default:a(()=>[t("div",k,[t("div",x,[s[1]||(s[1]=t("div",{class:"col"},[t("h3",{class:"mb-4"},"Admin List")],-1)),t("div",A,[r(n,{class:"btn btn-primary",href:"/users/add"},{default:a(()=>s[0]||(s[0]=[d("Add New")])),_:1})])]),t("table",N,[s[4]||(s[4]=t("thead",{class:"bg-primary text-white"},[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Name"),t("th",{scope:"col"},"Email"),t("th",{scope:"col"},"Role"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Actions")])],-1)),t("tbody",null,[(l(!0),p(y,null,h(m.users,(e,b)=>(l(),p("tr",{key:e.id},[t("th",B,o(b+1),1),t("td",null,o(e.name),1),t("td",null,o(e.email),1),t("td",null,o(e.role),1),t("td",null,[t("span",{class:v(["badge",{"badge-success":e.status==="Active","badge-info":e.status==="Inactive","badge-warning":e.status==="Suspended","badge-primary":e.status==="Pending","badge-danger":e.status==="Deleted"}])},o(e.status),3)]),t("td",null,[r(n,{class:"btn btn-sm btn-primary",href:i.route("users.edit",e.id)},{default:a(()=>s[2]||(s[2]=[d("Edit")])),_:2},1032,["href"]),r(n,{class:"btn btn-sm btn-danger ml-1",href:i.route("users.delete",e.id)},{default:a(()=>s[3]||(s[3]=[d("Delete")])),_:2},1032,["href"])])]))),128))])])])]),_:1})}const q=g(w,[["render",C]]);export{q as default};
