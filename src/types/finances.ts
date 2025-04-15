export interface IDefaultResponse<T> {
  data: {
    by: string
    valid_key: boolean
    execution_time: number
    from_cache: boolean
    results: T
  }
}

export type IQuotationsHistory = Record<string, IQuotationsHistoryDate>
export type IQuotationsHistoryDate = Record<string, IQuotationsHistoryStock>
export type IQuotationsHistoryStock = Record<string, number>

export interface IFinanceStatus {
  currencies: ICurrencies
  stocks: IStocks
  bitcoin: IBitcoin
  taxes: ITax[]
  available_sources: string[]
}

export type IStocks = Record<string, Stock>
interface Stock {
  name: string
  location: string
  points: number
  variation: number
}

export type ICurrencies = Record<string, Currency | string>
interface Currency {
  name: string
  buy: number
  sell: number | null
  variation: number
}

export type IBitcoin = Record<string, Crypto>
interface Crypto {
  name: string
  format: string[]
  last: number
  buy?: number
  sell?: number
  variation: number
}

export interface ITax {
  date: string
  cdi: number
  selic: number
  daily_factor: number
  selic_daily: number
  cdi_daily: number
}
