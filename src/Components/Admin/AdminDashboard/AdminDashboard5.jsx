import React from 'react'
import CollectionCard from './CollectionCard'

const AdminDashboard5 = (props) => {
  return (
    <div className='flex flex-col mr-70  bg-white p-6 shadow-lg rounded-2xl gap-5 m-5'>
        <h1 className='text-3xl font-bold text-black'>Recent Collections</h1>
         {props.rCollection.map(function (elem,idx) {
        return <CollectionCard key={idx} bgColor={elem.bgColor} color={elem.color} serial={elem.serial} title={elem.title} status={elem.status}/>
      })}
  
    </div>
  )
}

export default AdminDashboard5