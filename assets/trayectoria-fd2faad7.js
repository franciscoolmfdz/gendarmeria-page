import{_ as Q}from"./CButton-5d0fce41.js";import{g as p,u as U,h as W,i as X,o as v,f as A,j as l,_ as Y,l as k,m as a,c as x,a as m,n as Z,b as i}from"./index-c0c6dc58.js";import{_ as f,a as w}from"./CChartDonutSection-22d9718c.js";import{_ as D}from"./CHeaderBar-c7eae6ad.js";import{g as ee}from"./constants-d2d1374d.js";const te={key:0,class:"c-option-volver"},oe={key:1,class:"principal-section section-trayectoria"},ne={class:"principal-section"},se={key:0,class:"principal-section__top top-position-one"},le=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ae=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ie=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ue=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ce={key:1,class:"principal-section__top top-position-two"},re=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),de=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),_e=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),pe={class:"principal-section__bottom"},ve=i("span",{class:"sub-menu__option--title"},"Encarcelamiento previo",-1),fe=i("span",{class:"sub-menu__option--text"},null,-1),me=i("span",{class:"sub-menu__option--title"},"Tiempo en cárcel",-1),be=i("span",{class:"sub-menu__option--text"},null,-1),he=i("span",{class:"sub-menu__option--title"},"Año de egreso",-1),ge=i("span",{class:"sub-menu__option--text"},null,-1),ye=i("span",{class:"sub-menu__option--title"}," Edad del interno",-1),xe=i("span",{class:"sub-menu__option--text"},null,-1),Me=i("span",{class:"sub-menu__option--title"},"Residió en Sename cuando niño",-1),Ve=i("span",{class:"sub-menu__option--text"},null,-1),Ee=i("span",{class:"sub-menu__option--title"},"Nivel educacional (en la calle)",-1),Ae=i("span",{class:"sub-menu__option--text"},null,-1),Ce=i("span",{class:"sub-menu__option--title"},"Nacionalidad del interno (Chileno)",-1),Te=i("span",{class:"sub-menu__option--text"},null,-1),ke=1,Be={__name:"trayectoria",setup(we){const N=p("Antecedentes y trayectorias"),r=p(!1),C=U(),u=p([0,0,0,0,0,0]),M=p(0),_=p(1),h=p(null),g=p(null),I=()=>{_.value=1},P=e=>{let t=0,o=0;for(let n=0;n<e.length;n++)e[n].value>0&&(t+=e[n].value,o++);u.value[0]=Math.round(t/o)+" Años"},R=e=>{let t=0,o=0;for(let s=0;s<e.length;s++)e[s].value===1&&t++,e[s].value===-1&&(o+=e[s].value*-1);const n=e.length-o;u.value[1]=Math.round(V(t*100/n))},$=e=>{let t=0,o=0;for(let s=0;s<e.length;s++)e[s].value===-1?o+=e[s].value*-1:t+=e[s].value;const n=e.length-o;u.value[2]=ee(Math.round(t/n))},B=e=>{let t=0,o=0;for(let s=0;s<e.length;s++)e[s].value===1&&t++,e[s].value===-1&&(o+=e[s].value*-1);const n=e.length-o;u.value[3]=Math.round(V(t*100/n))},S=e=>{let t=0,o=0;for(let s=0;s<e.length;s++)e[s].value===1&&t++,e[s].value===-1&&(o+=e[s].value*-1);const n=e.length-o;u.value[4]=Math.round(V(t*100/n))},z=e=>{let t=0,o=0,n=0,s=0,b=0,c=0;for(let d=0;d<e.length;d++)e[d].value===1&&(t++,c++),e[d].value===2&&(o++,c++),e[d].value===3&&(n++,c++),e[d].value===4&&(s++,c++),e[d].value===-1&&(b+=e[d].value*-1);const y=[Math.round(t*100/c),Math.round(o*100/c),Math.round(n*100/c),Math.round(s*100/c)],E=["Menos de 6 meses","Entre 6 meses y 1 año","Entre 1 y 2 años","Más de 2 años","No asignado"],G=Math.max(...y),K=y.indexOf(G);u.value[5]=E[K]},H=e=>{let t=0,o=0;for(let n=0;n<e.length;n++)e[n].value===1&&(t+=2022,o++),e[n].value===2&&(t+=2023,o++),e[n].value===3&&(t+=2024,o++),e[n].value===4&&(t+=2025,o++);u.value[6]=Math.round(t/o)},J=e=>{let t=0,o=0;for(let s=0;s<e.length;s++)e[s].value===0&&t++,e[s].value===1&&o++;const n=t+o;u.value[7]=Math.round(t*100/n)},j=e=>{let t=0,o=0;for(let n=0;n<e.length;n++)e[n].value>0&&e[n].value>t&&(t+=e[n].value,o++);u.value[8]=Math.round(t/o)},F=e=>{let t=0,o=0,n=0;for(let s=0;s<e.length;s++)e[s].value==1&&t++,e[s].value==2&&o++,e[s].value==3&&n++;t>=o&&t>=n?u.value[9]=1:o>=t&&o>=n?u.value[9]=2:u.value[9]=4},T=async e=>{r.value=!0,_.value=e,r.value=!1},L=async()=>{let e={categoryId:7,lastPeriod:!0};return M.value||(M.value=await k(e)),e={categoryId:7,historyId:M.value.id,embedDetail:!0,subCategoryId:23},h.value&&(e.regionId=h.value),g.value&&(e.carcelId=g.value),e},O=(e,t)=>{t===124&&P(e),t===125&&R(e),t===126&&$(e),t===127&&B(e),t===128&&S(e),t===129&&z(e),t===130&&H(e),t===136&&J(e),t===137&&j(e),t===138&&F(e)},q=async(e=124,t=138)=>{try{r.value=!0;const o=await L();let n=await k(o),s=null;for(let b=e;b<=t;b++){const c=b,y=n.items.filter(E=>E.dimensionId===c);O(y,c)}}catch(o){console.log(o)}},V=e=>e?Math.round(e*100)/100:0;return W(async()=>{r.value=!0;const e=C.user.restrictions.find(o=>o.typeId===2),t=C.user.restrictions.find(o=>o.typeId===3);e?h.value=parseInt(e.restriction):t?g.value=parseInt(t.restriction):(g.value=null,h.value=null),await q(),r.value=!1}),(e,t)=>{const o=X("RouterLink");return v(),A(Y,{class:"panel-trayectoria-internos"},{default:l(()=>[a(D,{title:N.value,"section-value":ke},null,8,["title"]),!r.value&&_.value!==0?(v(),x("div",te,[a(Q,{class:"btn-volver",title:"Volver",onExecuteAction:I,disabled:e.blockButton},null,8,["disabled"])])):m("",!0),a(Z,{"active-spin":r.value},null,8,["active-spin"]),!r.value&&u.value.length>0?(v(),x("div",oe,[i("div",ne,[_.value==1?(v(),x("div",se,[a(f,{class:"section-donut edad-section",title:"Edad del Interno",subtitle:"","donut-disabled":!0,pointTextfield:u.value[0],type:2},{default:l(()=>[a(o,{to:"edadInternos",class:"sub-menu--option white btn-small"},{default:l(()=>[le]),_:1})]),_:1},8,["pointTextfield"]),a(f,{class:"section-donut",title:"Residió en Sename cuando niño",subtitle:"","point-value":u.value[1],type:2,"is-percent":!0},{default:l(()=>[a(o,{to:"hogarMenores",class:"sub-menu--option white btn-small"},{default:l(()=>[ae]),_:1})]),_:1},8,["point-value"]),a(f,{class:"section-donut nivel-educ",title:"Nivel educacional (en la calle)",subtitle:"","donut-disabled":!0,pointTextfield:u.value[2],type:3},{default:l(()=>[a(o,{to:"nivelEducacional",class:"sub-menu--option white btn-small"},{default:l(()=>[ie]),_:1})]),_:1},8,["title","pointTextfield"]),a(f,{class:"section-donut",title:"Nacionalidad del Interno (Chileno)",subtitle:"","point-value":u.value[3],type:2,"is-percent":!0},{default:l(()=>[a(o,{to:"nacionalidadChilena",class:"sub-menu--option white btn-small"},{default:l(()=>[ue]),_:1})]),_:1},8,["title","point-value"])])):m("",!0),_.value==2?(v(),x("div",ce,[a(f,{class:"section-donut",title:"Encarcelamiento previo",subtitle:"","point-value":u.value[4],type:2,"is-percent":!0},{default:l(()=>[a(o,{to:"trayectoriaReinsidencia",class:"sub-menu--option white btn-small"},{default:l(()=>[re]),_:1})]),_:1},8,["point-value"]),a(f,{class:"section-donut donut-tiempo-carcel",title:"Tiempo en Cárcel",subtitle:"","donut-disabled":!0,pointTextfield:u.value[5],type:2},{default:l(()=>[a(o,{to:"tiempoEncierro",class:"sub-menu--option white btn-small"},{default:l(()=>[de]),_:1})]),_:1},8,["pointTextfield"]),a(f,{class:"section-donut donut-salida-carcel",title:"7. Año de egreso",subtitle:"","donut-disabled":!0,pointTextfield:u.value[6],type:2},{default:l(()=>[a(o,{to:"terminoEncierro",class:"sub-menu--option white btn-small"},{default:l(()=>[_e]),_:1})]),_:1},8,["title","pointTextfield"])])):m("",!0)]),i("div",pe,[_.value!==2?(v(),A(w,{key:0,class:"card-information",onClick:t[0]||(t[0]=n=>T(2))},{default:l(()=>[a(o,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[ve,fe]),_:1}),a(o,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[me,be]),_:1}),a(o,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[he,ge]),_:1})]),_:1})):m("",!0),_.value!==1?(v(),A(w,{key:1,class:"card-information",onClick:t[1]||(t[1]=n=>T(1))},{default:l(()=>[a(o,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[ye,xe]),_:1}),a(o,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Me,Ve]),_:1}),a(o,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Ee,Ae]),_:1}),a(o,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Ce,Te]),_:1})]),_:1})):m("",!0)])])):m("",!0)]),_:1})}}};export{Be as default};