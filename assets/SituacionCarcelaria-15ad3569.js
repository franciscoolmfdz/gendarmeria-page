import{_ as Q}from"./CButton-a8f847be.js";import{g as i,u as U,h as W,i as X,o as p,f as V,j as n,_ as Y,m as s,c as w,a as _,n as Z,b as l,l as D,q as tt}from"./index-c5d31a8d.js";import{_ as m,a as $}from"./CChartDonutSection-16a850f5.js";import{_ as et}from"./CHeaderBar-cec87e9b.js";import{g as ot}from"./dimensionAggression-bca916c6.js";const at={key:0,class:"c-option-volver"},nt={key:1,class:"principal-section section-internos"},st={class:"principal-section"},lt={key:0,class:"principal-section__top top-position-one"},it=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),ct=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),ut=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),rt={key:1,class:"principal-section__top top-position-two"},dt=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),pt=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),_t=l("span",{class:"sub-menu__option--title"}," Ver más ",-1),mt={class:"principal-section__bottom"},vt=l("span",{class:"sub-menu__option--title"},"Tasa de ocupación",-1),bt=l("span",{class:"sub-menu__option--text"},null,-1),ft=l("span",{class:"sub-menu__option--title"},"Partes denuncia ley 20.000",-1),gt=l("span",{class:"sub-menu__option--text"},null,-1),ht=l("span",{class:"sub-menu__option--title"},"Dotación vs población",-1),yt=l("span",{class:"sub-menu__option--text"},null,-1),xt=l("span",{class:"sub-menu__option--title"},"Registro de eventos violentos",-1),wt=l("span",{class:"sub-menu__option--text"},null,-1),Dt=l("span",{class:"sub-menu__option--title"},"Personal de reinserción",-1),Tt=l("span",{class:"sub-menu__option--text"},null,-1),Pt=l("span",{class:"sub-menu__option--title"},"Porcentaje de licencias",-1),Mt=l("span",{class:"sub-menu__option--text"},null,-1),Vt=3,$t={__name:"SituacionCarcelaria",setup(jt){const F=i("Estado de la situación carcelaria"),c=i(!1),j=U(),R=i([{}]);i(0);const r=i(1),T=i(null),P=i(null),g=i(null),v=i(null),C=i(null),I=i(null),b=i(null),M=i(null),H=i(null),f=i(null),A=()=>{r.value=1},k=async o=>{c.value=!0,r.value=o,c.value=!1},h=async o=>{let a={categoryId:3,historySubCategoryId:o,lastPeriod:!0};return a={categoryId:3,historyId:(await D(a)).id},a},B=o=>{f.value=0;for(let a=0;a<o.length;a++){let e=o[a];f.value+=e.quantity}f.value=L(f.value)},L=o=>o.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),"."),S=async()=>{try{const o={regionId:T.value,carcelId:P.value};c.value=!0;const a=await ot(o);c.value=!1,B(a)}catch(o){console.log(o)}},E=async()=>{const o=await h(28);o.embedProfesionals=!0,(await D(o)).items.map(e=>{H.value+=e.profesionalHombre+e.profesionalMujer})},N=async()=>{try{const o=await h(29),a=await tt(o);let e=0;C.value=a.map(t=>{t.tieneLicencia=t.licenseActiveTotal,t.noLicenciaVigente=t.licenseDisabledTotal,t.licenseTotal=t.licenseActiveTotal+t.licenseDisabledTotal;const d=t.tieneLicencia/t.licenseTotal*100;return e+=d,t}),I.value=(e/a.length).toFixed(1)+"%"}catch(o){console.log(o)}},q=o=>o?Math.round(o*100)/100:0,J=async()=>{var o;try{const a=await h(30);a.embedPopulation=!0,v.value=0;let e=await D(a);(o=e==null?void 0:e.items)!=null&&o.length?(g.value=e.items.map(t=>{const d=t.imputadoHombre+t.condenadoHombre+t.procesadoHombre+t.detenidoHombre,u=t.imputadoMujer+t.condenadoMujer+t.procesadoMujer+t.detenidoMujer,y=d+u,x=t.pplMaxMujer+t.pplMaxHombre,K=y&&x?q(y*100/x):0;return v.value+=K,t}),v.value=(v.value/g.value.length).toFixed(1)):g.value=[]}catch(a){console.log(a)}},z=async()=>{var o;try{const a=await h(32);a.embedLawParts=!0,b.value=0;let e=await D(a);(o=e==null?void 0:e.items)!=null&&o.length&&(e.items.map(t=>{t.total=t.dataEnero+t.dataFebrero+t.dataMarzo+t.dataAbril+t.dataMayo+t.dataJunio+t.dataJulio+t.dataAgosto+t.dataSeptiembre+t.dataOctubre+t.dataNoviembre+t.dataDiciembre,b.value+=t.total}),b.value=L(b.value))}catch(a){console.log(a)}},O=()=>{M.value=0;let o=0,a=0;g.value.map(t=>{let d=0;if(C.value.filter(u=>u.carcelId===t.carcelId).map(u=>d+=u.licenseActiveTotal+u.licenseDisabledTotal),d){const u=t.imputadoHombre+t.condenadoHombre+t.procesadoHombre+t.detenidoHombre,y=t.imputadoMujer+t.condenadoMujer+t.procesadoMujer+t.detenidoMujer,x=u+y;a++,o+=Math.round(d/x*100)}});let e=o/a;M.value=`${parseFloat((e/100*5).toFixed(1))} / 5`.replace(".",",")},G=async(o=2,a=8)=>{try{c.value=!0,await S(),await E(),await N(),await J(),await z(),O()}catch(e){console.log(e)}};return W(async()=>{c.value=!0;const o=j.user.restrictions.find(e=>e.typeId===2),a=j.user.restrictions.find(e=>e.typeId===3);o?T.value=parseInt(o.restriction):a?P.value=parseInt(a.restriction):(P.value=null,T.value=null),await G(),c.value=!1}),(o,a)=>{const e=X("RouterLink");return p(),V(Y,{class:"panel-situacion-carcel"},{default:n(()=>[s(et,{title:F.value,"section-value":Vt},null,8,["title"]),!c.value&&r.value===9?(p(),w("div",at,[s(Q,{class:"btn-volver",title:"Volver",onExecuteAction:A,disabled:o.blockButton},null,8,["disabled"])])):_("",!0),s(Z,{"active-spin":c.value},null,8,["active-spin"]),!c.value&&R.value.length>0?(p(),w("div",nt,[l("div",st,[r.value==1?(p(),w("div",lt,[s(m,{class:"section-donut donut-text registro-eventos",title:"Registro de eventos violentos",subtitle:"","donut-disabled":!0,pointTextfield:f.value},{default:n(()=>[s(e,{to:"registroViolencia",class:"sub-menu--option white btn-small"},{default:n(()=>[it]),_:1})]),_:1},8,["pointTextfield"]),s(m,{class:"section-donut donut-text dotacion-personal",title:"Personal de reinserción",subtitle:"","donut-disabled":!0,pointTextfield:H.value},{default:n(()=>[s(e,{to:"dotacionProfesional",class:"sub-menu--option white btn-small"},{default:n(()=>[ct]),_:1})]),_:1},8,["pointTextfield"]),s(m,{class:"section-donut section-licencias",title:"Porcentaje de licencias",subtitle:"",type:2,"point-value":I.value},{default:n(()=>[s(e,{to:"dotacionLicencia",class:"sub-menu--option white btn-small"},{default:n(()=>[ut]),_:1})]),_:1},8,["point-value"])])):_("",!0),r.value==2?(p(),w("div",rt,[s(m,{class:"section-donut section-ocupacion",title:"Tasa de ocupación",subtitle:"","is-percent":!0,type:2,"point-value":v.value},{default:n(()=>[s(e,{to:"poblacionImputados",class:"sub-menu--option white btn-small"},{default:n(()=>[dt]),_:1})]),_:1},8,["point-value"]),s(m,{class:"section-donut donut-text section-partes",title:"Partes denuncia ley 20.000",subtitle:"","donut-disabled":!0,pointTextfield:b.value},{default:n(()=>[s(e,{to:"partesDenuncia",class:"sub-menu--option white btn-small"},{default:n(()=>[pt]),_:1})]),_:1},8,["pointTextfield"]),s(m,{class:"section-donut donut-text section-dotacion",title:"Dotación vs población","donut-disabled":!0,pointTextfield:M.value},{default:n(()=>[s(e,{to:"dotacionPoblacion",class:"sub-menu--option white btn-small"},{default:n(()=>[_t]),_:1})]),_:1},8,["pointTextfield"])])):_("",!0)]),l("div",mt,[r.value!==2?(p(),V($,{key:0,class:"card-information",onClick:a[0]||(a[0]=t=>k(2))},{default:n(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[vt,bt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[ft,gt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[ht,yt]),_:1})]),_:1})):_("",!0),r.value!==1?(p(),V($,{key:1,class:"card-information",onClick:a[1]||(a[1]=t=>k(1))},{default:n(()=>[s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[xt,wt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[Dt,Tt]),_:1}),s(e,{to:"#",class:"sub-menu--option options-bottom"},{default:n(()=>[Pt,Mt]),_:1})]),_:1})):_("",!0)])])):_("",!0)]),_:1})}}};export{$t as default};