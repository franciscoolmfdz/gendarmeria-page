import{h as _,l as r,o,c as a,a as i,b as t,g as n,j as e,t as u,m}from"./index-3af9b964.js";const d={class:"row c-header-bar"},p={key:0,class:"transparent location__section"},b=m('<div class="nav-wrapper transparent location__section__content"><div class="col right"><a href="#!" class="breadcrumb">Región metropolitana</a><a href="#!" class="breadcrumb">Centro penitenciario mañanita</a><a href="#!" class="location--change btn">Cambiar</a></div></div>',1),h=[b],f={key:1,class:"transparent sub-menu__section"},v={class:"nav-wrapper transparent sub-menu__section--content"},w=t("span",{class:"sub-menu__option--title"}," Inf. personal ",-1),g=t("span",{class:"sub-menu__option--title"}," Infraestructura ",-1),y=t("span",{class:"sub-menu__option--title"}," Acceso a programas ",-1),C=t("span",{class:"sub-menu__option--title"}," Trato internos ",-1),I=t("span",{class:"sub-menu__option--title"}," Trato funcionarios ",-1),P=t("span",{class:"sub-menu__option--title"}," Regimen carcel ",-1),R=t("span",{class:"sub-menu__option--title"}," F. carcel ",-1),k=t("span",{class:"sub-menu__option--title"}," Evaluación general ",-1),V=t("span",{class:"sub-menu__option--title"}," Cuestionario de Salud GHQ-12 ",-1),H={key:2,class:"transparent sub-menu__section"},T={class:"nav-wrapper transparent sub-menu__section--content"},x=t("span",{class:"sub-menu__option--title"}," Relación Jefatura ",-1),E=t("span",{class:"sub-menu__option--title"}," Confianza y valoración ",-1),N=t("span",{class:"sub-menu__option--title"}," Apego institucional ",-1),S=t("span",{class:"sub-menu__option--title"}," Carga trabajo",-1),B=t("span",{class:"sub-menu__option--title"}," Motivación en el trabajo ",-1),G=t("span",{class:"sub-menu__option--title"}," Relación compañeros/as",-1),j=t("span",{class:"sub-menu__option--title"}," Seguridad personal ",-1),A=t("span",{class:"sub-menu__option--title"}," Organización y orden ",-1),Q=t("span",{class:"sub-menu__option--title"}," Apoyo a la reinserción ",-1),z=t("span",{class:"sub-menu__option--title"}," Relación internos ",-1),F=t("span",{class:"sub-menu__option--title"}," Conocimiento normativa",-1),L=t("span",{class:"sub-menu__option--title"}," Toma de desiciones",-1),O=t("span",{class:"sub-menu__option--title"}," Cuestionario de Salud GHQ-12 ",-1),D={key:3,class:"transparent sub-menu__section"},J={class:"nav-wrapper transparent sub-menu__section--content"},M=t("span",{class:"sub-menu__option--title"}," Información trayectoria",-1),q=t("span",{class:"sub-menu__option--title"}," P1. edad internos ",-1),K=t("span",{class:"sub-menu__option--title"}," P2. ¿estuvo en algún Hogar del Sename? ",-1),U=t("span",{class:"sub-menu__option--title"}," P3 Nivel educacional",-1),W=t("span",{class:"sub-menu__option--title"}," P4 ¿Es Chileno?",-1),X=t("span",{class:"sub-menu__option--title"}," P5 ¿Había estado preso(a)?",-1),Y=t("span",{class:"sub-menu__option--title"}," P6 ¿Cuánto tiempo lleva en cárcel?",-1),Z=t("span",{class:"sub-menu__option--title"}," P7 ¿Qué año saldría en libertad?",-1),$={key:4,class:"transparent sub-menu__section"},tt={class:"nav-wrapper transparent sub-menu__section--content"},st=t("span",{class:"sub-menu__option--title"}," Reincidentes por recinto",-1),nt=t("span",{class:"sub-menu__option--title"}," Reinserción IGI",-1),et=t("span",{class:"sub-menu__option--title"}," Oferta programatica",-1),ot={key:5,class:"transparent sub-menu__section"},at={class:"nav-wrapper transparent sub-menu__section--content"},it=t("span",{class:"sub-menu__option--title"},"Registro violencia",-1),lt=t("span",{class:"sub-menu__option--title"},"Personal areas intervención",-1),ct=t("span",{class:"sub-menu__option--title"},"Personal licencias",-1),ut={class:"title-section"},_t={class:"section title__banner"},rt={class:"title__banner--text"},mt={key:0,class:"title__banner--text"},dt={key:1,class:"title__banner--text"},ft={__name:"CHeaderBar",props:{title:{type:String,default:""},sectionValue:{type:Number,default:!1},locationActive:{type:Boolean,default:!1}},setup(l){const c=_("");return(pt,bt)=>{const s=r("RouterLink");return o(),a("div",d,[l.locationActive?(o(),a("nav",p,h)):i("",!0),l.sectionValue===1?(o(),a("nav",f,[t("div",v,[n(s,{to:"vidaInternosPersonal",class:"sub-menu--option white btn-small"},{default:e(()=>[w]),_:1}),n(s,{to:"vidaInternosInfraestructura",class:"sub-menu--option white btn-small"},{default:e(()=>[g]),_:1}),n(s,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:e(()=>[y]),_:1}),n(s,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:e(()=>[C]),_:1}),n(s,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:e(()=>[I]),_:1}),n(s,{to:"regimenCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[P]),_:1}),n(s,{to:"funcionamientoCarcel",class:"sub-menu--option white btn-small"},{default:e(()=>[R]),_:1}),n(s,{to:"vidaInternosGeneral",class:"sub-menu--option white btn-small"},{default:e(()=>[k]),_:1}),n(s,{to:"cuestionarioGHQInterno",class:"sub-menu--option white btn-small"},{default:e(()=>[V]),_:1})])])):i("",!0),l.sectionValue===2?(o(),a("nav",H,[t("div",T,[n(s,{to:"relJefatura",class:"sub-menu--option white btn-small"},{default:e(()=>[x]),_:1}),n(s,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:e(()=>[E]),_:1}),n(s,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:e(()=>[N]),_:1}),n(s,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:e(()=>[S]),_:1}),n(s,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:e(()=>[B]),_:1}),n(s,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:e(()=>[G]),_:1}),n(s,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:e(()=>[j]),_:1}),n(s,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:e(()=>[A]),_:1}),n(s,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:e(()=>[Q]),_:1}),n(s,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:e(()=>[z]),_:1}),n(s,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:e(()=>[F]),_:1}),n(s,{to:"TomaDesiciones",class:"sub-menu--option white btn-small"},{default:e(()=>[L]),_:1}),n(s,{to:"cuestionarioGHQFuncionario",class:"sub-menu--option white btn-small"},{default:e(()=>[O]),_:1})])])):i("",!0),l.sectionValue===7?(o(),a("nav",D,[t("div",J,[n(s,{to:"dimensionTrayectoria",class:"sub-menu--option white btn-small"},{default:e(()=>[M]),_:1}),n(s,{to:"edadInternos",class:"sub-menu--option white btn-small"},{default:e(()=>[q]),_:1}),n(s,{to:"hogarMenores",class:"sub-menu--option white btn-small"},{default:e(()=>[K]),_:1}),n(s,{to:"nivelEducacional",class:"sub-menu--option white btn-small"},{default:e(()=>[U]),_:1}),n(s,{to:"nacionalidadChilena",class:"sub-menu--option white btn-small"},{default:e(()=>[W]),_:1}),n(s,{to:"trayectoriaReinsidencia",class:"sub-menu--option white btn-small"},{default:e(()=>[X]),_:1}),n(s,{to:"tiempoEncierro",class:"sub-menu--option white btn-small"},{default:e(()=>[Y]),_:1}),n(s,{to:"terminoEncierro",class:"sub-menu--option white btn-small"},{default:e(()=>[Z]),_:1})])])):i("",!0),l.sectionValue===4?(o(),a("nav",$,[t("div",tt,[n(s,{to:"situacionReincidencia",class:"sub-menu--option white btn-small"},{default:e(()=>[st]),_:1}),n(s,{to:"regimenProcesal",class:"sub-menu--option white btn-small"},{default:e(()=>[nt]),_:1}),n(s,{to:"programasEstablecimientos",class:"sub-menu--option white btn-small"},{default:e(()=>[et]),_:1})])])):i("",!0),l.sectionValue===3?(o(),a("nav",ot,[t("div",at,[n(s,{to:"registroViolencia",class:"sub-menu--option white btn-small"},{default:e(()=>[it]),_:1}),n(s,{to:"dotacionProfecional",class:"sub-menu--option white btn-small"},{default:e(()=>[lt]),_:1}),n(s,{to:"dotacionLicencia",class:"sub-menu--option white btn-small"},{default:e(()=>[ct]),_:1})])])):i("",!0),t("div",ut,[t("div",_t,[t("h3",rt,u(l.title),1),c.value?(o(),a("h3",mt," / ")):i("",!0),c.value?(o(),a("h3",dt,u(c.value),1)):i("",!0)])])])}}};export{ft as _};