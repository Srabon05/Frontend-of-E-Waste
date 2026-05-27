import React from 'react'
import MenuCard from './MenuCard'

const Dashboard2 = (props) => {
  console.log(props);
  return (
    <div className=' flex flex-wrap items-center shrink-0 overflow-x-hidden mr-70 gap-5 p-5  '>
      {props.menuCard.map(function (elem,idx) {
        return <MenuCard key={idx} note={elem.note} color={elem.color} icon={elem.icon} head={elem.head}/>
      })}
        
    </div>
  )
}

export default Dashboard2