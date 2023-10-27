import React from "react";
import { AiFillFileText } from "react-icons/ai";

function OtherSettings() {
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[15px]">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">State </span>
        </div>
        <div className="flex flex-col gap-[5px] w-full lg:w-1/2">
          <span className="font-poppins">State Name</span>
          <input
            type="text"
            className="outline-none border-[1px] h-[40px] rounded-sm px-[10px] font-poppins"
            placeholder="state"
          />
        </div>
        <div>
          <button className="flex justify-center font-mont font-bold items-center bg-[#fc5b62] text-white w-[100px] h-[30px] rounded-sm">
            Submit
          </button>
        </div>
      </div>{" "}
      <div className="flex flex-col gap-[15px]">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">District </span>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full ">
            <span className="font-poppins">Select state</span>
            <select className="border-[1px] px-[10px] py-[8px] outline-none font-poppins text-gray-500">
              <option value="">Select a State</option>
              <option>Kerala</option>
              <option>Tamilnadu</option>
            </select>
          </div>
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">District Name</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px] font-poppins"
              placeholder="district"
            />
          </div>
        </div>
        <div>
          <button className="flex justify-center font-mont font-bold items-center bg-[#fc5b62] text-white w-[100px] h-[30px] rounded-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtherSettings;
