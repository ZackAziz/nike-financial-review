import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { DATA } from './data.mjs';
import { calc } from './calc.mjs';

let assertions=0,scenarioRuns=0;
const ok=(v,msg)=>{assert.ok(v,msg);assertions++;};
const close=(a,b,msg,tol=1e-9)=>{ok(Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=tol,`${msg}: ${a} vs ${b}`);};
const exact=(a,b,msg)=>{assert.equal(a,b,msg);assertions++;};
const throws=(fn,msg)=>{assert.throws(fn,undefined,msg);assertions++;};
const initial=JSON.stringify(DATA);
throws(()=>{DATA.annual.FY2026.income.revenue.value=0;},'Historical data deeply frozen');
const reference=JSON.parse(await fs.readFile(new URL('./reference-results.json',import.meta.url),'utf8'));
const summary=[];
function checkFinite(obj,path='result'){
 if(typeof obj==='number')ok(Number.isFinite(obj),path+' is finite');
 else if(obj&&typeof obj==='object')for(const [k,v]of Object.entries(obj))checkFinite(v,path+'.'+k);
}
function run(x){
 const r=calc.project(x);scenarioRuns++;
 checkFinite(r);
 for(const [k,v]of Object.entries(r.checks))if(k!=='fundingSufficient')ok(v,'Model check '+k);
 ok(r.wc.projected.receivables>=0&&r.wc.projected.inventory>=0&&r.wc.projected.payables>=0,'No negative operating balances');
 if(r.fundingGap>1e-9){exact(r.ratios.current,null,'Suppress unfunded current ratio');exact(r.netDebt,null,'Suppress unfunded net debt');close(r.endingTotalLiquidity,r.grossAvailableLiquidity-r.fundingGap,'Funding gap remains in headline liquidity');}
 return r;
}

// Every source-tagged figure retains a resolvable filing, fiscal period, page and line.
let sourcedFacts=0,verifyFacts=0;
function sources(obj){
 if(!obj||typeof obj!=='object')return;
 if(Object.hasOwn(obj,'value')){
  sourcedFacts++;
  ok(DATA.filings[obj.source?.filing],'Resolvable filing');
  ok(Number.isInteger(obj.source.printedPage)&&obj.source.printedPage>0,'Printed page');
  ok(typeof obj.source.period==='string'&&obj.source.period.startsWith('FY'),'Fiscal label');
  ok(typeof obj.source.line==='string'&&obj.source.line.length>0,'Source line');
  if(obj.status==='VERIFY'){verifyFacts++;exact(obj.value,null,'VERIFY remains null');}
  if(typeof obj.value==='number')close(obj.value*1000,Math.round(obj.value*1000),'Original million-dollar precision',1e-7);
  return;
 }
 for(const v of Object.values(obj))sources(v);
}
sources(DATA);
exact(verifyFacts,1,'Only unresolved FY2022 total D&A numeric fact');
for(const year of Object.keys(DATA.annual)){
 const h=calc.historical(year);for(const [k,v]of Object.entries(h.checks))ok(v,year+' '+k);
 close(h.adjustedCCC,h.days.receivables+h.days.inventory-h.days.payables,year+' CCC');
}
const q=calc.latestQuarter();for(const [k,v]of Object.entries(q.checks))ok(v,'Quarter '+k);
close(q.netDebt,-.475,'Q1 approved reported-debt net cash');
close(calc.historical('FY2026').netDebt,-1.085,'FY2026 approved net cash');
close(q.ttm.cogs,26.125,'TTM COGS');close(q.ttm.revenue,45.891,'TTM revenue');
close(q.dioTTM,7.846/26.125*365,'Q1 DIO uses TTM, not quarter-only COGS');
exact(q.adjustedReceivableDays,null,'Do not invent quarter-end trade/tariff split');

// Three hand-reproducible historical computations, independent of display formatting.
close(calc.historical('FY2026').grossMargin,19.911/46.398,'Hand check gross margin');
close(calc.historical('FY2026').days.receivables,5.247/46.398*365,'Hand check adjusted receivable days');
close(calc.historical('FY2026').fcf,2.868-.684,'Hand check FCF');

// All presets versus an independent 50-digit decimal reference, with identical defaults.
for(const [id,def]of Object.entries(calc.presets)){
 const x=calc.preset(id),r=run(x),e=reference[id];
 exact(x.baseline,'normalized',id+' normalized comparison');
 for(const k of ['revenue','cogs','nopat','fcfProxy','signedEndingLiquidAssets','signedEndingTotalLiquidity'])close(r[k],e[k],id+' '+k);
 for(const k of ['growthDeltaNWC','efficiencyDeltaNWC','totalDeltaNWC'])close(r.wc[k],e[k],id+' '+k);
 close(r.wc.adjustedCCC,e.adjustedCCC,id+' adjusted CCC');
 summary.push({scenario:def.label,inputs:x,revenue:r.revenue,cogs:r.cogs,nopat:r.nopat,
  growthDeltaNWC:r.wc.growthDeltaNWC,efficiencyDeltaNWC:r.wc.efficiencyDeltaNWC,totalDeltaNWC:r.wc.totalDeltaNWC,
  fcfProxy:r.fcfProxy,endingLiquidAssets:r.signedEndingLiquidAssets,totalLiquidity:r.signedEndingTotalLiquidity,
  adjustedCCC:r.wc.adjustedCCC,runwayBefore:r.runway.beforeDistributions,runwayAfter:r.runway.afterDistributions});
}

for(const year of ['FY2023','FY2024','FY2025','FY2026'])for(const mode of ['reported','normalized']){
 const x={...calc.defaults(year),baseline:mode},z=run(x);
 exact(z.wc.totalDeltaNWC,0,year+' '+mode+' exact zero-change NWC');
 close(z.wc.projected.inventory,DATA.annual[year].balance.inventory.value,'No phantom inventory');
 close(z.wc.projected.payables,DATA.annual[year].balance.accountsPayable.value,'No phantom AP');
 const dr=run({...x,receivableDaysChange:-1}),di=run({...x,inventoryDaysChange:-1}),dp=run({...x,payableDaysChange:1});
 close(dr.fcfProxy-z.fcfProxy,z.revenue/365,'Lower receivable days release cash');
 close(di.fcfProxy-z.fcfProxy,z.cogs/365,'Lower inventory days release cash');
 close(dp.fcfProxy-z.fcfProxy,z.cogs/365,'Higher payable days release cash');
 const interest=-DATA.annual[year].income.netInterestExpense.value*(1-x.taxRate);
 close(z.netInterestCashEffect,interest,'Signed after-tax net interest');
}
const z=run(calc.defaults());
close(z.base.cogs,27.473,'Normalized cost');
close(z.base.days.inventory,7.501/27.473*365,'DIO rebased to normalized COGS');
close(z.base.days.payables,3.6/27.473*365,'DPO rebased to normalized COGS');
close(z.netInterestCashEffect,.05*(1-.792/3.9),'Interest income is positive cash proxy');
close(z.debt.endingUndrawn,2,'Expired short facility removed');
close(run({renewFacilities:true}).debt.endingUndrawn,3,'Explicit renewal only');
close(z.debt.principal,2,'FY2027 principal maturity');
const refi=run({refinanceMaturity:true});
close(refi.debt.endingDebt,7.942,'Refinancing holds debt flat');
close(refi.debt.principal,0,'Refinancing removes bond cash repayment');
close(refi.signedEndingLiquidAssets-z.signedEndingLiquidAssets,2,'Refinancing retains 2B cash');
close(refi.netInterestCashEffect,z.netInterestCashEffect,'Refinancing interest-rate change not modeled');
close(run({growth:-.1}).operatingOverhead,11.360,'Default overhead stays fixed');
close(run({growth:-.1}).da,.747,'D&A stays fixed in downturn');
close(run({growth:-.1,overheadFlex:1}).operatingOverhead,11.360*.9,'Full overhead flex scales overhead');
close(run({growth:-.1,overheadFlex:.5}).operatingOverhead,11.360*.95,'Partial overhead flex');
close(run({growth:-.1}).demandCreation,4.754*.9,'Demand creation scales with revenue');
close(run({baseYear:'FY2025'}).debt.currentDebtAtHorizon,2,'Following-year current debt classification');
close(run({growth:.10}).wc.growthDeltaNWC,(5.247+7.501-3.6)*.10,'Growth funds additional NWC');
exact(calc.preset('tariffShock',{baseline:'reported'}).baseline,'reported','Preset preserves explicit independent toggle');
exact(z.runway.beforeDistributions.status,'no-burn','Before discretionary distributions no baseline cash burn');
close(z.runway.afterDistributions.months,9.027/(2+.146+2.407-z.fcfProxy)*12,'After-distribution coverage excludes undrawn facilities');
const nodist=run({buybacksB:0,dividendsB:0});
exact(nodist.runway.beforeDistributions.status,nodist.runway.afterDistributions.status,'Runways coincide without distributions');

// Every control individually at endpoints, all controls simultaneously at min/max, both baselines.
for(const baseline of ['reported','normalized']){
 for(const mode of ['off','dollars','percent'])for(const edge of [0,1]){
  const x={...calc.defaults(),baseline,tariffMode:mode};
  for(const [k,v]of Object.entries(calc.bounds))x[k]=v[edge];
  run(x);
 }
 for(const [k,v]of Object.entries(calc.bounds))for(const endpoint of v)run({baseline,[k]:endpoint});
}
// 256 operating-lever corners, repeated for both baseline modes.
const keys=['growth','marginBps','receivableDaysChange','inventoryDaysChange','payableDaysChange','capexRate','buybacksB','dividendsB'];
for(const baseline of ['normalized','reported'])for(let mask=0;mask<256;mask++){
 const x={baseline};keys.forEach((k,i)=>x[k]=calc.bounds[k][(mask>>i)&1]);run(x);
}
// Seeded stress tests across four annual bases, both baselines and all tariff input modes.
let seed=42617;const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
for(let n=0;n<320;n++){
 const x={...calc.defaults(['FY2023','FY2024','FY2025','FY2026'][n%4]),baseline:n%2?'reported':'normalized',
  tariffMode:['off','percent','dollars'][n%3],renewFacilities:n%2===0};
 for(const [k,[min,max]]of Object.entries(calc.bounds))x[k]=min+(max-min)*random();run(x);
}
for(const [k,[min,max]]of Object.entries(calc.bounds)){
 throws(()=>calc.project({[k]:NaN}),k+' NaN');throws(()=>calc.project({[k]:Infinity}),k+' Infinity');
 throws(()=>calc.project({[k]:min-1}),k+' below min');throws(()=>calc.project({[k]:max+1}),k+' above max');
 throws(()=>calc.project({[k]:'0'}),k+' rejects string');
}
throws(()=>calc.project({baseYear:'FY2022'}),'Unresolved FY2022 D&A is not guessed');
throws(()=>calc.project({baseYear:'FY2027 Q1'}),'Quarter cannot be an annual base');
throws(()=>calc.project({baseline:'unknown'}),'Invalid baseline');
throws(()=>calc.project({tariffMode:'both'}),'No simultaneous percent and dollar tariffs');
throws(()=>calc.project({renewFacilities:'true'}),'Reject string booleans');
throws(()=>calc.project({unexpected:1}),'Reject unknown keys');
const sens=calc.sensitivity();exact(sens.cells.length,5,'Sensitivity rows');exact(sens.cells[0].length,6,'Sensitivity columns');
for(const row of sens.cells)for(const cell of row){const r=run({growth:cell.growth,marginBps:cell.marginBps});close(cell.signedEndingTotalLiquidity,r.signedEndingTotalLiquidity,'Sensitivity reruns same engine');}
exact(JSON.stringify(DATA),initial,'No historical input mutation');

const report={status:'PASS',sourcedFacts,assertions,scenarioRuns,independentReference:'50-digit Python Decimal calculation; direct projected balance method',
 printedPage34Verified:{pdfPhysicalPage:36,url:DATA.filings.Q.pdfUrl,facilities:'Zero drawings at both dates explicitly disclosed',commercialPaper:'Zero outstanding during FY2027 Q1 explicitly disclosed'},summary};
await fs.writeFile(new URL('./test-results.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
const fields=['scenario','revenue','cogs','nopat','growthDeltaNWC','efficiencyDeltaNWC','totalDeltaNWC','fcfProxy','endingLiquidAssets','totalLiquidity','adjustedCCC'];
await fs.writeFile(new URL('./scenario-results.csv',import.meta.url),fields.join(',')+'\n'+summary.map(r=>fields.map(k=>typeof r[k]==='number'?r[k].toFixed(6):r[k]).join(',')).join('\n')+'\n');
console.table(summary.map(r=>Object.fromEntries(fields.map(k=>[k,typeof r[k]==='number'?Number(r[k].toFixed(6)):r[k]]))));
console.log(JSON.stringify({status:report.status,sourcedFacts,assertions,scenarioRuns}));
