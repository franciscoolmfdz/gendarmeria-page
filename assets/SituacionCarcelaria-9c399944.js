import{_ as O}from"./CButton-1f16a4b4.js";import{g as i,u as Q,h as U,i as W,o as p,f as M,j as n,_ as X,m as s,c as w,a as _,n as Y,b as l,l as T,q as Z}from"./index-ff297cff.js";import{_ as m,a as L}from"./CChartDonutSection-1340ee1a.js";import{_ as tt}from"./CHeaderBar-2eaac43b.js";import{g as et}from"./dimensionAggression-acf0a4a5.js";const ot={key:0,class:"c-option-volver"},at={key:1,class:"principal-section section-internos"},nt={class:"principal-section"},st={key:0,class:"principal-section__top top-position-one"},lt=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),it=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),ct=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),ut={key:1,class:"principal-section__top top-position-two"},rt=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),dt=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),pt=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),_t={class:"principal-section__bottom"},mt=l("span",{class:"sub-menu__option--title"},"Tasa de ocupación",-1),vt=l("span",{class:"sub-menu__option--text"},null,-1),bt=l("span",{class:"sub-menu__option--title"},"Partes denuncia ley 20.000",-1),ft=l("span",{class:"sub-menu__option--text"},null,-1),ht=l("span",{class:"sub-menu__option--title"},"Dotación vs población",-1),gt=l("span",{class:"sub-menu__option--text"},null,-1),yt=l("span",{class:"sub-menu__option--title"},"Registro de eventos violentos",-1),xt=l("span",{class:"sub-menu__option--text"},null,-1),wt=l("span",{class:"sub-menu__option--title"},"Personal de reinserción",-1),Tt=l("span",{class:"sub-menu__option--text"},null,-1),Dt=l("span",{class:"sub-menu__option--title"},"Porcentaje de licencias",-1),Pt=l("span",{class:"sub-menu__option--text"},null,-1),Vt=3,Lt={__name:"SituacionCarcelaria",setup(Mt){const $=i("Estado de la situación carcelaria"),c=i(!1),j=Q(),R=i([{}]);i(0);const r=i(1),D=i(null),P=i(null),h=i(null),v=i(null),I=i(null),C=i(null),b=i(null),V=i(null),H=i(null),f=i(null),F=()=>{r.value=1},k=async a=>{c.value=!0,r.value=a,c.value=!1},g=async a=>{let e={categoryId:3,historySubCategoryId:a,lastPeriod:!0};return e={categoryId:3,historyId:(await T(e)).id},e},B=a=>{f.value=0;for(let e=0;e<a.length;e++){let t=a[e];f.value+=t.quantity}f.value=f.value.toString()},S=async()=>{try{const a={regionId:D.value,carcelId:P.value};c.value=!0;const e=await et(a);c.value=!1,B(e)}catch(a){console.log(a)}},A=async()=>{const a=await g(28);a.embedProfesionals=!0,(await T(a)).items.map(t=>{H.value+=t.profesionalHombre+t.profesionalMujer})},E=async()=>{try{const a=await g(29),e=await Z(a);let t=0;I.value=e.map(o=>{o.tieneLicencia=o.licenseActiveTotal,o.noLicenciaVigente=o.licenseDisabledTotal,o.licenseTotal=o.licenseActiveTotal+o.licenseDisabledTotal;const d=o.tieneLicencia/o.licenseTotal*100;return t+=d,o}),C.value=(t/e.length).toFixed(1)+"%"}catch(a){console.log(a)}},N=a=>a?Math.round(a*100)/100:0,q=async()=>{var a;try{const e=await g(30);e.embedPopulation=!0,v.value=0;let t=await T(e);(a=t==null?void 0:t.items)!=null&&a.length?(h.value=t.items.map(o=>{const d=o.imputadoHombre+o.condenadoHombre+o.procesadoHombre+o.detenidoHombre,u=o.imputadoMujer+o.condenadoMujer+o.procesadoMujer+o.detenidoMujer,y=d+u,x=o.pplMaxMujer+o.pplMaxHombre,K=y&&x?N(y*100/x):0;return v.value+=K,o}),v.value=(v.value/h.value.length).toFixed(1)-3+"%"):h.value=[]}catch(e){console.log(e)}},z=async()=>{var a;try{const e=await g(32);e.embedLawParts=!0,b.value=0;let t=await T(e);(a=t==null?void 0:t.items)!=null&&a.length&&(t.items.map(o=>{b.value+=o.total}),b.value=`Total: ${b.value}`)}catch(e){console.log(e)}},G=()=>{V.value=0;let a=0,e=0;h.value.map(o=>{let d=0;if(I.value.filter(u=>u.carcelId===o.carcelId).map(u=>d+=u.licenseActiveTotal+u.licenseDisabledTotal),d){const u=o.imputadoHombre+o.condenadoHombre+o.procesadoHombre+o.detenidoHombre,y=o.imputadoMujer+o.condenadoMujer+o.procesadoMujer+o.detenidoMujer,x=u+y;e++,a+=Math.round(d/x*100)}});let t=a/e;V.value=`${parseFloat((t/100*5).toFixed(1))} / 5`},J=async(a=2,e=8)=>{try{c.value=!0,await S(),await A(),await E(),await q(),await z(),G()}catch(t){console.log(t)}};return U(async()=>{c.value=!0;const a=j.user.restrictions.find(t=>t.typeId===2),e=j.user.restrictions.find(t=>t.typeId===3);a?D.value=parseInt(a.restriction):e?P.value=parseInt(e.restriction):(P.value=null,D.value=null),await J(),c.value=!1}),(a,e)=>{const t=W("RouterLink");return p(),M(X,{class:"panel-situacion-carcel"},{default:n(()=>[s(tt,{title:$.value,"section-value":Vt},null,8,["title"]),!c.value&&r.value===9?(p(),w("div",ot,[s(O,{class:"btn-volver",title:"Volver",onExecuteAction:F,disabled:a.blockButton},null,8,["disabled"])])):_("",!0),s(Y,{"active-spin":c.value},null,8,["active-spin"]),!c.value&&R.value.length>0?(p(),w("div",at,[l("div",nt,[r.value==1?(p(),w("div",st,[s(m,{class:"section-donut donut-text",title:"Registro de eventos violentos",subtitle:"","donut-disabled":!0,pointTextfield:f.value},{default:n(()=>[s(t,{to:"registroViolencia",class:"sub-menu--option white btn-small"},{default:n(()=>[lt]),_:1})]),_:1},8,["pointTextfield"]),s(m,{class:"section-donut donut-text",title:"Personal de reinserción",subtitle:"","donut-disabled":!0,pointTextfield:H.value},{default:n(()=>[s(t,{to:"dotacionProfesional",class:"sub-menu--option white btn-small"},{default:n(()=>[it]),_:1})]),_:1},8,["pointTextfield"]),s(m,{class:"section-donut section-licencias",title:"Porcentaje de licencias",subtitle:"",type:2,"point-value":C.value},{default:n(()=>[s(t,{to:"dotacionLicencia",class:"sub-menu--option white btn-small"},{default:n(()=>[ct]),_:1})]),_:1},8,["point-value"])])):_("",!0),r.value==2?(p(),w("div",ut,[s(m,{class:"section-donut section-ocupacion",title:"Tasa de ocupación",subtitle:"","point-value":v.value},{default:n(()=>[s(t,{to:"poblacionImputados",class:"sub-menu--option white btn-small"},{default:n(()=>[rt]),_:1})]),_:1},8,["point-value"]),s(m,{class:"section-donut donut-text section-partes",title:"Partes denuncia ley 20.000",subtitle:"","donut-disabled":!0,pointTextfield:b.value},{default:n(()=>[s(t,{to:"partesDenuncia",class:"sub-menu--option white btn-small"},{default:n(()=>[dt]),_:1})]),_:1},8,["pointTextfield"]),s(m,{class:"section-donut donut-text section-dotacion",title:"Dotación vs población","donut-disabled":!0,pointTextfield:V.value},{default:n(()=>[s(t,{to:"dotacionPoblacion",class:"sub-menu--option white btn-small"},{default:n(()=>[pt]),_:1})]),_:1},8,["pointTextfield"])])):_("",!0)]),l("div",_t,[r.value!==2?(p(),M(L,{key:0,class:"card-information",onClick:e[0]||(e[0]=o=>k(2))},{default:n(()=>[s(t,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[mt,vt]),_:1}),s(t,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[bt,ft]),_:1}),s(t,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[ht,gt]),_:1})]),_:1})):_("",!0),r.value!==1?(p(),M(L,{key:1,class:"card-information",onClick:e[1]||(e[1]=o=>k(1))},{default:n(()=>[s(t,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[yt,xt]),_:1}),s(t,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[wt,Tt]),_:1}),s(t,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[Dt,Pt]),_:1})]),_:1})):_("",!0)])])):_("",!0)]),_:1})}}};export{Lt as default};
