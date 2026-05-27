import React from 'react'
import {
  CircleUser,
  Settings,
  User,
  CircleQuestionMark,
  LogOut
} from "lucide-react";

const Logout = () => {
  return (
<div className="w-70 rounded-xl overflow-hidden  bg-white shadow-lg">
  
  {/* Header */}
  <div className="flex items-center justify-between bg-blue-500 text-white px-4 py-4">
    <div className="flex items-center gap-3">
      <div className="bg-white/20 p-3 rounded-full">
        <User size={28} />
      </div>
      <div>
        <h2 className="font-semibold text-[17px]">System Admin</h2>
        <p className="text-sm text-gray-200">admin@ewaste.bd</p>
      </div>
    </div>
  </div>

  {/* Menu */}
  <div className="space-y-2 p-3">
    
    <div className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-gray-100 transition">
      <div className="bg-blue-100 rounded-xl p-2.5">
        <CircleUser size={22} color='blue' />
      </div>
      <div>
        <h2 className="text-[16px] font-semibold">View Profile</h2>
        <p className="text-sm text-gray-500">Your account details</p>
      </div>
    </div>

    <div className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-gray-100 transition">
      <div className="bg-purple-100 rounded-xl p-2.5">
        <Settings size={22} color='purple' />
      </div>
      
      <div>
        <h2 className="text-[16px] font-semibold">Settings</h2>
        <p className="text-sm text-gray-500">Preference & config</p>
      </div>
    </div>

    <div className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer hover:bg-gray-100 transition">
      <div className="bg-green-100 rounded-xl p-2.5">
       <CircleQuestionMark size={22} color='green' />
      </div>
      
      <div>
        <h2 className="text-[16px] font-semibold">Help & Support</h2>
        <p className="text-sm text-gray-500">Get assistance</p>
      </div>
    </div>
<div className='border-t'></div>
    <div className="flex items-center gap-4 px-4 py-3 cursor-pointer rounded-xl hover:bg-gray-100 transition">
      <div className="bg-red-100 rounded-xl p-3">
       <LogOut size={22} color='red' />
      </div>
      
      <div className='text-red-600'>
        <h2 className="text-[16px] font-bold">Logout</h2>
        <p className="text-sm">Sign out of account</p>
      </div>
    </div>
    
  </div>
</div>
     
  )
}

export default Logout