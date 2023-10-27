import React, { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { FaBriefcase, FaUserFriends, FaFileInvoice } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import {
  AiFillDashboard,
  AiFillDollarCircle,
  AiFillSetting,
  AiFillGift,
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineDown,
} from "react-icons/ai";
import { SiHackthebox } from "react-icons/si";
import { Link } from "react-router-dom";

function SideBar() {
  const [setting, setSetting] = useState(false);
  const [franchise, setFranchise] = useState(false);
  const [product, setProduct] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [offer, setOffer] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [orders, SetOrders] = useState(false);
  const [advertisement, setAdvertisement] = useState(false);
  const [content, setContent] = useState(false);

  const handleSetting = () => {
    setSetting(!setting);
  };
  const handleFranchise = () => {
    setFranchise(!franchise);
  };
  const handleProduct = () => {
    setProduct(!product);
  };
  const handleDiscount = () => {
    setDiscount(!discount);
  };
  const handleOffer = () => {
    setOffer(!offer);
  };
  const handleCustomer = () => {
    setCustomer(!customer);
  };
  const handleOrders = () => {
    SetOrders(!orders);
  };
  const handleAdvertisement = () => {
    setAdvertisement(!advertisement);
  };
  const handleContent = () => {
    setContent(!content);
  };

  return (
    <div className="bg-[#212529] w-[300px] text-[14px] xl:text-[15px] flex flex-col  gap-[15px]">
      <div className=" border-b-[1px] border-gray-500 text-gray-100 flex flex-col h-[86vh] overflow-scroll ">
        <div className="flex-grow py-2 px-2 ">
          <ul className="space-y-2">
            <li>
              <Link to="/" className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-gray-900">
                <MdDashboard className="xl:text-[17px]" /> Dashboard
              </Link>
            </li>
            <li>
              <div
                onClick={handleSetting}
                className="flex cursor-pointer items-center justify-between rounded-md hover:bg-gray-900"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] font-mont ">
                  <AiFillSetting className="xl:text-[17px]" /> Settings
                </Link>
                <span className="text-[12px]">
                  {setting ? <AiOutlineDown /> : <AiOutlineRight />}
                </span>
              </div>
              {setting && (
                <div className="bg-gray-700 px-[30px] text-[14px]">
                  <li>
                    <Link
                      to="/admin/websitesettings"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Website settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/paymentsettings"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Payment settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/deliverychargesettings"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Delivery charge settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/state"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      State
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/district"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      District
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li>
              <div
                onClick={handleFranchise}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-gray-900"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont ">
                  <FaBriefcase className="xl:text-[17px]" /> Manage Franchise
                </Link>
                <span className="text-[12px]">
                  {franchise ? <AiOutlineDown /> : <AiOutlineRight />}
                </span>
              </div>
              {franchise && (
                <div className="bg-gray-700 px-[30px] text-[14px]">
                  <li>
                    <Link
                      to="/admin/franchise"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Franchise
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/newfranchise"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      New Franchise
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/newdeliverylocation"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      New delivery location
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/deliverylocationrequest"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Delivery location request
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/deliverylocation"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Delivery locations
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/deliverylocationdelete"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Delivery location delete request
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Invoice
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li>
              <Link to="/admin/updatedprice" className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-gray-900">
                <AiFillDollarCircle className="xl:text-[17px]" /> Updated Price
              </Link>
            </li>
            <li>
              <div
                onClick={handleProduct}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-gray-900"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-gray-900">
                  <SiHackthebox className="xl:text-[17px]" /> Manage Product
                </Link>
                <span className="text-[12px]">
                  {product ? <AiOutlineDown /> : <AiOutlineRight />}
                </span>
              </div>
              {product && (
                <div className="bg-gray-700 px-[30px] text-[14px]">
                  <li>
                    <Link
                      to="/admin/products"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/newproducts"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      New Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/newcategory"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      New Category
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/newsubcategory"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      New Subcategory
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/productrequest"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Product Request
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li>
              <div
                onClick={handleDiscount}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-gray-900"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont ">
                  <AiFillGift className="xl:text-[17px]" /> Manage Discount
                </Link>
                <span className="text-[12px]">
                  {discount ? <AiOutlineDown /> : <AiOutlineRight />}
                </span>
              </div>
              {discount && (
                <div className="bg-gray-700 px-[30px] text-[14px]">
                  <li>
                    <Link
                      to="/admin/alldiscounts"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      All discounts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/newdiscounts"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      New disounts
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li>
              <div
                onClick={handleOffer}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-gray-900"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-gray-900">
                  <AiFillGift className="xl:text-[17px]" /> Combo Offers
                </Link>
                <span className="text-[12px]">
                  {offer ? <AiOutlineDown /> : <AiOutlineRight />}
                </span>
              </div>
              {offer && (
                <div className="bg-gray-700 px-[30px] text-[14px]">
                  <li>
                    <Link
                      to="/admin/allcombooffers"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      All combo offers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/newcombooffers"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      New combo offers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/comborequest"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Combo request
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li>
              <div
                onClick={handleCustomer}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-gray-900"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-gray-900">
                  <FaUserFriends className="xl:text-[17px]" /> Manage Customers
                </Link>
                <span className="text-[12px]">
                  {customer ? <AiOutlineDown /> : <AiOutlineRight />}
                </span>
              </div>
              {customer && (
                <div className="bg-gray-700 px-[30px] text-[14px]">
                  <li>
                    <Link
                      to="/admin/customers"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Customers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/trackpayment"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Track Payment
                    </Link>
                  </li>
                </div>
              )}
            </li>

            <li>
              <div
                onClick={handleOrders}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-gray-900"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-gray-900">
                  <BsCartFill className="xl:text-[17px]" /> Orders
                </Link>
                <span className="text-[12px]">
                  {orders ? <AiOutlineDown /> : <AiOutlineRight />}
                </span>
              </div>
              {orders && (
                <div className="bg-gray-700 px-[30px] text-[14px]">
                  <li>
                    <Link
                      to="/admin/pendingorders"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Pending Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/acceptedorders"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Accepted Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/inpreparationorders"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Inpreparation Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/shippedorders"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Shipped Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/deliveredorders"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Delivered Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/rejectedorders"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Rejected Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/creditorders"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Credit Orders
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li>
              <Link to="/admin/invoices" className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-gray-900">
                <AiFillDashboard className="xl:text-[17px]" /> Invoices
              </Link>
            </li>
            <li>
              <div
                onClick={handleAdvertisement}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-gray-900"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont  hover:bg-gray-900">
                  <AiFillSetting className="xl:text-[17px]" /> Advertisement
                </Link>
                <span className="text-[12px]">
                  {advertisement ? <AiOutlineDown /> : <AiOutlineRight />}
                </span>
              </div>
              {advertisement && (
                <div className="bg-gray-700 px-[30px] text-[14px]">
                  <li>
                    <Link
                      to="/admin/newadvertisement"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      New Advertisement
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/alladvertisement"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      All advertisement
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li>
              <div
                onClick={handleContent}
                className="flex items-center cursor-pointer justify-between rounded-md hover:bg-gray-900"
              >
                <Link className=" py-2.5 px-2 flex items-center gap-[8px] rounded-md font-mont ">
                  <FaFileInvoice className="xl:text-[17px]" /> Content Management
                </Link>
                <span className="text-[12px]">
                  {content ? <AiOutlineDown /> : <AiOutlineRight />}
                </span>
              </div>
              {content && (
                <div className="bg-gray-700 px-[30px] text-[14px]">
                  <li>
                    <Link
                      to="/admin/aboutus"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/contactus"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/privacypolicy"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/termsofuse"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/refund"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      Refund/Cancellation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/FAQ"
                      className=" py-2.5 flex items-center gap-[8px] rounded-md font-mont  "
                    >
                      FAQ
                    </Link>
                  </li>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center text-[20px] cursor-pointer text-white">
        <AiOutlineLeft />
      </div>
    </div>
  );
}

export default SideBar;
