import React, { useState, useEffect, useContext } from "react";
import Market1 from "../../../assets/Home/Shop1.avif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import axiosInstance from "../../../axios/axiosInstance";
import { HiOutlineHeart } from "react-icons/hi";
import { MainContext } from "../../../context/MainContext";

function Market() {
  const { productData, setProductData } = useContext(MainContext);

  //slider

  const SampleNextArrow = (props) => {
    return (
      <div
        className="bg-gray-200 text-gray-500 text-[35px] py-[6px] px-[1px] cursor-pointer rounded-[5px] absolute right-[-5px] top-1/3 lg:top-1/2 z-[999]"
        onClick={props.onClick}
      >
        <BiChevronRight />
      </div>
    );
  };

  function SamplePrevArrow(props) {
    return (
      <div
        className="bg-gray-200 text-gray-500 text-[35px] py-[6px] cursor-pointer rounded-[5px] px-[1px] absolute left-[-5px] top-1/3 lg:top-1/2 z-[999]"
        onClick={props.onClick}
      >
        <BiChevronLeft />
      </div>
    );
  }
  const arrow = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchproductData = async () => {
    await axiosInstance.get("/product").then((res) => {
      setProductData(res?.data);
    });
  };

  useEffect(() => {
    fetchproductData();
  }, []);

  return (
    <div className=" flex flex-col gap-[25px]">
      <div className="flex flex-col items-center">
        <h className="font-mont font-bold xsmall:text-[28px] mob:text-[35px] lg:text-[60px]">
          Markets
        </h>
        <span className="font-poppins text-center xsmall:text-[12px] mob:text-[14px] sm:text-[16px]">
          From the vibrant stalls of Borough Market to the bustling boutiques of
          Camden Market, uncover one-of-a-kind treasures from world-renowned
          market traders and artisans.
        </span>
      </div>
      <div className=" lg:px-[60px] flex flex-col lg:flex-row gap-10 ">
        <div className="w-full lg:w-[35vw] ">
          <img
            src={Market1}
            alt={`Banner`}
            className="h-full w-full object-fit"
          />
        </div>
        <div className="">
          <Slider {...settings} {...arrow} className=" h-full lg:w-[58vw]  ">
            {productData?.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer flex flex-col h-full bg-white shadow-md rounded-[5px] border-[1px]  "
              >
                <div className="border-b-[1px] border-[#DFDFDF] relative">
                  <img
                    src={item.image[0]}
                    alt={item.title}
                    className="h-[300px] object-contain"
                  />
                  <i className="absolute top-2 right-3 text-[20px]">
                    <HiOutlineHeart />
                  </i>
                </div>
                <div className="flex flex-col gap-[3px] text-[14px] md:text-[16px] p-2 pb-2.5 relative">
                  <h3 className="font-poppins">{item.name.slice(0, 28)}</h3>
                  <div className="flex gap-3 items-end">
                    <span className="font-mont font-semibold text-[13px] text-gray-500 relative ">
                      Rs {item.actualPrice}
                      <div className="w-full absolute top-2.5 font-bold h-px bg-gray-600"></div>
                    </span>
                    <span className="font-mont font-semibold text-red-500 ">
                      Rs {item.offerPrice}/-
                    </span>
                  </div>
                  <span className="font-poppins absolute bottom-0 right-2 text-[12px]">
                    {item.franchise.franchiseName}
                  </span>
                  <div className="bg-[#ffd814] cursor-pointer mt-3 rounded-[2px] flex w-1/2 font-poppins items-center justify-center text-[14px]">
                    <button>Add To Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Market;
