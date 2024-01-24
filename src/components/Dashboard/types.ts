export type CurrencyType = {
  code: string;
  rate: string
  rate_float: number;
}

type BPI = {
  EUR: CurrencyType;
  GBP: CurrencyType;
  USD: CurrencyType;
}

export type CurrencyResponse = {
  bpi: BPI;
  chartName: string;
  time: {
    updated: string;
  }
}
