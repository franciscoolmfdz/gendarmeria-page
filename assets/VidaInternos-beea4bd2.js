import{_ as T}from"./CButton-d0e9333d.js";import{g as p,u as E,h as M,i as N,o as m,f as I,j as s,_ as L,k as j,l as x,m as o,c as g,a as v,n as U,b as n}from"./index-cac83eb8.js";import{_ as r}from"./CChartDonutSection-22723229.js";import{_ as q}from"./CHeaderBar-ece7db59.js";import{_ as D}from"./CCard-1c4d6668.js";const z={key:0,class:"c-option-volver"},J={key:1,class:"principal-section section-internos"},K={class:"principal-section"},O={key:0,class:"principal-section__top top-position-one"},W=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),X=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),Y=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),Z=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),tt={key:1,class:"principal-section__top top-position-two"},et=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),st=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),ot=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),nt=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),at={class:"principal-section__bottom"},lt=n("span",{class:"sub-menu__option--title"},"Régimen de la Cárcel",-1),it=n("span",{class:"sub-menu__option--text"},"Consulta sobre el régimen carcelario",-1),ut=n("span",{class:"sub-menu__option--title"},"Funcionamiento de la carcel",-1),ct=n("span",{class:"sub-menu__option--text"}," Consulta sobre funcionamiento de la carcel",-1),rt=n("span",{class:"sub-menu__option--title"},"Evaluación general",-1),_t=n("span",{class:"sub-menu__option--text"}," Consulta de evaluación general ",-1),dt=n("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),pt=n("span",{class:"sub-menu__option--text"}," Consulta de resultados cuestionario de Salud GHQ-12 ",-1),mt=n("span",{class:"sub-menu__option--title"},"Infraestructura de la Cárcel",-1),vt=n("span",{class:"sub-menu__option--text"}," Consulta a los internos sobre la infraestructura carcelaria",-1),bt=n("span",{class:"sub-menu__option--title"},"Acceso a programas",-1),ft=n("span",{class:"sub-menu__option--text"}," Consulta a los internos sobre el acceso a programas de los internos",-1),ht=n("span",{class:"sub-menu__option--title"},"Trato con otros Internos(as)",-1),gt=n("span",{class:"sub-menu__option--text"},"Consulta a los internos sobre la vida carcelaria",-1),Ct=n("span",{class:"sub-menu__option--title"},"Trato interpersonal Funcionario-Interno",-1),It=n("span",{class:"sub-menu__option--text"},"Consulta a los internos sobre la relación con los funcionarios",-1),yt=1,Rt={__name:"VidaInternos",setup(wt){const H=p("Calidad de vida de los internos"),u=p(!1),y=E(),l=p([]),C=p(0),_=p(1),b=p(null),f=p(null),R=e=>e>0?Math.round(e*100)/100:0,$=()=>{_.value=0},w=async e=>{u.value=!0,_.value=e,u.value=!1},V=async()=>{let e={categoryId:1,lastPeriod:!0};return C.value||(C.value=await x(e)),e={categoryId:1,historyId:C.value.id},b.value&&(e.regionId=b.value),f.value&&(e.carcelId=f.value),e},B=async(e=2,a=8)=>{try{u.value=!0;const t=await V();let c=await j(t),i=null;for(let d=e;d<=a;d++){const S=d,k=c.filter(h=>h.subCategoryId===S&&h.valueUsed===1),A=k.length;i=k.reduce((h,Q)=>h+Q.valuePound,0),i=i/A,i=R(i),l.value.push(i)}}catch(t){console.log(t)}},F=e=>{let a=0,t=0,c=0;for(let i=0;i<e.length;i++){let d=e[i];d.pound>=0&&(a+=d.pound,t+=d.pound,c++)}return t=t*10/c,t},G=e=>e?Math.round(e*100)/100:0,P=async()=>{try{let e=await V();u.value=!0;const a={...e,subCategoryId:21,embedDetail:!0};let t=await x(a);const c=F(t.items);l.value.push(G(c))}catch(e){console.log(e)}finally{u.value=!1}};return M(async()=>{u.value=!0;const e=y.user.restrictions.find(t=>t.typeId===2),a=y.user.restrictions.find(t=>t.typeId===3);e?b.value=parseInt(e.restriction):a?f.value=parseInt(a.restriction):(f.value=null,b.value=null),await B(),await P()}),(e,a)=>{const t=N("RouterLink");return m(),I(L,{class:"panel-vida-internos"},{default:s(()=>[o(q,{title:H.value,"section-value":yt},null,8,["title"]),!u.value&&_.value!==0?(m(),g("div",z,[o(T,{class:"btn-volver",title:"Volver",onExecuteAction:$,disabled:e.blockButton},null,8,["disabled"])])):v("",!0),o(U,{"active-spin":u.value},null,8,["active-spin"]),!u.value&&l.value.length>0?(m(),g("div",J,[n("div",K,[_.value==1?(m(),g("div",O,[o(r,{class:"section-donut",title:"Infraestructura de la Cárcel",subtitle:"Consulta a los internos sobre la infraestructura carcelaria","point-value":l.value[0]},{default:s(()=>[o(t,{to:"vidaInternosInfraestructura",class:"sub-menu--option white btn-small"},{default:s(()=>[W]),_:1})]),_:1},8,["point-value"]),o(r,{class:"section-donut",title:"Acceso a programas",subtitle:"Consulta a los internos sobre el acceso a programas de los internos","point-value":l.value[1]},{default:s(()=>[o(t,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:s(()=>[X]),_:1})]),_:1},8,["point-value"]),o(r,{class:"section-donut",title:"Trato con otros Internos(as)",subtitle:"Consulta a los internos sobre la vida carcelaria","point-value":l.value[2]},{default:s(()=>[o(t,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:s(()=>[Y]),_:1})]),_:1},8,["title","point-value"]),o(r,{class:"section-donut",title:"Trato interpersonal Funcionario -Interno",subtitle:"Consulta a los internos sobre la relación con los funcionarios","point-value":l.value[3]},{default:s(()=>[o(t,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:s(()=>[Z]),_:1})]),_:1},8,["point-value"])])):v("",!0),_.value==2?(m(),g("div",tt,[o(r,{class:"section-donut",title:"Régimen de la Cárcel",subtitle:"Consulta sobre el régimen carcelario","point-value":l.value[4]},{default:s(()=>[o(t,{to:"regimenCarcel",class:"sub-menu--option white btn-small"},{default:s(()=>[et]),_:1})]),_:1},8,["point-value"]),o(r,{class:"section-donut",title:"Funcionamiento de la carcel",subtitle:"Consulta sobre funcionamiento de la carcel","point-value":l.value[5]},{default:s(()=>[o(t,{to:"funcionamientoCarcel",class:"sub-menu--option white btn-small"},{default:s(()=>[st]),_:1})]),_:1},8,["point-value"]),o(r,{class:"section-donut",title:"Evaluación general",subtitle:"Consulta de evaluación general","point-value":l.value[6]},{default:s(()=>[o(t,{to:"vidaInternosGeneral",class:"sub-menu--option white btn-small"},{default:s(()=>[ot]),_:1})]),_:1},8,["point-value"]),o(r,{class:"section-donut",title:"Cuestionario Salud GHQ-12",subtitle:"Consulta de resultados cuestionario de Salud GHQ-12",type:5,"point-value":l.value[7]},{default:s(()=>[o(t,{to:"cuestionarioGHQInterno",class:"sub-menu--option white btn-small"},{default:s(()=>[nt]),_:1})]),_:1},8,["point-value"])])):v("",!0)]),n("div",at,[_.value!==2?(m(),I(D,{key:0,class:"card-information",onClick:a[0]||(a[0]=c=>w(2))},{default:s(()=>[o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[lt,it]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[ut,ct]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[rt,_t]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[dt,pt]),_:1})]),_:1})):v("",!0),_.value!==1?(m(),I(D,{key:1,class:"card-information",onClick:a[1]||(a[1]=c=>w(1))},{default:s(()=>[o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[mt,vt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[bt,ft]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[ht,gt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[Ct,It]),_:1})]),_:1})):v("",!0)])])):v("",!0)]),_:1})}}};export{Rt as default};