import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { IChartData } from '../../types/chart'

interface Props {
  readonly data: IChartData[]
}

export function Chart(props: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={['dataMin', 'dataMax']} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#148c42"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
