import { createContext, useState, useRef } from "react";
export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [CustomerRegSuccess, setCustomerRegSuccess] = useState(false);
  const [franchiseReg, setFranchiseReg] = useState("one");
  const [franchiseRegSuccess, setFranchiseRegSuccess] = useState(false);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = useRef("");

  //Category
  const [categoryData, setCategoryData] = useState([]);
  return (
    <MainContext.Provider
      value={{
        openCart,
        setOpenCart,
        CustomerRegSuccess,
        setCustomerRegSuccess,
        franchiseReg,
        setFranchiseReg,
        franchiseRegSuccess,
        setFranchiseRegSuccess,
        loading,
        setLoading,
        categoryData,
        setCategoryData,
        productData,
        setProductData,

        ref,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
