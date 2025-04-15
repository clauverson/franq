import { ITax } from '../../types/finances'
import moment from 'moment'

interface Props {
  readonly data: ITax[]
}

export function TaxesCard(props: Props) {
  const [firstTax] = props.data
  const { date, cdi, selic } = firstTax

  return (
    <section className=" p-4">
      <h2 className="card-title mb-10">Taxas</h2>

      <div className="grid text-center">
        <div className="p-4">
          <p>CDI</p>
          <p className="text-2xl font-semibold">{cdi}%</p>
        </div>

        <div className="p-4">
          <p>SELIC</p>
          <p className="text-2xl font-semibold">{selic}%</p>
        </div>
      </div>

      <p className="text-sm text-center">{moment(date).format('DD/MM/YYYY')}</p>
    </section>
  )
}
