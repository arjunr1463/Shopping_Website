import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaListAlt,
  FaShoppingCart,
  FaLock,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";

function CustomerSidebar() {
  const [activeTab, setActiveTab] = useState("dash");
  const navigate = useNavigate();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-6 px-2 text-[14px] flex flex-col gap-[20px] font-poppins w-[280px] shadow-md bg-white">
      <ul className="flex flex-col gap-4">
        <li
          className={`flex items-center gap-4 py-3 px-4 rounded-lg cursor-pointer transition duration-300 ${
            activeTab === "dash"
              ? "bg-[#1a2647] text-white"
              : "hover:bg-[#1a2647] text-gray-800 hover:text-white "
          }`}
          onClick={() => {
            handleTabClick("dash");
            navigate("/customer-dashboard");
          }}
        >
          <AiFillDashboard className="w-6 h-6" />
          <span className="">Dashboard</span>
        </li>
        <li
          className={`flex items-center gap-4 py-3 px-4 rounded-lg cursor-pointer transition duration-300 ${
            activeTab === "home"
              ? "bg-[#1a2647] text-white"
              : "hover:bg-[#1a2647] text-gray-800 hover:text-white "
          }`}
          onClick={() => {
            handleTabClick("home");
            navigate("/home");
          }}
        >
          <FaHome className="w-6 h-6" />
          <span className="">Home</span>
        </li>
        <li
          className={`flex items-center gap-4 py-3 px-4 rounded-lg cursor-pointer transition duration-300 ${
            activeTab === "buyProducts"
              ? "bg-[#1a2647] text-white"
              : "hover:bg-[#1a2647] text-gray-800 hover:text-white "
          }`}
          onClick={() => {
            handleTabClick("buyProducts");
            navigate("/customer-buyproducts");
          }}
        >
          <FaShoppingCart className="w-6 h-6" />
          <span className="">Buy Products</span>
        </li>
        <li
          className={`flex items-center gap-4 py-3 px-4 rounded-lg cursor-pointer transition duration-300 ${
            activeTab === "myorders"
              ? "bg-[#1a2647] text-white"
              : "hover:bg-[#1a2647] text-gray-800 hover:text-white "
          }`}
          onClick={() => {
            handleTabClick("myorders");
            navigate("/customer-myorder");
          }}
        >
          <FaListAlt className="w-6 h-6" />
          <span className="">My Orders</span>
        </li>
        <li
          className={`flex items-center gap-4 py-3 px-4 rounded-lg cursor-pointer transition duration-300 ${
            activeTab === "password"
              ? "bg-[#1a2647] text-white"
              : "hover:bg-[#1a2647] text-gray-800 hover:text-white "
          }`}
          onClick={() => {
            handleTabClick("password");
            navigate("/customer-changepassword");
          }}
        >
          <FaLock className="w-6 h-6" />
          <span className="">Change Password</span>
        </li>
        <li
          className={`flex items-center gap-4 py-3 px-4 rounded-lg cursor-pointer transition duration-300 ${
            activeTab === "logout"
              ? "bg-[#1a2647] text-white"
              : "hover:bg-[#1a2647] text-gray-800 hover:text-white "
          }`}
          onClick={() => {
            navigate("/customerlogin");
            localStorage.removeItem("token");
          }}
        >
          <FaSignOutAlt className="w-6 h-6" />
          <span className="">Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default CustomerSidebar;
