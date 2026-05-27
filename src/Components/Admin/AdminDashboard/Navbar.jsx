import React from 'react'
import {
  Bell
} from "lucide-react";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center fixed overflow-hidden h-20 bg-white w-[78%] shadow-lg p-5  overflow-x-hidden'>
        <div>
            <h1 className='text-2xl font-bold text-blue-800'>Dashboard</h1>
            <p className='text-gray-600'>System Management & Control</p>
        </div>
        <div>
            <Bell />
        </div>
    </div>
  )
}

export default Navbar