import{_ as c}from"./CCard-6c2e717d.js";import{o as n,f as h,j as d,b as t,c as i,t as a,a as m,q as o,s as p}from"./index-fc26754b.js";const _={class:"point-section"},y={class:"circle-point"},b={key:0,class:"card-puntuacion"},g={width:"160",height:"160",xmlns:"http://www.w3.org/2000/svg"},v=t("circle",{class:"circle_animation-back",r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,-1),C={class:"content-section"},V={class:"card-title"},w={class:"card-body"},S={class:"footer-section"},B={__name:"CChartDonutSection",props:{title:{type:String,default:null},subtitle:{type:String,default:null},pointValue:{type:Number,default:null},invertColor:{type:Boolean,default:!1},type:{type:Number,default:1},isPercent:{type:Boolean,default:!1},pointSubtitle:{type:String,default:""}},setup(r){const l=r,f=()=>l.isPercent?l.pointValue+"%":l.pointValue?l.pointValue:"",u=s=>{if(!s)return"zero";console.log(l.type);const e=parseFloat(s);if(l.type===1){if(e>0&&e<=1)return"a-bit";if(e>1&&e<=1.5)return"quarter";if(e>1.5&&e<=1.7)return"quarter-bit";if(e>1.7&&e<=2)return"half-to-half";if(e>2&&e<=2.499)return"almost-half";if(e===2.5)return"half";if(e>2.5&&e<=3.5)return"more-half";if(e>3.5&&e<=4)return"more-half-half";if(e>4&&e<=4.9)return"almost-full";if(e===5)return"full"}else if(l.type===2){if(e>0&&e<=20)return"a-bit";if(e>20&&e<=25)return"quarter";if(e>25&&e<=35)return"half-to-half";if(e>35&&e<=49.499)return"almost-half";if(e===50)return"half";if(e>50&&e<=60)return"more-half";if(e>60&&e<=75)return"more-half-half";if(e>75&&e<=99.9)return"almost-full";if(e===100)return"full"}else if(l.type===3){if(e>0&&e<=2)return"a-bit";if(e>2&&e<=3)return"quarter";if(e>3&&e<=5)return"half-to-half";if(e>5&&e<=7)return"almost-half";if(e===8)return"half";if(e>9&&e<=10)return"more-half";if(e>10&&e<=11)return"more-half-half";if(e>11&&e<=12)return"almost-full";if(e===13)return"full"}};return(s,e)=>(n(),h(c,{class:o(["donut-section card-information",r.invertColor?"invert-colors":""])},{default:d(()=>[t("div",_,[t("div",y,[r.pointValue?(n(),i("span",b,a(f()),1)):m("",!0),(n(),i("svg",g,[t("g",null,[v,t("circle",{class:o(["circle_animation",u(r.pointValue)]),r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,2)])]))])]),t("div",C,[t("span",V,a(r.title),1),t("span",w,a(r.subtitle),1)]),t("div",S,[p(s.$slots,"default")])]),_:3},8,["class"]))}};export{B as _};
