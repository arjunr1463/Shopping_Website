import React from "react";
import { FiUser, FiPackage, FiHeart, FiSettings } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function CustomerDashboard() {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <header className="bg-white shadow h-[60px] flex items-center p-2">
        <div className=" flex gap-[10px] items-center">
          <i className="text-[25px] text-gray-500">
            <MdOutlineDashboardCustomize />
          </i>
          <h1 className="text-md mob:text-xl font-bold text-gray-800 font-mont">
            Customer Dashboard
          </h1>
        </div>
      </header>
      <main className="font-poppins px-0 sm:px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            className="bg-white rounded-lg p-6 shadow-md cursor-pointer hover:scale-105 duration-500"
            onClick={() => navigate("/customerprofile")}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg">
              <FiUser className="text-white text-xl" />
            </div>
            <h2 className="text-md mob:text-xl font-semibold mt-4">Profile</h2>
            <p className="text-gray-600 mt-2 text-[14px] mob:text-[16px]">
              Manage your profile information.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md cursor-pointer hover:scale-105 duration-500" onClick={()=>navigate("/customer-myorder")}>
            <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-lg">
              <FiPackage className="text-white text-xl" />
            </div>
            <h2 className="text-md mob:text-xl font-semibold mt-4">Orders</h2>
            <p className="text-gray-600 mt-2 text-[14px] mob:text-[16px]">
              Track your orders and view order history.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:scale-105 duration-500">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-lg">
              <FiHeart className="text-white text-xl" />
            </div>
            <h2 className="text-md mob:text-xl font-semibold mt-4">Wishlist</h2>
            <p className="text-gray-600 mt-2 text-[14px] mob:text-[16px]">Manage your favorite products.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:scale-105 duration-500">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-lg">
              <FiSettings className="text-white text-xl" />
            </div>
            <h2 className="text-md mob:text-xl font-semibold mt-4">Settings</h2>
            <p className="text-gray-600 mt-2 text-[14px] mob:text-[16px]">Update your account settings.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CustomerDashboard;
