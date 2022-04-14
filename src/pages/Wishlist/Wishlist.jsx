import React from 'react'
import WishlistCard from '../../components/Card/WishlistCard'
import NavigationTop from '../../components/Navigation/navigation-top'
import "./Wishlist.css"
export default function Wishlist() {
  return (
    <div>
        <div className="ec-first-container">
        <NavigationTop/>
        <div className="ec-wishlist-container">
            <div className="h3 center-text ec-head-text">My wishlist!</div>
        <WishlistCard/>
        </div>
    </div>
    </div>
  )
}
