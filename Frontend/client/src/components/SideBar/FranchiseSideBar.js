import React, { useState, useContext } from "react";
import { FaBriefcase, FaHome, FaRegMoneyBillAlt } from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import { RiSideBarFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { AiFillGift } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import "./sidebar.css"

function FranchiseSideBar() {
  const [product, setProduct] = useState(false);
  const [allorders, setAllorders] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [users, setUsers] = useState(false);
  const [offer, setOffer] = useState(false);
  const [payment, setPayment] = useState(false);
  const { action, hover, handleMouseleave, handleMouseenter } =
    useContext(MainContext);

  const handleProduct = () => {
    setProduct(!product);
    setUsers(false);
    setAllorders(false);
    setInvoice(false);
    setOffer(false);
    setPayment(false);
  };
  const handleOrders = () => {
    setAllorders(!allorders);
    setProduct(false);
    setInvoice(false);
    setOffer(false);
    setPayment(false);
    setUsers(false);
  };
  const handleUsers = () => {
    setUsers(!users);
    setProduct(false);
    setAllorders(false);
    setInvoice(false);
    setOffer(false);
    setPayment(false);
  };
  const handleInvoice = () => {
    setInvoice(!invoice);
    setProduct(false);
    setAllorders(false);
    setOffer(false);
    setPayment(false);
    setUsers(false);
  };
  const handleOffer = () => {
    setOffer(!offer);
    setProduct(false);
    setInvoice(false);
    setAllorders(false);
    setPayment(false);
    setUsers(false);
  };
  const handlePayment = () => {
    setPayment(!payment);
    setProduct(false);
    setInvoice(false);
    setOffer(false);
    setAllorders(false);
    setUsers(false);
  };

  return (
    <>
      <div className="bg-[#202020] w-[260px] text-[13px] xl:text-[15px] flex flex-col  gap-[15px]">
        <div  className="  text-gray-100 flex flex-col h-[86vh] overflow-scroll hidescrollbar ">
          <div className="flex-grow py-2 px-2 ">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/franchise/dashboard"
                  className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-[#161616]"
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
                        to="/franchise/allproducts"
                        className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                      >
                        All products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/franchise/newproduct"
                        className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                      >
                        New Product
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
                        to="/franchise/pendingorders"
                        className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                      >
                        Pending orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/franchise/acceptedorders"
                        className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                      >
                        Accepted orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/franchise/inpreparationorders"
                        className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                      >
                        In preparation orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/franchise/shippedorders"
                        className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                      >
                        Shipped orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/franchise/completedorders"
                        className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                      >
                        Completed orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/franchise/rejectedorders"
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
                        to="/franchise/combooffers"
                        className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                      >
                        combo offers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/franchise/newcombooffer"
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
                        to="/franchise/allinvoice"
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
                        to="/franchise/pendingpayments"
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

      {/* <div
        className={
          action
            ? "hidden"
            : hover
            ? "bg-[#202020] w-[260px] text-[13px] xl:text-[15px] flex flex-col  gap-[15px]"
            : "bg-[#202020] w-auto text-[13px] xl:text-[15px] flex flex-col  gap-[15px]"
        }
        onMouseEnter={handleMouseenter}
        onMouseLeave={handleMouseleave}
      >
        {hover ? (
          <div className="bg-[#202020] inset-0 text-[13px] xl:text-[15px] flex flex-col  gap-[15px]">
            <div className="  text-gray-100 flex flex-col h-[86vh] overflow-scroll ">
              <div className="flex-grow py-2 px-2 ">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/franchise-dashboard"
                      className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-[#161616]"
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
                            className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                          >
                            All products
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/franchise-ourpricechart"
                            className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                          >
                            Our price chart
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/franchise-requestproduct"
                            className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                          >
                            Request Product
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/franchise-requestdeliverylocation"
                            className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                          >
                            Request delivery location
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/franchise-ourdeliverylocation"
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
                            className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                          >
                            Pending orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/franchise-acceptedorders"
                            className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                          >
                            Accepted orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/franchise-inpreparationorders"
                            className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                          >
                            In preparation orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/franchise-shippedorders"
                            className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                          >
                            Shipped orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/franchise-completedorders"
                            className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                          >
                            Completed orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/franchise-rejectedorders"
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
                            className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                          >
                            combo offers
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/franchise-newcombooffer"
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
                            className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                          >
                            Normal users
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/franchise-primaryuser"
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
                        <FaRegMoneyBillAlt className="xl:text-[17px]" />{" "}
                        Payments
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
        ) : (
          <div className=" border-b-[1px] border-gray-500 text-gray-100 flex flex-col h-[86vh] overflow-scroll ">
            <div className="flex-grow py-2 px-2 ">
              <ul className="space-y-[14px]">
                <li>
                  <Link
                    to="/franchise-dashboard"
                    className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-[#161616]"
                  >
                    <FaHome className="xl:text-[17px]" />
                  </Link>
                </li>
                <li>
                  <div
                    onClick={handleProduct}
                    className="flex cursor-pointer items-center justify-between rounded-md hover:bg-[#161616]"
                  >
                    <Link className=" py-2.5 px-2 flex items-center gap-[8px] font-mont ">
                      <BsGrid1X2Fill className="xl:text-[17px]" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div
                    onClick={handleOrders}
                    className="flex items-center cursor-pointer justify-between rounded-md hover:bg-[#161616]"
                  >
                    <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont ">
                      <FaBriefcase className="xl:text-[17px]" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div
                    onClick={handleOffer}
                    className="flex items-center cursor-pointer justify-between rounded-md hover:bg-[#161616]"
                  >
                    <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-[#161616]">
                      <AiFillGift className="xl:text-[17px]" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div
                    onClick={handleUsers}
                    className="flex items-center cursor-pointer justify-between rounded-md hover:bg-[#161616]"
                  >
                    <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-[#161616]">
                      <FaUserFriends className="xl:text-[17px]" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div
                    onClick={handleInvoice}
                    className="flex items-center cursor-pointer justify-between rounded-md hover:bg-[#161616]"
                  >
                    <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont ">
                      <RiSideBarFill className="xl:text-[17px] text-white" />{" "}
                    </Link>
                  </div>
                </li>

                <li>
                  <div
                    onClick={handlePayment}
                    className="flex items-center cursor-pointer justify-between rounded-md hover:bg-[#161616]"
                  >
                    <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-[#161616]">
                      <FaRegMoneyBillAlt className="xl:text-[17px]" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )} */}
      {/* </div> */}
    </>
  );
}

export default FranchiseSideBar;
