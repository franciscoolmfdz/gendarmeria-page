import{u as $,g as s,h as k,e as h,z as A,E as B,o as f,f as V,j as D,_ as N,m as r,n as S,b as n,w as d,v as c,A as y,a as b}from"./index-cf584654.js";import{_ as C}from"./CHeaderBar-ad209272.js";import{_ as E}from"./CButton-014b4ef1.js";import{a as F}from"./user-16d7ee34.js";const L={class:"section-form"},M=99,j="crear usuario",J={__name:"crearUsuario",setup(z){const g=$(),u=s(!1),I=s("Crear usuario"),l=s(null),t=s(null),p=s(null),v=s(null),i=s(null),m=s(null),w=s([{id:3,description:"Director nacional",baseRestriction:{id:4}},{id:4,description:"Director regional",baseRestriction:{id:4}},{id:5,description:"Alcaide",baseRestriction:{id:4}},{id:2,description:"Gestor",baseRestriction:{id:6}}]),x=s([]),U=s([]),o=s(null),R=async()=>{if(u.value=!0,i.value===m.value){const _=w.value.find(a=>a.id=o.value),e={name:p.value,username:v.value,roleId:_.id,password:i.value,restrictions:[_.baseRestriction]};l!=null&&l.value&&e.restrictions.push({typeId:2,value:l==null?void 0:l.value}),t!=null&&t.value&&e.restrictions.push({typeId:2,value:t==null?void 0:t.value}),await F(e)}u.value=!1};return k(async()=>{g.user.roleId!==1&&h.push("/l"),x.value=await A(),U.value=await B()}),(_,e)=>(f(),V(N,{class:"admin-content"},{default:D(()=>[r(C,{title:I.value,"section-value":M},null,8,["title"]),r(S,{"active-spin":u.value},null,8,["active-spin"]),n("div",L,[d(n("input",{class:"search__content--text","onUpdate:modelValue":e[0]||(e[0]=a=>v.value=a),placeholder:"Ingresar correo",type:"text"},null,512),[[c,v.value]]),d(n("input",{class:"search__content--text","onUpdate:modelValue":e[1]||(e[1]=a=>p.value=a),placeholder:"Ingresar nombre usuario",type:"text"},null,512),[[c,p.value]]),r(y,{class:"c-select-item",options:w.value,modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=a=>o.value=a)},null,8,["options","modelValue"]),o.value===4?(f(),V(y,{key:0,class:"c-select-item",options:U.value,modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=a=>l.value=a)},null,8,["options","modelValue"])):b("",!0),o.value===5?(f(),V(y,{key:1,class:"c-select-item",options:x.value,modelValue:t.value,"onUpdate:modelValue":e[4]||(e[4]=a=>t.value=a)},null,8,["options","modelValue"])):b("",!0),d(n("input",{class:"search__content--text","onUpdate:modelValue":e[5]||(e[5]=a=>i.value=a),placeholder:"Ingrese un password",type:"password"},null,512),[[c,i.value]]),d(n("input",{class:"search__content--text","onUpdate:modelValue":e[6]||(e[6]=a=>m.value=a),placeholder:"Repetir password",type:"password"},null,512),[[c,m.value]]),r(E,{title:j,onExecuteAction:R,disabled:u.value},null,8,["disabled"])])]),_:1}))}};export{J as default};
