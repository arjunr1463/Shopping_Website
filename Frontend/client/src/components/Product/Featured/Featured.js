import React, { useContext, useState } from "react";
import { MainContext } from "../../../context/MainContext";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Slider from "react-slick";
import { HiOutlineHeart } from "react-icons/hi";

function Featured() {
  const { categoryData, productData } = useContext(MainContext);
  const [activeCategory, setActiveCategory] = useState(0);

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
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sortedCategory = categoryData?.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className=" flex flex-col gap-[10px] lg:gap-[25px]">
      <div className="flex flex-col gap-[10px] lg:gap-0 items-center text-center">
        <h className="font-mont font-bold xsmall:text-[28px] mob:text-[35px] lg:text-[60px]">
          Featured Product
        </h>
        <span className="font-poppins  xsmall:text-[12px] mob:text-[14px] sm:text-[16px]">
          We only work with the most celebrated artisans and sustainable,
          independent businesses. All in one curated marketplace.
        </span>
      </div>
      <div className="hidden lg:flex gap-[5px] text-[14px] justify-center font-poppins">
        {sortedCategory?.map((item, index) => (
          <div
            onClick={() => setActiveCategory(index)}
            className={`${
              activeCategory === index
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-600"
            } cursor-pointer   px-3 py-[1px] rounded-[3px] hover:bg-gray-700 hover:text-white hover:duration-500`}
          >
            <span className="uppercase">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="mx-10 mb-10">
        <Slider {...settings} {...arrow} className=" h-full">
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
  );
}

export default Featured;
