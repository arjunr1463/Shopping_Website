import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
//import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { GiEarthAfricaEurope } from "react-icons/gi";
import {
  HiOutlineArrowNarrowDown,
  HiOutlinePlusCircle,
  HiOutlineMinusCircle,
} from "react-icons/hi";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function CustomerBuyproducts() {
  const district = localStorage.getItem("district");
  const city = localStorage.getItem("city");
  const savedDistrict = district ? JSON.parse(district).district : "";
  const savedCity = city ? JSON.parse(city).city : "";
  const [districts, setDistricts] = useState([]);
  const [states, setStates] = useState([]);
  const [districtValue, setDistrictvalue] = useState(savedDistrict);
  const [stateValue, setStatevalue] = useState(savedCity);
  const [success, setSuccess] = useState("");
  const [franchise, setFranchise] = useState([]);
  const [selectedFranchise, setSelectedFranchise] = useState("");
  const [productList, setProductList] = useState([
    { id: uuidv4(), description: "" },
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChangeDistrict = (event) => {
    const selectedDistrict = event.target.value;
    setDistrictvalue(selectedDistrict);
  };

  const handleChangeState = (event) => {
    const selectedCity = event.target.value;
    setStatevalue(selectedCity);
    console.log(event.target.value);
  };

  const handleFranchiseChange = (event) => {
    setSelectedFranchise(event.target.value);
    console.log(event.target.value);
  };

  const handleProductDescriptionChange = (index, event) => {
    const updatedProductList = [...productList];
    updatedProductList[index].description = event.target.value;
    setProductList(updatedProductList);
  };
  const handleWeightChange = (index, event) => {
    const updatedProductList = [...productList];
    updatedProductList[index].weight = event.target.value;
    setProductList(updatedProductList);
  };
  const handleUnitChange = (index, event) => {
    const updatedProductList = [...productList];
    updatedProductList[index].unit = event.target.value;
    setProductList(updatedProductList);
    console.log(event.target.value);
  };
  const handleQuantityChange = (index, event) => {
    const updatedProductList = [...productList];
    updatedProductList[index].quantity = event.target.value;
    setProductList(updatedProductList);
  };

  const handleAddProduct = () => {
    setProductList([...productList, { id: uuidv4(), description: "" }]);
  };

  const handleRemoveProduct = (index) => {
    const updatedProductList = [...productList];
    updatedProductList.splice(index, 1);
    setProductList(updatedProductList);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    setSelectedImage(file);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const fetchState = async (selectedDistrict) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/franchise/getallstatedistrict?district=${selectedDistrict}`
      );
      setStates(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDistrict = async () => {
    await axios
      .get("http://localhost:5000/api/franchise/alldistrict")
      .then((res) => {
        setDistricts(res.data);
      });
  };

  const fetchData = useCallback(() => {
    axios
      .get(
        `http://localhost:5000/api/franchise/getallfranchise/district?district=${districtValue}&city=${stateValue}`
      )
      .then((res) => {
        setFranchise(res.data[0]);
        console.log(res.data[0]);
      });
  }, [stateValue, districtValue]);

  useEffect(() => {
    fetchDistrict();
  }, []);

  useEffect(() => {
    fetchState(districtValue);
  }, [districtValue]);

  useEffect(() => {
    fetchData();
  }, [stateValue, districtValue, fetchData]);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("franchise_id", selectedFranchise);
    productList.forEach((product, index) => {
      formData.append(`products[${index}][product]`, product.description);
      formData.append(`products[${index}][weight]`, product.weight);
      formData.append(`products[${index}][unit]`, product.unit);
      formData.append(`products[${index}][quantity]`, product.quantity);
    });
    formData.append("image", selectedImage);
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:5000/api/order/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setSuccess(res.data);
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    setSelectedFranchise("");
    setProductList([{ id: uuidv4(), description: "" }]);
    setSelectedImage(null);
  };

  const units = ["kg", "g", "lb", "piece", "packet", "bottle", "liter"];
  const quantityOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <div className="p-4 flex flex-col gap-[30px] font-poppins">
      <header className="bg-white shadow h-[60px] flex items-center p-2">
        <div className=" flex items-center gap-[10px]">
          <i className="text-[25px] text-gray-500">
            <MdOutlineDashboardCustomize />
          </i>
          <h1 className="text-md mob:text-xl font-bold text-gray-800 font-mont">
            Buy Products
          </h1>
        </div>
      </header>
      <div className="flex flex-col gap-[20px] lg:gap-0">
        <div className="flex text-[14px] mob:text-[15px] sm:text-[16px] gap-[10px]  lg:gap-[30px] justify-between mob:justify-end ">
          <div className="flex flex-col gap-[5px]">
            <div className="flex items-center gap-2 justify-between">
              <label className="font-bold">District</label>
              <i className="text-[green]">
                <GiEarthAfricaEurope />
              </i>
            </div>
            <select
              value={districtValue}
              onChange={(e) => {
                handleChangeDistrict(e);
                fetchState(e.target.value);
                console.log(e.target.value);
              }}
              className="outline-none px-[5px] border border-gray-300"
            >
              {districts.map((row) => (
                <option key={row} value={row}>
                  {row}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex items-center gap-2 justify-between">
              <label className="font-bold">Location</label>
              <i className="text-[red]">
                <ImLocation />
              </i>
            </div>
            <select
              value={stateValue}
              onChange={handleChangeState}
              className="outline-none px-[5px] border border-gray-300"
            >
              <option value="">Select State</option>
              {states.map((row) => (
                <option key={row.city} value={row.city}>
                  {row.city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4 text-[14px] mob:text-[15px] sm:text-[16px]">
          <label htmlFor="franchise" className="block font-bold mb-1">
            Select Franchise:
          </label>
          <div className="relative">
            <select
              id="franchise"
              className="border border-gray-300 text-gray-500 rounded px-3 py-2 w-full outline-none appearance-none bg-white pr-8"
              value={selectedFranchise}
              onChange={handleFranchiseChange}
            >
              <option value="">Select a franchise</option>
              {franchise.map((row) => (
                <option key={row} value={row.id}>
                  {row.franchise_name}
                </option>
              ))}
            </select>
            <HiOutlineArrowNarrowDown className="absolute top-0 right-0 mt-3 mr-3 text-gray-500" />
          </div>
        </div>

        <div className="mb-4 text-[14px] mob:text-[15px] sm:text-[16px]">
          <label className="block font-bold mb-1">Product:</label>
          {productList.map((product, index) => (
            <div
              key={product.id}
              className="flex  flex-col md:flex-row items-center gap-[10px] xl:gap-[20px]"
            >
              <div className="flex flex-col p-2 bg-gradient-to-br from-gray-100 to-gray-200  md:flex-row gap-[10px] items-center mb-2 w-full">
                <div className="w-full  flex flex-col gap-[10px]">
                  <div className="relative">
                    <input
                      type="text"
                      className="border border-gray-300 outline-none rounded px-3 py-2 w-full mr-2 "
                      placeholder="Enter products"
                      value={product.description}
                      onChange={(event) =>
                        handleProductDescriptionChange(index, event)
                      }
                    />
                    <i className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-[16px] ">
                      <BsHeart/>
                    </i>
                  </div>
                  <input
                    type="text"
                    className="border border-gray-300 outline-none rounded px-3 py-2 w-full xl:w-3/2 mr-2"
                    placeholder="Enter Weight"
                    value={product.weight}
                    onChange={(event) => handleWeightChange(index, event)}
                  />
                </div>

                <div className="w-full flex flex-col gap-[10px]">
                  {" "}
                  <select
                    className="border border-gray-300 outline-none rounded px-3 py-2 w-full xl:w-3/2 mr-2"
                    value={product.unit}
                    onChange={(event) => handleUnitChange(index, event)}
                  >
                    <option value="">Select Unit</option>
                    {units.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                  <select
                    className="border border-gray-300 outline-none rounded px-3 py-2 w-full xl:w-3/2 mr-2"
                    value={product.quantity}
                    onChange={(event) => handleQuantityChange(index, event)}
                  >
                    <option value="">Select Quantity</option>
                    {quantityOptions.map((quantity) => (
                      <option key={quantity} value={quantity}>
                        {quantity}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                {index === productList.length - 1 && (
                  <HiOutlinePlusCircle
                    className="text-blue-500 text-[30px] cursor-pointer"
                    onClick={handleAddProduct}
                  />
                )}
                {index !== productList.length - 1 && (
                  <HiOutlineMinusCircle
                    className="text-red-500 text-[30px] cursor-pointer"
                    onClick={() => handleRemoveProduct(index)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4 text-[14px] mob:text-[15px] sm:text-[16px]">
          <label htmlFor="image" className="block font-bold mb-1">
            Upload Image:
          </label>
          <div className="flex items-center">
            <label
              htmlFor="image"
              className="border border-gray-300 rounded px-3 py-2 lg:flex items-center hidden cursor-pointer"
            >
              <FiUpload className="mr-2" />
              {selectedImage ? selectedImage.name : "Choose a file"}
            </label>
            {selectedImage && (
              <button className="text-red-500 ml-2" onClick={handleRemoveImage}>
                Remove
              </button>
            )}
            <input
              type="file"
              id="image"
              className="lg:hidden"
              onChange={handleImageUpload}
            />
          </div>
          {selectedImage && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="max-w-[200px] max-h-[200px]"
              />
            </div>
          )}
        </div>

        <div className="flex gap-[10px] items-center">
          <button
            className="bg-[#ffb647] text-[14px] mob:text-[15px] sm:text-[16px] font-mont text-white font-semibold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <span className="text-14 font-poppins text-[red]">{success}</span>
        </div>
      </div>
    </div>
  );
}

export default CustomerBuyproducts;
