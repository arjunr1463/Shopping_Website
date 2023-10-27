import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { CgChevronLeft } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";
import Logo from "../../assets/Logo/logo.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function Menu({ close }) {
  const [action, setAction] = useState(false);
  const [grocery, setGrocery] = useState(false);
  const handleGrocery = () => {
    setGrocery(!grocery);
  };
  const handleAction = () => {
    setAction(!action);
  };
  return (
    <div className="fixed z-[999] overflow-hidden top-0 h-screen px-[10px]  bg-[#ffffff] flex flex-col w-full">
      <div className="flex justify-between items-center px-[20px] py-[15px]">
        <i className="text-[28px] text-gray-500" onClick={() => close(false)}>
          <CgClose />
        </i>
        <img src={Logo} alt="" className="h-12" />
        <i className="text-[35px] text-gray-500">
          <HiOutlineShoppingBag />
        </i>
      </div>
      <form className=" border-black border-b-[1px] px-[18px] py-[10px] w-full flex ">
        <input
          className="outline-none w-full font-poppins text-[14px]"
          type="text"
          placeholder="Search independent products or shops"
        />
        <button className="">
          <FiSearch />
        </button>
      </form>
      <div className="lg:hidden pt-[10px] px-[15px]  font-mont">
        <ul className="flex flex-col relative ">
          <Link
            to="/home"
            className="cursor-pointer  py-[10px] hover:bg-white duration-300"
            onClick={() => close(false)}
          >
            Home
          </Link>
          <li className=" cursor-pointer  py-[10px] hover:bg-white duration-300">
            <div
              className="flex items-center justify-between "
              onClick={handleAction}
            >
              <span>Categories</span>
              <i className="text-[20px]">
                <FiChevronRight />
              </i>
            </div>
          </li>
          <Link
            to="/combo-offers"
            className="cursor-pointer  py-[10px] hover:bg-white duration-300"
            onClick={() => close(false)}
          >
            Combo Offers
          </Link>
          <Link
            to="/offers"
            className="cursor-pointer  py-[10px] hover:bg-white duration-300"
            onClick={() => close(false)}
          >
            Offers
          </Link>

          {action && (
            <div className="absolute top-0 flex flex-col gap-[20px] bg-white z-[999] font-mont py-[15px] w-full  ">
              <div
                className="flex items-center gap-[5px]"
                onClick={() => setAction(false)}
              >
                <i className="text-[20px]">
                  <CgChevronLeft />
                </i>
                <span className="">Categories</span>
              </div>
              <ul className="flex flex-col gap-[20px]">
                <li
                  className="flex items-center justify-between gap-1"
                  onClick={handleGrocery}
                >
                  <span>Grocery & Staples</span>
                  <i className="text-[20px]">
                    {grocery ? <FiChevronRight /> : <FiChevronRight />}
                  </i>
                </li>
                <li className="flex items-center justify-between gap-1">
                  <span>Grocery & Staples</span>
                  <i className="text-[20px]">
                    <FiChevronRight />
                  </i>
                </li>
                <li className="flex items-center justify-between gap-1">
                  <span>Grocery & Staples</span>
                  <i className="text-[20px]">
                    <FiChevronRight />
                  </i>
                </li>
                <li className="flex items-center justify-between gap-1">
                  <span>Grocery & Staples</span>
                  <i className="text-[20px]">
                    <FiChevronRight />
                  </i>
                </li>
                <li className="flex items-center justify-between gap-1">
                  <span>Grocery & Staples</span>
                  <i className="text-[20px]">
                    <FiChevronRight />
                  </i>
                </li>
                <li className="flex items-center justify-between gap-1">
                  <span>Grocery & Staples</span>
                  <i className="text-[20px]">
                    <FiChevronRight />
                  </i>
                </li>
                <li className="flex items-center justify-between gap-1">
                  <span>Grocery & Staples</span>
                  <i className="text-[20px]">
                    <FiChevronRight />
                  </i>
                </li>
                <li className="flex items-center justify-between gap-1">
                  <span>Grocery & Staples</span>
                  <i className="text-[20px]">
                    <FiChevronRight />
                  </i>
                </li>
                <li className="flex items-center justify-between gap-1">
                  <span>Grocery & Staples</span>
                  <i className="text-[20px]">
                    <FiChevronRight />
                  </i>
                </li>
                <li className="flex items-center justify-between gap-1">
                  <span>Grocery & Staples</span>
                  <i className="text-[20px]">
                    <FiChevronRight />
                  </i>
                </li>
                <li className="flex items-center justify-between gap-1">
                  <span>Grocery & Staples</span>
                  <i className="text-[20px]">
                    <FiChevronRight />
                  </i>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
