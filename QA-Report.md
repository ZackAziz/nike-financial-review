# Full model review — October 16, 2026

Result: PASS for the source, arithmetic and browser checks described below. This is a software and public-data review, not audit assurance or a guarantee about future results.

## Findings and corrections

- No financial formula error or broken interaction was found in the reviewed states.
- Corrected four commercial-paper source references for FY2022/FY2023 from printed p. 44 to p. 45 of the FY2023 10-K. The amounts were correct.
- Refined 28 segment references to the actual segment notes: FY2026 10-K, Note 15 pp. 86–87; FY2027 Q1 10-Q, Note 10 p. 16. The previous management-discussion tables contained the same amounts.
- Updated the displayed review date. An automated comparison confirms every numeric input, formula, assumption, tooltip and other layout code is unchanged. The exact comparison permits only 39 source-metadata edits plus the data timestamp and displayed date.
- The earlier concern about D&A citation locations was resolved: FY2025's cash-flow statement explicitly reports FY2023–FY2025 D&A, including $0.703B for FY2023, on printed p. 59. No D&A correction was needed.

## Source verification

All 404 source entries were reviewed against downloaded official Nike investor-relations filings, not merely checked for a source-field placeholder:

| Classification | Entries | Result |
|---|---:|---|
| Statement and segment numeric disclosures | 316 | Period-specific inline XBRL values match; statement signs and source pages checked |
| Facility commitments, expiry dates, zero drawings, bond principal/maturities and tariff adjustments | 85 | Match cited contract disclosures, explicit zero-drawing language and tariff note |
| Separately presented notes payable | 2 | Retain disclosed presentation-derived zero for FY2026 and FY2027 Q1; presented current liabilities reconcile |
| FY2022 combined D&A | 1 | Remains null/VERIFY; not inferred from depreciation plus mixed impairment/amortization line |

The FY2027 Q1 filing's printed p. 34 explicitly states no committed-facility amounts outstanding at August 31 and May 31, 2026, and no commercial-paper borrowing outstanding as of/during the quarter. This is separate from the presentation-derived notes-payable interpretation.

Sources: [FY2023 10-K](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-23-000039/nke-20230531.htm), [FY2024 10-K](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-24-000044/nke-20240531.htm), [FY2025 10-K](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-25-000047/nke-20250531.htm), [FY2026 10-K](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-26-000088/nke-20260531.htm), [FY2027 Q1 10-Q](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-26-000193/nke-20260831.htm).

## Tests completed

| Check | Coverage | Result |
|---|---|---|
| Calculation engine | 970 scenario runs; 200,837 assertions; five presets compared with separate 50-digit Decimal implementation | PASS |
| Original browser regression | 89 checks, including charts, sensitivity, CSV, shared links, invalid inputs, CDN failure and direct-file opening | PASS |
| Expanded scenario browser review | 200 UI combinations across FY2023–FY2026, all five presets, reported/normalized FY2026, debt repayment/refinancing, facility renewal on/off; 2,356 checks | PASS |
| Formula explanations | 30 populated, dismissible formula dialogs | PASS |
| Help icon and dropdown alignment | 55 states; 1,494 help-icon placements; 120 placements covering all six dropdowns | PASS |
| Tooltip placement and behavior | 405 button instances; 831 hover/pinned placements, plus scroll following, off-screen closure, slider dragging and mobile touch | PASS |
| Layout widths | 360, 390, 768, 1440 and 1512 pixels | No page-level overflow or tested icon/text/swatch overlap |
| Keyboard controls | Focus preview; Enter/Space pin; Escape close; another icon switches; outside tab/slider click closes and still activates control | PASS |
| Source lookup table | Every annual/quarterly period and income/balance/cash-flow/segment group | Populated; no undefined/NaN values |

The expanded browser suite recorded no JavaScript exceptions. Its scenario checks supplement the independent engine reference; browser/engine agreement alone is not independent proof of financial correctness. The source and reference checks address that separately.

## Key reconciliations ($B)

| Scenario | NOPAT | FCF proxy | Ending liquid assets | Ending total liquidity |
|---|---:|---:|---:|---:|
| Normalized Base | 2.240 | 2.343 | 6.817 | 8.817 |
| Inventory Cleanup | 1.870 | 2.673 | 7.147 | 9.147 |
| Demand Downturn | 0.445 | -0.210 | 4.264 | 6.264 |
| Tariff Shock | 1.802 | 1.827 | 6.301 | 8.301 |
| Supplier Squeeze | 2.055 | 0.987 | 5.461 | 7.461 |

Normalized zero-change working-capital movement is exactly zero. Lower receivable/inventory days and higher payable days have the expected cash-release signs. Tax-effected net interest income is positive. The waterfall ties, refinancing preserves cash and retains debt, and expired facilities are excluded without hypothetical renewal.

## Limits that remain intentional

FY2022 remains in verified historical trends and the five-year historical range, but is excluded from the simulator because total D&A is unresolved. Simulations use an adjusted-receivables proxy, partial balance sheets, fixed/variable cost assumptions and a simplified FCF bridge. Interest repricing, detailed cash-tax timing, FX, seasonality and a complete three-statement forecast are not modeled. Historical stretch is a mechanical flag, not a probability or recommended target. These limits remain disclosed in the app and the detailed QA report.

Browser testing used isolated desktop Chrome and mobile/touch emulation, not physical phone hardware or every assistive technology.

Reviewed HTML SHA-256: `cc16a8b301467627264825d50cb0292eb8cc49cbec559ed04e1478c9694a554f`.

Machine-readable local evidence: `source-audit.json`, `full-browser-audit.json`, `browser-qa.json`, `all-alignment-qa.json`, `every-tooltip-position-qa.json`, and `step-a/test-results.json`.


---

# Earlier detailed methodology and QA record — October 14, 2026

The following section is retained as historical evidence. The October 16 review above supersedes its date, source-verification scope and earlier deployment identifiers.

# QA report — Nike interactive financial review

Completed October 14, 2026. This records software and arithmetic validation, not audit assurance or a professional opinion on Nike. All scenario amounts are hypothetical USD billions. Three decimals below support reconciliation; headline UI values use one decimal.

## Result

**PASS: 970 engine scenario runs and 89 browser checks.** Five default presets reconcile to an independently implemented, 50-digit Python Decimal reference that calculates projected balances directly. Browser checks used isolated Chrome at 390, 768 and 1440 pixels; no JavaScript exceptions or page-level horizontal overflow were found. All five historical Chart.js charts loaded using pinned version 4.4.0. External-library failure and direct-file operation were also checked.

The complete DATA object and calculation module in `step-a/` are embedded unchanged in `index.html` apart from ES-module export/import syntax. Source metadata validation confirms 404 facts carry filing, fiscal-period, printed-page and line fields; this confirms provenance structure, not independent audit of each disclosure.

## Three historical calculations reproduced by hand

FY2026 statements and tariff adjustment are traceable to the [FY2026 10-K](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-26-000088/nke-20260531.htm), pp. 55, 58 and Note 1 p. 61.

| Metric | Independent arithmetic | Expected result | Engine |
|---|---|---:|---|
| Reported gross margin | 19.911 ÷ 46.398 × 100 | 42.913487650% | PASS |
| Adjusted receivable days | (5.931 − 0.684) ÷ 46.398 × 365 | 41.276671408 days | PASS |
| Reported FCF | 2.868 − 0.684 | $2.184B | PASS |

These reported calculations remain separate from the normalized forward FCF proxy. Receivable days use total revenue and may retain unquantified non-trade items.

## Preset inputs

All five comparisons use FY2026 normalized COGS of $27.473B, overhead flex 0%, fixed D&A $0.747B, capex/revenue 0.684/46.398, tax 0.792/3.900, buybacks $0.146B and dividends $2.407B. The $2.000B maturity is repaid from cash; no renewal of the expiring $1.000B short facility is assumed. End-of-horizon undrawn capacity is $2.000B. These are assumptions, not guidance.

| Scenario | Revenue growth | GM change | Adjusted AR days | DIO | DPO | Incremental tariff cost |
|---|---:|---:|---:|---:|---:|---|
| Base | 0% | 0 bps | 0 | 0 | 0 | Off |
| Inventory Cleanup | 0% | −100 bps | 0 | −10 | 0 | Off |
| Demand Downturn | −10% | −200 bps | +5 | +15 | 0 | Off |
| Tariff Shock | 0% | 0 bps | 0 | 0 | 0 | 2% of pre-tariff COGS |
| Supplier Squeeze | 0% | −50 bps | 0 | +5 | −10 | Off |

## Preset outputs

Positive ΔNWC consumes cash; negative ΔNWC releases cash. Growth/cost and efficiency components are mutually exclusive parts of the same balance change, not cash flows to add twice.

| Scenario | Revenue | COGS | NOPAT | Growth/cost ΔNWC | Efficiency ΔNWC | Total ΔNWC | FCF proxy | Ending liquid assets | Ending total liquidity | Adjusted CCC (days) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Base | 46.398 | 27.473 | 2.240 | 0.000 | 0.000 | 0.000 | 2.343 | 6.817 | 8.817 | 93.104 |
| Inventory Cleanup | 46.398 | 27.937 | 1.870 | 0.066 | -0.765 | -0.700 | 2.673 | 7.147 | 9.147 | 83.104 |
| Demand Downturn | 41.758 | 25.561 | 0.445 | -0.796 | 1.622 | 0.826 | -0.210 | 4.264 | 6.264 | 113.104 |
| Tariff Shock | 46.398 | 28.022 | 1.802 | 0.078 | 0.000 | 0.078 | 1.827 | 6.301 | 8.301 | 93.104 |
| Supplier Squeeze | 46.398 | 27.705 | 2.055 | 0.033 | 1.139 | 1.172 | 0.987 | 5.461 | 7.461 | 108.104 |

## Corrections and reconciliation evidence

- **Zero-change normalization:** reported and normalized zero-change scenarios produce ΔNWC = 0 exactly. Starting DIO/DPO are rebased to selected baseline COGS; historical dashboard days retain reported COGS. Base adjusted CCC is 93.104 days in normalized mode versus 95.034 days on the historical dashboard. That denominator difference releases no cash.
- **Operating leverage:** at −10% revenue, demand creation falls from $4.754B to $4.279B; overhead remains $11.360B and D&A $0.747B. Demand Downturn operating profit is $0.559B and NOPAT $0.445B. Partial and 100% overhead-flex settings were separately tested.
- **Signed interest:** FY2026 $0.050B net interest income adds $0.039846B after assumed tax. Changing cash or refinancing does not reprice it.
- **Base cash bridge:** 9.027 + 2.342996923 − 0.146 − 2.407 − 2.000 = 6.816996923 liquid assets. Adding 2.000 undrawn capacity gives 8.816996923 total liquidity.
- **Refinancing:** Base liquid assets increase by exactly $2.000B versus cash repayment; ending carrying debt remains $7.942B instead of $5.942B. This is a financing choice, not an operating cash benefit. Net interest remains unchanged.
- **Two cash-coverage views:** Base before distributions has no positive annualized cash use; after distributions coverage is 12 × 9.027 / (2.000 + 0.146 + 2.407 − 2.342996923) = 49.015 months. Demand Downturn is 49.021 months before and 22.744 months after distributions. These are annualized year-one coverage measures, not exhaustion dates.
- **Working-capital signs:** one day less adjusted AR increases cash by projected revenue/365; one day less inventory or one day more AP increases cash by projected COGS/365, with all other inputs held fixed. Inventory Cleanup's efficiency release of $0.765B is partly offset by $0.066B growth/cost funding.
- **Debt/source note:** [FY2027 Q1 10-Q printed p. 34](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-26-000193/0000320187-26-000193.pdf#page=36) text explicitly discloses zero committed-facility drawings at both balance-sheet dates and no commercial-paper borrowings outstanding as of and during Q1. Notes-payable zero is separately labeled as the approved presentation-derived balance-sheet interpretation, not that sentence itself.

## Stress tests and interaction checks

| Area | Coverage | Result |
|---|---|---|
| Historical statements | Five annual periods and latest quarter; component/total identities, CCC, net debt and TTM calculations | PASS |
| Preset reference | Five presets against independent 50-digit Decimal implementation | PASS |
| Boundaries | All operating controls at minima and maxima; 512 operating-input corners | PASS |
| Broader scenarios | Seeded multi-year stresses; reported/normalized modes; dollar/percentage tariff choices | PASS |
| Invalid inputs | Missing, nonfinite, out-of-bounds and malformed query settings | Rejected or reset safely |
| Funding gaps | No negative AR/inventory/AP, no hidden cash shortfall, partial ratios suppressed when unfunded | PASS |
| Sensitivity | Same calculation engine, 30 growth/margin cells; clicking applies settings | PASS |
| Browser controls | Presets, reset, synchronized inputs, overhead flex, refinancing and baseline preservation | PASS |
| Accessibility sampling | Keyboard sliders, tab navigation, visible labels, formula dialog and Escape | PASS; not a formal accessibility audit |
| Sharing/export | CSV fields and source links, copied scenario URL, restoration and invalid-URL handling | PASS |
| Responsive layout | All four views at 390/768/1440; scrollable tables stay within the page | PASS |
| Library failure | Native SVG fallback retains revenue/GM dual-axis meaning and floating cash waterfall | PASS |
| Direct opening | Local HTML runs without a server or installation | PASS |

Reported data are deeply frozen and remain unchanged after scenarios. The engine rejects NaN/Infinity and division errors in tested inputs. Visual inspection covered desktop, mobile, methodology and fallback layouts. This is sampled browser coverage, not a claim of testing every browser, device or assistive technology.

## Simplifications and remaining limitations

1. **Collections proxy:** adjusted receivable days use ending balances and total revenue, including direct-to-consumer revenue. Only specifically identified tariff AR is removed; other non-trade amounts may remain. This is not verified trade DSO or an average-balance metric.
2. **Partial normalization:** the default adds $0.986B to reported FY2026 COGS, removing only the identified benefit. It is not a full recurring-earnings normalization.
3. **Cost behavior:** demand creation scaling, fixed overhead/D&A and overhead flex are planning assumptions. Contracts, restructuring, capacity and delayed savings are not modeled.
4. **Operating profit:** revenue minus COGS minus SG&A is the model's operating subtotal. It omits other income/expense and does not claim to reproduce all company EBIT adjustments.
5. **FCF proxy:** NOPAT + D&A + after-tax net interest − modeled ΔNWC − capex omits SBC, other noncash items, deferred taxes, other asset/liability flows, FX and cash-tax timing. It is not reported CFO and has no calibration plug to force agreement.
6. **Tax/interest:** operating losses get no immediate tax benefit; net interest is tax-effected separately. Net interest is an accrual-based proxy held flat even when cash, rates or debt change. Cash-tax deductibility limits and tax jurisdictions are omitted.
7. **Working capital:** annual end balances proxy average operating investment; no seasonality, aging, channel mix or monthly timing. COGS-based inventory/AP growth is mechanical, not a procurement or supply-chain forecast.
8. **Tradeoffs:** changing days does not automatically model discounts, markdowns, stockouts, supplier price increases or lost revenue. Scenarios illustrate mechanisms rather than recommend targets.
9. **Partial balance sheet:** current/quick ratios and net debt use partial pro forma balances with other assets/liabilities held constant. The forward balance sheet is not a complete three-statement forecast and is not checked as one.
10. **Debt/refinancing:** carrying debt is reduced by contractual face principal; discounts and issuance-cost amortization are not separately projected. Replacement bonds are assumed noncurrent, with no transaction fees or repricing. Refinancing access is not assured.
11. **Credit capacity:** only unexpired committed capacity is included unless renewal is explicitly selected. No automatic draw is assumed. Covenants, availability conditions, letters of credit and lender behavior are not forecast. CP capacity is not double-counted.
12. **Funding gaps:** signed resources can be negative; the deficit remains visible in total liquidity. A negative result requires financing rather than representing a negative cash asset. No financing remedy is silently inserted.
13. **Coverage/runway:** annualized year-one cash use includes its debt maturity and is not a repeating contractual maturity schedule or monthly cash forecast. Discretionary distributions are shown separately; management could change them.
14. **Leases and FX:** operating leases are separate from debt; no lease roll-forward, hedging cash flows, currency or geographic/channel mix projection is supplied.
15. **Risk ratings:** mechanical historical-stretch indicators use a five-year range and one-day floor, not statistical loss probabilities or an optimal inventory target. Normalized days and reported history have different denominators.
16. **Quarterly data:** FY2027 Q1 stays outside annual trend charts. TTM is used only where defined. No quarter-end adjusted DSO/CCC is invented without a quantified receivable split.
17. **Unresolved historical item:** FY2022 total D&A retains VERIFY and that year is unavailable as a simulator base. Other verified reported series still display FY2022.
18. **Interpretation and rounding:** UI headlines round to one decimal and can show small nonzero values as zero. Expanded audit values retain three decimals and calculations use full precision. Data are not live market data or forecasts.
19. **Verification scope:** financial-source links and calculation checks provide transparency, not audit assurance. The model must be revalidated when new filings or assumptions are added. AI assistance was used and Zack should be able to explain the logic independently.
20. **Browser/hosting:** the app is one file and works from disk. CDN/fonts require normal external requests; native charts/tables remain available on CDN failure. Scenario links become public only after deployment. GitHub Pages deployment is authorized; LinkedIn remains unchanged.

## Reproduce

From `step-a/`, run `node tests.mjs`. To regenerate the independent reference first, run `python3 reference.py` and then the tests. They use Node/Python standard libraries only. Current machine-readable evidence is in `step-a/test-results.json`, `step-a/reference-results.json`, `step-a/scenario-results.csv` and `browser-qa.json`.

The browser evidence records tests run in this workspace's isolated Chrome. The distributed engine test block is portable; no claim is made that a local test path is an independently hosted browser service.

## Final presentation fixes

Persistent HTML legends name every series and identify bar positions or line/bar type, including without the chart CDN. Zero-safe formatters preserve meaningful negatives while removing rounded negative zero. All four mobile tabs wrap into two rows, and the shortened normalized-baseline label fits the desktop control. Target-firm references have been removed from the public HTML and README. All 89 expanded browser checks passed; all 970 engine scenarios are unchanged.

## Live deployment verification — October 14, 2026

[Live model](https://zackaziz.github.io/nike-financial-review/) · [Source repository](https://github.com/ZackAziz/nike-financial-review) · [Successful Pages build](https://github.com/ZackAziz/nike-financial-review/actions/runs/38671287848).

PASS: 23 additional live checks. The HTTPS response is 200 and the served HTML matches the final local file byte-for-byte. Tested all four mobile tabs, persistent legends, default and Demand Downturn calculations, zero formatting, CSV downloads and public scenario URL restoration, with no JavaScript exceptions. Mobile testing used Chrome touch emulation at 390×844 and a 2× pixel ratio, alongside a 1440px desktop viewport; no physical phone test is claimed.

Application commit: `437c5f1e855fb8a7e26899c100bb258bffd276b5`.
HTML SHA-256: `fb70764b038c697988075d588d97f742268d32c59e46192c398db175580697a7`.

`deployment-qa.json` records the machine-readable verification. Documentation-only commits after the application commit do not alter the tested HTML. LinkedIn has not been changed.
