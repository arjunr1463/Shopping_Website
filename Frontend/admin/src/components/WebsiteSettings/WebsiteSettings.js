import { useState } from "react";
import classNames from "classnames";
import Site from "./Site";
import Contact from "./Contact";
import Location from "./Location";
import SmsConfig from "./SmsConfig";
import OtherSettings from "./OtherSettings";

const tabs = [
  {
    label: "Site",
    component: Site,
  },
  {
    label: "Contact",
    component: Contact,
  },
  {
    label: "Location",
    component: Location,
  },
  {
    label: "SMS configuration",
    component: SmsConfig,
  },
  {
    label: "Other Settings",
    component: OtherSettings,
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
      <div className="p-4 bg-white  shadow-lg">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default SettingsTab;
