import{u as $,g as l,h as k,e as h,y as B,G as D,o as f,f as V,j as N,_ as S,m as i,n as A,b as n,w as d,v as p,z as y,a as b}from"./index-dd4685c7.js";import{_ as C}from"./CHeaderBar-a2769ce8.js";import{_ as F}from"./CButton-4bbc2b87.js";import{a as G}from"./user-8e25d00b.js";const L={class:"section-form"},M=99,j="crear usuario",J={__name:"crearUsuario",setup(z){const g=$(),u=l(!1),I=l("Crear usuario"),s=l(null),t=l(null),c=l(null),v=l(null),r=l(null),m=l(null),w=l([{id:3,description:"Director nacional",baseRestriction:{id:4}},{id:4,description:"Director regional",baseRestriction:{id:4}},{id:5,description:"Alcaide",baseRestriction:{id:4}},{id:2,description:"Gestor",baseRestriction:{id:6}}]),x=l([]),U=l([]),o=l(null),R=async()=>{if(u.value=!0,r.value===m.value){const _=w.value.find(a=>a.id=o.value),e={name:c.value,username:v.value,roleId:_.id,password:r.value,restrictions:[_.baseRestriction]};s!=null&&s.value&&e.restrictions.push({typeId:2,value:s==null?void 0:s.value}),t!=null&&t.value&&e.restrictions.push({typeId:2,value:t==null?void 0:t.value}),await G(e)}u.value=!1};return k(async()=>{g.user.roleId!==1&&h.push("/l"),x.value=await B(),U.value=await D()}),(_,e)=>(f(),V(S,{class:"grafic-content"},{default:N(()=>[i(C,{title:I.value,"section-value":M},null,8,["title"]),i(A,{"active-spin":u.value},null,8,["active-spin"]),n("div",L,[d(n("input",{class:"search__content--text","onUpdate:modelValue":e[0]||(e[0]=a=>v.value=a),placeholder:"Ingresar correo",type:"text"},null,512),[[p,v.value]]),d(n("input",{class:"search__content--text","onUpdate:modelValue":e[1]||(e[1]=a=>c.value=a),placeholder:"Ingresar nombre usuario",type:"text"},null,512),[[p,c.value]]),i(y,{options:w.value,modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=a=>o.value=a)},null,8,["options","modelValue"]),o.value===4?(f(),V(y,{key:0,options:U.value,modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=a=>s.value=a)},null,8,["options","modelValue"])):b("",!0),o.value===5?(f(),V(y,{key:1,options:x.value,modelValue:t.value,"onUpdate:modelValue":e[4]||(e[4]=a=>t.value=a)},null,8,["options","modelValue"])):b("",!0),d(n("input",{class:"search__content--text","onUpdate:modelValue":e[5]||(e[5]=a=>r.value=a),placeholder:"Ingrese un password",type:"password"},null,512),[[p,r.value]]),d(n("input",{class:"search__content--text","onUpdate:modelValue":e[6]||(e[6]=a=>m.value=a),placeholder:"Repetir password",type:"password"},null,512),[[p,m.value]]),i(F,{title:j,onExecuteAction:R,disabled:u.value},null,8,["disabled"])])]),_:1}))}};export{J as default};
