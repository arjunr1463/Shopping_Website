import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { MainContext } from "../../context/MainContext";

function MainLayout() {
  const { openCart } = useContext(MainContext);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className={`${openCart && "h-screen overflow-hidden"}`}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
