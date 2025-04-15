import { IStocks } from '../../types/finances'
import { formatPoints } from '../../utils/formats'
import { twMerge } from 'tailwind-merge'
import { ArrowDown, ArrowUp } from 'lucide-react'

interface Props {
  readonly data: IStocks
}

export function StocksCard(props: Props) {
  const stocks = Object.entries(props.data)

  return (
    <section className=" py-4">
      <h2 className="card-title">Índices</h2>

      <article>
        {stocks.map(([key, value]) => (
          <div
            key={key}
            className={twMerge(
              'border-t first:border-t-0 border-slate-100/10 py-2 px-10',
              'hover:bg-slate-100/60 cursor-pointer',
              'transition-all duration-300 ease-in-out'
            )}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{value.name}</h4>
              <p className="font-bold">{`${formatPoints(value.points)} pts`}</p>
            </div>

            <div className="flex justify-between items-center text-sm">
              <p className="text-xs text-slate-400">{value.location}</p>
              <p
                className={twMerge(
                  'text-emerald-600 flex font-bold',
                  value.variation < 0 && 'text-rose-400'
                )}
              >
                {value.variation + '%'}
                {value.variation > 0 && <ArrowUp size={18} />}
                {value.variation < 0 && <ArrowDown size={18} />}
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}
