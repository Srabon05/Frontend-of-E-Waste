import React, { useState } from 'react'
import {
  User,
  Building2,
  Truck
} from 'lucide-react'

const RoleSelector = () => {

  const [active, setActive] = useState('User')

  return (
    <div className='bg-white p-2 rounded-xl shadow-md flex gap-2 w-[81%] justify-around'>

      <button
        onClick={() => setActive('User')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition
        ${active === 'User'
          ? 'bg-blue-500 text-white'
          : 'hover:bg-gray-100 text-black'
        }`}
      >
        <User size={18} />
        User
      </button>

      <button
        onClick={() => setActive('Recycle')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition
        ${active === 'Recycle'
          ? 'bg-blue-500 text-white'
          : 'hover:bg-gray-100 text-black'
        }`}
      >
        <Building2 size={18} />
        Re-cycle Center
      </button>

      <button
        onClick={() => setActive('Collector')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition
        ${active === 'Collector'
          ? 'bg-blue-500 text-white'
          : 'hover:bg-gray-100 text-black'
        }`}
      >
        <Truck size={18} />
        Collector
      </button>

    </div>
  )
}

export default RoleSelector