import{o as f,c as R,a as d,b as l,u as N,V as T,r,d as _,e as q,w as D,_ as z,f as G}from"./index-909a904c.js";import{_ as W}from"./CSpinner-02a6450e.js";import{_ as J}from"./CHeaderBar-ce8cbd6a.js";import{u as K,_ as Q,a as Z}from"./CCard-7ec801a1.js";import{e as ee,H as V,a as te}from"./exporting-89b1efd4.js";import{g as ae}from"./dimensionHistory-b6bfb333.js";import"./api-7944baea.js";const oe={class:"chart-polar"},se={class:"chart-polar__content"},ie={__name:"CPolarChart",props:{title:{type:String,default:""},subtitle:{type:String,default:""},optionsAxisX:{type:Object,required:!0},optionsAxisY:{type:Object,required:!0},plotOptions:{type:Object,required:!0},tooltip:{type:Object,required:!0},series:{type:Array,required:!0},pane:{type:Object,default:null}},setup(y){const t=y;ee(V),te(V);const a={chart:{polar:!0},title:{text:t.title},subtitle:{text:t.subtitle},pane:{startAngle:0,endAngle:360},xAxis:t.optionsAxisX,yAxis:t.optionsAxisY,plotOptions:t.plotOptions,tooltip:t.tooltip,series:t.series};return(h,v)=>(f(),R("div",oe,[d("div",se,[l(N(T),{type:"chart",options:a,redrawOnUpdate:!0,oneToOneUpdate:!1,animateOnUpdate:!0})])]))}};const ne={class:"chart-section"},re=d("span",{class:"card-title"},"Grafico calidad de vida de los internos",-1),le=d("span",{class:"question--value"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ",-1),$=1,he={__name:"VidaInternos",setup(y){const t=r(!1),a=K(),h=r("Calidad de vida de los internos"),v=r({tickInterval:1,min:2,max:9,labels:{format:"{value}"}}),k=r({min:0}),F=r({series:{pointStart:2,pointInterval:1},column:{pointPadding:0,groupPadding:0}}),H=r({headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0}),i=_([]),g=_([{type:"line",name:"Promedio de carceles",data:[],pointPlacement:"between",dataLabels:{enabled:!0,color:"black",align:"center",y:0,style:{inside:!0,fontSize:"15px",fontFamily:"helvetica, arial, sans-serif",textShadow:!1,fontWeight:"normal"}}}]),x=e=>e>0?Math.round(e*100)/100:0,j=async e=>{t.value=!0;const o=i.filter(s=>s.id!==e);i.splice(0,i.length),o.map(s=>i.push(s)),b(),await a.sleep(50),t.value=!1},b=()=>{let e=[0,0,0,0,0,0,0];i.map(o=>{o.data.map((s,c)=>{e[c]+=s})}),e=e.map(o=>x(o/i.length)),g[0].data=e},U=(e,o,s)=>_({id:e,name:o,data:s}),A=async(e,o,s)=>{var c,C;try{t.value=!0;let u=((c=a==null?void 0:a.penitenciaria)==null?void 0:c.id)??null,S=((C=a==null?void 0:a.penitenciaria)==null?void 0:C.description)??null;s&&(u=e,S=o);const I=a.historyId;if(I&&u){const Y={historyId:I,carcelId:u,categoryId:1};let w=[],B=await ae(Y),n=null;for(let m=2;m<=8;m++){const E=m,P=B.filter(p=>p.subCategoryId===E&&p.valueUsed===1),L=P.length;n=P.reduce((p,M)=>p+M.promPound,0),n=n/L,n=x(n),w.push(n)}i.push(U(u,S,w)),b()}}catch(O){console.log(O)}finally{t.value=!1}},X=async()=>{t.value=!0,a.carcelesSelected&&a.carcelesSelected.length>0&&await a.carcelesSelected.map(async e=>await A(e.id,e.description,!0))};return(e,o)=>(f(),q(z,null,{default:D(()=>[l(J,{title:h.value,"section-value":$},null,8,["title"]),l(W,{"active-spin":t.value},null,8,["active-spin"]),l(Q,{baseFilter:$,multipleDisabled:!1,onExecuteMount:X,onExecuteAction:A,onExecuteRemove:j}),d("div",ne,[l(Z,{class:"card-information"},{default:D(()=>[re,le]),_:1}),t.value?G("",!0):(f(),q(ie,{key:0,optionsAxisX:v.value,optionsAxisY:k.value,plotOptions:F.value,tooltip:H.value,series:g},null,8,["optionsAxisX","optionsAxisY","plotOptions","tooltip","series"]))])]),_:1}))}};export{he as default};
