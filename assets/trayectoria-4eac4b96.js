import{_ as Q}from"./CButton-3fe15e8f.js";import{g as m,u as U,h as W,i as X,o as f,f as C,j as l,_ as Y,l as k,m as a,c as x,a as v,n as Z,b as i}from"./index-47b30902.js";import{_ as r}from"./CChartDonutSection-92782cbd.js";import{_ as D}from"./CHeaderBar-8086222b.js";import{_ as E}from"./CCard-b923f4a4.js";import{g as ee}from"./constants-d2d1374d.js";const te={key:0,class:"c-option-volver"},oe={key:1,class:"principal-section section-trayectoria"},se={class:"principal-section"},ne={key:0,class:"principal-section__top top-position-one"},le=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ae=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ie=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ue=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ce=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),re={key:1,class:"principal-section__top top-position-two"},_e=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),de=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),pe=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),me=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),fe=i("span",{class:"sub-menu__option--title"}," Ver más ",-1),ve={class:"principal-section__bottom"},be=i("span",{class:"sub-menu__option--title"},"Tiempo en cárcel",-1),he=i("span",{class:"sub-menu__option--text"},null,-1),ge=i("span",{class:"sub-menu__option--title"},"Año para salir en libertad",-1),ye=i("span",{class:"sub-menu__option--text"},null,-1),xe=i("span",{class:"sub-menu__option--title"},"Tipo de cárcel",-1),Ve=i("span",{class:"sub-menu__option--text"},null,-1),Me=i("span",{class:"sub-menu__option--title"},"Número programa",-1),Te=i("span",{class:"sub-menu__option--text"},null,-1),Ce=i("span",{class:"sub-menu__option--title"},"Tipo de programa",-1),we=i("span",{class:"sub-menu__option--text"},null,-1),Ae=i("span",{class:"sub-menu__option--title"}," Edad del interno",-1),ke=i("span",{class:"sub-menu__option--text"},null,-1),Ee=i("span",{class:"sub-menu__option--title"},"Residió en Sename cuando niño",-1),Ne=i("span",{class:"sub-menu__option--text"},null,-1),Ie=i("span",{class:"sub-menu__option--title"},"Nivel educacional (en la calle)",-1),Pe=i("span",{class:"sub-menu__option--text"},null,-1),Re=i("span",{class:"sub-menu__option--title"},"Nacionalidad del interno (Chileno)",-1),$e=i("span",{class:"sub-menu__option--text"},null,-1),Be=i("span",{class:"sub-menu__option--title"},"Reincidencia en la cárcel",-1),Se=i("span",{class:"sub-menu__option--text"},null,-1),ze=1,Ge={__name:"trayectoria",setup(He){const N=m("Antecedentes y trayectorias"),_=m(!1),w=U(),u=m([0,0,0,0,0,0]),V=m(0),p=m(1),h=m(null),g=m(null),I=()=>{p.value=1},P=e=>{let o=0,t=0;for(let s=0;s<e.length;s++)e[s].value>0&&(o+=e[s].value,t++);u.value[0]=Math.round(o/t)+" Años"},R=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value===1&&o++,e[n].value===-1&&(t+=e[n].value*-1);const s=e.length-t;u.value[1]=Math.round(M(o*100/s))},$=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value===-1?t+=e[n].value*-1:o+=e[n].value;const s=e.length-t;u.value[2]=ee(Math.round(o/s))},B=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value===1&&o++,e[n].value===-1&&(t+=e[n].value*-1);const s=e.length-t;u.value[3]=Math.round(M(o*100/s))},S=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value===1&&o++,e[n].value===-1&&(t+=e[n].value*-1);const s=e.length-t;u.value[4]=Math.round(M(o*100/s))},z=e=>{let o=0,t=0,s=0,n=0,b=0,c=0;for(let d=0;d<e.length;d++)e[d].value===1&&(o++,c++),e[d].value===2&&(t++,c++),e[d].value===3&&(s++,c++),e[d].value===4&&(n++,c++),e[d].value===-1&&(b+=e[d].value*-1);const y=[Math.round(o*100/c),Math.round(t*100/c),Math.round(s*100/c),Math.round(n*100/c)],T=["Menos de 6 meses","Entre 6 meses y 1 año","Entre 1 y 2 años","Más de 2 años","No asignado"],G=Math.max(...y),K=y.indexOf(G);u.value[5]=T[K]},H=e=>{let o=0,t=0;for(let s=0;s<e.length;s++)e[s].value===1&&(o+=2022,t++),e[s].value===2&&(o+=2023,t++),e[s].value===3&&(o+=2024,t++),e[s].value===4&&(o+=2025,t++);u.value[6]=Math.round(o/t)},J=e=>{let o=0,t=0;for(let n=0;n<e.length;n++)e[n].value===0&&o++,e[n].value===1&&t++;const s=o+t;u.value[7]=Math.round(o*100/s)},j=e=>{let o=0,t=0;for(let s=0;s<e.length;s++)e[s].value>0&&e[s].value>o&&(o+=e[s].value,t++);u.value[8]=Math.round(o/t)},F=e=>{let o=0,t=0,s=0;for(let n=0;n<e.length;n++)e[n].value==1&&o++,e[n].value==2&&t++,e[n].value==3&&s++;o>=t&&o>=s?u.value[9]=1:t>=o&&t>=s?u.value[9]=2:u.value[9]=4},A=async e=>{_.value=!0,p.value=e,_.value=!1},L=async()=>{let e={categoryId:7,lastPeriod:!0};return V.value||(V.value=await k(e)),e={categoryId:7,historyId:V.value.id,embedDetail:!0,subCategoryId:23},h.value&&(e.regionId=h.value),g.value&&(e.carcelId=g.value),e},O=(e,o)=>{o===124&&P(e),o===125&&R(e),o===126&&$(e),o===127&&B(e),o===128&&S(e),o===129&&z(e),o===130&&H(e),o===136&&J(e),o===137&&j(e),o===138&&F(e)},q=async(e=124,o=138)=>{try{_.value=!0;const t=await L();let s=await k(t),n=null;for(let b=e;b<=o;b++){const c=b,y=s.items.filter(T=>T.dimensionId===c);O(y,c)}}catch(t){console.log(t)}},M=e=>e?Math.round(e*100)/100:0;return W(async()=>{_.value=!0;const e=w.user.restrictions.find(t=>t.typeId===2),o=w.user.restrictions.find(t=>t.typeId===3);e?h.value=parseInt(e.restriction):o?g.value=parseInt(o.restriction):(g.value=null,h.value=null),await q(),_.value=!1}),(e,o)=>{const t=X("RouterLink");return f(),C(Y,{class:"panel-trayectoria-internos"},{default:l(()=>[a(D,{title:N.value,"section-value":ze},null,8,["title"]),!_.value&&p.value!==0?(f(),x("div",te,[a(Q,{class:"btn-volver",title:"Volver",onExecuteAction:I,disabled:e.blockButton},null,8,["disabled"])])):v("",!0),a(Z,{"active-spin":_.value},null,8,["active-spin"]),!_.value&&u.value.length>0?(f(),x("div",oe,[i("div",se,[p.value==1?(f(),x("div",ne,[a(r,{class:"section-donut edad-section",title:"Edad del Interno",subtitle:"","donut-disabled":!0,pointTextfield:u.value[0],type:2},{default:l(()=>[a(t,{to:"edadInternos",class:"sub-menu--option white btn-small"},{default:l(()=>[le]),_:1})]),_:1},8,["pointTextfield"]),a(r,{class:"section-donut",title:"Residió en Sename cuando niño",subtitle:"","point-value":u.value[1],type:2,"is-percent":!0},{default:l(()=>[a(t,{to:"hogarMenores",class:"sub-menu--option white btn-small"},{default:l(()=>[ae]),_:1})]),_:1},8,["point-value"]),a(r,{class:"section-donut nivel-educ",title:"Nivel educacional (en la calle)",subtitle:"","donut-disabled":!0,pointTextfield:u.value[2],type:3},{default:l(()=>[a(t,{to:"nivelEducacional",class:"sub-menu--option white btn-small"},{default:l(()=>[ie]),_:1})]),_:1},8,["title","pointTextfield"]),a(r,{class:"section-donut",title:"Nacionalidad del Interno (Chileno)",subtitle:"","point-value":u.value[3],type:2,"is-percent":!0},{default:l(()=>[a(t,{to:"nacionalidadChilena",class:"sub-menu--option white btn-small"},{default:l(()=>[ue]),_:1})]),_:1},8,["title","point-value"]),a(r,{class:"section-donut",title:"Reincidencia en la Cárcel",subtitle:"","point-value":u.value[4],type:2,"is-percent":!0},{default:l(()=>[a(t,{to:"trayectoriaReinsidencia",class:"sub-menu--option white btn-small"},{default:l(()=>[ce]),_:1})]),_:1},8,["point-value"])])):v("",!0),p.value==2?(f(),x("div",re,[a(r,{class:"section-donut donut-tiempo-carcel",title:"Tiempo en Cárcel",subtitle:"","donut-disabled":!0,pointTextfield:u.value[5],type:2},{default:l(()=>[a(t,{to:"tiempoEncierro",class:"sub-menu--option white btn-small"},{default:l(()=>[_e]),_:1})]),_:1},8,["pointTextfield"]),a(r,{class:"section-donut donut-salida-carcel",title:"7. Año para salir en libertad",subtitle:"","donut-disabled":!0,pointTextfield:u.value[6],type:2},{default:l(()=>[a(t,{to:"terminoEncierro",class:"sub-menu--option white btn-small"},{default:l(()=>[de]),_:1})]),_:1},8,["title","pointTextfield"]),a(r,{class:"section-donut",title:"Tipo de carcel",subtitle:"","point-value":u.value[7],type:2},{default:l(()=>[a(t,{to:"tipoCarcel",class:"sub-menu--option white btn-small"},{default:l(()=>[pe]),_:1})]),_:1},8,["point-value"]),a(r,{class:"section-donut",title:"Número de programas",subtitle:"","point-value":u.value[8],type:4},{default:l(()=>[a(t,{to:"numeroProgramas",class:"sub-menu--option white btn-small"},{default:l(()=>[me]),_:1})]),_:1},8,["point-value"]),a(r,{class:"section-donut",title:"Tipo de programa",subtitle:"","point-value":u.value[9],type:4},{default:l(()=>[a(t,{to:"tipoPrograma",class:"sub-menu--option white btn-small"},{default:l(()=>[fe]),_:1})]),_:1},8,["point-value"])])):v("",!0)]),i("div",ve,[p.value!==2?(f(),C(E,{key:0,class:"card-information",onClick:o[0]||(o[0]=s=>A(2))},{default:l(()=>[a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[be,he]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[ge,ye]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[xe,Ve]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Me,Te]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Ce,we]),_:1})]),_:1})):v("",!0),p.value!==1?(f(),C(E,{key:1,class:"card-information",onClick:o[1]||(o[1]=s=>A(1))},{default:l(()=>[a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Ae,ke]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Ee,Ne]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Ie,Pe]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Re,$e]),_:1}),a(t,{to:"#",class:"sub-menu--option options-bottom"},{default:l(()=>[Be,Se]),_:1})]),_:1})):v("",!0)])])):v("",!0)]),_:1})}}};export{Ge as default};
