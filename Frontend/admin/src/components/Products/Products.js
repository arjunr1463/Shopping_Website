import { useState } from "react";
import classNames from "classnames";
import AllProducts from "./AllProducts";
import AllCategory from "./AllCategory";
import AllSubcategory from "./AllSubcategory";

const tabs = [
  {
    label: "All products",
    component: AllProducts,
  },
  {
    label: "All Category",
    component: AllCategory,
  },
  {
    label: "All Subcategory",
    component: AllSubcategory,
  },
];

const SettingsTab = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const ActiveComponent = tabs.find((tab) => tab.label === activeTab).component;

  return (
    <div className="py-[10px] px-[10px] flex flex-col gap-[30px]">
      <div className=" bg-[#e9ecef] py-[15px] px-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={classNames(
              "px-4 py-2 font-mont font-semibold text-sm  ",
              activeTab === tab.label
                ? "bg-[#cccccc] duration-500"
                : "hover:bg-gray-300 duration-500 text-gray-600"
            )}
            onClick={() => handleClick(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-[15px] font-poppins">
        <div className="w-full">
          <select className="border-[1px] outline-none h-[40px] w-full">
            <option></option>
            <option>Grocery and staples</option>
            <option>Baby care</option>
            <option>Bread & Bakery</option>
          </select>
        </div>
        <div className="w-full">
          <select className="border-[1px] outline-none h-[40px] w-full">
            <option></option>
            <option>Grocery and staples</option>
            <option>Baby care</option>
            <option>Bread & Bakery</option>
          </select>
        </div>
        <div>
            <button className="bg-[#fc5b62] text-white h-[40px] w-[120px] font-mont font-bold">Search</button>
        </div>
      </div>
      <div className="p-4 bg-white  shadow-lg">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default SettingsTab;
