import{_ as i}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as d,o,e as r,a as s,f as l,w as t,d as n,c,l as u}from"./app-nJ2U083f.js";const h={},f={class:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar"},p=u('<a class="sidebar-brand d-flex align-items-center justify-content-center bg-white" href="/"><div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div><div class="sidebar-brand-text mx-3"><img src="/images/logo.png" class="w-100" alt=""></div></a><hr class="sidebar-divider my-0">',2),_={class:"nav-item"},m=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),v=s("span",null,"Dashboard",-1),g=s("hr",{class:"sidebar-divider"},null,-1),k=s("div",{class:"sidebar-heading"}," Menu Heading ",-1),w={key:0,class:"nav-item active"},b=s("a",{class:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},[s("i",{class:"fas fa-fw fa-cog"}),s("span",null,"Users")],-1),y={id:"collapseTwo",class:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionSidebar",style:{}},A={class:"bg-white py-2 collapse-inner rounded"},$=s("h6",{class:"collapse-header"},"Types:",-1),S=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),B=s("span",null,"Admin",-1),O=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),T=s("span",null,"Agents",-1),C=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),D=s("span",null,"Driver",-1),N=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),V=s("span",null,"Customer",-1),P={class:"nav-item"},L=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),M=s("span",null,"Users",-1),U={key:1,class:"nav-item"},j=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),E=s("span",null,"Brands",-1),H={key:2,class:"nav-item"},q=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),z=s("span",null,"Products",-1),F={key:3,class:"nav-item"},G=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),I=s("span",null,"Parts",-1),J={key:4,class:"nav-item"},K=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),Q=s("span",null,"Orders",-1),R={key:5,class:"nav-item"},W=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),X=s("span",null,"Orders",-1),Y={key:6,class:"nav-item"},Z=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),x=s("span",null,"Pending Orders",-1),ss={key:7,class:"nav-item"},es=s("i",{class:"fas fa-fw fa-tachometer-alt"},null,-1),as=s("span",null,"My Orders",-1);function ts(e,ls){const a=d("Link");return o(),r("ul",f,[p,s("li",_,[l(a,{class:"nav-link",href:"/dashboard"},{default:t(()=>[m,v]),_:1})]),g,k,e.$page.props.auth.user.role=="Super Admin"||e.$page.props.auth.user.role=="Admin"?(o(),r("li",w,[b,s("div",y,[s("div",A,[$,l(a,{class:"collapse-item active",href:"/users/admin"},{default:t(()=>[S,B]),_:1}),l(a,{class:"collapse-item",href:"/users/agent"},{default:t(()=>[O,T]),_:1}),l(a,{class:"collapse-item",href:"/users/driver"},{default:t(()=>[C,D]),_:1}),l(a,{class:"collapse-item",href:"/users/customer"},{default:t(()=>[N,V]),_:1})])])])):n("",!0),s("li",P,[e.$page.props.auth.user.role=="Super Admin"||e.$page.props.auth.user.role=="Admin"?(o(),c(a,{key:0,class:"nav-link",href:"/users"},{default:t(()=>[L,M]),_:1})):n("",!0)]),e.$page.props.auth.user.role=="Super Admin"||e.$page.props.auth.user.role=="Admin"?(o(),r("li",U,[l(a,{class:"nav-link",href:"/brands"},{default:t(()=>[j,E]),_:1})])):n("",!0),e.$page.props.auth.user.role=="Super Admin"||e.$page.props.auth.user.role=="Admin"?(o(),r("li",H,[l(a,{class:"nav-link",href:"/products"},{default:t(()=>[q,z]),_:1})])):n("",!0),e.$page.props.auth.user.role=="Super Admin"||e.$page.props.auth.user.role=="Admin"?(o(),r("li",F,[l(a,{class:"nav-link",href:"/parts"},{default:t(()=>[G,I]),_:1})])):n("",!0),e.$page.props.auth.user.role=="Agent"?(o(),r("li",J,[l(a,{class:"nav-link",href:e.route("agent.orders.index")},{default:t(()=>[K,Q]),_:1},8,["href"])])):n("",!0),e.$page.props.auth.user.role=="Super Admin"||e.$page.props.auth.user.role=="Admin"?(o(),r("li",R,[l(a,{class:"nav-link",href:e.route("orders.index")},{default:t(()=>[W,X]),_:1},8,["href"])])):n("",!0),e.$page.props.auth.user.role=="Driver"?(o(),r("li",Y,[l(a,{class:"nav-link",href:e.route("driver.orders.pending")},{default:t(()=>[Z,x]),_:1},8,["href"])])):n("",!0),e.$page.props.auth.user.role=="Driver"?(o(),r("li",ss,[l(a,{class:"nav-link",href:e.route("driver.orders.myOrders")},{default:t(()=>[es,as]),_:1},8,["href"])])):n("",!0)])}const ns=i(h,[["render",ts]]);export{ns as default};
