import React ,{createContext,useContext, useReducer} from 'react'
import { DataTest } from '../data';

const WishlistContext=createContext();

const WishlistProvider=({children})=>{

    const WishlistReducer=(state,action)=>{

        switch(action.type){

            case"ADD_TO_WISHLIST": 
            return{...state,wishlist:[...state.wishlist,action.payload]};
            case"DELETE_FROM_WISHLIST":
            return{...state,wishlist:state.wishlist
                .filter((c)=>c.id!==action.payload.id)};
            default:return state;
        }
    }

    const [wishlistState,wishDispatch]=useReducer(WishlistReducer,{products: DataTest,wishlist:[]})

    return(
        <WishlistContext.Provider value={{wishlistState,wishDispatch}}>
            {children}
        </WishlistContext.Provider>
    )

}

const useWishlist=()=>useContext(WishlistContext)

export{useWishlist,WishlistProvider,WishlistContext};