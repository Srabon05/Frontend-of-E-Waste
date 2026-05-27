import React from 'react' 
import Dashboard1 from '../../Dashboard1'
 import Dashboard2 from '../../Dashboard2'
  import Navbar from './Navbar'
   import AdminDashboard3 from './AdminDashboard3'
    import AdminDashboard5 from './AdminDashboard5'

const AdminDashboardContent = (props) => {
  return (
    <div className='flex flex-col w-screen min-h-screen  bg-gray-100'>
        <Navbar />
        <div className='mt-20 flex flex-col w-full min-h-screen gap-5 overflow-x-hidden'>
          <Dashboard1 activityCard={props.activityCard}/>
          <Dashboard2  menuCard={props.menuCard} />
          <AdminDashboard3 />
          <AdminDashboard5 rCollection={props.rCollection} />
          
        </div>
        
    </div>
  )
}

export default  AdminDashboardContent