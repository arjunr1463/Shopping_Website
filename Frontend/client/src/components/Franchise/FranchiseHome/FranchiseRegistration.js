import React, { useContext, useState } from "react";
import FR from "../../../assets/FranchiseRegistration/FR.png";
import axiosInstance from "../../../axios/axiosInstance";
import { MainContext } from "../../../context/MainContext";
import BankDetails from "./BankDetails";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function FranchiseRegistration() {
  const { franchiseReg, setFranchiseReg, setFranchiseRegSuccess } =
    useContext(MainContext);
  const [alreadyExist, setAlreadyExist] = useState("");
  const [franchiseId, setFranchiseId] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");
  const [formData, setFormData] = useState({
    franchiseName: "",
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    password: "",
    confirmPassword: "",
  });

  const [validation, setValidation] = useState({
    franchiseName: false,
    fullName: false,
    mobile: false,
    email: false,
    address: false,
    state: false,
    district: false,
    city: false,
    pincode: false,
    password: false,
    confirmPassword: false,
  });

  const handleValidation = () => {
    if (formData.franchiseName === "") {
      setValidation((prev) => ({
        ...prev,
        franchiseName: true,
      }));
    }
    if (formData.fullName === "") {
      setValidation((prev) => ({
        ...prev,
        fullName: true,
      }));
    }
    if (formData.mobile === "") {
      setValidation((prev) => ({
        ...prev,
        mobile: true,
      }));
    }
    if (formData.email === "") {
      setValidation((prev) => ({
        ...prev,
        email: true,
      }));
    }
    if (formData.address === "") {
      setValidation((prev) => ({
        ...prev,
        address: true,
      }));
    }
    if (formData.state === "") {
      setValidation((prev) => ({
        ...prev,
        state: true,
      }));
    }
    if (formData.district === "") {
      setValidation((prev) => ({
        ...prev,
        district: true,
      }));
    }
    if (formData.city === "") {
      setValidation((prev) => ({
        ...prev,
        city: true,
      }));
    }
    if (formData.pincode === "") {
      setValidation((prev) => ({
        ...prev,
        pincode: true,
      }));
    }
    if (formData.password === "") {
      setValidation((prev) => ({
        ...prev,
        password: true,
      }));
    }
    if (formData.confirmPassword === "") {
      setValidation((prev) => ({
        ...prev,
        confirmPassword: true,
      }));
    }
    setTimeout(() => {
      setValidation({
        franchiseName: false,
        fullName: false,
        mobile: false,
        email: false,
        address: false,
        state: false,
        district: false,
        city: false,
        pincode: false,
        password: false,
        confirmPassword: false,
      });
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    handleValidation();
    if (formData.password !== formData.confirmPassword) {
      setAlreadyExist("password");
      setTimeout(() => {
        setAlreadyExist("");
      }, 3000);
    } else {
      if (
        formData.franchiseName !== "" &&
        formData.fullName !== "" &&
        formData.mobile !== "" &&
        formData.email !== "" &&
        formData.address !== "" &&
        formData.state !== "" &&
        formData.district !== "" &&
        formData.city !== "" &&
        formData.pincode !== "" &&
        formData.password !== "" &&
        formData.confirmPassword !== ""
      ) {
        await axiosInstance
          .post("/franchise/create", {
            ...formData,
          })
          .then((res) => {
            if (res.data.success) {
              setFranchiseId(res.data.data._id);
              setFranchiseReg("two");
              setFranchiseRegSuccess(true);
              setTimeout(() => {
                setFranchiseRegSuccess(false);
              }, 5000);
            }
          });
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-[10px] py-[30px] px-[10px] bg-gradient-b lg:bg-gradient-to-r from-white to-gray-300">
      {franchiseReg === "one" && (
        <div className="w-full lg:w-1/2 flex flex-col gap-[25px] ">
          <div className="text-[28px] font-poppins text-gray-700">
            <h>Register Form</h>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 font-poppins mb-2"
                htmlFor="franchiseName"
              >
                Franchaise Name
              </label>
              <input
                className="border-[1px] p-2 w-full outline-none"
                type="text"
                id="franchiseName"
                name="franchiseName"
                value={formData.franchiseName}
                onChange={handleChange}
              />
              {validation.franchiseName && (
                <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                  Franchise name is required
                </span>
              )}
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 font-poppins mb-2"
                htmlFor="franchiseName"
              >
                Contact Person Name
              </label>
              <input
                className="border-[1px] p-2 w-full outline-none"
                type="text"
                id="personName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {validation.fullName && (
                <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                  Contact person name is required
                </span>
              )}
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 font-poppins mb-2"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <input
                className="border-[1px] p-2 w-full outline-none"
                type="tel"
                id="mobileNumber"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {validation.mobile && (
                <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                  Mobile number is required
                </span>
              )}
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 font-poppins mb-2"
                htmlFor="email"
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
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 font-poppins mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                className="border-[1px] h-[80px] p-2 w-full outline-none font-poppins text-[14px]"
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
                className="block text-gray-700 font-poppins mb-2"
                htmlFor="state"
              >
                State
              </label>
              <select
                className="border-[1px] p-2 w-full outline-none font-poppins text-[14px]"
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
                className="block text-gray-700 font-poppins mb-2"
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
                className="block text-gray-700 font-poppins mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="border-[1px] p-2 w-full outline-none"
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {validation.city && (
                <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                  City is required
                </span>
              )}
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 font-poppins mb-2"
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
                className="block text-gray-700 font-poppins mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border-[1px] p-2 w-full  outline-none relative"
                type={showPassword}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div
                onClick={() => {
                  if (showPassword === "password") {
                    setShowPassword("text");
                  } else {
                    setShowPassword("password");
                  }
                }}
                className=" absolute right-2 top-11 cursor-pointer"
              >
                <i className="">
                  {showPassword === "text" ? (
                    <BsFillEyeFill />
                  ) : (
                    <BsFillEyeSlashFill />
                  )}
                </i>
              </div>
              {validation.password && (
                <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                  Password is required
                </span>
              )}
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 font-poppins mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="border-[1px] p-2 w-full outline-none relative"
                type={showConfirmPassword}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div
                onClick={() => {
                  if (showConfirmPassword === "password") {
                    setShowConfirmPassword("text");
                  } else {
                    setShowConfirmPassword("password");
                  }
                }}
                className=" absolute right-2 top-11 cursor-pointer"
              >
                <i className="">
                  {showConfirmPassword === "text" ? (
                    <BsFillEyeFill />
                  ) : (
                    <BsFillEyeSlashFill />
                  )}
                </i>
              </div>
              {validation.confirmPassword && (
                <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                  Confirm password is required
                </span>
              )}
              {alreadyExist === "password" && (
                <span className="font-poppins text-[14px] text-red-500 absolute left-1 bottom-[-22px]">
                  Password does not match
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-[10px] items-center justify-start">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 font-mont font-semibold text-white h-[40px] w-[120px] rounded-[0.2rem] hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {franchiseReg === "two" && <BankDetails franchiseId={franchiseId} />}
      <div>
        <img src={FR} alt="" className="md:h-[500px]" />
      </div>
    </div>
  );
}

export default FranchiseRegistration;
