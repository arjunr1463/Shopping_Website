import React, { useEffect, useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import axios from "axios";

function CustomerProfile() {
  const [data, setData] = useState("");

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/getsingleuser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="p-4 flex flex-col gap-[30px] font-poppins">
      <header className="bg-white shadow h-[60px] flex items-center p-2">
        <div className=" flex items-center gap-[10px]">
          <i className="text-[25px] text-gray-500">
            <MdOutlineDashboardCustomize />
          </i>
          <h1 className="text-md mob:text-md md:text-[16px] mob:text-xl font-bold text-gray-800 font-mont">
            Account Information
          </h1>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-white shadow font-poppins">
        <div className="flex flex-row items-center">
          <span className="text-[13px] mob:text-md md:text-[16px] font-bold text-gray-800 w-20 mob:w-24">
            Name:
          </span>
          <span className="text-gray-600 text-[12px] mob:text-[14px] md:text-[16px]">
            {data.fullname}
          </span>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-[13px] mob:text-md md:text-[16px] font-bold text-gray-800 w-20 mob:w-24">
            Email:
          </span>
          <span className="text-gray-600 text-[12px] mob:text-[14px] md:text-[16px]">
            {data.email_id}
          </span>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-[13px] mob:text-md md:text-[16px] font-bold text-gray-800 w-20 mob:w-24">
            Mobile Number:
          </span>
          <span className="text-gray-600 text-[12px] mob:text-[14px] md:text-[16px]">
            {data.mobile_number}
          </span>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-[13px] mob:text-md md:text-[16px] font-bold text-gray-800 w-20 mob:w-24">
            User ID:
          </span>
          <span className="text-gray-600 text-[12px] mob:text-[14px] md:text-[16px]">
            {data.general_id}
          </span>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-[13px] mob:text-md md:text-[16px] font-bold text-gray-800 w-20 mob:w-24">
            State:
          </span>
          <span className="text-gray-600 text-[12px] mob:text-[14px] md:text-[16px]">
            {data.state}
          </span>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-[13px] mob:text-md md:text-[16px] font-bold text-gray-800 w-20 mob:w-24">
            District:
          </span>
          <span className="text-gray-600 text-[12px] mob:text-[14px] md:text-[16px]">
            {data.district}
          </span>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-[13px] mob:text-md md:text-[16px] font-bold text-gray-800 w-20 mob:w-24">
            Pincode:
          </span>
          <span className="text-gray-600 text-[12px] mob:text-[14px] md:text-[16px]">
            {data.pincode}
          </span>
        </div>
        <div className="flex flex-row items-start">
          <span className="text-[13px] mob:text-md md:text-[16px] font-bold text-gray-800 w-20 mob:w-[45%] sm:w-24">
            Address:
          </span>
          <div>
            <span className="text-gray-600 text-[12px] mob:text-[14px] md:text-[16px]">
              {data.address}
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
