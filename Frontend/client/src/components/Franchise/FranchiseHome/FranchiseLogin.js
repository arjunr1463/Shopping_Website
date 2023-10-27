import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo/logo.png";
import axiosInstance from "../../../axios/axiosInstance";

function FranchiseLogin() {
  const navigate = useNavigate();

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
        .post("/franchise/login", {
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
            navigate("/franchise/dashboard");
            localStorage.setItem("token", res.data.success);
          }
        });
    }
  };

  return (
    <div className=" bg-gray-100 pt-[50px] pb-[100px] px-[10px] flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src={Logo} alt="Logo" />
        <h2 className="mt-6 text-center text-3xl font-bold font-mont text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 font-poppins">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }));
                  }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                className="w-full flex font-mont font-semibold justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm  text-white bg-[#189279] focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FranchiseLogin;
