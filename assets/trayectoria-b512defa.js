import{_ as Q}from"./CButton-9a1b4a0a.js";import{g as m,u as U,h as W,i as X,o as v,f as A,j as l,_ as Y,l as k,m as a,c as x,a as f,n as Z,b as i}from"./index-71331f0e.js";import{_,a as w}from"./CChartDonutSection-8f8edfee.js";import{_ as D}from"./CHeaderBar-b2149a61.js";import{g as ee}from"./constants-d2d1374d.js";const te={key:0,class:"c-option-volver"},oe={key:1,class:"principal-section section-trayectoria"},ne={class:"principal-section"},se={key:0,class:"principal-section__top top-position-one"},le=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ae=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ie=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ue=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ce={key:1,class:"principal-section__top top-position-two"},re=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),de=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),_e=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),pe=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),me={class:"principal-section__bottom"},ve=i("span",{class:"sub-menu__option--title"},"Encarcelamiento previo",-1),fe=i("span",{class:"sub-menu__option--text"},null,-1),be=i("span",{class:"sub-menu__option--title"},"Tiempo en cárcel",-1),he=i("span",{class:"sub-menu__option--text"},null,-1),ge=i("span",{class:"sub-menu__option--title"},"Año de egreso",-1),ye=i("span",{class:"sub-menu__option--text"},null,-1),xe=i("span",{class:"sub-menu__option--title"},"Número programa",-1),Me=i("span",{class:"sub-menu__option--text"},null,-1),Ve=i("span",{class:"sub-menu__option--title"}," Edad del interno",-1),Ee=i("span",{class:"sub-menu__option--text"},null,-1),Ae=i("span",{class:"sub-menu__option--title"},"Residió en Sename cuando niño",-1),Ce=i("span",{class:"sub-menu__option--text"},null,-1),Te=i("span",{class:"sub-menu__option--title"},"Nivel educacional (en la calle)",-1),ke=i("span",{class:"sub-menu__option--text"},null,-1),we=i("span",{class:"sub-menu__option--title"},"Nacionalidad del interno (Chileno)",-1),Ne=i("span",{class:"sub-menu__option--text"},null,-1),Ie=1,He={__name:"trayectoria",setup(Pe){const N=m("Antecedentes y trayectorias"),r=m(!1),C=U(),u=m([0,0,0,0,0,0]),M=m(0),p=m(1),h=m(null),g=m(null),I=()=>{p.value=1},P=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value>0&&(o+=e[n].value,t++);u.value[0]=Math.round(o/t)+" Años"},R=e=>{let o=0,t=0;for(let s=0;s<e.length;s++)e[s].value===1&&o++,e[s].value===-1&&(t+=e[s].value*-1);const n=e.length-t;u.value[1]=Math.round(V(o*100/n))},$=e=>{let o=0,t=0;for(let s=0;s<e.length;s++)e[s].value===-1?t+=e[s].value*-1:o+=e[s].value;const n=e.length-t;u.value[2]=ee(Math.round(o/n))},B=e=>{let o=0,t=0;for(let s=0;s<e.length;s++)e[s].value===1&&o++,e[s].value===-1&&(t+=e[s].value*-1);const n=e.length-t;u.value[3]=Math.round(V(o*100/n))},S=e=>{let o=0,t=0;for(let s=0;s<e.length;s++)e[s].value===1&&o++,e[s].value===-1&&(t+=e[s].value*-1);const n=e.length-t;u.value[4]=Math.round(V(o*100/n))},z=e=>{let o=0,t=0,n=0,s=0,b=0,c=0;for(let d=0;d<e.length;d++)e[d].value===1&&(o++,c++),e[d].value===2&&(t++,c++),e[d].value===3&&(n++,c++),e[d].value===4&&(s++,c++),e[d].value===-1&&(b+=e[d].value*-1);const y=[Math.round(o*100/c),Math.round(t*100/c),Math.round(n*100/c),Math.round(s*100/c)],E=["Menos de 6 meses","Entre 6 meses y 1 año","Entre 1 y 2 años","Más de 2 años","No asignado"],G=Math.max(...y),K=y.indexOf(G);u.value[5]=E[K]},H=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value===1&&(o+=2022,t++),e[n].value===2&&(o+=2023,t++),e[n].value===3&&(o+=2024,t++),e[n].value===4&&(o+=2025,t++);u.value[6]=Math.round(o/t)},J=e=>{let o=0,t=0;for(let s=0;s<e.length;s++)e[s].value===0&&o++,e[s].value===1&&t++;const n=o+t;u.value[7]=Math.round(o*100/n)},j=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value>0&&e[n].value>o&&(o+=e[n].value,t++);u.value[8]=Math.round(o/t)},F=e=>{let o=0,t=0,n=0;for(let s=0;s<e.length;s++)e[s].value==1&&o++,e[s].value==2&&t++,e[s].value==3&&n++;o>=t&&o>=n?u.value[9]=1:t>=o&&t>=n?u.value[9]=2:u.value[9]=4},T=async e=>{r.value=!0,p.value=e,r.value=!1},L=async()=>{let e={categoryId:7,lastPeriod:!0};return M.value||(M.value=await k(e)),e={categoryId:7,historyId:M.value.id,embedDetail:!0,subCategoryId:23},h.value&&(e.regionId=h.value),g.value&&(e.carcelId=g.value),e},O=(e,o)=>{o===124&&P(e),o===125&&R(e),o===126&&$(e),o===127&&B(e),o===128&&S(e),o===129&&z(e),o===130&&H(e),o===136&&J(e),o===137&&j(e),o===138&&F(e)},q=async(e=124,o=138)=>{try{r.value=!0;const t=await L();let n=await k(t),s=null;for(let b=e;b<=o;b++){const c=b,y=n.items.filter(E=>E.dimensionId===c);O(y,c)}}catch(t){console.log(t)}},V=e=>e?Math.round(e*100)/100:0;return W(async()=>{r.value=!0;const e=C.user.restrictions.find(t=>t.typeId===2),o=C.user.restrictions.find(t=>t.typeId===3);e?h.value=parseInt(e.restriction):o?g.value=parseInt(o.restriction):(g.value=null,h.value=null),await q(),r.value=!1}),(e,o)=>{const t=X("RouterLink");return v(),A(Y,{class:"panel-trayectoria-internos"},{default:l(()=>[a(D,{title:N.value,"section-value":Ie},null,8,["title"]),!r.value&&p.value!==0?(v(),x("div",te,[a(Q,{class:"btn-volver",title:"Volver",onExecuteAction:I,disabled:e.blockButton},null,8,["disabled"])])):f("",!0),a(Z,{"active-spin":r.value},null,8,["active-spin"]),!r.value&&u.value.length>0?(v(),x("div",oe,[i("div",ne,[p.value==1?(v(),x("div",se,[a(_,{class:"section-donut edad-section",title:"Edad del Interno",subtitle:"","donut-disabled":!0,pointTextfield:u.value[0],type:2},{default:l(()=>[a(t,{to:"edadInternos",class:"sub-menu--option white btn-small"},{default:l(()=>[le]),_:1})]),_:1},8,["pointTextfield"]),a(_,{class:"section-donut",title:"Residió en Sename cuando niño",subtitle:"","point-value":u.value[1],type:2,"is-percent":!0},{default:l(()=>[a(t,{to:"hogarMenores",class:"sub-menu--option white btn-small"},{default:l(()=>[ae]),_:1})]),_:1},8,["point-value"]),a(_,{class:"section-donut nivel-educ",title:"Nivel educacional (en la calle)",subtitle:"","donut-disabled":!0,pointTextfield:u.value[2],type:3},{default:l(()=>[a(t,{to:"nivelEducacional",class:"sub-menu--option white btn-small"},{default:l(()=>[ie]),_:1})]),_:1},8,["title","pointTextfield"]),a(_,{class:"section-donut",title:"Nacionalidad del Interno (Chileno)",subtitle:"","point-value":u.value[3],type:2,"is-percent":!0},{default:l(()=>[a(t,{to:"nacionalidadChilena",class:"sub-menu--option white btn-small"},{default:l(()=>[ue]),_:1})]),_:1},8,["title","point-value"])])):f("",!0),p.value==2?(v(),x("div",ce,[a(_,{class:"section-donut",title:"Encarcelamiento previo",subtitle:"","point-value":u.value[4],type:2,"is-percent":!0},{default:l(()=>[a(t,{to:"trayectoriaReinsidencia",class:"sub-menu--option white btn-small"},{default:l(()=>[re]),_:1})]),_:1},8,["point-value"]),a(_,{class:"section-donut donut-tiempo-carcel",title:"Tiempo en Cárcel",subtitle:"","donut-disabled":!0,pointTextfield:u.value[5],type:2},{default:l(()=>[a(t,{to:"tiempoEncierro",class:"sub-menu--option white btn-small"},{default:l(()=>[de]),_:1})]),_:1},8,["pointTextfield"]),a(_,{class:"section-donut donut-salida-carcel",title:"7. Año de egreso",subtitle:"","donut-disabled":!0,pointTextfield:u.value[6],type:2},{default:l(()=>[a(t,{to:"terminoEncierro",class:"sub-menu--option white btn-small"},{default:l(()=>[_e]),_:1})]),_:1},8,["title","pointTextfield"]),a(_,{class:"section-donut",title:"Número de programas",subtitle:"","point-value":u.value[8],type:4},{default:l(()=>[a(t,{to:"numeroProgramas",class:"sub-menu--option white btn-small"},{default:l(()=>[pe]),_:1})]),_:1},8,["point-value"])])):f("",!0)]),i("div",me,[p.value!==2?(v(),A(w,{key:0,class:"card-information",onClick:o[0]||(o[0]=n=>T(2))},{default:l(()=>[a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[ve,fe]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[be,he]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[ge,ye]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[xe,Me]),_:1})]),_:1})):f("",!0),p.value!==1?(v(),A(w,{key:1,class:"card-information",onClick:o[1]||(o[1]=n=>T(1))},{default:l(()=>[a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Ve,Ee]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Ae,Ce]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Te,ke]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[we,Ne]),_:1})]),_:1})):f("",!0)])])):f("",!0)]),_:1})}}};export{He as default};