import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center pl-72 bg-[#54545480] bg-opacity-50">
      <div className="loading-spinner">
        <div className="loading-inner-circle"></div>
      </div>
    </div>
  );
}

export default Loading;