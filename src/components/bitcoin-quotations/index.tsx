import { twMerge } from 'tailwind-merge'
import { IBitcoin } from '../../types/finances'
import { formatCurrency } from '../../utils/formats'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface Props {
  readonly data: IBitcoin
}

export function BitcoinQuotations(props: Props) {
  const quotations = Object.entries(props.data)

  return (
    <section className="container mx-auto p-6 px-12 pr-20">
      <div className="grid grid-cols-4 gap-4 text-amber-950">
        {quotations.map(([key, value]) => (
          <div key={key}>
            <div className="flex items-center gap-1">
              <h4>{value.name}</h4>
              <small
                className={twMerge(
                  'text-green-800 flex items-center text-sm font-bold',
                  value.variation < 0 && 'text-red-700'
                )}
              >
                {value.variation > 0 && <ArrowUp size={18} />}
                {value.variation < 0 && <ArrowDown size={18} />}
                {value.variation + '%'}
              </small>
            </div>

            <p className="font-bold text-xl">
              {formatCurrency(value.last, value.format[1], value.format[0])}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
