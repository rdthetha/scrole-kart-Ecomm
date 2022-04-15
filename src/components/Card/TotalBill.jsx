import React ,{useState,useEffect} from 'react'
import { useCart } from '../../context/cartContext'
export default function TotalBill() {

const {state:{cart}}=useCart();
const [price,setPrice]=useState(0)
const [total,setTotal]= useState(0);
const [discount,setDiscount]=useState(0);

useEffect(()=>{
setPrice(cart.reduce((acc,current)=>acc+Number(current.originalPrice)*current.qty,0));
setTotal(cart.reduce((acc,current)=>acc+Number((current.price)*current.qty),300));
setDiscount(cart.reduce((acc,current)=>acc+(Number((current.originalPrice)*current.qty)-Number((current.price)*current.qty)),0))}
,[cart]
)
  return (
    <>
        {cart.length!==0 && <div className="ec-product-total">
            <div className="ec-bill-container">
                <div className="h2">Price Details</div>
                <hr />
                <div className="ec-bill-section">
                    <div className="h5">Price({cart.length} items)</div>
                    <div className="h5">Rs {price}</div>
                </div>
                <div className="ec-bill-section">
                    <div className="h5">Discount</div>
                    <div className="h5">-Rs {discount}</div>
                </div>
                <div className="ec-bill-section">
                    <div className="h5">Delivery Charges</div>
                    <div className="h5">+Rs 300</div>
                </div>
                <hr />
                <div className="ec-bill-section">
                    <div className="h5">Total</div>
                    <div className="h5">Rs {total}</div>
                </div>
                <hr />
                <div className="ec-bill-section">
                    <div className="h6 ">You will save Rs {discount} . Yayy!!</div>
                </div>
                <div className="ec-bill-section-btn">
                    <button className="btn-primary btn-outline-secondary btn-card">Place Order</button>
                </div>
            </div>
        </div>}
    </>

  )
}
