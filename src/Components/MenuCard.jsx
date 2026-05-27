import React from 'react'
import {
Users
}from 'lucide-react'

const MenuCard = (props) => {
  
  return (
    <button style={{background:props.color}} className={"text-white text-left  p-5 flex justify-between items-center h-30 w-80 rounded-2xl shadow-lg hover:shadow-xl transition"}>
        
            <div>
                <p className='font-semibold'>{props.head}</p>
                <h2 className='font-bold text-xl'>{props.note}</h2>
            </div>
            <div >
              {props.icon}
                {/* <Users size="30px" />       */}
            </div>
       
    </button>
  )
}

export default MenuCard