import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaMoneyCheck } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

function Dashboard() {
  const data = [
    {
      title: "Sale",
      amount: <span className="text-[#459279]">4351.2</span>,
      icon: (
        <div className="text-[80px] text-[#126f5c]">
          <FaRegMoneyBillAlt />
        </div>
      ),
      bg: "white",
    },
    {
      title: <span className="text-[#0f5d4d]">Total credit</span>,
      amount: <span className="text-white">471</span>,
      icon: (
        <div className="text-[80px] text-[#126f5c]">
          <FaMoneyCheck />
        </div>
      ),
      bg: "#2adcb7",
    },
    {
      title: <span className="text-[#1fbe9d]">Total sale</span>,
      amount: <span className="text-white">3880.2</span>,
      icon: (
        <div className="text-[80px] text-[#1fbe9d]">
          <FaRegMoneyBillAlt />
        </div>
      ),
      bg: "#0f5d4d",
    },
  ];
  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex gap-[10px] items-center text-[#2ad5b1] bg-white shadow-lg px-[15px] py-[10px] text-[13px] mob:text-[15px] font-poppins">
        <i>
          <BsGrid3X3GapFill />
        </i>
        <span className="text-[#3d8879]">Pending Orders</span>
        <i>
          <AiOutlineRight />
        </i>
        <span className="text-[#3d8879]">New Orders</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] px-[10px] sm:px-[15px]">
        {data.map((datas) => (
          <div
            className="flex items-center justify-between px-[20px] py-[10px] rounded-md shadow-lg"
            style={{ backgroundColor: datas.bg }}
          >
            <i>{datas.icon}</i>
            <div className="flex flex-col gap-[5px] text-right ">
              <span className="font-poppins">{datas.title}</span>
              <span className="text-[24px] font-mont font-bold">
                {datas.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
