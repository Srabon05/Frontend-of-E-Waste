import React from 'react'
import {
    FileText
} from "lucide-react"

const CollectionCard = (props) => {
  return (
    <div className=" flex justify-between items-center p-3 gap-3 bg-gray-100 rounded-2xl">
        <div className='flex gap-3 items-center'>
            <div className='bg-blue-100 rounded-full p-3 w-10 h-10'>
            <FileText color='blue' size={16}/>
        </div>
        <div>
            <h1 className='text-xl font-semibold'>{props.serial}</h1>
            <p className='text-gray-600'>{props.title}</p>
        </div>
        </div>
        <div style={{background:props.bgColor}} className=' px-4 py-2 rounded-3xl'>
            <h2 style={{ color: props.color }}  className=' text-sm font-bold'>{props.status}</h2>
        </div>
    </div>
  )
}

export default CollectionCard