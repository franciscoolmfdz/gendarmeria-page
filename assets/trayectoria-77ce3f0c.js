import{_ as J}from"./CButton-1f0b74cb.js";import{g as _,u as L,r as Q,h as j,i as G,o as p,f as V,j as l,_ as K,l as w,m as a,c as h,a as v,n as O,b as i}from"./index-d5d29b93.js";import{_ as d}from"./CChartDonutSection-be9d7933.js";import{_ as U}from"./CHeaderBar-c99abf49.js";import{_ as x}from"./CCard-fa753b4a.js";const W={key:0,class:"c-option-volver"},X={key:1,class:"principal-section section-internos"},Y={class:"principal-section"},Z={key:0,class:"principal-section__top top-position-one"},D=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ee=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),te=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),oe=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),se={key:1,class:"principal-section__top top-position-two"},ne=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),le=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ae=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ie={class:"principal-section__bottom"},ue=i("span",{class:"sub-menu__option--title"},"5. Antes de estar en esta cárcel, ¿había estado preso(a)?",-1),ce=i("span",{class:"sub-menu__option--text"},null,-1),re=i("span",{class:"sub-menu__option--title"},"6. ¿Cuánto tiempo lleva en esta cárcel?",-1),_e=i("span",{class:"sub-menu__option--text"},null,-1),pe=i("span",{class:"sub-menu__option--title"},"7. ¿Qué año saldría en libertad (cumplido)?",-1),de=i("span",{class:"sub-menu__option--text"},null,-1),ve=i("span",{class:"sub-menu__option--title"}," 1. ¿Cuántos años tiene actualmente?",-1),me=i("span",{class:"sub-menu__option--text"},null,-1),fe=i("span",{class:"sub-menu__option--title"},"2. Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",-1),be=i("span",{class:"sub-menu__option--text"},null,-1),he=i("span",{class:"sub-menu__option--title"},"3. ¿Hasta qué curso llegó (en la calle)?",-1),ge=i("span",{class:"sub-menu__option--text"},null,-1),ye=i("span",{class:"sub-menu__option--title"},"4. ¿Es chileno?",-1),Ve=i("span",{class:"sub-menu__option--text"},null,-1),Ce=1,$e={__name:"trayectoria",setup(ke){const E=_("Trayectoria de los internos"),c=_(!1),C=L(),u=_([0,0,0,0,0,0]),g=_(0),r=_(1),m=_(null),f=_(null),A=()=>{r.value=1},$=e=>{let o=0,t=0;for(let s=0;s<e.length;s++)e[s].value>0&&(o+=e[s].value,t++);u.value[0]=parseInt(o/t)},H=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value===1&&o++,e[n].value===-1&&(t+=e[n].value*-1);const s=e.length-t;u.value[1]=b(o*100/s)},R=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value===-1?t+=e[n].value*-1:o+=e[n].value;const s=e.length-t;u.value[2]=parseInt(o/s)},B=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value===1&&o++,e[n].value===-1&&(t+=e[n].value*-1);const s=e.length-t;u.value[3]=b(o*100/s)},P=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value===1&&o++,e[n].value===-1&&(t+=e[n].value*-1);const s=e.length-t;u.value[4]=b(o*100/s)},N=e=>{let o=0,t=0;for(let s=0;s<e.length;s++)e[s].value===1&&(o+=0,t++),e[s].value===2&&(o+=1,t++),e[s].value===3&&(o+=1.6,t++),e[s].value===4&&(o+=2.6,t++);u.value[5]=b(o/t)},S=e=>{let o=0,t=0;for(let s=0;s<e.length;s++)e[s].value===1&&(o+=2022,t++),e[s].value===2&&(o+=2023,t++),e[s].value===3&&(o+=2024,t++),e[s].value===4&&(o+=2025,t++);u.value[6]=parseInt(o/t)};Q([]);const k=async e=>{c.value=!0,r.value=e,c.value=!1},T=async()=>{let e={categoryId:7,lastPeriod:!0};return g.value||(g.value=await w(e)),e={categoryId:7,historyId:g.value.id,embedDetail:!0,subCategoryId:23},m.value&&(e.regionId=m.value),f.value&&(e.carcelId=f.value),e},z=(e,o)=>{o===124&&$(e),o===125&&H(e),o===126&&R(e),o===127&&B(e),o===128&&P(e),o===129&&N(e),o===130&&S(e)},M=async(e=124,o=130)=>{try{c.value=!0;const t=await T();let s=await w(t),n=null;for(let y=e;y<=o;y++){const I=y,q=s.items.filter(F=>F.dimensionId===I);z(q,I)}}catch(t){console.log(t)}},b=e=>e?Math.round(e*100)/100:0;return j(async()=>{c.value=!0;const e=C.user.restrictions.find(t=>t.typeId===2),o=C.user.restrictions.find(t=>t.typeId===3);e?m.value=parseInt(e.restriction):o?f.value=parseInt(o.restriction):(f.value=null,m.value=null),await M(),c.value=!1}),(e,o)=>{const t=G("RouterLink");return p(),V(K,{class:"panel-trayectoria-internos"},{default:l(()=>[a(U,{title:E.value,"section-value":Ce},null,8,["title"]),!c.value&&r.value!==0?(p(),h("div",W,[a(J,{class:"btn-volver",title:"Volver",onExecuteAction:A,disabled:e.blockButton},null,8,["disabled"])])):v("",!0),a(O,{"active-spin":c.value},null,8,["active-spin"]),!c.value&&u.value.length>0?(p(),h("div",X,[i("div",Y,[r.value==1?(p(),h("div",Z,[a(d,{class:"section-donut",title:"1. ¿Cuántos años tiene actualmente?",subtitle:"","point-value":u.value[0],type:2},{default:l(()=>[a(t,{to:"edadInternos",class:"sub-menu--option white btn-small"},{default:l(()=>[D]),_:1})]),_:1},8,["title","point-value"]),a(d,{class:"section-donut",title:"2. Cuando niño, ¿estuvo en algún Hogar de menores o del Sename?",subtitle:"","point-value":u.value[1],type:2},{default:l(()=>[a(t,{to:"hogarMenores",class:"sub-menu--option white btn-small"},{default:l(()=>[ee]),_:1})]),_:1},8,["title","point-value"]),a(d,{class:"section-donut",title:"3. ¿Hasta qué curso llegó (en la calle)?",subtitle:"","point-value":u.value[2],type:2},{default:l(()=>[a(t,{to:"nivelEducacional",class:"sub-menu--option white btn-small"},{default:l(()=>[te]),_:1})]),_:1},8,["title","point-value"]),a(d,{class:"section-donut",title:"4. ¿Es chileno?",subtitle:"","point-value":u.value[3],type:2},{default:l(()=>[a(t,{to:"nacionalidadChilena",class:"sub-menu--option white btn-small"},{default:l(()=>[oe]),_:1})]),_:1},8,["title","point-value"])])):v("",!0),r.value==2?(p(),h("div",se,[a(d,{class:"section-donut",title:"5. Antes de estar en esta cárcel, ¿había estado preso(a)?",subtitle:"","point-value":u.value[4],type:2},{default:l(()=>[a(t,{to:"trayectoriaReinsidencia",class:"sub-menu--option white btn-small"},{default:l(()=>[ne]),_:1})]),_:1},8,["title","point-value"]),a(d,{class:"section-donut",title:"6. ¿Cuánto tiempo lleva en esta cárcel?",subtitle:"","point-value":u.value[5],type:2},{default:l(()=>[a(t,{to:"tiempoEncierro",class:"sub-menu--option white btn-small"},{default:l(()=>[le]),_:1})]),_:1},8,["title","point-value"]),a(d,{class:"section-donut",title:"7. ¿Qué año saldría en libertad (cumplido)?",subtitle:"","point-value":u.value[6],type:2},{default:l(()=>[a(t,{to:"terminoEncierro",class:"sub-menu--option white btn-small"},{default:l(()=>[ae]),_:1})]),_:1},8,["title","point-value"])])):v("",!0)]),i("div",ie,[r.value!==2?(p(),V(x,{key:0,class:"card-information",onClick:o[0]||(o[0]=s=>k(2))},{default:l(()=>[a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[ue,ce]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[re,_e]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[pe,de]),_:1})]),_:1})):v("",!0),r.value!==1?(p(),V(x,{key:1,class:"card-information",onClick:o[1]||(o[1]=s=>k(1))},{default:l(()=>[a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[ve,me]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[fe,be]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[he,ge]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[ye,Ve]),_:1})]),_:1})):v("",!0)])])):v("",!0)]),_:1})}}};export{$e as default};