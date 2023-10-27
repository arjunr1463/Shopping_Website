import React, { useState, useRef } from "react";
import { AiFillFileText, AiFillCloseCircle } from "react-icons/ai";

function Site() {
  const [filename, setFileName] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const inputRef = useRef(null);
  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImagePreview(reader.result);
      setFileName(file.name);
    };

    reader.readAsDataURL(file);
  };

  const handleClose = () => {
    setImagePreview(null);
    setFileName(null);
    inputRef.current.value = null;
  };
  return (
    <div className="flex flex-col gap-[30px] text-[15px]">
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">General Info</span>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Site Title</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">Header Text</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="font-poppins">Logo</span>
          <input
            id="image"
            type="file"
            className=""
            ref={inputRef}
            onChange={handleImageChange}
          />
          {imagePreview && filename && (
            <div className="relative pt-[20px] pr-[15px] h-[180px] w-[280px] flex">
              <i
                onClick={handleClose}
                className="absolute top-1 right-0 cursor-pointer"
              >
                <AiFillCloseCircle />
              </i>
              <img src={imagePreview} alt="" className=" w-full" />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">Social Links</span>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Facebook link (Optional)</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">Twitter link (Optional)</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Google + (Optional)</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">Linkedin + (Optional)</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">SEO Contents</span>
        </div>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">Meta tag title</span>
            <input
              type="text"
              className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px]  w-full">
            <span className="font-poppins">Meta tag Keywords</span>
            <textarea
              type="text"
              className="outline-none border-[1px] h-[80px] rounded-sm px-[10px]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full md:w-1/2">
            <span className="font-poppins">Discription</span>
            <textarea
              type="text"
              className="outline-none border-[1px] h-[80px] rounded-sm px-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">Google analytic code</span>
        </div>

        <div className="flex flex-col  gap-[15px] w-full md:w-1/2">
          <span className="font-poppins">Google analytic code</span>
          <input
            type="text"
            className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
          />
          <div>
            <button className="flex justify-center font-mont font-bold items-center bg-[#fc5b62] text-white w-[100px] h-[30px] rounded-sm">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Site;
