import v from"./Parent-W4omp5e3.js";import{r as u,o as r,c as b,w as m,a as t,f as g,b as k,e as i,g as c,F as l,d as a,i as C,v as x,t as _}from"./app-A2Ooqnut.js";import{_ as w}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./Sidebar-EJGzqCmH.js";import"./Header-SJ1JIdfU.js";const y={components:{Parent:v},data(){return{brands:"",products:"",parts:"",form:{brand_id:"",product_id:"",part_id:"",description:""}}},methods:{saveOrders(){this.$inertia.post(route("agent.orders.save"),this.form)},selectBrand:function(e){e.id!=this.form.brand_id&&(this.form.product_id="",this.form.part_id="",this.products="",this.parts="",$(".brand").removeClass("active-item"),$("#brand-"+e.id).addClass("active-item"),this.form.brand_id=e.id,this.products=e.products)},selectProduct:function(e){e.id!=this.form.product_id&&(this.parts="",this.form.part_id="",$(".product").removeClass("active-item"),$("#product-"+e.id).addClass("active-item"),this.form.product_id=e.id,this.parts=e.product_parts)},selectPart:function(e){e.id!=this.form.part_id&&($(".part").removeClass("active-item"),$("#part-"+e.id).addClass("active-item"),this.form.part_id=e.id)}},mounted(){this.brands=this.$page.props.brands}},B={class:"container-fluid"},P={class:"row"},O=t("div",{class:"col"},[t("h3",{class:"mb-4"},"Create Orders")],-1),V={class:"col text-right"},N={class:"p-5 card"},S={class:"text-center"},D=t("h3",null,"Select Brand",-1),L={class:"row mt-4"},E=["onClick"],F=["id","src"],T={class:"mt-3"},j={key:0,class:"text-center mt-3"},A=t("br",null,null,-1),M=t("br",null,null,-1),U=t("br",null,null,-1),q=t("h3",null,"Select Product",-1),z={class:"row mt-4"},G=["onClick"],H=["id","src"],I={class:"mt-3"},J={key:1,class:"text-center mt-3"},K=t("br",null,null,-1),Q=t("br",null,null,-1),R=t("br",null,null,-1),W=t("h3",null,"Select Part",-1),X={class:"row mt-4"},Y=["onClick"],Z=["id","src"],tt={class:"mt-3"},st={class:"text-center"},et=t("br",null,null,-1),ot=t("br",null,null,-1),rt=t("br",null,null,-1),it=t("h3",{class:"mb-4"},"Description",-1),nt={key:2,class:"text-center mt-3"},dt=t("hr",null,null,-1);function ct(e,d,lt,at,o,n){const p=u("Link"),f=u("parent");return r(),b(f,null,{default:m(()=>[t("div",B,[t("div",P,[O,t("div",V,[g(p,{class:"btn btn-primary",href:e.route("agent.orders.index")},{default:m(()=>[k("View Orders")]),_:1},8,["href"])])]),t("div",N,[t("div",S,[D,t("div",L,[(r(!0),i(l,null,c(o.brands,s=>(r(),i("div",{class:"col-4 m-auto",key:s.id,onClick:h=>n.selectBrand(s)},[t("img",{id:"brand-"+s.id,src:"/"+s.path,alt:"",class:"brand rounded",style:{width:"200px",height:"auto"}},null,8,F),t("h4",T,_(s.name),1)],8,E))),128))])]),o.products?(r(),i("div",j,[A,M,U,q,t("div",z,[(r(!0),i(l,null,c(o.products,s=>(r(),i("div",{class:"col-4 m-auto",key:s.id,onClick:h=>n.selectProduct(s)},[t("img",{id:"product-"+s.id,src:"/"+s.path,alt:"",class:"product rounded",style:{width:"200px",height:"auto"}},null,8,H),t("h4",I,_(s.name),1)],8,G))),128))])])):a("",!0),o.parts&&o.parts.length?(r(),i("div",J,[K,Q,R,W,t("div",X,[(r(!0),i(l,null,c(o.parts,s=>(r(),i("div",{class:"col-4 m-auto",key:s.id,onClick:h=>n.selectPart(s)},[t("img",{id:"part-"+s.id,src:"/images/"+s.name+".jpg",alt:"",class:"part rounded",style:{width:"200px",height:"auto"}},null,8,Z),t("h4",tt,_(s.name),1)],8,Y))),128))]),t("div",st,[et,ot,rt,it,C(t("textarea",{rows:"5",class:"form-control",placeholder:"Enter order description here...","onUpdate:modelValue":d[0]||(d[0]=s=>o.form.description=s)},null,512),[[x,o.form.description]])])])):a("",!0),o.form.brand_id&&o.form.product_id&&o.form.part_id?(r(),i("div",nt,[dt,t("button",{class:"btn btn-primary btn-lg",onClick:d[1]||(d[1]=(...s)=>n.saveOrders&&n.saveOrders(...s))},"Create Order")])):a("",!0)])])]),_:1})}const ft=w(y,[["render",ct]]);export{ft as default};