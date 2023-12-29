import{s as w,g as i,h as D,i as U,o as V,f as G,j as p,_ as x,x as M,m as c,n as k,b as s,k as y}from"./index-e8734304.js";import{_ as P,a as F}from"./CChartDonutSection-7de17382.js";import{_ as B}from"./CHeaderBar-c6e81200.js";import{_ as N}from"./CTable-8664ffbd.js";import{s as j}from"./filterSituacion-4c9693ba.js";const T="/dmm/dimension-history-program",H=async(a,_)=>{if(a!=null&&a.id){let v=`${T}/${a.id}`;return w(v,"GET",null,_)}let t=T,n=null;return a!=null&&a.regionId&&(n?n=`${n}&regionId=${a.regionId}`:n=`regionId=${a.regionId}`),a!=null&&a.carcelId&&(n?n=`${n}&carcelId=${a.carcelId}`:n=`carcelId=${a.carcelId}`),n&&(t=`${t}?${n}`),w(t,"GET",null,_)};const q={class:"information-section-program"},z=s("span",{class:"sub-menu__option--title"}," Ver más ",-1),K=s("span",{class:"sub-menu__option--title"}," Ver más ",-1),O={class:"information__section"},Q=s("span",{class:"card-title"},"Programas",-1),W=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"PPL :"),s("span",null," Programa de reinserción social para personas privadas de libertad")],-1),X=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"PRS :"),s("span",null," Programa Ministerio del Interior")],-1),Y=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"CET C :"),s("span",null," CET Cerrado")],-1),Z=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"CET S :"),s("span",null," CET Semiabierto")],-1),ee=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"CTA :"),s("span",null," Centro de tratamiento de adicciones")],-1),se=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"SSJJ :"),s("span",null," Secciones Juveniles")],-1),ae=s("div",{class:"card-subsection"},[s("span",{class:"card-subtitle"},"CJ :"),s("span",null," Creciendo Juntos")],-1),oe={class:"content__section table-program"},b=4,le={__name:"ElementosReinsercion",setup(a){const _=j(),t=i(!1);i({id:15,description:"Región Metropolitana de Santiago"});const n=i([]),v=i("Elementos de reinserción"),S=i(null),R=i(null),E=i([{rowReference:"region",description:"Región",class:"region"},{rowReference:"centro",description:"Establecimiento penal"},{rowReference:"programPPL",description:"PPL"},{rowReference:"programPLS",description:"PRS"},{rowReference:"programCETC",description:"CET C"},{rowReference:"programCETSA",description:"CET SA"},{rowReference:"programCTA",description:"CTA"},{rowReference:"programSSJJ",description:"SSJJ"},{rowReference:"programCJ",description:"CJ"},{rowReference:"total",description:"Total en funcionamiento"}]),h=i([]),J=async l=>{if(!_.listadoRegiones.length>0){let e=await M();n.value=e,_.setRegionesList(e)}},$=async(l,e,u)=>{try{t.value=!0;let C=await y({historyId:8,categoryId:b,subCategoryId:24});const r=[0,0,0,0];C.map(o=>{o.valueUsed===1&&(r[0]+=o.pound),o.valueUsed===2&&(r[1]+=o.pound),o.valueUsed===3&&(r[2]+=o.pound),o.valueUsed===4&&(r[3]+=o.pound)});let f=r[0]+r[2];const m=r.reduce((o,I)=>o+I,0);S.value=parseFloat((f/m*100).toFixed(1))??0}catch(g){console.log(g)}finally{u||(t.value=!1)}},L=async(l,e,u)=>{try{let C=await y({historyId:8,categoryId:b,subCategoryId:25}),r=0,f=0,m=0;C.map(d=>{d.valueUsed===1?r+=d.pound:d.valueUsed===3?f+=d.pound:(d.valueUsed===2||d.valueUsed===4)&&(m+=d.pound)});const o=r+f,I=o+m;R.value=parseFloat((o/I*100).toFixed(1))}catch(g){console.log(g)}finally{u||(t.value=!1)}},A=async()=>{try{t.value=!0;const l=await H();h.value=l.map(e=>(e.region={data:e.region.substring(0,3),class:"region"},e.programPPL=e.programPPL?{data:".",class:"data-circle"}:"",e.programPLS=e.programPLS?{data:".",class:"data-circle"}:"",e.programCETC=e.programCETC?{data:".",class:"data-circle"}:"",e.programCETSA=e.programCETSA?{data:".",class:"data-circle"}:"",e.programCTA=e.programCTA?{data:".",class:"data-circle"}:"",e.programSSJJ=e.programSSJJ?{data:".",class:"data-circle"}:"",e.programCJ=e.programCJ?{data:".",class:"data-circle"}:"",e.total={data:e.total,class:"value-total"},e.promedio={data:e.promedio,class:"value-total"},e)),await $(),await L(),t.value=!1}catch(l){console.log(l)}};return D(async()=>{await J(),await A()}),(l,e)=>{const u=U("RouterLink");return V(),G(x,{class:"contenedor-reinsercion"},{default:p(()=>[c(B,{title:v.value,"section-value":b},null,8,["title"]),c(k,{"active-spin":t.value},null,8,["active-spin"]),s("div",q,[c(P,{class:"section-donut",title:"Reinserción IGI","point-value":S.value,type:2,"is-percent":!0},{default:p(()=>[c(u,{to:"situacionReincidencia",class:"sub-menu--option white btn-small"},{default:p(()=>[z]),_:1})]),_:1},8,["point-value"]),c(P,{class:"section-donut",title:"Internos con IGI","point-value":R.value,type:2,"is-percent":!0},{default:p(()=>[c(u,{to:"regimenProcesal",class:"sub-menu--option white btn-small"},{default:p(()=>[K]),_:1})]),_:1},8,["point-value"]),s("div",O,[c(F,{class:"card-information card-program"},{default:p(()=>[Q,W,X,Y,Z,ee,se,ae]),_:1})])]),s("div",oe,[c(N,{columns:E.value,rows:h.value},null,8,["columns","rows"])])]),_:1})}}};export{le as default};
