import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function ViewCart() {
  const [tableData, setTableData] = useState("");
  const [total, setTotal] = useState("");
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    axios.get(`http://localhost:5000/api/order/getorder/${id}`).then((res) => {
      const products = res.data[0].products.filter(
        (data) => data.status === "Available"
      );
      setTableData(products);
      
      calculateTotalAmount(products);
    });
  }, [id]);

  const calculateTotalAmount = (products) => {
    const totalAmount = products.reduce((acc, product) => {
      return (
        acc +
        (product.amount
          ? parseFloat(product.amount)
          : product.price
          ? parseFloat(product.price)
          : 0)
      );
    }, 0);
    setTotal(totalAmount);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (product_id) => {
    await axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/order/deleteproducts/${id}/${product_id}`
      )
      .then((res) => {
        fetchData();
        console.log(res.data);
      });
  };

  return (
    <div className="p-4 flex flex-col gap-[30px] font-poppins">
      <header className="bg-white shadow h-[60px] flex items-center p-2">
        <div className=" flex items-center gap-[10px]">
          <i className="text-[25px] text-gray-500">
            <MdOutlineDashboardCustomize />
          </i>
          <h1 className="text-xl font-bold text-gray-800 font-mont">
            View Invoice
          </h1>
        </div>
      </header>
      <div className="flex flex-col mx-2 gap-[20px] bg-white shadow-lg px-[10px] lg:px-[30px] py-[20px] ">
        <div className="overflow-x-scroll ">
          <table className="border-collapse w-full text-center font-poppins text-[15px] text-gray-500">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">No.</th>
                <th className="border px-4 py-2">Product</th>
                <th className="border px-4 py-2">Weight</th>
                <th className="border px-4 py-2">Unit</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Offer</th>
                <th className="border px-4 py-2">Amount</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            {tableData.length > 0 ? (
              <tbody>
                {tableData.map((data, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">
                      <div className="w-[140px]">
                        <span>{data.product}</span>
                      </div>
                    </td>
                    <td className="border px-4 py-2">
                      <div className="w-[60px] px-2">
                        <span>{data.weight}</span>
                      </div>
                    </td>
                    <td className="border px-4 py-2">
                      <div className="w-[80px] px-2">
                        <span>{data.unit}</span>
                      </div>
                    </td>
                    <td className="border px-4 py-2">
                      <div className="w-[40px] px-2">
                        <span>{data.quantity}</span>
                      </div>
                    </td>
                    <td className="border px-4 py-2">
                      <div className=" w-[80px] px-2">
                        <span>{data.price}</span>
                      </div>
                    </td>
                    <td className="border px-2 py-2">
                      <div className="w-[80px] px-2">
                        <span>{data.offer}%</span>
                      </div>
                    </td>
                    <td className="border px-2 py-2">
                      {data.amount ? data.amount : data.price}
                    </td>
                    <td className="border px-4 py-2">
                      <div className="flex gap-[20px]">
                        <button
                          onClick={() => handleDelete(data.product_id)}
                          className="bg-[#f22928] text-white font-mont font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2" colSpan="2">
                    <strong>Bill Discount(%): </strong>
                  </td>
                  <td className="border px-4 py-2" colSpan="2">
                    <strong>0</strong>
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2" colSpan="2">
                    <strong>Total Amount: </strong>
                  </td>
                  <td className="border px-4 py-2" colSpan="2">
                    <strong>Rs {total}/-</strong>
                  </td>
                </tr>
              </tbody>
            ) : (
              ""
            )}
          </table>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-[#f22928] text-white font-mont px-[10px] rounded-sm py-[3px] font-semibold">
          Cancel Order
        </button>
      </div>
    </div>
  );
}

export default ViewCart;
