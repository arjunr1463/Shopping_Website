import React from "react";
import { AiFillFileText } from "react-icons/ai";
import {Link} from "react-router-dom"

function DeliveryChargeSettings() {
  return (
    <div className="flex flex-col gap-[20px] w-full h-full px-[10px] py-[10px]">
      <div className="bg-[#e9ecef] py-[10px] px-[10px] text-[15px] font-mont font-semibold flex flex-row gap-[10px]">
        <span className="text-[#577eac]">Delivery charge settings</span>
        <span className="text-gray-500">/ Delivery</span>
      </div>
      <div className="flex flex-col gap-[15px] p-4 bg-white  shadow-lg">
        <div className="flex items-center gap-[10px] border-b-[1px]">
          <i className="text-gray-300 text-[25px]">
            <AiFillFileText />
          </i>
          <span className="font-poppins text-[22px]">Delivery charges</span>
        </div>
        <div className="overflow-x-scroll ">
          <table className="text-gray-600 font-mont text-[14px] w-full">
            <thead>
              <tr>
                <th className="border-[1px] py-[10px] px-[20px] lg:px-0">
                  Delivery Type
                </th>
                <th className="border-[1px] py-[10px] px-[20px] lg:px-0">
                  Delivery Amount
                </th>
                <th className="border-[1px] py-[10px] px-[20px] lg:px-0">
                  Time
                </th>
                <th className="border-[1px] py-[10px] px-[20px] lg:px-0">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="border-[1px] text-center font-poppins text-[15px]  text-gray-500">
              <td className="border-[1px] py-[10px]">Normal</td>
              <td className="border-[1px] ">Free</td>
              <td className="border-[1px] ">Within 8 hours</td>
              <td className="border-[1px] ">
                <Link to="/admin/editdeliverycharge" className="bg-[#fc5b62] text-white px-[10px] py-[2px] font-mont font-semibold">
                    Edit
                </Link>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DeliveryChargeSettings;
