import React, { useState } from "react";
import Market3 from "../../../assets/Home/market4.jpg";
import Market4 from "../../../assets/Home/market5.jpeg";
import Market5 from "../../../assets/Home/market6.jpg";
import Pagination from "../../Pagination/Pagination";

function Offer({ image, title, price, offerprice }) {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  let originalPrice = null;
  let discount = null;

  if (price && quantity) {
    originalPrice = (parseFloat(price.slice(1)) * quantity).toFixed(2);
  }

  if (offerprice && price) {
    discount = (
      ((parseFloat(price.slice(1)) - parseFloat(offerprice.slice(1))) /
        parseFloat(price.slice(1))) *
      100
    ).toFixed(0);
  }

  return (
    <div className="relative flex flex-col items-center pb-6 bg-white shadow-lg rounded-md">
      <div className="relative h-60 w-full overflow-hidden rounded-t-md">
        <img
          src={image}
          alt={title}
          className="object-cover h-full w-full transform hover:scale-105 transition duration-300 ease-out"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white rounded-md px-2 py-1 text-xs font-medium tracking-wide">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center px-[10px]">
        <h3 className="text-xl font-bold font-poppins text-gray-900 my-2 text-center">
          {title}
        </h3>
        {price && (
          <div className="flex items-center justify-center text-gray-500 text-sm font-open mb-2">
            <span className="mr-2">MRP:</span>
            <span className="line-through">{price}</span>
          </div>
        )}
        {offerprice && (
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center text-gray-500 text-sm font-open mb-2">
              <span className="mr-2">Offer Price:</span>
              <span className="text-lg font-bold text-gray-700">
                {offerprice}
              </span>
            </div>
            <div className="flex items-center justify-center text-gray-500 text-sm font-open mb-2">
              <span className="mr-2">Quantity:</span>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="border-2 border-gray-400 outline-none px-4 py-2 rounded-md text-lg font-medium text-gray-800 w-20"
              />
            </div>
            {originalPrice && (
              <div className="flex items-center justify-center text-gray-500 text-sm font-open mb-2">
                <span className="mr-2">Total Price:</span>
                <span className="text-lg font-bold text-gray-700">
                  ${originalPrice}
                </span>
              </div>
            )}
          </div>
        )}
        <button className="bg-yellow-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-yellow-600 transition duration-300 ease-out font-mont font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function Offers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);

  const data = [
    {
      image: Market3,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
      offerprice: "$30.00",
    },
    {
      image: Market5,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
      offerprice: "$25.00",
    },
    {
      image: Market3,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
      offerprice: "$30.00",
    },
    {
      image: Market4,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
      offerprice: "$25.00",
    },

    {
      image: Market4,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
      offerprice: "$25.00",
    },
  ];

  const lastPostIndex = currentPage * postsPerPage;
  const FirstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = data.slice(FirstPostIndex, lastPostIndex);

  return (
    <div className="flex flex-col gap-[50px] ">
      <div className="bg-[white] shadow-md px-[10px] py-[10px]">
        <h1 className="font-mont font-semibold text-[22px] text-center uppercase tracking-wider">
          <span className="bg-gradient-to-r from-red-400 to-red-700 text-transparent bg-clip-text">
            Offers
          </span>
        </h1>
      </div>
      <div className="px-[10px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] ">
          {currentPost.map((offer, index) => (
            <Offer
              key={index}
              image={offer.image}
              title={offer.title}
              companyname={offer.companyname}
              price={offer.price}
              offerprice={offer.offerprice}
            />
          ))}
        </div>
        <div>
          <Pagination
            totalpost={data.length}
            postsperpage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setPostPerPage={setPostPerPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Offers;
