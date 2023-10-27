import React from "react";
import Dashboard from "../../../components/Franchise/FranchiseMain/Dashboard/Dashboard";
import NewOrders from "../../../components/Franchise/FranchiseMain/Dashboard/NewOrders";

function FranchiseDashboard() {
  return (
    <div className="flex flex-col gap-[25px]">
      <Dashboard />
      <NewOrders />
    </div>
  );
}

export default FranchiseDashboard;
