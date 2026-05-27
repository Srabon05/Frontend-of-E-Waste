import React, { useState } from 'react'
import {
  Activity,
  BadgeCheck,
  User,
  Settings,
  Award,
  BarChart3,
  Megaphone,
  ChevronDown,
  UserCircle2,
} from "lucide-react";

const Dropdown = () => {

  const [active, setActive] = useState("dashboard");

  return (
     <div className="flex flex-col justify-between h-full px-4 py-6 text-gray-600">
      
      {/* Menu */}
      <div className="space-y-4">

        {/* Dashboard */}
        <div
          onClick={() => setActive("dashboard")}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition ${
            active === "dashboard"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <Activity size={22} />
          <h2 className="text-[18px] font-semibold">Dashboard</h2>
        </div>

        {/* Approvals */}
        <div
          onClick={() => setActive("approvals")}
          className={`flex items-center gap-4 px-4 py-4 rounded-2xl cursor-pointer transition ${
            active === "approvals"
              ? "bg-blue-500 text-white shadow-lg"
              : "hover:bg-gray-100"
          }`}
        >
          <BadgeCheck size={24} />
          <h2 className="text-[18px] font-semibold">Approvals</h2>
        </div>

        {/* Users */}
        <div
          onClick={() => setActive("users")}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition ${
            active === "users"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <User size={22} />
          <h2 className="text-[18px] font-semibold">Users</h2>
        </div>

        {/* Categories */}
        <div
          onClick={() => setActive("categories")}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition ${
            active === "categories"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <Settings size={22} />
          <h2 className="text-[18px] font-semibold">Categories</h2>
        </div>

        {/* Rewards */}
        <div
          onClick={() => setActive("rewards")}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition ${
            active === "rewards"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <Award size={22} />
          <h2 className="text-[18px] font-semibold">Rewards</h2>
        </div>

        {/* Reports */}
        <div
          onClick={() => setActive("reports")}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition ${
            active === "reports"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <BarChart3 size={22} />
          <h2 className="text-[18px] font-semibold">Reports</h2>
        </div>

        {/* Campaigns */}
        <div
          onClick={() => setActive("campaigns")}
          className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition ${
            active === "campaigns"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <Megaphone size={22} />
          <h2 className="text-[18px] font-semibold">Campaigns</h2>
        </div>
      </div>

      {/* Bottom Profile */}
      <div className="mt-8 border-t pt-5">
        <div className="flex items-center justify-between bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-2xl px-4 py-4 shadow-lg cursor-pointer">

          <div className="flex items-center gap-3">
            
            <div className="bg-white/20 p-3 rounded-full">
              <User size={28} />
            </div>

            <div>
              <h2 className="font-semibold text-[17px]">
                System Admin
              </h2>

              <p className="text-sm text-gray-200">
                admin@ewaste.bd
              </p>
            </div>
          </div>

          <ChevronDown size={22} />
        </div>
      </div>

    </div>
  );
}

export default Dropdown