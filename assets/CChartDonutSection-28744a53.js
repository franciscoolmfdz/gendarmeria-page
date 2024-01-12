import{o as i,c as r,b as s,z as f,a as n,A as p,f as y,j as v,B as u,t as o,F as b,p as g}from"./index-b59ede32.js";const C={class:"card"},k={class:"card-stacked"},w={class:"card-content"},x={key:0,class:"card-action"},D=p('<div class="row"><a class="col s6 m1 waves-effect waves-light btn amber"><li class="material-icons">edit</li></a><a class="col s6 m1 waves-effect waves-light btn red darken-3"><li class="material-icons">delete</li></a></div>',1),S=[D],V={__name:"CCard",props:{actionACtive:{type:Boolean,default:!1}},setup(t){return(a,c)=>(i(),r("div",C,[s("div",k,[s("div",w,[f(a.$slots,"default")]),t.actionACtive?(i(),r("div",x,S)):n("",!0)])]))}};const B={class:"point-section"},$={key:0,class:"card-puntuacion"},F={key:1,class:"card-label"},q={key:2,width:"160",height:"160",xmlns:"http://www.w3.org/2000/svg"},N=s("circle",{class:"circle_animation-back",r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,-1),P={key:1,class:"pie-points"},A={class:"chart"},T={class:"pie"},z={class:"value-pie"},j={class:"content-section"},E={class:"card-title"},L={class:"card-body"},G={class:"footer-section"},I={__name:"CChartDonutSection",props:{title:{type:String,default:null},subtitle:{type:String,default:null},pointValue:{type:Number,default:null},invertColor:{type:Boolean,default:!1},type:{type:Number,default:1},isPercent:{type:Boolean,default:!1},pointSubtitle:{type:String,default:""},pointTextfield:{type:String,default:""},donutDisabled:{type:Boolean,default:!1},piePoints:{type:Array,default:null},circleDisabled:{type:Boolean,default:!1}},setup(t){const a=t,c=()=>{if(a.isPercent){let l=a.pointValue.toString();return l=l.replace(".",","),l+"%"}else if(a.pointValue){if(d(parseFloat(a.pointValue))){let l=a.pointValue.toString();return l=l.replace(".",","),l}return a.pointValue}else if(a.donutDisabled)return a.pointTextfield;return""},d=l=>Number(l)===l&&l%1!==0,h=l=>{if(!l)return"zero";const e=parseFloat(l);if(a.type===1){if(e>0&&e<=1)return"a-bit";if(e>1&&e<=1.5)return"quarter";if(e>1.5&&e<=1.7)return"quarter-bit";if(e>1.7&&e<=2)return"half-to-half";if(e>2&&e<=2.499)return"almost-half";if(e===2.5)return"half";if(e>2.5&&e<=3.5)return"more-half";if(e>3.5&&e<=4)return"more-half-half";if(e>4&&e<=4.9)return"almost-full";if(e===5)return"full"}else if(a.type===2){if(e>0&&e<=20)return"a-bit";if(e>20&&e<=25)return"quarter";if(e>25&&e<=35)return"half-to-half";if(e>35&&e<50)return"almost-half";if(e===50)return"half";if(e>50&&e<=60)return"more-half";if(e>60&&e<=75)return"more-half-half";if(e>75&&e<=99.9)return"almost-full";if(e>=100)return"full"}else if(a.type===3){if(e>0&&e<=2)return"a-bit";if(e>2&&e<=3)return"quarter";if(e>3&&e<=5)return"half-to-half";if(e>5&&e<=7)return"almost-half";if(e===8)return"half";if(e>9&&e<=10)return"more-half";if(e>10&&e<=11)return"more-half-half";if(e>11&&e<=12)return"almost-full";if(e===13)return"full"}else if(a.type===5){if(e>0&&e<=1)return"a-bit";if(e>1&&e<=1.5)return"quarter";if(e>1.5&&e<=1.7)return"quarter-bit";if(e>2&&e<=3)return"half-to-half";if(e>3&&e<3.5)return"almost-half";if(e===3.5)return"half";if(e>3.5&&e<=4.5)return"more-half";if(e>5.5&&e<=6)return"more-half-half";if(e>6&&e<=6.9)return"almost-full";if(e>=7)return"full"}};return(l,e)=>(i(),y(V,{class:u(["donut-section card-information",t.invertColor?"invert-colors":""])},{default:v(()=>[s("div",B,[t.circleDisabled?n("",!0):(i(),r("div",{key:0,class:u(["circle-point",t.donutDisabled?"text-label":""])},[t.pointValue&&!t.donutDisabled?(i(),r("span",$,o(c()),1)):n("",!0),t.pointTextfield&&t.donutDisabled?(i(),r("span",F,o(c()),1)):n("",!0),t.donutDisabled?n("",!0):(i(),r("svg",q,[s("g",null,[N,s("circle",{class:u(["circle_animation",h(t.pointValue)]),r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,2)])]))],2)),t.circleDisabled?(i(),r("div",P,[s("div",A,[(i(!0),r(b,null,g(t.piePoints,(m,_)=>(i(),r("div",{class:u(["hold",`pie-chart-${_+1}`])},[s("div",T,[s("span",z,o(m)+"%",1)])],2))),256))])])):n("",!0)]),s("div",j,[s("span",E,o(t.title),1),s("span",L,o(t.subtitle),1)]),s("div",G,[f(l.$slots,"default")])]),_:3},8,["class"]))}};export{I as _,V as a};