import React from "react";
import { AiFillFileText } from "react-icons/ai";

function NewDiscount() {
  return (
    <div className="flex flex-col gap-[20px] w-full h-full px-[10px] py-[10px] text-[14px]">
      <div className="bg-[#e9ecef] py-[10px] px-[10px] text-[15px] font-mont font-semibold flex flex-row gap-[10px]">
        <span className="text-[#577eac]">Bill discount settings</span>
        <span className="text-gray-500">/ Bill discount</span>
      </div>
      <div className="flex flex-col gap-[15px] p-4 bg-white  shadow-lg">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">Discount settings</span>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full ">
            <span className="font-poppins">User type</span>
            <select className="border-[1px] px-[10px] py-[8px] outline-none font-poppins text-gray-500">
              <option value="">Select user type</option>
              <option>Normal user</option>
              <option>Primary user</option>
            </select>
          </div>
          <div className="flex flex-col gap-[5px] w-full ">
            <span className="font-poppins">Discount type</span>
            <select className="border-[1px] px-[10px] py-[8px] outline-none font-poppins text-gray-500">
              <option value="">Select user type</option>
              <option>Percentage</option>
              <option>Fixed amount</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Discount</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Discount amount"
            />
          </div>
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Amount</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Amount"
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

export default NewDiscount;
