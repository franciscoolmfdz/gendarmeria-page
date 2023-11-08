import{_ as c}from"./CChartDonutSection-22723229.js";import{i as u,o as i,c as a,b as t,m as s,j as e,a as l}from"./index-cac83eb8.js";const _={class:"menu-sidebar"},m={class:"menu-point-section"},d={class:"menu-section menu-sidebar-section"},p={class:"menu--content"},r={key:0,class:"collapsible-b menu-internos"},b={class:"menu--content"},h=t("span",{class:"sub-menu__option--title"}," Infraestructura de la Cárcel ",-1),f={class:"menu--content"},w=t("span",{class:"sub-menu__option--title"}," Acceso a programas ",-1),v={class:"menu--content"},g=t("span",{class:"sub-menu__option--title"}," Trato con otros Internos(as) ",-1),y={class:"menu--content"},C=t("span",{class:"sub-menu__option--title"}," Trato Funcionario-Interno ",-1),I={class:"menu--content"},T=t("span",{class:"sub-menu__option--title"}," Régimen de la Cárcel ",-1),S={class:"menu--content"},N=t("span",{class:"sub-menu__option--title"}," Funcionamiento de la carcel ",-1),R={class:"menu--content"},V=t("span",{class:"sub-menu__option--title"}," Evaluación general ",-1),k={class:"menu--content"},P=t("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),j={key:1,class:"collapsible-b menu-funcionarios"},E={class:"menu--content"},G=t("span",{class:"sub-menu__option--title"}," Relación con Jefatura ",-1),x={class:"menu--content"},z=t("span",{class:"sub-menu__option--title"}," Confianza y valoración ",-1),B={class:"menu--content"},F=t("span",{class:"sub-menu__option--title"}," Apego institucional ",-1),H={class:"menu--content"},Q=t("span",{class:"sub-menu__option--title"}," Carga trabajo ",-1),A={class:"menu--content"},J=t("span",{class:"sub-menu__option--title"}," Motivación en el trabajo",-1),L={class:"menu--content"},M=t("span",{class:"sub-menu__option--title"}," Relación compañeros/as ",-1),O={class:"menu--content"},D=t("span",{class:"sub-menu__option--title"}," Seguridad personal",-1),$={class:"menu--content"},q=t("span",{class:"sub-menu__option--title"}," Organización y orden ",-1),K={class:"menu--content"},U=t("span",{class:"sub-menu__option--title"}," Apoyo a la reinserción",-1),W={class:"menu--content"},X=t("span",{class:"sub-menu__option--title"}," Relación con internos ",-1),Y={class:"menu--content"},Z=t("span",{class:"sub-menu__option--title"}," Conocimiento normativas ",-1),tt={class:"menu--content"},st=t("span",{class:"sub-menu__option--title"}," Toma de desiciones ",-1),nt={class:"menu--content"},et=t("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),ot={key:2,class:"collapsible-b menu-trayectoria"},it={class:"menu--content"},at=t("span",{class:"sub-menu__option--title"}," 1. Edad del Interno ",-1),lt={class:"menu--content"},ct=t("span",{class:"sub-menu__option--title"},"2. Residió en Sename cuando niño ",-1),ut={class:"menu--content"},_t=t("span",{class:"sub-menu__option--title"}," 3. Nivel educacional (en la calle) ",-1),mt={class:"menu--content"},dt=t("span",{class:"sub-menu__option--title"}," 4.Nacionalidad del Interno ",-1),pt={class:"menu--content"},rt=t("span",{class:"sub-menu__option--title"}," 5. Reincidencia en la Cárcel ",-1),bt={class:"menu--content"},ht=t("span",{class:"sub-menu__option--title"},"6. Tiempo en Cárcel",-1),ft={class:"menu--content"},wt=t("span",{class:"sub-menu__option--title"},"P. Tipo de carcel",-1),vt={class:"menu--content"},gt=t("span",{class:"sub-menu__option--title"},"N. Número de programas",-1),yt={class:"menu--content"},Ct=t("span",{class:"sub-menu__option--title"},"J. Tipo de programa",-1),Rt={__name:"subSideNav",props:{pointValue:{type:String},pointTitle:{type:String},pointSubtitle:{type:String},sectionValue:{type:Number,default:!1},pointType:{type:Number,default:1},pointSubtitle:{type:String,default:""},pointIsPercent:{type:Boolean,default:!1}},setup(o){return(It,Tt)=>{const n=u("RouterLink");return i(),a("div",_,[t("div",m,[s(c,{class:"section-donut primary-element",title:o.pointTitle,subtitle:"","point-value":o.pointValue,"point-subtitle":o.pointSubtitle,"is-percent":o.pointIsPercent,"invert-color":!0,type:o.pointType},null,8,["title","point-value","point-subtitle","is-percent","type"])]),t("div",d,[t("li",p,[o.sectionValue===1?(i(),a("div",r,[t("li",b,[s(n,{to:"vidaInternosInfraestructura",class:"sub-menu--option white btn-small"},{default:e(()=>[h]),_:1})]),t("li",f,[s(n,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:e(()=>[w]),_:1})]),t("li",v,[s(n,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:e(()=>[g]),_:1})]),t("li",y,[s(n,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:e(()=>[C]),_:1})]),t("li",I,[s(n,{to:"regimenCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[T]),_:1})]),t("li",S,[s(n,{to:"funcionamientoCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[N]),_:1})]),t("li",R,[s(n,{to:"vidaInternosGeneral",class:"sub-menu--option white btn-small"},{default:e(()=>[V]),_:1})]),t("li",k,[s(n,{to:"cuestionarioGHQInterno",class:"sub-menu--option white btn-small"},{default:e(()=>[P]),_:1})])])):l("",!0),o.sectionValue===2?(i(),a("div",j,[t("li",E,[s(n,{to:"relacionJefatura",class:"sub-menu--option white btn-small"},{default:e(()=>[G]),_:1})]),t("li",x,[s(n,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:e(()=>[z]),_:1})]),t("li",B,[s(n,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:e(()=>[F]),_:1})]),t("li",H,[s(n,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:e(()=>[Q]),_:1})]),t("li",A,[s(n,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:e(()=>[J]),_:1})]),t("li",L,[s(n,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:e(()=>[M]),_:1})]),t("li",O,[s(n,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:e(()=>[D]),_:1})]),t("li",$,[s(n,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:e(()=>[q]),_:1})]),t("li",K,[s(n,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:e(()=>[U]),_:1})]),t("li",W,[s(n,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:e(()=>[X]),_:1})]),t("li",Y,[s(n,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:e(()=>[Z]),_:1})]),t("li",tt,[s(n,{to:"TomaDecisiones",class:"sub-menu--option white btn-small"},{default:e(()=>[st]),_:1})]),t("li",nt,[s(n,{to:"cuestionarioGHQFuncionario",class:"sub-menu--option white btn-small"},{default:e(()=>[et]),_:1})])])):l("",!0),o.sectionValue===7?(i(),a("div",ot,[t("li",it,[s(n,{to:"edadInternos",class:"sub-menu--option white btn-small"},{default:e(()=>[at]),_:1})]),t("li",lt,[s(n,{to:"hogarMenores",class:"sub-menu--option white btn-small"},{default:e(()=>[ct]),_:1})]),t("li",ut,[s(n,{to:"nivelEducacional",class:"sub-menu--option white btn-small"},{default:e(()=>[_t]),_:1})]),t("li",mt,[s(n,{to:"nacionalidadChilena",class:"sub-menu--option white btn-small"},{default:e(()=>[dt]),_:1})]),t("li",pt,[s(n,{to:"trayectoriaReinsidencia",class:"sub-menu--option white btn-small"},{default:e(()=>[rt]),_:1})]),t("li",bt,[s(n,{to:"tiempoEncierro",class:"sub-menu--option white btn-small"},{default:e(()=>[ht]),_:1})]),t("li",ft,[s(n,{to:"tipoCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[wt]),_:1})]),t("li",vt,[s(n,{to:"numeroProgramas",class:"sub-menu--option white btn-small"},{default:e(()=>[gt]),_:1})]),t("li",yt,[s(n,{to:"tipoPrograma",class:"sub-menu--option white btn-small"},{default:e(()=>[Ct]),_:1})])])):l("",!0)])])])}}};export{Rt as _};
