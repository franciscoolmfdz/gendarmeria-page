import{_ as C}from"./CButton-f4686af5.js";import{g as c,u as R,h as $,i as P,o as u,f as b,j as t,_ as B,m as s,c as m,a as _,n as D,b as e,l as L}from"./index-23ea3b69.js";import{_ as r,a as y}from"./CChartDonutSection-dad97b0b.js";import{_ as T}from"./CHeaderBar-6cf1dce7.js";const S={key:0,class:"c-option-volver"},E={key:1,class:"principal-section section-internos"},N={class:"principal-section"},F={key:0,class:"principal-section__top top-position-one"},H=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),j=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),A=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),M={key:1,class:"principal-section__top top-position-two"},q=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),z=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),G=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),J={class:"principal-section__bottom"},K=e("span",{class:"sub-menu__option--title"},"Tasa de ocupación imputados Vs Total",-1),O=e("span",{class:"sub-menu__option--text"},null,-1),Q=e("span",{class:"sub-menu__option--title"},"Resumen partes ley 20.000",-1),U=e("span",{class:"sub-menu__option--text"},null,-1),W=e("span",{class:"sub-menu__option--title"},"Dotación vs población",-1),X=e("span",{class:"sub-menu__option--text"},null,-1),Y=e("span",{class:"sub-menu__option--title"},"Registro de eventos",-1),Z=e("span",{class:"sub-menu__option--text"},null,-1),tt=e("span",{class:"sub-menu__option--title"},"Personal de reinserción",-1),st=e("span",{class:"sub-menu__option--text"},null,-1),et=e("span",{class:"sub-menu__option--title"},"Licencias del personal",-1),ot=e("span",{class:"sub-menu__option--text"},null,-1),nt=3,_t={__name:"SituacionCarcelaria",setup(at){const g=c("Estado de la situación carcelaria"),a=c(!1),f=R(),V=c([{}]),v=c(0),l=c(1),p=c(null),d=c(null),k=()=>{l.value=1},h=async n=>{a.value=!0,l.value=n,a.value=!1},I=async()=>{let n={categoryId:3,lastPeriod:!0};return v.value||(v.value=await L(n)),n={categoryId:3,historyId:v.value.id},p.value&&(n.regionId=p.value),d.value&&(n.carcelId=d.value),n},x=async(n=2,i=8)=>{try{a.value=!0;const o=await I()}catch(o){console.log(o)}};return $(async()=>{a.value=!0;const n=f.user.restrictions.find(o=>o.typeId===2),i=f.user.restrictions.find(o=>o.typeId===3);n?p.value=parseInt(n.restriction):i?d.value=parseInt(i.restriction):(d.value=null,p.value=null),await x(),a.value=!1}),(n,i)=>{const o=P("RouterLink");return u(),b(B,{class:"panel-situacion-carcel"},{default:t(()=>[s(T,{title:g.value,"section-value":nt},null,8,["title"]),!a.value&&l.value!==0?(u(),m("div",S,[s(C,{class:"btn-volver",title:"Volver",onExecuteAction:k,disabled:n.blockButton},null,8,["disabled"])])):_("",!0),s(D,{"active-spin":a.value},null,8,["active-spin"]),!a.value&&V.value.length>0?(u(),m("div",E,[e("div",N,[l.value==1?(u(),m("div",F,[s(r,{class:"section-donut",title:"Registro de eventos",subtitle:"","point-value":""},{default:t(()=>[s(o,{to:"registroViolencia",class:"sub-menu--option white btn-small"},{default:t(()=>[H]),_:1})]),_:1}),s(r,{class:"section-donut",title:"Personal de reinserción",subtitle:"","point-value":""},{default:t(()=>[s(o,{to:"dotacionProfesional",class:"sub-menu--option white btn-small"},{default:t(()=>[j]),_:1})]),_:1}),s(r,{class:"section-donut",title:"Licencias del personal",subtitle:"","point-value":""},{default:t(()=>[s(o,{to:"dotacionLicencia",class:"sub-menu--option white btn-small"},{default:t(()=>[A]),_:1})]),_:1})])):_("",!0),l.value==2?(u(),m("div",M,[s(r,{class:"section-donut",title:"Tasa de ocupación imputados Vs Total",subtitle:"","point-value":""},{default:t(()=>[s(o,{to:"poblacionImputados",class:"sub-menu--option white btn-small"},{default:t(()=>[q]),_:1})]),_:1}),s(r,{class:"section-donut",title:"Resumen partes ley 20.000",subtitle:"","point-value":""},{default:t(()=>[s(o,{to:"partesDenuncia",class:"sub-menu--option white btn-small"},{default:t(()=>[z]),_:1})]),_:1}),s(r,{class:"section-donut",title:"Dotación vs población",subtitle:"","point-value":""},{default:t(()=>[s(o,{to:"dotacionPoblacion",class:"sub-menu--option white btn-small"},{default:t(()=>[G]),_:1})]),_:1})])):_("",!0)]),e("div",J,[l.value!==2?(u(),b(y,{key:0,class:"card-information",onClick:i[0]||(i[0]=w=>h(2))},{default:t(()=>[s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[K,O]),_:1}),s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Q,U]),_:1}),s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[W,X]),_:1})]),_:1})):_("",!0),l.value!==1?(u(),b(y,{key:1,class:"card-information",onClick:i[1]||(i[1]=w=>h(1))},{default:t(()=>[s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[Y,Z]),_:1}),s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[tt,st]),_:1}),s(o,{to:"#",class:"sub-menu--option options-bottom"},{default:t(()=>[et,ot]),_:1})]),_:1})):_("",!0)])])):_("",!0)]),_:1})}}};export{_t as default};
