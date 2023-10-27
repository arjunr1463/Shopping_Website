import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";

//Layouts
import MainLayout from "./pages/Layout/MainLayout";
import FranchiseLayout from "./pages/Layout/FranchiseLayout";
import CustomerLayout from "./pages/Layout/CustomerLayout";

import Index from "./pages/Index/Index";
import Home from "./pages/Home/Home";

//product
import ComboOffers from "./pages/Product/ComboOffers/ComboOffers";
import Offers from "./pages/Product/Offers/Offers";

//Franchise
import FranchiseRegistration from "./pages/Franchise/FranchiseRegistration/FranchiseRegistration";
import FranchiseLogin from "./pages/Franchise/FranchiseLogin/FranchiseLogin";

//Franchise-Dashboard
import FranchiseDashboard from "./pages/Franchise/FranchiseDashboard/FranchiseDashboard";

//Franchise-Product
import AllProducts from "./components/Franchise/FranchiseMain/Product/AllProducts";
import NewProduct from "./components/Franchise/FranchiseMain/Product/NewProduct";

//Franchise-order
import PendingOrders from "./components/Franchise/FranchiseMain/Order/PendingOrders";
import AcceptedOrders from "./components/Franchise/FranchiseMain/Order/AcceptedOrders";
import InpreparationOrders from "./components/Franchise/FranchiseMain/Order/InpreparationOrders";
import ShippedOrders from "./components/Franchise/FranchiseMain/Order/ShippedOrders";
import CompletedOrders from "./components/Franchise/FranchiseMain/Order/CompletedOrders";
import RejectedOrders from "./components/Franchise/FranchiseMain/Order/RejectedOrders";

//Franchise-Combo
import FranchiseCombooffers from "./components/Product/ComboOffers/ComboOffers";
import NewCombooffer from "./components/Franchise/FranchiseMain/ComboOffer/NewCombooffer";

//Franchise-Invoice
import AllInvoice from "./components/Franchise/FranchiseMain/Invoice/AllInvoice";
import PendingPayments from "./components/Franchise/FranchiseMain/Payment/PendingPayments";

//customer
import CustomerRegistration from "./pages/Customer/CustomerRegistration/CustomerRegistration";
import CustomerLogin from "./pages/Customer/CustomerLogin/CustomerLogin";
import CustomerProfile from "./pages/Customer/CustomerDashbord/CustomerProfile";
import MyOrder from "./pages/Customer/CustomerDashbord/MyOrder";
import CustomerChangepassword from "./pages/Customer/CustomerDashbord/CustomerChangepassword";
import CustomerDashboard from "./pages/Customer/CustomerDashbord/CustomerDashboard";
import CustomerBuyproducts from "./pages/Customer/CustomerDashbord/CustomerBuyproducts";
import CustomerCart from "./pages/Customer/CustomerDashbord/CustomerCart";
import ViewCart from "./pages/Customer/CustomerDashbord/ViewCart";
import CustomerVieworder from "./pages/Customer/CustomerDashbord/CustomerVieworder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/customer/registration",
        element: <CustomerRegistration />,
      },
      {
        path: "/customer/login",
        element: <CustomerLogin />,
      },
      {
        path: "/franchise/login",
        element: <FranchiseLogin />,
      },
      {
        path: "/franchise/registration",
        element: <FranchiseRegistration />,
      },
      {
        path: "/combo-offers",
        element: <ComboOffers />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
    ],
  },
  {
    path: "/",
    element: <FranchiseLayout />,
    children: [
      {
        path: "/franchise/dashboard",
        element: <FranchiseDashboard />,
      },
      {
        path: "/franchise/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/franchise/newproduct",
        element: <NewProduct />,
      },
      {
        path: "/franchise/pendingorders",
        element: <PendingOrders />,
      },
      {
        path: "/franchise/acceptedorders",
        element: <AcceptedOrders />,
      },
      {
        path: "/franchise/inpreparationorders",
        element: <InpreparationOrders />,
      },
      {
        path: "/franchise/shippedorders",
        element: <ShippedOrders />,
      },
      {
        path: "/franchise/completedorders",
        element: <CompletedOrders />,
      },
      {
        path: "/franchise/rejectedorders",
        element: <RejectedOrders />,
      },
      {
        path: "/franchise/combooffers",
        element: <FranchiseCombooffers />,
      },
      {
        path: "/franchise/newcombooffer",
        element: <NewCombooffer />,
      },
      {
        path: "/franchise/allinvoice",
        element: <AllInvoice />,
      },
      {
        path: "/franchise/pendingpayments",
        element: <PendingPayments />,
      },
    ],
  },
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      {
        path: "/customer/dashboard",
        element: <CustomerProfile />,
      },
      {
        path: "/customer-myorder",
        element: <MyOrder />,
      },
      {
        path: "/customer-changepassword",
        element: <CustomerChangepassword />,
      },
      {
        path: "/customer-dashboard",
        element: <CustomerDashboard />,
      },
      {
        path: "/customer-buyproducts",
        element: <CustomerBuyproducts />,
      },
      {
        path: "/customer-cart",
        element: <CustomerCart />,
      },
      {
        path: "/customer-viewinvoice/:id",
        element: <ViewCart />,
      },
      {
        path: "/customer-vieworder/:id",
        element: <CustomerVieworder />,
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
