import h from"./Parent-W4omp5e3.js";import{r as _,o as a,c as m,w as b,a as t,e as o,d as l,g,F as v,i as S,v as f,n as y,t as i}from"./app-A2Ooqnut.js";import{_ as A}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./Sidebar-EJGzqCmH.js";import"./Header-SJ1JIdfU.js";const k={components:{Parent:h},props:{applications:{type:Array,required:!0}},data(){return{applicationStatusForm:{application_id:"",status:"",reason:""}}},methods:{openModal(r){this.applicationStatusForm.application_id=this.applications[0].id,this.applicationStatusForm.status=r,this.applicationStatusForm.reason="",$("#changeApplicationStatusModal").modal("show")},changeApplicationStatus(){this.$inertia.post(route("agent.status.approve",{id:this.$page.props.applications[0].id}),this.applicationStatusForm)}}},C={class:"container-fluid"},w={class:"row"},x=t("div",{class:"col"},[t("h3",{class:"mb-4"},"Application Status")],-1),F={class:"col text-right"},M={class:"table table-bordered table-striped"},R=t("thead",{class:"bg-primary text-white"},[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Status"),t("th",{scope:"col"},"Nie"),t("th",{scope:"col"},"Modelo"),t("th",{scope:"col"},"Others"),t("th",{scope:"col"},"Reason"),t("th",{scope:"col"},"Uploaded At"),t("th",{scope:"col"},"Last Update")])],-1),j={scope:"row"},V={key:0,class:"badge badge-success"},D={key:1,class:"badge badge-primary"},P={key:2,class:"badge badge-danger"},B=["href"],L=["href"],N=["href"],U={class:"modal fade",id:"changeApplicationStatusModal",tabindex:"-1",role:"dialog","aria-labelledby":"changeApplicationStatusModalLabel","aria-hidden":"true"},q={class:"modal-dialog",role:"document"},z={class:"modal-content"},E=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"changeApplicationStatusModalLabel"},"Change Application Status"),t("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[t("span",{"aria-hidden":"true"},"×")])],-1),O={class:"modal-body"},T=t("label",{for:"rejectionReason"},"Reason:",-1),G={class:"modal-footer"},H=t("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Cancel",-1),I=["textContent"];function J(r,s,n,K,d,c){const p=_("parent");return a(),m(p,null,{default:b(()=>[t("div",C,[t("div",w,[x,t("div",F,[n.applications.length&&n.applications[0].status=="Pending"?(a(),o("a",{key:0,class:"btn btn-primary ml-1",onClick:s[0]||(s[0]=e=>c.openModal("Approved"))},"Approve")):l("",!0),n.applications.length&&n.applications[0].status=="Pending"?(a(),o("a",{key:1,class:"btn btn-danger ml-1",onClick:s[1]||(s[1]=e=>c.openModal("Rejected"))},"Reject")):l("",!0)])]),t("table",M,[R,t("tbody",null,[(a(!0),o(v,null,g(n.applications,(e,u)=>(a(),o("tr",{key:e.id},[t("th",j,i(u+1),1),t("td",null,[e.status=="Approved"?(a(),o("span",V,"Approved")):l("",!0),e.status=="Pending"?(a(),o("span",D,"Pending")):l("",!0),e.status=="Rejected"?(a(),o("span",P,"Rejected")):l("",!0)]),t("td",null,[t("a",{target:"_blank",href:"/"+e.nie},"View Document",8,B)]),t("td",null,[t("a",{target:"_blank",href:"/"+e.modelo},"View Document",8,L)]),t("td",null,[t("a",{target:"_blank",href:"/"+e.others},"View Document",8,N)]),t("td",null,i(e.reason??"---"),1),t("td",null,i(e.created_date),1),t("td",null,i(e.updated_date),1)]))),128))])])]),t("div",U,[t("div",q,[t("div",z,[E,t("div",O,[T,S(t("textarea",{id:"rejectionReason",class:"form-control",rows:"3","onUpdate:modelValue":s[2]||(s[2]=e=>d.applicationStatusForm.reason=e)},null,512),[[f,d.applicationStatusForm.reason]])]),t("div",G,[H,t("button",{type:"button",class:y(["btn",d.applicationStatusForm.status=="Approved"?"btn-primary":"btn-danger"]),onClick:s[3]||(s[3]=(...e)=>c.changeApplicationStatus&&c.changeApplicationStatus(...e)),textContent:i(d.applicationStatusForm.status=="Approved"?"Approved":"Reject")},null,10,I)])])])])]),_:1})}const tt=A(k,[["render",J]]);export{tt as default};