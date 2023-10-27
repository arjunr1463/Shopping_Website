import React from "react";
import { AiFillFileText } from "react-icons/ai";

function NewSubcategory() {
  return (
    <div className="px-[10px] py-[10px]">
      <div className="flex flex-col gap-[20px] p-4 bg-white  shadow-lg">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">Sub Category</span>
        </div>
        <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Select category</span>
            <select className="border-[1px] outline-none h-[40px] w-full text-gray-600 px-[10px]">
              <option>Select category</option>
              <option>Grocery and staples</option>
              <option>Baby care</option>
              <option>Bread & Bakery</option>
            </select>
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">Subcategory name</span>
            <input
              type="text"
              className="outline-none border-[1px]  h-[40px] rounded-sm px-[10px]"
              placeholder="subcategory"
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

export default NewSubcategory;
