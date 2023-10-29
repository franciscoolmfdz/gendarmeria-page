import{g as m,u as B,h as G,i as H,o as C,f as R,j as o,_ as $,k as N,l as t,m as Q,c as T,b as s,t as _,a as A}from"./index-1482005a.js";import{_ as E}from"./CHeaderBar-46b15ae3.js";import{_ as r}from"./CCard-582b8853.js";const F={key:0,class:"principal-section section-internos"},L={class:"principal-section__top"},M={class:"point-section"},j={class:"card-puntuacion"},U=s("div",{class:"content-section"},[s("span",{class:"card-title"},"Infraestructura carcelaria"),s("span",{class:"card-body"},"Consulta a los internos sobre la infraestructura carcelaria")],-1),q={class:"footer-section"},z=s("span",{class:"sub-menu__option--title"}," Ver más ",-1),J={class:"point-section"},K={class:"card-puntuacion"},O=s("div",{class:"content-section"},[s("span",{class:"card-title"},"Acceso a programas"),s("span",{class:"card-body"},"Consulta a los internos sobre el acceso a programas de los internos")],-1),W={class:"footer-section"},X=s("span",{class:"sub-menu__option--title"}," Ver más ",-1),Y={class:"point-section"},Z={class:"card-puntuacion"},ss=s("div",{class:"content-section"},[s("span",{class:"card-title"},"Trato entre los internos"),s("span",{class:"card-body"},"Consulta a los internos sobre la vida carcelaria")],-1),ts={class:"footer-section"},os=s("span",{class:"sub-menu__option--title"}," Ver más ",-1),ns={class:"point-section"},es={class:"card-puntuacion"},as=s("div",{class:"content-section"},[s("span",{class:"card-title"},"Trato con funcionarios"),s("span",{class:"card-body"},"Consulta a los internos sobre la relación con los funcionarios")],-1),is={class:"footer-section"},cs=s("span",{class:"sub-menu__option--title"}," Ver más ",-1),ls={class:"principal-section__bottom"},rs=s("span",{class:"sub-menu__option--title"},"Información personal",-1),us=s("span",{class:"sub-menu__option--text"}," Consulta sobre información personal de internos ",-1),_s=s("span",{class:"sub-menu__option--title"},"Régimen carcelario",-1),ds=s("span",{class:"sub-menu__option--text"}," Consulta sobre el régimen carcelario ",-1),ps=s("span",{class:"sub-menu__option--title"},"funcionamiento de la carcel",-1),ms=s("span",{class:"sub-menu__option--text"}," Consulta sobre funcionamiento de la carcel",-1),fs=s("span",{class:"sub-menu__option--title"},"Evaluación general",-1),bs=s("span",{class:"sub-menu__option--text"}," Consulta de evaluación general ",-1),hs=s("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),vs=s("span",{class:"sub-menu__option--text"}," Consulta de resultados cuestionario de Salud GHQ-12 ",-1),gs=1,Ss={__name:"VidaInternos",setup(ys){const I=m("Calidad de vida de los internos"),l=m(!1),e=B(),i=m([]),x=a=>a>0?Math.round(a*100)/100:0,V=async(a,f,n)=>{var b,h;try{l.value=!0;let d=((b=e==null?void 0:e.penitenciaria)==null?void 0:b.id)??null,w=((h=e==null?void 0:e.penitenciaria)==null?void 0:h.description)??null;n&&(d=a,w=f);const g=12;if(g&&d){let S=await N({historyId:g,carcelId:d,categoryId:1}),c=null;for(let p=2;p<=5;p++){const k=p,y=S.filter(u=>u.subCategoryId===k&&u.valueUsed===1),D=y.length;c=y.reduce((u,P)=>u+P.promPound,0),c=c/D,c=x(c),i.value.push(c)}}}catch(v){console.log(v)}finally{l.value=!1}};return G(async()=>{l.value=!0,e.carcelesSelected&&e.carcelesSelected.length>0&&await e.carcelesSelected.map(async a=>await V(a.id,a.description,!0))}),(a,f)=>{const n=H("RouterLink");return C(),R($,{class:"panel-vida-internos"},{default:o(()=>[t(E,{title:I.value,"section-value":gs},null,8,["title"]),t(Q,{"active-spin":l.value},null,8,["active-spin"]),!l.value&&i.value.length>0?(C(),T("div",F,[s("div",L,[t(r,{class:"card-information primary-element"},{default:o(()=>[s("div",M,[s("span",j,_(i.value[0]),1)]),U,s("div",q,[t(n,{to:"vidaInternosInfraestructura",class:"sub-menu--option white btn-small"},{default:o(()=>[z]),_:1})])]),_:1}),t(r,{class:"card-information"},{default:o(()=>[s("div",J,[s("span",K,_(i.value[1]),1)]),O,s("div",W,[t(n,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:o(()=>[X]),_:1})])]),_:1}),t(r,{class:"card-information"},{default:o(()=>[s("div",Y,[s("span",Z,_(i.value[2]),1)]),ss,s("div",ts,[t(n,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:o(()=>[os]),_:1})])]),_:1}),t(r,{class:"card-information"},{default:o(()=>[s("div",ns,[s("span",es,_(i.value[3]),1)]),as,s("div",is,[t(n,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:o(()=>[cs]),_:1})])]),_:1})]),s("div",ls,[t(r,{class:"card-information"},{default:o(()=>[t(n,{to:"vidaInternosPersonal",class:"sub-menu--option options-bottom"},{default:o(()=>[rs,us]),_:1}),t(n,{to:"regimenCarcel",class:"sub-menu--option options-bottom"},{default:o(()=>[_s,ds]),_:1}),t(n,{to:"funcionamientoCarcel",class:"sub-menu--option options-bottom"},{default:o(()=>[ps,ms]),_:1}),t(n,{to:"vidaInternosGeneral",class:"sub-menu--option options-bottom"},{default:o(()=>[fs,bs]),_:1}),t(n,{to:"cuestionarioGHQInterno",class:"sub-menu--option options-bottom"},{default:o(()=>[hs,vs]),_:1})]),_:1})])])):A("",!0)]),_:1})}}};export{Ss as default};