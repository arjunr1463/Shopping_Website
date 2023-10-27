import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios/axiosInstance";

function HomeBanner() {
  const [data, setData] = useState([]);
  const [imageUrl, setImageUrl] = useState(0);
  const fetchData = async () => {
    await axiosInstance.get("/banner").then((res) => setData(res.data));
  };

  useEffect(() => {
    if (data.length>0) {
      const intervalId = setInterval(() => {
        setImageUrl((prev) => {
          if (prev > data?.length - 2) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 10000);
      return () => clearInterval(intervalId);
    }
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative h-[80vh]">
      <img
        src={data[imageUrl]?.image}
        alt={`Banner`}
        className={`absolute object-top top-0 left-0 h-full w-full object-cover transition-opacity duration-500`}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 h-full to-transparent opacity-50" />
    </div>
  );
}

export default HomeBanner;
