import React, { useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { BiSort } from "react-icons/bi";

function Invoices() {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      invoiceid: "GRZ-10",
      orderid: "ORD-10",
      checkoutid: "GR87999",
      date: "2021-09-01 14:27:27",
      status: "active",
    },
    {
      id: 1,
      invoiceid: "GRZ-10",
      orderid: "ORD-10",
      checkoutid: "GR87999",
      date: "2021-09-01 14:27:27",
      status: "active",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showEntries, setShowEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastData = currentPage * showEntries;
  const indexOfFirstData = indexOfLastData - showEntries;

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
  console.log(setTableData);
  const handlePagination = (type) => {
    if (type === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (
      type === "next" &&
      currentPage < Math.ceil(tableData.length / showEntries)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredData = tableData.filter((data) => {
    const searchRegex = new RegExp(searchTerm, "i");
    return searchRegex.test(data.state);
  });
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
    <div className="flex flex-col gap-[20px] w-full h-full px-[10px] py-[10px] text-[14px]">
      <div className="bg-[#e9ecef] py-[10px] px-[10px] text-[15px] font-mont font-semibold flex flex-row gap-[10px]"></div>
      <div className="flex flex-col gap-[15px] p-4 bg-white  shadow-lg">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">All Invoice</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-0 lg:justify-between ">
          <select
            value={showEntries}
            onChange={handleShowEntries}
            className="border-[1px] py-[5px] px-[10px] text-gray-600 font-mont text-[14px] outline-none"
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
            className="border-[1px] py-[5px] outline-none px-[10px] font-poppins"
          />
        </div>
        <div className="overflow-x-scroll ">
          <table className="w-full">
            <thead className="border-[1px] font-mont text-gray-600">
              <tr>
                <th className="border-[1px] py-[10px] px-[20px] lg:px-0">
                  <div className="flex justify-center items-center gap-[10px]">
                    <span>SI No</span>
                    <i
                      onClick={() => handleSort("id")}
                      className="text-[14px] cursor-pointer"
                    >
                      <BiSort />
                    </i>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-0">
                  <div className="flex justify-center items-center gap-[10px]">
                    <span>Invoice ID</span>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-0">
                  <div className="flex justify-center items-center gap-[10px]">
                    <span>Order ID</span>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-0">
                  <div className="flex justify-center items-center gap-[10px]">
                    <span>Checkout ID</span>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-0">
                  <div className="flex justify-center items-center gap-[10px]">
                    <span>Date</span>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-0">
                  <div className="flex justify-center items-center gap-[10px]">
                    <span>Status</span>
                  </div>
                </th>
                <th className="border-[1px] px-[30px] lg:px-0">Action</th>
              </tr>
            </thead>
            <tbody className="border-[1px] text-center font-poppins text-[15px] text-gray-500">
              {paginatedData.map((data, index) => (
                <tr key={index}>
                  <td className="border-[1px] py-[13px] ">
                    {index + (currentPage - 1) * showEntries + 1}
                  </td>
                  <td className="border-[1px] ">{data.invoiceid}</td>
                  <td className="border-[1px] ">{data.orderid}</td>
                  <td className="border-[1px] ">{data.checkoutid}</td>
                  <td className="border-[1px] ">{data.date}</td>
                  <td className="border-[1px] ">{data.status}</td>
                  <td className="border-[1px] ">
                    <div>
                      <button className="text-[#345fa7] ">View</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <thead className="border-[1px] text-gray-600 font-mont">
              <tr>
                <th className="border-[1px] py-[10px]">SI No</th>
                <th className="border-[1px] py-[10px]">Invoice ID</th>
                <th className="border-[1px] py-[10px]">Order ID</th>
                <th className="border-[1px]">Checkout ID</th>
                <th className="border-[1px]">Date</th>
                <th className="border-[1px]">Status</th>
                <th className="border-[1px]">Action</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[15px] lg:justify-between text-[14px] lg:text-[16px] ">
          <div className="font-poppins ">
            Showing {indexOfFirstData + 1} to{" "}
            {indexOfLastData > tableData.length
              ? tableData.length
              : indexOfLastData}{" "}
            of {tableData.length} entries
          </div>
          <div className="flex gap-[10px] font-mont">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePagination("prev")}
              className="cursor-pointer"
            >
              Previous
            </button>
            <button
              disabled={
                currentPage === Math.ceil(tableData.length / showEntries)
              }
              onClick={() => handlePagination("next")}
              className="cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoices;
