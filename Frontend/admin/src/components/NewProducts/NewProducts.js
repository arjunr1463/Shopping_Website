import React, { useState } from "react";
import { AiFillFileText } from "react-icons/ai";

function NewProducts() {
  const [inputFields, setInputFields] = useState([
    { quantity: "", mrp: "", salePrice: "", offer: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ quantity: "", mrp: "", salePrice: "", offer: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  return (
    <div className="flex flex-col gap-[20px] w-full h-full px-[10px] pt-[10px] pb-[80px]">
      <div className="bg-[#e9ecef] py-[10px] px-[10px] text-[15px] font-mont font-semibold flex flex-row gap-[10px]">
        <span className="text-[#577eac]">Products</span>
        <span className="text-gray-500">/ New product</span>
      </div>
      <div className="flex flex-col gap-[20px] p-4 bg-white  shadow-lg">
        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-[10px] border-b-[1px]">
            <i className="text-gray-300 text-[25px]">
              <AiFillFileText />
            </i>
            <span className="font-poppins text-[22px]">New products</span>
          </div>
          <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full">
              <span className="font-poppins">
                Product Category<span className="text-[red]">*</span>
              </span>
              <select className="border-[1px] outline-none h-[40px] w-full text-gray-600">
                <option>Select category</option>
                <option>Grocery and staples</option>
                <option>Baby care</option>
                <option>Bread & Bakery</option>
              </select>
            </div>
            <div className="flex flex-col gap-[5px]  w-full">
              <span className="font-poppins">
                Product Subcategory<span className="text-[red]">*</span>
              </span>
              <select className="border-[1px] outline-none h-[40px] w-full text-gray-600">
                <option>Select subcategory</option>
                <option>Grocery and staples</option>
                <option>Baby care</option>
                <option>Bread & Bakery</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full">
              <span className="font-poppins">
                Item Title<span className="text-[red]">*</span>
              </span>
              <input
                type="text"
                className="outline-none border-[1px] h-[40px] rounded-sm px-[10px]"
                placeholder="Product title"
              />
            </div>
            <div className="flex flex-col gap-[5px]  w-full">
              <span className="font-poppins">Product Description</span>
              <textarea
                type="text"
                className="outline-none border-[1px] h-[80px] rounded-sm px-[10px]"
                placeholder="Product description"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-[10px] border-b-[1px]">
            <i className="text-gray-300 text-[25px]">
              <AiFillFileText />
            </i>
            <span className="font-poppins text-[22px]">Price</span>
          </div>
          <div className="flex flex-col gap-[5px] w-full">
            <span className="font-poppins">
              Select Unit type<span className="text-[red]">*</span>
            </span>
            <div className="grid grid-cols-4 font-poppins">
              <label className="flex gap-[5px]">
                <input type="radio" name="unitType" value="kg" />
                kg
              </label>
              <label className="flex gap-[5px]">
                <input type="radio" name="unitType" value="litre" />
                litre
              </label>
              <label className="flex gap-[5px]">
                <input type="radio" name="unitType" value="gram" />
                gram
              </label>
              <label className="flex gap-[5px]">
                <input type="radio" name="unitType" value="number" />
                number
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] font-poppins">
            {inputFields.map((inputField, index) => (
              <div key={index} className="flex gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor={`quantity-${index}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${index}`}
                    name={`quantity-${index}`}
                    className="border-[1px] outline-none px-[10px] h-[40px]"
                    placeholder="quantity"
                    value={inputField.quantity}
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <label htmlFor={`mrp-${index}`}>Original Price/MRP:</label>
                  <input
                    type="number"
                    id={`mrp-${index}`}
                    name={`mrp-${index}`}
                    value={inputField.mrp}
                    className="border-[1px] outline-none px-[10px] h-[40px]"
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor={`salePrice-${index}`}>Sale Price:</label>
                  <input
                    type="number"
                    id={`salePrice-${index}`}
                    name={`salePrice-${index}`}
                    value={inputField.salePrice}
                    className="border-[1px] outline-none px-[10px] h-[40px]"
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor={`offer-${index}`}>Offer:</label>
                  <input
                    type="number"
                    id={`offer-${index}`}
                    name={`offer-${index}`}
                    value={inputField.offer}
                    className="border-[1px] outline-none px-[10px] h-[40px]"
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                </div>

                <div className="flex justify-center items-end">
                  <button
                    className="bg-[#fc5b62] h-[40px] text-white px-[10px] font-mont font-bold"
                    type="button"
                    onClick={() => handleRemoveFields(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <button
              className="bg-[#fc5b62] h-[40px] text-white px-[10px] font-mont font-bold"
              type="button"
              onClick={() => handleAddFields()}
            >
              Add more
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-[10px] border-b-[1px]">
            <i className="text-gray-300 text-[25px]">
              <AiFillFileText />
            </i>
            <span className="font-poppins text-[22px]">Product Features</span>
          </div>
          <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full">
              <span className="font-poppins">
                Product Image<span className="text-[red]">*</span>
              </span>
              <input
                type="file"
                className="outline-none  h-[40px] rounded-sm px-[10px]"
              />
            </div>
            <div className="flex flex-col gap-[5px]  w-full">
              <span className="font-poppins">Key Features</span>
              <textarea
                type="text"
                className="outline-none border-[1px] h-[80px] rounded-sm px-[10px]"
                placeholder="Key features"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px] text-[14px] font-poppins lg:flex-row lg:justify-between lg:gap-[20px]">
            <div className="flex flex-col gap-[5px]  w-full">
              <span className="font-poppins">Ingredients</span>
              <textarea
                type="text"
                className="outline-none border-[1px] h-[80px] rounded-sm px-[10px]"
                placeholder="Ingredients"
              />
            </div>
            <div className="flex flex-col gap-[5px]  w-full">
              <span className="font-poppins">Packing</span>
              <textarea
                type="text"
                className="outline-none border-[1px] h-[80px] rounded-sm px-[10px]"
                placeholder="Packing details"
              />
            </div>
          </div>
          <div>
            <button className="flex justify-center font-mont font-bold items-center bg-[#fc5b62] text-white w-[100px] h-[30px] rounded-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
