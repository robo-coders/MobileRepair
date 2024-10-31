import v from"./Parent-LvxNQG8o.js";import{r as u,o as n,c as b,w as _,a as e,f as x,b as w,h as y,i as m,v as h,e as i,t as d,d as p,j as k,g as I,F as P}from"./app-81tNAsjg.js";import{_ as B}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./Sidebar-ACOzqr4J.js";import"./Header-ja6GT2We.js";const V={props:["errors"],components:{Parent:v},data(){var a,t,s,c;return{dropdownOptions:{},imagePreview:(t=(a=this.$page.props)==null?void 0:a.product)!=null&&t.path?"/"+((c=(s=this.$page.props)==null?void 0:s.product)==null?void 0:c.path):"",form:{id:this.$page.props.product.id,brand_id:this.$page.props.product.brand_id,name:this.$page.props.product.name,description:this.$page.props.product.description,path:this.$page.props.product.path}}},methods:{updateProduct(){this.$inertia.post(route("products.update",{id:this.$page.props.product.id}),this.form)},setImageInRequest:function(a){this.form.path=a.target.files[0],this.imagePreview=URL.createObjectURL(a.target.files[0])}},mounted(){this.dropdownOptions=this.$page.props.dropdownOptions}},U={class:"container-fluid"},E={class:"row"},L=e("div",{class:"col"},[e("h3",{class:"mb-4"},"Edit Product")],-1),N={class:"col text-right"},O={class:"form-group"},R=e("label",{for:"name"},"Name",-1),j={key:0,class:"text-danger"},C={class:"form-group"},S=e("label",{for:"description"},"Description",-1),q={key:0,class:"text-danger"},D={class:"form-group"},M=e("label",null,"Image",-1),F={key:0,class:"text-danger"},T={key:0,class:"form-group"},z=["src"],A=e("hr",null,null,-1),G={class:"form-group"},H=e("label",{for:"role"},"Brand",-1),J=e("option",{value:""},"-- Select Brand --",-1),K=["value"],Q={key:0,class:"text-danger"},W=e("button",{type:"submit",class:"btn btn-primary"},"Update",-1);function X(a,t,s,c,r,l){const g=u("Link"),f=u("parent");return n(),b(f,null,{default:_(()=>[e("div",U,[e("div",E,[L,e("div",N,[x(g,{class:"btn btn-primary",href:"/products"},{default:_(()=>[w("Back")]),_:1})])]),e("form",{onSubmit:t[4]||(t[4]=y(o=>l.updateProduct(),["prevent"])),class:"p-4 card"},[e("div",O,[R,m(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>r.form.name=o),class:"form-control",id:"name",placeholder:"Enter product name here"},null,512),[[h,r.form.name]]),s.errors.name?(n(),i("span",j,d(s.errors.name),1)):p("",!0)]),e("div",C,[S,m(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=o=>r.form.description=o),class:"form-control",id:"description",placeholder:"Enter product desc here"},null,512),[[h,r.form.description]]),s.errors.description?(n(),i("span",q,d(s.errors.description),1)):p("",!0)]),e("div",D,[M,e("input",{type:"file",accept:"image/png, image/jpg, image/jpeg",class:"form-control",onChange:t[2]||(t[2]=(...o)=>l.setImageInRequest&&l.setImageInRequest(...o))},null,32),s.errors.path?(n(),i("span",F,d(s.errors.path),1)):p("",!0)]),r.imagePreview?(n(),i("div",T,[e("img",{src:r.imagePreview,alt:"Image",style:{width:"150px",height:"auto","border-radius":"1em",border:"1px dashed",padding:"5px"}},null,8,z)])):p("",!0),A,e("div",G,[H,m(e("select",{class:"custom-select",id:"dropdown","onUpdate:modelValue":t[3]||(t[3]=o=>r.form.brand_id=o)},[J,(n(!0),i(P,null,I(r.dropdownOptions,o=>(n(),i("option",{key:o.id,value:o.id},d(o.name),9,K))),128))],512),[[k,r.form.brand_id]]),s.errors.brand_id?(n(),i("span",Q,d(s.errors.brand_id),1)):p("",!0)]),W],32)])]),_:1})}const oe=B(V,[["render",X]]);export{oe as default};
