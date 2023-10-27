import React from "react";
import logo from "../../assets/Logo/logo.png";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdNotifications } from "react-icons/io";
function NavBar() {
  return (
    <div className="flex items-center h-[60px] sm:h-[65px]  md:h-[70px] justify-between px-[10px] lg:px-[20px] bg-[#171a1d] text-white">
      <div className="flex h-[45px] py-[4px]">
        <img src={logo} alt="" className="object-cover" />
      </div>
      <div className="hidden lg:flex items-center gap-[30px] font-mont text-[14px]">
        <div className="flex items-center gap-[5px]">
          <i>
            <BsFillExclamationCircleFill />
          </i>
          <span className="text-gray-400">Request</span>
          <span className="bg-[#007bff] font-mont rounded-[0.2rem] px-[3px] text-[12px]">
            1 New
          </span>
          <i>
            <AiOutlineRight />
          </i>
        </div>
        <div className="flex items-center gap-[5px]">
          <i className="text-[18px]">
            <IoMdNotifications />
          </i>
          <span className="text-gray-400">Pending Orders</span>
          <span className="bg-[#ffc107] font-mont rounded-[0.2rem] px-[3px] text-[12px] text-black">
            8 New
          </span>
          <i>
            <AiOutlineRight />
          </i>
        </div>
        <div className="flex items-center gap-[5px]">
          <span className="font-bold text-[16px]">username</span>
          <i className="text-[18px]">
            <IoIosLogOut />
          </i>
        </div>
      </div>
      <div className="flex lg:hidden">
        <i className="text-[30px] text-gray-400 cursor-pointer">
          <TfiMenuAlt />
        </i>
      </div>
    </div>
  );
}

export default NavBar;
