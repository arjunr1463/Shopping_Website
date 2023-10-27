import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillFileText } from "react-icons/ai";
import { BiSort } from "react-icons/bi";

function Customers() {
  const [tableData, setTableData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showEntries, setShowEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };

  console.log(setSearchTerm);
  console.log(setTableData);
  console.log(setShowEntries);

  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/getalluser`)
      .then((res) => {
        setTableData(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className="flex items-center gap-[10px] border-b-[1px]">
        <i className="text-gray-300 text-[25px]">
          <AiFillFileText />
        </i>
        <span className="font-poppins text-[22px]">All Customers</span>
      </div>

      <div className="overflow-x-scroll ">
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
                <div className="flex px-[10px] w-[100px] items-center gap-[10px]">
                  <span>General ID</span>
                </div>
              </th>
              <th className="border-[1px] ">
                <div className="flex px-[10px] items-center gap-[10px]">
                  <span>Full Name</span>
                  <i
                    onClick={() => handleSort("fullname")}
                    className="text-[14px] cursor-pointer"
                  >
                    <BiSort />
                  </i>
                </div>
              </th>
              <th className="border-[1px] ">
                <div className="flex px-[10px] w-[140px] items-center gap-[10px]">
                  <span>Phone Number</span>
                </div>
              </th>
              <th className="border-[1px] ">
                <div className="flex px-[10px] items-center gap-[10px]">
                  <span>Email ID</span>
                </div>
              </th>
              <th className="border-[1px] ">
                <div className="flex px-[10px] items-center gap-[10px]">
                  <span>Status</span>
                </div>
              </th>
              <th className="border-[1px] ">
                <div className="flex px-[10px] items-center gap-[10px]">
                  <span>View</span>
                </div>
              </th>
              <th className="border-[1px] ">
                <div className="flex px-[10px] w-[140px] items-center gap-[10px]">
                  <span>View Order</span>
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
                <td className="border-[1px] ">{data.generalid}</td>
                <td className="border-[1px] ">{data.fullname}</td>
                <td className="border-[1px] ">{data.mobile_number}</td>
                <td className="border-[1px] ">{data.email_id}</td>
                <td className="border-[1px] ">
                  <div>{data.status}</div>
                </td>
                <td className="border-[1px] ">
                  <div className="flex justify-center font-semibold font-mont gap-[10px]">
                    <button className="text-[#345fa7]">View</button>
                  </div>
                </td>
                <td className="border-[1px] ">
                  <div className="flex justify-center gap-[10px] font-semibold font-mont">
                    <button className="text-[#345fa7]">View Order</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <thead className="border-[1px] text-gray-600 font-mont">
            <tr>
              <th className="border-[1px] py-[10px]">No</th>
              <th className="border-[1px]">General ID</th>
              <th className="border-[1px]">Full Name</th>
              <th className="border-[1px]">Phone Number</th>
              <th className="border-[1px]">Email ID</th>
              <th className="border-[1px]">Status</th>
              <th className="border-[1px]">View</th>
              <th className="border-[1px]">View Order</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Customers;
