import{r as u,q as r,o as a,c as o,e as i,a as t,b as e,w as n,t as _,p as m}from"./index-550390c3.js";const d={class:"row c-header-bar"},p={key:0,class:"transparent location__section"},b=m('<div class="nav-wrapper transparent location__section__content"><div class="col right"><a href="#!" class="breadcrumb">Región metropolitana</a><a href="#!" class="breadcrumb">Centro penitenciario mañanita</a><a href="#!" class="location--change btn">Cambiar</a></div></div>',1),h=[b],f={key:1,class:"transparent sub-menu__section"},v={class:"nav-wrapper transparent sub-menu__section--content"},w=t("span",{class:"sub-menu__option--title"}," Inf. personal ",-1),g=t("span",{class:"sub-menu__option--title"}," Infraestructura ",-1),y=t("span",{class:"sub-menu__option--title"}," Acceso a programas ",-1),C=t("span",{class:"sub-menu__option--title"}," Trato internos ",-1),I=t("span",{class:"sub-menu__option--title"}," Trato funcionarios ",-1),k=t("span",{class:"sub-menu__option--title"}," Regimen carcel ",-1),V=t("span",{class:"sub-menu__option--title"}," F. carcel ",-1),R=t("span",{class:"sub-menu__option--title"}," Evaluación general ",-1),T={key:2,class:"transparent sub-menu__section"},x={class:"nav-wrapper transparent sub-menu__section--content"},N=t("span",{class:"sub-menu__option--title"}," Relación Jefatura ",-1),B=t("span",{class:"sub-menu__option--title"}," Confianza y valoración ",-1),A=t("span",{class:"sub-menu__option--title"}," Apego institucional ",-1),j=t("span",{class:"sub-menu__option--title"}," Carga trabajo",-1),z=t("span",{class:"sub-menu__option--title"}," Motivación en el trabajo ",-1),P=t("span",{class:"sub-menu__option--title"}," Relación compañeros/as",-1),S=t("span",{class:"sub-menu__option--title"}," Seguridad personal ",-1),E=t("span",{class:"sub-menu__option--title"}," Organización y orden ",-1),D=t("span",{class:"sub-menu__option--title"}," Apoyo a la reinserción ",-1),F=t("span",{class:"sub-menu__option--title"}," Relación internos ",-1),H=t("span",{class:"sub-menu__option--title"}," Conocimiento normativa",-1),J=t("span",{class:"sub-menu__option--title"}," Toma de desiciones",-1),L={key:3,class:"transparent sub-menu__section"},O={class:"nav-wrapper transparent sub-menu__section--content"},q=t("span",{class:"sub-menu__option--title"}," Información trayectoria",-1),G=t("span",{class:"sub-menu__option--title"}," P1. edad internos ",-1),M=t("span",{class:"sub-menu__option--title"}," P3 Nivel educacional",-1),K={class:"title-section"},Q={class:"section title__banner"},U={class:"title__banner--text"},W={key:0,class:"title__banner--text"},X={key:1,class:"title__banner--text"},tt={__name:"CHeaderBar",props:{title:{type:String,default:""},sectionValue:{type:Number,default:!1},locationActive:{type:Boolean,default:!1}},setup(l){const c=u("");return(Y,Z)=>{const s=r("RouterLink");return a(),o("div",d,[l.locationActive?(a(),o("nav",p,h)):i("",!0),l.sectionValue===1?(a(),o("nav",f,[t("div",v,[e(s,{to:"vidaInternosPersonal",class:"sub-menu--option white btn-small"},{default:n(()=>[w]),_:1}),e(s,{to:"vidaInternosInfraestructura",class:"sub-menu--option white btn-small"},{default:n(()=>[g]),_:1}),e(s,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:n(()=>[y]),_:1}),e(s,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:n(()=>[C]),_:1}),e(s,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:n(()=>[I]),_:1}),e(s,{to:"regimenCarcel",class:"sub-menu--option white btn-small"},{default:n(()=>[k]),_:1}),e(s,{to:"funcionamientoCarcel",class:"sub-menu--option white btn-small"},{default:n(()=>[V]),_:1}),e(s,{to:"vidaInternosGeneral",class:"sub-menu--option white btn-small"},{default:n(()=>[R]),_:1})])])):i("",!0),l.sectionValue===2?(a(),o("nav",T,[t("div",x,[e(s,{to:"relJefatura",class:"sub-menu--option white btn-small"},{default:n(()=>[N]),_:1}),e(s,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:n(()=>[B]),_:1}),e(s,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:n(()=>[A]),_:1}),e(s,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:n(()=>[j]),_:1}),e(s,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:n(()=>[z]),_:1}),e(s,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:n(()=>[P]),_:1}),e(s,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:n(()=>[S]),_:1}),e(s,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:n(()=>[E]),_:1}),e(s,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:n(()=>[D]),_:1}),e(s,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:n(()=>[F]),_:1}),e(s,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:n(()=>[H]),_:1}),e(s,{to:"TomaDesiciones",class:"sub-menu--option white btn-small"},{default:n(()=>[J]),_:1})])])):i("",!0),l.sectionValue===7?(a(),o("nav",L,[t("div",O,[e(s,{to:"dimensionTrayectoria",class:"sub-menu--option white btn-small"},{default:n(()=>[q]),_:1}),e(s,{to:"edadInternos",class:"sub-menu--option white btn-small"},{default:n(()=>[G]),_:1}),e(s,{to:"nivelEducacional",class:"sub-menu--option white btn-small"},{default:n(()=>[M]),_:1})])])):i("",!0),t("div",K,[t("div",Q,[t("h3",U,_(l.title),1),c.value?(a(),o("h3",W," / ")):i("",!0),c.value?(a(),o("h3",X,_(c.value),1)):i("",!0)])])])}}};export{tt as _};