import React from 'react'
import Graph from './Graph'

import PieChartCard from './PieChartCard'

const AdminDashboard4 = () => {
  return (
    <div className='flex gap-5 p-5 rounded-xl bg-transparent shadow-lg'>
        <div>
            <Graph />
        </div>
        <div>
            <PieChartCard />
        </div>
    </div>
  )
}

export default AdminDashboard4