import{s as R,u as x,g as c,h as F,i as G,o as V,f as k,j as g,_ as B,x as j,y as M,l as I,m as p,n as N,b as e}from"./index-ec234649.js";import{_ as b,a as U}from"./CChartDonutSection-452a9270.js";import{_ as H}from"./CHeaderBar-928d38c3.js";import{_ as q}from"./CTable-9ffd256d.js";import{s as z}from"./filterSituacion-46d41b52.js";const P="/dmm/dimension-history-program",K=async(a,_)=>{if(a!=null&&a.id){let m=`${P}/${a.id}`;return R(m,"GET",null,_)}let i=P,r=null;return a!=null&&a.regionId&&(r?r=`${r}&regionId=${a.regionId}`:r=`regionId=${a.regionId}`),a!=null&&a.carcelId&&(r?r=`${r}&carcelId=${a.carcelId}`:r=`carcelId=${a.carcelId}`),a!=null&&a.historyId&&(r?r=`${r}&historyId=${a.historyId}`:r=`historyId=${a.historyId}`),r&&(i=`${i}?${r}`),R(i,"GET",null,_)};const O={class:"information-section-program"},Q=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),W=e("span",{class:"sub-menu__option--title"}," Ver más ",-1),X={class:"information__section"},Y=e("span",{class:"card-title"},"Programas",-1),Z=e("div",{class:"card-subsection"},[e("span",{class:"card-subtitle"},"PPL :"),e("span",null," Programa de reinserción social para personas privadas de libertad")],-1),ee=e("div",{class:"card-subsection"},[e("span",{class:"card-subtitle"},"PRS :"),e("span",null," Programa Ministerio del Interior")],-1),se=e("div",{class:"card-subsection"},[e("span",{class:"card-subtitle"},"CET C :"),e("span",null," CET Cerrado")],-1),oe=e("div",{class:"card-subsection"},[e("span",{class:"card-subtitle"},"CET S :"),e("span",null," CET Semiabierto")],-1),ae=e("div",{class:"card-subsection"},[e("span",{class:"card-subtitle"},"CTA :"),e("span",null," Centro de tratamiento de adicciones")],-1),te=e("div",{class:"card-subsection"},[e("span",{class:"card-subtitle"},"SSJJ :"),e("span",null," Secciones Juveniles")],-1),re=e("div",{class:"card-subsection"},[e("span",{class:"card-subtitle"},"CJ :"),e("span",null," Creciendo Juntos")],-1),ne={class:"content__section table-program"},ie=4,ge={__name:"ElementosReinsercion",setup(a){const _=x(),i=z(),r=c(!1),m=c([]),f=c([]),S=c("Elementos de reinserción"),h=c(null),C=c(null),l=c(null),d=c(null),w=c([{rowReference:"region",description:"Región",class:"region"},{rowReference:"carcel",description:"Establecimiento penal"},{rowReference:"programPPL",description:"PPL"},{rowReference:"programPLS",description:"PRS"},{rowReference:"programCETC",description:"CET C"},{rowReference:"programCETSA",description:"CET SA"},{rowReference:"programCTA",description:"CTA"},{rowReference:"programSSJJ",description:"SSJJ"},{rowReference:"programCJ",description:"CJ"},{rowReference:"total",description:"Total en funcionamiento"}]),y=c([]),T=async()=>{if(!i.listadoRegiones.value||i.listadoRegiones.length>0){let o=await j();m.value=o,i.setRegionesList(o)}else m.value=i.listadoRegiones;if(!i.listadoCarceles.value||i.listadoCarceles.length>0){let o=await M();f.value=o,i.setCarcelesList(o)}else f.value=i.listadoCarceles},E=async()=>{const o={categoryId:4,historySubCategoryId:25,lastPeriod:!0};l.value&&(o.regionId=l.value),d.value&&(o.carcelId=d.value);const t={historyId:(await I(o)).id,embed:"reinsercion",procesalTypeId:1,regimenStateId:2};l.value&&(t.regionId=l.value),d.value&&(t.carcelId=d.value);const u=await I(t);$(u.items),J(u.items)},$=o=>{try{const n=o.length,t=o.filter(u=>u.condenaPrevia).length;h.value=parseFloat((t/n*100).toFixed(1))??0}catch(n){console.log(n)}},J=o=>{try{const n=o.length,t=o.filter(u=>u.igi).length;C.value=parseFloat((t/n*100).toFixed(1))}catch(n){console.log(n)}},L=async()=>{try{const t={historyId:(await I({categoryId:4,historySubCategoryId:26,lastPeriod:!0})).id};l.value&&(t.regionId=l.value),d.value&&(t.carcelId=d.value);const u=await K(t);y.value=u.map(s=>{const A=m.value.find(v=>v.id===s.regionId);s.region={data:A.shortDescription,class:"region"};const D=f.value.find(v=>v.id===s.carcelId);return s.carcel=D.description,s.programPPL=s.programPPL?{data:".",class:"data-circle"}:"",s.programPLS=s.programPLS?{data:".",class:"data-circle"}:"",s.programCETC=s.programCETC?{data:".",class:"data-circle"}:"",s.programCETSA=s.programCETSA?{data:".",class:"data-circle"}:"",s.programCTA=s.programCTA?{data:".",class:"data-circle"}:"",s.programSSJJ=s.programSSJJ?{data:".",class:"data-circle"}:"",s.programCJ=s.programCJ?{data:".",class:"data-circle"}:"",s.total={data:s.total,class:"value-total"},s.promedio={data:s.promedio,class:"value-total"},s})}catch(o){console.log(o)}};return F(async()=>{r.value=!0;const o=_.user.restrictions.find(t=>t.typeId===2),n=_.user.restrictions.find(t=>t.typeId===3);o?l.value=parseInt(o.restriction):n?d.value=parseInt(n.restriction):(d.value=null,l.value=null);try{await T(),await L(),await E()}catch(t){console.log(t)}finally{r.value=!1}}),(o,n)=>{const t=G("RouterLink");return V(),k(B,{class:"contenedor-reinsercion"},{default:g(()=>[p(H,{title:S.value,"section-value":ie},null,8,["title"]),p(N,{"active-spin":r.value},null,8,["active-spin"]),e("div",O,[p(b,{class:"section-donut",title:"Porcentaje de reincidencia","point-value":h.value,type:2,"is-percent":!0},{default:g(()=>[p(t,{to:"situacionReincidencia",class:"sub-menu--option white btn-small"},{default:g(()=>[Q]),_:1})]),_:1},8,["point-value"]),p(b,{class:"section-donut",title:"Internos con IGI","point-value":C.value,type:2,"is-percent":!0},{default:g(()=>[p(t,{to:"regimenProcesal",class:"sub-menu--option white btn-small"},{default:g(()=>[W]),_:1})]),_:1},8,["point-value"]),e("div",X,[p(U,{class:"card-information card-program"},{default:g(()=>[Y,Z,ee,se,oe,ae,te,re]),_:1})])]),e("div",ne,[p(q,{columns:w.value,rows:y.value},null,8,["columns","rows"])])]),_:1})}}};export{ge as default};
