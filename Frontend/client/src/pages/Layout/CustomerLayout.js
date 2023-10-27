import React from "react";
import { Outlet } from "react-router-dom";
import CustomerNavbar from "../Customer/CustomerDashbord/CustomerNavbar";
import CustomerFooter from "../Customer/CustomerDashbord/CustomerFooter";
import CustomerSidebar from "../Customer/CustomerDashbord/CustomerSidebar";

function CustomerLayout() {
  return (
    <div>
      <CustomerNavbar />
      <div className="hidden lg:flex ">
        <CustomerSidebar />
        <div className="w-full p-5 h-[95vh] bg-[#f6f8fa] pb-[100px] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
      <div className="lg:hidden h-[95vh] bg-[#f6f8fa] overflow-y-scroll">
        <Outlet />
      </div>
      <CustomerFooter />
    </div>
  );
}

export default CustomerLayout;
