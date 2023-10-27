import React, { useState } from "react";
import {
  FaBriefcase,
  FaUserFriends,
  FaHome,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import { RiSideBarFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { AiFillGift } from "react-icons/ai";
import { Link } from "react-router-dom";

function Menu({ menu }) {
  const [product, setProduct] = useState(false);
  const [allorders, setAllorders] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [users, setUsers] = useState(false);
  const [offer, setOffer] = useState(false);
  const [payment, setPayment] = useState(false);

  const handleProduct = () => {
    setProduct(!product);
  };
  const handleOrders = () => {
    setAllorders(!allorders);
  };
  const handleUsers = () => {
    setUsers(!users);
  };
  const handleInvoice = () => {
    setInvoice(!invoice);
  };
  const handleOffer = () => {
    setOffer(!offer);
  };
  const handlePayment = () => {
    setPayment(!payment);
  };

  return (
    <div className="bg-[#202020] w-full text-[13px] xl:text-[15px] flex flex-col  gap-[15px]">
      <div className="  text-gray-100 flex flex-col h-screen ">
        <div className="flex-grow py-2 px-2 ">
          <ul className="space-y-2">
            <li>
              <Link
                to="/franchise-dashboard"
                className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-[#161616]"
                onClick={() => menu(false)}
              >
                <FaHome className="xl:text-[17px]" /> Dashboard
              </Link>
            </li>
            <li>
              <div
                onClick={handleProduct}
                className="flex cursor-pointer items-center justify-between rounded-md hover:bg-[#161616]"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] font-mont ">
                  <BsGrid1X2Fill className="xl:text-[17px]" /> Products
                </Link>
                <span className="text-[12px]">
                  {product ? <RiSubtractFill /> : <IoMdAdd />}
                </span>
              </div>
              {product && (
                <div className="bg-[#161616] px-[20px] text-[13px]">
                  <li>
                    <Link
                      to="/franchise-allproducts"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      All products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/franchise-ourpricechart"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Our price chart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/franchise-requestproduct"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Request Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/franchise-requestdeliverylocation"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Request delivery location
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/franchise-ourdeliverylocation"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Our delivery location
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li>
              <div
                onClick={handleOrders}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-[#161616]"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont ">
                  <FaBriefcase className="xl:text-[17px]" /> All Orders
                </Link>
                <span className="text-[12px]">
                  {allorders ? <RiSubtractFill /> : <IoMdAdd />}
                </span>
              </div>
              {allorders && (
                <div className="bg-[#161616] px-[20px] text-[13px]">
                  <li>
                    <Link
                      to="/franchise-pendingorders"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Pending orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/franchise-acceptedorders"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Accepted orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/franchise-inpreparationorders"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      In preparation orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/franchise-shippedorders"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Shipped orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/franchise-completedorders"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Completed orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/franchise-rejectedorders"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Rejected orders
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li>
              <div
                onClick={handleOffer}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-[#161616]"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-[#161616]">
                  <AiFillGift className="xl:text-[17px]" /> Combo Offers
                </Link>
                <span className="text-[12px]">
                  {offer ? <RiSubtractFill /> : <IoMdAdd />}
                </span>
              </div>
              {offer && (
                <div className="bg-[#161616] px-[20px] text-[13px]">
                  <li>
                    <Link
                      to="/franchise-combooffers"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      combo offers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/franchise-newcombooffer"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      New combo offers
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li>
              <div
                onClick={handleUsers}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-[#161616]"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-[#161616]">
                  <FaUserFriends className="xl:text-[17px]" /> Users
                </Link>
                <span className="text-[12px]">
                  {users ? <RiSubtractFill /> : <IoMdAdd />}
                </span>
              </div>
              {users && (
                <div className="bg-[#161616] px-[20px] text-[13px]">
                  <li>
                    <Link
                      to="/franchise-normaluser"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Normal users
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/franchise-primaryuser"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Primary users
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li>
              <div
                onClick={handleInvoice}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-[#161616]"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont ">
                  <RiSideBarFill className="xl:text-[17px] text-white" />{" "}
                  Invoice
                </Link>
                <span className="text-[12px]">
                  {invoice ? <RiSubtractFill /> : <IoMdAdd />}
                </span>
              </div>
              {invoice && (
                <div className="bg-[#161616] px-[20px] text-[13px]">
                  <li>
                    <Link
                      to="/franchise-allinvoice"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      All invoice
                    </Link>
                  </li>
                </div>
              )}
            </li>

            <li>
              <div
                onClick={handlePayment}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-[#161616]"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-[#161616]">
                  <FaRegMoneyBillAlt className="xl:text-[17px]" /> Payments
                </Link>
                <span className="text-[12px]">
                  {payment ? <RiSubtractFill /> : <IoMdAdd />}
                </span>
              </div>
              {payment && (
                <div className="bg-[#161616] px-[20px] text-[13px]">
                  <li>
                    <Link
                      to="/franchise-pendingpayments"
                      onClick={() => menu(false)}
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Pending payment
                    </Link>
                  </li>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
