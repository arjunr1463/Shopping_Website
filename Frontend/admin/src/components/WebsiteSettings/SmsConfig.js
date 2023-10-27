import React from "react";
import { AiFillFileText } from "react-icons/ai";

function SmsConfig() {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center gap-[10px] border-b-[1px]">
        <i className="text-gray-300 text-[25px]">
          <AiFillFileText />
        </i>
        <span className="font-poppins text-[22px]">SMS Configuration</span>
      </div>
      <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
        <div className="flex flex-col gap-[5px] w-full">
          <span className="font-poppins">Message SID</span>
          <input
            type="text"
            className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
          />
        </div>
        <div className="flex flex-col gap-[5px] w-full">
          <span className="font-poppins">Phone No</span>
          <input
            type="text"
            className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
        <div className="flex flex-col gap-[5px] w-full">
          <span className="font-poppins">Token</span>
          <input
            type="text"
            className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
          />
        </div>
        <div className="flex flex-col gap-[5px] w-full">
          <span className="font-poppins">Token sender</span>
          <input
            type="text"
            className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
          />
        </div>
      </div>
      <div>
        <button className="flex justify-center font-mont font-bold items-center bg-[#fc5b62] text-white w-[100px] h-[30px] rounded-sm">
          Submit
        </button>
      </div>
    </div>
  );
}

export default SmsConfig;
