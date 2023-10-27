import React, { useEffect, useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyOrder() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(9);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/order/getallsuccessorder`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = data.slice(indexOfFirstOrder, indexOfLastOrder);

  const renderOrders = currentOrders.map((order) => (
    <div
      key={order.id}
      onClick={() => navigate(`/customer-vieworder/${order.checkout_id}`)}
      className="flex justify-between bg-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 duration-500"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-medium">
            {order.franchise_name[0]}
          </span>
        </div>
        <div className="ml-4">
          <h3 className="font-medium text-gray-800">{order.checkout_id}</h3>
          <p className="text-gray-500">{order.franchise_name}</p>
          <p className="text-gray-500 text-[14px]">
            {order.order_time.slice(0, 10)}
          </p>
        </div>
      </div>
      <span
        className={`text-sm font-medium ${
          order.status === "Delivered" ? "text-green-500" : "text-red-500"
        }`}
      >
        {order.status}
      </span>
    </div>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li
      key={number}
      className={`mx-1 flex justify-center items-center h-[25px] w-[25px] rounded-full text-gray-700 cursor-pointer ${
        number === currentPage
          ? "bg-[#ffb94c] text-white"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
      onClick={() => setCurrentPage(number)}
    >
      {number}
    </li>
  ));

  return (
    <div className="p-4 flex flex-col gap-8">
      <header className="bg-white shadow h-[60px] flex items-center p-2">
        <div className="flex gap-[10px] items-center">
          <i className="text-[25px] text-gray-500">
            <MdOutlineDashboardCustomize />
          </i>
          <h1 className="text-xl font-bold text-gray-800 font-mont">
            My Orders
          </h1>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 font-poppins">
        {renderOrders}
      </div>
      {data.length > 0 && (
        <ul className="flex justify-center items-center mt-4 font-mont font-semibold">
          <li className="inline-block mx-1 py-1 px-2 rounded-sm text-gray-700 ">
            <button
              className="bg-gradient-to-t from-gray-800 to-gray-500 rounded-sm text-white px-[5px] hover:bg-gray-500 text-sm cursor-pointer "
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>
          </li>
          {renderPageNumbers}
          <li className="inline-block mx-1 py-1 px-2 rounded-sm text-gray-700 ">
            <button
              className="bg-gradient-to-t from-gray-800 to-gray-500 rounded-sm text-white hover:bg-gray-500 text-sm px-[5px] cursor-pointer"
              disabled={currentPage === pageNumbers.length}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MyOrder;
