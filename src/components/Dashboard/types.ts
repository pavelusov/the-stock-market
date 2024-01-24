export type CurrencyType = {
  code: string;
  rate: string
  rate_float: number;
}
export type CurrencyResponse = {
  bpi: {
    EUR: CurrencyType;
    GBP: CurrencyType;
    USD: CurrencyType;
  };
  chartName: string;
  time: {
    updated: string;
  }
}
