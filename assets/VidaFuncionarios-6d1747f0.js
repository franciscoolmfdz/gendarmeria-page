import{_ as G}from"./CButton-4bbc2b87.js";import{_ as u}from"./CChartDonutSection-658d1a8e.js";import{g as f,u as Q,h as F,i as M,o as p,f as w,j as t,_ as T,k as N,l as j,m as s,c as h,a as b,n as O,b as o}from"./index-dd4685c7.js";import{_ as J}from"./CHeaderBar-a2769ce8.js";import{_ as I}from"./CCard-68034043.js";const E={key:0,class:"c-option-volver"},L={key:1,class:"principal-section section-funcionarios"},U={class:"principal-section"},q={key:0,class:"principal-section__top position-one"},K=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),W=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),X=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),Y=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),Z={key:1,class:"principal-section__top position-two"},tt=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),st=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),ot=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),et=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),nt={key:2,class:"principal-section__top position-three"},at=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),it=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),lt=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),ut=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),ct=o("span",{class:"sub-menu__option--title"}," Ver más ",-1),rt={class:"principal-section__bottom"},_t=o("span",{class:"sub-menu__option--title"},"Relación Jefatura",-1),pt=o("span",{class:"sub-menu__option--text"}," Consulta a los funcionarios sobre su relación con sus jefaturas ",-1),dt=o("span",{class:"sub-menu__option--title"},"Confianza y valoración",-1),mt=o("span",{class:"sub-menu__option--text"}," Consulta a los funcionarios sobre confianza y valoración entre sus pares ",-1),bt=o("span",{class:"sub-menu__option--title"},"Apego institucional",-1),vt=o("span",{class:"sub-menu__option--text"},"Consulta a los funcionarios sobre el apego institucional",-1),ft=o("span",{class:"sub-menu__option--title"},"Carga trabajo",-1),ht=o("span",{class:"sub-menu__option--text"},"Consulta a los funcionarios sobre la carga trabajo",-1),Ct=o("span",{class:"sub-menu__option--title"},"Motivación en el trabajo",-1),gt=o("span",{class:"sub-menu__option--text"}," Consulta sobre su motivación en el trabajo ",-1),yt=o("span",{class:"sub-menu__option--title"},"Relación compañeros/as",-1),wt=o("span",{class:"sub-menu__option--text"}," Consulta sobre su relación entre compañeros/as ",-1),Vt=o("span",{class:"sub-menu__option--title"},"Seguridad personal",-1),It=o("span",{class:"sub-menu__option--text"}," Consulta sobre su seguridad personal",-1),kt=o("span",{class:"sub-menu__option--title"},"Organización y orden",-1),xt=o("span",{class:"sub-menu__option--text"}," Consulta sobre la Organización y el orden",-1),Rt=o("span",{class:"sub-menu__option--title"},"Apoyo a la reinserción ",-1),jt=o("span",{class:"sub-menu__option--text"}," Consulta sobre su rol en el apoyo a la reinserción ",-1),Ht=o("span",{class:"sub-menu__option--title"},"Relación con internos ",-1),zt=o("span",{class:"sub-menu__option--text"}," Consulta sobre su relación con los internos ",-1),Dt=o("span",{class:"sub-menu__option--title"},"Conocimiento normativas ",-1),St=o("span",{class:"sub-menu__option--text"}," Consulta sobre su conocimiento de normativas ",-1),$t=o("span",{class:"sub-menu__option--title"},"Presión para tomar decisiones ",-1),Pt=o("span",{class:"sub-menu__option--text"}," Consulta sobre la toma de desiciones ",-1),At=o("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),Bt=o("span",{class:"sub-menu__option--text"}," Consulta de resultados cuestionario de Salud GHQ-12 ",-1),Gt=2,Jt={__name:"VidaFuncionarios",setup(Qt){const H=f("Calidad de vida de los funcionarios"),r=f(!1),k=Q(),a=f([]),_=f(0),C=f(null),g=f(null),z=n=>n>0?Math.round(n*100)/100:0,D=()=>{_.value=0},V=async n=>{r.value=!0,_.value=n,r.value=!1},x=async()=>{let n={categoryId:2,lastPeriod:!0};return n={categoryId:2,historyId:(await j(n)).id},C.value&&(n.regionId=C.value),g.value&&(n.carcelId=g.value),n},S=async(n=9,i=20)=>{try{r.value=!0;const e=await x();let d=await N(e),l=null;for(let c=n;c<=i;c++){const v=c,m=d.filter(y=>y.subCategoryId===v&&y.valueUsed===1),A=m.length;l=m.reduce((y,B)=>y+B.promPound,0),l=l/A,l=z(l),a.value.push(l)}}catch(e){console.log(e)}},$=n=>{let i=n[0].recordId,e=0,d=0,l=0,c=0;for(let v=0;v<n.length;v++){let m=n[v];m.recordId==i&&m.pound>=0?c+=m.pound:(c<2?e++:c>2&&c<=6?d++:c>6&&l++,c=m.pound,i=m.recordId)}return[e,d,l]},R=n=>n?Math.round(n*100)/100:0,P=async()=>{try{let n=await x();r.value=!0;const i={...n,subCategoryId:22,embedDetail:!0};let e=await j(i),l=$(e.items).reduce((c,v)=>c+v);l=R(l/3),a.value.push(R(l/12))}catch(n){console.log(n)}};return F(async()=>{r.value=!0;const n=k.user.restrictions.find(e=>e.typeId===2),i=k.user.restrictions.find(e=>e.typeId===3);n?C.value=parseInt(n.restriction):i?g.value=parseInt(i.restriction):(g.value=null,C.value=null),await S(),await P(),console.log(a.value),r.value=!1}),(n,i)=>{const e=M("RouterLink");return p(),w(T,{class:"panel-vida-funcionarios"},{default:t(()=>[s(J,{title:H.value,"section-value":Gt},null,8,["title"]),!r.value&&_.value!==0?(p(),h("div",E,[s(G,{class:"btn-volver",title:"Volver",onExecuteAction:D,disabled:n.blockButton},null,8,["disabled"])])):b("",!0),s(O,{"active-spin":r.value},null,8,["active-spin"]),!r.value&&a.value.length>0?(p(),h("div",L,[o("div",U,[_.value==1?(p(),h("div",q,[s(u,{class:"section-donut",title:"Relación Jefatura",subtitle:"Consulta a los funcionarios sobre su relación con sus jefaturas","point-value":a.value[0]},{default:t(()=>[s(e,{to:"relacionJefatura",class:"sub-menu--option white btn-small"},{default:t(()=>[K]),_:1})]),_:1},8,["point-value"]),s(u,{class:"section-donut",title:"Confianza y valoración",subtitle:"Consulta a los funcionarios sobre confianza y valoración entre sus pares","point-value":a.value[1]},{default:t(()=>[s(e,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:t(()=>[W]),_:1})]),_:1},8,["point-value"]),s(u,{class:"section-donut",title:"Apego institucional",subtitle:"Consulta a los funcionarios sobre el apego institucional","point-value":a.value[2]},{default:t(()=>[s(e,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:t(()=>[X]),_:1})]),_:1},8,["point-value"]),s(u,{class:"section-donut",title:"Carga trabajo",subtitle:"Consulta a los funcionarios sobre la carga trabajo","point-value":a.value[3]},{default:t(()=>[s(e,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:t(()=>[Y]),_:1})]),_:1},8,["point-value"])])):b("",!0),_.value==2?(p(),h("div",Z,[s(u,{class:"section-donut",title:"Motivación en el trabajo",subtitle:"Consulta sobre su motivación en el trabajo","point-value":a.value[4]},{default:t(()=>[s(e,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:t(()=>[tt]),_:1})]),_:1},8,["point-value"]),s(u,{class:"section-donut",title:"Relación compañeros/as",subtitle:"Consulta sobre su relación entre compañeros/as ","point-value":a.value[5]},{default:t(()=>[s(e,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:t(()=>[st]),_:1})]),_:1},8,["point-value"]),s(u,{class:"section-donut",title:"Seguridad personal",subtitle:"Consulta sobre su seguridad personal","point-value":a.value[6]},{default:t(()=>[s(e,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:t(()=>[ot]),_:1})]),_:1},8,["point-value"]),s(u,{class:"section-donut",title:"Organización y orden",subtitle:"Consulta sobre organización y el orden","point-value":a.value[7]},{default:t(()=>[s(e,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:t(()=>[et]),_:1})]),_:1},8,["point-value"])])):b("",!0),_.value==3?(p(),h("div",nt,[s(u,{class:"section-donut",title:"Apoyo a la reinserción",subtitle:"Consulta sobre su rol en el apoyo a la reinserción","point-value":a.value[8]},{default:t(()=>[s(e,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:t(()=>[at]),_:1})]),_:1},8,["point-value"]),s(u,{class:"section-donut",title:"Relación con internos",subtitle:"Consulta sobre su relación con los internos","point-value":a.value[9]},{default:t(()=>[s(e,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:t(()=>[it]),_:1})]),_:1},8,["point-value"]),s(u,{class:"section-donut",title:"Conocimiento normativas",subtitle:"Consulta sobre su conocimiento de normativas","point-value":a.value[10]},{default:t(()=>[s(e,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:t(()=>[lt]),_:1})]),_:1},8,["point-value"]),s(u,{class:"section-donut",title:"Toma de desiciones",subtitle:"Consulta sobre la toma de desiciones","point-value":a.value[11]},{default:t(()=>[s(e,{to:"TomaDesiciones",class:"sub-menu--option white btn-small"},{default:t(()=>[ut]),_:1})]),_:1},8,["point-value"]),s(u,{class:"section-donut",title:"Cuestionario Salud GHQ-12",subtitle:"Consulta de resultados cuestionario de Salud GHQ-12","point-value":a.value[12],type:2},{default:t(()=>[s(e,{to:"cuestionarioGHQFuncionario",class:"sub-menu--option white btn-small"},{default:t(()=>[ct]),_:1})]),_:1},8,["point-value"])])):b("",!0)]),o("div",rt,[_.value!==1?(p(),w(I,{key:0,class:"card-information",onClick:i[0]||(i[0]=d=>V(1))},{default:t(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[_t,pt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[dt,mt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[bt,vt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[ft,ht]),_:1})]),_:1})):b("",!0),_.value!==2?(p(),w(I,{key:1,class:"card-information",onClick:i[1]||(i[1]=d=>V(2))},{default:t(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Ct,gt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[yt,wt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Vt,It]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[kt,xt]),_:1})]),_:1})):b("",!0),_.value!==3?(p(),w(I,{key:2,class:"card-information",onClick:i[2]||(i[2]=d=>V(3))},{default:t(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Rt,jt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Ht,zt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Dt,St]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[$t,Pt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[At,Bt]),_:1})]),_:1})):b("",!0)])])):b("",!0)]),_:1})}}};export{Jt as default};