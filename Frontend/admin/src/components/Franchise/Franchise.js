import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillFileText } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { BiSort, BiEdit } from "react-icons/bi";

function Franchise() {
  const [tableData, setTableData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showEntries, setShowEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastData = currentPage * showEntries;
  const indexOfFirstData = indexOfLastData - showEntries;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/franchise/getallfranchise`
        );
        setTableData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

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
    <div className="flex flex-col gap-[20px] text-[14px] w-full h-full px-[10px] py-[10px]">
      <div className="flex flex-col gap-[15px] p-4 bg-white  shadow-lg ">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">All Franchise</span>
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
        <div className="overflow-x-scroll w-full">
          <table className="w-full">
            <thead className="border-[1px] font-mont text-gray-600">
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
                <th className="border-[1px] ">
                  <div className="flex px-[10px] items-center gap-[10px]">
                    <span>Name</span>
                    <i
                      onClick={() => handleSort("name")}
                      className="text-[14px] cursor-pointer"
                    >
                      <BiSort />
                    </i>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-[10px]">
                  <div className="flex px-[10px] items-center gap-[10px]">
                    <span>Phone</span>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-[10px]">
                  <div className="flex px-[10px] items-center gap-[10px]">
                    <span>State</span>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-[10px]">
                  <div className="flex px-[10px] items-center gap-[10px]">
                    <span>District</span>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-[10px]">
                  <div className="flex px-[10px] items-center gap-[10px]">
                    <span>Email</span>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-[10px]">
                  <div className="flex px-[10px] items-center w-[180px] gap-[10px]">
                    <span>Agreement status</span>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-[10px]">
                  <div className="flex px-[10px] items-center gap-[10px]">
                    <span>Status</span>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-[10px]">
                  <div className="flex px-[10px] items-center w-[150px] gap-[10px]">
                    <span>Options</span>
                  </div>
                </th>
                <th className="border-[1px] px-[20px] lg:px-[10px]">
                  <div className="flex px-[10px] items-center w-[180px] gap-[10px]">
                    <span>Action</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="border-[1px] text-center font-poppins text-[15px] text-gray-500">
              {paginatedData.map((data, index) => (
                <tr key={index}>
                  <td className="border-[1px] py-[13px] ">
                    {index + (currentPage - 1) * showEntries + 1}
                  </td>
                  <td className="border-[1px] ">{data.franchisename}</td>
                  <td className="border-[1px] ">{data.mobilenumber}</td>
                  <td className="border-[1px]  ">{data.state}</td>
                  <td className="border-[1px] ">{data.district}</td>
                  <td className="border-[1px] ">{data.emailid}</td>
                  <td className="border-[1px] ">uploaded</td>
                  <td className="border-[1px] ">
                    <div>
                      <button className="bg-[#fc5b62] text-white rounded-md w-[100px] h-[30px]">
                        {data.status}
                      </button>
                    </div>
                  </td>
                  <td className="border-[1px] ">
                    <div className="flex px-[10px] gap-[10px]">
                      <span>View |</span>

                      <span>Order</span>
                    </div>
                  </td>
                  <td className="border-[1px] ">
                    <div className="flex px-[10px] gap-[10px]">
                      <div className="flex items-center">
                        <i>
                          <BiEdit />
                        </i>
                        <span>Edit |</span>
                      </div>
                      <div className="flex items-center">
                        <i>
                          <MdOutlineDelete />
                        </i>
                        <span>Delete</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <thead className="border-[1px] text-gray-600 font-mont">
              <tr>
                <th className="border-[1px] py-[10px]">No</th>
                <th className="border-[1px] px-[30px] lg:px-[10px]">Name</th>
                <th className="border-[1px] px-[30px] lg:px-[10px]">Phone</th>
                <th className="border-[1px] px-[30px] lg:px-[10px]">State</th>
                <th className="border-[1px] px-[30px] lg:px-[10px]">
                  District
                </th>
                <th className="border-[1px] px-[30px] lg:px-[10px]">Email</th>
                <th className="border-[1px] px-[30px] lg:px-[10px]">
                  Agreement status
                </th>
                <th className="border-[1px] px-[30px] lg:px-[10px]">Status</th>
                <th className="border-[1px] px-[30px] lg:px-[10px]">Options</th>
                <th className="border-[1px] px-[30px] lg:px-[10px]">Action</th>
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

export default Franchise;
