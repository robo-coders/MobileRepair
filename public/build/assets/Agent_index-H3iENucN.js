import y from"./Parent-LvxNQG8o.js";import{_ as k}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as _,o as e,c as v,w as o,a as t,f as u,b as h,e as a,g as w,F as x,t as n,d as c}from"./app-81tNAsjg.js";import"./Sidebar-ACOzqr4J.js";import"./Header-ja6GT2We.js";const A={components:{Parent:y},props:["orders"]},P={class:"container-fluid"},C={class:"row"},N=t("div",{class:"col"},[t("h3",{class:"mb-4"},"Orders List")],-1),B={class:"col text-right"},V={class:"card"},D={class:"card-body"},L={class:"table table-striped"},S=t("thead",{class:"bg-primary text-white"},[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Order Number"),t("th",{scope:"col"},"Brand"),t("th",{scope:"col"},"Product"),t("th",{scope:"col"},"Part"),t("th",{scope:"col"},"Description"),t("th",{scope:"col"},"Total Amount"),t("th",{scope:"col"},"Created At"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Action")])],-1),$={scope:"row"},F={key:0,class:"badge badge-warning"},O={key:1,class:"badge badge-primary"},T={key:2,class:"badge badge-info"},E={key:3,class:"badge badge-primary"},j={key:4,class:"badge badge-success"},q={key:5,class:"badge badge-danger"};function z(m,G,b,H,I,J){const l=_("Link"),g=_("parent");return e(),v(g,null,{default:o(()=>[t("div",P,[t("div",C,[N,t("div",B,[u(l,{class:"btn btn-primary",href:m.route("agent.orders.add")},{default:o(()=>[h("Add New")]),_:1},8,["href"])])]),t("div",V,[t("div",D,[t("table",L,[S,t("tbody",null,[(e(!0),a(x,null,w(b.orders,(s,f)=>{var d,i,r,p;return e(),a("tr",{key:s.id},[t("th",$,n(f+1),1),t("td",null,n(s.order_number),1),t("td",null,n((d=s.brand)==null?void 0:d.name),1),t("td",null,n((i=s.product)==null?void 0:i.name),1),t("td",null,n(((p=(r=s==null?void 0:s.order_parts[0])==null?void 0:r.part)==null?void 0:p.name)??"---"),1),t("td",null,n(s.description??"---"),1),t("td",null,n(s.total_amount),1),t("td",null,n(s.created_at),1),t("td",null,[s.status==="Pending"?(e(),a("span",F,"Pending")):c("",!0),s.status==="Assigned"?(e(),a("span",O,"Assigned")):c("",!0),s.status==="Processing"?(e(),a("span",T,"Processing")):c("",!0),s.status==="Shipped"?(e(),a("span",E,"Shipped")):c("",!0),s.status==="Delivered"?(e(),a("span",j,"Delivered")):c("",!0),s.status==="Cancelled"?(e(),a("span",q,"Cancelled")):c("",!0)]),t("td",null,[u(l,{href:"/orders/details/"+(s==null?void 0:s.id),class:"m-1 btn btn-sm btn-primary"},{default:o(()=>[h("View")]),_:2},1032,["href"])])])}),128))])])])])])]),_:1})}const W=k(A,[["render",z]]);export{W as default};
