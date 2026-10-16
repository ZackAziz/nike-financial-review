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
