import React from "react";
import Rolename from "./Rolename";
import Dropdown from "./Dropdown";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-70 bg-white shadow-lg flex flex-col">
      <Rolename />
      <Dropdown />
      
    </div>
  );
};

export default Sidebar