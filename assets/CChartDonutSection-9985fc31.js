import{_ as m}from"./CCard-3bdb47bf.js";import{o as r,f as p,j as y,b as s,c as i,s as u,t as a,a as n,F as b,p as _,x as v}from"./index-202658ec.js";const g={class:"point-section"},x={key:0,class:"card-puntuacion"},D={key:1,class:"card-label"},k={key:2,width:"160",height:"160",xmlns:"http://www.w3.org/2000/svg"},C=s("circle",{class:"circle_animation-back",r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,-1),S={key:1,class:"pie-points"},V={class:"chart"},w={class:"pie"},B={class:"value-pie"},q={class:"content-section"},P={class:"card-title"},N={class:"card-body"},T={class:"footer-section"},z={__name:"CChartDonutSection",props:{title:{type:String,default:null},subtitle:{type:String,default:null},pointValue:{type:Number,default:null},invertColor:{type:Boolean,default:!1},type:{type:Number,default:1},isPercent:{type:Boolean,default:!1},pointSubtitle:{type:String,default:""},pointTextfield:{type:String,default:""},donutDisabled:{type:Boolean,default:!1},piePoints:{type:Array,default:null},circleDisabled:{type:Boolean,default:!1}},setup(t){const l=t,f=()=>l.isPercent?l.pointValue+"%":l.pointValue?l.pointValue:l.donutDisabled?l.pointTextfield:"",c=o=>{if(!o)return"zero";console.log(l.type);const e=parseFloat(o);if(l.type===1){if(e>0&&e<=1)return"a-bit";if(e>1&&e<=1.5)return"quarter";if(e>1.5&&e<=1.7)return"quarter-bit";if(e>1.7&&e<=2)return"half-to-half";if(e>2&&e<=2.499)return"almost-half";if(e===2.5)return"half";if(e>2.5&&e<=3.5)return"more-half";if(e>3.5&&e<=4)return"more-half-half";if(e>4&&e<=4.9)return"almost-full";if(e===5)return"full"}else if(l.type===2){if(e>0&&e<=20)return"a-bit";if(e>20&&e<=25)return"quarter";if(e>25&&e<=35)return"half-to-half";if(e>35&&e<=49.499)return"almost-half";if(e===50)return"half";if(e>50&&e<=60)return"more-half";if(e>60&&e<=75)return"more-half-half";if(e>75&&e<=99.9)return"almost-full";if(e===100)return"full"}else if(l.type===3){if(e>0&&e<=2)return"a-bit";if(e>2&&e<=3)return"quarter";if(e>3&&e<=5)return"half-to-half";if(e>5&&e<=7)return"almost-half";if(e===8)return"half";if(e>9&&e<=10)return"more-half";if(e>10&&e<=11)return"more-half-half";if(e>11&&e<=12)return"almost-full";if(e===13)return"full"}else if(l.type===5){if(e>0&&e<=1)return"a-bit";if(e>1&&e<=1.5)return"quarter";if(e>1.5&&e<=1.7)return"quarter-bit";if(e>2&&e<=3)return"half-to-half";if(e>3&&e<=3.499)return"almost-half";if(e===3.5)return"half";if(e>3.5&&e<=4.5)return"more-half";if(e>5.5&&e<=6)return"more-half-half";if(e>6&&e<=6.9)return"almost-full";if(e>=7)return"full"}};return(o,e)=>(r(),p(m,{class:u(["donut-section card-information",t.invertColor?"invert-colors":""])},{default:y(()=>[s("div",g,[t.circleDisabled?n("",!0):(r(),i("div",{key:0,class:u(["circle-point",t.donutDisabled?"text-label":""])},[t.pointValue&&!t.donutDisabled?(r(),i("span",x,a(f()),1)):n("",!0),t.pointTextfield&&t.donutDisabled?(r(),i("span",D,a(f()),1)):n("",!0),t.donutDisabled?n("",!0):(r(),i("svg",k,[s("g",null,[C,s("circle",{class:u(["circle_animation",c(t.pointValue)]),r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,2)])]))],2)),t.circleDisabled?(r(),i("div",S,[s("div",V,[(r(!0),i(b,null,_(t.piePoints,(d,h)=>(r(),i("div",{class:u(["hold",`pie-chart-${h+1}`])},[s("div",w,[s("span",B,a(d)+"%",1)])],2))),256))])])):n("",!0)]),s("div",q,[s("span",P,a(t.title),1),s("span",N,a(t.subtitle),1)]),s("div",T,[v(o.$slots,"default")])]),_:3},8,["class"]))}};export{z as _};
