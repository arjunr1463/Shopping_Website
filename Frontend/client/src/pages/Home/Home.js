import React, { useContext } from "react";
import Banner from "../../components/Banner/HomeBanner";
import Market from "../../components/Product/Market/Market";
import Featured from "../../components/Product/Featured/Featured";
import { MainContext } from "../../context/MainContext";

function Home() {
  const { ref } = useContext(MainContext);
  return (
    <div ref={ref} className="flex flex-col gap-10">
      <Banner />
      <Market />
      <Featured />
    </div>
  );
}

export default Home;
