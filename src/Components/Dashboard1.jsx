import React from 'react'
import ActivityCard from './ActivityCard'

const Dashboard1 = (props) => {
  console.log(props);
  return (
    
      <div className=' flex flex-wrap mr-70 p-5 gap-5'>
       {props.activityCard.map(function(elem,idx){

        return <ActivityCard key={idx} color={elem.color} number={elem.number} statuss={elem.statuss} tag1={elem.tag1 } tag2={elem.tag2 }/>
       })}
    </div>
   
    
  )
}

export default Dashboard1