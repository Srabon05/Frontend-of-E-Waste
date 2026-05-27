import React from 'react'
import { Search,Bell } from "lucide-react";
import SearchBar from '../../SearchBar';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center fixed overflow-hidden h-20 bg-white w-[81%] shadow-lg p-5  overflow-x-hidden'>
        <div>
            <h1 className='text-2xl font-bold text-blue-800'>Pending Approvals</h1>
            <p className='text-gray-600'>System Management & Control</p>
        </div>
        <div className='flex gap-3 items-center'>
            <SearchBar />
            <Bell />
        </div>
    </div>
  )
}

export default Navbar