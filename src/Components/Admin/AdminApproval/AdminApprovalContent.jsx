import React from 'react'
import Navbar from './Navbar'
import Head from './Head'
import Userboard from './Userboard'
const AdminApprovalContent = () => {
  const users = [
  {
    name: "Jahangir Alam",
    email: "jahangir.alam@gmail.com",
    date: "3/20/2026"
  },
  {
    name: "Rahim Uddin",
    email: "rahim@gmail.com",
    date: "4/10/2026"
  },
  {
    name: "Karim Hasan",
    email: "karim@gmail.com",
    date: "5/15/2026"
  }
]

const collectors = [
  {
    name: "Sabbir Hossain",
    email: "sabbir@gmail.com",
    date: "3/22/2026",
    vehicleModel: "Van"
  },
  {
    name: "Tanvir Ahmed",
    email: "tanvir@gmail.com",
    date: "4/12/2026",
    vehicleModel: "Truck"
  },
  {
    name: "Nayeem Islam",
    email: "nayeem@gmail.com",
    date: "5/18/2026",
    vehicleModel: "Bike"
  }
]

const recyclers = [
  {
    name: "Green Earth Ltd",
    email: "greenearth@gmail.com",
    date: "3/25/2026"
  },
  {
    name: "Eco Recycling",
    email: "eco@gmail.com",
    date: "4/15/2026"
  },
  {
    name: "Clean Planet",
    email: "cleanplanet@gmail.com",
    date: "5/20/2026"
  }
]
  return (
        <div className='flex flex-col w-screen min-h-screen  bg-gray-100'>
        <Navbar />
        <div className='mt-20 flex flex-col w-full min-h-screen gap-5 overflow-x-hidden'>
             <Head />
             <Userboard />
        </div>
    </div>
    
  )
}

export default AdminApprovalContent