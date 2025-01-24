import React, { createContext, useState } from "react";
import { ProductData1, ProductData2 } from "../assets";

let product = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [getProduct, setProducts] = useState([
    ...ProductData1,
    ...ProductData2,
  ]);


  const value = { isLoading, getProduct, setIsLoading, setProducts };

  return (
    <product.Provider value={value}>            {children}       </product.Provider>
               


  );
};


export default  ProductProvider;
