import axios from 'axios'
import {
  IDefaultResponse,
  IFinanceStatus,
  IQuotationsHistory,
} from '../types/finances'

function getFinanceStatus() {
  return axios.get<IDefaultResponse<IFinanceStatus>>('/finance-status')
}

function getLastMonthOfQuotations(stock: string) {
  return axios.get<IDefaultResponse<IQuotationsHistory>>('/last-month', {
    params: { stock },
  })
}

function getTickerList() {
  return axios.get<IDefaultResponse<string[]>>('/ticker-list')
}

export const QuotationsService = {
  getLastMonthOfQuotations,
  getTickerList,
  getFinanceStatus,
}
