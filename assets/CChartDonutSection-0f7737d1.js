import{_ as m}from"./CCard-83fab194.js";import{o as s,f as p,j as y,b as l,c as i,z as u,t as a,a as n,F as b,p as _,A as v}from"./index-21f23004.js";const g={class:"point-section"},D={key:0,class:"card-puntuacion"},k={key:1,class:"card-label"},x={key:2,width:"160",height:"160",xmlns:"http://www.w3.org/2000/svg"},C=l("circle",{class:"circle_animation-back",r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,-1),S={key:1,class:"pie-points"},V={class:"chart"},w={class:"pie"},B={class:"value-pie"},q={class:"content-section"},P={class:"card-title"},N={class:"card-body"},T={class:"footer-section"},$={__name:"CChartDonutSection",props:{title:{type:String,default:null},subtitle:{type:String,default:null},pointValue:{type:Number,default:null},invertColor:{type:Boolean,default:!1},type:{type:Number,default:1},isPercent:{type:Boolean,default:!1},pointSubtitle:{type:String,default:""},pointTextfield:{type:String,default:""},donutDisabled:{type:Boolean,default:!1},piePoints:{type:Array,default:null},circleDisabled:{type:Boolean,default:!1}},setup(t){const r=t,f=()=>r.isPercent?r.pointValue+"%":r.pointValue?r.pointValue:r.donutDisabled?r.pointTextfield:"",c=o=>{if(!o)return"zero";const e=parseFloat(o);if(r.type===1){if(e>0&&e<=1)return"a-bit";if(e>1&&e<=1.5)return"quarter";if(e>1.5&&e<=1.7)return"quarter-bit";if(e>1.7&&e<=2)return"half-to-half";if(e>2&&e<=2.499)return"almost-half";if(e===2.5)return"half";if(e>2.5&&e<=3.5)return"more-half";if(e>3.5&&e<=4)return"more-half-half";if(e>4&&e<=4.9)return"almost-full";if(e===5)return"full"}else if(r.type===2){if(e>0&&e<=20)return"a-bit";if(e>20&&e<=25)return"quarter";if(e>25&&e<=35)return"half-to-half";if(e>35&&e<=49.499)return"almost-half";if(e===50)return"half";if(e>50&&e<=60)return"more-half";if(e>60&&e<=75)return"more-half-half";if(e>75&&e<=99.9)return"almost-full";if(e===100)return"full"}else if(r.type===3){if(e>0&&e<=2)return"a-bit";if(e>2&&e<=3)return"quarter";if(e>3&&e<=5)return"half-to-half";if(e>5&&e<=7)return"almost-half";if(e===8)return"half";if(e>9&&e<=10)return"more-half";if(e>10&&e<=11)return"more-half-half";if(e>11&&e<=12)return"almost-full";if(e===13)return"full"}else if(r.type===5){if(e>0&&e<=1)return"a-bit";if(e>1&&e<=1.5)return"quarter";if(e>1.5&&e<=1.7)return"quarter-bit";if(e>2&&e<=3)return"half-to-half";if(e>3&&e<=3.499)return"almost-half";if(e===3.5)return"half";if(e>3.5&&e<=4.5)return"more-half";if(e>5.5&&e<=6)return"more-half-half";if(e>6&&e<=6.9)return"almost-full";if(e>=7)return"full"}};return(o,e)=>(s(),p(m,{class:u(["donut-section card-information",t.invertColor?"invert-colors":""])},{default:y(()=>[l("div",g,[t.circleDisabled?n("",!0):(s(),i("div",{key:0,class:u(["circle-point",t.donutDisabled?"text-label":""])},[t.pointValue&&!t.donutDisabled?(s(),i("span",D,a(f()),1)):n("",!0),t.pointTextfield&&t.donutDisabled?(s(),i("span",k,a(f()),1)):n("",!0),t.donutDisabled?n("",!0):(s(),i("svg",x,[l("g",null,[C,l("circle",{class:u(["circle_animation",c(t.pointValue)]),r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,2)])]))],2)),t.circleDisabled?(s(),i("div",S,[l("div",V,[(s(!0),i(b,null,_(t.piePoints,(d,h)=>(s(),i("div",{class:u(["hold",`pie-chart-${h+1}`])},[l("div",w,[l("span",B,a(d)+"%",1)])],2))),256))])])):n("",!0)]),l("div",q,[l("span",P,a(t.title),1),l("span",N,a(t.subtitle),1)]),l("div",T,[v(o.$slots,"default")])]),_:3},8,["class"]))}};export{$ as _};
