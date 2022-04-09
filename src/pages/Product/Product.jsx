import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavigationTop from '../../components/Navigation/navigation-top'
import './Product.css'
import ProductCard from '../../components/Card/ProductCard'
export default function product() {
return (
<div>
  <div className="ec-first-container">
    <NavigationTop />
    <div className="ec-product-container">
    <Sidebar />
    <ProductCard/>
    </div>
  </div>
</div>
)
}
