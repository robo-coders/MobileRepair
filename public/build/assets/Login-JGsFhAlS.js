import{o as a,e as d,a as e,t as p,d as u,h as g,i as c,v as m,b as _}from"./app-81tNAsjg.js";import{_ as f}from"./_plugin-vue_export-helper-x3n3nnut.js";const h={data(){return{invalidCredentials:!1,errorMessage:"Invalid Login Credentials.",loginForm:{email:"",password:""}}},methods:{login:function(){let t=this;t.invalidCredentials=!1,t.errorMessage="";let o={method:"post",url:"/login",data:this.loginForm};axios.request(o).then(i=>{window.location.reload()}).catch(i=>{var r,s;t.invalidCredentials=!0,t.errorMessage=((s=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:s.message)??"Invalid Login Credentials"})}}},v={class:"container vh-100 d-flex justify-content-center align-items-center"},b={class:"w-50"},w={class:"text-center"},x=e("img",{src:"images/logo.png",class:"w-50 mb-5",alt:""},null,-1),y=e("h1",{class:"h4 text-gray-900 mb-4"},[_("Welcome to "),e("b",null,"Reparapido!")],-1),C={key:0,class:"alert alert-danger"},F={class:"form-group"},M={class:"form-group"},V=e("button",{type:"submit",class:"btn btn-primary btn-user btn-block"},"Login",-1);function k(t,o,i,r,s,l){return a(),d("div",v,[e("div",b,[e("div",w,[x,y,s.invalidCredentials?(a(),d("div",C,p(s.errorMessage),1)):u("",!0)]),e("form",{onSubmit:o[2]||(o[2]=g((...n)=>l.login&&l.login(...n),["prevent"])),class:"user"},[e("div",F,[c(e("input",{type:"email","onUpdate:modelValue":o[0]||(o[0]=n=>s.loginForm.email=n),class:"form-control form-control-user",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter Email Address...",required:""},null,512),[[m,s.loginForm.email]])]),e("div",M,[c(e("input",{"onUpdate:modelValue":o[1]||(o[1]=n=>s.loginForm.password=n),type:"password",class:"form-control form-control-user",id:"exampleInputPassword",placeholder:"Password",required:""},null,512),[[m,s.loginForm.password]])]),V],32)])])}const L=f(h,[["render",k]]);export{L as default};
