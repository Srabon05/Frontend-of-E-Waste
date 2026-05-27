
import React from 'react'
import Sidebar from './Components/Sidebar'
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard'
import AdminApprovals from './Components/Admin/AdminApproval/AdminApprovals'

const App = () => {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <Sidebar />
      <div className='flex-1 min-w-0'>
        <AdminApprovals />
      </div>
    </div>
  )
}

export default App