import React from 'react'
import NavigationTop from '../../components/Navigation/navigation-top'
import './Cart.css';
import CartProductCard from '../../components/Card/CartProductCard'
import TotalBill from '../../components/Card/TotalBill';
export default function Cart() {


return (
<div className="ec-first-container">
    <NavigationTop />
    <div className="h3 center-text ec-head-text">My Cart!</div>
    <div className="ec-cart-container">
        <CartProductCard />
        <TotalBill/>
    </div>
</div>
)
}