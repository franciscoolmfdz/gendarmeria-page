import{g as r,u as G,h as B,i as D,o as _,f as C,j as t,_ as F,k as Q,l as s,m as T,c as y,b as e,a as d,n as A}from"./index-7bcc5dd1.js";import{_ as i}from"./CChartDonutSection-428f66ba.js";import{_ as E}from"./CHeaderBar-d0b80372.js";import{_ as V}from"./CCard-c0c2ef04.js";const N={key:0,class:"principal-section section-internos"},L={class:"principal-section"},M={key:0,class:"principal-section__top top-position-one"},j=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),U=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),q=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),z=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),J=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),K={key:1,class:"principal-section__top top-position-two"},O=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),W=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),X=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),Y=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),Z={class:"principal-section__bottom"},tt=e("span",{class:"sub-menu__option--title"},"Información personal",-1),st=e("span",{class:"sub-menu__option--text"}," Consulta sobre información personal de internos ",-1),et=e("span",{class:"sub-menu__option--title"},"Régimen carcelario",-1),ot=e("span",{class:"sub-menu__option--text"},"Consulta sobre el régimen carcelario",-1),nt=e("span",{class:"sub-menu__option--title"},"Funcionamiento de la carcel",-1),at=e("span",{class:"sub-menu__option--text"}," Consulta sobre funcionamiento de la carcel",-1),lt=e("span",{class:"sub-menu__option--title"},"Evaluación general",-1),it=e("span",{class:"sub-menu__option--text"}," Consulta de evaluación general ",-1),ut=e("span",{class:"sub-menu__option--title"}," Infraestructura carcelaria",-1),ct=e("span",{class:"sub-menu__option--text"}," Consulta a los internos sobre la infraestructura carcelaria",-1),rt=e("span",{class:"sub-menu__option--title"},"Acceso a programas",-1),_t=e("span",{class:"sub-menu__option--text"}," Consulta a los internos sobre el acceso a programas de los internos",-1),pt=e("span",{class:"sub-menu__option--title"},"Trato con funcionarios",-1),dt=e("span",{class:"sub-menu__option--text"},"Consulta a los internos sobre la relación con los funcionarios",-1),mt=e("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),bt=e("span",{class:"sub-menu__option--text"}," Consulta de resultados cuestionario de Salud GHQ-12 ",-1),ft=1,It={__name:"VidaInternos",setup(vt){const k=r("Calidad de vida de los internos"),u=r(!1),v=G(),a=r([]),p=r(0),m=r(null),b=r(null),x=n=>n>0?Math.round(n*100)/100:0,I=async n=>{u.value=!0,p.value=n,u.value=!1},H=async()=>{let n={categoryId:1,lastPeriod:!0};return n={categoryId:1,historyId:(await A(n)).id},m.value&&(n.regionId=m.value),b.value&&(n.carcelId=b.value),n},P=async(n=2,l=8)=>{try{u.value=!0;const o=await H();let h=await Q(o),c=null;for(let g=n;g<=l;g++){const S=g,w=h.filter(f=>f.subCategoryId===S&&f.valueUsed===1),R=w.length;c=w.reduce((f,$)=>f+$.promPound,0),c=c/R,c=x(c),a.value.push(c)}console.log(a.value)}catch(o){console.log(o)}finally{u.value=!1}};return B(async()=>{u.value=!0;const n=v.user.restrictions.find(o=>o.typeId===2),l=v.user.restrictions.find(o=>o.typeId===3);n?m.value=parseInt(n.restriction):l?b.value=parseInt(l.restriction):(b.value=null,m.value=null),await v.carcelesSelected.map(async o=>await P())}),(n,l)=>{const o=D("RouterLink");return _(),C(F,{class:"panel-vida-internos"},{default:t(()=>[s(E,{title:k.value,"section-value":ft},null,8,["title"]),s(T,{"active-spin":u.value},null,8,["active-spin"]),!u.value&&a.value.length>0?(_(),y("div",N,[e("div",L,[p.value==1?(_(),y("div",M,[s(i,{class:"section-donut",title:"Infraestructura carcelaria",subtitle:"Consulta a los internos sobre la infraestructura carcelaria","point-value":a.value[0]},{default:t(()=>[s(o,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:t(()=>[j]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Acceso a programas",subtitle:"Consulta a los internos sobre el acceso a programas de los internos","point-value":a.value[1]},{default:t(()=>[s(o,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:t(()=>[U]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Trato entre los internos",subtitle:"Consulta a los internos sobre la vida carcelaria","point-value":a.value[2]},{default:t(()=>[s(o,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:t(()=>[q]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Trato con funcionarios",subtitle:"Consulta a los internos sobre la relación con los funcionarios","point-value":a.value[3]},{default:t(()=>[s(o,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:t(()=>[z]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Cuestionario Salud GHQ-12",subtitle:"Consulta de resultados cuestionario de Salud GHQ-12","point-value":0},{default:t(()=>[s(o,{to:"cuestionarioGHQInterno",class:"sub-menu--option white btn-small"},{default:t(()=>[J]),_:1})]),_:1})])):d("",!0),p.value==2?(_(),y("div",K,[s(i,{class:"section-donut",title:"Información personal",subtitle:"Consulta sobre información personal de internos","point-value":0},{default:t(()=>[s(o,{to:"vidaInternosPersonal",class:"sub-menu--option white btn-small"},{default:t(()=>[O]),_:1})]),_:1}),s(i,{class:"section-donut",title:"Régimen carcelario",subtitle:"Consulta sobre el régimen carcelario","point-value":a.value[4]},{default:t(()=>[s(o,{to:"regimenCarcel",class:"sub-menu--option white btn-small"},{default:t(()=>[W]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Funcionamiento de la carcel",subtitle:"Consulta sobre funcionamiento de la carcel","point-value":a.value[5]},{default:t(()=>[s(o,{to:"funcionamientoCarcel",class:"sub-menu--option white btn-small"},{default:t(()=>[X]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Evaluación general",subtitle:"Consulta de evaluación general","point-value":a.value[6]},{default:t(()=>[s(o,{to:"vidaInternosGeneral",class:"sub-menu--option white btn-small"},{default:t(()=>[Y]),_:1})]),_:1},8,["point-value"])])):d("",!0)]),e("div",Z,[p.value!==2?(_(),C(V,{key:0,class:"card-information",onClick:l[0]||(l[0]=h=>I(2))},{default:t(()=>[s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[tt,st]),_:1}),s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[et,ot]),_:1}),s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[nt,at]),_:1}),s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[lt,it]),_:1})]),_:1})):d("",!0),p.value!==1?(_(),C(V,{key:1,class:"card-information",onClick:l[1]||(l[1]=h=>I(1))},{default:t(()=>[s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[ut,ct]),_:1}),s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[rt,_t]),_:1}),s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[pt,dt]),_:1}),s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[mt,bt]),_:1})]),_:1})):d("",!0)])])):d("",!0)]),_:1})}}};export{It as default};
