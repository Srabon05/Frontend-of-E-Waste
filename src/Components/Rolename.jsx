import React from 'react'
import { Recycle } from 'lucide-react'

const Rolename = () => {
  return (
    <div className="h-50 w-full bg-blue-500 text-white  gap-3 px-3">
        
            <Recycle strokeWidth={2} size={46}/> 
       
        <div >
            <h1 className="text-m font-semibold">Admin Dashboard</h1>
            <p>ADMIN</p>
        </div>

    </div>
  )
}

export default Rolename