import React, { useState } from 'react'

const Dashboard3 = () => {

  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className='flex justify-between items-center p-5'>
      
      <h1 className="p-5 font-bold text-2xl">
        My Collection Requests
      </h1>

      <div className='flex items-center gap-3'>

        {/* All */}
        <button
          onClick={() => setActiveTab("all")}
          className={`px-5 py-2 rounded-xl transition font-medium cursor-pointer ${
            activeTab === "all"
              ? "bg-gray-100"
              : " hover:bg-gray-100"
          }`}
        >
          All (5)
        </button>

        {/* Active */}
        <button
          onClick={() => setActiveTab("active")}
          className={`px-5 py-2 rounded-xl transition font-medium cursor-pointer ${
            activeTab === "active"
              ? "bg-gray-100"
              : " hover:bg-gray-100"
          }`}
        >
          Active (2)
        </button>

        {/* Completed */}
        <button
          onClick={() => setActiveTab("completed")}
          className={`px-5 py-2 rounded-xl transition font-medium cursor-pointer ${
            activeTab === "completed"
              ? "bg-gray-100"
              : " hover:bg-gray-100"
          }`}
        >
          Completed (0)
        </button>

      </div>
    </div>
  )
}

export default Dashboard3