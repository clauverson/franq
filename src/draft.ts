import { IFinanceStatus } from './types/finances'

export const draft: IFinanceStatus = {
  by: 'default',
  valid_key: true,
  results: {
    currencies: {
      source: 'BRL',
      USD: {
        name: 'Dollar',
        buy: 5.8734,
        sell: 5.872,
        variation: 0.201,
      },
      EUR: {
        name: 'Euro',
        buy: 6.6615,
        sell: 6.6622,
        variation: 0.021,
      },
      GBP: {
        name: 'Pound Sterling',
        buy: 7.6746,
        sell: null,
        variation: 0.021,
      },
      ARS: {
        name: 'Argentine Peso',
        buy: 0.0052,
        sell: null,
        variation: 0.0,
      },
      CAD: {
        name: 'Canadian Dollar',
        buy: 4.2287,
        sell: null,
        variation: 0.021,
      },
      AUD: {
        name: 'Australian Dollar',
        buy: 3.6862,
        sell: null,
        variation: 0.022,
      },
      JPY: {
        name: 'Japanese Yen',
        buy: 0.0407,
        sell: null,
        variation: 0.0,
      },
      CNY: {
        name: 'Renminbi',
        buy: 0.8043,
        sell: null,
        variation: 0.0,
      },
      BTC: {
        name: 'Bitcoin',
        buy: 522665.709,
        sell: 522665.709,
        variation: 0.029,
      },
    },
    stocks: {
      IBOVESPA: {
        name: 'BM&F BOVESPA',
        location: 'Sao Paulo, Brazil',
        points: 127682.4,
        variation: 1.05,
      },
      IFIX: {
        name: 'Índice de Fundos de Investimentos Imobiliários B3',
        location: 'Sao Paulo, Brazil',
        points: 3257.67,
        variation: 0.34,
      },
      NASDAQ: {
        name: 'NASDAQ Stock Market',
        location: 'New York City, United States',
        points: 16724.46,
        variation: 2.06,
      },
      DOWJONES: {
        name: 'Dow Jones Industrial Average',
        location: 'New York City, United States',
        points: 40212.71,
        variation: 1.56,
      },
      CAC: {
        name: 'CAC 40',
        location: 'Paris, French',
        points: 7104.8,
        variation: -0.3,
      },
      NIKKEI: {
        name: 'Nikkei 225',
        location: 'Tokyo, Japan',
        points: 33585.58,
        variation: -2.96,
      },
    },
    available_sources: ['BRL'],
    bitcoin: {
      blockchain_info: {
        name: 'Blockchain.info',
        format: ['USD', 'en_US'],
        last: 84020.97,
        buy: 84020.97,
        sell: 84020.97,
        variation: 0.112,
      },
      bitstamp: {
        name: 'BitStamp',
        format: ['USD', 'en_US'],
        last: 83967.0,
        buy: 83997.0,
        sell: 83990.0,
        variation: 0.099,
      },
      foxbit: {
        name: 'FoxBit',
        format: ['BRL', 'pt_BR'],
        last: 495991.0,
        variation: 0.673,
      },
      mercadobitcoin: {
        name: 'Mercado Bitcoin',
        format: ['BRL', 'pt_BR'],
        last: 495967.0,
        buy: 495891.0,
        sell: 495993.0,
        variation: 0.596,
      },
    },
    taxes: [
      {
        date: '2025-04-10',
        cdi: 14.25,
        selic: 14.25,
        daily_factor: 1.00052531,
        selic_daily: 14.15,
        cdi_daily: 14.15,
      },
    ],
  },
  execution_time: 0.0,
  from_cache: true,
}
