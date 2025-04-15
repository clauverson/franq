import { ChartNoAxesCombined } from 'lucide-react'
import bitcoin_logo from '../../../assets/images/bitcoin.svg'
import { BitcoinQuotations } from '../../../components/bitcoin-quotations'
import { CurrenciesCard } from '../../../components/currencies-card'
import { StocksCard } from '../../../components/stocks-card'
import { TaxesCard } from '../../../components/taxes-card'
import { twMerge } from 'tailwind-merge'
import { useQuery } from '@tanstack/react-query'
import { QuotationsService } from '../../../services/quotations'
import { Chart } from '../../../components/chart'
import moment from 'moment'
import { useState } from 'react'

export function HomePage() {
  const [search, setSearch] = useState('')
  const [selectedSymbol, setSelectedSymbol] = useState<string>()

  const { data: financeStatus } = useQuery({
    queryKey: ['finance-status'],
    queryFn: () => QuotationsService.getFinanceStatus(),
  })

  const { data: symbols } = useQuery({
    queryKey: ['symbols'],
    queryFn: () => QuotationsService.getTickerList(),
  })

  const { data: quotations } = useQuery({
    queryKey: ['quotations', selectedSymbol],
    queryFn: () =>
      QuotationsService.getLastMonthOfQuotations(selectedSymbol ?? 'ITSA4'),
  })

  const symbolsFiltered = symbols?.data.data.results.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  )

  const result =
    quotations?.data.data.results &&
    Object.entries(quotations.data.data.results)
      .map(([date, stocks]) => {
        const stockData = Object.values(stocks)[0]
        const prices = Object.values(stockData)
        const price = prices[prices.length - 1]
        return { date: moment(date).format('DD/MMM'), price }
      })
      .reverse()

  function searchQuotation(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setSearch(value)

    setTimeout(() => {
      setSearch(value)
    }, 500)
  }

  return (
    <section className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-medium ml-4">Cotações</h2>

        <a
          className={twMerge(
            'flex gap-2 items-center font-semibold text-sm z-10',
            'bg-teal-600 p-2 rounded-md px-6 text-white',
            'cursor-pointer hover:bg-teal-700'
          )}
          href="#stocks"
        >
          <ChartNoAxesCombined />
          Ver gráficos
        </a>
      </header>

      <div className="grid grid-cols-[2fr_1.5fr_auto] gap-4 mb-8">
        <div className="card glass">
          {financeStatus && (
            <StocksCard data={financeStatus?.data.data.results.stocks} />
          )}
        </div>

        <div className="card glass">
          {financeStatus && (
            <CurrenciesCard
              data={financeStatus?.data.data.results.currencies}
            />
          )}
        </div>

        <div className="card glass relative overflow-clip">
          <div className="bg-pattern" />
          {financeStatus && (
            <TaxesCard data={financeStatus?.data.data.results.taxes} />
          )}
        </div>
      </div>

      <div className="card bg-amber-400 relative mb-10 flex items-center border-none">
        {financeStatus && (
          <BitcoinQuotations data={financeStatus?.data.data.results.bitcoin} />
        )}

        <img
          src={bitcoin_logo}
          alt="bitcoin logo"
          className="absolute -right-4 -top-4"
          draggable="false"
        />
      </div>

      <section className="container mx-auto p-4" id="stocks">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-medium ml-4">Ações</h2>
        </header>

        <div className="grid grid-cols-[2fr_1fr] gap-4">
          <article className="card glass p-10">
            <h2 className="text-center font-bold mb-4">{selectedSymbol}</h2>
            <div className="h-90">
              {selectedSymbol && result && <Chart data={result} />}
            </div>

            {!selectedSymbol && (
              <p className="text-center text-slate-400">
                Selecione uma ação para ver o gráfico
              </p>
            )}
          </article>

          <aside className="card glass h-[30rem] overflow-y-auto">
            <header className="sticky top-0 bg-slate-100 py-4 px-10">
              <input
                type="text"
                className={twMerge(
                  'bg-slate-200 p-2 rounded outline-0 px-4 w-full',
                  'focus:ring-2 focus:ring-teal-600'
                )}
                placeholder="Buscar cotação"
                onChange={searchQuotation}
              />
            </header>

            <ul className="px-10">
              {symbolsFiltered?.map((item) => (
                <li
                  key={item}
                  className={twMerge(
                    'py-2 hover:text-green-600 cursor-pointer',
                    'transition-all duration-300 ease-in-out'
                  )}
                  onClick={() => {
                    setSelectedSymbol(item)
                    setSearch('')
                  }}
                >
                  <p className="font-medium">{item}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </section>
  )
}
