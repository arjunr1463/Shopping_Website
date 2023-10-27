import React from "react";
import { AiFillFileText } from "react-icons/ai";

function NewFranchise() {
  return (
    <div className="flex flex-col gap-[20px] w-full h-full px-[10px] pt-[10px] pb-[80px]">
      <div className="bg-[#e9ecef] py-[10px] px-[10px] text-[15px] font-mont font-semibold flex flex-row gap-[10px]">
        <span className="text-[#577eac]">Manage Franchise</span>
        <span className="text-gray-500">/ New Franchise</span>
      </div>
      <div className="flex flex-col gap-[15px] p-4 bg-white  shadow-lg">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">New franchise</span>
        </div>
        <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">
              Franchise name<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Franchise name"
            />
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">
              Contact name<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Contact name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">
              Phone number<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Phone number"
            />
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">
              Address<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">
              City<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="City"
            />
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">
              Postal code<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Postal code"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full ">
            <span className="font-poppins">
              State<span className="text-[red]">*</span>
            </span>
            <select className="border-[1px] px-[10px] py-[8px] outline-none font-poppins text-gray-500">
              <option value="">Select a State</option>
              <option>Kerala</option>
              <option>Tamilnadu</option>
            </select>
          </div>
          <div className="flex flex-col gap-[5px] w-full ">
            <span className="font-poppins">
              District<span className="text-[red]">*</span>
            </span>
            <select className="border-[1px] px-[10px] py-[8px] outline-none font-poppins text-gray-500">
              <option value="">Select a District</option>
              <option>Ernakulam</option>
              <option>Thrissur</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">
              Email<span className="text-[red]">*</span>
            </span>
            <input
              type="email"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Email ID"
            />
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">
              Password<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[5px] w-full lg:w-1/2">
          <span className="font-poppins">
            Confirm password<span className="text-[red]">*</span>
          </span>
          <input
            type="text"
            className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            placeholder="Confirm password"
          />
        </div>
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">Bank account</span>
        </div>
        <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">
              Account number<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Bank account number"
            />
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">
              Bank name<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Eg:Federal Bank"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">
              Branch name<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="Brach name"
            />
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">
              IFSC code<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="IFSC code"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">
              GST number<span className="text-[red]">*</span>
            </span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
              placeholder="GST number"
            />
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">
              GST Certificate<span className="text-[red]">*</span>
            </span>
            <input type="file" className="" />
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

export default NewFranchise;
