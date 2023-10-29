import{_ as c}from"./CChartDonutSection-fa8a7a2b.js";import{i as u,o as i,c as a,b as t,m as s,j as o,a as l}from"./index-5ea9ca80.js";const _={class:"menu-sidebar"},m={class:"menu-point-section"},d={class:"menu-section menu-sidebar-section"},p={class:"menu--content"},r={key:0,class:"collapsible-b"},b={class:"menu--content"},h=t("span",{class:"sub-menu__option--title"}," Información personal ",-1),f={class:"menu--content"},v=t("span",{class:"sub-menu__option--title"}," Infraestructura ",-1),w={class:"menu--content"},g=t("span",{class:"sub-menu__option--title"}," Acceso a programas ",-1),y={class:"menu--content"},C=t("span",{class:"sub-menu__option--title"}," Trato internos ",-1),I={class:"menu--content"},S=t("span",{class:"sub-menu__option--title"}," Trato funcionarios ",-1),T={class:"menu--content"},V=t("span",{class:"sub-menu__option--title"}," Regimen carcel ",-1),N={class:"menu--content"},R=t("span",{class:"sub-menu__option--title"}," Funcionamiento carcel ",-1),k={class:"menu--content"},j=t("span",{class:"sub-menu__option--title"}," Evaluación general ",-1),G={class:"menu--content"},x=t("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),z={key:1,class:"collapsible-b"},H={class:"menu--content"},Q=t("span",{class:"sub-menu__option--title"}," Relación Jefatura ",-1),A={class:"menu--content"},B=t("span",{class:"sub-menu__option--title"}," Confianza y valoración ",-1),F={class:"menu--content"},E=t("span",{class:"sub-menu__option--title"}," Apego institucional ",-1),J={class:"menu--content"},L=t("span",{class:"sub-menu__option--title"}," Carga trabajo ",-1),O={class:"menu--content"},P=t("span",{class:"sub-menu__option--title"}," Motivación en el trabajo",-1),D={class:"menu--content"},M=t("span",{class:"sub-menu__option--title"}," Relación compañeros/as ",-1),$={class:"menu--content"},q=t("span",{class:"sub-menu__option--title"}," Seguridad personal",-1),K={class:"menu--content"},U=t("span",{class:"sub-menu__option--title"}," Organización y orden ",-1),W={class:"menu--content"},X=t("span",{class:"sub-menu__option--title"}," Apoyo a la reinserción",-1),Y={class:"menu--content"},Z=t("span",{class:"sub-menu__option--title"}," Relación con internos ",-1),tt={class:"menu--content"},st=t("span",{class:"sub-menu__option--title"}," Conocimiento normativas ",-1),nt={class:"menu--content"},ot=t("span",{class:"sub-menu__option--title"}," Toma de desiciones ",-1),et={class:"menu--content"},it=t("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),_t={__name:"subSideNav",props:{pointValue:{type:String},pointTitle:{type:String},pointSubtitle:{type:String},sectionValue:{type:Number,default:!1}},setup(e){return(at,lt)=>{const n=u("RouterLink");return i(),a("div",_,[t("div",m,[s(c,{class:"section-donut primary-element",title:e.pointTitle,subtitle:e.pointSubtitle,"point-value":e.pointValue,"invert-color":!0},null,8,["title","subtitle","point-value"])]),t("div",d,[t("li",p,[e.sectionValue===1?(i(),a("div",r,[t("li",b,[s(n,{to:"vidaInternosPersonal",class:"sub-menu--option white btn-small"},{default:o(()=>[h]),_:1})]),t("li",f,[s(n,{to:"vidaInternosInfraestructura",class:"sub-menu--option white btn-small"},{default:o(()=>[v]),_:1})]),t("li",w,[s(n,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:o(()=>[g]),_:1})]),t("li",y,[s(n,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:o(()=>[C]),_:1})]),t("li",I,[s(n,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:o(()=>[S]),_:1})]),t("li",T,[s(n,{to:"regimenCarcel",class:"sub-menu--option white btn-small"},{default:o(()=>[V]),_:1})]),t("li",N,[s(n,{to:"funcionamientoCarcel",class:"sub-menu--option white btn-small"},{default:o(()=>[R]),_:1})]),t("li",k,[s(n,{to:"vidaInternosGeneral",class:"sub-menu--option white btn-small"},{default:o(()=>[j]),_:1})]),t("li",G,[s(n,{to:"cuestionarioGHQInterno",class:"sub-menu--option white btn-small"},{default:o(()=>[x]),_:1})])])):l("",!0),e.sectionValue===2?(i(),a("div",z,[t("li",H,[s(n,{to:"relacionJefatura",class:"sub-menu--option white btn-small"},{default:o(()=>[Q]),_:1})]),t("li",A,[s(n,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:o(()=>[B]),_:1})]),t("li",F,[s(n,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:o(()=>[E]),_:1})]),t("li",J,[s(n,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:o(()=>[L]),_:1})]),t("li",O,[s(n,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:o(()=>[P]),_:1})]),t("li",D,[s(n,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:o(()=>[M]),_:1})]),t("li",$,[s(n,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:o(()=>[q]),_:1})]),t("li",K,[s(n,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:o(()=>[U]),_:1})]),t("li",W,[s(n,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:o(()=>[X]),_:1})]),t("li",Y,[s(n,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:o(()=>[Z]),_:1})]),t("li",tt,[s(n,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:o(()=>[st]),_:1})]),t("li",nt,[s(n,{to:"TomaDesiciones",class:"sub-menu--option white btn-small"},{default:o(()=>[ot]),_:1})]),t("li",et,[s(n,{to:"cuestionarioGHQFuncionario",class:"sub-menu--option white btn-small"},{default:o(()=>[it]),_:1})])])):l("",!0)])])])}}};export{_t as _};
