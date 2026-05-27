import React from 'react'
import Dashboard1 from './Dashboard1'
import Dashboard2 from './Dashboard2'
import Dashboard3 from './UserDashboard3'
import Navbar from './Navbar'

const Dashboard = (props) => {
  console.log();
  return (
    <div className='flex flex-col w-full min-h-screen  bg-gray-100'>
        <Navbar />
        <div className='mt-28'>
          <Dashboard1 activityCard={props.activityCard}/>
          <Dashboard2  menuCard={props.menuCard} />
          <Dashboard3 />
        </div>
        
    </div>
  )
}

export default Dashboard