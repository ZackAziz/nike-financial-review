import { DATA } from './data.mjs';

// All financial formulas live here. No DOM, charting, network, or mutable DATA.
export const calc = (() => {
  const DAYS = 365;
  const EPS = 1e-9; // USD billions; $1 tolerance for numerical reconciliations.
  const zero = x => Object.is(x, -0) ? 0 : x;
  const near = (a,b) => Math.abs(a-b) <= EPS;
  const factValue = f => {
    if (!f || typeof f.value !== 'number' || !Number.isFinite(f.value))
      throw new Error('Missing or nonnumeric verified input');
    return f.value;
  };
  const values = group => Object.fromEntries(Object.entries(group).map(([k,f])=>[k,f.value]));
  const ratio = (a,b) => Number.isFinite(a) && Number.isFinite(b) && b !== 0 ? a/b : null;
  function record(period) {
    const rec = DATA.annual[period];
    if (!rec) throw new Error('Unknown annual base period');
    return rec;
  }
  function adjustedAR(rec) {
    // Prior years retain reported AR as the approved proxy, not a claim of zero non-trade AR.
    return factValue(rec.balance.reportedReceivables) -
      (rec.fiscalYear === 2026 ? factValue(DATA.adjustments.tariffReceivableFY2026) : 0);
  }
  const availableFacilities = rec => Object.values(rec.facilities)
    .filter(x=>x.commitment).reduce((sum,x)=>sum+factValue(x.commitment)-factValue(x.drawn),0);
  const totalDebt = b => b.notesPayable+b.currentDebt+b.longTermDebt;
  function historical(period) {
    const rec=record(period),i=values(rec.income),b=values(rec.balance),c=values(rec.cashFlow);
    const ar=adjustedAR(rec),fcf=c.cfo-c.capex,liquid=b.cash+b.shortTermInvestments;
    const days={receivables:ar/i.revenue*DAYS,inventory:b.inventory/i.cogs*DAYS,payables:b.accountsPayable/i.cogs*DAYS};
    return {period,kind:'historical-derived',revenue:i.revenue,grossMargin:i.grossProfit/i.revenue,
      fcf,netIncome:i.netIncome,fcfMargin:fcf/i.revenue,fcfConversion:ratio(fcf,i.netIncome),
      ebit:i.pretaxIncome+i.netInterestExpense,operatingProfit:i.grossProfit-i.sga,
      adjustedReceivables:ar,days,adjustedCCC:days.receivables+days.inventory-days.payables,
      currentRatio:b.currentAssets/b.currentLiabilities,
      adjustedQuickRatio:(liquid+ar)/b.currentLiabilities,cashRatio:liquid/b.currentLiabilities,
      liquidAssets:liquid,totalLiquidity:liquid+availableFacilities(rec),
      netDebt:totalDebt(b)-liquid,effectiveTaxRate:i.taxExpense/i.pretaxIncome,
      checks:reportedChecks(rec)};
  }
  function reportedChecks(rec) {
    const i=values(rec.income),b=values(rec.balance),c=values(rec.cashFlow);
    const cfSum=i.netIncome+c.depreciationLine+c.deferredTax+c.stockCompensation+
      c.impairmentAmortizationOther+c.noncashFX+c.receivablesCashEffect+
      c.inventoryCashEffect+c.otherAssetsCashEffect+c.otherLiabilitiesCashEffect;
    return {
      grossProfit:near(i.revenue-i.cogs,i.grossProfit),
      sga:near(i.demandCreation+i.operatingOverhead,i.sga),
      pretax:near(i.grossProfit-i.sga-i.netInterestExpense-i.otherExpense,i.pretaxIncome),
      netIncome:near(i.pretaxIncome-i.taxExpense,i.netIncome),
      currentAssets:near(b.cash+b.shortTermInvestments+b.reportedReceivables+b.inventory+b.otherCurrentAssets,b.currentAssets),
      currentLiabilities:near(b.accountsPayable+b.accruedLiabilities+b.taxPayable+b.notesPayable+b.currentDebt+b.currentLeaseLiabilities,b.currentLiabilities),
      balanceSheet:near(b.currentLiabilities+b.longTermDebt+b.noncurrentLeaseLiabilities+b.otherNoncurrentLiabilities+b.equity,b.assets),
      cfo:near(cfSum,c.cfo),
      segments:near(Object.values(rec.segments).reduce((s,f)=>s+factValue(f),0),i.revenue)
    };
  }
  function latestQuarter() {
    const q=DATA.latestQuarter,p=DATA.priorYearQuarter,annual=record('FY2026');
    const i=values(q.income),b=values(q.balance),c=values(q.cashFlow),pi=values(p.income),pc=values(p.cashFlow);
    const ai=values(annual.income),ac=values(annual.cashFlow);
    const ttm={revenue:ai.revenue-pi.revenue+i.revenue,cogs:ai.cogs-pi.cogs+i.cogs,
      netIncome:ai.netIncome-pi.netIncome+i.netIncome,cfo:ac.cfo-pc.cfo+c.cfo,
      capex:ac.capex-pc.capex+c.capex};
    ttm.fcf=ttm.cfo-ttm.capex;
    const liquid=b.cash+b.shortTermInvestments;
    return {period:'FY2027 Q1',asOf:q.asOf,kind:'historical-derived',revenue:i.revenue,
      revenueYoY:i.revenue/pi.revenue-1,grossMargin:i.grossProfit/i.revenue,
      grossMarginYoYBps:(i.grossProfit/i.revenue-pi.grossProfit/pi.revenue)*10000,
      fcf:c.cfo-c.capex,priorQuarterFCF:pc.cfo-pc.capex,fcfMargin:(c.cfo-c.capex)/i.revenue,
      fcfConversion:ratio(c.cfo-c.capex,i.netIncome),currentRatio:b.currentAssets/b.currentLiabilities,
      cashRatio:liquid/b.currentLiabilities,netDebt:totalDebt(b)-liquid,
      totalLiquidity:liquid+factValue(q.facilities.commitment)-factValue(q.facilities.drawn),
      adjustedReceivableDays:null,adjustedQuickRatio:null,adjustedCCC:null,
      missingProxyReason:'Exact outstanding tariff/non-trade split not established at quarter end.',
      dioTTM:b.inventory/ttm.cogs*DAYS,dpoTTM:b.accountsPayable/ttm.cogs*DAYS,ttm,
      checks:reportedChecks(q)};
  }

  const bounds={receivableDaysChange:[-15,15],inventoryDaysChange:[-30,30],payableDaysChange:[-15,15],
    growth:[-.15,.15],marginBps:[-400,200],tariffB:[0,2],tariffRate:[0,.10],
    capexRate:[0,.05],buybacksB:[0,10],dividendsB:[0,5],taxRate:[0,.40],overheadFlex:[0,1]};
  function defaults(baseYear='FY2026') {
    const rec=record(baseYear),i=values(rec.income),c=values(rec.cashFlow);
    if(c.da===null)throw new Error('FY2022 simulation unavailable: total D&A remains VERIFY.');
    return {baseYear,baseline:'normalized',receivableDaysChange:0,inventoryDaysChange:0,payableDaysChange:0,
      growth:0,marginBps:0,tariffMode:'off',tariffB:0,tariffRate:0,
      capexRate:c.capex/i.revenue,buybacksB:c.buybacks,dividendsB:c.dividends,
      taxRate:i.taxExpense/i.pretaxIncome,overheadFlex:0,renewFacilities:false,refinanceMaturity:false};
  }
  function inputs(overrides={}) {
    if(!overrides || typeof overrides!=='object' || Array.isArray(overrides))throw new Error('Inputs must be an object.');
    const def=defaults(overrides.baseYear??'FY2026');
    for(const k of Object.keys(overrides))if(!Object.hasOwn(def,k))throw new Error(`Unknown input: ${k}`);
    const x={...def,...overrides};
    if(!['normalized','reported'].includes(x.baseline))throw new Error('Invalid baseline');
    if(!['off','dollars','percent'].includes(x.tariffMode))throw new Error('Invalid tariff mode');
    if(typeof x.renewFacilities!=='boolean')throw new Error('Renewal must be boolean');
    if(typeof x.refinanceMaturity!=='boolean')throw new Error('Refinancing must be boolean');
    for(const [key,[min,max]]of Object.entries(bounds))
      if(typeof x[key]!=='number'||!Number.isFinite(x[key])||x[key]<min||x[key]>max)
        throw new Error(`Invalid ${key}: expected finite number from ${min} to ${max}`);
    return x;
  }
  function baseline(rec,mode) {
    const i=values(rec.income),b=values(rec.balance);
    const normalization=mode==='normalized'&&rec.fiscalYear===2026?factValue(DATA.adjustments.tariffBenefitFY2026):0;
    const cogs=i.cogs+normalization;
    return {normalizationB:normalization,cogs,grossMargin:1-cogs/i.revenue,
      adjustedReceivables:adjustedAR(rec),inventory:b.inventory,accountsPayable:b.accountsPayable,
      days:{receivables:adjustedAR(rec)/i.revenue*DAYS,inventory:b.inventory/cogs*DAYS,payables:b.accountsPayable/cogs*DAYS}};
  }
  function workingCapital(base,baseRevenue,projectedRevenue,projectedCOGS,x) {
    // Algebraically anchored to actual balances. At zero growth/cost/lever change, deltas are exactly zero.
    const revenueScale=projectedRevenue/baseRevenue-1,costScale=projectedCOGS/base.cogs-1;
    const growth={receivables:base.adjustedReceivables*revenueScale,inventory:base.inventory*costScale,
      payables:base.accountsPayable*costScale};
    const efficiency={receivables:x.receivableDaysChange*projectedRevenue/DAYS,
      inventory:x.inventoryDaysChange*projectedCOGS/DAYS,payables:x.payableDaysChange*projectedCOGS/DAYS};
    const growthDeltaNWC=zero(growth.receivables+growth.inventory-growth.payables);
    const efficiencyDeltaNWC=zero(efficiency.receivables+efficiency.inventory-efficiency.payables);
    const projected={receivables:base.adjustedReceivables+growth.receivables+efficiency.receivables,
      inventory:base.inventory+growth.inventory+efficiency.inventory,
      payables:base.accountsPayable+growth.payables+efficiency.payables};
    const days={receivables:base.days.receivables+x.receivableDaysChange,
      inventory:base.days.inventory+x.inventoryDaysChange,payables:base.days.payables+x.payableDaysChange};
    return {baseDays:base.days,days,projected,growth,efficiency,growthDeltaNWC,efficiencyDeltaNWC,
      totalDeltaNWC:zero(growthDeltaNWC+efficiencyDeltaNWC),growthCashImpact:zero(-growthDeltaNWC),
      efficiencyCashImpact:zero(-efficiencyDeltaNWC),
      leverCash:{receivables:zero(-efficiency.receivables),inventory:zero(-efficiency.inventory),payables:zero(efficiency.payables)},
      baseNWC:base.adjustedReceivables+base.inventory-base.accountsPayable,
      projectedNWC:projected.receivables+projected.inventory-projected.payables,
      adjustedCCC:days.receivables+days.inventory-days.payables};
  }
  function debtAndFacilities(rec,x) {
    const b=values(rec.balance),targetYear=rec.fiscalYear+1,horizon=`${targetYear}-05-31`;
    const maturity=year=>rec.debtMaturities.filter(m=>m.fiscalYear===year).reduce((s,m)=>s+factValue(m.principal),0);
    const scheduledBondPrincipal=maturity(targetYear);
    const refinancedPrincipal=x.refinanceMaturity?scheduledBondPrincipal:0;
    const grossPrincipal=scheduledBondPrincipal+b.notesPayable;
    const principal=grossPrincipal-refinancedPrincipal;
    const endingDebt=totalDebt(b)-grossPrincipal+refinancedPrincipal;
    const facilities=Object.entries(rec.facilities).filter(([,f])=>f.commitment).map(([id,f])=>{
      const undrawn=factValue(f.commitment)-factValue(f.drawn),expired=f.expiry.value<=horizon;
      return {id,expiry:f.expiry.value,undrawn,expired,renewed:expired&&x.renewFacilities,
        endingUndrawn:!expired||x.renewFacilities?undrawn:0};
    });
    return {targetYear,horizon,principal,grossPrincipal,refinancedPrincipal,scheduledBondPrincipal,endingDebt,currentDebtAtHorizon:Math.min(endingDebt,maturity(targetYear+1)),
      facilities,startingUndrawn:availableFacilities(rec),endingUndrawn:facilities.reduce((s,f)=>s+f.endingUndrawn,0)};
  }
  function coverage(resources,annualCashUse) {
    return annualCashUse>EPS?{months:Math.max(0,resources)/annualCashUse*12,status:'annualized-cash-use',annualCashUse}:
      {months:null,status:'no-burn',annualCashUse:0};
  }
  function riskRating(metric,delta,target) {
    const series=Object.keys(DATA.annual).map(y=>historical(y).days[metric]);
    const min=Math.min(...series),max=Math.max(...series),span=Math.max(max-min,1);
    const stretch=Math.abs(delta)/span,outside=target<min-EPS||target>max+EPS;
    return {rating:outside||stretch>.5?'High':stretch>.25?'Medium':'Low',min,max,target,delta,stretch,
      outsideHistoricalRange:outside,basis:'Reported ending-balance historical range; normalized COGS changes the scenario days denominator.'};
  }
  function project(overrides={}) {
    const x=inputs(overrides),rec=record(x.baseYear),i=values(rec.income),b=values(rec.balance),c=values(rec.cashFlow);
    const base=baseline(rec,x.baseline),revenue=i.revenue*(1+x.growth);
    // Equivalent to R*(1-GM), expressed this way to preserve the exact zero-change anchor.
    const preTariffCOGS=base.cogs*(1+x.growth)-revenue*x.marginBps/10000;
    const tariff=x.tariffMode==='dollars'?x.tariffB:x.tariffMode==='percent'?preTariffCOGS*x.tariffRate:0;
    const cogs=preTariffCOGS+tariff,grossMargin=1-cogs/revenue;
    if(cogs<=0||grossMargin<0||grossMargin>1)throw new Error('Invalid final COGS or gross margin');
    const demandCreation=i.demandCreation*(1+x.growth);
    const operatingOverhead=i.operatingOverhead*(1+x.overheadFlex*x.growth);
    const sga=demandCreation+operatingOverhead,operatingProfit=revenue-cogs-sga;
    const operatingLeverageExpense=sga-i.sga*(1+x.growth);
    const operatingTax=Math.max(0,operatingProfit)*x.taxRate,nopat=operatingProfit-operatingTax;
    const da=c.da,capex=revenue*x.capexRate;
    const wc=workingCapital(base,i.revenue,revenue,cogs,x),debt=debtAndFacilities(rec,x);
    if(Object.values(wc.projected).some(v=>v<0))throw new Error('Negative projected operating balance');
    const netInterestCashEffect=-i.netInterestExpense*(1-x.taxRate);
    const operatingCashBeforeWC=nopat+da+netInterestCashEffect;
    const cfoProxy=operatingCashBeforeWC-wc.totalDeltaNWC,fcfProxy=cfoProxy-capex;
    const startingLiquidAssets=b.cash+b.shortTermInvestments;
    const signedEndingLiquidAssets=startingLiquidAssets+fcfProxy-x.buybacksB-x.dividendsB-debt.principal;
    const fundingGap=Math.max(0,-signedEndingLiquidAssets),endingLiquidAssets=Math.max(0,signedEndingLiquidAssets);
    const signedEndingTotalLiquidity=signedEndingLiquidAssets+debt.endingUndrawn;
    // Keep the funding requirement in the headline liquidity number. A gross capacity
    // subtotal must never erase a cash shortfall just because assets are floored at zero.
    const endingTotalLiquidity=signedEndingTotalLiquidity;
    const grossAvailableLiquidity=endingLiquidAssets+debt.endingUndrawn;
    const remainingNonTrade=b.reportedReceivables-base.adjustedReceivables;
    const currentAssets=endingLiquidAssets+wc.projected.receivables+remainingNonTrade+wc.projected.inventory+b.otherCurrentAssets;
    const currentLiabilities=b.currentLiabilities-b.accountsPayable-b.currentDebt-b.notesPayable+
      wc.projected.payables+debt.currentDebtAtHorizon;
    const ratios=fundingGap>EPS?{current:null,adjustedQuick:null,reason:'Unfunded scenario; partial ratios suppressed.'}:
      {current:currentAssets/currentLiabilities,adjustedQuick:(endingLiquidAssets+wc.projected.receivables)/currentLiabilities,reason:null};
    const waterfall=[{label:'Starting cash and short-term investments',value:startingLiquidAssets},
      {label:'Operating cash before working capital',value:operatingCashBeforeWC},
      {label:'Growth and cost working-capital effect',value:wc.growthCashImpact},
      {label:'Adjusted receivables lever',value:wc.leverCash.receivables},
      {label:'Inventory lever',value:wc.leverCash.inventory},{label:'Payables lever',value:wc.leverCash.payables},
      {label:'Capex',value:-capex},{label:'Discretionary buybacks',value:-x.buybacksB},
      {label:'Discretionary dividends',value:-x.dividendsB},{label:'Scheduled debt repayments',value:-debt.principal}];
    const z=workingCapital(base,i.revenue,i.revenue,base.cogs,{receivableDaysChange:0,inventoryDaysChange:0,payableDaysChange:0});
    const checks={reportedBalanceSheet:reportedChecks(rec).balanceSheet,zeroChangeNWC:z.totalDeltaNWC===0,
      adjustedCCC:near(wc.adjustedCCC,wc.days.receivables+wc.days.inventory-wc.days.payables),
      nwcBridge:near(wc.totalDeltaNWC,wc.projectedNWC-wc.baseNWC),
      leverCashBridge:near(wc.efficiencyCashImpact,Object.values(wc.leverCash).reduce((a,v)=>a+v,0)),
      cashWaterfall:near(waterfall.reduce((s,v)=>s+v.value,0),signedEndingLiquidAssets),
      liquidityBridge:near(signedEndingLiquidAssets+debt.endingUndrawn,signedEndingTotalLiquidity),
      fundingGapBridge:near(endingLiquidAssets-fundingGap,signedEndingLiquidAssets),
      normalization:base.normalizationB===(x.baseline==='normalized'&&rec.fiscalYear===2026?factValue(DATA.adjustments.tariffBenefitFY2026):0),
      operatingBalancesNonnegative:Object.values(wc.projected).every(v=>v>=0),inputsValid:true,
      debtNonnegative:debt.endingDebt>=-EPS,fundingSufficient:fundingGap<=EPS};
    const risk={receivables:riskRating('receivables',x.receivableDaysChange,wc.days.receivables),
      inventory:riskRating('inventory',x.inventoryDaysChange,wc.days.inventory),
      payables:riskRating('payables',x.payableDaysChange,wc.days.payables)};
    const warnings=[];
    if(fundingGap>EPS)warnings.push('Unfunded liquid-asset requirement; facilities have not been drawn automatically.');
    if(x.renewFacilities)warnings.push('Facility renewal is hypothetical and lender-dependent.');
    if(x.refinanceMaturity)warnings.push('Bond refinancing is hypothetical; replacement debt is noncurrent, with base-year net interest held flat. Refinancing-rate changes are not modeled.');
    if(x.marginBps!==0&&tariff!==0)warnings.push('Margin assumption must exclude cost already entered in the tariff control.');
    if(x.baseline==='normalized'&&rec.fiscalYear===2026)warnings.push('Historical-stretch comparisons use reported COGS; scenario base days use normalized COGS.');
    const result={kind:'hypothetical',period:`Illustrative FY${debt.targetYear}`,inputs:x,base,
      revenue,preTariffCOGS,tariffCost:tariff,cogs,grossMargin,demandCreation,operatingOverhead,sga,operatingLeverageExpense,operatingProfit,operatingTax,nopat,da,capex,
      netInterestExpense:i.netInterestExpense,netInterestCashEffect,operatingCashBeforeWC,cfoProxy,fcfProxy,wc,debt,
      startingLiquidAssets,signedEndingLiquidAssets,endingLiquidAssets,fundingGap,endingTotalLiquidity,signedEndingTotalLiquidity,grossAvailableLiquidity,
      netDebt:fundingGap>EPS?null:debt.endingDebt-endingLiquidAssets,currentAssets,currentLiabilities,ratios,
      runway:{basis:'Starting cash + ST investments only; annualized year-one cash use including debt principal; no automatic facility draws.',
        beforeDistributions:coverage(startingLiquidAssets,debt.principal-fcfProxy),
        afterDistributions:coverage(startingLiquidAssets,debt.principal+x.buybacksB+x.dividendsB-fcfProxy)},
      risk,waterfall,checks,warnings};
    result.trace=trace(result);
    return result;
  }
  function trace(r) {
    const refs={income:`DATA.annual.${r.inputs.baseYear}.income`,balance:`DATA.annual.${r.inputs.baseYear}.balance`,cashFlow:`DATA.annual.${r.inputs.baseYear}.cashFlow`};
    const defs={revenue:['base revenue * (1 + growth)',[refs.income+'.revenue','inputs.growth']],
      preTariffCOGS:['baseline COGS * (1+growth) - projected revenue * marginBps/10000',['base.cogs','inputs.growth','revenue','inputs.marginBps']],
      tariffCost:['0 if off; dollar input if dollars; pre-tariff COGS * tariff rate if percent',['inputs.tariffMode','inputs.tariffB','inputs.tariffRate','preTariffCOGS']],
      cogs:['baseline COGS * (1+growth) - projected revenue * marginBps/10000 + tariff cost',['base.cogs','inputs.growth','inputs.marginBps','tariffCost']],
      grossMargin:['1 - COGS / revenue',['cogs','revenue']],
      demandCreation:['base demand creation * (1+growth)',[refs.income+'.demandCreation','inputs.growth']],
      operatingOverhead:['base overhead * (1 + overhead flex * growth)',[refs.income+'.operatingOverhead','inputs.overheadFlex','inputs.growth']],
      sga:['projected demand creation + projected overhead; operating leverage from fixed overhead',['demandCreation','operatingOverhead']],
      operatingLeverageExpense:['projected SG&A minus fully revenue-scaled base SG&A; positive = expense retained through operating leverage',['sga',refs.income+'.sga','inputs.growth','inputs.overheadFlex']],
      operatingProfit:['revenue - COGS - SG&A',['revenue','cogs','sga']],
      operatingTax:['max(0, operating profit) * tax rate',['operatingProfit','inputs.taxRate']],
      nopat:['operating profit - operating tax',['operatingProfit','operatingTax']],
      da:['base-year D&A held fixed in dollars',[refs.cashFlow+'.da']],
      capex:['revenue * capex rate',['revenue','inputs.capexRate']],
      netInterestCashEffect:['-signed base net interest expense * (1-tax rate)',[refs.income+'.netInterestExpense','inputs.taxRate']],
      operatingCashBeforeWC:['NOPAT + D&A + after-tax net interest cash proxy',['nopat','da','netInterestCashEffect']],
      cfoProxy:['operating cash before WC - total change in modeled NWC',['operatingCashBeforeWC','wc.totalDeltaNWC']],
      fcfProxy:['CFO proxy - capex',['cfoProxy','capex']],
      signedEndingLiquidAssets:['starting liquid assets + FCF proxy - buybacks - dividends - principal repayments',['startingLiquidAssets','fcfProxy','inputs.buybacksB','inputs.dividendsB','debt.principal']],
      signedEndingTotalLiquidity:['signed ending liquid assets + undrawn facilities surviving/renewed at horizon',['signedEndingLiquidAssets','debt.endingUndrawn']],
      fundingGap:['max(0, -signed ending liquid assets)',['signedEndingLiquidAssets']],
      endingLiquidAssets:['max(0, signed ending liquid assets); funding gap remains separate',['signedEndingLiquidAssets','fundingGap']],
      endingTotalLiquidity:['signed ending liquid assets + undrawn facilities; funding gap is not erased',['signedEndingLiquidAssets','debt.endingUndrawn']],
      grossAvailableLiquidity:['nonnegative liquid assets + undrawn facilities, before funding gap',['endingLiquidAssets','debt.endingUndrawn']],
      startingLiquidAssets:['base cash + short-term investments',[refs.balance+'.cash',refs.balance+'.shortTermInvestments']],
      netDebt:['ending carrying debt - liquid assets; unavailable if unfunded',['debt.endingDebt','endingLiquidAssets','fundingGap']],
      currentAssets:['liquid assets + adjusted AR + held-constant remaining non-trade AR + inventory + other current assets',['endingLiquidAssets','wc.projected',refs.balance]],
      currentLiabilities:['base CL excluding AP/current debt/notes + projected AP + principal due in following year',[refs.balance,'wc.projected.payables','debt.currentDebtAtHorizon']]};
    const out=Object.fromEntries(Object.entries(defs).map(([key,[formula,inputs]])=>[key,{formula,inputs,value:r[key],unit:key==='grossMargin'?'fraction':'USD billions'}]));
    out.workingCapital={formula:'delta NWC = growth/cost delta + efficiency delta; NWC = adjusted AR + inventory - AP',
      startingDays:'Base balances / selected baseline revenue or COGS * 365',
      projectedBalances:'Base balance * projected driver / baseline driver + change in days * projected driver / 365',
      growthCost:'AR0*(R/R0-1) + (Inventory0-AP0)*(COGS/baselineCOGS-1)',
      efficiency:'change AR days * R/365 + (change inventory days-change AP days)*COGS/365',value:r.wc};
    out.ratios={formula:'Current = partial pro forma CA/CL; adjusted quick = (liquid assets + adjusted AR)/CL; suppressed if unfunded',value:r.ratios};
    out.adjustedCCC={formula:'adjusted receivable days + inventory days - payable days',value:r.wc.adjustedCCC,unit:'days'};
    out.runway={formula:'12 * starting liquid assets / annual cash use if cash use > 0; otherwise no burn. Before use = debt repayments-FCF; after use adds distributions.',value:r.runway};
    out.debt={formula:'Starting carrying debt - gross principal + refinanced bond principal. Refinancing replaces only bonds, is assumed noncurrent, and has no cash inflow/outflow net. Notes payable are repaid. Future current debt uses the disclosed ladder.',value:r.debt};
    return out;
  }
  const presets={
    base:{label:'Base',changes:{growth:0,marginBps:0,receivableDaysChange:0,inventoryDaysChange:0,payableDaysChange:0,tariffMode:'off',tariffB:0,tariffRate:0}},
    inventoryCleanup:{label:'Inventory Cleanup',changes:{growth:0,marginBps:-100,receivableDaysChange:0,inventoryDaysChange:-10,payableDaysChange:0,tariffMode:'off',tariffB:0,tariffRate:0}},
    demandDownturn:{label:'Demand Downturn',changes:{growth:-.10,marginBps:-200,receivableDaysChange:5,inventoryDaysChange:15,payableDaysChange:0,tariffMode:'off',tariffB:0,tariffRate:0}},
    tariffShock:{label:'Tariff Shock',changes:{growth:0,marginBps:0,receivableDaysChange:0,inventoryDaysChange:0,payableDaysChange:0,tariffMode:'percent',tariffB:0,tariffRate:.02}},
    supplierSqueeze:{label:'Supplier Squeeze',changes:{growth:0,marginBps:-50,receivableDaysChange:0,inventoryDaysChange:5,payableDaysChange:-10,tariffMode:'off',tariffB:0,tariffRate:0}}
  };
  function preset(id,current={}) {
    if(!Object.hasOwn(presets,id))throw new Error('Unknown preset');
    // Applying a preset preserves the independent baseline toggle. All initial presets default normalized.
    const initial=defaults(current.baseYear??'FY2026');
    return inputs({...initial,baseline:current.baseline??'normalized',renewFacilities:current.renewFacilities??false,
      refinanceMaturity:current.refinanceMaturity??false,overheadFlex:current.overheadFlex??0,...presets[id].changes});
  }
  function sensitivity(current={}) {
    const x=inputs(current),growthRows=[-.15,-.075,0,.075,.15],marginColumns=[-400,-250,-100,0,100,200];
    return {growthRows,marginColumns,cells:growthRows.map(growth=>marginColumns.map(marginBps=>{
      const r=project({...x,growth,marginBps});
      return {growth,marginBps,signedEndingTotalLiquidity:r.signedEndingTotalLiquidity,endingTotalLiquidity:r.endingTotalLiquidity,fundingGap:r.fundingGap};
    }))};
  }
  return Object.freeze({historical,latestQuarter,reportedChecks,defaults,project,preset,presets,bounds,sensitivity});
})();
