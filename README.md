# Nike Financial Review

An independent, interactive financial review by **Zack Aziz**, built from Nike public filings. Explore FY2022–FY2026 reported results, a separate FY2027 Q1 update, and one-year hypothetical scenarios for operating leverage, working capital and capital allocation.

**[Open the live model](https://zackaziz.github.io/nike-financial-review/)** · [Source repository](https://github.com/ZackAziz/nike-financial-review)

**Open `index.html` in a browser. No build step, package installation or backend is needed.** The application, DATA object, formulas and interface are in that one file. Chart.js **4.4.0** is pinned to cdnjs; IBM Plex fonts load from Google Fonts. Embedded SVG charts, data tables and calculations remain available if the chart CDN is unavailable.

This is illustrative public-data analysis, not investment advice, Nike guidance, an audit, or a Nike engagement.

## Use the review

1. Start on **Financial dashboard** for reported history. Scenario edits never change these charts.
2. Open **Scenario simulator**. FY2026 normalized Base is the default; annual projections are not updated earnings forecasts.
3. Adjust revenue, gross margin and working-capital days. Expand advanced assumptions for overhead flex, capex, distributions, tax, tariff costs, refinancing and facility renewal.
4. Select a preset, inspect the cash waterfall and sensitivity table, then open the **Decision panel** to compare cash benefits with risks.
5. Open any formula or use **Methodology & sources** for the inputs, filing links, all 20 original Data Notes and subsequent model limitations.
6. Download a scenario CSV, or copy a link containing the complete assumptions. Shared links become usable by other people after the file is hosted. Do not share a local `file://` path as a public link.

The sticky bar always shows a **hypothetical** scenario, including while the historical dashboard is visible. Values in the main views use $B at one decimal; calculation details retain three decimals. Small nonzero values can round to $0.0B, so inspect exact details where material.

## Financial methodology

Fiscal years end May 31. Store monetary facts in $B to three decimals, retaining the filings' original million-dollar precision. Calculate at full precision and round only for display. Every numeric historical input carries its filing, fiscal period, printed page, line identifier and status in `DATA`.

### Reported and adjusted history

- Historical FCF = reported operating cash flow minus cash capex.
- Adjusted receivables = reported net AR, less the specifically identified $0.684B FY2026 tariff receivable. Prior years retain reported AR as the approved proxy; this does not assume no other non-trade receivables.
- Adjusted receivable days = adjusted receivables / total revenue × 365. It is not verified wholesale DSO or a credit-sales metric.
- DIO = ending inventory / reported annual COGS × 365. DPO = ending AP / reported annual COGS × 365.
- Adjusted CCC = adjusted receivable days + DIO − DPO.
- Adjusted quick ratio = (cash + ST investments + adjusted AR) / current liabilities.
- Net debt = separately presented notes payable + current LT debt + noncurrent LT debt − cash − ST investments. FY2026 and Q1 use the approved presentation-derived zero notes-payable interpretation, visibly distinguished from explicitly reported facts.
- Total liquidity = cash + ST investments + undrawn committed facilities. Do not add commercial-paper capacity again.

FY2027 Q1 is a separate quarterly card. TTM denominators are used for its inventory/payable days. Exact quarter-end non-trade AR is not established, so no adjusted quarter-end DSO/CCC is invented. FY2022 appears in reported trends but cannot serve as a simulation base because total D&A remains unresolved.

### Scenario formulas

Selected baseline COGS equals reported COGS, or for normalized FY2026, reported COGS + **0.986B**. This removes only that identified tariff-recovery benefit, not every unusual item.

Simulator starting DIO and DPO use **selected baseline COGS**, unlike the historical dashboard. This prevents normalization from creating phantom NWC funding:

```text
Base adjusted receivable days = adjusted AR0 / revenue0 × 365
Base DIO = inventory0 / selected baseline COGS × 365
Base DPO = AP0 / selected baseline COGS × 365

Projected revenue = revenue0 × (1 + growth)
COGS before additional tariffs = baseline COGS × (1 + growth)
                                − projected revenue × margin-change bps / 10,000
Projected COGS = COGS before additional tariffs + incremental tariff cost

Demand creation = demand creation0 × (1 + growth)
Overhead = overhead0 × (1 + overhead flex × growth)
SG&A = demand creation + overhead
Operating profit = revenue − COGS − SG&A
Operating tax = max(operating profit, 0) × tax rate
NOPAT = operating profit − operating tax
D&A = base-year D&A, held fixed in dollars
After-tax net interest proxy = −base signed net interest expense × (1 − tax rate)
```

Default overhead flex is **0%**. At 100%, all overhead scales with revenue. This is an adjustable planning assumption, not an empirical estimate that all Nike overhead is fixed or all demand creation is variable. Net interest expense is signed: FY2026 negative expense is interest income. Cash yields, accrual/cash timing, refinancing rates and loss-related tax treatment are simplified.

```text
Projected adjusted AR = (base adjusted receivable days + change) × revenue / 365
Projected inventory = (base DIO + change) × COGS / 365
Projected AP = (base DPO + change) × COGS / 365

ΔNWC growth/cost = AR0 × (projected revenue / revenue0 − 1)
                  + (inventory0 − AP0) × (projected COGS / baseline COGS − 1)
ΔNWC efficiency = Δreceivable days × revenue / 365
                  + (ΔDIO − ΔDPO) × COGS / 365
Total ΔNWC = growth/cost ΔNWC + efficiency ΔNWC

FCF proxy = NOPAT + fixed D&A + after-tax net interest proxy − ΔNWC − capex
Capex = projected revenue × capex rate
```

Positive ΔNWC consumes cash. The engine anchors calculations to base balances so an unchanged revenue/cost/days scenario yields exactly zero ΔNWC. Lower DSO/DIO and higher DPO have positive incremental cash effects, measured at the same projected revenue/cost levels.

### Financing and runway

```text
Cash principal repayment = scheduled bond principal + notes payable − bonds refinanced
Ending debt = starting carrying debt − gross principal + refinanced principal
Ending liquid assets = starting cash + ST investments + FCF proxy
                       − buybacks − dividends − cash principal repayments
Ending total liquidity = signed ending liquid assets + available undrawn facilities
```

Repay from cash is the default. Optional refinancing replaces only scheduled bond maturities as noncurrent debt; it keeps debt flat when notes payable are zero. It does not change the net-interest assumption. No facility drawing is automatic.

Expired commitments are excluded unless hypothetical renewal is explicitly selected. For the FY2026 base, the 1.000B short facility expires before the horizon, leaving 2.000B available without renewal. Capacity is conditional and is not cash.

Cash coverage has two versions, both using **starting cash + ST investments**, excluding undrawn facilities:

```text
Before distributions: 12 × starting liquid assets / (cash debt repayments − FCF proxy)
After distributions:  12 × starting liquid assets / (cash debt repayments + buybacks + dividends − FCF proxy)
```

If the denominator is not positive, show **No burn**. This annualized year-one cash-use coverage is not an exhaustion date or a recurring actual debt-maturity schedule.

Negative signed resources remain an explicit funding requirement. Cash assets are not displayed as negative, but the funding gap remains in headline liquidity. Current/quick ratios and net debt are suppressed in unfunded scenarios. Other projected ratios use partial pro forma balances with unmodeled assets/liabilities held constant.

## Presets and interpretation

All presets initially use normalized mode, fixed overhead and D&A, base-year distributions and capex intensity, cash maturity repayment and no facility renewal. The separate baseline/refinancing/overhead-flex choices are preserved when applying presets.

| Preset | Growth | GM change | AR days | DIO | DPO | Incremental tariff |
|---|---:|---:|---:|---:|---:|---|
| Base | 0% | 0 bps | 0 | 0 | 0 | Off |
| Inventory Cleanup | 0% | −100 bps | 0 | −10 | 0 | Off |
| Demand Downturn | −10% | −200 bps | +5 | +15 | 0 | Off |
| Tariff Shock | 0% | 0 bps | 0 | 0 | 0 | 2% of pre-tariff COGS |
| Supplier Squeeze | 0% | −50 bps | 0 | +5 | −10 | Off |

The mechanisms reflect risks discussed in Nike filings; the magnitudes are hypothetical and are not Nike targets or guidance. A 5 × 6 sensitivity table recalculates ending liquidity for growth/margin combinations, holding other current inputs fixed.

Historical-stretch indicators: Low ≤25% of the five-year range; Medium ≤50%; High >50% or a target outside the range. A one-day floor avoids a zero-range denominator. They are not loss probabilities or a substitute for SKU-level/customer/supplier evidence. Normalized scenario DIO/DPO have a different cost denominator from reported history.

## Sources

- [FY2023 10-K](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-23-000039/nke-20230531.htm): FY2022/FY2023 statements, pp. 55, 57–58; facilities/debt, Notes 5–6; segment revenue, Note 15.
- [FY2024 10-K](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-24-000044/nke-20240531.htm): historical depreciation and FY2024 facility/debt details, pp. 60, 72–73.
- [FY2025 10-K](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-25-000047/nke-20250531.htm): FY2024/FY2025 statements, pp. 56, 58–59; FY2023 comparative D&A; Notes 5–6.
- [FY2026 10-K](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-26-000088/nke-20260531.htm): FY2026 statements, pp. 55, 57–58; recovery/receivable, Note 1 p. 61; receivables/inventory policy p. 63; facilities/debt, Notes 5–6 pp. 69–70; segment revenue p. 36.
- [FY2027 Q1 10-Q](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-26-000193/nke-20260831.htm): quarterly statements, pp. 1, 3–4; segment revenue p. 25; liquidity p. 34. Printed p. 34 is [physical PDF page 36](https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-26-000193/0000320187-26-000193.pdf#page=36).

## Validation and files

- `index.html`: complete, standalone application; the primary deliverable.
- `step-a/`: source-tagged DATA, calculation module, independent Decimal reference and portable engine tests.
- `QA-Report.md`: results, hand checks, scenario tables and limitations.
- `browser-qa.json`: browser interaction evidence.
- `Presentation-Materials.md`: LinkedIn draft, résumé bullets and recruiter preparation. Nothing has been posted or added to LinkedIn.

To reproduce engine tests, run `node tests.mjs` inside `step-a`. Optional `python3 reference.py` regenerates the independent reference using the Python standard library. Audit modules mirror the embedded production engine; the HTML does not import them at runtime.

To update the delivered app without a build step, edit the clearly labeled `const DATA` and `const calc` sections within `index.html`; preserve provenance and rerun corresponding audit tests. Updating only an audit `.mjs` file does not change the HTML. Keep displayed as-of dates and source metadata consistent. No browser analytics, accounts, cookies or user-data backend are used; requests to font/CDN providers occur normally.

## Optional GitHub Pages hosting

The public project uses GitHub Pages with `main` and the repository root as its publishing source. For another copy, put `index.html` at the root of a repository and configure its GitHub Pages publishing source. A public repository works with GitHub Free. An empty `.nojekyll` is included for a plain static site. No app build command is required. Follow [GitHub's official creation instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

After GitHub provides the live URL, replace the deployment placeholder in the LinkedIn draft; scenario links will then encode that public URL rather than a local path. A normal project repository does not need to use the special `<username>.github.io` repository name.

## Authorship and use

[Zack Aziz](https://www.linkedin.com/in/zack-aziz-554b0026b/) reviewed the financial logic and hand-checked the base and preset results. Research, programming and testing used AI assistance. Be prepared to explain every assumption; do not describe this as Nike employment, verified internal-control testing, or a professional valuation opinion.
