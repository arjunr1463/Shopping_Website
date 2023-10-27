import React, { useState, useEffect } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";

function InpreparationOrders() {
  const [tableData, setTableData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showEntries, setShowEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastData = currentPage * showEntries;
  const indexOfFirstData = indexOfLastData - showEntries;

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/order/getallorderFranchise", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const filter = res.data.filter(
          (data) => data.status === "In preparation"
        );
        setTableData(filter);
        console.log(filter);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };

  const handleShowEntries = (e) => {
    setShowEntries(Number(e.target.value));
    setCurrentPage(1);
  };
  const handlePagination = (type, pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(tableData.length / showEntries)
    ) {
      setCurrentPage(pageNumber);
    } else if (type === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (
      type === "next" &&
      currentPage < Math.ceil(tableData.length / showEntries)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredData = tableData
    ? tableData.filter((data) => {
        const searchRegex = new RegExp(searchTerm, "i");
        return (
          searchRegex.test(data.checkoutId) ||
          searchRegex.test(data.customer_name)
        );
      })
    : "";
  const sortedData = sortColumn
    ? filteredData.slice().sort((a, b) => {
        const order = sortOrder === "asc" ? 1 : -1;
        return a[sortColumn] < b[sortColumn] ? -order : order;
      })
    : filteredData;
  const paginatedData = sortedData.slice(
    (currentPage - 1) * showEntries,
    currentPage * showEntries
  );
  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex gap-[10px] items-center text-[#2ad5b1] bg-white shadow-lg px-[15px] py-[10px] text-[15px] font-poppins">
        <i>
          <BsGrid3X3GapFill />
        </i>
        <span className="text-[#3d8879]">Orders</span>
        <i>
          <AiOutlineRight />
        </i>
        <span className="text-[#3d8879]">Inpreparation orders</span>
      </div>
      <div className="mx-[10px] sm:mx-[20px] flex flex-col gap-[10px]">
        <h className="font-mont font-semibold text-[22px]">
          Inpreparation orders
        </h>
        <div className="flex flex-col gap-[20px] bg-white shadow-lg px-[10px] lg:px-[30px] py-[20px] ">
          <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-0 lg:justify-between  ">
            <select
              value={showEntries}
              onChange={handleShowEntries}
              className="border-[1px] py-[5px] px-[10px] text-gray-600 font-mont text-[14px] outline-none shadow-sm"
            >
              <option value={10}>Show 10 entries</option>
              <option value={25}>Show 25 entries</option>
              <option value={50}>Show 50 entries</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="border-[1px] py-[5px] outline-none px-[10px] font-poppins shadow-sm"
            />
          </div>
          <div className="overflow-x-scroll ">
            <table className="border-[1px] text-center font-poppins text-[15px] text-gray-500">
              <thead>
                <tr>
                  <th
                    className="border-[1px] py-[10px]"
                    onClick={() => handleSort("id")}
                  >
                    <div className="flex items-center cursor-pointer">
                      <span>No.</span>
                      <i className="text-[12px] text-gray-400">
                        <BiSort />
                      </i>
                    </div>
                  </th>
                  <th className="border-[1px]" onClick={() => handleSort("id")}>
                    <div className="flex items-center w-[120px] xl:w-auto cursor-pointer">
                      <span>Checkout ID</span>
                      <i className="text-[12px] text-gray-400">
                        <BiSort />
                      </i>
                    </div>
                  </th>
                  <th className="border-[1px]" onClick={() => handleSort("id")}>
                    <div className="flex items-center cursor-pointer w-[140px] xl:w-auto">
                      <span>Customer Name</span>
                      <i className="text-[12px] text-gray-400">
                        <BiSort />
                      </i>
                    </div>
                  </th>
                  <th className="border-[1px]" onClick={() => handleSort("id")}>
                    <div className="flex items-center w-[130px] xl:w-auto cursor-pointer">
                      <span>Phone Number</span>
                      <i className="text-[12px] text-gray-400">
                        <BiSort />
                      </i>
                    </div>
                  </th>
                  <th className="border-[1px]">
                    <div className="flex items-center cursor-pointer w-[130px] xl:w-auto">
                      <span>Current Status</span>
                      <i className="text-[12px] text-gray-400">
                        <BiSort />
                      </i>
                    </div>
                  </th>
                  <th className="border-[1px]">
                    <div className="w-[100px] xl:w-auto">View Order</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData
                  ? paginatedData.map((data, index) => (
                      <tr key={index}>
                        <td className="border-[1px] py-[10px]">
                          {index + (currentPage - 1) * showEntries + 1}
                        </td>
                        <td className="border-[1px]">{data.checkout_id}</td>
                        <td className="border-[1px]">{data.customer_name}</td>
                        <td className="border-[1px]">{data.customer_mobile}</td>
                        <td className="border-[1px]">{data.status}</td>
                        <td className="border-[1px] text-[#189279]">
                          <Link
                            to={`/franchise-inpreparationconfirm/${data.checkout_id}`}
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
              <thead>
                <tr>
                  <th className="border-[1px] py-[10px]">No.</th>
                  <th className="border-[1px]">Checkout ID</th>
                  <th className="border-[1px]">Customer Name</th>
                  <th className="border-[1px]">Phone Number</th>
                  <th className="border-[1px]">Current Status</th>
                  <th className="border-[1px]">View Order</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-[15px] lg:justify-between text-[14px] lg:text-[16px] ">
            <div className="font-poppins">
              Showing {indexOfFirstData + 1} to{" "}
              {indexOfLastData > tableData.length
                ? tableData.length
                : indexOfLastData}{" "}
              of {tableData.length} entries
            </div>
            <div className="flex gap-[10px] font-poppins border-[1px] shadow-sm border-gray-300 rounded-sm text-[#189279]">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePagination("prev")}
                className="cursor-pointer border-r-[1px] border-gray-300 text-[#189279] px-4 py-[3px] hover:bg-[#189279] hover:text-white transition-colors duration-300"
              >
                Previous
              </button>
              {Array.from(
                { length: Math.ceil(tableData.length / showEntries) },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePagination("page", i + 1)}
                    className={`cursor-pointer ${
                      i + 1 === currentPage
                        ? "bg-[#189279] text-white border-r-[1px]"
                        : "text-[#189279] hover:bg-[#189279] hover:text-white"
                    } px-3 py-[3px] ml-[-10px] border-r-[1px] transition-colors duration-300`}
                  >
                    {i + 1}
                  </button>
                )
              )}
              <button
                disabled={
                  currentPage === Math.ceil(tableData.length / showEntries)
                }
                onClick={() => handlePagination("next")}
                className="cursor-pointer text-[#189279] px-4 py-[3px] ml-[-10px] hover:bg-[#189279] hover:text-white transition-colors duration-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InpreparationOrders;
