import h from"./Parent-_ieKBN-W.js";import{S as m}from"./sweetalert2.esm.all-JfA7lMxK.js";import{_ as f}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as s,c as y,w as i,a as t,e as o,F as b,g,t as a,d as v,f as k,b as w}from"./app-nJ2U083f.js";import"./Sidebar-YjBe8u1j.js";import"./Header-uaTl70VL.js";const x={components:{Parent:h},props:{orders:{type:Array,required:!0}},methods:{assignToMyself(n){m.fire({title:"Are you sure?",text:"Do you want to assign this order to yourself?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, do it!"}).then(r=>{r.isConfirmed&&window.location.replace(route("driver.orders.assignToMyself",n.id))})}}},C={class:"container-fluid"},B=t("div",{class:"row"},[t("div",{class:"col"},[t("h3",{class:"mb-4"},"Pending Orders")])],-1),A={key:0,class:"card"},T=t("div",{class:"card-body text-center"},[t("h4",{class:"text-muted mb-2"},"No Orders Available"),t("p",{class:"mb-2"},"There are currently no pending orders available to assign."),t("p",{class:"mb-2"},"Please check back later for updates or contact your supervisor for further assistance."),t("p",null,"If you have any questions, feel free to reach out to support.")],-1),N=[T],D={key:1,class:"card"},M={class:"card-body"},P={class:"table table-striped"},S=t("thead",{class:"bg-primary text-white"},[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Description"),t("th",{scope:"col"},"Total Amount"),t("th",{scope:"col"},"Created At"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Action")])],-1),V={scope:"row"},L={key:0,class:"badge badge-warning"};function q(n,r,c,F,O,d){const u=l("Link"),p=l("parent");return s(),y(p,null,{default:i(()=>[t("div",C,[B,c.orders.length===0?(s(),o("div",A,N)):(s(),o("div",D,[t("div",M,[t("table",P,[S,t("tbody",null,[(s(!0),o(b,null,g(c.orders,(e,_)=>(s(),o("tr",{key:e.id},[t("th",V,a(_+1),1),t("td",null,a(e.description),1),t("td",null,a(e.total_amount),1),t("td",null,a(e.created_at),1),t("td",null,[e.status==="Pending"?(s(),o("span",L,a(e.status),1)):v("",!0)]),t("td",null,[k(u,{class:"btn btn-sm btn-primary",onClick:$=>d.assignToMyself(e)},{default:i(()=>[w(" Assign to Myself ")]),_:2},1032,["onClick"])])]))),128))])])])]))])]),_:1})}const H=f(x,[["render",q]]);export{H as default};
