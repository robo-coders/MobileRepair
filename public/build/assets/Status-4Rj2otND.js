import h from"./Parent-_ieKBN-W.js";import{r as _,o as a,c as m,w as b,a as t,e as o,d as i,g,F as v,i as f,v as S,n as y,t as l}from"./app-nJ2U083f.js";import{_ as A}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./Sidebar-YjBe8u1j.js";import"./Header-uaTl70VL.js";const k={components:{Parent:h},props:{applications:{type:Array,required:!0}},data(){return{applicationStatusForm:{application_id:"",user_id:"",status:"",reason:""}}},methods:{openModal(c){this.applications.length>0?(this.applicationStatusForm.application_id=this.applications[0].id,this.applicationStatusForm.user_id=this.applications[0].user_id,this.applicationStatusForm.status=c,this.applicationStatusForm.reason="",$("#changeApplicationStatusModal").modal("show")):console.error("No applications found")},changeApplicationStatus(){this.$inertia.post(route("agent.status.approve",{id:this.$page.props.applications[0].id},{user_id:this.$page.props.applications[0].user_id}),this.applicationStatusForm)}}},C={class:"container-fluid"},F={class:"row"},w=t("div",{class:"col"},[t("h3",{class:"mb-4"},"Application Status")],-1),x={class:"col text-right"},M={class:"table table-bordered table-striped"},R=t("thead",{class:"bg-primary text-white"},[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Nie"),t("th",{scope:"col"},"Modelo"),t("th",{scope:"col"},"Others"),t("th",{scope:"col"},"Reason"),t("th",{scope:"col"},"Uploaded At"),t("th",{scope:"col"},"Last Update")])],-1),j={scope:"row"},V={key:0,class:"badge badge-success"},D={key:1,class:"badge badge-primary"},P={key:2,class:"badge badge-danger"},B=["href"],L=["href"],N=["href"],U={class:"modal fade",id:"changeApplicationStatusModal",tabindex:"-1",role:"dialog","aria-labelledby":"changeApplicationStatusModalLabel","aria-hidden":"true"},q={class:"modal-dialog",role:"document"},z={class:"modal-content"},E=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"changeApplicationStatusModalLabel"},"Change Application Status"),t("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[t("span",{"aria-hidden":"true"},"×")])],-1),O={class:"modal-body"},T=t("label",{for:"rejectionReason"},"Reason:",-1),G={class:"modal-footer"},H=t("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Cancel",-1),I=["textContent"];function J(c,s,n,K,d,r){const p=_("parent");return a(),m(p,null,{default:b(()=>[t("div",C,[t("div",F,[w,t("div",x,[n.applications.length&&n.applications[0].status=="Pending"?(a(),o("a",{key:0,class:"btn btn-primary ml-1",onClick:s[0]||(s[0]=e=>r.openModal("Approved"))},"Approve")):i("",!0),n.applications.length&&n.applications[0].status=="Pending"?(a(),o("a",{key:1,class:"btn btn-danger ml-1",onClick:s[1]||(s[1]=e=>r.openModal("Rejected"))},"Reject")):i("",!0)])]),t("table",M,[R,t("tbody",null,[(a(!0),o(v,null,g(n.applications,(e,u)=>(a(),o("tr",{key:e.id},[t("th",j,l(u+1),1),t("td",null,[e.status=="Approved"?(a(),o("span",V,"Approved")):i("",!0),e.status=="Pending"?(a(),o("span",D,"Pending")):i("",!0),e.status=="Rejected"?(a(),o("span",P,"Rejected")):i("",!0)]),t("td",null,[t("a",{target:"_blank",href:"/"+e.nie},"View Document",8,B)]),t("td",null,[t("a",{target:"_blank",href:"/"+e.modelo},"View Document",8,L)]),t("td",null,[t("a",{target:"_blank",href:"/"+e.others},"View Document",8,N)]),t("td",null,l(e.reason??"---"),1),t("td",null,l(e.created_date),1),t("td",null,l(e.updated_date),1)]))),128))])])]),t("div",U,[t("div",q,[t("div",z,[E,t("div",O,[T,f(t("textarea",{id:"rejectionReason",class:"form-control",rows:"3","onUpdate:modelValue":s[2]||(s[2]=e=>d.applicationStatusForm.reason=e)},null,512),[[S,d.applicationStatusForm.reason]])]),t("div",G,[H,t("button",{type:"button",class:y(["btn",d.applicationStatusForm.status=="Approved"?"btn-primary":"btn-danger"]),onClick:s[3]||(s[3]=(...e)=>r.changeApplicationStatus&&r.changeApplicationStatus(...e)),textContent:l(d.applicationStatusForm.status=="Approved"?"Approved":"Reject")},null,10,I)])])])])]),_:1})}const tt=A(k,[["render",J]]);export{tt as default};
