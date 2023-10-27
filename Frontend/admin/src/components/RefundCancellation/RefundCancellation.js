import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AiFillFileText } from "react-icons/ai";

function RefundCancellation() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleDescriptionChange = (value) => {
      setDescription(value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Title: ${title}`);
      console.log(`Description: ${description}`);
    };
  
    const modules = {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    };
  
    const formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "link",
      "image",
    ];
  
    const handlePaste = (e) => {
      const plainText = e.clipboardData.getData("text/plain");
      const newPlainText = plainText.replace(/\n/g, "<br />");
      setDescription(newPlainText);
      e.preventDefault();
      return false;
    };
  
    return (
      <div className="px-[10px] py-[10px] text-[14px]">
        <div className="flex flex-col gap-[15px] p-4 bg-white shadow-lg">
          <div className="flex items-center gap-[10px] border-b-[1px]">
            <i className="text-gray-300 text-[25px]">
              <AiFillFileText />
            </i>
            <span className="font-poppins text-[22px]">Refunds/Cancellation</span>
          </div>
          <div className="">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
              <div className="flex flex-col">
                <span className="font-poppins">Title</span>
                <input
                  type="text"
                  placeholder="Product title"
                  value={title}
                  onChange={handleTitleChange}
                  className="outline-none border-[1px] h-[40px] rounded-sm px-[10px] font-poppins"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins">Product Description</span>
                <ReactQuill
                  value={description}
                  onChange={handleDescriptionChange}
                  modules={modules}
                  formats={formats}
                  onPaste={handlePaste}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md font-mont font-bold text-white bg-[#fc5b62] hover:bg-[#fd7883] mt-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default RefundCancellation
