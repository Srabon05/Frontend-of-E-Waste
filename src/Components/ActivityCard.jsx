import React from 'react'


const ActivityCard = (props) => {
  return (
    <button className='bg-white h-50 w-67.5 rounded-xl flex flex-col justify-between text-black  p-5 shadow-lg text-left hover:shadow-xl transition'>
      <div className='flex w-full justify-between items-center'>
        <div style={{background:props.color}} className={'p-3  rounded-2xl'}>
           {props.tag1}
            {/* <Clock4 color='blue' size='26px' /> */}
        </div>
        <div style={{background:props.color}} className={'py-1 px-2  rounded-2xl'}>
            {props.tag2}
            {/* <TrendingUp color='blue' size='20px'/> */}
        </div>
      </div>
      <div >
        <h1 className='font-bold text-5xl pb-2 pl-1'>{props.number}</h1>
        <p className='pl-1 pb-3 text-gray-500 font-semibold'>{props.statuss}</p>
      </div>
    </button>
  )
}

export default ActivityCard