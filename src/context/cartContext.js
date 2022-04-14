import React ,{createContext,useContext, useReducer,useState,useEffect} from 'react'
import axios from 'axios';
import {CartReducer} from '../Reducer/reducerAll'
const CartContext= createContext();

const CartProvider=({children})=>{

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

    const [state,dispatch]=useReducer(CartReducer,{products: data,cart:[]})

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
const useCart = () => useContext(CartContext);

export { useCart, CartContext, CartProvider };
