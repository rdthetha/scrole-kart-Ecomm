import React, { createContext, useState,useContext, useReducer ,useEffect} from "react";
import axios from "axios";
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
    console.log(data)
    function ReducerManage(state, action) {
        switch (action.type) {
            case "SORT":
                return { ...state, sortBy: action.payload };
            case "FILTER_BY_PRICE":
                return { ...state, showPrice: action.payload };
            case "FILTER_BY_RATING":
                  return { ...state, showRating: action.payload };
            case "TOGGLE_INVENTORY":
                return { ...state, showInventoryAll: !state.showInventoryAll };
            case "TOGGLE_DELIVERY":
                return { ...state, showFastDelivery: !state.showFastDelivery };
            case "ADD_CATEGORY":
                return {...state,showCategory:[...state.showCategory,action.payload]};
            case "DELETE_CATEGORY":
                return {...state,showCategory:state.showCategory.filter((category)=>category!==action.payload)};
            case "FILTER_CLEAR":
                return {
                  showInventoryAll: true,
                  showFastDelivery: false,
                  showCategory: [],
                  showPrice:0,
                  showRating:null,
                  sortBy: null
                }
            default:
                return state;
        }
    }

const [state, dispatch] = useReducer(
    ReducerManage,
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