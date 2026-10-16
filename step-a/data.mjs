// STEP A: source-tagged DATA; USD billions. No UI and no external dependencies.
export const DATA = {
  "meta": {
    "title": "Nike interactive financial review",
    "author": "Zack Aziz",
    "lastUpdated": "2026-10-16",
    "unit": "USD billions",
    "precision": 3,
    "annualYearEnd": "May 31",
    "modelVersion": "1.2-complete-review",
    "stage": "Complete interactive review; audit modules mirror embedded HTML"
  },
  "filings": {
    "A": {
      "title": "Nike FY2023 Form 10-K",
      "url": "https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-23-000039/nke-20230531.htm",
      "filed": "2023-07-20"
    },
    "B": {
      "title": "Nike FY2025 Form 10-K",
      "url": "https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-25-000047/nke-20250531.htm",
      "filed": "2025-07-17"
    },
    "C": {
      "title": "Nike FY2026 Form 10-K",
      "url": "https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-26-000088/nke-20260531.htm",
      "filed": "2026-07-15"
    },
    "D": {
      "title": "Nike FY2024 Form 10-K",
      "url": "https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-24-000044/nke-20240531.htm",
      "filed": "2024-07-25"
    },
    "Q": {
      "title": "Nike FY2027 Q1 Form 10-Q",
      "url": "https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-26-000193/nke-20260831.htm",
      "pdfUrl": "https://investors.nike.com/sec-filings/all-sec-filings/content/0000320187-26-000193/0000320187-26-000193.pdf#page=36",
      "filed": "2026-10-02"
    }
  },
  "annual": {
    "FY2022": {
      "fiscalYear": 2022,
      "asOf": "2022-05-31",
      "periodType": "annual",
      "income": {
        "revenue": {
          "value": 46.71,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 55,
            "line": "revenue"
          }
        },
        "cogs": {
          "value": 25.231,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 55,
            "line": "cogs"
          }
        },
        "grossProfit": {
          "value": 21.479,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 55,
            "line": "grossProfit"
          }
        },
        "demandCreation": {
          "value": 3.85,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 55,
            "line": "demandCreation"
          }
        },
        "operatingOverhead": {
          "value": 10.954,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 55,
            "line": "operatingOverhead"
          }
        },
        "sga": {
          "value": 14.804,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 55,
            "line": "sga"
          }
        },
        "netInterestExpense": {
          "value": 0.205,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 55,
            "line": "netInterestExpense"
          }
        },
        "otherExpense": {
          "value": -0.181,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 55,
            "line": "otherExpense"
          }
        },
        "pretaxIncome": {
          "value": 6.651,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 55,
            "line": "pretaxIncome"
          }
        },
        "taxExpense": {
          "value": 0.605,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 55,
            "line": "taxExpense"
          }
        },
        "netIncome": {
          "value": 6.046,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 55,
            "line": "netIncome"
          }
        }
      },
      "balance": {
        "cash": {
          "value": 8.574,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "cash"
          }
        },
        "shortTermInvestments": {
          "value": 4.423,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "shortTermInvestments"
          }
        },
        "reportedReceivables": {
          "value": 4.667,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "reportedReceivables"
          }
        },
        "inventory": {
          "value": 8.42,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "inventory"
          }
        },
        "otherCurrentAssets": {
          "value": 2.129,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "otherCurrentAssets"
          }
        },
        "currentAssets": {
          "value": 28.213,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "currentAssets"
          }
        },
        "accountsPayable": {
          "value": 3.358,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "accountsPayable"
          }
        },
        "accruedLiabilities": {
          "value": 6.22,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "accruedLiabilities"
          }
        },
        "taxPayable": {
          "value": 0.222,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "taxPayable"
          }
        },
        "notesPayable": {
          "value": 0.01,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "notesPayable"
          }
        },
        "currentDebt": {
          "value": 0.5,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "currentDebt"
          }
        },
        "currentLeaseLiabilities": {
          "value": 0.42,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "currentLeaseLiabilities"
          }
        },
        "currentLiabilities": {
          "value": 10.73,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "currentLiabilities"
          }
        },
        "longTermDebt": {
          "value": 8.92,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "longTermDebt"
          }
        },
        "noncurrentLeaseLiabilities": {
          "value": 2.777,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "noncurrentLeaseLiabilities"
          }
        },
        "otherNoncurrentLiabilities": {
          "value": 2.613,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "otherNoncurrentLiabilities"
          }
        },
        "equity": {
          "value": 15.281,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "equity"
          }
        },
        "assets": {
          "value": 40.321,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 57,
            "line": "assets"
          }
        }
      },
      "cashFlow": {
        "depreciationLine": {
          "value": 0.717,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "depreciationLine"
          }
        },
        "deferredTax": {
          "value": -0.65,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "deferredTax"
          }
        },
        "stockCompensation": {
          "value": 0.638,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "stockCompensation"
          }
        },
        "impairmentAmortizationOther": {
          "value": 0.123,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "impairmentAmortizationOther"
          }
        },
        "noncashFX": {
          "value": -0.026,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "noncashFX"
          }
        },
        "receivablesCashEffect": {
          "value": -0.504,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "receivablesCashEffect"
          }
        },
        "inventoryCashEffect": {
          "value": -1.676,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "inventoryCashEffect"
          }
        },
        "otherAssetsCashEffect": {
          "value": -0.845,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "otherAssetsCashEffect"
          }
        },
        "otherLiabilitiesCashEffect": {
          "value": 1.365,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "otherLiabilitiesCashEffect"
          }
        },
        "cfo": {
          "value": 5.188,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "cfo"
          }
        },
        "capex": {
          "value": 0.758,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "capex"
          }
        },
        "buybacks": {
          "value": 4.014,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "buybacks"
          }
        },
        "dividends": {
          "value": 1.837,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "dividends"
          }
        },
        "cashInterestPaid": {
          "value": 0.29,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "cashInterestPaid"
          }
        },
        "da": {
          "value": null,
          "unit": "USD billions",
          "status": "VERIFY",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 58,
            "line": "Depreciation and amortization"
          },
          "comment": "FY2022 total D&A not isolated from combined amortization, impairment and other."
        }
      },
      "segments": {
        "northAmerica": {
          "value": 18.353,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 86,
            "line": "northAmerica",
            "note": "15"
          }
        },
        "emea": {
          "value": 12.479,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 86,
            "line": "emea",
            "note": "15"
          }
        },
        "greaterChina": {
          "value": 7.547,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 86,
            "line": "greaterChina",
            "note": "15"
          }
        },
        "apla": {
          "value": 5.955,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 86,
            "line": "apla",
            "note": "15"
          }
        },
        "globalBrandDivisions": {
          "value": 0.102,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 86,
            "line": "globalBrandDivisions",
            "note": "15"
          }
        },
        "converse": {
          "value": 2.346,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 86,
            "line": "converse",
            "note": "15"
          }
        },
        "corporate": {
          "value": -0.072,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 86,
            "line": "corporate",
            "note": "15"
          }
        }
      },
      "facilities": {
        "long": {
          "commitment": {
            "value": 2,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 70,
              "line": "Five-year committed facility",
              "note": "5"
            }
          },
          "drawn": {
            "value": 0,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 70,
              "line": "Committed facilities drawn",
              "note": "5"
            }
          },
          "expiry": {
            "value": "2027-03-11",
            "unit": "date",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 70,
              "line": "Five-year facility scheduled expiry",
              "note": "5"
            }
          }
        },
        "short": {
          "commitment": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 70,
              "line": "364-day committed facility",
              "note": "5"
            }
          },
          "drawn": {
            "value": 0,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 70,
              "line": "Committed facilities drawn",
              "note": "5"
            }
          },
          "expiry": {
            "value": "2023-03-10",
            "unit": "date",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 70,
              "line": "364-day facility scheduled expiry",
              "note": "5"
            }
          }
        },
        "commercialPaperCapacity": {
          "value": 3,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 45,
            "line": "Commercial paper program capacity"
          }
        },
        "commercialPaperDrawn": {
          "value": 0,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2022",
            "printedPage": 45,
            "line": "Commercial paper outstanding"
          }
        }
      },
      "debtMaturities": [
        {
          "fiscalYear": 2023,
          "principal": {
            "value": 0.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 71,
              "line": "Principal due FY2023",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2025,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 71,
              "line": "Principal due FY2025",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2027,
          "principal": {
            "value": 2,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 71,
              "line": "Principal due FY2027",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2030,
          "principal": {
            "value": 1.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 71,
              "line": "Principal due FY2030",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2040,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 71,
              "line": "Principal due FY2040",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2043,
          "principal": {
            "value": 0.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 71,
              "line": "Principal due FY2043",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2046,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 71,
              "line": "Principal due FY2046",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2047,
          "principal": {
            "value": 0.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 71,
              "line": "Principal due FY2047",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2050,
          "principal": {
            "value": 1.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2022",
              "printedPage": 71,
              "line": "Principal due FY2050",
              "note": "6"
            }
          }
        }
      ]
    },
    "FY2023": {
      "fiscalYear": 2023,
      "asOf": "2023-05-31",
      "periodType": "annual",
      "income": {
        "revenue": {
          "value": 51.217,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 55,
            "line": "revenue"
          }
        },
        "cogs": {
          "value": 28.925,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 55,
            "line": "cogs"
          }
        },
        "grossProfit": {
          "value": 22.292,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 55,
            "line": "grossProfit"
          }
        },
        "demandCreation": {
          "value": 4.06,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 55,
            "line": "demandCreation"
          }
        },
        "operatingOverhead": {
          "value": 12.317,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 55,
            "line": "operatingOverhead"
          }
        },
        "sga": {
          "value": 16.377,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 55,
            "line": "sga"
          }
        },
        "netInterestExpense": {
          "value": -0.006,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 55,
            "line": "netInterestExpense"
          }
        },
        "otherExpense": {
          "value": -0.28,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 55,
            "line": "otherExpense"
          }
        },
        "pretaxIncome": {
          "value": 6.201,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 55,
            "line": "pretaxIncome"
          }
        },
        "taxExpense": {
          "value": 1.131,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 55,
            "line": "taxExpense"
          }
        },
        "netIncome": {
          "value": 5.07,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 55,
            "line": "netIncome"
          }
        }
      },
      "balance": {
        "cash": {
          "value": 7.441,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "cash"
          }
        },
        "shortTermInvestments": {
          "value": 3.234,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "shortTermInvestments"
          }
        },
        "reportedReceivables": {
          "value": 4.131,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "reportedReceivables"
          }
        },
        "inventory": {
          "value": 8.454,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "inventory"
          }
        },
        "otherCurrentAssets": {
          "value": 1.942,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "otherCurrentAssets"
          }
        },
        "currentAssets": {
          "value": 25.202,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "currentAssets"
          }
        },
        "accountsPayable": {
          "value": 2.862,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "accountsPayable"
          }
        },
        "accruedLiabilities": {
          "value": 5.723,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "accruedLiabilities"
          }
        },
        "taxPayable": {
          "value": 0.24,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "taxPayable"
          }
        },
        "notesPayable": {
          "value": 0.006,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "notesPayable"
          }
        },
        "currentDebt": {
          "value": 0.0,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "currentDebt"
          }
        },
        "currentLeaseLiabilities": {
          "value": 0.425,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "currentLeaseLiabilities"
          }
        },
        "currentLiabilities": {
          "value": 9.256,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "currentLiabilities"
          }
        },
        "longTermDebt": {
          "value": 8.927,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "longTermDebt"
          }
        },
        "noncurrentLeaseLiabilities": {
          "value": 2.786,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "noncurrentLeaseLiabilities"
          }
        },
        "otherNoncurrentLiabilities": {
          "value": 2.558,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "otherNoncurrentLiabilities"
          }
        },
        "equity": {
          "value": 14.004,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "equity"
          }
        },
        "assets": {
          "value": 37.531,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 57,
            "line": "assets"
          }
        }
      },
      "cashFlow": {
        "depreciationLine": {
          "value": 0.703,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "depreciationLine"
          }
        },
        "deferredTax": {
          "value": -0.117,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "deferredTax"
          }
        },
        "stockCompensation": {
          "value": 0.755,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "stockCompensation"
          }
        },
        "impairmentAmortizationOther": {
          "value": 0.156,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "impairmentAmortizationOther"
          }
        },
        "noncashFX": {
          "value": -0.213,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "noncashFX"
          }
        },
        "receivablesCashEffect": {
          "value": 0.489,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "receivablesCashEffect"
          }
        },
        "inventoryCashEffect": {
          "value": -0.133,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "inventoryCashEffect"
          }
        },
        "otherAssetsCashEffect": {
          "value": -0.644,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "otherAssetsCashEffect"
          }
        },
        "otherLiabilitiesCashEffect": {
          "value": -0.225,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "otherLiabilitiesCashEffect"
          }
        },
        "cfo": {
          "value": 5.841,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "cfo"
          }
        },
        "capex": {
          "value": 0.969,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "capex"
          }
        },
        "buybacks": {
          "value": 5.48,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "buybacks"
          }
        },
        "dividends": {
          "value": 2.012,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "dividends"
          }
        },
        "cashInterestPaid": {
          "value": 0.347,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 58,
            "line": "cashInterestPaid"
          }
        },
        "da": {
          "value": 0.703,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2023",
            "printedPage": 59,
            "line": "Depreciation and amortization"
          }
        }
      },
      "segments": {
        "northAmerica": {
          "value": 21.608,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 86,
            "line": "northAmerica",
            "note": "15"
          }
        },
        "emea": {
          "value": 13.418,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 86,
            "line": "emea",
            "note": "15"
          }
        },
        "greaterChina": {
          "value": 7.248,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 86,
            "line": "greaterChina",
            "note": "15"
          }
        },
        "apla": {
          "value": 6.431,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 86,
            "line": "apla",
            "note": "15"
          }
        },
        "globalBrandDivisions": {
          "value": 0.058,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 86,
            "line": "globalBrandDivisions",
            "note": "15"
          }
        },
        "converse": {
          "value": 2.427,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 86,
            "line": "converse",
            "note": "15"
          }
        },
        "corporate": {
          "value": 0.027,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 86,
            "line": "corporate",
            "note": "15"
          }
        }
      },
      "facilities": {
        "long": {
          "commitment": {
            "value": 2,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 70,
              "line": "Five-year committed facility",
              "note": "5"
            }
          },
          "drawn": {
            "value": 0,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 70,
              "line": "Committed facilities drawn",
              "note": "5"
            }
          },
          "expiry": {
            "value": "2027-03-11",
            "unit": "date",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 70,
              "line": "Five-year facility scheduled expiry",
              "note": "5"
            }
          }
        },
        "short": {
          "commitment": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 70,
              "line": "364-day committed facility",
              "note": "5"
            }
          },
          "drawn": {
            "value": 0,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 70,
              "line": "Committed facilities drawn",
              "note": "5"
            }
          },
          "expiry": {
            "value": "2024-03-08",
            "unit": "date",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 70,
              "line": "364-day facility scheduled expiry",
              "note": "5"
            }
          }
        },
        "commercialPaperCapacity": {
          "value": 3,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 45,
            "line": "Commercial paper program capacity"
          }
        },
        "commercialPaperDrawn": {
          "value": 0,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "A",
            "period": "FY2023",
            "printedPage": 45,
            "line": "Commercial paper outstanding"
          }
        }
      },
      "debtMaturities": [
        {
          "fiscalYear": 2025,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 71,
              "line": "Principal due FY2025",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2027,
          "principal": {
            "value": 2,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 71,
              "line": "Principal due FY2027",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2030,
          "principal": {
            "value": 1.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 71,
              "line": "Principal due FY2030",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2040,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 71,
              "line": "Principal due FY2040",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2043,
          "principal": {
            "value": 0.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 71,
              "line": "Principal due FY2043",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2046,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 71,
              "line": "Principal due FY2046",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2047,
          "principal": {
            "value": 0.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 71,
              "line": "Principal due FY2047",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2050,
          "principal": {
            "value": 1.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "A",
              "period": "FY2023",
              "printedPage": 71,
              "line": "Principal due FY2050",
              "note": "6"
            }
          }
        }
      ]
    },
    "FY2024": {
      "fiscalYear": 2024,
      "asOf": "2024-05-31",
      "periodType": "annual",
      "income": {
        "revenue": {
          "value": 51.362,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 56,
            "line": "revenue"
          }
        },
        "cogs": {
          "value": 28.475,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 56,
            "line": "cogs"
          }
        },
        "grossProfit": {
          "value": 22.887,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 56,
            "line": "grossProfit"
          }
        },
        "demandCreation": {
          "value": 4.285,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 56,
            "line": "demandCreation"
          }
        },
        "operatingOverhead": {
          "value": 12.291,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 56,
            "line": "operatingOverhead"
          }
        },
        "sga": {
          "value": 16.576,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 56,
            "line": "sga"
          }
        },
        "netInterestExpense": {
          "value": -0.161,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 56,
            "line": "netInterestExpense"
          }
        },
        "otherExpense": {
          "value": -0.228,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 56,
            "line": "otherExpense"
          }
        },
        "pretaxIncome": {
          "value": 6.7,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 56,
            "line": "pretaxIncome"
          }
        },
        "taxExpense": {
          "value": 1.0,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 56,
            "line": "taxExpense"
          }
        },
        "netIncome": {
          "value": 5.7,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 56,
            "line": "netIncome"
          }
        }
      },
      "balance": {
        "cash": {
          "value": 9.86,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "cash"
          }
        },
        "shortTermInvestments": {
          "value": 1.722,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "shortTermInvestments"
          }
        },
        "reportedReceivables": {
          "value": 4.427,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "reportedReceivables"
          }
        },
        "inventory": {
          "value": 7.519,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "inventory"
          }
        },
        "otherCurrentAssets": {
          "value": 1.854,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "otherCurrentAssets"
          }
        },
        "currentAssets": {
          "value": 25.382,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "currentAssets"
          }
        },
        "accountsPayable": {
          "value": 2.851,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "accountsPayable"
          }
        },
        "accruedLiabilities": {
          "value": 5.725,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "accruedLiabilities"
          }
        },
        "taxPayable": {
          "value": 0.534,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "taxPayable"
          }
        },
        "notesPayable": {
          "value": 0.006,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "notesPayable"
          }
        },
        "currentDebt": {
          "value": 1.0,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "currentDebt"
          }
        },
        "currentLeaseLiabilities": {
          "value": 0.477,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "currentLeaseLiabilities"
          }
        },
        "currentLiabilities": {
          "value": 10.593,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "currentLiabilities"
          }
        },
        "longTermDebt": {
          "value": 7.903,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "longTermDebt"
          }
        },
        "noncurrentLeaseLiabilities": {
          "value": 2.566,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "noncurrentLeaseLiabilities"
          }
        },
        "otherNoncurrentLiabilities": {
          "value": 2.618,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "otherNoncurrentLiabilities"
          }
        },
        "equity": {
          "value": 14.43,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "equity"
          }
        },
        "assets": {
          "value": 38.11,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 58,
            "line": "assets"
          }
        }
      },
      "cashFlow": {
        "depreciationLine": {
          "value": 0.796,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "depreciationLine"
          }
        },
        "deferredTax": {
          "value": -0.497,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "deferredTax"
          }
        },
        "stockCompensation": {
          "value": 0.804,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "stockCompensation"
          }
        },
        "impairmentAmortizationOther": {
          "value": 0.048,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "impairmentAmortizationOther"
          }
        },
        "noncashFX": {
          "value": -0.138,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "noncashFX"
          }
        },
        "receivablesCashEffect": {
          "value": -0.329,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "receivablesCashEffect"
          }
        },
        "inventoryCashEffect": {
          "value": 0.908,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "inventoryCashEffect"
          }
        },
        "otherAssetsCashEffect": {
          "value": -0.26,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "otherAssetsCashEffect"
          }
        },
        "otherLiabilitiesCashEffect": {
          "value": 0.397,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "otherLiabilitiesCashEffect"
          }
        },
        "cfo": {
          "value": 7.429,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "cfo"
          }
        },
        "capex": {
          "value": 0.812,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "capex"
          }
        },
        "buybacks": {
          "value": 4.25,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "buybacks"
          }
        },
        "dividends": {
          "value": 2.169,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "dividends"
          }
        },
        "cashInterestPaid": {
          "value": 0.381,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "cashInterestPaid"
          }
        },
        "da": {
          "value": 0.796,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 59,
            "line": "Depreciation and amortization"
          }
        }
      },
      "segments": {
        "northAmerica": {
          "value": 21.396,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2024",
            "printedPage": 87,
            "line": "northAmerica",
            "note": "15"
          }
        },
        "emea": {
          "value": 13.607,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2024",
            "printedPage": 87,
            "line": "emea",
            "note": "15"
          }
        },
        "greaterChina": {
          "value": 7.545,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2024",
            "printedPage": 87,
            "line": "greaterChina",
            "note": "15"
          }
        },
        "apla": {
          "value": 6.729,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2024",
            "printedPage": 87,
            "line": "apla",
            "note": "15"
          }
        },
        "globalBrandDivisions": {
          "value": 0.045,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2024",
            "printedPage": 87,
            "line": "globalBrandDivisions",
            "note": "15"
          }
        },
        "converse": {
          "value": 2.082,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2024",
            "printedPage": 87,
            "line": "converse",
            "note": "15"
          }
        },
        "corporate": {
          "value": -0.042,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2024",
            "printedPage": 87,
            "line": "corporate",
            "note": "15"
          }
        }
      },
      "facilities": {
        "long": {
          "commitment": {
            "value": 2,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 72,
              "line": "Five-year committed facility",
              "note": "5"
            }
          },
          "drawn": {
            "value": 0,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 72,
              "line": "Committed facilities drawn",
              "note": "5"
            }
          },
          "expiry": {
            "value": "2027-03-11",
            "unit": "date",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 72,
              "line": "Five-year facility scheduled expiry",
              "note": "5"
            }
          }
        },
        "short": {
          "commitment": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 72,
              "line": "364-day committed facility",
              "note": "5"
            }
          },
          "drawn": {
            "value": 0,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 72,
              "line": "Committed facilities drawn",
              "note": "5"
            }
          },
          "expiry": {
            "value": "2025-03-07",
            "unit": "date",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 72,
              "line": "364-day facility scheduled expiry",
              "note": "5"
            }
          }
        },
        "commercialPaperCapacity": {
          "value": 3,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 47,
            "line": "Commercial paper program capacity"
          }
        },
        "commercialPaperDrawn": {
          "value": 0,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2024",
            "printedPage": 47,
            "line": "Commercial paper outstanding"
          }
        }
      },
      "debtMaturities": [
        {
          "fiscalYear": 2025,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 73,
              "line": "Principal due FY2025",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2027,
          "principal": {
            "value": 2,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 73,
              "line": "Principal due FY2027",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2030,
          "principal": {
            "value": 1.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 73,
              "line": "Principal due FY2030",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2040,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 73,
              "line": "Principal due FY2040",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2043,
          "principal": {
            "value": 0.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 73,
              "line": "Principal due FY2043",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2046,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 73,
              "line": "Principal due FY2046",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2047,
          "principal": {
            "value": 0.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 73,
              "line": "Principal due FY2047",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2050,
          "principal": {
            "value": 1.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "D",
              "period": "FY2024",
              "printedPage": 73,
              "line": "Principal due FY2050",
              "note": "6"
            }
          }
        }
      ]
    },
    "FY2025": {
      "fiscalYear": 2025,
      "asOf": "2025-05-31",
      "periodType": "annual",
      "income": {
        "revenue": {
          "value": 46.309,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 56,
            "line": "revenue"
          }
        },
        "cogs": {
          "value": 26.519,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 56,
            "line": "cogs"
          }
        },
        "grossProfit": {
          "value": 19.79,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 56,
            "line": "grossProfit"
          }
        },
        "demandCreation": {
          "value": 4.689,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 56,
            "line": "demandCreation"
          }
        },
        "operatingOverhead": {
          "value": 11.399,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 56,
            "line": "operatingOverhead"
          }
        },
        "sga": {
          "value": 16.088,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 56,
            "line": "sga"
          }
        },
        "netInterestExpense": {
          "value": -0.107,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 56,
            "line": "netInterestExpense"
          }
        },
        "otherExpense": {
          "value": -0.076,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 56,
            "line": "otherExpense"
          }
        },
        "pretaxIncome": {
          "value": 3.885,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 56,
            "line": "pretaxIncome"
          }
        },
        "taxExpense": {
          "value": 0.666,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 56,
            "line": "taxExpense"
          }
        },
        "netIncome": {
          "value": 3.219,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 56,
            "line": "netIncome"
          }
        }
      },
      "balance": {
        "cash": {
          "value": 7.464,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "cash"
          }
        },
        "shortTermInvestments": {
          "value": 1.687,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "shortTermInvestments"
          }
        },
        "reportedReceivables": {
          "value": 4.717,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "reportedReceivables"
          }
        },
        "inventory": {
          "value": 7.489,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "inventory"
          }
        },
        "otherCurrentAssets": {
          "value": 2.005,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "otherCurrentAssets"
          }
        },
        "currentAssets": {
          "value": 23.362,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "currentAssets"
          }
        },
        "accountsPayable": {
          "value": 3.479,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "accountsPayable"
          }
        },
        "accruedLiabilities": {
          "value": 5.911,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "accruedLiabilities"
          }
        },
        "taxPayable": {
          "value": 0.669,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "taxPayable"
          }
        },
        "notesPayable": {
          "value": 0.005,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "notesPayable"
          }
        },
        "currentDebt": {
          "value": 0.0,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "currentDebt"
          }
        },
        "currentLeaseLiabilities": {
          "value": 0.502,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "currentLeaseLiabilities"
          }
        },
        "currentLiabilities": {
          "value": 10.566,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "currentLiabilities"
          }
        },
        "longTermDebt": {
          "value": 7.961,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "longTermDebt"
          }
        },
        "noncurrentLeaseLiabilities": {
          "value": 2.55,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "noncurrentLeaseLiabilities"
          }
        },
        "otherNoncurrentLiabilities": {
          "value": 2.289,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "otherNoncurrentLiabilities"
          }
        },
        "equity": {
          "value": 13.213,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "equity"
          }
        },
        "assets": {
          "value": 36.579,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 58,
            "line": "assets"
          }
        }
      },
      "cashFlow": {
        "depreciationLine": {
          "value": 0.775,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "depreciationLine"
          }
        },
        "deferredTax": {
          "value": -0.288,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "deferredTax"
          }
        },
        "stockCompensation": {
          "value": 0.709,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "stockCompensation"
          }
        },
        "impairmentAmortizationOther": {
          "value": 0.033,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "impairmentAmortizationOther"
          }
        },
        "noncashFX": {
          "value": 0.037,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "noncashFX"
          }
        },
        "receivablesCashEffect": {
          "value": -0.257,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "receivablesCashEffect"
          }
        },
        "inventoryCashEffect": {
          "value": 0.12,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "inventoryCashEffect"
          }
        },
        "otherAssetsCashEffect": {
          "value": -0.224,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "otherAssetsCashEffect"
          }
        },
        "otherLiabilitiesCashEffect": {
          "value": -0.426,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "otherLiabilitiesCashEffect"
          }
        },
        "cfo": {
          "value": 3.698,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "cfo"
          }
        },
        "capex": {
          "value": 0.43,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "capex"
          }
        },
        "buybacks": {
          "value": 2.985,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "buybacks"
          }
        },
        "dividends": {
          "value": 2.3,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "dividends"
          }
        },
        "cashInterestPaid": {
          "value": 0.389,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "cashInterestPaid"
          }
        },
        "da": {
          "value": 0.775,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 59,
            "line": "Depreciation and amortization"
          }
        }
      },
      "segments": {
        "northAmerica": {
          "value": 19.572,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2025",
            "printedPage": 86,
            "line": "northAmerica",
            "note": "15"
          }
        },
        "emea": {
          "value": 12.257,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2025",
            "printedPage": 86,
            "line": "emea",
            "note": "15"
          }
        },
        "greaterChina": {
          "value": 6.586,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2025",
            "printedPage": 86,
            "line": "greaterChina",
            "note": "15"
          }
        },
        "apla": {
          "value": 6.251,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2025",
            "printedPage": 86,
            "line": "apla",
            "note": "15"
          }
        },
        "globalBrandDivisions": {
          "value": 0.048,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2025",
            "printedPage": 86,
            "line": "globalBrandDivisions",
            "note": "15"
          }
        },
        "converse": {
          "value": 1.692,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2025",
            "printedPage": 86,
            "line": "converse",
            "note": "15"
          }
        },
        "corporate": {
          "value": -0.097,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2025",
            "printedPage": 86,
            "line": "corporate",
            "note": "15"
          }
        }
      },
      "facilities": {
        "long": {
          "commitment": {
            "value": 2,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 70,
              "line": "Five-year committed facility",
              "note": "5"
            }
          },
          "drawn": {
            "value": 0,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 70,
              "line": "Committed facilities drawn",
              "note": "5"
            }
          },
          "expiry": {
            "value": "2030-03-07",
            "unit": "date",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 70,
              "line": "Five-year facility scheduled expiry",
              "note": "5"
            }
          }
        },
        "short": {
          "commitment": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 70,
              "line": "364-day committed facility",
              "note": "5"
            }
          },
          "drawn": {
            "value": 0,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 70,
              "line": "Committed facilities drawn",
              "note": "5"
            }
          },
          "expiry": {
            "value": "2026-03-06",
            "unit": "date",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 70,
              "line": "364-day facility scheduled expiry",
              "note": "5"
            }
          }
        },
        "commercialPaperCapacity": {
          "value": 3,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 47,
            "line": "Commercial paper program capacity"
          }
        },
        "commercialPaperDrawn": {
          "value": 0,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "B",
            "period": "FY2025",
            "printedPage": 47,
            "line": "Commercial paper outstanding"
          }
        }
      },
      "debtMaturities": [
        {
          "fiscalYear": 2027,
          "principal": {
            "value": 2,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 71,
              "line": "Principal due FY2027",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2030,
          "principal": {
            "value": 1.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 71,
              "line": "Principal due FY2030",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2040,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 71,
              "line": "Principal due FY2040",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2043,
          "principal": {
            "value": 0.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 71,
              "line": "Principal due FY2043",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2046,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 71,
              "line": "Principal due FY2046",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2047,
          "principal": {
            "value": 0.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 71,
              "line": "Principal due FY2047",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2050,
          "principal": {
            "value": 1.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "B",
              "period": "FY2025",
              "printedPage": 71,
              "line": "Principal due FY2050",
              "note": "6"
            }
          }
        }
      ]
    },
    "FY2026": {
      "fiscalYear": 2026,
      "asOf": "2026-05-31",
      "periodType": "annual",
      "income": {
        "revenue": {
          "value": 46.398,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 55,
            "line": "revenue"
          }
        },
        "cogs": {
          "value": 26.487,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 55,
            "line": "cogs"
          }
        },
        "grossProfit": {
          "value": 19.911,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 55,
            "line": "grossProfit"
          }
        },
        "demandCreation": {
          "value": 4.754,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 55,
            "line": "demandCreation"
          }
        },
        "operatingOverhead": {
          "value": 11.36,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 55,
            "line": "operatingOverhead"
          }
        },
        "sga": {
          "value": 16.114,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 55,
            "line": "sga"
          }
        },
        "netInterestExpense": {
          "value": -0.05,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 55,
            "line": "netInterestExpense"
          }
        },
        "otherExpense": {
          "value": -0.053,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 55,
            "line": "otherExpense"
          }
        },
        "pretaxIncome": {
          "value": 3.9,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 55,
            "line": "pretaxIncome"
          }
        },
        "taxExpense": {
          "value": 0.792,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 55,
            "line": "taxExpense"
          }
        },
        "netIncome": {
          "value": 3.108,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 55,
            "line": "netIncome"
          }
        }
      },
      "balance": {
        "cash": {
          "value": 7.563,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "cash"
          }
        },
        "shortTermInvestments": {
          "value": 1.464,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "shortTermInvestments"
          }
        },
        "reportedReceivables": {
          "value": 5.931,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "reportedReceivables"
          }
        },
        "inventory": {
          "value": 7.501,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "inventory"
          }
        },
        "otherCurrentAssets": {
          "value": 2.144,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "otherCurrentAssets"
          }
        },
        "currentAssets": {
          "value": 24.603,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "currentAssets"
          }
        },
        "accountsPayable": {
          "value": 3.6,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "accountsPayable"
          }
        },
        "accruedLiabilities": {
          "value": 6.092,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "accruedLiabilities"
          }
        },
        "taxPayable": {
          "value": 0.377,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "taxPayable"
          }
        },
        "notesPayable": {
          "value": 0,
          "unit": "USD billions",
          "status": "presentation-derived",
          "source": {
            "filing": "Q",
            "period": "FY2026",
            "printedPage": 3,
            "line": "No separate notes payable line"
          },
          "comment": "User-approved zero for separately presented notes payable. Does not assert that accrued liabilities contain no financing-related items."
        },
        "currentDebt": {
          "value": 2.0,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "currentDebt"
          }
        },
        "currentLeaseLiabilities": {
          "value": 0.478,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "currentLeaseLiabilities"
          }
        },
        "currentLiabilities": {
          "value": 12.547,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "currentLiabilities"
          }
        },
        "longTermDebt": {
          "value": 5.942,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "longTermDebt"
          }
        },
        "noncurrentLeaseLiabilities": {
          "value": 2.613,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "noncurrentLeaseLiabilities"
          }
        },
        "otherNoncurrentLiabilities": {
          "value": 2.443,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "otherNoncurrentLiabilities"
          }
        },
        "equity": {
          "value": 14.865,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "equity"
          }
        },
        "assets": {
          "value": 38.41,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 57,
            "line": "assets"
          }
        }
      },
      "cashFlow": {
        "depreciationLine": {
          "value": 0.747,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "depreciationLine"
          }
        },
        "deferredTax": {
          "value": -0.096,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "deferredTax"
          }
        },
        "stockCompensation": {
          "value": 0.715,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "stockCompensation"
          }
        },
        "impairmentAmortizationOther": {
          "value": 0.05,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "impairmentAmortizationOther"
          }
        },
        "noncashFX": {
          "value": 0.022,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "noncashFX"
          }
        },
        "receivablesCashEffect": {
          "value": -1.207,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "receivablesCashEffect"
          }
        },
        "inventoryCashEffect": {
          "value": -0.031,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "inventoryCashEffect"
          }
        },
        "otherAssetsCashEffect": {
          "value": 0.519,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "otherAssetsCashEffect"
          }
        },
        "otherLiabilitiesCashEffect": {
          "value": -0.959,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "otherLiabilitiesCashEffect"
          }
        },
        "cfo": {
          "value": 2.868,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "cfo"
          }
        },
        "capex": {
          "value": 0.684,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "capex"
          }
        },
        "buybacks": {
          "value": 0.146,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "buybacks"
          }
        },
        "dividends": {
          "value": 2.407,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "dividends"
          }
        },
        "cashInterestPaid": {
          "value": 0.323,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "cashInterestPaid"
          }
        },
        "da": {
          "value": 0.747,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 58,
            "line": "Depreciation and amortization"
          }
        }
      },
      "segments": {
        "northAmerica": {
          "value": 20.511,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 86,
            "line": "northAmerica",
            "note": "15"
          }
        },
        "emea": {
          "value": 12.572,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 86,
            "line": "emea",
            "note": "15"
          }
        },
        "greaterChina": {
          "value": 5.847,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 86,
            "line": "greaterChina",
            "note": "15"
          }
        },
        "apla": {
          "value": 6.243,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 86,
            "line": "apla",
            "note": "15"
          }
        },
        "globalBrandDivisions": {
          "value": 0.049,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 86,
            "line": "globalBrandDivisions",
            "note": "15"
          }
        },
        "converse": {
          "value": 1.174,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 86,
            "line": "converse",
            "note": "15"
          }
        },
        "corporate": {
          "value": 0.002,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 86,
            "line": "corporate",
            "note": "15"
          }
        }
      },
      "facilities": {
        "long": {
          "commitment": {
            "value": 2,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 69,
              "line": "Five-year committed facility",
              "note": "5"
            }
          },
          "drawn": {
            "value": 0,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 69,
              "line": "Committed facilities drawn",
              "note": "5"
            }
          },
          "expiry": {
            "value": "2030-03-07",
            "unit": "date",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 69,
              "line": "Five-year facility scheduled expiry",
              "note": "5"
            }
          }
        },
        "short": {
          "commitment": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 69,
              "line": "364-day committed facility",
              "note": "5"
            }
          },
          "drawn": {
            "value": 0,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 69,
              "line": "Committed facilities drawn",
              "note": "5"
            }
          },
          "expiry": {
            "value": "2027-03-05",
            "unit": "date",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 69,
              "line": "364-day facility scheduled expiry",
              "note": "5"
            }
          }
        },
        "commercialPaperCapacity": {
          "value": 3,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 46,
            "line": "Commercial paper program capacity"
          }
        },
        "commercialPaperDrawn": {
          "value": 0,
          "unit": "USD billions",
          "status": "reported",
          "source": {
            "filing": "C",
            "period": "FY2026",
            "printedPage": 46,
            "line": "Commercial paper outstanding"
          }
        }
      },
      "debtMaturities": [
        {
          "fiscalYear": 2027,
          "principal": {
            "value": 2,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 70,
              "line": "Principal due FY2027",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2030,
          "principal": {
            "value": 1.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 70,
              "line": "Principal due FY2030",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2040,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 70,
              "line": "Principal due FY2040",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2043,
          "principal": {
            "value": 0.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 70,
              "line": "Principal due FY2043",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2046,
          "principal": {
            "value": 1,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 70,
              "line": "Principal due FY2046",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2047,
          "principal": {
            "value": 0.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 70,
              "line": "Principal due FY2047",
              "note": "6"
            }
          }
        },
        {
          "fiscalYear": 2050,
          "principal": {
            "value": 1.5,
            "unit": "USD billions",
            "status": "reported",
            "source": {
              "filing": "C",
              "period": "FY2026",
              "printedPage": 70,
              "line": "Principal due FY2050",
              "note": "6"
            }
          }
        }
      ]
    }
  },
  "latestQuarter": {
    "fiscalYear": 2027,
    "quarter": 1,
    "asOf": "2026-08-31",
    "periodType": "quarter",
    "income": {
      "revenue": {
        "value": 11.213,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 1,
          "line": "revenue"
        }
      },
      "cogs": {
        "value": 6.415,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 1,
          "line": "cogs"
        }
      },
      "grossProfit": {
        "value": 4.798,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 1,
          "line": "grossProfit"
        }
      },
      "demandCreation": {
        "value": 1.252,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 1,
          "line": "demandCreation"
        }
      },
      "operatingOverhead": {
        "value": 2.658,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 1,
          "line": "operatingOverhead"
        }
      },
      "sga": {
        "value": 3.91,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 1,
          "line": "sga"
        }
      },
      "netInterestExpense": {
        "value": -0.014,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 1,
          "line": "netInterestExpense"
        }
      },
      "otherExpense": {
        "value": -0.019,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 1,
          "line": "otherExpense"
        }
      },
      "pretaxIncome": {
        "value": 0.921,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 1,
          "line": "pretaxIncome"
        }
      },
      "taxExpense": {
        "value": 0.209,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 1,
          "line": "taxExpense"
        }
      },
      "netIncome": {
        "value": 0.712,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 1,
          "line": "netIncome"
        }
      }
    },
    "balance": {
      "cash": {
        "value": 6.903,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "cash"
        }
      },
      "shortTermInvestments": {
        "value": 1.465,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "shortTermInvestments"
        }
      },
      "reportedReceivables": {
        "value": 5.242,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "reportedReceivables"
        }
      },
      "inventory": {
        "value": 7.846,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "inventory"
        }
      },
      "otherCurrentAssets": {
        "value": 2.217,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "otherCurrentAssets"
        }
      },
      "currentAssets": {
        "value": 23.673,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "currentAssets"
        }
      },
      "accountsPayable": {
        "value": 3.42,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "accountsPayable"
        }
      },
      "accruedLiabilities": {
        "value": 5.338,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "accruedLiabilities"
        }
      },
      "taxPayable": {
        "value": 0.178,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "taxPayable"
        }
      },
      "notesPayable": {
        "value": 0,
        "unit": "USD billions",
        "status": "presentation-derived",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "No separate notes payable line"
        },
        "comment": "User-approved presentation-based zero; not a claim about all accrued-liability components."
      },
      "currentDebt": {
        "value": 2.0,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "currentDebt"
        }
      },
      "currentLeaseLiabilities": {
        "value": 0.473,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "currentLeaseLiabilities"
        }
      },
      "currentLiabilities": {
        "value": 11.409,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "currentLiabilities"
        }
      },
      "longTermDebt": {
        "value": 5.893,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "longTermDebt"
        }
      },
      "noncurrentLeaseLiabilities": {
        "value": 2.706,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "noncurrentLeaseLiabilities"
        }
      },
      "otherNoncurrentLiabilities": {
        "value": 2.566,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "otherNoncurrentLiabilities"
        }
      },
      "equity": {
        "value": 15.22,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "equity"
        }
      },
      "assets": {
        "value": 37.794,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 3,
          "line": "assets"
        }
      }
    },
    "cashFlow": {
      "depreciationLine": {
        "value": 0.193,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "depreciationLine"
        }
      },
      "deferredTax": {
        "value": -0.067,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "deferredTax"
        }
      },
      "stockCompensation": {
        "value": 0.158,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "stockCompensation"
        }
      },
      "impairmentAmortizationOther": {
        "value": 0.009,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "impairmentAmortizationOther"
        }
      },
      "noncashFX": {
        "value": -0.024,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "noncashFX"
        }
      },
      "receivablesCashEffect": {
        "value": 0.695,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "receivablesCashEffect"
        }
      },
      "inventoryCashEffect": {
        "value": -0.312,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "inventoryCashEffect"
        }
      },
      "otherAssetsCashEffect": {
        "value": -0.01,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "otherAssetsCashEffect"
        }
      },
      "otherLiabilitiesCashEffect": {
        "value": -1.219,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "otherLiabilitiesCashEffect"
        }
      },
      "cfo": {
        "value": 0.135,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "cfo"
        }
      },
      "capex": {
        "value": 0.199,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "capex"
        }
      },
      "buybacks": {
        "value": 0.0,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "buybacks"
        }
      },
      "dividends": {
        "value": 0.61,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "dividends"
        }
      },
      "da": {
        "value": 0.193,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 4,
          "line": "Depreciation and amortization"
        }
      }
    },
    "segments": {
      "northAmerica": {
        "value": 5.127,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 16,
          "line": "northAmerica",
          "note": "10"
        }
      },
      "emea": {
        "value": 3.176,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 16,
          "line": "emea",
          "note": "10"
        }
      },
      "greaterChina": {
        "value": 1.18,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 16,
          "line": "greaterChina",
          "note": "10"
        }
      },
      "apla": {
        "value": 1.463,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 16,
          "line": "apla",
          "note": "10"
        }
      },
      "globalBrandDivisions": {
        "value": 0.006,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 16,
          "line": "globalBrandDivisions",
          "note": "10"
        }
      },
      "converse": {
        "value": 0.263,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 16,
          "line": "converse",
          "note": "10"
        }
      },
      "corporate": {
        "value": -0.002,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 16,
          "line": "corporate",
          "note": "10"
        }
      }
    },
    "facilities": {
      "commitment": {
        "value": 3,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 34,
          "line": "Facilities unchanged from FY2026"
        }
      },
      "drawn": {
        "value": 0,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 34,
          "line": "Committed facilities drawn"
        }
      },
      "commercialPaperCapacity": {
        "value": 3,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 34,
          "line": "Commercial paper program capacity"
        }
      },
      "commercialPaperDrawn": {
        "value": 0,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2027 Q1",
          "printedPage": 34,
          "line": "Commercial paper outstanding"
        }
      }
    }
  },
  "priorYearQuarter": {
    "income": {
      "revenue": {
        "value": 11.72,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 1,
          "line": "revenue"
        }
      },
      "cogs": {
        "value": 6.777,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 1,
          "line": "cogs"
        }
      },
      "grossProfit": {
        "value": 4.943,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 1,
          "line": "grossProfit"
        }
      },
      "demandCreation": {
        "value": 1.188,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 1,
          "line": "demandCreation"
        }
      },
      "operatingOverhead": {
        "value": 2.828,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 1,
          "line": "operatingOverhead"
        }
      },
      "sga": {
        "value": 4.016,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 1,
          "line": "sga"
        }
      },
      "netInterestExpense": {
        "value": -0.018,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 1,
          "line": "netInterestExpense"
        }
      },
      "otherExpense": {
        "value": 0.023,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 1,
          "line": "otherExpense"
        }
      },
      "pretaxIncome": {
        "value": 0.922,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 1,
          "line": "pretaxIncome"
        }
      },
      "taxExpense": {
        "value": 0.195,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 1,
          "line": "taxExpense"
        }
      },
      "netIncome": {
        "value": 0.727,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 1,
          "line": "netIncome"
        }
      }
    },
    "cashFlow": {
      "cfo": {
        "value": 0.222,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 4,
          "line": "cfo"
        }
      },
      "capex": {
        "value": 0.207,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 4,
          "line": "capex"
        }
      },
      "da": {
        "value": 0.19,
        "unit": "USD billions",
        "status": "reported",
        "source": {
          "filing": "Q",
          "period": "FY2026 Q1",
          "printedPage": 4,
          "line": "da"
        }
      }
    }
  },
  "adjustments": {
    "tariffBenefitFY2026": {
      "value": 0.986,
      "unit": "USD billions",
      "status": "reported",
      "source": {
        "filing": "C",
        "period": "FY2026",
        "printedPage": 61,
        "line": "IEEPA tariff-recovery benefit in COGS",
        "note": "1"
      }
    },
    "tariffReceivableFY2026": {
      "value": 0.684,
      "unit": "USD billions",
      "status": "reported",
      "source": {
        "filing": "C",
        "period": "FY2026",
        "printedPage": 61,
        "line": "Outstanding IEEPA tariff receivable included in AR",
        "note": "1"
      }
    }
  },
  "methodology": [
    "Dollar amounts are USD billions at original million-dollar precision. Annual periods end May 31. FY2027 Q1 ends August 31, 2026.",
    "FY2026 receivables exclude the separately disclosed $0.684B tariff receivable. No tariff refund is added to forward scenario cash. Subsequent receipt is described in the latest quarter.",
    "Adjusted receivable days are an approved proxy: total revenue denominator, with possible unquantified non-trade receivables. Strict trade versions stay outside the main UI.",
    "Total revenue includes direct-to-consumer transactions. Adjusted receivable days do not establish wholesale payment terms or true credit-sales DSO.",
    "FY2022 total D&A remains VERIFY: $0.717B depreciation and $0.123B combined amortization/impairment/other cannot be combined as pure D&A. FY2022 forward scenarios are disabled.",
    "Nike-defined EBIT includes other income/expense. Scenario operating profit is revenue minus COGS minus SG&A and is labeled differently.",
    "Interest coverage is omitted. Net interest expense/(income) is signed: positive is expense, negative is income. Cash interest paid is supplemental only.",
    "FY2025 original notes payable $0.005B plus accruals $5.911B reconcile to $5.916B comparative accruals in FY2026. Exact reclassification is not specified. Do not double-count.",
    "FY2026 and FY2027 Q1 separately presented notes payable are set to zero by user-approved presentation interpretation. Revolver and CP zeros are independently explicit on printed p.34 of the Q1 filing.",
    "Net debt uses carrying debt, including current debt and notes payable. Principal maturities use contractual amounts. Leases are separate and excluded from net debt.",
    "Undrawn facilities are conditional capacity, not cash. Optional commitment increases and commercial-paper capacity are not added to liquidity. Expiry is applied; renewals are hypothetical.",
    "Dashboard days use ending balances and reported COGS. Simulator DIO/DPO are rebased to selected baseline COGS, so normalization alone creates no NWC movement.",
    "Latest-quarter DIO/DPO use TTM COGS; quarter flow metrics remain labeled quarter-only. The quarter is excluded from annual charts.",
    "Historical FCF is CFO less cash capex. Forward FCF is a simplified proxy, not reported CFO and not a valuation estimate. No historical FCF calibration plug is used.",
    "Historical combined asset/liability cash effects contain tax, lease and noncurrent items. They are not pure trade NWC; standalone AP/accrual cash movements are not disclosed.",
    "Normalized FY2026 adds $0.986B to reported COGS. This removes only the identified tariff-recovery benefit; it is not a fully normalized earnings assessment.",
    "The debt ladder is dated to its annual filing. No separately refreshed FY2027 Q1 bond-by-bond ladder was established.",
    "Designated filing presentations are preserved. Immaterial reclassifications are disclosed; the original FY2025 balance-sheet split is retained.",
    "Calculate at full precision and round only for display. Headline $B and percentages show one decimal; expanded audit details show three-decimal dollars.",
    "Missing facts remain null with VERIFY status, never zero. Approved receivables proxies and presentation-based debt zeros retain distinct provenance.",
    "Scenario demand creation scales with revenue. Overhead is fixed by default; overhead flex is the share that scales with revenue. D&A stays fixed. This is an operating-leverage assumption, not a claim about Nike cost contracts. Other income is not projected; no immediate loss tax benefit.",
    "Base-year net interest expense/(income) is held flat and tax-effected at the scenario rate. Interest income is not recalculated for cash changes, and taxes on net interest are simplified.",
    "Growth/cost NWC changes and efficiency-lever changes are separate. Lower inventory does not automatically cause markdowns; presets explicitly pair assumptions.",
    "Non-modeled assets and liabilities, including remaining non-trade receivables, are held constant. Projected current/quick ratios are partial pro forma measures, not a full balanced forecast.",
    "Cash plus short-term investments are modeled as one liquid-asset pool. Negative signed resources mean an unfunded requirement, not a negative cash asset. No borrowing is automatic. Optional bond refinancing replaces maturing principal as noncurrent debt; net interest stays at the base-year amount and rate changes are not modeled.",
    "Before/after-distribution runway uses starting liquid assets only and annualized scenario net cash use including scheduled debt principal. It excludes undrawn facilities and is coverage, not an exhaustion date. One-year debt service is not assumed to repeat as an actual maturity forecast.",
    "Risk scores are mechanical historical-stretch indicators, not probability estimates. Normalized scenario days have a different COGS denominator from reported historical days; compare with caution.",
    "All presets use normalized mode by default; the baseline switch is independent and applying a preset preserves the selected baseline. Preset sizes are hypothetical, not Nike guidance.",
    "Scenarios omit SBC addbacks, other noncash items, deferred tax, FX, reserve timing, interest repricing and other unmodeled cash items. They do not reproduce GAAP CFO.",
    "Illustrative model on public data; not investment advice, Nike guidance, a recommendation, audit assurance, or a Nike client engagement."
  ]
};

const freezeData = value => {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.values(value).forEach(freezeData);
    Object.freeze(value);
  }
};
freezeData(DATA);
