import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaLock, FaKey } from "react-icons/fa";
import { RiLogoutBoxRLine, RiAddFill, RiSubtractFill } from "react-icons/ri";

function Logout() {
  const [navaction, setNavaction] = useState(false);
  const handleAction = () => {
    setNavaction(!navaction);
  };
  return (
    <div className="bg-[#202020] py-[5px] px-[10px] flex items-center justify-end">
      <div
        className="flex items-center w-[155px] cursor-pointer relative text-white"
        onClick={handleAction}
      >
        <div className="text-right">
          <p className="text-[14px] font-poppins font-semibold">SquadMind</p>
          <p className="text-[12px] font-poppins font-light text-[#2adcb7]">
            Arjun Ramakrishnan
          </p>
        </div>
        <i>{navaction ? <RiSubtractFill /> : <RiAddFill />}</i>
        {navaction && (
          <div className="absolute top-[56px] right-2 text-[13px] font-poppins bg-white text-black shadow-lg w-full flex flex-col">
            <Link
              to="/franchise-profile"
              className="flex items-center gap-[5px] py-[8px] px-[10px] border-b-[1px] border-gray-100"
            >
              <i className="text-[12px]">
                <FaUserAlt />
              </i>
              <span>Profile</span>
            </Link>
            <Link
              to="/franchise-passwordchange"
              className="flex items-center gap-[5px] py-[8px] px-[10px] border-b-[1px]"
            >
              <i className="text-[12px]">
                <FaKey />
              </i>
              <span>Password change</span>
            </Link>
            <div className="flex items-center gap-[5px] py-[8px] px-[10px] border-b-[1px]">
              <i className="text-[12px]">
                <FaLock />
              </i>
              <span>Lock screen</span>
            </div>
          </div>
        )}
      </div>

      <Link to="/franchiselogin" className="ml-4 text-[#2adcb7]">
        <RiLogoutBoxRLine size={24} />
      </Link>
    </div>
  );
}

export default Logout;
