import{_ as f}from"./CCard-23aa0275.js";import{o as i,f as c,j as a,b as e,t as n,c as h,q as o,s as d}from"./index-268772aa.js";const m={class:"point-section"},_={class:"circle-point"},p={class:"card-puntuacion"},u={width:"160",height:"160",xmlns:"http://www.w3.org/2000/svg"},y=e("circle",{class:"circle_animation-back",r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,-1),b={class:"content-section"},g={class:"card-title"},C={class:"card-body"},w={class:"footer-section"},q={__name:"CChartDonutSection",props:{title:{type:String,default:null},subtitle:{type:String,default:null},pointValue:{type:Number,default:null},invertColor:{type:Boolean,default:!1},type:{type:Number,default:1}},setup(r){const s=r,l=t=>{if(!t)return"zero";if(s.type===1){if(t>0&&t<=1)return"a-bit";if(t>1&&t<=1.5)return"quarter";if(t>1.5&&t<=1.7)return"quarter-bit";if(t>1.7&&t<=2)return"half-to-half";if(t>2&&t<=2.499)return"almost-half";if(t===2.5)return"half";if(t>2.5&&t<=3.5)return"more-half";if(t>3.5&&t<=4)return"more-half-half";if(t>4&&t<=4.9)return"almost-full";if(t===5)return"full"}else if(s.type===2){if(t>0&&t<=20)return"a-bit";if(t>20&&t<=25)return"quarter";if(t>25&&t<=35)return"half-to-half";if(t>35&&t<=49.499)return"almost-half";if(t===50)return"half";if(t>50&&t<=60)return"more-half";if(t>60&&t<=75)return"more-half-half";if(t>75&&t<=99.9)return"almost-full";if(t===100)return"full"}else if(s.type===3){if(t>0&&t<=2)return"a-bit";if(t>2&&t<=3)return"quarter";if(t>3&&t<=5)return"half-to-half";if(t>5&&t<=7)return"almost-half";if(t===8)return"half";if(t>9&&t<=10)return"more-half";if(t>10&&t<=11)return"more-half-half";if(t>11&&t<=12)return"almost-full";if(t===13)return"full"}};return(t,k)=>(i(),c(f,{class:o(["donut-section card-information",r.invertColor?"invert-colors":""])},{default:a(()=>[e("div",m,[e("div",_,[e("span",p,n(r.pointValue||""),1),(i(),h("svg",u,[e("g",null,[y,e("circle",{class:o(["circle_animation",l(r.pointValue)]),r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,2)])]))])]),e("div",b,[e("span",g,n(r.title),1),e("span",C,n(r.subtitle),1)]),e("div",w,[d(t.$slots,"default")])]),_:3},8,["class"]))}};export{q as _};
