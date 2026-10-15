from decimal import Decimal as D, getcontext
from pathlib import Path
import json
getcontext().prec=50
p=Path(__file__).resolve().parent
r=D('46.398'); cost=D('27.473'); ar=D('5.247'); inv=D('7.501'); ap=D('3.600')
t=D('.792')/D('3.900'); days=D(365)
scenarios={'base':('0','0','0','0','0','0'), 'inventoryCleanup':('0','-100','0','-10','0','0'),
 'demandDownturn':('-.10','-200','5','15','0','0'), 'tariffShock':('0','0','0','0','0','.02'),
 'supplierSqueeze':('0','-50','0','5','-10','0')}
result={}
for name,ss in scenarios.items():
 g,bps,dr,di,dp,tariff=map(D,ss)
 rp=r*(1+g); gm=(r-cost)/r+bps/D(10000); cp=rp*(1-gm)*(1+tariff)
 ar0days=ar/r*days; idays=inv/cost*days; pdays=ap/cost*days
 arp=(ar0days+dr)*rp/days; ip=(idays+di)*cp/days; app=(pdays+dp)*cp/days
 growth=(ar0days*rp/days+idays*cp/days-pdays*cp/days)-(ar+inv-ap)
 delta=(arp+ip-app)-(ar+inv-ap); efficiency=delta-growth
 op=rp-cp-D('4.754')*(1+g)-D('11.360'); nopat=op-max(D(0),op)*t
 interest=D('.050')*(1-t)
 fcf=nopat+D('.747')+interest-delta-D('.684')*(1+g)
 liquid=D('9.027')+fcf-D('.146')-D('2.407')-D('2.000')
 result[name]={k:float(0 if abs(v)<D('1e-40') else v) for k,v in dict(revenue=rp,cogs=cp,nopat=nopat,
  growthDeltaNWC=growth,efficiencyDeltaNWC=efficiency,totalDeltaNWC=delta,fcfProxy=fcf,
  signedEndingLiquidAssets=liquid,signedEndingTotalLiquidity=liquid+D(2),adjustedCCC=(ar0days+dr)+(idays+di)-(pdays+dp)).items()}
(p/'reference-results.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(result,indent=2))
