import j from"./Parent-lAvivz5d.js";import{r as w,o as l,c as D,w as S,a as e,f as V,b as B,e as a,g as v,F as b,d as _,i as x,v as y,t as h}from"./app-bpHzrBs1.js";import{_ as M}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./Sidebar-_yXJvxLl.js";import"./Header-gXfJbg9Z.js";var C="https://js.stripe.com/v3",O=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,E="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",A=function(){for(var r=document.querySelectorAll('script[src^="'.concat(C,'"]')),n=0;n<r.length;n++){var i=r[n];if(O.test(i.src))return i}return null},k=function(r){var n=r&&!r.advancedFraudSignals?"?advancedFraudSignals=false":"",i=document.createElement("script");i.src="".concat(C).concat(n);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(i),i},F=function(r,n){!r||!r._registerWrapper||r._registerWrapper({name:"stripe-js",version:"4.6.0",startTime:n})},c=null,m=null,p=null,N=function(r){return function(){r(new Error("Failed to load Stripe.js"))}},R=function(r,n){return function(){window.Stripe?r(window.Stripe):n(new Error("Stripe.js not available"))}},U=function(r){return c!==null?c:(c=new Promise(function(n,i){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&r&&console.warn(E),window.Stripe){n(window.Stripe);return}try{var s=A();if(s&&r)console.warn(E);else if(!s)s=k(r);else if(s&&p!==null&&m!==null){var d;s.removeEventListener("load",p),s.removeEventListener("error",m),(d=s.parentNode)===null||d===void 0||d.removeChild(s),s=k(r)}p=R(n,i),m=N(i),s.addEventListener("load",p),s.addEventListener("error",m)}catch(f){i(f);return}}),c.catch(function(n){return c=null,Promise.reject(n)}))},W=function(r,n,i){if(r===null)return null;var s=r.apply(void 0,n);return F(s,i),s},u,P=!1,L=function(){return u||(u=U(null).catch(function(r){return u=null,Promise.reject(r)}),u)};Promise.resolve().then(function(){return L()}).catch(function(t){P||console.warn(t)});var q=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];P=!0;var s=Date.now();return L().then(function(d){return W(d,n,s)})};const G={components:{Parent:j},data(){return{brands:"",products:"",parts:"",form:{brand_id:"",product_id:"",part_id:"",description:"",address:"",cardToken:""},stripe:null,card:null,cardErrorMessage:"",btnDisabled:!1}},methods:{initializeStripe(){let t=this;q(t.$page.props.pk).then(n=>{t.stripe=n,t.stripeLoaded=!0;let i=t.stripe.elements();t.card=i.create("card")})},createToken(){let t=this;t.btnDisabled=!0,t.cardErrorMessage="",t.stripe.createToken(t.card).then(function(r){var n;if(r.error){t.cardErrorMessage=((n=r==null?void 0:r.error)==null?void 0:n.message)??"Payment cannot be made. Try again later.",t.btnDisabled=!0;return}t.form.cardToken=r.token.id,t.saveOrders(),t.btnDisabled=!1})},saveOrders(){this.$inertia.post(route("agent.orders.save"),this.form)},selectBrand:function(t){t.id!=this.form.brand_id&&(this.form.product_id="",this.form.part_id="",this.products="",this.parts="",$(".brand").removeClass("active-item"),$("#brand-"+t.id).addClass("active-item"),this.form.brand_id=t.id,this.products=t.products)},selectProduct:function(t){if(t.id!=this.form.product_id){this.parts="",this.form.part_id="",$(".product").removeClass("active-item"),$("#product-"+t.id).addClass("active-item"),this.form.product_id=t.id,this.parts=t.product_parts;let r=this;setTimeout(()=>{r.card.mount(this.$refs.card)},250)}},selectPart:function(t){t.id!=this.form.part_id&&($(".part").removeClass("active-item"),$("#part-"+t.id).addClass("active-item"),this.form.part_id=t.id)}},mounted(){this.brands=this.$page.props.brands,this.initializeStripe()}},I={class:"container-fluid"},z={class:"row"},X=e("div",{class:"col"},[e("h3",{class:"mb-4"},"Create Orders")],-1),H={class:"col text-right"},J={class:"p-5 card"},K={class:"text-center"},Q=e("h3",null,"Select Brand",-1),Y={class:"row mt-4"},Z=["onClick"],ee=["id","src"],te={class:"mt-3"},re={key:0,class:"text-center mt-3"},se=e("br",null,null,-1),ne=e("br",null,null,-1),oe=e("br",null,null,-1),ie=e("h3",null,"Select Product",-1),de={class:"row mt-4"},le=["onClick"],ae=["id","src"],ce={class:"mt-3"},ue={key:1,class:"text-center mt-3"},_e=e("br",null,null,-1),he=e("br",null,null,-1),me=e("br",null,null,-1),pe=e("h3",null,"Select Part",-1),fe={class:"row mt-4"},ve=["onClick"],be=["id","src"],ge={class:"mt-3"},we={class:"text-center"},Se=e("br",null,null,-1),xe=e("br",null,null,-1),ye=e("br",null,null,-1),Ee=e("h3",{class:"mb-4"},"Description",-1),ke={class:"text-center"},Ce=e("br",null,null,-1),Pe=e("br",null,null,-1),Le=e("br",null,null,-1),Te=e("h3",{class:"mb-4"},"Address",-1),je={class:"text-left"},De=e("br",null,null,-1),Ve=e("br",null,null,-1),Be=e("br",null,null,-1),Me=e("h3",{class:"mb-4"},"Card Payment",-1),Oe={ref:"card",style:{border:"1px solid lightgray",padding:"1em","border-radius":"6px"}},Ae={key:0,class:"text-danger"},Fe={key:2,class:"text-center mt-3"},Ne=e("hr",null,null,-1),Re=["disabled"];function Ue(t,r,n,i,s,d){const f=w("Link"),T=w("parent");return l(),D(T,null,{default:S(()=>[e("div",I,[e("div",z,[X,e("div",H,[V(f,{class:"btn btn-primary",href:t.route("agent.orders.index")},{default:S(()=>[B("View Orders")]),_:1},8,["href"])])]),e("div",J,[e("div",K,[Q,e("div",Y,[(l(!0),a(b,null,v(s.brands,o=>(l(),a("div",{class:"col-4 m-auto",key:o.id,onClick:g=>d.selectBrand(o)},[e("img",{id:"brand-"+o.id,src:"/"+o.path,alt:"",class:"brand rounded",style:{width:"200px",height:"auto"}},null,8,ee),e("h4",te,h(o.name),1)],8,Z))),128))])]),s.products?(l(),a("div",re,[se,ne,oe,ie,e("div",de,[(l(!0),a(b,null,v(s.products,o=>(l(),a("div",{class:"col-4 m-auto",key:o.id,onClick:g=>d.selectProduct(o)},[e("img",{id:"product-"+o.id,src:"/"+o.path,alt:"",class:"product rounded",style:{width:"200px",height:"auto"}},null,8,ae),e("h4",ce,h(o.name),1)],8,le))),128))])])):_("",!0),s.parts&&s.parts.length?(l(),a("div",ue,[_e,he,me,pe,e("div",fe,[(l(!0),a(b,null,v(s.parts,o=>(l(),a("div",{class:"col-4 m-auto",key:o.id,onClick:g=>d.selectPart(o)},[e("img",{id:"part-"+o.id,src:"/images/"+o.name+".jpg",alt:"",class:"part rounded",style:{width:"200px",height:"auto"}},null,8,be),e("h4",ge,h(o.name),1)],8,ve))),128))]),e("div",we,[Se,xe,ye,Ee,x(e("textarea",{rows:"5",class:"form-control",placeholder:"Enter order description here...","onUpdate:modelValue":r[0]||(r[0]=o=>s.form.description=o)},null,512),[[y,s.form.description]])]),e("div",ke,[Ce,Pe,Le,Te,x(e("textarea",{rows:"5",class:"form-control",placeholder:"Enter address here...","onUpdate:modelValue":r[1]||(r[1]=o=>s.form.address=o)},null,512),[[y,s.form.address]])]),e("div",je,[De,Ve,Be,Me,e("div",Oe,null,512),s.cardErrorMessage?(l(),a("span",Ae,h(s.cardErrorMessage),1)):_("",!0)])])):_("",!0),s.form.brand_id&&s.form.product_id&&s.form.part_id&&s.form.address?(l(),a("div",Fe,[Ne,e("button",{class:"btn btn-primary btn-lg",onClick:r[2]||(r[2]=(...o)=>d.createToken&&d.createToken(...o)),disabled:s.btnDisabled},"Create Order",8,Re)])):_("",!0)])])]),_:1})}const Xe=M(G,[["render",Ue]]);export{Xe as default};