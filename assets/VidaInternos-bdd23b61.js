import{o as f,c as R,b as d,g as l,u as N,V as T,h as r,i as z,r as _,f as w,j as D,_ as G,a as W}from"./index-81990198.js";import{_ as J}from"./CSpinner-bfff3c1b.js";import{_ as K}from"./CHeaderBar-c05e4acb.js";import{_ as Q}from"./CFilterbar-cf066549.js";import{_ as Z}from"./CCard-45074258.js";import{e as tt,H as V,a as et}from"./exporting-32b7d0aa.js";import{g as at}from"./dimensionHistory-2874fc68.js";import"./CSelect.vue_vue_type_style_index_0_lang-f7ab962f.js";import"./CSelect-97c825b8.js";import"./carceles-fea03c35.js";import"./api-ec658a74.js";const ot={class:"chart-polar"},it={class:"chart-polar__content"},st={__name:"CPolarChart",props:{title:{type:String,default:""},subtitle:{type:String,default:""},optionsAxisX:{type:Object,required:!0},optionsAxisY:{type:Object,required:!0},plotOptions:{type:Object,required:!0},tooltip:{type:Object,required:!0},series:{type:Array,required:!0},pane:{type:Object,default:null}},setup(y){const e=y;tt(V),et(V);const a={chart:{polar:!0},title:{text:e.title},subtitle:{text:e.subtitle},pane:{startAngle:0,endAngle:360},xAxis:e.optionsAxisX,yAxis:e.optionsAxisY,plotOptions:e.plotOptions,tooltip:e.tooltip,series:e.series};return(h,g)=>(f(),R("div",ot,[d("div",it,[l(N(T),{type:"chart",options:a,redrawOnUpdate:!0,oneToOneUpdate:!1,animateOnUpdate:!0})])]))}};const nt={class:"chart-section"},rt=d("span",{class:"card-title"},"Grafico calidad de vida de los internos",-1),lt=d("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",-1),$=1,bt={__name:"VidaInternos",setup(y){const e=r(!1),a=z(),h=r("Calidad de vida de los internos"),g=r({tickInterval:1,min:2,max:9,labels:{format:"{value}"}}),k=r({min:0}),j=r({series:{pointStart:2,pointInterval:1},column:{pointPadding:0,groupPadding:0}}),F=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),s=_([]),v=_([{type:"line",name:"Promedio de carceles",data:[],pointPlacement:"between",dataLabels:{enabled:!0,color:"black",align:"center",y:0,style:{inside:!0,fontSize:"15px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),x=t=>t>0?Math.round(t*100)/100:0,H=async t=>{e.value=!0;const o=s.filter(i=>i.id!==t);s.splice(0,s.length),o.map(i=>s.push(i)),b(),await a.sleep(50),e.value=!1},b=()=>{let t=[0,0,0,0,0,0,0];s.map(o=>{o.data.map((i,c)=>{t[c]+=i})}),t=t.map(o=>x(o/s.length)),v[0].data=t},U=(t,o,i)=>_({id:t,name:o,data:i}),A=async(t,o,i)=>{var c,C;try{e.value=!0;let u=((c=a==null?void 0:a.penitenciaria)==null?void 0:c.id)??null,S=((C=a==null?void 0:a.penitenciaria)==null?void 0:C.description)??null;i&&(u=t,S=o);const I=a.historyId;if(I&&u){const Y={historyId:I,carcelId:u,categoryId:1};let P=[],B=await at(Y),n=null;for(let m=2;m<=8;m++){const E=m,q=B.filter(p=>p.subCategoryId===E&&p.valueUsed===1),L=q.length;n=q.reduce((p,M)=>p+M.promPound,0),n=n/L,n=x(n),P.push(n)}s.push(U(u,S,P)),b()}}catch(O){console.log(O)}finally{e.value=!1}},X=async()=>{e.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await a.carcelesSelected.map(async t=>await A(t.id,t.description,!0))};return(t,o)=>(f(),w(G,null,{default:D(()=>[l(K,{title:h.value,"section-value":$},null,8,["title"]),l(J,{"active-spin":e.value},null,8,["active-spin"]),l(Q,{baseFilter:$,multipleDisabled:!1,onExecuteMount:X,onExecuteAction:A,onExecuteRemove:H}),d("div",nt,[l(Z,{class:"card-information"},{default:D(()=>[rt,lt]),_:1}),e.value?W("",!0):(f(),w(st,{key:0,optionsAxisX:g.value,optionsAxisY:k.value,plotOptions:j.value,tooltip:F.value,series:v},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])]),_:1}))}};export{bt as default};
