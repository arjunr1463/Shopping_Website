import React from "react";
//import { AiOutlineRight } from "react-icons/ai";

function DashBoard() {
  const data = [
    {
      Total: 4351,
      name: "Total sale",
      link: "",
    },
    {
      Total: 0,
      name: "Total sale of the year",
      link: "",
    },
    {
      Total: 0,
      name: "Total sale of the month",
      link: "",
    },
    {
      Total: 0,
      name: "Total sale of the day",
      link: "",
    },
  ];
  return (
    <div className=" flex flex-col gap-[20px] w-full h-full">
      <div className="bg-[#e9ecef] py-[10px] px-[10px] text-[15px] font-mont font-semibold flex flex-row gap-[10px]">
        <span className="text-[#577eac]">Dashboard </span>
        <span className="text-gray-500">/ My Dashboard</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {data.map((datas) => (
          <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <div className="bg-gradient-to-r from-slate-500 to-slate-800 text-white text-lg font-mont font-bold px-4 py-3">
              {datas.name}
            </div>
            <div className="flex flex-col justify-center items-center bg-gradient-to-tr from-blue-400 via-gray-700 to-gray-900 px-6 py-8">
              <span className="text-white text-5xl font-bold mb-4">
                {datas.Total}
              </span>
              <button className="bg-white text-gray-800 rounded-full py-2 px-4 hover:bg-gray-200 focus:outline-none font-open">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
