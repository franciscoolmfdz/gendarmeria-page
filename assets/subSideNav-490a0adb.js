import{_}from"./CCard-3d6808c8.js";import{i as u,k as m,o as i,c as a,b as t,m as s,g as n,t as l,a as c}from"./index-70926910.js";const d={class:"menu-sidebar"},p={class:"menu-point-section"},r={class:"point-section"},b={class:"card-puntuacion"},h={class:"content-section"},f={class:"card-title"},v={class:"card-body"},w={class:"menu-section menu-sidebar-section"},g={class:"menu--content"},y={key:0,class:"collapsible-b"},C={class:"menu--content"},I=t("span",{class:"sub-menu__option--title"}," Información personal ",-1),S={class:"menu--content"},T=t("span",{class:"sub-menu__option--title"}," Infraestructura ",-1),V={class:"menu--content"},k=t("span",{class:"sub-menu__option--title"}," Acceso a programas ",-1),N={class:"menu--content"},R=t("span",{class:"sub-menu__option--title"}," Trato internos ",-1),G={class:"menu--content"},j=t("span",{class:"sub-menu__option--title"}," Trato funcionarios ",-1),x={class:"menu--content"},z=t("span",{class:"sub-menu__option--title"}," Regimen carcel ",-1),H={class:"menu--content"},Q=t("span",{class:"sub-menu__option--title"}," Funcionamiento carcel ",-1),A={class:"menu--content"},B=t("span",{class:"sub-menu__option--title"}," Evaluación general ",-1),F={class:"menu--content"},D=t("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),E={key:1,class:"collapsible-b"},J={class:"menu--content"},L=t("span",{class:"sub-menu__option--title"}," Relación Jefatura ",-1),O={class:"menu--content"},P=t("span",{class:"sub-menu__option--title"}," Confianza y valoración ",-1),M={class:"menu--content"},$=t("span",{class:"sub-menu__option--title"}," Apego institucional ",-1),q={class:"menu--content"},K=t("span",{class:"sub-menu__option--title"}," Carga trabajo ",-1),U={class:"menu--content"},W=t("span",{class:"sub-menu__option--title"}," Motivación en el trabajo",-1),X={class:"menu--content"},Y=t("span",{class:"sub-menu__option--title"}," Relación compañeros/as ",-1),Z={class:"menu--content"},tt=t("span",{class:"sub-menu__option--title"}," Seguridad personal",-1),st={class:"menu--content"},nt=t("span",{class:"sub-menu__option--title"}," Organización y orden ",-1),ot={class:"menu--content"},et=t("span",{class:"sub-menu__option--title"}," Apoyo a la reinserción",-1),it={class:"menu--content"},at=t("span",{class:"sub-menu__option--title"}," Relación con internos ",-1),lt={class:"menu--content"},ct=t("span",{class:"sub-menu__option--title"}," Conocimiento normativas ",-1),_t={class:"menu--content"},ut=t("span",{class:"sub-menu__option--title"}," Toma de desiciones ",-1),mt={class:"menu--content"},dt=t("span",{class:"sub-menu__option--title"}," Cuestionario Salud GHQ-12 ",-1),ft={__name:"subSideNav",props:{pointValue:{type:String},pointTitle:{type:String},pointSubtitle:{type:String},sectionValue:{type:Number,default:!1}},setup(e){return u(""),(pt,rt)=>{const o=m("RouterLink");return i(),a("div",d,[t("div",p,[s(_,{class:"card-information primary-element"},{default:n(()=>[t("div",r,[t("span",b,l(e.pointValue),1)]),t("div",h,[t("span",f,l(e.pointTitle),1),t("span",v,l(e.pointSubtitle),1)])]),_:1})]),t("div",w,[t("li",g,[e.sectionValue===1?(i(),a("div",y,[t("li",C,[s(o,{to:"vidaInternosPersonal",class:"sub-menu--option white btn-small"},{default:n(()=>[I]),_:1})]),t("li",S,[s(o,{to:"vidaInternosInfraestructura",class:"sub-menu--option white btn-small"},{default:n(()=>[T]),_:1})]),t("li",V,[s(o,{to:"accesoProgramas",class:"sub-menu--option white btn-small"},{default:n(()=>[k]),_:1})]),t("li",N,[s(o,{to:"vidaInternosTrato",class:"sub-menu--option white btn-small"},{default:n(()=>[R]),_:1})]),t("li",G,[s(o,{to:"vidaInternosFuncionario",class:"sub-menu--option white btn-small"},{default:n(()=>[j]),_:1})]),t("li",x,[s(o,{to:"regimenCarcel",class:"sub-menu--option white btn-small"},{default:n(()=>[z]),_:1})]),t("li",H,[s(o,{to:"funcionamientoCarcel",class:"sub-menu--option white btn-small"},{default:n(()=>[Q]),_:1})]),t("li",A,[s(o,{to:"vidaInternosGeneral",class:"sub-menu--option white btn-small"},{default:n(()=>[B]),_:1})]),t("li",F,[s(o,{to:"cuestionarioGHQInterno",class:"sub-menu--option white btn-small"},{default:n(()=>[D]),_:1})])])):c("",!0),e.sectionValue===2?(i(),a("div",E,[t("li",J,[s(o,{to:"relacionJefatura",class:"sub-menu--option white btn-small"},{default:n(()=>[L]),_:1})]),t("li",O,[s(o,{to:"confianzaValoracion",class:"sub-menu--option white btn-small"},{default:n(()=>[P]),_:1})]),t("li",M,[s(o,{to:"apegoInstitucional",class:"sub-menu--option white btn-small"},{default:n(()=>[$]),_:1})]),t("li",q,[s(o,{to:"cargaTrabajo",class:"sub-menu--option white btn-small"},{default:n(()=>[K]),_:1})]),t("li",U,[s(o,{to:"motivacionTrabajo",class:"sub-menu--option white btn-small"},{default:n(()=>[W]),_:1})]),t("li",X,[s(o,{to:"relacionCoop",class:"sub-menu--option white btn-small"},{default:n(()=>[Y]),_:1})]),t("li",Z,[s(o,{to:"seguridad",class:"sub-menu--option white btn-small"},{default:n(()=>[tt]),_:1})]),t("li",st,[s(o,{to:"organizacionOrden",class:"sub-menu--option white btn-small"},{default:n(()=>[nt]),_:1})]),t("li",ot,[s(o,{to:"apoyoReinsercion",class:"sub-menu--option white btn-small"},{default:n(()=>[et]),_:1})]),t("li",it,[s(o,{to:"funcionarioInternos",class:"sub-menu--option white btn-small"},{default:n(()=>[at]),_:1})]),t("li",lt,[s(o,{to:"conocimientoNormativa",class:"sub-menu--option white btn-small"},{default:n(()=>[ct]),_:1})]),t("li",_t,[s(o,{to:"TomaDesiciones",class:"sub-menu--option white btn-small"},{default:n(()=>[ut]),_:1})]),t("li",mt,[s(o,{to:"cuestionarioGHQFuncionario",class:"sub-menu--option white btn-small"},{default:n(()=>[dt]),_:1})])])):c("",!0)])])])}}};export{ft as _};
