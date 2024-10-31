import w from"./Parent-LvxNQG8o.js";import{S as C}from"./sweetalert2.esm.all-JfA7lMxK.js";import{_ as x}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as b,o as s,c as P,w as c,a as t,e as a,F as B,g as T,t as n,d as o,f as g,b as y}from"./app-81tNAsjg.js";import"./Sidebar-ACOzqr4J.js";import"./Header-ja6GT2We.js";const A={components:{Parent:w},props:{orders:{type:Array,required:!0}},methods:{assignToMyself(l){C.fire({title:"Are you sure?",text:"Do you want to assign this order to yourself?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, do it!"}).then(i=>{i.isConfirmed&&window.location.replace(route("driver.orders.assignToMyself",l.id))})}}},N={class:"container-fluid"},S=t("div",{class:"row"},[t("div",{class:"col"},[t("h3",{class:"mb-4"},"Pending Orders")])],-1),D={key:0,class:"card"},V=t("div",{class:"card-body text-center"},[t("h4",{class:"text-muted mb-2"},"No Orders Available"),t("p",{class:"mb-2"},"There are currently no pending orders available to assign."),t("p",{class:"mb-2"},"Please check back later for updates or contact your supervisor for further assistance."),t("p",null,"If you have any questions, feel free to reach out to support.")],-1),M=[V],L={key:1,class:"card"},O={class:"card-body"},q={class:"table table-striped"},F=t("thead",{class:"bg-primary text-white"},[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Order Number"),t("th",{scope:"col"},"Customer"),t("th",{scope:"col"},"Brand"),t("th",{scope:"col"},"Product"),t("th",{scope:"col"},"Part"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Payment Type"),t("th",{scope:"col"},"Created at"),t("th",{scope:"col"},"Actions")])],-1),$={scope:"row"},E={key:0,class:"badge badge-warning"},I={key:1,class:"badge badge-primary"},Y={key:2,class:"badge badge-info"},j={key:3,class:"badge badge-primary"},z={key:4,class:"badge badge-success"},G={key:5,class:"badge badge-danger"};function H(l,i,r,J,K,f){const d=b("Link"),k=b("parent");return s(),P(k,null,{default:c(()=>[t("div",N,[S,r.orders.length===0?(s(),a("div",D,M)):(s(),a("div",L,[t("div",O,[t("table",q,[F,t("tbody",null,[(s(!0),a(B,null,T(r.orders,(e,v)=>{var u,p,_,h,m;return s(),a("tr",{key:e.id},[t("th",$,n(v+1),1),t("td",null,n(e.order_number),1),t("td",null,n((u=e.user)==null?void 0:u.name),1),t("td",null,n((p=e.brand)==null?void 0:p.name),1),t("td",null,n((_=e.product)==null?void 0:_.name),1),t("td",null,n(((m=(h=e==null?void 0:e.order_parts[0])==null?void 0:h.part)==null?void 0:m.name)??"---"),1),t("td",null,[e.status==="Pending"?(s(),a("span",E,"Pending")):o("",!0),e.status==="Assigned"?(s(),a("span",I,"Assigned")):o("",!0),e.status==="Processing"?(s(),a("span",Y,"Processing")):o("",!0),e.status==="Shipped"?(s(),a("span",j,"Shipped")):o("",!0),e.status==="Delivered"?(s(),a("span",z,"Delivered")):o("",!0),e.status==="Cancelled"?(s(),a("span",G,"Cancelled")):o("",!0)]),t("td",null,n(e==null?void 0:e.payment_method),1),t("td",null,n(e.order_date),1),t("td",null,[g(d,{href:"/orders/details/"+(e==null?void 0:e.id),class:"m-1 btn btn-sm btn-primary"},{default:c(()=>[y("View")]),_:2},1032,["href"]),g(d,{class:"btn btn-sm btn-primary",onClick:Q=>f.assignToMyself(e)},{default:c(()=>[y(" Assign To Me ")]),_:2},1032,["onClick"])])])}),128))])])])]))])]),_:1})}const et=x(A,[["render",H]]);export{et as default};
