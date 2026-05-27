import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Oct', collections: 45 },
  { month: 'Nov', collections: 52 },
  { month: 'Dec', collections: 48 },
  { month: 'Jan', collections: 60 },
  { month: 'Feb', collections: 55 },
  { month: 'Mar', collections: 68 },
]

const Graph = () => {
  return (
    <div className='bg-white rounded-3xl shadow-lg p-7 w-full'>
      <h1 className='text-3xl font-bold mb-8'>
        Monthly Collections
      </h1>

      <div className='w-full h-[350px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />

            <XAxis dataKey='month' />

            <YAxis />

            <Tooltip />

            <Line
              type='monotone'
              dataKey='collections'
              stroke='#3B82F6'
              strokeWidth={4}
              dot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Graph