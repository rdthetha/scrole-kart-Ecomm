function FilterReducer(state, action) {
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


export {FilterReducer,WishlistReducer,CartReducer}