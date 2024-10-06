import B from"./Parent-lAvivz5d.js";import{S as m}from"./sweetalert2.esm.all-JfA7lMxK.js";import{_ as v}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as C,o as s,c as d,w as i,a as t,e as o,g as A,F as x,t as a,d as n,f as P,b as u}from"./app-bpHzrBs1.js";import"./Sidebar-_yXJvxLl.js";import"./Header-gXfJbg9Z.js";const S={components:{Parent:B},props:{orders:{type:Array,required:!0}},methods:{markAsCancelled(c){m.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, do it!"}).then(l=>{l.isConfirmed&&window.location.replace(route("orders.status.cancelled",c.id))})},markAsCompleted(c){m.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, do it!"}).then(l=>{l.isConfirmed&&window.location.replace(route("orders.status.completed",c.id))})},markAsReadyToShipped(c){m.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, do it!"}).then(l=>{l.isConfirmed&&window.location.replace(route("orders.status.readyToShipped",c.id))})}}},T={class:"container-fluid"},Y=t("div",{class:"row"},[t("div",{class:"col"},[t("h3",{class:"mb-4"},"Orders List")])],-1),N={class:"card"},V={class:"card-body"},L={class:"table table-striped"},D=t("thead",{class:"bg-primary text-white"},[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Order Number"),t("th",{scope:"col",width:"15%"},"Customer"),t("th",{scope:"col"},"Brand"),t("th",{scope:"col"},"Product"),t("th",{scope:"col"},"Part"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Created at"),t("th",{scope:"col"},"Actions")])],-1),R={scope:"row"},$={key:0,class:"badge badge-warning"},F={key:1,class:"badge badge-primary"},O={key:2,class:"badge badge-info"},q={key:3,class:"badge badge-primary"},E={key:4,class:"badge badge-success"},I={key:5,class:"badge badge-danger"};function M(c,l,k,j,z,p){const r=C("Link"),y=C("parent");return s(),d(y,null,{default:i(()=>[t("div",T,[Y,t("div",N,[t("div",V,[t("table",L,[D,t("tbody",null,[(s(!0),o(x,null,A(k.orders,(e,w)=>{var _,h,b,f;return s(),o("tr",{key:e.id},[t("th",R,a(w+1),1),t("td",null,a(e.order_number),1),t("td",null,a(e.user.name),1),t("td",null,a((_=e.brand)==null?void 0:_.name),1),t("td",null,a((h=e.product)==null?void 0:h.name),1),t("td",null,a(((f=(b=e==null?void 0:e.order_parts[0])==null?void 0:b.part)==null?void 0:f.name)??"---"),1),t("td",null,[e.status==="Pending"?(s(),o("span",$,"Pending")):n("",!0),e.status==="Assigned"?(s(),o("span",F,"Assigned")):n("",!0),e.status==="Processing"?(s(),o("span",O,"Processing")):n("",!0),e.status==="Shipped"?(s(),o("span",q,"Shipped")):n("",!0),e.status==="Delivered"?(s(),o("span",E,"Delivered")):n("",!0),e.status==="Cancelled"?(s(),o("span",I,"Cancelled")):n("",!0)]),t("td",null,a(e.order_date),1),t("td",null,[P(r,{href:"/orders/details/"+(e==null?void 0:e.id),class:"m-1 btn btn-sm btn-primary"},{default:i(()=>[u("View")]),_:2},1032,["href"]),e.status==="Processing"?(s(),d(r,{key:0,class:"m-1 btn btn-sm btn-success",onClick:g=>p.markAsReadyToShipped(e)},{default:i(()=>[u("Ready to Shipped")]),_:2},1032,["onClick"])):n("",!0),e.status==="Pending"||e.status==="Assigned"||e.status==="Processing"?(s(),d(r,{key:1,class:"m-1 btn btn-sm btn-danger",onClick:g=>p.markAsCancelled(e)},{default:i(()=>[u("Cancel ")]),_:2},1032,["onClick"])):n("",!0),e.status==="delivered_to_client"?(s(),d(r,{key:2,class:"m-1 btn btn-sm btn-success",onClick:g=>p.markAsCompleted(e)},{default:i(()=>[u("Mark as Completed")]),_:2},1032,["onClick"])):n("",!0)])])}),128))])])])])])]),_:1})}const W=v(S,[["render",M]]);export{W as default};
