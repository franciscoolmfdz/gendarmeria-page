import{_ as K}from"./CButton-d269d36d.js";import{g as i,u as Q,h as U,i as W,o as p,f as V,j as n,_ as X,m as s,c as w,a as _,n as Y,b as l,l as T,q as Z}from"./index-551b2772.js";import{_ as m,a as L}from"./CChartDonutSection-ff18cfe1.js";import{_ as tt}from"./CHeaderBar-a35077ae.js";import{g as et}from"./dimensionAggression-84d933cd.js";const ot={key:0,class:"c-option-volver"},at={key:1,class:"principal-section section-internos"},nt={class:"principal-section"},st={key:0,class:"principal-section__top top-position-one"},lt=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),it=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),ct=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),ut={key:1,class:"principal-section__top top-position-two"},rt=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),dt=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),pt=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),_t={class:"principal-section__bottom"},mt=l("span",{class:"sub-menu__option--title"},"Tasa de ocupación",-1),vt=l("span",{class:"sub-menu__option--text"},null,-1),bt=l("span",{class:"sub-menu__option--title"},"Partes denuncia ley 20.000",-1),ft=l("span",{class:"sub-menu__option--text"},null,-1),ht=l("span",{class:"sub-menu__option--title"},"Dotación vs población",-1),gt=l("span",{class:"sub-menu__option--text"},null,-1),yt=l("span",{class:"sub-menu__option--title"},"Registro de eventos violentos",-1),xt=l("span",{class:"sub-menu__option--text"},null,-1),wt=l("span",{class:"sub-menu__option--title"},"Personal de reinserción",-1),Tt=l("span",{class:"sub-menu__option--text"},null,-1),Dt=l("span",{class:"sub-menu__option--title"},"Porcentaje de licencias",-1),Pt=l("span",{class:"sub-menu__option--text"},null,-1),Mt=3,Lt={__name:"SituacionCarcelaria",setup(Vt){const $=i("Estado de la situación carcelaria"),c=i(!1),j=Q(),F=i([{}]);i(0);const r=i(1),D=i(null),P=i(null),h=i(null),v=i(null),I=i(null),C=i(null),b=i(null),M=i(null),H=i(null),f=i(null),R=()=>{r.value=1},k=async a=>{c.value=!0,r.value=a,c.value=!1},g=async a=>{let o={categoryId:3,historySubCategoryId:a,lastPeriod:!0};return o={categoryId:3,historyId:(await T(o)).id},o},A=a=>{f.value=0;for(let o=0;o<a.length;o++){let e=a[o];f.value+=e.quantity}f.value=f.value.toString()},S=async()=>{try{const a={regionId:D.value,carcelId:P.value};c.value=!0;const o=await et(a);c.value=!1,A(o)}catch(a){console.log(a)}},B=async()=>{const a=await g(28);a.embedProfesionals=!0,(await T(a)).items.map(e=>{H.value+=e.profesionalHombre+e.profesionalMujer})},E=async()=>{try{const a=await g(29),o=await Z(a);let e=0;I.value=o.map(t=>{t.tieneLicencia=t.licenseActiveTotal,t.noLicenciaVigente=t.licenseDisabledTotal,t.licenseTotal=t.licenseActiveTotal+t.licenseDisabledTotal;const d=t.tieneLicencia/t.licenseTotal*100;return e+=d,t}),C.value=(e/o.length).toFixed(1)+"%"}catch(a){console.log(a)}},N=a=>a?Math.round(a*100)/100:0,q=async()=>{var a;try{const o=await g(30);o.embedPopulation=!0,v.value=0;let e=await T(o);(a=e==null?void 0:e.items)!=null&&a.length?(h.value=e.items.map(t=>{const d=t.imputadoHombre+t.condenadoHombre+t.procesadoHombre+t.detenidoHombre,u=t.imputadoMujer+t.condenadoMujer+t.procesadoMujer+t.detenidoMujer,y=d+u,x=t.pplMaxMujer+t.pplMaxHombre,G=y&&x?N(y*100/x):0;return v.value+=G,t}),v.value=(v.value/h.value.length).toFixed(1)):h.value=[]}catch(o){console.log(o)}},J=async()=>{var a;try{const o=await g(32);o.embedLawParts=!0,b.value=0;let e=await T(o);(a=e==null?void 0:e.items)!=null&&a.length&&(e.items.map(t=>{t.total=t.dataEnero+t.dataFebrero+t.dataMarzo+t.dataAbril+t.dataMayo+t.dataJunio+t.dataJulio+t.dataAgosto+t.dataSeptiembre+t.dataOctubre+t.dataNoviembre+t.dataDiciembre,b.value+=t.total}),b.value=`Total: ${b.value}`)}catch(o){console.log(o)}},z=()=>{M.value=0;let a=0,o=0;h.value.map(t=>{let d=0;if(I.value.filter(u=>u.carcelId===t.carcelId).map(u=>d+=u.licenseActiveTotal+u.licenseDisabledTotal),d){const u=t.imputadoHombre+t.condenadoHombre+t.procesadoHombre+t.detenidoHombre,y=t.imputadoMujer+t.condenadoMujer+t.procesadoMujer+t.detenidoMujer,x=u+y;o++,a+=Math.round(d/x*100)}});let e=a/o;M.value=`${parseFloat((e/100*5).toFixed(1))} / 5`},O=async(a=2,o=8)=>{try{c.value=!0,await S(),await B(),await E(),await q(),await J(),z()}catch(e){console.log(e)}};return U(async()=>{c.value=!0;const a=j.user.restrictions.find(e=>e.typeId===2),o=j.user.restrictions.find(e=>e.typeId===3);a?D.value=parseInt(a.restriction):o?P.value=parseInt(o.restriction):(P.value=null,D.value=null),await O(),c.value=!1}),(a,o)=>{const e=W("RouterLink");return p(),V(X,{class:"panel-situacion-carcel"},{default:n(()=>[s(tt,{title:$.value,"section-value":Mt},null,8,["title"]),!c.value&&r.value===9?(p(),w("div",ot,[s(K,{class:"btn-volver",title:"Volver",onExecuteAction:R,disabled:a.blockButton},null,8,["disabled"])])):_("",!0),s(Y,{"active-spin":c.value},null,8,["active-spin"]),!c.value&&F.value.length>0?(p(),w("div",at,[l("div",nt,[r.value==1?(p(),w("div",st,[s(m,{class:"section-donut donut-text registro-eventos",title:"Registro de eventos violentos",subtitle:"","donut-disabled":!0,pointTextfield:f.value},{default:n(()=>[s(e,{to:"registroViolencia",class:"sub-menu--option white btn-small"},{default:n(()=>[lt]),_:1})]),_:1},8,["pointTextfield"]),s(m,{class:"section-donut donut-text dotacion-personal",title:"Personal de reinserción",subtitle:"","donut-disabled":!0,pointTextfield:H.value},{default:n(()=>[s(e,{to:"dotacionProfesional",class:"sub-menu--option white btn-small"},{default:n(()=>[it]),_:1})]),_:1},8,["pointTextfield"]),s(m,{class:"section-donut section-licencias",title:"Porcentaje de licencias",subtitle:"",type:2,"point-value":C.value},{default:n(()=>[s(e,{to:"dotacionLicencia",class:"sub-menu--option white btn-small"},{default:n(()=>[ct]),_:1})]),_:1},8,["point-value"])])):_("",!0),r.value==2?(p(),w("div",ut,[s(m,{class:"section-donut section-ocupacion",title:"Tasa de ocupación",subtitle:"","is-percent":!0,type:2,"point-value":v.value},{default:n(()=>[s(e,{to:"poblacionImputados",class:"sub-menu--option white btn-small"},{default:n(()=>[rt]),_:1})]),_:1},8,["point-value"]),s(m,{class:"section-donut donut-text section-partes",title:"Partes denuncia ley 20.000",subtitle:"","donut-disabled":!0,pointTextfield:b.value},{default:n(()=>[s(e,{to:"partesDenuncia",class:"sub-menu--option white btn-small"},{default:n(()=>[dt]),_:1})]),_:1},8,["pointTextfield"]),s(m,{class:"section-donut donut-text section-dotacion",title:"Dotación vs población","donut-disabled":!0,pointTextfield:M.value},{default:n(()=>[s(e,{to:"dotacionPoblacion",class:"sub-menu--option white btn-small"},{default:n(()=>[pt]),_:1})]),_:1},8,["pointTextfield"])])):_("",!0)]),l("div",_t,[r.value!==2?(p(),V(L,{key:0,class:"card-information",onClick:o[0]||(o[0]=t=>k(2))},{default:n(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[mt,vt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[bt,ft]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[ht,gt]),_:1})]),_:1})):_("",!0),r.value!==1?(p(),V(L,{key:1,class:"card-information",onClick:o[1]||(o[1]=t=>k(1))},{default:n(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[yt,xt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[wt,Tt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[Dt,Pt]),_:1})]),_:1})):_("",!0)])])):_("",!0)]),_:1})}}};export{Lt as default};
