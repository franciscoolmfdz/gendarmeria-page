import{o as f,c as R,b as d,g as l,u as N,V as T,h as r,i as z,r as _,f as w,j as D,_ as G,a as W}from"./index-e11d2db0.js";import{_ as J}from"./CSpinner-68c13a5e.js";import{_ as K}from"./CHeaderBar-7430ddcb.js";import{_ as Q}from"./CFilterbar-bbe1765b.js";import{_ as Z}from"./CCard-e78a7983.js";import{e as ee,H as V,a as te}from"./exporting-9b377c6a.js";import{g as ae}from"./dimensionHistory-30900885.js";import"./api-7944baea.js";const oe={class:"chart-polar"},se={class:"chart-polar__content"},ie={__name:"CPolarChart",props:{title:{type:String,default:""},subtitle:{type:String,default:""},optionsAxisX:{type:Object,required:!0},optionsAxisY:{type:Object,required:!0},plotOptions:{type:Object,required:!0},tooltip:{type:Object,required:!0},series:{type:Array,required:!0},pane:{type:Object,default:null}},setup(y){const t=y;ee(V),te(V);const a={chart:{polar:!0},title:{text:t.title},subtitle:{text:t.subtitle},pane:{startAngle:0,endAngle:360},xAxis:t.optionsAxisX,yAxis:t.optionsAxisY,plotOptions:t.plotOptions,tooltip:t.tooltip,series:t.series};return(h,g)=>(f(),R("div",oe,[d("div",se,[l(N(T),{type:"chart",options:a,redrawOnUpdate:!0,oneToOneUpdate:!1,animateOnUpdate:!0})])]))}};const ne={class:"chart-section"},re=d("span",{class:"card-title"},"Grafico calidad de vida de los internos",-1),le=d("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",-1),$=1,ge={__name:"VidaInternos",setup(y){const t=r(!1),a=z(),h=r("Calidad de vida de los internos"),g=r({tickInterval:1,min:2,max:9,labels:{format:"{value}"}}),k=r({min:0}),j=r({series:{pointStart:2,pointInterval:1},column:{pointPadding:0,groupPadding:0}}),F=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),i=_([]),v=_([{type:"line",name:"Promedio de carceles",data:[],pointPlacement:"between",dataLabels:{enabled:!0,color:"black",align:"center",y:0,style:{inside:!0,fontSize:"15px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),x=e=>e>0?Math.round(e*100)/100:0,H=async e=>{t.value=!0;const o=i.filter(s=>s.id!==e);i.splice(0,i.length),o.map(s=>i.push(s)),b(),await a.sleep(50),t.value=!1},b=()=>{let e=[0,0,0,0,0,0,0];i.map(o=>{o.data.map((s,c)=>{e[c]+=s})}),e=e.map(o=>x(o/i.length)),v[0].data=e},U=(e,o,s)=>_({id:e,name:o,data:s}),A=async(e,o,s)=>{var c,C;try{t.value=!0;let u=((c=a==null?void 0:a.penitenciaria)==null?void 0:c.id)??null,S=((C=a==null?void 0:a.penitenciaria)==null?void 0:C.description)??null;s&&(u=e,S=o);const I=a.historyId;if(I&&u){const Y={historyId:I,carcelId:u,categoryId:1};let P=[],B=await ae(Y),n=null;for(let m=2;m<=8;m++){const E=m,q=B.filter(p=>p.subCategoryId===E&&p.valueUsed===1),L=q.length;n=q.reduce((p,M)=>p+M.promPound,0),n=n/L,n=x(n),P.push(n)}i.push(U(u,S,P)),b()}}catch(O){console.log(O)}finally{t.value=!1}},X=async()=>{t.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await a.carcelesSelected.map(async e=>await A(e.id,e.description,!0))};return(e,o)=>(f(),w(G,null,{default:D(()=>[l(K,{title:h.value,"section-value":$},null,8,["title"]),l(J,{"active-spin":t.value},null,8,["active-spin"]),l(Q,{baseFilter:$,multipleDisabled:!1,onExecuteMount:X,onExecuteAction:A,onExecuteRemove:H}),d("div",ne,[l(Z,{class:"card-information"},{default:D(()=>[re,le]),_:1}),t.value?W("",!0):(f(),w(ie,{key:0,optionsAxisX:g.value,optionsAxisY:k.value,plotOptions:j.value,tooltip:F.value,series:v},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])]),_:1}))}};export{ge as default};
