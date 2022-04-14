import React ,{createContext,useContext, useReducer,useState,useEffect} from 'react'
import axios from 'axios';
import {WishlistReducer} from '../Reducer/reducerAll'
const WishlistContext=createContext();

const WishlistProvider=({children})=>{

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

    const [wishlistState,wishDispatch]=useReducer(WishlistReducer,{products: data,wishlist:[]})
    return(
        <WishlistContext.Provider value={{wishlistState,wishDispatch}}>
            {children}
        </WishlistContext.Provider>
    )

}

const useWishlist=()=>useContext(WishlistContext)

export{useWishlist,WishlistProvider,WishlistContext};