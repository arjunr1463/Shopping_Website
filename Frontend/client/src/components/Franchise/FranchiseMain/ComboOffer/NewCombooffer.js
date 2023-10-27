import React from "react";

function NewCombooffer() {
  return (
    <div className="px-[10px] flex flex-col gap-[15px] py-[15px]">
      <div className="uppercase tracking-wide text-lg font-mont font-bold">
        New Combo Offer
      </div>
      <div className="p-8 bg-white rounded-sm shadow-md flex flex-col gap-[10px] ">
        <div className="block mt-1  text-lg leading-tight font-poppins">
          {/* Input for Title */}
          <label
            htmlFor="title"
            className="block text-sm font-poppins text-gray-700 mb-1"
          >
            Item title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full border-gray-300 border-[1px] px-[10px] h-[35px] outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="block mt-1 text-lg leading-tight font-poppins">
          {/* Input for Description */}
          <label
            htmlFor="description"
            className="block text-sm font-poppins text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            className="w-full border-gray-300 border-[1px] px-[10px] h-[80px] outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="block mt-1 text-lg leading-tight font-poppins">
          {/* Input for Original Price */}
          <label
            htmlFor="originalPrice"
            className="block text-sm font-poppins text-gray-700 mb-1"
          >
            Original Price/MRP<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="originalPrice"
            name="originalPrice"
            required
            className="w-full border-gray-300 border-[1px] px-[10px] h-[35px] outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="block mt-1 text-lg leading-tight font-poppins">
          {/* Input for Sales Price */}
          <label
            htmlFor="salesPrice"
            className="block text-sm font-poppins text-gray-700 mb-1"
          >
            Sales Price<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="salesPrice"
            name="salesPrice"
            required
            className="w-full border-gray-300 border-[1px] px-[10px] h-[35px] outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="block mt-1 text-lg leading-tight font-poppins">
          {/* Input for Image */}
          <label
            htmlFor="image"
            className="block text-sm font-poppins text-gray-700 mb-1"
          >
            Image<span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            required
            className="w-full border-gray-300  h-[35px] outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="block mt-1 text-lg leading-tight font-poppins">
          {/* Input for Key Features */}
          <label
            htmlFor="keyFeatures"
            className="block text-sm font-poppins text-gray-700 mb-1"
          >
            Key Features<span className="text-red-500">*</span>
          </label>
          <textarea
            id="keyFeatures"
            name="keyFeatures"
            rows="3"
            required
            className="w-full border-gray-300 border-[1px] px-[10px] h-[80px] outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="block mt-1 text-lg leading-tight font-poppins">
          <label
            htmlFor="ingredients"
            className="block text-sm font-poppins text-gray-700 mb-1"
          >
            Ingredients<span className="text-red-500">*</span>
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="3"
            required
            className="w-full border-gray-300 border-[1px] px-[10px] h-[80px] outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="block mt-1 text-lg leading-tight font-poppins">
          {/* Input for Packing */}
          <label
            htmlFor="packing"
            className="block text-sm font-poppins text-gray-700 mb-1"
          >
            Packing
          </label>
          <input
            type="text"
            id="packing"
            name="packing"
            className="w-full border-gray-300 border-[1px] px-[10px] h-[35px] outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class=" py-2 px-4 border border-transparent text-sm font-mont font-bold rounded-sm text-white bg-[#189279]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewCombooffer;
