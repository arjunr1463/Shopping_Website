import React from "react";
import Main from "../../components/DashBoard/DashBoard";
import PendingOrders from "../../components/DashBoard/PendingOrders";

function Dashboard() {
  return (
    <div className="px-[10px] pt-[10px] pb-[30px] flex flex-col gap-[30px] ">
      <Main />
      <PendingOrders/>
    </div>
  );
}

export default Dashboard;
