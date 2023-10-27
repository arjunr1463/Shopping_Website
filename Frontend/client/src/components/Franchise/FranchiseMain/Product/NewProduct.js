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
  const { loading, setLoading, categoryData } = useContext(MainContext);
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
          setImages([]);
          toast.success("successfully uploaded product");
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  console.log("category", categoryData);

  const category = categoryData?.find(
    (item) => item.name === formData.category
  );

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
      <div className="container mx-auto p-6">
        <div className="flex justify-between">
          <div className="text-2xl font-bold mb-4">Add a New Product</div>
          <div
            onClick={handleSubmit}
            className="bg-green-500 flex items-center justify-centers text-white py-2 px-4 rounded-full cursor-pointer"
          >
            Add Product
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-gray-600">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1 flex flex-col space-y-1">
                <label htmlFor="subCategory" className="text-gray-600">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none"
                >
                  <option value="">Select category</option>
                  {categoryData?.map((item) => {
                    return <option value={item.name}>{item.name}</option>;
                  })}
                </select>
              </div>
              <div className="flex-1 flex flex-col space-y-1">
                <label htmlFor="subCategory" className="text-gray-600">
                  Subcategory
                </label>
                <select
                  id="subCategory"
                  name="subCategory"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none"
                >
                  <option value="">Select subcategory</option>
                  {category?.subcategory?.map((item) => {
                    return <option value={item.name}>{item.name}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="flex ">
              <div className="flex flex-col space-y-1">
                <label htmlFor="actualPrice" className="text-gray-600">
                  Actual Price
                </label>
                <input
                  type="text"
                  id="actualPrice"
                  name="actualPrice"
                  value={formData.actualPrice}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-2 w-[90%] px-3 focus:outline-none"
                />
              </div>
              <div className=" flex flex-col space-y-1">
                <label htmlFor="offerPrice" className="text-gray-600">
                  Offer Price
                </label>
                <input
                  type="text"
                  id="offerPrice"
                  name="offerPrice"
                  value={formData.offerPrice}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg w-[90%] py-2 px-3 focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="gender" className="text-gray-600">
                  Select Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="size" className="text-gray-600">
                  Available Size
                </label>
                <select
                  id="size"
                  name="size"
                  onChange={handleChange}
                  className="border border-gray-300  rounded-lg py-2 px-3 focus:outline-none"
                >
                  <option value="">Select size</option>
                  <option value="xxl">XXL</option>
                  <option value="xl">XL</option>
                  <option value="md">M</option>
                  <option value="sm">S</option>
                </select>
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="brand" className="text-gray-600">
                  Brand Name
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-1">
              <label htmlFor="description" className="text-gray-600">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none h-24"
              ></textarea>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-gray-600">Select Image</label>
              <input
                type="file"
                onChange={handleChange}
                accept="image/*"
                multiple
                className="focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images?.map((item, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(item)}
                    alt="Product Image"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => handleRemoveImage(item?.name)}
                    className="absolute top-2 right-2 text-red-500 focus:outline-none"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {loading && <Loading />}
    </div>
  );
}

export default NewProduct;
