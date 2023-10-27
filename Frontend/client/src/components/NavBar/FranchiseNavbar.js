import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine, RiAddFill, RiSubtractFill } from "react-icons/ri";
import { ImNotification } from "react-icons/im";
import { BsCartPlusFill } from "react-icons/bs";
import { FaUserAlt, FaLock, FaKey } from "react-icons/fa";
import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import Menu from "../Franchise/FranchiseMain/Dashboard/Menu";
import axiosInstance from "../../axios/axiosInstance";

function FranchiseNavbar() {
  const [menu, setMenu] = useState(false);
  const [navaction, setNavaction] = useState(false);
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState(false);
  const [data, setData] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleAction = () => {
    setNavaction(!navaction);
  };
  const handleNotification = () => {
    setNotification(!notification);
    setMessage(false);
  };
  const handleMessage = () => {
    setMessage(!message);
    setNotification(false);
  };

  const fetchData = async () => {
    await axiosInstance
      .get("/franchise", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#202020] ">
      <div className="hidden lg:flex items-center justify-between px-[10px] py-4 mx-auto ">
        <div className="flex items-center gap-[40px]">
          {/* {action && ( */}
          <h2 className="text-[12px] font-mont font-bold text-[#177d63]">
            Franchise Dashboard
          </h2>
          {/* )} */}
          <button className="text-white text-[25px]">
            {/* {action ? <HiArrowLeft /> :  */}
            <HiMenu />
          </button>
          <img
            src={Logo}
            alt="logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/franchise/dashboard")}
          />
        </div>
        <div className="flex gap-[5px] items-center">
          <div className="flex items-center justify-end pr-[5px] gap-[15px]  relative w-[200px] text-white">
            <div
              onClick={handleNotification}
              className="cursor-pointer relative py-2 pr-2"
            >
              <i>
                <ImNotification size={20} />
              </i>
              <span className="bg-[#d2322d] text-white text-[12px] w-[18px] flex justify-center items-center font-poppins font-semibold rounded-lg absolute top-0 right-0">
                0
              </span>
            </div>
            <div
              onClick={handleMessage}
              className="cursor-pointer relative py-1 pr-2"
            >
              <i>
                <IoMdNotificationsOutline size={24} />
              </i>
              <span className="bg-[#d2322d] text-white text-[12px] w-[18px] flex justify-center items-center font-poppins font-semibold rounded-lg absolute top-0 right-0">
                0
              </span>
            </div>
            {notification && (
              <div className="absolute top-[54px] font-poppins bg-white text-black shadow-lg w-full flex flex-col">
                <div className="flex justify-between items-center border-b-[1px] border-gray-100 px-[10px] py-[10px] text-[15px]">
                  <div className="flex items-center gap-[8px]">
                    <i>
                      <BsCartPlusFill />
                    </i>
                    <span>Express Orders</span>
                  </div>
                  <span className="bg-[#d2322d] text-white w-[20px] flex justify-center items-center rounded-md text-[13px]">
                    0
                  </span>
                </div>
                <div className="bg-[#ebebeb] font-lato flex justify-center py-[5px] text-[13px]">
                  <Link
                    to="/franchise-pendingorders "
                    onClick={() => setNotification(false)}
                  >
                    See all orders
                  </Link>
                </div>
              </div>
            )}
            {message && (
              <div className="absolute top-[54px] font-poppins bg-white text-black shadow-lg w-full flex flex-col">
                <div className="flex justify-between items-center border-b-[1px] border-gray-100 px-[10px] py-[10px] text-[15px]">
                  <div className="flex items-center gap-[8px]">
                    <i className="text-[16px]">
                      <IoMdNotifications />
                    </i>
                    <span>New Orders</span>
                  </div>
                  <span className="bg-[#d2322d] text-white w-[20px] flex justify-center items-center rounded-md text-[13px]">
                    0
                  </span>
                </div>
                <div className="bg-[#ebebeb] font-lato flex justify-center py-[5px] text-[13px]">
                  <Link
                    to="/franchise-pendingorders "
                    onClick={() => setNotification(false)}
                  >
                    See all orders
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center pl-[10px]">
            <div
              className="lg:flex items-center  w-[155px] cursor-pointer relative text-white hidden sm:block"
              onClick={handleAction}
            >
              <div>
                <p className="text-[14px] font-poppins font-semibold">
                  {data.franchiseName}
                </p>
                <p className="text-[12px] font-poppins font-light text-[#2adcb7]">
                  {data.fullName}
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
          </div>
          <Link to="/franchise/login" className="ml-4 text-[#2adcb7]">
            <RiLogoutBoxRLine size={24} />
          </Link>
        </div>
      </div>
      <div className="lg:hidden flex justify-between items-center px-[10px] py-[15px]">
        <img
          src={Logo}
          alt="logo"
          className="h-8 cursor-pointer"
          onClick={() => navigate("/franchise-dashboard")}
        />
        <i className="text-white text-[26px]" onClick={handleMenu}>
          <HiMenu />
        </i>
      </div>
      {menu && <Menu menu={setMenu} />}
    </div>
  );
}

export default FranchiseNavbar;
