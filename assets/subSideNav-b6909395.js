import{_ as c}from"./CChartDonutSection-1f0f6d69.js";import{i as u,o as i,c as a,b as t,m as s,j as e,a as l}from"./index-35ecef89.js";const _={class:"menu-sidebar"},m={class:"menu-point-section"},d={class:"menu-section menu-sidebar-section"},p={class:"menu--content"},r={key:0,class:"collapsible-b menu-internos"},b={class:"menu--content"},h=t("span",{class:"sub-menu__option--title"}," Infraestructura de la Cárcel ",-1),f={class:"menu--content"},w=t("span",{class:"sub-menu__option--title"}," Acceso a programas ",-1),v={class:"menu--content"},y=t("span",{class:"sub-menu__option--title"}," Trato con otros internos(as) ",-1),g={class:"menu--content"},C=t("span",{class:"sub-menu__option--title"}," Trato funcionario-interno ",-1),T={class:"menu--content"},I=t("span",{class:"sub-menu__option--title"}," Régimen de la Cárcel ",-1),S={class:"menu--content"},N=t("span",{class:"sub-menu__option--title"}," Funcionamiento de la carcel ",-1),R={class:"menu--content"},V=t("span",{class:"sub-menu__option--title"}," Evaluación general ",-1),k={class:"menu--content"},j=t("span",{class:"sub-menu__option--title"}," Cuestionario salud GHQ-12 ",-1),x={key:1,class:"collapsible-b menu-funcionarios"},E={class:"menu--content"},B=t("span",{class:"sub-menu__option--title"}," Relación con jefatura ",-1),G={class:"menu--content"},P=t("span",{class:"sub-menu__option--title"}," Confianza y valoración ",-1),z={class:"menu--content"},A=t("span",{class:"sub-menu__option--title"}," Apego institucional ",-1),H={class:"menu--content"},L=t("span",{class:"sub-menu__option--title"}," Carga trabajo ",-1),Q={class:"menu--content"},D=t("span",{class:"sub-menu__option--title"}," Motivación en el trabajo",-1),F={class:"menu--content"},M=t("span",{class:"sub-menu__option--title"}," Relación compañeros/as ",-1),O={class:"menu--content"},J=t("span",{class:"sub-menu__option--title"}," Seguridad personal",-1),$={class:"menu--content"},q=t("span",{class:"sub-menu__option--title"}," Organización y orden ",-1),K={class:"menu--content"},U=t("span",{class:"sub-menu__option--title"}," Apoyo a la reinserción",-1),W={class:"menu--content"},X=t("span",{class:"sub-menu__option--title"}," Relación con internos ",-1),Y={class:"menu--content"},Z=t("span",{class:"sub-menu__option--title"}," Conocimiento de normativas ",-1),tt={class:"menu--content"},st=t("span",{class:"sub-menu__option--title"}," Toma de decisiones ",-1),nt={class:"menu--content"},et=t("span",{class:"sub-menu__option--title"}," Cuestionario salud GHQ-12 ",-1),ot={key:2,class:"collapsible-b menu-trayectoria"},it={class:"menu--content"},at=t("span",{class:"sub-menu__option--title"},"Edad del interno ",-1),lt={class:"menu--content"},ct=t("span",{class:"sub-menu__option--title"},"Residió en Sename cuando niño ",-1),ut={class:"menu--content"},_t=t("span",{class:"sub-menu__option--title"}," Nivel educacional (en la calle) ",-1),mt={class:"menu--content"},dt=t("span",{class:"sub-menu__option--title"},"Nacionalidad del interno ",-1),pt={class:"menu--content"},rt=t("span",{class:"sub-menu__option--title"},"Reincidencia en la cárcel ",-1),bt={class:"menu--content"},ht=t("span",{class:"sub-menu__option--title"},"Tiempo en cárcel",-1),ft={class:"menu--content"},wt=t("span",{class:"sub-menu__option--title"},"Año para salir en libertad",-1),vt={class:"menu--content"},yt=t("span",{class:"sub-menu__option--title"},"Tipo de cárcel",-1),gt={class:"menu--content"},Ct=t("span",{class:"sub-menu__option--title"},"Número de programas",-1),Tt={class:"menu--content"},It=t("span",{class:"sub-menu__option--title"},"Tipo de programa",-1),kt={__name:"subSideNav",props:{pointValue:{type:String},pointTitle:{type:String},pointSubtitle:{type:String},pointLabel:{type:String,default:""},sectionValue:{type:Number,default:!1},pointType:{type:Number,default:1},pointSubtitle:{type:String,default:""},pointIsPercent:{type:Boolean,default:!1},pointDisabled:{type:Boolean,default:!1}},setup(o){return(St,Nt)=>{const n=u("RouterLink");return i(),a("div",_,[t("div",m,[s(c,{class:"section-donut primary-element",title:o.pointTitle,subtitle:"","point-value":o.pointValue,"point-subtitle":o.pointSubtitle,"is-percent":o.pointIsPercent,"invert-color":!0,type:o.pointType,"donut-disabled":o.pointDisabled,"point-textfield":o.pointLabel},null,8,["title","point-value","point-subtitle","is-percent","type","donut-disabled","point-textfield"])]),t("div",d,[t("li",p,[o.sectionValue===1?(i(),a("div",r,[t("li",b,[s(n,{to:"vidaInternosInfraestructura",class:"sub-menu--option white btn-small"},{default:e(()=>[h]),_:1})]),t("li",f,[s(n,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:e(()=>[w]),_:1})]),t("li",v,[s(n,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:e(()=>[y]),_:1})]),t("li",g,[s(n,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:e(()=>[C]),_:1})]),t("li",T,[s(n,{to:"regimenCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[I]),_:1})]),t("li",S,[s(n,{to:"funcionamientoCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[N]),_:1})]),t("li",R,[s(n,{to:"vidaInternosGeneral",class:"sub-menu--option white btn-small"},{default:e(()=>[V]),_:1})]),t("li",k,[s(n,{to:"cuestionarioGHQInterno",class:"sub-menu--option white btn-small"},{default:e(()=>[j]),_:1})])])):l("",!0),o.sectionValue===2?(i(),a("div",x,[t("li",E,[s(n,{to:"relacionJefatura",class:"sub-menu--option white btn-small"},{default:e(()=>[B]),_:1})]),t("li",G,[s(n,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:e(()=>[P]),_:1})]),t("li",z,[s(n,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:e(()=>[A]),_:1})]),t("li",H,[s(n,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:e(()=>[L]),_:1})]),t("li",Q,[s(n,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:e(()=>[D]),_:1})]),t("li",F,[s(n,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:e(()=>[M]),_:1})]),t("li",O,[s(n,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:e(()=>[J]),_:1})]),t("li",$,[s(n,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:e(()=>[q]),_:1})]),t("li",K,[s(n,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:e(()=>[U]),_:1})]),t("li",W,[s(n,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:e(()=>[X]),_:1})]),t("li",Y,[s(n,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:e(()=>[Z]),_:1})]),t("li",tt,[s(n,{to:"TomaDecisiones",class:"sub-menu--option white btn-small"},{default:e(()=>[st]),_:1})]),t("li",nt,[s(n,{to:"cuestionarioGHQFuncionario",class:"sub-menu--option white btn-small"},{default:e(()=>[et]),_:1})])])):l("",!0),o.sectionValue===7?(i(),a("div",ot,[t("li",it,[s(n,{to:"edadInternos",class:"sub-menu--option white btn-small"},{default:e(()=>[at]),_:1})]),t("li",lt,[s(n,{to:"hogarMenores",class:"sub-menu--option white btn-small"},{default:e(()=>[ct]),_:1})]),t("li",ut,[s(n,{to:"nivelEducacional",class:"sub-menu--option white btn-small"},{default:e(()=>[_t]),_:1})]),t("li",mt,[s(n,{to:"nacionalidadChilena",class:"sub-menu--option white btn-small"},{default:e(()=>[dt]),_:1})]),t("li",pt,[s(n,{to:"trayectoriaReinsidencia",class:"sub-menu--option white btn-small"},{default:e(()=>[rt]),_:1})]),t("li",bt,[s(n,{to:"tiempoEncierro",class:"sub-menu--option white btn-small"},{default:e(()=>[ht]),_:1})]),t("li",ft,[s(n,{to:"terminoEncierro",class:"sub-menu--option white btn-small"},{default:e(()=>[wt]),_:1})]),t("li",vt,[s(n,{to:"tipoCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[yt]),_:1})]),t("li",gt,[s(n,{to:"numeroProgramas",class:"sub-menu--option white btn-small"},{default:e(()=>[Ct]),_:1})]),t("li",Tt,[s(n,{to:"tipoPrograma",class:"sub-menu--option white btn-small"},{default:e(()=>[It]),_:1})])])):l("",!0)])])])}}};export{kt as _};
