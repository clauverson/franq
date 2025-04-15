import { twMerge } from 'tailwind-merge'
import { ICurrencies } from '../../types/finances'
import { formatCurrency } from '../../utils/formats'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface Props {
  readonly data: ICurrencies
}

export function CurrenciesCard(props: Props) {
  delete props.data['BTC']
  const currencies = Object.entries(props.data)

  return (
    <section className=" py-4">
      <h2 className="card-title">Moedas</h2>

      <article>
        {currencies.map(
          ([key, value]) =>
            typeof value !== 'string' && (
              <div
                key={key}
                className={twMerge(
                  'border-t first:border-t-0 border-slate-100/10 py-2 px-10',
                  'hover:bg-slate-100/60 cursor-pointer',
                  'transition-all duration-300 ease-in-out'
                )}
              >
                <div className="grid grid-cols-[1fr_auto_5rem] gap-2 items-center">
                  <h4 className="font-semibold">{value.name}</h4>

                  <p className="font-bold">{formatCurrency(value.buy)}</p>
                  <p
                    className={twMerge(
                      'text-emerald-600 flex text-sm font-bold',
                      value.variation < 0 && 'text-red-400'
                    )}
                  >
                    {value.variation + '%'}
                    {value.variation > 0 && <ArrowUp size={18} />}
                    {value.variation < 0 && <ArrowDown size={18} />}
                  </p>
                </div>
              </div>
            )
        )}
      </article>
    </section>
  )
}
