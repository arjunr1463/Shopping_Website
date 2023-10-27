import React from "react";
import { AiFillFileText } from "react-icons/ai";

function Contact() {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center gap-[10px] border-b-[1px]">
        <i className="text-gray-300 text-[25px]">
          <AiFillFileText />
        </i>
        <span className="font-poppins text-[22px]">Contact Info</span>
      </div>
      <div className="flex flex-col gap-[15px]">
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Sender Name</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Sender Email</span>
            <input
              type="email"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Support Email</span>
            <input
              type="email"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Invoice email Id</span>
            <input
              type="email"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[15px] w-full md:w-1/3">
          <span className="font-poppins">Phone (Optional)</span>
          <input
            type="text"
            className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
          />
        </div>
        <div className="flex flex-col gap-[15px] w-full md:w-1/3">
          <span className="font-poppins">Whatsapp Number (Optional)</span>
          <input
            type="text"
            className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
          />
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

export default Contact;
