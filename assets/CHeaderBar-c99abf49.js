import{g as u,i as r,o as a,c as o,a as c,b as t,m as e,j as n,q as d,t as _,x as m}from"./index-d5d29b93.js";const p={class:"row c-header-bar"},b={key:0,class:"transparent location__section"},h=m('<div class="nav-wrapper transparent location__section__content"><div class="col right"><a href="#!" class="breadcrumb">Región metropolitana</a><a href="#!" class="breadcrumb"></a><a href="#!" class="location--change btn">Cambiar</a></div></div>',1),v=[h],f={key:1,class:"transparent sub-menu__section"},w={class:"nav-wrapper transparent sub-menu__section--content"},g=t("span",{class:"sub-menu__option--title"}," Reincidentes por recinto",-1),y=t("span",{class:"sub-menu__option--title"}," Reinserción IGI",-1),k=t("span",{class:"sub-menu__option--title"}," Oferta programatica",-1),V={key:2,class:"transparent sub-menu__section"},x={class:"nav-wrapper transparent sub-menu__section--content"},C=t("span",{class:"sub-menu__option--title"},"Registro eventos",-1),R=t("span",{class:"sub-menu__option--title"},"Personal areas intervención",-1),B=t("span",{class:"sub-menu__option--title"},"Personal licencias",-1),P=t("span",{class:"sub-menu__option--title"},"Población imputados",-1),N=t("span",{class:"sub-menu__option--title"},"Denuncia partes",-1),D=t("span",{class:"sub-menu__option--title"},"Dotación vs población",-1),E={key:3,class:"transparent sub-menu__section"},I={class:"nav-wrapper transparent sub-menu__section--content"},L=t("span",{class:"sub-menu__option--title"},"Crear usuarios",-1),S=t("span",{class:"sub-menu__option--title"},"Editar usuarios",-1),U=t("span",{class:"sub-menu__option--title"},"Eliminar usuarios",-1),A={class:"title-section"},H={class:"title__banner--text"},j={key:0,class:"title__banner--text"},q={key:1,class:"title__banner--text"},$={__name:"CHeaderBar",props:{title:{type:String,default:""},sectionValue:{type:Number,default:!1},locationActive:{type:Boolean,default:!1}},setup(i){const l=u("");return(z,G)=>{const s=r("RouterLink");return a(),o("div",p,[i.locationActive?(a(),o("nav",b,v)):c("",!0),i.sectionValue===4?(a(),o("nav",f,[t("div",w,[e(s,{to:"situacionReincidencia",class:"sub-menu--option white btn-small"},{default:n(()=>[g]),_:1}),e(s,{to:"regimenProcesal",class:"sub-menu--option white btn-small"},{default:n(()=>[y]),_:1}),e(s,{to:"programasEstablecimientos",class:"sub-menu--option white btn-small"},{default:n(()=>[k]),_:1})])])):c("",!0),i.sectionValue===3?(a(),o("nav",V,[t("div",x,[e(s,{to:"registroViolencia",class:"sub-menu--option white btn-small"},{default:n(()=>[C]),_:1}),e(s,{to:"dotacionProfecional",class:"sub-menu--option white btn-small"},{default:n(()=>[R]),_:1}),e(s,{to:"dotacionLicencia",class:"sub-menu--option white btn-small"},{default:n(()=>[B]),_:1}),e(s,{to:"poblacionImputados",class:"sub-menu--option white btn-small"},{default:n(()=>[P]),_:1}),e(s,{to:"partesDenuncia",class:"sub-menu--option white btn-small"},{default:n(()=>[N]),_:1}),e(s,{to:"dotacionPoblacion",class:"sub-menu--option white btn-small"},{default:n(()=>[D]),_:1})])])):c("",!0),i.sectionValue===99?(a(),o("nav",E,[t("div",I,[e(s,{to:"crearUsuario",class:"sub-menu--option white btn-small"},{default:n(()=>[L]),_:1}),e(s,{to:"editarUsuario",class:"sub-menu--option white btn-small"},{default:n(()=>[S]),_:1}),e(s,{to:"eliminarUsuario",class:"sub-menu--option white btn-small"},{default:n(()=>[U]),_:1})])])):c("",!0),t("div",A,[t("div",{class:d(["section title__banner",`section-${i.sectionValue}`])},[t("h3",H,_(i.title),1),l.value?(a(),o("h3",j," / ")):c("",!0),l.value?(a(),o("h3",q,_(l.value),1)):c("",!0)],2)])])}}};export{$ as _};
