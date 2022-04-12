import React from 'react'
import { useProduct } from '../../context/filterContext'
import { useCart } from '../../context/cartContext';
import { useWishlist } from '../../context/wishlistContext';
export default function ProductCard() {
  const{state:{cart},dispatch}=useCart();
  const {filteredData}=useProduct();
  const {wishlistState:{wishlist},wishDispatch}=useWishlist();
  return (
    <div className="ec-product-content">
      {filteredData.length===0 && <div className='h3'>No Results Found!!</div>}
       { filteredData.map((item)=>{
           return <div className="card-container" key={item.id}>
             {!item.inStock && <div className="overlay">
              <div className="overlay-text">Out of Stock!!</div>
              </div>}
           <div className="img-contain">
             <img src={item.img} alt="shoes" />
           </div>
           <div className="card-details">
             <span className="tag">{item.ratings}</span>
             {item.fastDelivery&& <span className="tag">Fast Delivery</span>}
             {!item.inStock&& <span className="tag">Out of Stock</span>}
             <div className="name">{item.Brand}</div>
             <p>{item.Detail}</p>
             <div className="ec-price-detail">
               <div className="italic-text h5">Price :&nbsp;</div>
               <div className="h6">Rs&nbsp;</div>
               <div className="omit-text h6">{item.originalPrice}</div>
               <div className="h5">&nbsp;{item.price}</div>
               <div className="small-text price-discount">-{item.discount}%</div>
             </div>
             <div className="btn-card-details">
             {cart.some(p=>p.id===item.id)?
             (<button onClick={()=>dispatch({type:"DELETE_FROM_CART",payload:item})}className="btn-primary btn-outline-secondary btn-card">Remove</button>):

             (<button onClick={()=>dispatch({type:"ADD_TO_CART",payload:item})}className="btn-primary btn-outline-primary btn-card">Add to cart</button>)}
            
            {wishlist.some(p=>p.id===item.id)?
            (
              <button onClick={()=>wishDispatch({type:"DELETE_FROM_WISHLIST",payload:item})}className="btn-primary btn-outline-secondary btn-card">Remove from Wishlist</button>
            )
            :(
            <button onClick={()=>wishDispatch({type:"ADD_TO_WISHLIST",payload:item})}className="btn-primary btn-outline-secondary btn-card">Move to Wishlist</button>
            )
            }
               {/* <button className="btn-primary btn-outline-secondary btn-card btn-icon"><i
                   className="fa-solid fa-heart"></i></button> */}
             </div>
           </div>
           </div>
           
        })}
    </div>
  )
}
