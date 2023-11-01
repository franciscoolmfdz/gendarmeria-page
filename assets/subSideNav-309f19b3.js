import{_ as c}from"./CChartDonutSection-fb456158.js";import{i as u,o as i,c as a,b as t,m as s,j as e,a as l}from"./index-16ad8c53.js";const _={class:"menu-sidebar"},m={class:"menu-point-section"},d={class:"menu-section menu-sidebar-section"},p={class:"menu--content"},b={key:0,class:"collapsible-b"},r={class:"menu--content"},h=t("span",{class:"sub-menu__option--title"}," Infraestructura ",-1),f={class:"menu--content"},w=t("span",{class:"sub-menu__option--title"}," Acceso a programas ",-1),v={class:"menu--content"},y=t("span",{class:"sub-menu__option--title"}," Trato internos ",-1),g={class:"menu--content"},C=t("span",{class:"sub-menu__option--title"}," Trato funcionarios ",-1),I={class:"menu--content"},S=t("span",{class:"sub-menu__option--title"}," Regimen carcel ",-1),V={class:"menu--content"},N=t("span",{class:"sub-menu__option--title"}," Funcionamiento carcel ",-1),T={class:"menu--content"},R=t("span",{class:"sub-menu__option--title"}," Evaluación general ",-1),k={class:"menu--content"},E=t("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),j={key:1,class:"collapsible-b"},G={class:"menu--content"},H=t("span",{class:"sub-menu__option--title"}," Relación Jefatura ",-1),Q={class:"menu--content"},x=t("span",{class:"sub-menu__option--title"}," Confianza y valoración ",-1),z={class:"menu--content"},A=t("span",{class:"sub-menu__option--title"}," Apego institucional ",-1),B={class:"menu--content"},F=t("span",{class:"sub-menu__option--title"}," Carga trabajo ",-1),J={class:"menu--content"},L=t("span",{class:"sub-menu__option--title"}," Motivación en el trabajo",-1),M={class:"menu--content"},O=t("span",{class:"sub-menu__option--title"}," Relación compañeros/as ",-1),D={class:"menu--content"},P=t("span",{class:"sub-menu__option--title"}," Seguridad personal",-1),$={class:"menu--content"},q=t("span",{class:"sub-menu__option--title"}," Organización y orden ",-1),K={class:"menu--content"},U=t("span",{class:"sub-menu__option--title"}," Apoyo a la reinserción",-1),W={class:"menu--content"},X=t("span",{class:"sub-menu__option--title"}," Relación con internos ",-1),Y={class:"menu--content"},Z=t("span",{class:"sub-menu__option--title"}," Conocimiento normativas ",-1),tt={class:"menu--content"},st=t("span",{class:"sub-menu__option--title"}," Toma de desiciones ",-1),nt={class:"menu--content"},et=t("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),ot={key:2,class:"collapsible-b"},it={class:"menu--content"},at=t("span",{class:"sub-menu__option--title"}," 1. Edad internos ",-1),lt={class:"menu--content"},ct=t("span",{class:"sub-menu__option--title"},"2. ¿estuvo en un hogar del Sename? ",-1),ut={class:"menu--content"},_t=t("span",{class:"sub-menu__option--title"}," 3. Nivel educacional ",-1),mt={class:"menu--content"},dt=t("span",{class:"sub-menu__option--title"}," 4. ¿Es Chileno?",-1),pt={class:"menu--content"},bt=t("span",{class:"sub-menu__option--title"}," 5. ¿Había estado preso(a)? ",-1),rt={class:"menu--content"},ht=t("span",{class:"sub-menu__option--title"},"6. ¿Cuánto tiempo lleva en cárcel?",-1),ft={class:"menu--content"},wt=t("span",{class:"sub-menu__option--title"},"7. ¿Qué año saldría en libertad?",-1),It={__name:"subSideNav",props:{pointValue:{type:String},pointTitle:{type:String},pointSubtitle:{type:String},sectionValue:{type:Number,default:!1},type:{type:Number,default:1}},setup(o){return(vt,yt)=>{const n=u("RouterLink");return i(),a("div",_,[t("div",m,[s(c,{class:"section-donut primary-element",title:o.pointTitle,subtitle:"","point-value":o.pointValue,"invert-color":!0,type:o.type},null,8,["title","point-value","type"])]),t("div",d,[t("li",p,[o.sectionValue===1?(i(),a("div",b,[t("li",r,[s(n,{to:"vidaInternosInfraestructura",class:"sub-menu--option white btn-small"},{default:e(()=>[h]),_:1})]),t("li",f,[s(n,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:e(()=>[w]),_:1})]),t("li",v,[s(n,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:e(()=>[y]),_:1})]),t("li",g,[s(n,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:e(()=>[C]),_:1})]),t("li",I,[s(n,{to:"regimenCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[S]),_:1})]),t("li",V,[s(n,{to:"funcionamientoCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[N]),_:1})]),t("li",T,[s(n,{to:"vidaInternosGeneral",class:"sub-menu--option white btn-small"},{default:e(()=>[R]),_:1})]),t("li",k,[s(n,{to:"cuestionarioGHQInterno",class:"sub-menu--option white btn-small"},{default:e(()=>[E]),_:1})])])):l("",!0),o.sectionValue===2?(i(),a("div",j,[t("li",G,[s(n,{to:"relacionJefatura",class:"sub-menu--option white btn-small"},{default:e(()=>[H]),_:1})]),t("li",Q,[s(n,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:e(()=>[x]),_:1})]),t("li",z,[s(n,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:e(()=>[A]),_:1})]),t("li",B,[s(n,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:e(()=>[F]),_:1})]),t("li",J,[s(n,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:e(()=>[L]),_:1})]),t("li",M,[s(n,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:e(()=>[O]),_:1})]),t("li",D,[s(n,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:e(()=>[P]),_:1})]),t("li",$,[s(n,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:e(()=>[q]),_:1})]),t("li",K,[s(n,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:e(()=>[U]),_:1})]),t("li",W,[s(n,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:e(()=>[X]),_:1})]),t("li",Y,[s(n,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:e(()=>[Z]),_:1})]),t("li",tt,[s(n,{to:"TomaDesiciones",class:"sub-menu--option white btn-small"},{default:e(()=>[st]),_:1})]),t("li",nt,[s(n,{to:"cuestionarioGHQFuncionario",class:"sub-menu--option white btn-small"},{default:e(()=>[et]),_:1})])])):l("",!0),o.sectionValue===7?(i(),a("div",ot,[t("li",it,[s(n,{to:"edadInternos",class:"sub-menu--option white btn-small"},{default:e(()=>[at]),_:1})]),t("li",lt,[s(n,{to:"hogarMenores",class:"sub-menu--option white btn-small"},{default:e(()=>[ct]),_:1})]),t("li",ut,[s(n,{to:"nivelEducacional",class:"sub-menu--option white btn-small"},{default:e(()=>[_t]),_:1})]),t("li",mt,[s(n,{to:"nacionalidadChilena",class:"sub-menu--option white btn-small"},{default:e(()=>[dt]),_:1})]),t("li",pt,[s(n,{to:"trayectoriaReinsidencia",class:"sub-menu--option white btn-small"},{default:e(()=>[bt]),_:1})]),t("li",rt,[s(n,{to:"tiempoEncierro",class:"sub-menu--option white btn-small"},{default:e(()=>[ht]),_:1})]),t("li",ft,[s(n,{to:"terminoEncierro",class:"sub-menu--option white btn-small"},{default:e(()=>[wt]),_:1})])])):l("",!0)])])])}}};export{It as _};
