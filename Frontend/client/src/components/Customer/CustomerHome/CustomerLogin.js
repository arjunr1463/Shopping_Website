import React, { useContext, useState } from "react";
import CL from "../../../assets/CustomerLogin/CL.png";
import { MainContext } from "../../../context/MainContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axios/axiosInstance";

function CustomerLogin() {
  const navigate = useNavigate();
  const { ref } = useContext(MainContext);
  const { CustomerRegSuccess } = useContext(MainContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });
  const [loginValidation, setLoginValidation] = useState("");

  const handleValidation = () => {
    if (formData.email === "") {
      setValidation((prev) => ({ ...prev, email: true }));
    }
    if (formData.password === "") {
      setValidation((prev) => ({ ...prev, password: true }));
    }
    setTimeout(() => {
      setValidation({
        email: false,
        password: false,
      });
    }, 3000);
  };

  const handleSubmit = async () => {
    handleValidation();
    if (formData.email !== "" && formData.password !== "") {
      await axiosInstance
        .post("/user/login", {
          email: formData.email,
          password: formData.password,
        })
        .then((res) => {
          if (res.data.password === "Incorrect password") {
            setLoginValidation("password");
            setTimeout(() => {
              setLoginValidation("");
            }, 3000);
          } else if (res.data.email === "Email not registered") {
            setLoginValidation("email");
            setTimeout(() => {
              setLoginValidation("");
            }, 3000);
          } else {
            navigate("/customer/dashboard");
          }
        });
    }
  };

  return (
    <div ref={ref} className="flex flex-col lg:flex-row justify-center gap-[10px] py-[30px] px-[10px] bg-gradient-b lg:bg-gradient-to-l from-white to-gray-300">
      <div>
        <img src={CL} alt="" className="lg:h-[400px]" />
      </div>
      <div className="flex flex-col gap-[20px] px-[10px] w-full lg:w-1/2 xl:w-1/3">
        <div className="flex flex-col items-center ">
          <h className="font-mont font-semibold text-[28px] lg:text-[35px]">
            Welcome | Sign In
          </h>
          <span className="font-poppins xsmall:text-[14px] text-center mob:text-[16px]">
            Feel the real grocery shopping experience
          </span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[25px]">
            <div className="w-full relative">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
                className={`border-[1px] w-full outline-none h-[40px] px-[10px]`}
              />
              {validation.email && (
                <span className="font-poppins text-[13px] text-red-500 absolute left-1 bottom-[-22px]">
                  Email is required
                </span>
              )}
              {loginValidation === "email" && (
                <span className="font-poppins text-[13px] text-red-500 absolute left-1 bottom-[-22px]">
                  Email not registered
                </span>
              )}
            </div>
            <div className="w-full relative">
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                className={`border-[1px] w-full outline-none h-[40px] px-[10px]
              `}
              />
              {validation.password && (
                <span className="font-poppins text-[13px] text-red-500 absolute left-1 bottom-[-22px]">
                  Password is required
                </span>
              )}
              {loginValidation === "password" && (
                <span className="font-poppins text-[13px] text-red-500 absolute left-1 bottom-[-22px]">
                  Password is incorrect
                </span>
              )}
            </div>
          </div>
          <div className="py-[15px] flex flex-col  w-full gap-3">
            <div>
              <button
                type="button"
                className="text-[#7fad39] font-mont font-semibold"
              >
                Forgot Password
              </button>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-[10px] font-mont font-semibold">
              <button
                onClick={handleSubmit}
                className="bg-[#7fad39] text-white h-[40px] w-full"
              >
                SIGN IN
              </button>
              <button className="bg-[#d93025] text-white h-[40px] w-full">
                SIGN IN WITH GMAIL
              </button>
            </div>
            <div className="flex gap-[5px] font-poppins">
              <span className="">Don't have an account?</span>
              <button
                onClick={() => navigate("/customer/registration")}
                className="text-[#7fad39]"
              >
                Sign Up
              </button>
              {CustomerRegSuccess && (
                <span className="text-red-500">Successfully Registered!!!</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
