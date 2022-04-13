import React ,{createContext,useContext, useReducer} from 'react'
import { DataTest } from '../data';

const CartContext= createContext();

const CartProvider=({children})=>{

    const CartReducer=(state,action)=>{
        
        switch(action.type){

            case"ADD_TO_CART": 
            return{...state,cart:[...state.cart,{...action.payload,qty:1}]}
            case"DELETE_FROM_CART":
            return{...state,cart:state.cart
                .filter((c)=>c.id!==action.payload.id)};
            case"ADD_QUANTITY":
            return {...state,cart:state.cart
                .filter((c)=>c.id===action.payload.id?c.qty=action.payload.qty+1:c.qty)};
            case"REDUCE_QUANTITY":
            return {...state,cart:state.cart
                .filter((c)=>c.id===action.payload.id?c.qty=action.payload.qty-1:c.qty)
                .filter(((c)=>c.qty!==0))};
            case"CHANGE_QUANTITY":
            return {...state,cart:state.cart
                .filter((c)=>c.id===action.payload.id?c.qty=action.payload.qty:c.qty)};
            default:return state;
        }
    }

    const [state,dispatch]=useReducer(CartReducer,{products: DataTest,cart:[]})

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )


}
const useCart = () => useContext(CartContext);

export { useCart, CartContext, CartProvider };
