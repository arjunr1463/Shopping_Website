import React from "react";
import { AiFillFileText } from "react-icons/ai";
function NewAdvertisement() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-[15px] p-4 bg-white  shadow-lg">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">Category</span>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">URL</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Advertisement url"
            />
          </div>
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Image</span>
            <input
              type="file"
              className="outline-none  h-[80px] rounded-sm px-[10px]"
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

export default NewAdvertisement;
