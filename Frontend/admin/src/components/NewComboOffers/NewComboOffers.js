import React from "react";
import { AiFillFileText } from "react-icons/ai";

function NewComboOffers() {
  return (
    <div className="flex flex-col gap-[20px] w-full h-full px-[10px] pt-[10px] pb-[30px] text-[14px]">
      <div className="bg-[#e9ecef] py-[10px] px-[10px] text-[15px] font-mont font-semibold flex flex-row gap-[10px]">
        <span className="text-[#577eac]">Combo Offers</span>
        <span className="text-gray-500">/ New combo offers</span>
      </div>
      <div className="flex flex-col gap-[25px] p-4 bg-white  shadow-lg">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">New combo offers</span>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">item Title</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Product title"
            />
          </div>
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Product Description</span>
            <textarea
              type="text"
              className="outline-none border-[1px] h-[80px] rounded-sm px-[10px]"
              placeholder="Product Description"
            />
          </div>
        </div>
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">Combo Price</span>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">
              Original Price/MRP<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Originall product price"
            />
          </div>
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">
              Sale price<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Sale price"
            />
          </div>
        </div>
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">Product Features</span>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">
              Product Image<span className="text-[red]">*</span>
            </span>
            <input
              type="file"
              className="outline-none  h-[40px] rounded-sm px-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Key Features</span>
            <textarea
              type="text"
              className="outline-none border-[1px] h-[80px] rounded-sm px-[10px]"
              placeholder="Key features"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Ingredients</span>
            <textarea
              type="text"
              className="outline-none border-[1px] h-[80px] rounded-sm px-[10px]"
              placeholder="Ingredients"
            />
          </div>
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Packing</span>
            <textarea
              type="text"
              className="outline-none border-[1px] h-[80px] rounded-sm px-[10px]"
              placeholder="Packing details"
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

export default NewComboOffers;
