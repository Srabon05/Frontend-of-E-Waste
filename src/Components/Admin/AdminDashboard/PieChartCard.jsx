import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const data = [
  { name: 'Computers', value: 35 },
  { name: 'Mobile', value: 25 },
  { name: 'TVs', value: 20 },
  { name: 'Appliances', value: 15 },
  { name: 'Other', value: 5 },
]

const COLORS = [
  '#10B981',
  '#3B82F6',
  '#8B5CF6',
  '#F59E0B',
  '#EF4444',
]

const PieChartCard = () => {
  return (
    <div className='bg-white rounded-3xl shadow-lg p-7 w-full'>
      <h1 className='text-3xl font-bold mb-8'>
        E-Waste by Category
      </h1>

      <div className='w-full h-[350px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              outerRadius={120}
              dataKey='value'
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PieChartCard