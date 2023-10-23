import{g as u,i as r,o as a,c as o,a as l,b as t,m as e,j as n,p as d,t as _,x as m}from"./index-58934414.js";const p={class:"row c-header-bar"},b={key:0,class:"transparent location__section"},h=m('<div class="nav-wrapper transparent location__section__content"><div class="col right"><a href="#!" class="breadcrumb">Región metropolitana</a><a href="#!" class="breadcrumb"></a><a href="#!" class="location--change btn">Cambiar</a></div></div>',1),v=[h],f={key:1,class:"transparent sub-menu__section"},w={class:"nav-wrapper transparent sub-menu__section--content"},y=t("span",{class:"sub-menu__option--title"}," Información trayectoria",-1),g=t("span",{class:"sub-menu__option--title"}," P1. edad internos ",-1),P=t("span",{class:"sub-menu__option--title"}," P2. ¿estuvo en algún Hogar del Sename? ",-1),k=t("span",{class:"sub-menu__option--title"}," P3 Nivel educacional",-1),C=t("span",{class:"sub-menu__option--title"}," P4 ¿Es Chileno?",-1),V=t("span",{class:"sub-menu__option--title"}," P5 ¿Había estado preso(a)?",-1),x=t("span",{class:"sub-menu__option--title"}," P6 ¿Cuánto tiempo lleva en cárcel?",-1),E=t("span",{class:"sub-menu__option--title"}," P7 ¿Qué año saldría en libertad?",-1),R={key:2,class:"transparent sub-menu__section"},B={class:"nav-wrapper transparent sub-menu__section--content"},N=t("span",{class:"sub-menu__option--title"}," Reincidentes por recinto",-1),I=t("span",{class:"sub-menu__option--title"}," Reinserción IGI",-1),D=t("span",{class:"sub-menu__option--title"}," Oferta programatica",-1),H={key:3,class:"transparent sub-menu__section"},S={class:"nav-wrapper transparent sub-menu__section--content"},L=t("span",{class:"sub-menu__option--title"},"Registro eventos",-1),U=t("span",{class:"sub-menu__option--title"},"Personal areas intervención",-1),A=t("span",{class:"sub-menu__option--title"},"Personal licencias",-1),j=t("span",{class:"sub-menu__option--title"},"Población imputados",-1),z=t("span",{class:"sub-menu__option--title"},"Denuncia partes",-1),G=t("span",{class:"sub-menu__option--title"},"Dotación vs población",-1),M={key:4,class:"transparent sub-menu__section"},O={class:"nav-wrapper transparent sub-menu__section--content"},Q=t("span",{class:"sub-menu__option--title"},"Crear usuarios",-1),T=t("span",{class:"sub-menu__option--title"},"Editar usuarios",-1),$=t("span",{class:"sub-menu__option--title"},"Eliminar usuarios",-1),q={class:"title-section"},F={class:"title__banner--text"},J={key:0,class:"title__banner--text"},K={key:1,class:"title__banner--text"},Z={__name:"CHeaderBar",props:{title:{type:String,default:""},sectionValue:{type:Number,default:!1},locationActive:{type:Boolean,default:!1}},setup(i){const c=u("");return(W,X)=>{const s=r("RouterLink");return a(),o("div",p,[i.locationActive?(a(),o("nav",b,v)):l("",!0),i.sectionValue===7?(a(),o("nav",f,[t("div",w,[e(s,{to:"dimensionTrayectoria",class:"sub-menu--option white btn-small"},{default:n(()=>[y]),_:1}),e(s,{to:"edadInternos",class:"sub-menu--option white btn-small"},{default:n(()=>[g]),_:1}),e(s,{to:"hogarMenores",class:"sub-menu--option white btn-small"},{default:n(()=>[P]),_:1}),e(s,{to:"nivelEducacional",class:"sub-menu--option white btn-small"},{default:n(()=>[k]),_:1}),e(s,{to:"nacionalidadChilena",class:"sub-menu--option white btn-small"},{default:n(()=>[C]),_:1}),e(s,{to:"trayectoriaReinsidencia",class:"sub-menu--option white btn-small"},{default:n(()=>[V]),_:1}),e(s,{to:"tiempoEncierro",class:"sub-menu--option white btn-small"},{default:n(()=>[x]),_:1}),e(s,{to:"terminoEncierro",class:"sub-menu--option white btn-small"},{default:n(()=>[E]),_:1})])])):l("",!0),i.sectionValue===4?(a(),o("nav",R,[t("div",B,[e(s,{to:"situacionReincidencia",class:"sub-menu--option white btn-small"},{default:n(()=>[N]),_:1}),e(s,{to:"regimenProcesal",class:"sub-menu--option white btn-small"},{default:n(()=>[I]),_:1}),e(s,{to:"programasEstablecimientos",class:"sub-menu--option white btn-small"},{default:n(()=>[D]),_:1})])])):l("",!0),i.sectionValue===3?(a(),o("nav",H,[t("div",S,[e(s,{to:"registroViolencia",class:"sub-menu--option white btn-small"},{default:n(()=>[L]),_:1}),e(s,{to:"dotacionProfecional",class:"sub-menu--option white btn-small"},{default:n(()=>[U]),_:1}),e(s,{to:"dotacionLicencia",class:"sub-menu--option white btn-small"},{default:n(()=>[A]),_:1}),e(s,{to:"poblacionImputados",class:"sub-menu--option white btn-small"},{default:n(()=>[j]),_:1}),e(s,{to:"partesDenuncia",class:"sub-menu--option white btn-small"},{default:n(()=>[z]),_:1}),e(s,{to:"dotacionPoblacion",class:"sub-menu--option white btn-small"},{default:n(()=>[G]),_:1})])])):l("",!0),i.sectionValue===99?(a(),o("nav",M,[t("div",O,[e(s,{to:"crearUsuario",class:"sub-menu--option white btn-small"},{default:n(()=>[Q]),_:1}),e(s,{to:"editarUsuario",class:"sub-menu--option white btn-small"},{default:n(()=>[T]),_:1}),e(s,{to:"eliminarUsuario",class:"sub-menu--option white btn-small"},{default:n(()=>[$]),_:1})])])):l("",!0),t("div",q,[t("div",{class:d(["section title__banner",`section-${i.sectionValue}`])},[t("h3",F,_(i.title),1),c.value?(a(),o("h3",J," / ")):l("",!0),c.value?(a(),o("h3",K,_(c.value),1)):l("",!0)],2)])])}}};export{Z as _};
