import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { RiCloseFill } from "react-icons/ri";
import Market3 from "../../assets/Home/market4.jpg";
import Market4 from "../../assets/Home/market5.jpeg";
import Market5 from "../../assets/Home/market6.jpg";

function MenuCart() {
  const { setOpenCart } = useContext(MainContext);
  const data = [
    {
      name: "Nike Shoe",
      image: Market3,
      price: "1999",
      size: "X Large",
    },
    {
      name: "Nike Shoe",
      image: Market4,
      price: "1999",
      size: "Large",
    },
    {
      name: "The Gathered Drape Trench",
      image: Market5,
      price: "1999",
      size: "Medium",
    },
    {
      name: "Nike Shoe",
      image: Market3,
      price: "1999",
      size: "X Large",
    },
    {
      name: "Nike Shoe",
      image: Market4,
      price: "1999",
      size: "Large",
    },
    {
      name: "The Gathered Drape Trench",
      image: Market5,
      price: "1999",
      size: "Medium",
    },
    {
      name: "Nike Shoe",
      image: Market3,
      price: "1999",
      size: "X Large",
    },
    {
      name: "Nike Shoe",
      image: Market4,
      price: "1999",
      size: "Large",
    },
    {
      name: "The Gathered Drape Trench",
      image: Market5,
      price: "1999",
      size: "Medium",
    },
  ];
  return (
    <div className="relative flex flex-col h-full w-full">
      <i
        className="cursor-pointer text-[20px] text-white absolute right-2 top-1"
        onClick={() => setOpenCart(false)}
      >
        <RiCloseFill />
      </i>
      <div className="bg-[#323639] text-white text-[14px] font-poppins flex justify-center items-center shadow-md  h-[4vh]">
        <h>MY ORDERS</h>
      </div>
      <div className="flex flex-col gap-2 pt-2  h-[77%] overflow-auto px-2 w-full">
        {data.map((item) => (
          <div className="flex gap-3 text-[12px] font-poppins border-[1px] px-1 w-full">
            <div className="flex h-[120px] w-[30%] ">
              <img src={item.image} alt="" className="object-contain" />
            </div>
            <div className="flex flex-col justify-between py-1 w-[70%]">
              <div className="flex flex-col">
                <h>{item.name}</h>
                <span>{item.size}</span>
              </div>
              <div className="flex justify-between px-1 w-full">
                <span>Rs {item.price}/-</span>
                <div className="flex gap-3">
                  <button className="text-red-500">Remove</button>
                  <button className="text-blue-500">View</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex flex-col gap-1 w-full font-poppins pt-2 border-[1px]  shadow-md text-[14px]">
        <div className="flex justify-between px-3">
          <span>Subtotal(2 items)</span>
          <span>RS 21,000/-</span>
        </div>
        <div className="bg-[#323639] w-full text-white text-[14px] font-poppins flex justify-center items-center  h-[35px]">
          <button>Continue to checkout</button>
        </div>
        <span className="text-[12px] flex justify-center font-lato">
          Get it now before it sells
        </span>
      </div>
    </div>
  );
}

export default MenuCart;
