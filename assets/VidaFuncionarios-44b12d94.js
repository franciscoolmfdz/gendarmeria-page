import{_ as G}from"./CButton-3ef686eb.js";import{_ as l,a as j}from"./CChartDonutSection-68d4545c.js";import{g as f,u as Q,h as S,i as F,o as d,f as I,j as s,_ as T,k as N,l as D,m as o,c as g,a as b,n as O,b as e}from"./index-26d193c9.js";import{_ as E}from"./CHeaderBar-01ab725c.js";const L={key:0,class:"c-option-volver"},J={key:1,class:"principal-section section-funcionarios"},U={class:"principal-section"},q={key:0,class:"principal-section__top position-one"},K=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),W=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),X=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),Y=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),Z={key:1,class:"principal-section__top position-two"},tt=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),st=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),ot=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),et=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),nt={key:2,class:"principal-section__top position-three"},at=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),it=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),lt=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),ut=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),ct=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),rt={class:"principal-section__bottom"},_t=e("span",{class:"sub-menu__option--title"},"Relación con jefatura",-1),pt=e("span",{class:"sub-menu__option--text"}," Consulta a los funcionarios sobre su relación con sus jefaturas ",-1),dt=e("span",{class:"sub-menu__option--title"},"Confianza y valoración",-1),mt=e("span",{class:"sub-menu__option--text"}," Consulta a los funcionarios sobre confianza y valoración entre sus pares ",-1),bt=e("span",{class:"sub-menu__option--title"},"Apego institucional",-1),vt=e("span",{class:"sub-menu__option--text"},"Consulta a los funcionarios sobre el apego institucional",-1),ft=e("span",{class:"sub-menu__option--title"},"Carga trabajo",-1),ht=e("span",{class:"sub-menu__option--text"},"Consulta a los funcionarios sobre la carga trabajo",-1),Ct=e("span",{class:"sub-menu__option--title"},"Motivación en el trabajo",-1),yt=e("span",{class:"sub-menu__option--text"}," Consulta sobre su motivación en el trabajo ",-1),gt=e("span",{class:"sub-menu__option--title"},"Relación compañeros/as",-1),wt=e("span",{class:"sub-menu__option--text"}," Consulta sobre su relación entre compañeros/as ",-1),Vt=e("span",{class:"sub-menu__option--title"},"Seguridad personal",-1),It=e("span",{class:"sub-menu__option--text"}," Consulta sobre su seguridad personal",-1),kt=e("span",{class:"sub-menu__option--title"},"Organización y orden",-1),xt=e("span",{class:"sub-menu__option--text"}," Consulta sobre la Organización y el orden",-1),jt=e("span",{class:"sub-menu__option--title"},"Apoyo a la reinserción ",-1),Rt=e("span",{class:"sub-menu__option--text"}," Consulta sobre su rol en el apoyo a la reinserción ",-1),zt=e("span",{class:"sub-menu__option--title"},"Relación con internos ",-1),Dt=e("span",{class:"sub-menu__option--text"}," Consulta sobre su relación con los internos ",-1),Ht=e("span",{class:"sub-menu__option--title"},"Conocimiento normativas ",-1),$t=e("span",{class:"sub-menu__option--text"}," Consulta sobre su conocimiento de normativas ",-1),At=e("span",{class:"sub-menu__option--title"},"Presión para tomar decisiones ",-1),Mt=e("span",{class:"sub-menu__option--text"}," Consulta sobre la toma de decisiones ",-1),Bt=e("span",{class:"sub-menu__option--title"}," Cuestionario salud GHQ-12 ",-1),Pt=e("span",{class:"sub-menu__option--text"}," Consulta de resultados cuestionario de salud GHQ-12 ",-1),Gt=2,Ot={__name:"VidaFuncionarios",setup(Qt){const H=f("Calidad de vida de los funcionarios"),r=f(!1),R=Q(),i=f([]),_=f(1),w=f(null),V=f(null),$=n=>n>0?Math.round(n*100)/100:0,A=()=>{_.value=0},k=async n=>{r.value=!0,_.value=n,r.value=!1},z=async()=>{let n={categoryId:2,lastPeriod:!0};return n={categoryId:2,historyId:(await D(n)).id},w.value&&(n.regionId=w.value),V.value&&(n.carcelId=V.value),n},M=async(n=9,a=20)=>{try{r.value=!0;const t=await z();let u=await N(t),c=null;for(let v=n;v<=a;v++){const h=v,C=u.filter(m=>m.subCategoryId===h&&m.valueUsed===1),y=C.length;c=C.reduce((m,p)=>m+p.valuePound,0),c=c/y,c=$(c),i.value.push(c)}}catch(t){console.log(t)}},x=n=>n?Math.round(n*100)/100:0,B=n=>{let a=n[0].recordId,t=0,u=0,c=0,v=0,h=0,C=0;for(let m=0;m<n.length;m++){let p=n[m];p.pound>=0&&(h+=p.pound,C++),p.recordId==a&&p.pound>=0?t+=p.pound:(t<2?u++:t>2&&t<=6?c++:t>6&&v++,t=p.pound,a=p.recordId)}h=h*10/C;const y=u+c+v;return[Math.round(x(u/y*100)),Math.round(x(c/y*100)),Math.floor(x(v/y*100))]},P=async()=>{try{let n=await z();r.value=!0;const a={...n,subCategoryId:22,embedDetail:!0};let t=await D(a);const u=B(t.items);i.value.push(u)}catch(n){console.log(n)}};return S(async()=>{r.value=!0;const n=R.user.restrictions.find(t=>t.typeId===2),a=R.user.restrictions.find(t=>t.typeId===3);n?w.value=parseInt(n.restriction):a?V.value=parseInt(a.restriction):(V.value=null,w.value=null),await M(),await P(),r.value=!1}),(n,a)=>{const t=F("RouterLink");return d(),I(T,{class:"panel-vida-funcionarios"},{default:s(()=>[o(E,{title:H.value,"section-value":Gt},null,8,["title"]),!r.value&&_.value!==0?(d(),g("div",L,[o(G,{class:"btn-volver",title:"Volver",onExecuteAction:A,disabled:n.blockButton},null,8,["disabled"])])):b("",!0),o(O,{"active-spin":r.value},null,8,["active-spin"]),!r.value&&i.value.length>0?(d(),g("div",J,[e("div",U,[_.value==1?(d(),g("div",q,[o(l,{class:"section-donut",title:"Relación con jefatura",subtitle:"Consulta a los funcionarios sobre su relación con sus jefaturas","point-value":i.value[0]},{default:s(()=>[o(t,{to:"relacionJefatura",class:"sub-menu--option white btn-small"},{default:s(()=>[K]),_:1})]),_:1},8,["point-value"]),o(l,{class:"section-donut",title:"Confianza y valoración",subtitle:"Consulta a los funcionarios sobre confianza y valoración entre sus pares","point-value":i.value[1]},{default:s(()=>[o(t,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:s(()=>[W]),_:1})]),_:1},8,["point-value"]),o(l,{class:"section-donut",title:"Apego institucional",subtitle:"Consulta a los funcionarios sobre el apego institucional","point-value":i.value[2]},{default:s(()=>[o(t,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:s(()=>[X]),_:1})]),_:1},8,["point-value"]),o(l,{class:"section-donut",title:"Carga trabajo",subtitle:"Consulta a los funcionarios sobre la carga trabajo","point-value":i.value[3]},{default:s(()=>[o(t,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:s(()=>[Y]),_:1})]),_:1},8,["point-value"])])):b("",!0),_.value==2?(d(),g("div",Z,[o(l,{class:"section-donut",title:"Motivación en el trabajo",subtitle:"Consulta sobre su motivación en el trabajo","point-value":i.value[4]},{default:s(()=>[o(t,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:s(()=>[tt]),_:1})]),_:1},8,["point-value"]),o(l,{class:"section-donut",title:"Relación compañeros/as",subtitle:"Consulta sobre su relación entre compañeros/as ","point-value":i.value[5]},{default:s(()=>[o(t,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:s(()=>[st]),_:1})]),_:1},8,["point-value"]),o(l,{class:"section-donut",title:"Seguridad personal",subtitle:"Consulta sobre su seguridad personal","point-value":i.value[6]},{default:s(()=>[o(t,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:s(()=>[ot]),_:1})]),_:1},8,["point-value"]),o(l,{class:"section-donut",title:"Organización y orden",subtitle:"Consulta sobre organización y el orden","point-value":i.value[7]},{default:s(()=>[o(t,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:s(()=>[et]),_:1})]),_:1},8,["point-value"])])):b("",!0),_.value==3?(d(),g("div",nt,[o(l,{class:"section-donut",title:"Apoyo a la reinserción",subtitle:"Consulta sobre su rol en el apoyo a la reinserción","point-value":i.value[8]},{default:s(()=>[o(t,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:s(()=>[at]),_:1})]),_:1},8,["point-value"]),o(l,{class:"section-donut",title:"Relación con internos",subtitle:"Consulta sobre su relación con los internos","point-value":i.value[9]},{default:s(()=>[o(t,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:s(()=>[it]),_:1})]),_:1},8,["point-value"]),o(l,{class:"section-donut",title:"Conocimiento normativas",subtitle:"Consulta sobre su conocimiento de normativas","point-value":i.value[10]},{default:s(()=>[o(t,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:s(()=>[lt]),_:1})]),_:1},8,["point-value"]),o(l,{class:"section-donut",title:"Toma de decisiones",subtitle:"Consulta sobre la toma de decisiones","point-value":i.value[11]},{default:s(()=>[o(t,{to:"TomaDecisiones",class:"sub-menu--option white btn-small"},{default:s(()=>[ut]),_:1})]),_:1},8,["point-value"]),o(l,{class:"section-donut",title:"Cuestionario salud GHQ-12",subtitle:"Consulta de resultados cuestionario de Salud GHQ-12","pie-points":i.value[12],"circle-disabled":!0,type:5},{default:s(()=>[o(t,{to:"cuestionarioGHQFuncionario",class:"sub-menu--option white btn-small"},{default:s(()=>[ct]),_:1})]),_:1},8,["pie-points"])])):b("",!0)]),e("div",rt,[_.value!==1?(d(),I(j,{key:0,class:"card-information",onClick:a[0]||(a[0]=u=>k(1))},{default:s(()=>[o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[_t,pt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[dt,mt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[bt,vt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[ft,ht]),_:1})]),_:1})):b("",!0),_.value!==2?(d(),I(j,{key:1,class:"card-information",onClick:a[1]||(a[1]=u=>k(2))},{default:s(()=>[o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[Ct,yt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[gt,wt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[Vt,It]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[kt,xt]),_:1})]),_:1})):b("",!0),_.value!==3?(d(),I(j,{key:2,class:"card-information",onClick:a[2]||(a[2]=u=>k(3))},{default:s(()=>[o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[jt,Rt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[zt,Dt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[Ht,$t]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[At,Mt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[Bt,Pt]),_:1})]),_:1})):b("",!0)])])):b("",!0)]),_:1})}}};export{Ot as default};
