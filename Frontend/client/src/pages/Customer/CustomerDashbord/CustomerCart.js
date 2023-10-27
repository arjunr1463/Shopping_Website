import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import PaymentSuccess from "./CustomerPayment";
function CustomerCart() {
  const [success, setSuccess] = useState(false);
  const [invoice, setInvoice] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [cod, setCod] = useState("");
  const handleChange = (e) => {
    if (e.target.checked) {
      setCod(e.target.value);
    } else {
      setCod(null);
    }
  };

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_xgkbYxzYuD1cVM",
      amount: data.amount,
      name: "Grocerz",
      image: "",
      currency: data.currency,
      description: "Make the payment",
      order_id: data.id,
      handler: async (response) => {
        try {
          const token = localStorage.getItem("token");
          const verifyUrl = `http://localhost:5000/api/order/verify`;
          await axios
            .post(verifyUrl, response, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then(() => navigate("/customer-payment"));
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#242424",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");
      if (cod === "cash_on_delivery") {
        await axios
          .post(
            "http://localhost:5000/api/order/payment",
            {
              paymentMethod: cod,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
              fetchInvoice();
            }, 8000);
          });
      } else {
        const { data } = await axios.post(
          "http://localhost:5000/api/order/payment",
          { amount: 999 },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        initPayment(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchInvoice = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:5000/api/order/getallorder", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const filter = res.data.filter((data) => data.status === "Accepted");
        setInvoice(filter);
      });
  };

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:5000/api/user/getsingleuser", {
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
    fetchInvoice();
  }, []);

  const totalAmount = invoice
    .flatMap((data) => {
      const products = data.products;
      return products.map((price) => price.amount);
    })
    .reduce((sum, amount) => sum + amount, 0);

  return (
    <div className="p-4   flex flex-col gap-[30px] font-poppins">
      <header className="bg-white shadow h-[60px] flex items-center p-2">
        <div className=" flex items-center gap-[10px]">
          <i className="text-[25px] text-gray-500">
            <MdOutlineDashboardCustomize />
          </i>
          <h1 className="text-md mob:text-xl font-bold text-gray-800 font-mont">
            Customer Cart
          </h1>
        </div>
      </header>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-md mob:text-xl font-mont font-bold mb-4">
          Invoices
        </h3>

        {invoice.map((invoice) => (
          <div
            key={invoice.id}
            className="flex text-[14px] mob:text-[15px] sm:text-[16px] items-center justify-between border-b py-3"
          >
            <div>
              <span className="font-bold">Invoice #{invoice.checkout_id}</span>
              <p className="text-gray-600 text-sm">
                Date: {invoice.order_time.slice(0, 10)}
              </p>
            </div>
            <div>
              <Link
                to={`/customer-viewinvoice/${invoice.checkout_id}`}
                className="bg-[#ffb647] text-white font-mont font-bold py-[3px] px-3 rounded-sm"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-md mob:text-xl font-mont font-bold mb-4">
          Make Payment
        </h3>

        <div className="mb-4 text-[14px] mob:text-[15px] sm:text-[16px]">
          <p className="text-sm font-medium text-gray-700">Delivery Address:</p>
          <p className="text-gray-600">{data.address}</p>
          <p className="text-gray-600">{data.pincode}</p>
          <p className="text-gray-600">{data.mobile_number}</p>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">Total Amount:</p>
          <p className="text-xl font-mont font-bold">RS {totalAmount}/-</p>
        </div>
        {invoice[0] ? (
          <div className="flex flex-col lg:flex-row gap-[15px] lg:items-center">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                value="cash_on_delivery"
                id="cod"
                onChange={handleChange}
                className="h-[20px] w-[20px]"
              />
              <label
                htmlFor="cod"
                className="text-[16px] cursor-pointer font-mont"
              >
                Cash on Delivery
              </label>
            </div>
            <button
              onClick={handlePayment}
              className="bg-[#ffb647]  font-mont text-white font-bold py-2 px-4 rounded"
            >
              Proceed to Payment
            </button>
            {success ? <PaymentSuccess /> : ""}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CustomerCart;
