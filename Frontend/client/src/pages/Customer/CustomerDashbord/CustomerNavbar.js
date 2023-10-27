import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo/logo.png";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CustomerNavbar() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChangeMenu = () => {
    setMenu(!menu);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const fetchInvoice = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:5000/api/order/getallorder", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const filter = res.data.filter((data) => data.status === "Accepted");
        setData(filter);
      });
  };

  useEffect(() => {
    fetchInvoice();
    const interval = setInterval(() => {
      fetchInvoice();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-between items-center shadow-md px-2 lg:pl-[10px] bg-white lg:pr-[5px] h-20">
      <i onClick={handleChangeMenu} className="lg:hidden text-[30px]">
        <CgMenuLeft />
      </i>
      <div className="flex items-center  lg:gap-[100px]">
        <img
          src={Logo}
          alt="Logo"
          className="h-8 mob:h-10 "
          onClick={() => navigate("/customer-dashboard")}
        />
        <div className="hidden lg:flex">
          <span className="font-mont font-bold text-xl text-[#1a2647] uppercase">
            Dash
          </span>
          <span className="font-mont font-bold text-xl text-[#ffb647] uppercase">
            board
          </span>
        </div>
      </div>
      <div className="flex items-center gap-[30px] relative h-full  ">
        <div className="relative hidden lg:flex h-[40px] ">
          <input
            type="text"
            className="border-2 bg-gray-100 font-poppins outline-none lg:w-[300px] px-4 py-2 rounded-full"
            placeholder="Search"
            value={inputValue}
            onChange={handleChange}
          />
          {inputValue.length === 0 && (
            <div className="absolute text-gray-500 right-3 top-1/2 transform -translate-y-1/2">
              <BsSearch className="text-gray-400 text-xl" />
            </div>
          )}
        </div>
        <div className="pr-[10px] flex gap-[10px] items-center">
          <Link to="/customer-cart" className=" relative px-[6px] py-[10px]">
            <i className="text-[25px] text-[#1a2647] cursor-pointer">
              <FaShoppingCart />
            </i>
            <span className="bg-[#ffb647]  font-mont font-semibold rounded-full flex justify-center items-center text-[12px] w-1/2 h-[18px] absolute top-0 right-0">
              {data.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerNavbar;
