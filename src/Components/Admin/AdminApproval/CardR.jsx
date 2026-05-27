import React from 'react'
import {
 Building2,
  Clock,
  Check,
  X
} from 'lucide-react'

const CardU = (props) => {
  return (
    <div className='bg-white w-90 h-50 rounded-2xl p-6 shadow-lg flex flex-col justify-between text-white'>

      <div className='flex items-start justify-between'>
        
        <div className='flex gap-3 items-center'>
          <div className='bg-purple-800 p-4 rounded-full'>
            <Building2 size={20} />
          </div>

          <div>
            <h1 className='font-semibold text-lg text-black'>{props.name}</h1>
            <p className='text-sm text-gray-500'>
              {props.email}
            </p>
          </div>
        </div>

        <div className='bg-yellow-300 text-black text-xs px-3 py-1 rounded-full'>
          Pending
        </div>
      </div>

      <div className='flex items-center gap-2 text-sm'>
        <Clock size={16} color='gray'/>
        <p className='text-gray-500'>Registered: {props.date}</p>
      </div>

      {/* Bottom Buttons */}
      <div className='flex gap-3'>
        
        <button className='flex-1 bg-green-500 hover:bg-green-600 transition p-2 rounded-xl flex items-center justify-center gap-2'>
          <Check size={16} />
          Approve
        </button>

        <button className='flex-1 bg-red-500 hover:bg-red-600 transition p-2 rounded-xl flex items-center justify-center gap-2'>
          <X size={16} />
          Reject
        </button>

      </div>
    </div>
  )
}

export default CardU