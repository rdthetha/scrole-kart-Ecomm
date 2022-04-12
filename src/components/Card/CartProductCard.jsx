import React  from 'react'
import { useCart } from '../../context/cartContext'
export default function CartProductCard() {
const {state:{cart},dispatch}=useCart();
console.log(cart)
return (

<div className="ec-product-card-cart">
    {cart.length===0 && <div className='h3'>Add items to cart!!</div>}
    {cart.map((item)=>
    <div className="card-container-horizontal">
        <div className="img-contain">
            <img src={item.img} alt="shoes" />
        </div>
        <div className="card-detail-horizontal">
            <div className="card-details">
                <div className="name">{item.Brand}</div>
                <div className="ec-price-detail">
                    <div className="h6">Rs&nbsp;</div>
                    <div className="omit-text h6">{item.originalPrice}</div>
                    <div className="h5">&nbsp;{item.price}</div>
                    <div className="small-text price-discount">-{item.discount}%</div>
                </div>
                <div className="small-text">Quantity: </div>
                <div className="ec-product-quantity">
                    <button 
                    onClick={()=>dispatch({type:"REDUCE_QUANTITY",payload:{id:item.id,qty:item.qty}})}
                    className="ec-price-btn ec-minus">-</button>
                    <div value={item.qty} 
                    onChange={(e)=>dispatch({type:"CHANGE_QUANTITY",payload:{id:item.id,qty:e.target.value}})} 
                    className=" h6 ec-price-counter">{item.qty}</div>
                    <button 
                    onClick={()=>dispatch({type:"ADD_QUANTITY",payload:{id:item.id,qty:item.qty}})}
                    className="ec-price-btn ec-plus">+</button> 
                </div>
                <div className="btn-card-details btn-card-cart">
                    <button onClick={()=>dispatch({type:"DELETE_FROM_CART",payload:item})}
                    className="btn-primary btn-outline-primary btn-card">Remove from cart</button>
                    <button className="btn-primary btn-outline-secondary btn-card">Add to wishlist</button>
                </div>
            </div>
        </div>
    </div>
    )}
</div>
)
}