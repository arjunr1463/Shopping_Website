import React from "react";
import { Outlet } from "react-router-dom";
import FranchiseNavbar from "../../components/NavBar/FranchiseNavbar";
import FranchiseSideBar from "../../components/SideBar/FranchiseSideBar";
import Logout from "../../components/Franchise/FranchiseMain/Dashboard/Logout";

function FranchiseLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <FranchiseNavbar />
      <div className="lg:hidden">
        <Logout />
      </div>
      <div className="hidden lg:flex w-full h-full ">
        <FranchiseSideBar />
        <div className="w-full h-full bg-[#ececec]  relative pb-[100px]">
          <Outlet />
        </div>
      </div>
      <div className="lg:hidden h-[95vh] bg-[#ececec] overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default FranchiseLayout;
