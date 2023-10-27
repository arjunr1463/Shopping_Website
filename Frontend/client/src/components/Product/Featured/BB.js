import React from "react";
import Market3 from "../../../assets/Home/market4.jpg";
import Market4 from "../../../assets/Home/market5.jpeg";
import Market5 from "../../../assets/Home/market6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function BB() {
  const SampleNextArrow = (props) => {
    return (
      <div
        className="bg-[white] text-[35px] py-[10px] px-[10px] cursor-pointer absolute right-5 top-1/3 lg:top-1/2 z-[999]"
        onClick={props.onClick}
      >
        <GrFormNext />
      </div>
    );
  };

  function SamplePrevArrow(props) {
    return (
      <div
        className="bg-[white] text-[35px] py-[10px] cursor-pointer px-[10px] absolute left-6 top-1/3 lg:top-1/2 z-[999]"
        onClick={props.onClick}
      >
        <GrFormPrevious />
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

  const data = [
    {
      image: Market3,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
    {
      image: Market4,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
    {
      image: Market5,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
    {
      image: Market3,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
    {
      image: Market4,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
    {
      image: Market5,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
  ];
  return (
    <div className="pb-10 pt-[10px] ">
      <Slider {...settings} {...arrow} className=" h-full w-full  ">
        {data.map((item, index) => (
          <div key={index} className=" flex flex-col h-full  ">
            <img src={item.image} alt={item.title} className="pb-[5px]" />
            <div className="flex flex-col gap-[3px] text-[14px] md:text-[16px]">
              <h3 className="font-poppins">{item.title}</h3>
              <p className="font-open">{item.companyname}</p>
              <p className="font-mont font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BB;
