import{o as a,c as i,b as l,z as f,a as r,A as m,f as p,j as y,B as c,t as n,F as v,p as b}from"./index-25c43d8d.js";const C={class:"card"},g={class:"card-stacked"},k={class:"card-content"},w={key:0,class:"card-action"},x=m('<div class="row"><a class="col s6 m1 waves-effect waves-light btn amber"><li class="material-icons">edit</li></a><a class="col s6 m1 waves-effect waves-light btn red darken-3"><li class="material-icons">delete</li></a></div>',1),D=[x],B={__name:"CCard",props:{actionACtive:{type:Boolean,default:!1}},setup(t){return(s,u)=>(a(),i("div",C,[l("div",g,[l("div",k,[f(s.$slots,"default")]),t.actionACtive?(a(),i("div",w,D)):r("",!0)])]))}};const S={class:"point-section"},V={key:0,class:"card-puntuacion"},$={key:1,class:"card-label"},q={key:2,width:"160",height:"160",xmlns:"http://www.w3.org/2000/svg"},N=l("circle",{class:"circle_animation-back",r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,-1),P={key:1,class:"pie-points"},A={class:"chart"},T={class:"pie"},z={class:"value-pie"},F={class:"content-section"},j={class:"card-title"},E={class:"card-body"},L={class:"footer-section"},H={__name:"CChartDonutSection",props:{title:{type:String,default:null},subtitle:{type:String,default:null},pointValue:{type:Number,default:null},invertColor:{type:Boolean,default:!1},type:{type:Number,default:1},isPercent:{type:Boolean,default:!1},pointSubtitle:{type:String,default:""},pointTextfield:{type:String,default:""},donutDisabled:{type:Boolean,default:!1},piePoints:{type:Array,default:null},circleDisabled:{type:Boolean,default:!1}},setup(t){const s=t,u=()=>s.isPercent?s.pointValue+"%":s.pointValue?s.pointValue:s.donutDisabled?s.pointTextfield:"",d=o=>{if(!o)return"zero";const e=parseFloat(o);if(s.type===1){if(e>0&&e<=1)return"a-bit";if(e>1&&e<=1.5)return"quarter";if(e>1.5&&e<=1.7)return"quarter-bit";if(e>1.7&&e<=2)return"half-to-half";if(e>2&&e<=2.499)return"almost-half";if(e===2.5)return"half";if(e>2.5&&e<=3.5)return"more-half";if(e>3.5&&e<=4)return"more-half-half";if(e>4&&e<=4.9)return"almost-full";if(e===5)return"full"}else if(s.type===2){if(e>0&&e<=20)return"a-bit";if(e>20&&e<=25)return"quarter";if(e>25&&e<=35)return"half-to-half";if(e>35&&e<50)return"almost-half";if(e===50)return"half";if(e>50&&e<=60)return"more-half";if(e>60&&e<=75)return"more-half-half";if(e>75&&e<=99.9)return"almost-full";if(e>=100)return"full"}else if(s.type===3){if(e>0&&e<=2)return"a-bit";if(e>2&&e<=3)return"quarter";if(e>3&&e<=5)return"half-to-half";if(e>5&&e<=7)return"almost-half";if(e===8)return"half";if(e>9&&e<=10)return"more-half";if(e>10&&e<=11)return"more-half-half";if(e>11&&e<=12)return"almost-full";if(e===13)return"full"}else if(s.type===5){if(e>0&&e<=1)return"a-bit";if(e>1&&e<=1.5)return"quarter";if(e>1.5&&e<=1.7)return"quarter-bit";if(e>2&&e<=3)return"half-to-half";if(e>3&&e<3.5)return"almost-half";if(e===3.5)return"half";if(e>3.5&&e<=4.5)return"more-half";if(e>5.5&&e<=6)return"more-half-half";if(e>6&&e<=6.9)return"almost-full";if(e>=7)return"full"}};return(o,e)=>(a(),p(B,{class:c(["donut-section card-information",t.invertColor?"invert-colors":""])},{default:y(()=>[l("div",S,[t.circleDisabled?r("",!0):(a(),i("div",{key:0,class:c(["circle-point",t.donutDisabled?"text-label":""])},[t.pointValue&&!t.donutDisabled?(a(),i("span",V,n(u()),1)):r("",!0),t.pointTextfield&&t.donutDisabled?(a(),i("span",$,n(u()),1)):r("",!0),t.donutDisabled?r("",!0):(a(),i("svg",q,[l("g",null,[N,l("circle",{class:c(["circle_animation",d(t.pointValue)]),r:"65.85699",cy:"81",cx:"81","stroke-width":"8",fill:"none"},null,2)])]))],2)),t.circleDisabled?(a(),i("div",P,[l("div",A,[(a(!0),i(v,null,b(t.piePoints,(h,_)=>(a(),i("div",{class:c(["hold",`pie-chart-${_+1}`])},[l("div",T,[l("span",z,n(h)+"%",1)])],2))),256))])])):r("",!0)]),l("div",F,[l("span",j,n(t.title),1),l("span",E,n(t.subtitle),1)]),l("div",L,[f(o.$slots,"default")])]),_:3},8,["class"]))}};export{H as _,B as a};
