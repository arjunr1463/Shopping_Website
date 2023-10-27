import React, { useContext, useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import axiosInstance from "../../../../axios/axiosInstance";
import Loading from "../../../Loading/Loading";
import { MainContext } from "../../../../context/MainContext";
import { toast } from "react-toastify";

function NewProduct() {
  const { loading, setLoading } = useContext(MainContext);
  const [images, setImages] = useState([]);
  const [sizes, setSizes] = useState([]);
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    subCategory: "",
    actualPrice: "",
    offerPrice: "",
    brand: "",
    gender: "",
    size: "",
    description: "",
  });

  let i;

  const handleChange = (e) => {
    const { value, name, type } = e.target;
    if (type === "file" && images.length < 6) {
      if (e.target.files.length > 1) {
        for (i = 0; i < e.target.files.length; i++) {
          const test = e.target.files[i];
          if (!images.find((item) => item.name === test.name)) {
            setImages((prev) => [...prev, test]);
          }
        }
      } else {
        if (!images.find((item) => item.name === e.target.files[0].name)) {
          setImages((prev) => [...prev, e.target.files[0]]);
        }
      }
    }

    if (name === "size") {
      if (sizes.find((item) => item === value)) {
        setSizes((prev) => prev.filter((item) => item !== value));
      } else {
        setSizes((prev) => [...prev, value]);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveImage = (name) => {
    setImages((prev) => prev.filter((item) => item.name !== name));
  };

  const handleSubmit = async () => {
    setLoading(true);
    let files = [];
    const formDatas = new FormData();
    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      formDatas.append("file", file);
      formDatas.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      formDatas.append("public_id", uuidv4());
      formDatas.append("original_filename", file.name);

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/upload`,
        formDatas
      );
      files.push(res.data.url);
    }
    try {
      await axiosInstance
        .post(
          "/product/create",
          {
            ...formData,
            image: files,
          },
          {
            headers: {
              Authorization: `Bearer ${token} `,
            },
          }
        )
        .then(() => {
          setLoading(false);
          setFormData({
            name: "",
            subCategory: "",
            actualPrice: "",
            offerPrice: "",
            brand: "",
            gender: "",
            size: "",
            description: "",
          });
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.success("Successfully uploaded");
    }
  };

  return (
    <div className="flex flex-col h-full font-poppins ">
      <div className="flex gap-[10px] items-center text-[#2ad5b1] bg-white shadow-lg px-[15px] py-[10px] text-[13px] mob:text-[15px] font-poppins">
        <i>
          <BsGrid3X3GapFill />
        </i>
        <span className="text-[#3d8879]">Products</span>
        <i>
          <AiOutlineRight />
        </i>
        <span className="text-[#3d8879]">New Products</span>
      </div>
      <div className="px-4 py-8  flex flex-col">
        <div className="flex justify-between pb-6">
          <div className="flex gap-3">
            <span>Select the type of product</span>
            <select
              name="category"
              onChange={handleChange}
              className="px-[10px] text-[14px] outline-none border-[1px] border-[#DFDFDF]"
            >
              <option value="">Select type</option>
              <option value="food">Food Item</option>
              <option value="shoes">Shoes</option>
              <option value="sandals">Sandals</option>
              <option value="dress">Dress</option>
            </select>
          </div>
          <div
            onClick={handleSubmit}
            className="bg-[#238265] text-white px-3 cursor-pointer py-1 text-[14px] rounded-[5px]"
          >
            <button>Add Product</button>
          </div>
        </div>
        {formData.category !== "" && (
          <h className="text-[20px] font-semibold font-mont">Enter Details</h>
        )}
        {formData.category !== "" && (
          <div className="bg-white px-4  border-[1px] h-[65vh] flex overflow-y-auto pt-6">
            {formData.category === "food" && (
              <div className="flex gap-10 w-full">
                <div className="w-1/2 flex flex-col gap-3">
                  <div className="flex flex-col gap-2 w-full">
                    <span>Product Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-[1px] border-[#DFDFDF] h-[35px] outline-none px-2 text-[14px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span>Sub Category</span>
                    <select
                      name="subCategory"
                      onChange={handleChange}
                      className="outline-none border-[1px] text-[14px] w-1/2 border-[#DFDFDF] h-[35px] px-2"
                    >
                      <option value="bakery">Bakery</option>
                      <option value="fruits">Fruits</option>
                      <option value="vegetables"> Vegetables</option>
                    </select>
                  </div>
                  <div className="flex gap-10 w-1/2">
                    <div className="flex flex-col gap-2 w-full">
                      <span>Actual Price</span>
                      <input
                        type="text"
                        value={formData.actualPrice}
                        name="actualPrice"
                        onChange={handleChange}
                        className="border-[1px] border-[#DFDFDF] h-[35px] outline-none px-2 text-[14px]"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <span>Offer Price</span>
                      <input
                        type="text"
                        value={formData.offerPrice}
                        name="offerPrice"
                        onChange={handleChange}
                        className="border-[1px] border-[#DFDFDF] h-[35px] outline-none px-2 text-[14px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span>Description</span>
                    <textarea
                      onChange={handleChange}
                      name="description"
                      value={formData.description}
                      className="border-[1px] border-[#DFDFDF] h-[150px] py-1 outline-none px-2 text-[14px]"
                    />
                  </div>
                </div>
                <div className="w-1/2 flex flex-col gap-3">
                  <div className="flex flex-col gap-3">
                    <span>Select Image</span>
                    <input
                      type="file"
                      onChange={handleChange}
                      accept="image/*"
                      multiple
                      className="h-[35px] outline-none px-2 text-[14px]"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {images?.map((item) => (
                      <div className="flex justify-center border-[1px] bg-gray-300 items-center relative ">
                        <img
                          src={URL.createObjectURL(item)}
                          className="h-[100px] object-contain w-[130px] "
                        />
                        <i
                          className="absolute top-0 right-0 cursor-pointer"
                          onClick={() => handleRemoveImage(item?.name)}
                        >
                          <IoMdClose />
                        </i>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {(formData.category === "shoes" ||
              formData.category === "sandals" ||
              formData.category === "dress") && (
              <>
                <div className="flex gap-10 w-full">
                  <div className="w-1/2 flex flex-col gap-3">
                    <div className="flex flex-col gap-2 w-full">
                      <span>Product Name</span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-[1px] border-[#DFDFDF] h-[35px] outline-none px-2 text-[14px]"
                      />
                    </div>
                    <div className="flex gap-10">
                      <div className="flex flex-col gap-2 w-full">
                        <span>Subcategory</span>
                        {formData.category === "dress" ? (
                          <select
                            name="subCategory"
                            onChange={handleChange}
                            className="outline-none border-[1px] text-[14px]  border-[#DFDFDF] h-[35px] px-2"
                          >
                            <option value="">select subcategory</option>
                            <option value="topwear">Topwear</option>
                            <option value="bottomwear">Bottomwear</option>
                            <option value="innerwear">Innerwear</option>
                          </select>
                        ) : (
                          <select
                            name="subCategory"
                            onChange={handleChange}
                            className="outline-none border-[1px] text-[14px]  border-[#DFDFDF] h-[35px] px-2"
                          >
                            <option value="">select subcategory</option>
                            <option value="sports">Sports</option>
                            <option value="boot">Boot</option>
                            <option value="sneaker">Sneaker</option>
                            <option value="formal">Formal</option>
                          </select>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <span>Brand Name</span>
                        <input
                          type="text"
                          name="brand"
                          value={formData.brand}
                          onChange={handleChange}
                          className="border-[1px] border-[#DFDFDF] h-[35px] outline-none px-2 text-[14px]"
                        />
                      </div>
                    </div>
                    <div className={`flex  gap-10 w-1/2`}>
                      <div className="flex flex-col gap-2 w-full">
                        <span>Actual Price</span>
                        <input
                          type="text"
                          value={formData.actualPrice}
                          name="actualPrice"
                          onChange={handleChange}
                          className="border-[1px] border-[#DFDFDF] h-[35px] outline-none px-2 text-[14px]"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <span>Offer Price</span>
                        <input
                          type="text"
                          value={formData.offerPrice}
                          name="offerPrice"
                          onChange={handleChange}
                          className="border-[1px] border-[#DFDFDF] h-[35px] outline-none px-2 text-[14px]"
                        />
                      </div>
                      <div className="flex flex-col items-end justify-end">
                        <select
                          name="gender"
                          onChange={handleChange}
                          className="outline-none border-[1px] text-[14px]  border-[#DFDFDF] h-[35px] px-2 "
                        >
                          <option>Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    {formData.category === "dress" ? (
                      <div className="flex flex-col gap-2 w-full">
                        <span>Available size</span>
                        <select
                          name="size"
                          onChange={handleChange}
                          className="outline-none border-[1px] text-[14px] w-1/2  border-[#DFDFDF] h-[35px] px-2 "
                        >
                          <option>Select size</option>
                          <option value="xxl">XXL</option>
                          <option value="xl">XL</option>
                          <option value="md">M</option>
                          <option value="sm">S</option>
                        </select>
                      </div>
                    ) : (
                      <div className="flex gap-6">
                        <div className="flex flex-col gap-2 w-1/2 ">
                          <span>Available size</span>
                          <select
                            name="size"
                            onChange={handleChange}
                            className="outline-none border-[1px] text-[14px]  w-full border-[#DFDFDF] h-[35px] px-2 "
                          >
                            <option>Select size</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="41">42</option>
                            <option value="41">44</option>
                          </select>
                        </div>
                        <div className="flex items-end gap-2">
                          {sizes.map((item) => (
                            <span className="border-[1px] p-2 text-[14px]">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col gap-2">
                      <span>Description</span>
                      <textarea
                        onChange={handleChange}
                        name="description"
                        value={formData.description}
                        className="border-[1px] border-[#DFDFDF] h-[150px] py-1 outline-none px-2 text-[14px]"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                      <span>Select Image</span>
                      <input
                        type="file"
                        onChange={handleChange}
                        accept="image/*"
                        multiple
                        className="h-[35px] outline-none px-2 text-[14px]"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {images?.map((item) => (
                        <div className="flex justify-center border-[1px] bg-gray-300 items-center relative ">
                          <img
                            src={URL.createObjectURL(item)}
                            className="h-[100px] object-contain w-[130px] "
                          />
                          <i
                            className="absolute top-0 right-0 cursor-pointer"
                            onClick={() => handleRemoveImage(item?.name)}
                          >
                            <IoMdClose />
                          </i>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      {loading && <Loading />}
    </div>
  );
}

export default NewProduct;
