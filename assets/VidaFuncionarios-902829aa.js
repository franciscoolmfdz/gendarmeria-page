import{_ as G}from"./CButton-38f3b723.js";import{_ as l}from"./CChartDonutSection-8dec0bf6.js";import{g as b,u as Q,h as F,i as M,o as d,f as g,j as t,_ as T,k as N,l as x,m as s,c as v,a as m,n as O,b as o}from"./index-59105a95.js";import{_ as J}from"./CHeaderBar-8c04cde7.js";import{_ as w}from"./CCard-24fe3e98.js";const E={key:0,class:"c-option-volver"},L={key:1,class:"principal-section section-funcionarios"},U={class:"principal-section"},q={key:0,class:"principal-section__top position-one"},K=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),W=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),X=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),Y=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),Z={key:1,class:"principal-section__top position-two"},tt=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),st=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),ot=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),et=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),nt={key:2,class:"principal-section__top position-three"},at=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),it=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),lt=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),ut=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),ct=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),rt={class:"principal-section__bottom"},_t=o("span",{class:"sub-menu__option--title"},"Relación Jefatura",-1),pt=o("span",{class:"sub-menu__option--text"}," Consulta a los funcionarios sobre su relación con sus jefaturas ",-1),dt=o("span",{class:"sub-menu__option--title"},"Confianza y valoración",-1),mt=o("span",{class:"sub-menu__option--text"}," Consulta a los funcionarios sobre confianza y valoración entre sus pares ",-1),bt=o("span",{class:"sub-menu__option--title"},"Apego institucional",-1),vt=o("span",{class:"sub-menu__option--text"},"Consulta a los funcionarios sobre el apego institucional",-1),ft=o("span",{class:"sub-menu__option--title"},"Carga trabajo",-1),ht=o("span",{class:"sub-menu__option--text"},"Consulta a los funcionarios sobre la carga trabajo",-1),Ct=o("span",{class:"sub-menu__option--title"},"Motivación en el trabajo",-1),gt=o("span",{class:"sub-menu__option--text"}," Consulta sobre su motivación en el trabajo ",-1),yt=o("span",{class:"sub-menu__option--title"},"Relación compañeros/as",-1),wt=o("span",{class:"sub-menu__option--text"}," Consulta sobre su relación entre compañeros/as ",-1),Vt=o("span",{class:"sub-menu__option--title"},"Seguridad personal",-1),It=o("span",{class:"sub-menu__option--text"}," Consulta sobre su seguridad personal",-1),kt=o("span",{class:"sub-menu__option--title"},"Organización y orden",-1),xt=o("span",{class:"sub-menu__option--text"}," Consulta sobre la Organización y el orden",-1),Rt=o("span",{class:"sub-menu__option--title"},"Apoyo a la reinserción ",-1),jt=o("span",{class:"sub-menu__option--text"}," Consulta sobre su rol en el apoyo a la reinserción ",-1),zt=o("span",{class:"sub-menu__option--title"},"Relación con internos ",-1),Dt=o("span",{class:"sub-menu__option--text"}," Consulta sobre su relación con los internos ",-1),Ht=o("span",{class:"sub-menu__option--title"},"Conocimiento normativas ",-1),St=o("span",{class:"sub-menu__option--text"}," Consulta sobre su conocimiento de normativas ",-1),$t=o("span",{class:"sub-menu__option--title"},"Presión para tomar decisiones ",-1),At=o("span",{class:"sub-menu__option--text"}," Consulta sobre la toma de desiciones ",-1),Bt=o("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),Pt=o("span",{class:"sub-menu__option--text"}," Consulta de resultados cuestionario de Salud GHQ-12 ",-1),Gt=2,Jt={__name:"VidaFuncionarios",setup(Qt){const R=b("Calidad de vida de los funcionarios"),r=b(!1),V=Q(),a=b([]),_=b(1),f=b(null),h=b(null),j=n=>n>0?Math.round(n*100)/100:0,z=()=>{_.value=0},y=async n=>{r.value=!0,_.value=n,r.value=!1},I=async()=>{let n={categoryId:2,lastPeriod:!0};return n={categoryId:2,historyId:(await x(n)).id},f.value&&(n.regionId=f.value),h.value&&(n.carcelId=h.value),n},D=async(n=9,i=20)=>{try{r.value=!0;const e=await I();let p=await N(e),u=null;for(let c=n;c<=i;c++){const A=c,k=p.filter(C=>C.subCategoryId===A&&C.valueUsed===1),B=k.length;u=k.reduce((C,P)=>C+P.promPound,0),u=u/B,u=j(u),a.value.push(u)}}catch(e){console.log(e)}},H=n=>{let i=n[0].recordId,e=0,p=0;for(let u=0;u<n.length;u++){let c=n[u];c.recordId==i&&c.pound>=0?(e+=c.pound,p+=c.value):(e=c.pound,i=c.recordId)}return p/n.length},S=n=>n?Math.round(n*100)/100:0,$=async()=>{try{let n=await I();r.value=!0;const i={...n,subCategoryId:22,embedDetail:!0};let e=await x(i);const p=H(e.items);a.value.push(S(p))}catch(n){console.log(n)}};return F(async()=>{r.value=!0;const n=V.user.restrictions.find(e=>e.typeId===2),i=V.user.restrictions.find(e=>e.typeId===3);n?f.value=parseInt(n.restriction):i?h.value=parseInt(i.restriction):(h.value=null,f.value=null),await D(),await $(),console.log(a.value),r.value=!1}),(n,i)=>{const e=M("RouterLink");return d(),g(T,{class:"panel-vida-funcionarios"},{default:t(()=>[s(J,{title:R.value,"section-value":Gt},null,8,["title"]),!r.value&&_.value!==0?(d(),v("div",E,[s(G,{class:"btn-volver",title:"Volver",onExecuteAction:z,disabled:n.blockButton},null,8,["disabled"])])):m("",!0),s(O,{"active-spin":r.value},null,8,["active-spin"]),!r.value&&a.value.length>0?(d(),v("div",L,[o("div",U,[_.value==1?(d(),v("div",q,[s(l,{class:"section-donut",title:"Relación Jefatura",subtitle:"Consulta a los funcionarios sobre su relación con sus jefaturas","point-value":a.value[0]},{default:t(()=>[s(e,{to:"relacionJefatura",class:"sub-menu--option white btn-small"},{default:t(()=>[K]),_:1})]),_:1},8,["point-value"]),s(l,{class:"section-donut",title:"Confianza y valoración",subtitle:"Consulta a los funcionarios sobre confianza y valoración entre sus pares","point-value":a.value[1]},{default:t(()=>[s(e,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:t(()=>[W]),_:1})]),_:1},8,["point-value"]),s(l,{class:"section-donut",title:"Apego institucional",subtitle:"Consulta a los funcionarios sobre el apego institucional","point-value":a.value[2]},{default:t(()=>[s(e,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:t(()=>[X]),_:1})]),_:1},8,["point-value"]),s(l,{class:"section-donut",title:"Carga trabajo",subtitle:"Consulta a los funcionarios sobre la carga trabajo","point-value":a.value[3]},{default:t(()=>[s(e,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:t(()=>[Y]),_:1})]),_:1},8,["point-value"])])):m("",!0),_.value==2?(d(),v("div",Z,[s(l,{class:"section-donut",title:"Motivación en el trabajo",subtitle:"Consulta sobre su motivación en el trabajo","point-value":a.value[4]},{default:t(()=>[s(e,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:t(()=>[tt]),_:1})]),_:1},8,["point-value"]),s(l,{class:"section-donut",title:"Relación compañeros/as",subtitle:"Consulta sobre su relación entre compañeros/as ","point-value":a.value[5]},{default:t(()=>[s(e,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:t(()=>[st]),_:1})]),_:1},8,["point-value"]),s(l,{class:"section-donut",title:"Seguridad personal",subtitle:"Consulta sobre su seguridad personal","point-value":a.value[6]},{default:t(()=>[s(e,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:t(()=>[ot]),_:1})]),_:1},8,["point-value"]),s(l,{class:"section-donut",title:"Organización y orden",subtitle:"Consulta sobre organización y el orden","point-value":a.value[7]},{default:t(()=>[s(e,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:t(()=>[et]),_:1})]),_:1},8,["point-value"])])):m("",!0),_.value==3?(d(),v("div",nt,[s(l,{class:"section-donut",title:"Apoyo a la reinserción",subtitle:"Consulta sobre su rol en el apoyo a la reinserción","point-value":a.value[8]},{default:t(()=>[s(e,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:t(()=>[at]),_:1})]),_:1},8,["point-value"]),s(l,{class:"section-donut",title:"Relación con internos",subtitle:"Consulta sobre su relación con los internos","point-value":a.value[9]},{default:t(()=>[s(e,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:t(()=>[it]),_:1})]),_:1},8,["point-value"]),s(l,{class:"section-donut",title:"Conocimiento normativas",subtitle:"Consulta sobre su conocimiento de normativas","point-value":a.value[10]},{default:t(()=>[s(e,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:t(()=>[lt]),_:1})]),_:1},8,["point-value"]),s(l,{class:"section-donut",title:"Toma de desiciones",subtitle:"Consulta sobre la toma de desiciones","point-value":a.value[11]},{default:t(()=>[s(e,{to:"TomaDesiciones",class:"sub-menu--option white btn-small"},{default:t(()=>[ut]),_:1})]),_:1},8,["point-value"]),s(l,{class:"section-donut",title:"Cuestionario Salud GHQ-12",subtitle:"Consulta de resultados cuestionario de Salud GHQ-12","point-value":a.value[12],type:2},{default:t(()=>[s(e,{to:"cuestionarioGHQFuncionario",class:"sub-menu--option white btn-small"},{default:t(()=>[ct]),_:1})]),_:1},8,["point-value"])])):m("",!0)]),o("div",rt,[_.value!==1?(d(),g(w,{key:0,class:"card-information",onClick:i[0]||(i[0]=p=>y(1))},{default:t(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[_t,pt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[dt,mt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[bt,vt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[ft,ht]),_:1})]),_:1})):m("",!0),_.value!==2?(d(),g(w,{key:1,class:"card-information",onClick:i[1]||(i[1]=p=>y(2))},{default:t(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Ct,gt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[yt,wt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Vt,It]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[kt,xt]),_:1})]),_:1})):m("",!0),_.value!==3?(d(),g(w,{key:2,class:"card-information",onClick:i[2]||(i[2]=p=>y(3))},{default:t(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Rt,jt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[zt,Dt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Ht,St]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[$t,At]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Bt,Pt]),_:1})]),_:1})):m("",!0)])])):m("",!0)]),_:1})}}};export{Jt as default};
