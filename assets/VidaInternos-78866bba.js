import{_ as F}from"./CButton-0f682ad0.js";import{g as b,u as S,h as E,i as N,o as v,f as x,j as s,_ as L,k as j,l as $,m as o,c as w,a as f,n as U,b as n}from"./index-ec234649.js";import{_ as d,a as B}from"./CChartDonutSection-452a9270.js";import{_ as q}from"./CHeaderBar-928d38c3.js";const z={key:0,class:"c-option-volver"},J={key:1,class:"principal-section section-internos"},K={class:"principal-section"},O={key:0,class:"principal-section__top top-position-one"},W=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),X=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),Y=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),Z=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),tt={key:1,class:"principal-section__top top-position-two"},et=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),st=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),ot=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),nt=n("span",{class:"sub-menu__option--title"}," Ver más ",-1),at={class:"principal-section__bottom"},lt=n("span",{class:"sub-menu__option--title"},"Régimen de la cárcel",-1),it=n("span",{class:"sub-menu__option--text"},"Consulta sobre el régimen carcelario",-1),ut=n("span",{class:"sub-menu__option--title"},"Funcionamiento de la cárcel",-1),ct=n("span",{class:"sub-menu__option--text"}," Consulta sobre funcionamiento de la carcel",-1),rt=n("span",{class:"sub-menu__option--title"},"Evaluación general",-1),_t=n("span",{class:"sub-menu__option--text"}," Consulta de evaluación general ",-1),dt=n("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),pt=n("span",{class:"sub-menu__option--text"}," Consulta de resultados cuestionario de salud GHQ-12 ",-1),mt=n("span",{class:"sub-menu__option--title"},"Infraestructura de la cárcel",-1),bt=n("span",{class:"sub-menu__option--text"}," Consulta a los internos sobre la infraestructura carcelaria",-1),vt=n("span",{class:"sub-menu__option--title"},"Acceso a programas",-1),ft=n("span",{class:"sub-menu__option--text"}," Consulta a los internos sobre el acceso a programas de los internos",-1),ht=n("span",{class:"sub-menu__option--title"},"Trato con otros Internos(as)",-1),gt=n("span",{class:"sub-menu__option--text"},"Consulta a los internos sobre la vida carcelaria",-1),Ct=n("span",{class:"sub-menu__option--title"},"Trato interpersonal funcionario-interno",-1),It=n("span",{class:"sub-menu__option--text"},"Consulta a los internos sobre la relación con los funcionarios",-1),yt=1,Ht={__name:"VidaInternos",setup(wt){const G=b("Calidad de vida de los internos"),u=b(!1),D=S(),l=b([]),V=b(0),p=b(1),I=b(null),y=b(null),P=e=>e>0?Math.round(e*100)/100:0,A=()=>{p.value=0},H=async e=>{u.value=!0,p.value=e,u.value=!1},R=async()=>{let e={categoryId:1,lastPeriod:!0};return V.value||(V.value=await $(e)),e={categoryId:1,historyId:V.value.id},I.value&&(e.regionId=I.value),y.value&&(e.carcelId=y.value),e},M=async(e=2,a=8)=>{try{u.value=!0;const t=await R();let c=await j(t),i=null;for(let m=e;m<=a;m++){const h=m,g=c.filter(_=>_.subCategoryId===h&&_.valueUsed===1),C=g.length;i=g.reduce((_,r)=>_+r.valuePound,0),i=i/C,i=P(i),l.value.push(i)}}catch(t){console.log(t)}},k=e=>e?Math.round(e*100)/100:0,Q=e=>{let a=e[0].recordId,t=0,c=0,i=0,m=0,h=0,g=0;for(let _=0;_<e.length;_++){let r=e[_];r.pound>=0&&(h+=r.pound,g++),r.recordId==a&&r.pound>=0?t+=r.pound:(t<2?c++:t>2&&t<=6?i++:t>6&&m++,t=r.pound,a=r.recordId)}h=h*10/g;const C=c+i+m;return[Math.round(k(c/C*100)),Math.round(k(i/C*100)),Math.floor(k(m/C*100))]},T=async()=>{try{let e=await R();u.value=!0;const a={...e,subCategoryId:21,embedDetail:!0};let t=await $(a);const c=Q(t.items);l.value.push(c)}catch(e){console.log(e)}finally{u.value=!1}};return E(async()=>{u.value=!0;const e=D.user.restrictions.find(t=>t.typeId===2),a=D.user.restrictions.find(t=>t.typeId===3);e?I.value=parseInt(e.restriction):a?y.value=parseInt(a.restriction):(y.value=null,I.value=null),await M(),await T()}),(e,a)=>{const t=N("RouterLink");return v(),x(L,{class:"panel-vida-internos"},{default:s(()=>[o(q,{title:G.value,"section-value":yt},null,8,["title"]),!u.value&&p.value!==0?(v(),w("div",z,[o(F,{class:"btn-volver",title:"Volver",onExecuteAction:A,disabled:e.blockButton},null,8,["disabled"])])):f("",!0),o(U,{"active-spin":u.value},null,8,["active-spin"]),!u.value&&l.value.length>0?(v(),w("div",J,[n("div",K,[p.value==1?(v(),w("div",O,[o(d,{class:"section-donut",title:"Infraestructura de la cárcel",subtitle:"Consulta a los internos sobre la infraestructura carcelaria","point-value":l.value[0]},{default:s(()=>[o(t,{to:"vidaInternosInfraestructura",class:"sub-menu--option white btn-small"},{default:s(()=>[W]),_:1})]),_:1},8,["point-value"]),o(d,{class:"section-donut",title:"Acceso a programas",subtitle:"Consulta a los internos sobre el acceso a programas de los internos","point-value":l.value[1]},{default:s(()=>[o(t,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:s(()=>[X]),_:1})]),_:1},8,["point-value"]),o(d,{class:"section-donut",title:"Trato con otros internos(as)",subtitle:"Consulta a los internos sobre la vida carcelaria","point-value":l.value[2]},{default:s(()=>[o(t,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:s(()=>[Y]),_:1})]),_:1},8,["title","point-value"]),o(d,{class:"section-donut",title:"Trato interpersonal funcionario - interno",subtitle:"Consulta a los internos sobre la relación con los funcionarios","point-value":l.value[3]},{default:s(()=>[o(t,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:s(()=>[Z]),_:1})]),_:1},8,["point-value"])])):f("",!0),p.value==2?(v(),w("div",tt,[o(d,{class:"section-donut",title:"Régimen de la Cárcel",subtitle:"Consulta sobre el régimen carcelario","point-value":l.value[4]},{default:s(()=>[o(t,{to:"regimenCarcel",class:"sub-menu--option white btn-small"},{default:s(()=>[et]),_:1})]),_:1},8,["point-value"]),o(d,{class:"section-donut",title:"Funcionamiento de la cárcel",subtitle:"Consulta sobre funcionamiento de la cárcel","point-value":l.value[5]},{default:s(()=>[o(t,{to:"funcionamientoCarcel",class:"sub-menu--option white btn-small"},{default:s(()=>[st]),_:1})]),_:1},8,["point-value"]),o(d,{class:"section-donut",title:"Evaluación general",subtitle:"Consulta de evaluación general","point-value":l.value[6]},{default:s(()=>[o(t,{to:"vidaInternosGeneral",class:"sub-menu--option white btn-small"},{default:s(()=>[ot]),_:1})]),_:1},8,["point-value"]),o(d,{class:"section-donut",title:"Cuestionario Salud GHQ-12",subtitle:"Consulta de resultados cuestionario de salud GHQ-12",type:5,"pie-points":l.value[7],"circle-disabled":!0},{default:s(()=>[o(t,{to:"cuestionarioGHQInterno",class:"sub-menu--option white btn-small"},{default:s(()=>[nt]),_:1})]),_:1},8,["pie-points"])])):f("",!0)]),n("div",at,[p.value!==2?(v(),x(B,{key:0,class:"card-information",onClick:a[0]||(a[0]=c=>H(2))},{default:s(()=>[o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[lt,it]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[ut,ct]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[rt,_t]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[dt,pt]),_:1})]),_:1})):f("",!0),p.value!==1?(v(),x(B,{key:1,class:"card-information",onClick:a[1]||(a[1]=c=>H(1))},{default:s(()=>[o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[mt,bt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[vt,ft]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[ht,gt]),_:1}),o(t,{to:"#",class:"sub-menu--option options-bottom"},{default:s(()=>[Ct,It]),_:1})]),_:1})):f("",!0)])])):f("",!0)]),_:1})}}};export{Ht as default};
