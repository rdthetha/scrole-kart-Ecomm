import React ,{useReducer} from 'react'
import { useProduct } from '../../context/filterContext';
export default function Sidebar() {
const { state, dispatch } = useProduct();
const {sortBy,showInventoryAll,showFastDelivery,showCategory,showRating}=state
return (
<div className="ec-side-navbar">
    <div className="ec-product-filter">

        <div className="ec-first-element-side-navbar">
            <div className="h3">Filters</div>
            <a className="h5 italic-text" href="">Clear!</a>
        </div>
        <div className='h5'>Price: </div>
        <input type="range" max={10000} step={1000} defaultValue={5000} onChange={(event)=>
        dispatch({ type: "FILTER_BY_PRICE", payload: event.target.value })
        }
        />

        <div className="h5">Sort By:</div>
        <div>
            <label className='category-label' name="sort"><input onChange={()=> {
                dispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
                }}
                checked={sortBy && sortBy === "HIGH_TO_LOW"}type="radio" />High-To-Low</label>
            <label className='category-label' name="sort"><input onChange={()=> {
                dispatch({ type: "SORT", payload: "LOW_TO_HIGH" });
                }}
                checked={sortBy && sortBy === "LOW_TO_HIGH"}type="radio" />Low-To-High</label>
        </div>


        <div className="h5">Option:</div>
        <div>
            <label className='category-label'><input type="checkbox" checked={showInventoryAll} onChange={()=>
                dispatch({ type: "TOGGLE_INVENTORY" })}/>Show out of Stock</label>

            <label className='category-label'><input type="checkbox" checked={showFastDelivery} onChange={()=>
                dispatch({ type: "TOGGLE_DELIVERY" })}/>Express Delivery</label>
        </div>

        <div className="h5">Category:</div>
        <div>
            <label className='category-label'><input onChange={()=> {
                dispatch({ type: "TOGGLE_CATEGORY", payload: "RunningShoes" });
                }}
                checked={showCategory && showCategory === "RunningShoes"} type="checkbox" />Running Shoes</label>
            <label className='category-label'><input onChange={()=> {
                dispatch({ type: "TOGGLE_CATEGORY", payload: "CricketShoes" });
                }}
                checked={showCategory && showCategory === "CricketShoes"} type="checkbox" />Cricket Shoes</label>
            <label className='category-label'><input type="checkbox" />Indoor Shoes</label>
            <label className='category-label'><input type="checkbox" />Gym Shoes</label>
        </div>

        <div className="h5">Rating:</div>
        <div className="ec-radio">
            <label className='category-label'><input type="radio" onChange={()=> dispatch({
                type:"FILTER_BY_RATING",payload: "RATING_FOUR" })}
                checked={showRating && showRating === "RATING_FOUR"}/>4 star & above</label>
            <label className='category-label'><input type="radio" onChange={()=> dispatch({
                type:"FILTER_BY_RATING",payload: "RATING_THREE" })}
                checked={showRating && showRating === "RATING_THREE"}/>3 star & above</label>
            <label className='category-label'><input type="radio" onChange={()=> dispatch({
                type:"FILTER_BY_RATING",payload: "RATING_TWO" })}
                checked={showRating && showRating === "RATING_TWO"}/>2 star & above</label>
        </div>
    </div>
</div>
)
}