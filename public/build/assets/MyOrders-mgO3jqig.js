import v from"./Parent-lAvivz5d.js";import{S as h}from"./sweetalert2.esm.all-JfA7lMxK.js";import{_ as g}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as m,o as s,c as d,w as i,a as e,e as o,F as k,g as w,t as n,d as a,f as C,b as u}from"./app-bpHzrBs1.js";import"./Sidebar-_yXJvxLl.js";import"./Header-gXfJbg9Z.js";const A={components:{Parent:v},props:{orders:{type:Array,required:!0}},methods:{deliveredToShop(r){h.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, do it!"}).then(c=>{c.isConfirmed&&window.location.replace(route("driver.orders.shop.delivered",r.order.id))})},markAsDelivered(r){h.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, do it!"}).then(c=>{c.isConfirmed&&window.location.replace(route("driver.orders.delivered",r.order.id))})}}},x={class:"container-fluid"},B=e("div",{class:"row"},[e("div",{class:"col"},[e("h3",{class:"mb-4"},"My Orders")])],-1),S={key:0,class:"card"},D=e("div",{class:"card-body text-center"},[e("h4",{class:"text-muted mb-2"},"No Orders Available"),e("p",{class:"mb-2"},"There are currently no pending orders available to assign."),e("p",{class:"mb-2"},"Please check back later for updates or contact your supervisor for further assistance."),e("p",null,"If you have any questions, feel free to reach out to support.")],-1),T=[D],N={key:1,class:"card"},V={class:"card-body"},P={class:"table table-striped"},Y=e("thead",{class:"bg-primary text-white"},[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Description"),e("th",{scope:"col"},"Total Amount"),e("th",{scope:"col"},"Assigned At"),e("th",{scope:"col"},"Delivered At"),e("th",{scope:"col"},"Status"),e("th",{scope:"col"},"Action")])],-1),L={scope:"row"},M={key:0},O={key:1},q={key:0,class:"badge badge-primary"},F={key:1,class:"badge badge-info"},$={key:2,class:"badge badge-primary"},E={key:3,class:"badge badge-success"},I={key:4,class:"badge badge-danger"};function j(r,c,p,z,G,_){const l=m("Link"),b=m("parent");return s(),d(b,null,{default:i(()=>[e("div",x,[B,p.orders.length===0?(s(),o("div",S,T)):(s(),o("div",N,[e("div",V,[e("table",P,[Y,e("tbody",null,[(s(!0),o(k,null,w(p.orders,(t,f)=>(s(),o("tr",{key:t.id},[e("th",L,n(f+1),1),e("td",null,n(t.order.description),1),e("td",null,n(t.order.total_amount),1),e("td",null,n(t.assigned_at),1),e("td",null,[t.completed_at?(s(),o("span",M,n(t.completed_at),1)):(s(),o("span",O,"Null"))]),e("td",null,[t.status==="Assigned"?(s(),o("span",q,"Assigned")):a("",!0),t.status==="Processing"?(s(),o("span",F,"Processing")):a("",!0),t.status==="Shipped"?(s(),o("span",$,"Shipped")):a("",!0),t.status==="Delivered"?(s(),o("span",E,"Delivered")):a("",!0),t.status==="Cancelled"?(s(),o("span",I,"Cancelled")):a("",!0)]),e("td",null,[C(l,{href:"/orders/details/"+(t==null?void 0:t.order_id),class:"m-1 btn btn-sm btn-primary"},{default:i(()=>[u("View")]),_:2},1032,["href"]),t.status==="Assigned"?(s(),d(l,{key:0,class:"btn btn-sm btn-success",onClick:y=>_.deliveredToShop(t)},{default:i(()=>[u("Delivered To Shop")]),_:2},1032,["onClick"])):a("",!0),t.status==="Shipped"?(s(),d(l,{key:1,class:"btn btn-sm btn-success",onClick:y=>_.markAsDelivered(t)},{default:i(()=>[u("Mark as Delivered")]),_:2},1032,["onClick"])):a("",!0)])]))),128))])])])]))])]),_:1})}const W=g(A,[["render",j]]);export{W as default};
