import React from "react";
import { AiFillFileText } from "react-icons/ai";

function NewDeliveryLocation() {
  return (
    <div className="flex flex-col gap-[15px] p-4 bg-white  shadow-lg text-[14px] font-poppins ">
      <div className="flex items-center gap-[10px] border-b-[1px]">
        <i className="text-gray-300 text-[25px]">
          <AiFillFileText />
        </i>
        <span className="font-poppins text-[22px]">Delivery Location</span>
      </div>
      <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
        <div className="flex flex-col gap-[5px] w-full">
          <span className="font-poppins">Select franchise</span>
          <select className="border-[1px] px-[10px] py-[8px] outline-none font-poppins text-gray-500">
            <option value="">Select franchise</option>
            <option>Amrutha Store</option>
          </select>
        </div>
        <div className="flex flex-col gap-[5px] w-full">
          <span className="font-poppins">Delivery location</span>
          <input
            type="text"
            className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            placeholder="city"
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

export default NewDeliveryLocation;
