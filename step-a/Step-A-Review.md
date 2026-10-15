# Nike financial model — Step A audit package

Updated October 14, 2026. This package contains the DATA object, pure calculation module, independent reference and test block used by the completed interface. The UI is delivered in the parent `index.html`; this audit package has no runtime UI dependency.

## Approved corrections implemented

- Normalized starting DIO/DPO use normalized COGS, so unchanged balances do not create phantom working-capital funding. Zero-change ΔNWC is exactly zero in both modes.
- Base-year signed net interest is tax-effected and held flat; cash yields and refinancing-rate changes are not modeled.
- Comparable default presets use normalized mode; reported/normalized is a separate choice.
- Demand creation scales with revenue; overhead is fixed by default, with adjustable 0–100% overhead flex; D&A stays fixed in dollars.
- Scheduled bond principal is repaid from cash by default. Optional refinancing retains cash and debt, assumes noncurrent replacement debt, and leaves net interest flat.
- Coverage is shown before and after discretionary distributions, using starting cash + short-term investments and annualized year-one cash use.

See the parent README for full formulas and QA report for source checks, hand calculations and limitations. Printed p. 34 of the FY2027 Q1 10-Q was checked for the separate zero facility/CP drawing disclosures. Approved balance-sheet notes-payable zero remains labeled presentation-derived.

## Inputs

All comparisons use FY2026 normalized mode, 0% overhead flex, fixed D&A $0.747B, base capex intensity/tax/distributions, cash maturity repayment and no short-facility renewal.

| Scenario | Revenue growth | GM change | Adjusted AR days | DIO | DPO | Incremental tariff cost |
|---|---:|---:|---:|---:|---:|---|
| Base | 0% | 0 bps | 0 | 0 | 0 | Off |
| Inventory Cleanup | 0% | −100 bps | 0 | −10 | 0 | Off |
| Demand Downturn | −10% | −200 bps | +5 | +15 | 0 | Off |
| Tariff Shock | 0% | 0 bps | 0 | 0 | 0 | 2% of pre-tariff COGS |
| Supplier Squeeze | 0% | −50 bps | 0 | +5 | −10 | Off |

## Reconciled results

USD billions; positive ΔNWC consumes cash.

| Scenario | Revenue | COGS | NOPAT | Growth/cost ΔNWC | Efficiency ΔNWC | Total ΔNWC | FCF proxy | Ending liquid assets | Ending total liquidity | Adjusted CCC (days) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Base | 46.398 | 27.473 | 2.240 | 0.000 | 0.000 | 0.000 | 2.343 | 6.817 | 8.817 | 93.104 |
| Inventory Cleanup | 46.398 | 27.937 | 1.870 | 0.066 | -0.765 | -0.700 | 2.673 | 7.147 | 9.147 | 83.104 |
| Demand Downturn | 41.758 | 25.561 | 0.445 | -0.796 | 1.622 | 0.826 | -0.210 | 4.264 | 6.264 | 113.104 |
| Tariff Shock | 46.398 | 28.022 | 1.802 | 0.078 | 0.000 | 0.078 | 1.827 | 6.301 | 8.301 | 93.104 |
| Supplier Squeeze | 46.398 | 27.705 | 2.055 | 0.033 | 1.139 | 1.172 | 0.987 | 5.461 | 7.461 | 108.104 |

## Validation

PASS: 970 scenario runs; historical/quarterly reconciliations; 404 provenance-tagged facts; exact zero-change NWC; fixed/flexible cost and refinancing tests; 512 operating-input corners; seeded multi-year stresses; nonfinite/bounds rejection; funding-gap visibility; independent 50-digit Decimal references for all presets.

The final interface separately passed 89 browser checks. The only unresolved numeric fact is FY2022 total D&A, retained as VERIFY; FY2022 simulation is disabled. See `../QA-Report.md` for full limitations.

## Contents and reproduction

- `data.mjs`: deeply frozen source-tagged historical data and methodology notes.
- `calc.mjs`: calculation engine, presets, source/formula traces, sensitivity and checks.
- `tests.mjs`: executable test block and printed five-preset results.
- `reference.py` / `reference-results.json`: independent direct-balance Decimal reference.
- `test-results.json` / `scenario-results.csv`: latest output evidence.

Run `node tests.mjs` from this directory. Optional independent reference regeneration: `python3 reference.py`, then rerun Node tests. No packages are required.

The embedded HTML engine mirrors these modules. Updating an audit module alone does not change the HTML. This package supports the published model; it does not represent a LinkedIn change, real client work or investment recommendation.
