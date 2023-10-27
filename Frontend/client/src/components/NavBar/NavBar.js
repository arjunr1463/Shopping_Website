import React, { useState, useContext, useEffect } from "react";
import Logo from "../../assets/Logo/logo.png";
import { FiSearch } from "react-icons/fi";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import MenuCart from "../Cart/MenuCart";
import axiosInstance from "../../axios/axiosInstance";

function CategoryItem({ category, subcategoryId, setSubcategoryId }) {
  const hasSubcategories = category?.subcategory?.length > 0;
  const [isLocalOpen, setIsLocalOpen] = useState(false);
  

  return (
    <div
      onMouseEnter={() => setIsLocalOpen(true)}
      onMouseLeave={() => setIsLocalOpen(false)}
      className={`flex  justify-between cursor-pointer items-center gap-1 w-[150px] px-[10px]`}
    >
      <span>{category.name}</span>
      {hasSubcategories && (
        <>
          {isLocalOpen ? (
            <i className="text-[14px] ">
              <AiFillCaretRight />
            </i>
          ) : (
            <i className="text-[14px] ">
              <AiFillCaretDown />
            </i>
          )}
        </>
      )}
      {hasSubcategories && isLocalOpen && (
        <div className="flex flex-col gap-5 h-full w-[160px] shadow-sm border-[1px] absolute top-0 left-[159px] font-poppins  py-[15px] px-[10px]">
          {category.subcategory.map((subCategory) => (
            <CategoryItem
              key={subCategory._id}
              category={subCategory}
              subcategoryId={subcategoryId}
              setSubcategoryId={setSubcategoryId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function NavBar() {
  const navigate = useNavigate();
  const { categoryData, setCategoryData } = useContext(MainContext);
  const { openCart, setOpenCart } = useContext(MainContext);
  const [openCategory, setOpenCategory] = useState(false);
  const [subcategoryId, setSubcategoryId] = useState([]);

  const fetchData = async () => {
    await axiosInstance("/category").then((res) => setCategoryData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div >
      <div className="bg-[#000000] z-[2] flex justify-center font-poppins py-[10px] px-[10px] lg:px-0 text-[13px] lg:text-[14px]">
        <span className="text-white">
          Your local shops are now under 'Local Delivery' in the menu
        </span>
      </div>
      <div
        className={
          "bg-[#edeae5] flex flex-col gap-[30px] px-[10px] lg:px-[80px] py-[25px] lg:pt-[20px] lg:pb-0"
        }
      >
        <div className="flex justify-between items-center gap-[30px]">
          <div className="flex gap-[20px]">
            <i className="flex lg:hidden xsmall:text-[25px] mob:text-[30px]">
              <GiHamburgerMenu />
            </i>
            <img
              src={Logo}
              alt=""
              className="xsmall:h-6 mob:h-7 lg:h-10  w-auto"
              onClick={() => navigate("/home")}
            />
          </div>
          <form className=" border-black border-b-[1px]  px-[15px] py-[10px] w-1/2 hidden lg:flex ">
            <input
              className="outline-none bg-[#edeae5] w-full font-poppins"
              type="text"
              placeholder="Search independent products or shops"
            />
            <button className="">
              <FiSearch />
            </button>
          </form>

          <div className="flex gap-16">
            <div
              onClick={() => navigate("/customer/login")}
              className="flex gap-1 items-center font-poppins cursor-pointer"
            >
              <i>
                <FaUser />
              </i>
              <span>Sign In</span>
            </div>
            <div
              onClick={() => setOpenCart(true)}
              className="flex gap-[10px] lg:gap-[20px] items-center xsmall:text-[20px] mob:text-[25px] lg:text-[30px] relative"
            >
              <button className="text-[20px] mob:text-[25px] lg:text-[30px]">
                <FaCartPlus />
              </button>
              <div className="absolute top-[-12px]  left-[10px]  font-semibold bg-[orange] rounded-full w-[16px] h-[16px] text-white flex justify-center items-center text-[12px]">
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center font-poppins">
          <ul className="flex justify-between w-1/2 relative">
            <Link
              to="/home"
              className="cursor-pointer px-[30px] py-[10px] hover:bg-white duration-300"
            >
              Home
            </Link>
            <li
              className="px-[30px] py-[10px] hover:bg-white duration-300"
              onMouseEnter={() => setOpenCategory(true)}
              onMouseLeave={() => setOpenCategory(false)}
            >
              <div className="flex gap-1 items-center ">
                <span>Categories</span>
                <i className="text-[12px]">
                  <AiFillCaretDown />
                </i>
                {openCategory && (
                  <div className="absolute top-11 left-0 flex flex-col gap-5 font-poppins z-[999] bg-white shadow-lg rounded-sm py-[15px] w-[600px] px-[10px]">
                    {categoryData.map((category) => (
                      <CategoryItem
                        key={category._id}
                        category={category}
                        subcategoryId={subcategoryId}
                        setSubcategoryId={setSubcategoryId}
                      />
                    ))}
                  </div>
                )}
              </div>
            </li>
            <Link
              to="/combo-offers"
              className="cursor-pointer px-[30px] py-[10px] hover:bg-white duration-300"
            >
              Combo Offers
            </Link>
            <Link
              to="/offers"
              className="cursor-pointer px-[30px] py-[10px] hover:bg-white duration-300"
            >
              Offers
            </Link>
          </ul>
        </div>
      </div>
      {openCart && (
        <div className="bg-gray-100 fixed top-[41px] right-0 h-screen w-[300px] z-[1]">
          <MenuCart />
        </div>
      )}
    </div>
  );
}

export default NavBar;
