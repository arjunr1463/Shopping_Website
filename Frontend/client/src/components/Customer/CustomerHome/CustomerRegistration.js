import React, { useContext, useEffect, useState } from "react";
import CR from "../../../assets/CustomerRegistration/CR.png";
import axiosInstance from "../../../axios/axiosInstance";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../../context/MainContext";

const CustomerRegistration = () => {
  const navigate = useNavigate();
  const { setCustomerRegSuccess, ref } = useContext(MainContext);
  const [formData, setFormData] = useState({
    fullname: "",
    mobilenumber: "",
    email: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
    password: "",
    confirmpassword: "",
    agree: false,
  });
  const [validation, setValidation] = useState({
    fullname: false,
    mobilenumber: false,
    email: false,
    address: false,
    state: false,
    district: false,
    pincode: false,
    password: false,
    confirmpassword: false,
  });

  const [alreadyExist, setAlreadyExist] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleValidation = () => {
    if (formData.fullname === "") {
      setValidation((prev) => ({ ...prev, fullname: true }));
    }
    if (formData.mobilenumber === "") {
      setValidation((prev) => ({ ...prev, mobilenumber: true }));
    }
    if (formData.email === "") {
      setValidation((prev) => ({ ...prev, email: true }));
    }
    if (formData.address === "") {
      setValidation((prev) => ({ ...prev, address: true }));
    }
    if (formData.state === "") {
      setValidation((prev) => ({ ...prev, state: true }));
    }
    if (formData.district === "") {
      setValidation((prev) => ({ ...prev, district: true }));
    }
    if (formData.pincode === "") {
      setValidation((prev) => ({ ...prev, pincode: true }));
    }
    if (formData.password === "") {
      setValidation((prev) => ({ ...prev, password: true }));
    }
    if (formData.confirmpassword === "") {
      setValidation((prev) => ({ ...prev, confirmpassword: true }));
    }

    setTimeout(() => {
      setValidation({
        fullname: false,
        mobilenumber: false,
        email: false,
        address: false,
        state: false,
        district: false,
        pincode: false,
        password: false,
        confirmpassword: false,
      });
    }, 3000);
  };

  const handleSubmit = async () => {
    handleValidation();
    if (
      formData.fullname !== "" &&
      formData.mobilenumber !== "" &&
      formData.email !== "" &&
      formData.address !== "" &&
      formData.state !== "" &&
      formData.district !== "" &&
      formData.pincode !== "" &&
      formData.password !== "" &&
      formData.confirmpassword !== "" &&
      formData.agree
    ) {
      await axiosInstance
        .post("/user/create", {
          fullname: formData.fullname,
          mobile: formData.mobilenumber,
          email: formData.email,
          address: formData.address,
          state: formData.state,
          district: formData.district,
          pincode: formData.pincode,
          password: formData.password,
          confirmPassword: formData.confirmpassword,
        })
        .then((res) => {
          if (res.data === "Email Taken") {
            setAlreadyExist("Email");
            setTimeout(() => {
              setAlreadyExist("");
            }, 3000);
          } else if (res.data === "Mobile Taken") {
            setAlreadyExist("Mobile");
            setTimeout(() => {
              setAlreadyExist("");
            }, 3000);
          } else {
            setCustomerRegSuccess(true);
            setTimeout(() => {
              setCustomerRegSuccess(false);
            }, 5000);
            navigate("/customer/login");
          }
        });
    }
  };

  return (
    <div
      ref={ref}
      className="flex  flex-col lg:flex-row justify-center gap-[10px] py-[30px] px-[10px] bg-gradient-b lg:bg-gradient-to-r from-white to-gray-300"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-[15px] ">
        <div className="text-[28px] font-poppins text-gray-700">
          <h>Register Form</h>
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-mont font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            className="border-[1px] p-2 w-full outline-none"
            type="text"
            id="fullName"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
          {validation.fullname && (
            <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
              Fullname is required
            </span>
          )}
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="mobileNumber"
            className="block text-gray-700 font-mont font-semibold mb-2"
          >
            Mobile Number
          </label>
          <input
            className="border-[1px] p-2 w-full outline-none"
            type="tel"
            id="mobileNumber"
            name="mobilenumber"
            value={formData.mobilenumber}
            onChange={handleChange}
          />
          {validation.mobilenumber && (
            <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
              Mobile number is required
            </span>
          )}
          {alreadyExist === "Mobile" && (
            <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
              Mobile number already taken
            </span>
          )}
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="email"
            className="block text-gray-700 font-mont font-semibold mb-2"
          >
            Email
          </label>
          <input
            className="border-[1px] p-2 w-full outline-none"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {validation.email && (
            <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
              Email is required
            </span>
          )}
          {alreadyExist === "Email" && (
            <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
              Email already taken
            </span>
          )}
        </div>

        <div className="mb-4 relative">
          <label
            className="block text-gray-700 font-mont font-semibold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            className="border-[1px] h-[80px] p-2 w-full outline-none"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {validation.address && (
            <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
              Address is required
            </span>
          )}
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 font-mont font-semibold mb-2"
            htmlFor="state"
          >
            State
          </label>
          <select
            className="border-[1px] p-2 w-full outline-none"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">-- Select State --</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          {validation.state && (
            <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
              State is required
            </span>
          )}
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 font-mont font-semibold mb-2"
            htmlFor="district"
          >
            District
          </label>
          <input
            className="border-[1px] p-2 w-full outline-none"
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
          {validation.district && (
            <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
              District is required
            </span>
          )}
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 font-mont font-semibold mb-2"
            htmlFor="pincode"
          >
            Pincode
          </label>
          <input
            className="border-[1px] p-2 w-full outline-none"
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
          {validation.pincode && (
            <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
              Pincode is required
            </span>
          )}
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 font-mont font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border-[1px] p-2 w-full outline-none"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {validation.password && (
            <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
              Password is required
            </span>
          )}
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 font-mont font-semibold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="border-[1px] p-2 w-full outline-none"
            type="password"
            id="confirmPassword"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
          />
          {validation.confirmpassword && (
            <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
              Confirm Password is required
            </span>
          )}
        </div>
        <div className="font-poppins flex items-center gap-[10px] mb-4">
          <input
            type="checkbox"
            id="agree_terms"
            name="agree"
            onChange={handleChange}
          />
          <label
            htmlFor="agree_terms"
            className="text-red-500 text-[14px] cursor-pointer"
          >
            Agree to terms and conditions
          </label>
        </div>

        <div className="flex flex-col lg:flex-row justify-start items-center gap-[10px]">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 font-mont font-bold text-white h-[40px] w-[120px] rounded-[0.2rem] hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
          <span className="text-red-500 font-mont font-semibold text-[16px]">
            {/* {success} */}
          </span>
        </div>
      </div>
      <div>
        <img src={CR} alt="" className="md:h-[500px]" />
      </div>
    </div>
  );
};

export default CustomerRegistration;
