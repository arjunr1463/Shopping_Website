import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./app.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import DashBoard from "./pages/Dashbord/Dashboard";
import DeliveryChargeSettings from "./pages/DeliveryChargeSettings/DeliveryChargeSettings";
import Disrict from "./pages/District/District";
import PaymentSettings from "./pages/PaymentSettings/PaymentSettings";
import State from "./pages/State/State";
import WebsiteSettings from "./pages/WebsiteSettings/WebsiteSettings";
import Franchise from "./pages/Franchise/Franchise";
import NewFranchise from "./pages/NewFranchise/NewFranchise";
import NewDeliveryLocation from "./pages/NewDeliveryLocation/NewDeliveryLocation";
import DeliveryLocationRequest from "./pages/DeliveryLocationRequest/DeliveryLocationRequest";
import DeliveryLocations from "./pages/DeliveryLocations/DeliveryLocations";
import DeliveryLocationDelete from "./pages/DeliveryLocationDelete/DeliveryLocationDelete";
import Invoice from "./pages/Invoice/Invoice";
import UpdatedPrice from "./pages/UpdatedPrice/UpdatedPrice";
import Products from "./pages/Products/Products";
import NewProduct from "./pages/NewProduct/NewProduct";
import NewCategory from "./pages/NewCategory/NewCategory";
import NewSubcategory from "./pages/NewSubcategory/NewSubcategory";
import ProductRequest from "./pages/ProductRequest/ProductRequest";
import AllDiscounts from "./pages/AllDiscounts/AllDiscounts";
import NewDiscounts from "./pages/NewDiscounts/NewDiscounts";
import AllComboOffers from "./pages/AllComboOffers/AllComboOffers";
import NewComboOffers from "./pages/NewComboOffers/NewComboOffers";
import ComboRequest from "./pages/ComboRequest/ComboRequest";
import Customers from "./pages/Customers/Customers";
import TrackPayment from "./pages/TrackPayment/TrackPayment";
import PendingOrders from "./pages/PendingOrders/PendingOrders";
import AcceptedOrders from "./pages/AcceptedOrders/AcceptedOrders";
import InpreparationOrders from "./pages/InpreparationOrders/InpreparationOrders";
import ShippedOrders from "./pages/ShippedOrders/ShippedOrders";
import DeliveredOrders from "./pages/DeliveredOrders/DeliveredOrders";
import RejectedOrders from "./pages/RejectedOrders/RejectedOrders";
import CreditOrders from "./pages/CreditOrders/CreditOrders";
import Invoices from "./pages/Invoices/Invoices";
import NewAdvertisement from "./pages/NewAdvertisement/NewAdvertisement";
import AllAdvertisement from "./pages/AllAdvertisement/AllAdvertisement";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import Refund from "./pages/Refund/Refund";
import FAQ from "./pages/FAQ/FAQ";
import EditDeliveryCharge from "./components/DeliveryChargeSettings/EditDeliveryCharge";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <NavBar />
      <div className="hidden lg:flex ">
        <SideBar />
        <div className="w-full h-[95vh] bg-[#f6f6f6] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
      <div className="lg:hidden h-[95vh] overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/admin/websitesettings",
        element: <WebsiteSettings />,
      },
      {
        path: "/admin/paymentsettings",
        element: <PaymentSettings />,
      },
      {
        path: "/admin/deliverychargesettings",
        element: <DeliveryChargeSettings />,
      },
      {
        path: "/admin/state",
        element: <State />,
      },
      {
        path: "/admin/district",
        element: <Disrict />,
      },
      {
        path: "/admin/franchise",
        element: <Franchise />,
      },
      {
        path: "/admin/newfranchise",
        element: <NewFranchise />,
      },
      {
        path: "/admin/newdeliverylocation",
        element: <NewDeliveryLocation />,
      },
      {
        path: "/admin/deliverylocationrequest",
        element: <DeliveryLocationRequest />,
      },
      {
        path: "/admin/deliverylocation",
        element: <DeliveryLocations />,
      },
      {
        path: "/admin/deliverylocationdelete",
        element: <DeliveryLocationDelete />,
      },
      {
        path: "/admin/invoice",
        element: <Invoice />,
      },
      {
        path: "/admin/updatedprice",
        element: <UpdatedPrice />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/newproducts",
        element: <NewProduct />,
      },
      {
        path: "/admin/newcategory",
        element: <NewCategory />,
      },
      {
        path: "/admin/newsubcategory",
        element: <NewSubcategory />,
      },
      {
        path: "/admin/productrequest",
        element: <ProductRequest />,
      },
      {
        path: "/admin/alldiscounts",
        element: <AllDiscounts />,
      },
      {
        path: "/admin/newdiscounts",
        element: <NewDiscounts />,
      },
      {
        path: "/admin/allcombooffers",
        element: <AllComboOffers />,
      },
      {
        path: "/admin/newcombooffers",
        element: <NewComboOffers />,
      },
      {
        path: "/admin/comborequest",
        element: <ComboRequest />,
      },
      {
        path: "/admin/customers",
        element: <Customers />,
      },
      {
        path: "/admin/trackpayment",
        element: <TrackPayment />,
      },
      {
        path: "/admin/pendingorders",
        element: <PendingOrders />,
      },
      {
        path: "/admin/acceptedorders",
        element: <AcceptedOrders />,
      },
      {
        path: "/admin/inpreparationorders",
        element: <InpreparationOrders />,
      },
      {
        path: "/admin/shippedorders",
        element: <ShippedOrders />,
      },
      {
        path: "/admin/deliveredorders",
        element: <DeliveredOrders />,
      },
      {
        path: "/admin/rejectedorders",
        element: <RejectedOrders />,
      },
      {
        path: "/admin/creditorders",
        element: <CreditOrders />,
      },
      {
        path: "/admin/invoices",
        element: <Invoices />,
      },
      {
        path: "/admin/newadvertisement",
        element: <NewAdvertisement />,
      },
      {
        path: "/admin/alladvertisement",
        element: <AllAdvertisement />,
      },
      {
        path: "/admin/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/admin/contactus",
        element: <ContactUs />,
      },
      {
        path: "/admin/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/admin/termsofuse",
        element: <TermsOfUse />,
      },
      {
        path: "/admin/refund",
        element: <Refund />,
      },
      {
        path: "/admin/FAQ",
        element: <FAQ />,
      },
      {
        path: "/admin/editdeliverycharge",
        element: <EditDeliveryCharge />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
