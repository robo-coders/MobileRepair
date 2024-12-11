import U from"./Parent-uByzMVj1.js";import{r as w,o as l,c as j,w as S,a as e,f as D,b as C,e as d,g as v,F as b,d as h,i as c,v as y,j as m,n as A,t as u}from"./app-Rxq62EwM.js";import{_ as M}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./Sidebar-Cb4-VTS9.js";import"./Header-ERIyHex5.js";var E="https://js.stripe.com/v3",B=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,P="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",N=function(){for(var t=document.querySelectorAll('script[src^="'.concat(E,'"]')),n=0;n<t.length;n++){var i=t[n];if(B.test(i.src))return i}return null},T=function(t){var n=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",i=document.createElement("script");i.src="".concat(E).concat(n);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(i),i},W=function(t,n){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"4.6.0",startTime:n})},_=null,k=null,x=null,q=function(t){return function(){t(new Error("Failed to load Stripe.js"))}},F=function(t,n){return function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))}},R=function(t){return _!==null?_:(_=new Promise(function(n,i){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&t&&console.warn(P),window.Stripe){n(window.Stripe);return}try{var r=N();if(r&&t)console.warn(P);else if(!r)r=T(t);else if(r&&x!==null&&k!==null){var a;r.removeEventListener("load",x),r.removeEventListener("error",k),(a=r.parentNode)===null||a===void 0||a.removeChild(r),r=T(t)}x=F(n,i),k=q(i),r.addEventListener("load",x),r.addEventListener("error",k)}catch(g){i(g);return}}),_.catch(function(n){return _=null,Promise.reject(n)}))},I=function(t,n,i){if(t===null)return null;var r=t.apply(void 0,n);return W(r,i),r},p,O=!1,V=function(){return p||(p=R(null).catch(function(t){return p=null,Promise.reject(t)}),p)};Promise.resolve().then(function(){return V()}).catch(function(s){O||console.warn(s)});var z=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];O=!0;var r=Date.now();return V().then(function(a){return I(a,n,r)})};const G={components:{Parent:U},data(){var s,t,n,i,r;return{brands:"",products:"",parts:"",form:{brand_id:"",product_id:"",parts:[],description:"",address:((n=(t=(s=this==null?void 0:this.$page)==null?void 0:s.props)==null?void 0:t.addresses[0])==null?void 0:n.id)??"other",address_text:"",cardToken:"",isTax:"yes",payment_method:"Credit Card",card_holder_name:(i=this.$page.props.auth.user)==null?void 0:i.name,card_holder_phone_number:(r=this.$page.props.auth.user)==null?void 0:r.mobile},stripe:null,card:null,cardErrorMessage:"",btnDisabled:!1}},methods:{initializeStripe(){let s=this;z(s.$page.props.pk).then(n=>{s.stripe=n,s.stripeLoaded=!0;let i=s.stripe.elements();s.card=i.create("card")})},createToken(){let s=this;s.btnDisabled=!0,s.form.payment_method!="Credit Card"&&s.saveOrders(),s.cardErrorMessage="",s.stripe.createToken(s.card).then(function(t){var n;if(t.error){s.cardErrorMessage=((n=t==null?void 0:t.error)==null?void 0:n.message)??"Payment cannot be made. Try again later.",s.btnDisabled=!0;return}s.form.cardToken=t.token.id,s.saveOrders(),s.btnDisabled=!1})},saveOrders(){this.$inertia.post(route("agent.orders.save"),this.form)},selectBrand:function(s){this.form.brand_id="",this.form.product_id="",this.form.parts=[],this.products="",this.parts="",$("#brand-"+s.id).hasClass("active-item")?$(".brand").removeClass("active-item"):($(".brand").removeClass("active-item"),$("#brand-"+s.id).addClass("active-item"),this.form.brand_id=s.id,this.products=s.products)},selectProduct:function(s){if(this.form.product_id="",this.form.parts=[],this.parts="",$("#product-"+s.id).hasClass("active-item"))$(".product").removeClass("active-item");else{$(".product").removeClass("active-item"),$("#product-"+s.id).addClass("active-item"),this.form.product_id=s.id,this.parts=s.product_parts;let t=this;setTimeout(()=>{t.card.mount(this.$refs.card)},250)}},selectPart:function(s){$("#part-"+s.id).hasClass("active-item")?($("#part-"+s.id).removeClass("active-item"),this.form.parts=this.form.parts.filter(t=>t!==s.id)):($("#part-"+s.id).addClass("active-item"),this.form.parts.includes(s.id)||this.form.parts.push(s.id))},checkPaymentOptions:function(){this.form.isTax=="no"?this.form.payment_method="Cash":this.form.payment_method="Credit Card"}},mounted(){this.brands=this.$page.props.brands,this.initializeStripe()}},H={class:"container-fluid"},X={class:"row"},J=e("div",{class:"col"},[e("h3",{class:"mb-4"},"Create Orders")],-1),K={class:"col text-right"},Q={class:"p-5 card"},Y={class:"text-center"},Z=e("h3",null,"Select Brand",-1),ee={class:"row mt-4"},te=["onClick"],re=["id","src"],se={class:"mt-3"},oe={key:0,class:"text-center mt-3"},ne=e("br",null,null,-1),ie=e("br",null,null,-1),le=e("br",null,null,-1),de=e("h3",null,"Select Product",-1),ae={class:"row mt-4"},ce=["onClick"],ue=["id","src"],me={class:"mt-3"},he={key:1,class:"text-center mt-3"},_e=e("br",null,null,-1),pe=e("br",null,null,-1),fe=e("br",null,null,-1),ve=e("h3",null,"Select Part",-1),be={class:"row mt-4"},ye=["onClick"],ke=["id","src"],xe={class:"mt-3"},ge={class:"text-center"},Ce=e("br",null,null,-1),we=e("br",null,null,-1),Se=e("br",null,null,-1),Pe=e("h3",{class:"mb-4"},"Description",-1),Te={class:"text-center"},Ee=e("br",null,null,-1),Oe=e("br",null,null,-1),Ve=e("br",null,null,-1),Le=e("h3",{class:"mb-4"},"Select Tax Option",-1),Ue={class:"form-check form-check text-left"},je=e("label",{class:"form-check-label",for:"withTax"},[e("b",null,"Payment With Tax")],-1),De={class:"form-check form-check text-left"},Ae=e("label",{class:"form-check-label",for:"withoutTax"},[e("b",null,"Payment Without Tax")],-1),Me={class:"text-center"},Be=e("br",null,null,-1),Ne=e("br",null,null,-1),We=e("br",null,null,-1),qe=e("h3",{class:"mb-4"},"Saved Addresses",-1),Fe={class:"form-check form-check text-left"},Re=["onUpdate:modelValue","id","value"],Ie=["for"],ze={class:"form-check form-check text-left"},Ge=e("label",{class:"form-check-label",for:"otherAddress"},[e("b",null,"Other Address")],-1),He={key:0,class:"text-center"},Xe={class:"text-left mt-5"},Je=e("h3",{class:"mb-3"},"Payment Method",-1),Ke={class:"form-check form-check"},Qe=e("label",{class:"form-check-label",for:"cash"},[e("b",null,"Cash On Delivery")],-1),Ye={key:0,class:"form-check form-check"},Ze=e("label",{class:"form-check-label",for:"card_on_delivery"},[e("b",null,"Card On Delivery")],-1),$e={key:1,class:"form-check form-check"},et=e("label",{class:"form-check-label",for:"card"},[e("b",null,"Card Payment")],-1),tt=e("hr",null,null,-1),rt={class:"text-left mb-2"},st=e("label",null,[e("b",null,"Card Holder Name")],-1),ot={class:"form-group"},nt={class:"text-left mb-2"},it=e("label",null,[e("b",null,"Card Holder Phone Number")],-1),lt={class:"form-group"},dt={class:"text-left mb-2"},at=e("label",null,[e("b",null,"Card Information")],-1),ct={ref:"card",style:{border:"1px solid lightgray",padding:"0.7em","border-radius":"6px"}},ut={key:0,class:"text-danger"},mt={class:"text-center mt-3"},ht=e("hr",null,null,-1),_t=["disabled"];function pt(s,t,n,i,r,a){const g=w("Link"),L=w("parent");return l(),j(L,null,{default:S(()=>[e("div",H,[e("div",X,[J,e("div",K,[D(g,{class:"btn btn-primary",href:s.route("agent.orders.index")},{default:S(()=>[C("View Orders")]),_:1},8,["href"])])]),e("div",Q,[e("div",Y,[Z,e("div",ee,[(l(!0),d(b,null,v(r.brands,o=>(l(),d("div",{class:"col-4 m-auto",key:o.id,onClick:f=>a.selectBrand(o)},[e("img",{id:"brand-"+o.id,src:o.image,alt:"",class:"brand rounded",style:{width:"200px",height:"auto"}},null,8,re),e("h4",se,u(o.name),1)],8,te))),128))])]),r.products?(l(),d("div",oe,[ne,ie,le,de,e("div",ae,[(l(!0),d(b,null,v(r.products,o=>(l(),d("div",{class:"col-4 m-auto",key:o.id,onClick:f=>a.selectProduct(o)},[e("img",{id:"product-"+o.id,src:"/"+o.path,alt:"",class:"product rounded",style:{width:"200px",height:"auto"}},null,8,ue),e("h4",me,u(o.name),1)],8,ce))),128))])])):h("",!0),r.parts&&r.parts.length?(l(),d("div",he,[_e,pe,fe,ve,e("div",be,[(l(!0),d(b,null,v(r.parts,o=>(l(),d("div",{class:"col-4 m-auto",key:o.id,onClick:f=>a.selectPart(o)},[e("img",{id:"part-"+o.id,src:"/images/"+o.name+".jpg",alt:"",class:"part rounded",style:{width:"200px",height:"auto"}},null,8,ke),e("h4",xe,[C(u(o.name)+" - ",1),e("b",null,"€"+u(o.agent_price),1)])],8,ye))),128))]),e("div",ge,[Ce,we,Se,Pe,c(e("textarea",{rows:"5",class:"form-control",placeholder:"Enter order description here...","onUpdate:modelValue":t[0]||(t[0]=o=>r.form.description=o)},null,512),[[y,r.form.description]])]),e("div",Te,[Ee,Oe,Ve,Le,e("div",Ue,[c(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>r.form.isTax=o),onChange:t[2]||(t[2]=o=>a.checkPaymentOptions()),class:"form-check-input",type:"radio",name:"taxOptions",id:"withTax",value:"yes"},null,544),[[m,r.form.isTax]]),je]),e("div",De,[c(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>r.form.isTax=o),onChange:t[4]||(t[4]=o=>a.checkPaymentOptions()),class:"form-check-input",type:"radio",name:"taxOptions",id:"withoutTax",value:"no"},null,544),[[m,r.form.isTax]]),Ae])]),e("div",Me,[Be,Ne,We,qe,(l(!0),d(b,null,v(s.$page.props.addresses,o=>(l(),d("div",Fe,[c(e("input",{"onUpdate:modelValue":f=>r.form.address=f,class:"form-check-input",type:"radio",name:"addressOptions",id:"order"+o.id,value:o.id},null,8,Re),[[m,r.form.address]]),e("label",{class:"form-check-label",for:"order"+o.id},[e("b",null,u(o.title),1),C(" | "+u(o.address)+" | Ph. "+u(o.phone??"N/A"),1)],8,Ie)]))),256)),e("div",ze,[c(e("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>r.form.address=o),class:"form-check-input",type:"radio",name:"addressOptions",id:"otherAddress",value:"other"},null,512),[[m,r.form.address]]),Ge])]),r.form.address=="other"?(l(),d("div",He,[c(e("textarea",{rows:"5",class:"form-control",placeholder:"Enter address here...","onUpdate:modelValue":t[6]||(t[6]=o=>r.form.address_text=o)},null,512),[[y,r.form.address_text]])])):h("",!0),e("div",Xe,[Je,e("div",Ke,[c(e("input",{"onUpdate:modelValue":t[7]||(t[7]=o=>r.form.payment_method=o),class:"form-check-input",type:"radio",name:"paymentOptions",id:"cash",value:"Cash"},null,512),[[m,r.form.payment_method]]),Qe]),r.form.isTax=="yes"?(l(),d("div",Ye,[c(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>r.form.payment_method=o),class:"form-check-input",type:"radio",name:"paymentOptions",id:"card_on_delivery",value:"Card On Delivery"},null,512),[[m,r.form.payment_method]]),Ze])):h("",!0),r.form.isTax=="yes"?(l(),d("div",$e,[c(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>r.form.payment_method=o),class:"form-check-input",type:"radio",name:"paymentOptions",id:"card",value:"Credit Card"},null,512),[[m,r.form.payment_method]]),et])):h("",!0)]),e("div",{class:A(["text-left mt-5",r.form.payment_method=="Credit Card"?"d-block":"d-none"])},[tt,e("div",rt,[st,e("div",ot,[c(e("input",{placeholder:"Enter card holder name","onUpdate:modelValue":t[10]||(t[10]=o=>r.form.card_holder_name=o),class:"form-control",type:"text",required:""},null,512),[[y,r.form.card_holder_name]])])]),e("div",nt,[it,e("div",lt,[c(e("input",{placeholder:"Enter card holder name","onUpdate:modelValue":t[11]||(t[11]=o=>r.form.card_holder_phone_number=o),class:"form-control",type:"text",required:""},null,512),[[y,r.form.card_holder_phone_number]])])]),e("div",dt,[at,e("div",ct,null,512),r.cardErrorMessage?(l(),d("span",ut,u(r.cardErrorMessage),1)):h("",!0)])],2)])):h("",!0),e("div",mt,[ht,e("button",{class:"btn btn-primary btn-lg",disabled:!(r.form.brand_id&&r.form.product_id&&r.form.parts.length&&r.form.address),onClick:t[12]||(t[12]=(...o)=>a.createToken&&a.createToken(...o))},"Create Order",8,_t)])])])]),_:1})}const xt=M(G,[["render",pt]]);export{xt as default};
