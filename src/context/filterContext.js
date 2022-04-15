import React, { createContext, useState,useContext, useReducer ,useEffect} from "react";
import axios from "axios";
import {FilterReducer} from '../Reducer/reducerAll'
import {getSortedData,getFilteredData,getPriceRange,getRatings,getCategory} from '../utility.js'
const ProductContext = createContext();

const ProductProvider = ({ children }) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get("/api/products");
            setData(response.data.products);
        }
        catch (e) {
            console.error(e);
        }
    }
    fetchData();} , []);
    
const [state, dispatch] = useReducer(
    FilterReducer,
    {
      showInventoryAll: true,
      showFastDelivery: false,
      showCategory: [],
      showPrice:0,
      showRating:null,
      sortBy: null
    }
  );
const { showInventoryAll, showFastDelivery,sortBy }=state;
const sortedData = getSortedData(data, sortBy);
const optionData = getFilteredData(sortedData, {
    showFastDelivery,
    showInventoryAll
  });
const priceData= getPriceRange(optionData,state)
const ratingData= getRatings(priceData,state)
const filteredData=getCategory(ratingData,state)
  return (
    <ProductContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };