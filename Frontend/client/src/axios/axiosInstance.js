import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = "Bearer " + token;
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
});

export default axiosInstance;
