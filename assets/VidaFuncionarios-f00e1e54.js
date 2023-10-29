import{_ as i}from"./CChartDonutSection-428f66ba.js";import{g as d,u as $,h as P,i as D,o as u,f as h,j as t,_ as A,k as B,l as s,m as F,c as C,b as o,a as _,n as G}from"./index-7bcc5dd1.js";import{_ as Q}from"./CHeaderBar-d0b80372.js";import{_ as V}from"./CCard-c0c2ef04.js";const T={key:0,class:"principal-section section-funcionarios"},M={class:"principal-section"},N={key:0,class:"principal-section__top position-one"},O=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),J=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),L=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),E=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),U={key:1,class:"principal-section__top position-two"},q=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),K=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),W=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),X=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),Y={key:2,class:"principal-section__top position-three"},Z=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),tt=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),st=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),ot=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),et=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),nt={class:"principal-section__bottom"},at=o("span",{class:"sub-menu__option--title"},"Relación Jefatura",-1),it=o("span",{class:"sub-menu__option--text"}," Consulta a los funcionarios sobre su relación con sus jefaturas ",-1),lt=o("span",{class:"sub-menu__option--title"},"Confianza y valoración",-1),ut=o("span",{class:"sub-menu__option--text"}," Consulta a los funcionarios sobre confianza y valoración entre sus pares ",-1),ct=o("span",{class:"sub-menu__option--title"},"Apego institucional",-1),rt=o("span",{class:"sub-menu__option--text"},"Consulta a los funcionarios sobre el apego institucional",-1),_t=o("span",{class:"sub-menu__option--title"},"Carga trabajo",-1),pt=o("span",{class:"sub-menu__option--text"},"Consulta a los funcionarios sobre la carga trabajo",-1),dt=o("span",{class:"sub-menu__option--title"},"Motivación en el trabajo",-1),mt=o("span",{class:"sub-menu__option--text"}," Consulta sobre su motivación en el trabajo ",-1),bt=o("span",{class:"sub-menu__option--title"},"Relación compañeros/as",-1),ft=o("span",{class:"sub-menu__option--text"}," Consulta sobre su relación entre compañeros/as ",-1),vt=o("span",{class:"sub-menu__option--title"},"Seguridad personal",-1),ht=o("span",{class:"sub-menu__option--text"}," Consulta sobre su seguridad personal",-1),Ct=o("span",{class:"sub-menu__option--title"},"Organización y orden",-1),yt=o("span",{class:"sub-menu__option--text"}," Consulta sobre la Organización y el orden",-1),gt=o("span",{class:"sub-menu__option--title"},"Apoyo a la reinserción ",-1),wt=o("span",{class:"sub-menu__option--text"}," Consulta sobre su rol en el apoyo a la reinserción ",-1),Vt=o("span",{class:"sub-menu__option--title"},"Relación con internos ",-1),xt=o("span",{class:"sub-menu__option--text"}," Consulta sobre su relación con los internos ",-1),kt=o("span",{class:"sub-menu__option--title"},"Conocimiento normativas ",-1),It=o("span",{class:"sub-menu__option--text"}," Consulta sobre su conocimiento de normativas ",-1),jt=o("span",{class:"sub-menu__option--title"},"Presión para tomar decisiones ",-1),Rt=o("span",{class:"sub-menu__option--text"}," Consulta sobre la toma de desiciones ",-1),zt=o("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),St=o("span",{class:"sub-menu__option--text"}," Consulta de resultados cuestionario de Salud GHQ-12 ",-1),Ht=2,Ft={__name:"VidaFuncionarios",setup($t){const k=d("Calidad de vida de los funcionarios"),c=d(!1),y=$(),a=d([]),r=d(0),m=d(null),b=d(null),I=n=>n>0?Math.round(n*100)/100:0,g=async n=>{c.value=!0,r.value=n,c.value=!1},j=async()=>{let n={categoryId:2,lastPeriod:!0};return n={categoryId:2,historyId:(await G(n)).id},m.value&&(n.regionId=m.value),b.value&&(n.carcelId=b.value),n},R=async(n=9,l=22)=>{try{c.value=!0;const e=await j();let f=await B(e),p=null;for(let w=n;w<=l;w++){const z=w,x=f.filter(v=>v.subCategoryId===z&&v.valueUsed===1),S=x.length;p=x.reduce((v,H)=>v+H.promPound,0),p=p/S,p=I(p),a.value.push(p),console.log(a.value)}}catch(e){console.log(e)}finally{c.value=!1}};return P(async()=>{c.value=!0;const n=y.user.restrictions.find(e=>e.typeId===2),l=y.user.restrictions.find(e=>e.typeId===3);n?m.value=parseInt(n.restriction):l?b.value=parseInt(l.restriction):(b.value=null,m.value=null),await y.carcelesSelected.map(async e=>await R())}),(n,l)=>{const e=D("RouterLink");return u(),h(A,{class:"panel-vida-funcionarios"},{default:t(()=>[s(Q,{title:k.value,"section-value":Ht},null,8,["title"]),s(F,{"active-spin":c.value},null,8,["active-spin"]),!c.value&&a.value.length>0?(u(),C("div",T,[o("div",M,[r.value==1?(u(),C("div",N,[s(i,{class:"section-donut",title:"Relación Jefatura",subtitle:"Consulta a los funcionarios sobre su relación con sus jefaturas","point-value":a.value[0]},{default:t(()=>[s(e,{to:"relacionJefatura",class:"sub-menu--option white btn-small"},{default:t(()=>[O]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Confianza y valoración",subtitle:"Consulta a los funcionarios sobre confianza y valoración entre sus pares","point-value":a.value[1]},{default:t(()=>[s(e,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:t(()=>[J]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Apego institucional",subtitle:"Consulta a los funcionarios sobre el apego institucional","point-value":a.value[2]},{default:t(()=>[s(e,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:t(()=>[L]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Carga trabajo",subtitle:"Consulta a los funcionarios sobre la carga trabajo","point-value":a.value[3]},{default:t(()=>[s(e,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:t(()=>[E]),_:1})]),_:1},8,["point-value"])])):_("",!0),r.value==2?(u(),C("div",U,[s(i,{class:"section-donut",title:"Motivación en el trabajo",subtitle:"Consulta sobre su motivación en el trabajo","point-value":a.value[0]},{default:t(()=>[s(e,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:t(()=>[q]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Relación compañeros/as",subtitle:"Consulta sobre su relación entre compañeros/as ","point-value":a.value[1]},{default:t(()=>[s(e,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:t(()=>[K]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Seguridad personal",subtitle:"Consulta sobre su seguridad personal","point-value":a.value[2]},{default:t(()=>[s(e,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:t(()=>[W]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Organización y orden",subtitle:"Consulta sobre organización y el orden","point-value":a.value[3]},{default:t(()=>[s(e,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:t(()=>[X]),_:1})]),_:1},8,["point-value"])])):_("",!0),r.value==3?(u(),C("div",Y,[s(i,{class:"section-donut",title:"Apoyo a la reinserción",subtitle:"Consulta sobre su rol en el apoyo a la reinserción","point-value":a.value[0]},{default:t(()=>[s(e,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:t(()=>[Z]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Relación con internos",subtitle:"Consulta sobre su relación con los internos","point-value":a.value[1]},{default:t(()=>[s(e,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:t(()=>[tt]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Conocimiento normativas",subtitle:"Consulta sobre su conocimiento de normativas","point-value":a.value[2]},{default:t(()=>[s(e,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:t(()=>[st]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Toma de desiciones",subtitle:"Consulta sobre la toma de desiciones","point-value":a.value[3]},{default:t(()=>[s(e,{to:"TomaDesiciones",class:"sub-menu--option white btn-small"},{default:t(()=>[ot]),_:1})]),_:1},8,["point-value"]),s(i,{class:"section-donut",title:"Cuestionario Salud GHQ-12",subtitle:"Consulta de resultados cuestionario de Salud GHQ-12","point-value":0},{default:t(()=>[s(e,{to:"cuestionarioGHQFuncionario",class:"sub-menu--option white btn-small"},{default:t(()=>[et]),_:1})]),_:1})])):_("",!0)]),o("div",nt,[r.value!==1?(u(),h(V,{key:0,class:"card-information",onClick:l[0]||(l[0]=f=>g(1))},{default:t(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[at,it]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[lt,ut]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[ct,rt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[_t,pt]),_:1})]),_:1})):_("",!0),r.value!==2?(u(),h(V,{key:1,class:"card-information",onClick:l[1]||(l[1]=f=>g(2))},{default:t(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[dt,mt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[bt,ft]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[vt,ht]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Ct,yt]),_:1})]),_:1})):_("",!0),r.value!==3?(u(),h(V,{key:2,class:"card-information",onClick:l[2]||(l[2]=f=>g(3))},{default:t(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[gt,wt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Vt,xt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[kt,It]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[jt,Rt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[zt,St]),_:1})]),_:1})):_("",!0)])])):_("",!0)]),_:1})}}};export{Ft as default};