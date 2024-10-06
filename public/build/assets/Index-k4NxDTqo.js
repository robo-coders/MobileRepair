import b from"./Parent-lAvivz5d.js";import{S as g}from"./sweetalert2.esm.all-JfA7lMxK.js";import{_ as w}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as h,o as a,c as v,w as c,a as e,f as r,b as l,e as d,t as o,d as y,g as B,F as x,n as C}from"./app-bpHzrBs1.js";import"./Sidebar-_yXJvxLl.js";import"./Header-gXfJbg9Z.js";const k={components:{Parent:b},props:{brands:{type:Array,required:!0}},data(){return{successMessage:"Brand saved successfully"}},created(){this.successMessage=this.$props.successMessage||""},methods:{editBrand(s){console.log(`Edit brand with ID ${s}`)},deleteBrand(s){g.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, do it!"}).then(i=>{i.isConfirmed&&window.location.replace(route("brands.delete",s.id))})}}},L={class:"container-fluid"},N={class:"row"},M=e("div",{class:"col"},[e("h3",{class:"mb-4"},"Brands List")],-1),A={class:"col text-right"},D={key:0,class:"alert alert-success",role:"alert"},S={class:"card"},V={class:"card-body"},E={class:"table-responsive"},$={class:"table table-bordered table-striped"},F=e("thead",{class:"bg-primary text-white"},[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Logo"),e("th",{scope:"col"},"Name"),e("th",{scope:"col",width:"50%"},"Description"),e("th",{scope:"col"},"Status"),e("th",{scope:"col"},"Actions")])],-1),I={scope:"row"},T=["src"];function Y(s,i,p,q,u,_){const n=h("Link"),m=h("parent");return a(),v(m,null,{default:c(()=>[e("div",L,[e("div",N,[M,e("div",A,[r(n,{class:"btn btn-primary",href:"/brands/add"},{default:c(()=>[l("Add New")]),_:1})])]),u.successMessage?(a(),d("div",D,o(u.successMessage),1)):y("",!0),e("div",S,[e("div",V,[e("div",E,[e("table",$,[F,e("tbody",null,[(a(!0),d(x,null,B(p.brands,(t,f)=>(a(),d("tr",{key:t.id},[e("th",I,o(f+1),1),e("td",null,[e("img",{src:t.path,width:"50",height:"50",class:"rounded",alt:"Logo",style:{height:"40px",width:"auto"}},null,8,T)]),e("td",null,o(t.name),1),e("td",null,o(t.description),1),e("td",null,[e("span",{class:C(["badge",t.status=="active"?"badge-success":"badge-warning"])},o(t.status),3)]),e("td",null,[r(n,{class:"btn btn-sm btn-primary",href:s.route("brands.edit",t.id)},{default:c(()=>[l("Edit")]),_:2},1032,["href"]),r(n,{class:"btn btn-sm btn-danger ml-1",onClick:z=>_.deleteBrand(t)},{default:c(()=>[l("Delete")]),_:2},1032,["onClick"])])]))),128))])])])])])])]),_:1})}const O=w(k,[["render",Y]]);export{O as default};