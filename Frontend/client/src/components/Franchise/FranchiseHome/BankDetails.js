import React, { useContext, useState } from "react";
import { MainContext } from "../../../context/MainContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axios/axiosInstance";

function BankDetails({ franchiseId }) {
  const navigate = useNavigate();
  const { franchiseRegSuccess } = useContext(MainContext);
  const [formData, setFormData] = useState({
    accountNumber: "",
    branchName: "",
    bankName: "",
    ifsc: "",
    gstNumber: "",
  });

  const [validation, setValidation] = useState({
    accountNumber: false,
    branchName: false,
    bankName: false,
    ifsc: false,
    gstNumber: false,
    gstCertificate: false,
  });

  const handleValidation = () => {
    if (formData.accountNumber === "") {
      setValidation((prev) => ({
        ...prev,
        accountNumber: true,
      }));
    }
    if (formData.branchName === "") {
      setValidation((prev) => ({
        ...prev,
        branchName: true,
      }));
    }
    if (formData.bankName === "") {
      setValidation((prev) => ({
        ...prev,
        bankName: true,
      }));
    }
    if (formData.ifsc === "") {
      setValidation((prev) => ({
        ...prev,
        ifsc: true,
      }));
    }
    if (formData.gstNumber === "") {
      setValidation((prev) => ({
        ...prev,
        gstNumber: true,
      }));
    }
    setTimeout(() => {
      setValidation({
        accountNumber: false,
        branchName: false,
        bankName: false,
        ifsc: false,
        gstNumber: false,
        gstCertificate: false,
      });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    handleValidation();
    if (
      formData.accountNumber !== "" &&
      formData.branchName !== "" &&
      formData.bankName !== "" &&
      formData.ifsc !== "" &&
      formData.gstNumber !== ""
    ) {
      await axiosInstance
        .put("/franchise/update", {
          id: franchiseId,
          ...formData,
        })
        .then(() => {
          navigate("/franchise/login");
        });
    }
  };
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-[25px] ">
      <div className="text-[28px] flex gap-3 items-center font-poppins text-gray-700">
        <h>Bank Details</h>
        {franchiseRegSuccess && (
          <span className="text-red-500 text-[14px]">
            Successfully registered!!!
          </span>
        )}
      </div>
      <div className="flex flex-col gap-[15px]">
        <div className="flex gap-2">
          <div className="mb-4  w-full relative">
            <label
              className="block text-gray-700 font-poppins mb-2"
              htmlFor="bankDetails"
            >
              Account Number
            </label>
            <input
              type="text"
              className="border-[1px] p-2 w-full outline-none"
              id="accoutNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
            />
            {validation.accountNumber && (
              <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                Account number is required
              </span>
            )}
          </div>
          <div className="mb-4 w-full relative">
            <label
              className="block text-gray-700 font-poppins mb-2"
              htmlFor="bankDetails"
            >
              Branch Name
            </label>
            <input
              className="border-[1px] p-2 w-full outline-none"
              id="branch"
              name="branchName"
              value={formData.branchName}
              onChange={handleChange}
            />
            {validation.branchName && (
              <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                Branch name is required
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="mb-4  w-full relative">
            <label
              className="block text-gray-700 font-poppins mb-2"
              htmlFor="bankDetails"
            >
              Bank Name
            </label>
            <input
              className="border-[1px] p-2 w-full outline-none"
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
            />
            {validation.bankName && (
              <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                Bank name is required
              </span>
            )}
          </div>
          <div className="mb-4 w-full relative">
            <label
              className="block text-gray-700 font-poppins mb-2"
              htmlFor="bankDetails"
            >
              IFSC Code
            </label>
            <input
              type="text"
              className="border-[1px] p-2 w-full outline-none"
              id="ifsc"
              name="ifsc"
              value={formData.ifsc}
              onChange={handleChange}
            />
            {validation.ifsc && (
              <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                IFSC code is required
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="mb-4  w-full relative">
            <label
              className="block text-gray-700 font-poppins mb-2"
              htmlFor="bankDetails"
            >
              GST Number
            </label>
            <input
              className="border-[1px] p-2 w-full outline-none"
              id="gstNumber"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
            />
            {validation.gstNumber && (
              <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                GST number is required
              </span>
            )}
          </div>
          <div className="mb-4 w-full relative">
            <label
              className="block text-gray-700 font-poppins mb-2"
              htmlFor="bankDetails"
            >
              GST Certificate
            </label>
            <input
              type="file"
              className="border-[1px] p-2 w-full outline-none"
              id="image"
            />
          </div>
        </div>
        <div className="flex gap-5 items-center justify-start font-poppins">
          <button
            onClick={handleSubmit}
            className="bg-blue-500  font-semibold text-white h-[40px] w-[120px] rounded-[0.2rem] hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
          <span
            onClick={() => navigate("/franchise/login")}
            className="text-[15px] text-red-500 underline cursor-pointer"
          >
            Skip this right now
          </span>
        </div>
      </div>
    </div>
  );
}

export default BankDetails;
