import{_ as c}from"./CChartDonutSection-16a850f5.js";import{i as u,o as i,c as a,b as t,m as s,j as e,a as l}from"./index-c5d31a8d.js";const _={class:"menu-sidebar"},d={class:"menu-point-section"},m={class:"menu-section menu-sidebar-section"},p={class:"menu--content"},b={key:0,class:"collapsible-b menu-internos"},r={class:"menu--content"},h=t("span",{class:"sub-menu__option--title"}," Infraestructura de la cárcel ",-1),f={class:"menu--content"},w=t("span",{class:"sub-menu__option--title"}," Acceso a programas ",-1),v={class:"menu--content"},y=t("span",{class:"sub-menu__option--title"}," Trato con otros internos(as) ",-1),g={class:"menu--content"},I=t("span",{class:"sub-menu__option--title"}," Trato funcionario-interno ",-1),T={class:"menu--content"},V=t("span",{class:"sub-menu__option--title"}," Régimen de la cárcel ",-1),C={class:"menu--content"},P=t("span",{class:"sub-menu__option--title"}," Funcionamiento de la cárcel ",-1),S={class:"menu--content"},R=t("span",{class:"sub-menu__option--title"}," Evaluación general ",-1),N={class:"menu--content"},k=t("span",{class:"sub-menu__option--title"}," Cuestionario salud GHQ-12 ",-1),j={key:1,class:"collapsible-b menu-funcionarios"},D={class:"menu--content"},E=t("span",{class:"sub-menu__option--title"}," Relación con jefatura ",-1),x={class:"menu--content"},B=t("span",{class:"sub-menu__option--title"}," Confianza y valoración ",-1),G={class:"menu--content"},A=t("span",{class:"sub-menu__option--title"}," Apego institucional ",-1),L={class:"menu--content"},z=t("span",{class:"sub-menu__option--title"}," Carga trabajo ",-1),H={class:"menu--content"},Q=t("span",{class:"sub-menu__option--title"}," Motivación en el trabajo",-1),F={class:"menu--content"},M=t("span",{class:"sub-menu__option--title"}," Relación compañeros/as ",-1),O={class:"menu--content"},J=t("span",{class:"sub-menu__option--title"}," Seguridad personal",-1),$={class:"menu--content"},q=t("span",{class:"sub-menu__option--title"}," Organización y orden ",-1),K={class:"menu--content"},U=t("span",{class:"sub-menu__option--title"}," Apoyo a la reinserción",-1),W={class:"menu--content"},X=t("span",{class:"sub-menu__option--title"}," Relación con internos ",-1),Y={class:"menu--content"},Z=t("span",{class:"sub-menu__option--title"}," Conocimiento de normativas ",-1),tt={class:"menu--content"},st=t("span",{class:"sub-menu__option--title"}," Toma de decisiones ",-1),nt={class:"menu--content"},et=t("span",{class:"sub-menu__option--title"}," Cuestionario salud GHQ-12 ",-1),ot={key:2,class:"collapsible-b menu-reinsercion"},it={class:"menu--content"},at=t("span",{class:"sub-menu__option--title"}," Registro de eventos violentos",-1),lt={class:"menu--content"},ct=t("span",{class:"sub-menu__option--title"},"Personal de reinserción",-1),ut={class:"menu--content"},_t=t("span",{class:"sub-menu__option--title"},"Porcentaje de licencias",-1),dt={class:"menu--content"},mt=t("span",{class:"sub-menu__option--title"},"Tasa de ocupación",-1),pt={class:"menu--content"},bt=t("span",{class:"sub-menu__option--title"},"Partes denuncia ley 20.000",-1),rt={class:"menu--content"},ht=t("span",{class:"sub-menu__option--title"},"Dotación vs población",-1),ft={key:3,class:"collapsible-b menu-reinsercion"},wt={class:"menu--content"},vt=t("span",{class:"sub-menu__option--title"}," Porcentaje de reincidencia",-1),yt={class:"menu--content"},gt=t("span",{class:"sub-menu__option--title"}," Internos con IGI",-1),It={key:4,class:"collapsible-b menu-trayectoria"},Tt={class:"menu--content"},Vt=t("span",{class:"sub-menu__option--title"},"Edad del interno ",-1),Ct={class:"menu--content"},Pt=t("span",{class:"sub-menu__option--title"},"Residió en Sename cuando niño ",-1),St={class:"menu--content"},Rt=t("span",{class:"sub-menu__option--title"}," Nivel educacional (calle) ",-1),Nt={class:"menu--content"},kt=t("span",{class:"sub-menu__option--title"},"Nacionalidad del interno ",-1),jt={class:"menu--content"},Dt=t("span",{class:"sub-menu__option--title"},"Encarcelamiento previo",-1),Et={class:"menu--content"},xt=t("span",{class:"sub-menu__option--title"},"Tiempo en cárcel",-1),Bt={class:"menu--content"},Gt=t("span",{class:"sub-menu__option--title"},"Año de egreso",-1),Qt={__name:"subSideNav",props:{pointValue:{type:String},pointTitle:{type:String},pointSubtitle:{type:String},pointLabel:{type:String,default:""},sectionValue:{type:Number,default:!1},pointType:{type:Number,default:1},pointSubtitle:{type:String,default:""},pointIsPercent:{type:Boolean,default:!1},pointDisabled:{type:Boolean,default:!1},circleDisabled:{type:Boolean,default:!1},piePoints:{type:Array,default:null}},setup(o){return(At,Lt)=>{const n=u("RouterLink");return i(),a("div",_,[t("div",d,[s(c,{class:"section-donut primary-element",title:o.pointTitle,subtitle:"","point-value":o.pointValue,"point-subtitle":o.pointSubtitle,"is-percent":o.pointIsPercent,"invert-color":!0,type:o.pointType,"donut-disabled":o.pointDisabled,"point-textfield":o.pointLabel,"circle-disabled":o.circleDisabled,"pie-points":o.piePoints},null,8,["title","point-value","point-subtitle","is-percent","type","donut-disabled","point-textfield","circle-disabled","pie-points"])]),t("div",m,[t("li",p,[o.sectionValue===1?(i(),a("div",b,[t("li",r,[s(n,{to:"vidaInternosInfraestructura",class:"sub-menu--option white btn-small"},{default:e(()=>[h]),_:1})]),t("li",f,[s(n,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:e(()=>[w]),_:1})]),t("li",v,[s(n,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:e(()=>[y]),_:1})]),t("li",g,[s(n,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:e(()=>[I]),_:1})]),t("li",T,[s(n,{to:"regimenCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[V]),_:1})]),t("li",C,[s(n,{to:"funcionamientoCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[P]),_:1})]),t("li",S,[s(n,{to:"vidaInternosGeneral",class:"sub-menu--option white btn-small"},{default:e(()=>[R]),_:1})]),t("li",N,[s(n,{to:"cuestionarioGHQInterno",class:"sub-menu--option white btn-small"},{default:e(()=>[k]),_:1})])])):l("",!0),o.sectionValue===2?(i(),a("div",j,[t("li",D,[s(n,{to:"relacionJefatura",class:"sub-menu--option white btn-small"},{default:e(()=>[E]),_:1})]),t("li",x,[s(n,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:e(()=>[B]),_:1})]),t("li",G,[s(n,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:e(()=>[A]),_:1})]),t("li",L,[s(n,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:e(()=>[z]),_:1})]),t("li",H,[s(n,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:e(()=>[Q]),_:1})]),t("li",F,[s(n,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:e(()=>[M]),_:1})]),t("li",O,[s(n,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:e(()=>[J]),_:1})]),t("li",$,[s(n,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:e(()=>[q]),_:1})]),t("li",K,[s(n,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:e(()=>[U]),_:1})]),t("li",W,[s(n,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:e(()=>[X]),_:1})]),t("li",Y,[s(n,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:e(()=>[Z]),_:1})]),t("li",tt,[s(n,{to:"TomaDecisiones",class:"sub-menu--option white btn-small"},{default:e(()=>[st]),_:1})]),t("li",nt,[s(n,{to:"cuestionarioGHQFuncionario",class:"sub-menu--option white btn-small"},{default:e(()=>[et]),_:1})])])):l("",!0),o.sectionValue===3?(i(),a("div",ot,[t("li",it,[s(n,{to:"registroViolencia",class:"sub-menu--option white btn-small"},{default:e(()=>[at]),_:1})]),t("li",lt,[s(n,{to:"dotacionProfesional",class:"sub-menu--option white btn-small"},{default:e(()=>[ct]),_:1})]),t("li",ut,[s(n,{to:"dotacionLicencia",class:"sub-menu--option white btn-small"},{default:e(()=>[_t]),_:1})]),t("li",dt,[s(n,{to:"poblacionImputados",class:"sub-menu--option white btn-small"},{default:e(()=>[mt]),_:1})]),t("li",pt,[s(n,{to:"partesDenuncia",class:"sub-menu--option white btn-small"},{default:e(()=>[bt]),_:1})]),t("li",rt,[s(n,{to:"dotacionPoblacion",class:"sub-menu--option white btn-small"},{default:e(()=>[ht]),_:1})])])):l("",!0),o.sectionValue===4?(i(),a("div",ft,[t("li",wt,[s(n,{to:"situacionReincidencia",class:"sub-menu--option white btn-small"},{default:e(()=>[vt]),_:1})]),t("li",yt,[s(n,{to:"regimenProcesal",class:"sub-menu--option white btn-small"},{default:e(()=>[gt]),_:1})])])):l("",!0),o.sectionValue===7?(i(),a("div",It,[t("li",Tt,[s(n,{to:"edadInternos",class:"sub-menu--option white btn-small"},{default:e(()=>[Vt]),_:1})]),t("li",Ct,[s(n,{to:"hogarMenores",class:"sub-menu--option white btn-small"},{default:e(()=>[Pt]),_:1})]),t("li",St,[s(n,{to:"nivelEducacional",class:"sub-menu--option white btn-small"},{default:e(()=>[Rt]),_:1})]),t("li",Nt,[s(n,{to:"nacionalidadChilena",class:"sub-menu--option white btn-small"},{default:e(()=>[kt]),_:1})]),t("li",jt,[s(n,{to:"trayectoriaReinsidencia",class:"sub-menu--option white btn-small"},{default:e(()=>[Dt]),_:1})]),t("li",Et,[s(n,{to:"tiempoEncierro",class:"sub-menu--option white btn-small"},{default:e(()=>[xt]),_:1})]),t("li",Bt,[s(n,{to:"terminoEncierro",class:"sub-menu--option white btn-small"},{default:e(()=>[Gt]),_:1})])])):l("",!0)])])])}}};export{Qt as _};
