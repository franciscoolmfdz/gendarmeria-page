import{u as $,g as t,h as k,e as h,o as _,f as V,j as B,_ as D,l as i,m as N,b as n,w as d,v as p,a as U}from"./index-d0b13c49.js";import{_ as S}from"./CHeaderBar-9f7ed46f.js";import{_ as A}from"./CSelect.vue_vue_type_style_index_0_lang-d10d4f65.js";import{_ as y}from"./CSelect-9cf0a756.js";import{g as C}from"./regiones-091fa427.js";import{g as F}from"./carceles-d5ea5d1e.js";import{a as L}from"./user-f6bdd5d5.js";const M={class:"section-form"},j=99,E="crear usuario",P={__name:"crearUsuario",setup(G){const b=$(),u=t(!1),I=t("Crear usuario"),l=t(null),s=t(null),c=t(null),v=t(null),r=t(null),m=t(null),w=t([{id:3,description:"Director nacional",baseRestriction:{id:4}},{id:4,description:"Director regional",baseRestriction:{id:4}},{id:5,description:"Alcaide",baseRestriction:{id:4}},{id:2,description:"Gestor",baseRestriction:{id:6}}]),x=t([]),g=t([]),o=t(null),R=async()=>{if(u.value=!0,r.value===m.value){const f=w.value.find(a=>a.id=o.value),e={name:c.value,username:v.value,roleId:f.id,password:r.value,restrictions:[f.baseRestriction]};l!=null&&l.value&&e.restrictions.push({typeId:2,value:l==null?void 0:l.value}),s!=null&&s.value&&e.restrictions.push({typeId:2,value:s==null?void 0:s.value}),await L(e)}u.value=!1};return k(async()=>{b.user.roleId!==1&&h.push("/l"),x.value=await F(),g.value=await C()}),(f,e)=>(_(),V(D,{class:"grafic-content"},{default:B(()=>[i(S,{title:I.value,"section-value":j},null,8,["title"]),i(N,{"active-spin":u.value},null,8,["active-spin"]),n("div",M,[d(n("input",{class:"search__content--text","onUpdate:modelValue":e[0]||(e[0]=a=>v.value=a),placeholder:"Ingresar correo",type:"text"},null,512),[[p,v.value]]),d(n("input",{class:"search__content--text","onUpdate:modelValue":e[1]||(e[1]=a=>c.value=a),placeholder:"Ingresar nombre usuario",type:"text"},null,512),[[p,c.value]]),i(y,{options:w.value,modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=a=>o.value=a)},null,8,["options","modelValue"]),o.value===4?(_(),V(y,{key:0,options:g.value,modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=a=>l.value=a)},null,8,["options","modelValue"])):U("",!0),o.value===5?(_(),V(y,{key:1,options:x.value,modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=a=>s.value=a)},null,8,["options","modelValue"])):U("",!0),d(n("input",{class:"search__content--text","onUpdate:modelValue":e[5]||(e[5]=a=>r.value=a),placeholder:"Ingrese un password",type:"password"},null,512),[[p,r.value]]),d(n("input",{class:"search__content--text","onUpdate:modelValue":e[6]||(e[6]=a=>m.value=a),placeholder:"Repetir password",type:"password"},null,512),[[p,m.value]]),i(A,{title:E,onExecuteAction:R,disabled:u.value},null,8,["disabled"])])]),_:1}))}};export{P as default};
