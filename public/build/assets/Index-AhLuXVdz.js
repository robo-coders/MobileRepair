import m from"./Parent-W4omp5e3.js";import{_ as g}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as h,o as a,c as b,w as c,a as e,f as l,b as n,e as d,t as o,d as f,g as v,F as w,n as y}from"./app-A2Ooqnut.js";import"./Sidebar-EJGzqCmH.js";import"./Header-SJ1JIdfU.js";const B={components:{Parent:m},props:{brands:{type:Array,required:!0}},data(){return{successMessage:"Brand saved successfully"}},created(){this.successMessage=this.$props.successMessage||""},methods:{editBrand(t){console.log(`Edit brand with ID ${t}`)},deleteBrand(t){console.log(`Delete brand with ID ${t}`)}}},k={class:"container-fluid"},x={class:"row"},D=e("div",{class:"col"},[e("h3",{class:"mb-4"},"Brand List")],-1),L={class:"col text-right"},N={key:0,class:"alert alert-success",role:"alert"},C={class:"card"},M={class:"card-body"},V={class:"table-responsive"},$={class:"table table-bordered table-striped"},A=e("thead",{class:"bg-primary text-white"},[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Logo"),e("th",{scope:"col"},"Name"),e("th",{scope:"col",width:"15%"},"Description"),e("th",{scope:"col"},"Status"),e("th",{scope:"col"},"Created Date"),e("th",{scope:"col"},"Actions")])],-1),E={scope:"row"},I=["src"];function F(t,S,u,q,i,z){const r=h("Link"),p=h("parent");return a(),b(p,null,{default:c(()=>[e("div",k,[e("div",x,[D,e("div",L,[l(r,{class:"btn btn-primary",href:"/brands/add"},{default:c(()=>[n("Add New")]),_:1})])]),i.successMessage?(a(),d("div",N,o(i.successMessage),1)):f("",!0),e("div",C,[e("div",M,[e("div",V,[e("table",$,[A,e("tbody",null,[(a(!0),d(w,null,v(u.brands,(s,_)=>(a(),d("tr",{key:s.id},[e("th",E,o(_+1),1),e("td",null,[e("img",{src:s.path,width:"50",height:"50",class:"rounded",alt:"Logo",style:{height:"40px",width:"auto"}},null,8,I)]),e("td",null,o(s.name),1),e("td",null,o(s.description),1),e("td",null,[e("span",{class:y(["badge",s.status=="active"?"badge-success":"badge-warning"])},o(s.status),3)]),e("td",null,o(s.created_date),1),e("td",null,[l(r,{class:"btn btn-sm btn-primary",href:t.route("brands.edit",s.id)},{default:c(()=>[n("Edit")]),_:2},1032,["href"]),l(r,{class:"btn btn-sm btn-danger ml-1",href:t.route("brands.delete",s.id)},{default:c(()=>[n("Delete")]),_:2},1032,["href"])])]))),128))])])])])])])]),_:1})}const J=g(B,[["render",F]]);export{J as default};