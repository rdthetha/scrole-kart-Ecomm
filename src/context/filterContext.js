import React, { createContext, useContext, useReducer } from "react";
import { DataTest } from "../data";
import {getSortedData,getFilteredData,getPriceRange,getRatings} from '../utility.js'
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
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
            case "TOGGLE_CATEGORY":
                return {...state,showBrand:[...state.showCategory,action.payload]};
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
const { showInventoryAll, showFastDelivery, showCategory,sortBy }=state;
const sortedData = getSortedData(DataTest, sortBy);
const optionData = getFilteredData(sortedData, {
    showFastDelivery,
    showInventoryAll
  });
const priceData= getPriceRange(optionData,state)
const filteredData= getRatings(priceData,state)
  return (
    <ProductContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductContext, ProductProvider };