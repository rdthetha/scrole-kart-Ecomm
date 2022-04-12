import React from 'react'
import { useWishlist } from '../../context/wishlistContext'
import { useCart } from '../../context/cartContext'
export default function WishlistCard() {

    const {wishlistState:{wishlist},wishDispatch}=useWishlist();
    const {state:{cart},dispatch}=useCart();

return (
<div className="ec-wishlist-content">
    {wishlist.length===0 && <div className='h3'>Add items to wishlist!!</div>}
    {wishlist.map((item)=>

    <div className="card-container" key={item.id}>
        <div className="img-contain">
            <img src={item.img} alt="shoes" />
            <button className="btn-primary btn-outline-secondary btn-card btn-icon btn-cross"><i
                    className="fa-solid fa-heart"></i></button>
        </div>
        <div className="card-details">
            <div className="name">{item.brand}</div>
            <div className="ec-price-detail">
                <div className="italic-text h5">Price :&nbsp;</div>
                <div className="h6">Rs&nbsp;</div>
                <div className="omit-text h6">{item.originalPrice}</div>
                <div className="h6">&nbsp;{item.price}</div>
                <div className="small-text price-discount">-{item.discount}%</div>
            </div>
            <div className="btn-card-details">
            {cart.some(p=>p.id===item.id)?(<button className="btn-primary btn-outline-primary btn-card">Already in cart</button>):(<button onClick={()=>{dispatch({type:"ADD_TO_CART",payload:item});wishDispatch({type:"DELETE_FROM_WISHLIST",payload:item})}}className="btn-primary btn-outline-primary btn-card">Move to cart</button>)}
                <button onClick={()=>wishDispatch({type:"DELETE_FROM_WISHLIST",payload:item})}className="btn-primary btn-outline-secondary btn-card">Remove from wishlist</button>

            </div>
        </div>
    </div>
    )}
</div>
)
}