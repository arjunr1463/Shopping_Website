import React, { useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function CustomerChangepassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your password change logic goes here
  };

  return (
    <div className="p-4 flex flex-col gap-[30px] font-poppins text-[14px] mob:text-[15px] lg:text-[16px]">
      <header className="bg-white shadow h-[60px] flex items-center p-2">
        <div className=" flex items-center gap-[10px]">
          <i className="text-[25px] text-gray-500">
            <MdOutlineDashboardCustomize />
          </i>
          <h1 className="text-md mob:text-xl font-bold text-gray-800 font-mont">
            Change Password
          </h1>
        </div>
      </header>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-6">
          <label className="block  font-poppins mb-2" htmlFor="oldPassword">
            Old Password
          </label>
          <input
            className="shadow font-poppins h-[38px] appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            id="oldPassword"
            type="password"
            placeholder="Enter old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block  font-poppins mb-2" htmlFor="newPassword">
            New Password
          </label>
          <input
            className="shadow font-poppins h-[38px] appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block  font-poppins mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow font-poppins h-[38px] appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <button
            className="bg-[#ffb647] font-mont font-semibold text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomerChangepassword;
