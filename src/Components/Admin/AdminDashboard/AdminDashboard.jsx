import React from 'react'
import AdminDashboardContent from './AdminDashboardContent'
import{
    FileText,
     Users,
     Activity,
     Building2,
     Megaphone,
     ChartColumn
}from 'lucide-react'

const AdminDashboard = (props) => {
     const activityCard=[
    {
        tag1:<FileText color='blue' size='26px' />,
        tag2:"+12%",
        color:"#DBEAFE",
        number:"6",
        statuss:"Total Collection"
    },
    {
        tag1:<Users color='orange' size='26px'/>,
        tag2:"New",
        color:"FFA500",
        number:"3",
        statuss:"Pending Approvals"
    },
    {
        tag1:<Building2 color='green' size='26px'/>,
        tag2:"+3",
        color:"#D1FAE5",
        number:"3",
        statuss:"Active Centers"
    },
    {
        tag1:<Activity color='purple' size='26px'/>,
        tag2:"+18%",
        color:"#EDE9FE",
        number:"820 kg",
        statuss:"Total E-waste"
    }
  ]
  const menuCard=[
    {
      color:"#EF4444",
      head:"Action Required",
      note:"Review Approvals",
      icon:<Users size='30px' />  
    },
    {
      color:"#8B5CF6",
      head:"Broadcast",
      note:"Create Campaign",
      icon:<Megaphone size='30px'/>  
    },
    {
      color: "#2b7fff",
      head:"Analytics",
      note:"View Reports",
      icon:<ChartColumn />
    }
  ]
  const rCollection = [
  {
    color: "#2563EB",
    bgColor: "#DBEAFE",
    serial: "CR001",
    title: "Computer & Laptop",
    status:"ASSIGNED"
  },
  {
    color: "#16A34A",
    bgColor: "#DCFCE7",
    serial: "CR002",
    title: "Mobile",
    status:"PENDING"
  },
  {
    color: "#F59E0B",
    bgColor: "#FEF3C7",
    serial: "CR003",
    title: "Bettery",
    status:"COMPLETED"
  },
  {
    color: "#EF4444",
    bgColor: "#FEE2E2",
    serial: "CR004",
    title: "Fridge",
    status:"IN_PROGRESS"
  },
  {
    color: "#8B5CF6",
    bgColor: "#EDE9FE",
    serial: "CR005",
    title: "Fan",
    status:"PENDI"
  },
];
  return (
    <div className="ml-70 w-full  flex-1 overflow-x-hidden ">
        <AdminDashboardContent  activityCard={activityCard} menuCard={menuCard} rCollection={rCollection}/>
    </div>
  )
}

export default AdminDashboard