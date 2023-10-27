import React, { useState, useEffect } from "react";
import Market3 from "../../../assets/Home/market4.jpg";
import Market4 from "../../../assets/Home/market5.jpeg";
import Market5 from "../../../assets/Home/market6.jpg";

const products = [
  {
    id: 1,
    name: "Green Fluffy Leopard Print Cardigan",
    originalPrice: 100,
    offerPrice: 80,
    image: Market3,
  },
  {
    id: 2,
    name: "Green Fluffy Leopard Print Cardigan",
    originalPrice: 120,
    offerPrice: 90,
    image: Market4,
  },
  {
    id: 3,
    name: "Green Fluffy Leopard Print Cardigan",
    originalPrice: 150,
    offerPrice: 120,
    image: Market5,
  },
  {
    id: 1,
    name: "Green Fluffy Leopard Print Cardigan",
    originalPrice: 100,
    offerPrice: 80,
    image: Market3,
  },
  {
    id: 2,
    name: "Green Fluffy Leopard Print Cardigan",
    originalPrice: 120,
    offerPrice: 90,
    image: Market4,
  },
  {
    id: 3,
    name: "Green Fluffy Leopard Print Cardigan",
    originalPrice: 150,
    offerPrice: 120,
    image: Market5,
  },
  {
    id: 1,
    name: "Green Fluffy Leopard Print Cardigan",
    originalPrice: 100,
    offerPrice: 80,
    image: Market3,
  },
  {
    id: 2,
    name: "Green Fluffy Leopard Print Cardigan",
    originalPrice: 120,
    offerPrice: 90,
    image: Market4,
  },
  {
    id: 3,
    name: "Green Fluffy Leopard Print Cardigan",
    originalPrice: 150,
    offerPrice: 120,
    image: Market5,
  },
];

function ProductCard({ product }) {
  return (
    <div className="rounded overflow-hidden shadow-lg border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <div className="font-poppins text-lg mb-2">{product.name}</div>
        <div className="text-gray-700 mb-2 font-mont">
          <del>MRP: {product.originalPrice}</del> | Offer:{" "}
          <span className="font-bold font-mont">RS {product.offerPrice}</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-mont font-bold py-2 px-4 rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function Pagination({ currentPage, totalPages, onChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-6">
      <ul className="flex items-center border border-gray-200 rounded-sm overflow-hidden">
        {currentPage > 1 && (
          <li>
            <button
              className="bg-white text-gray-700 font-medium py-2 px-4 hover:bg-gray-100 focus:outline-none"
              onClick={() => onChange(currentPage - 1)}
            >
              &laquo; Prev
            </button>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${
              number === currentPage
                ? "bg-blue-500 text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <button
              className="px-4 py-2 focus:outline-none"
              onClick={() => onChange(number)}
              disabled={number === currentPage}
            >
              {number}
            </button>
          </li>
        ))}

        {currentPage < totalPages && (
          <li>
            <button
              className="bg-white text-gray-700 font-medium py-2 px-4 hover:bg-gray-100 focus:outline-none"
              onClick={() => onChange(currentPage + 1)}
            >
              Next &raquo;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

function ComboOffers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);

  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  useEffect(() => {
    const newProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    setCurrentProducts(newProducts);
  }, [currentPage, indexOfFirstProduct, indexOfLastProduct]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col gap-[50px] pb-[50px]">
      <div className="bg-[white] shadow-md px-[10px] py-[10px]">
        <h1 className="font-mont font-semibold text-[22px] text-center uppercase tracking-wider">
          <span className="bg-gradient-to-r from-red-400 to-red-700 text-transparent bg-clip-text">
            Combo Offers
          </span>
        </h1>
      </div>
      <div className="px-[10px]">
        <ProductList products={currentProducts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ComboOffers;
