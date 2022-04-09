import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../image/cricket-shoe.jpg'
import img2 from '../../image/run-shoes.jpg'
import img3 from '../../image/indoor-shoe.jpg'
import landingimg from '../../image/shoe-final.png'
export default function LandingContent() {
return (
<div>
    <div class="first-section">
        <div class="landing-content">
            <div class="h3">Welcome to ScroleKart! <br />Best Deals on shoes round the year!</div>
            <div class="small-text">Exclusive collection</div>
            <Link to='/ProductPage'><button class="btn-primary btn-outline-primary">Explore
                    Now!</button></Link>
            
        </div>
        <div class="landing-image">
            <img src={landingimg} alt="" />
        </div>
    </div>

    <div class="center-text h2 head-text">Our product categories!</div>
    <div class="product-section">
        <div class="card-container-horizontal">
            <div class="img-contain">
                <img src={img2} alt="shoes" />
            </div>
            <div class="card-detail-horizontal">
                <div class="card-details">
                    <span class="tag">Thunder Blue</span>
                    <span class="tag">Summer collection</span>
                    <div class="name">Running Shoes</div>
                    <div class="small-text">Featuring a lower-profile external heel counter, this piece cradles your
                        foot with improved rearfoot support .</div>
                </div>
            </div>
        </div>

        <div class="card-container-horizontal">
            <div class="img-contain">
                <img src={img3} alt="shoes" />
            </div>
            <div class="card-detail-horizontal">
                <div class="card-details">
                    <span class="tag">Pure Black</span>
                    <span class="tag">Winter collection</span>
                    <div class="name">Indoor Shoes</div>
                    <div class="small-text">An EVA midsole and sockliner make for a comfortable in-play experience,
                        while also providing excellent rebound .</div>
                </div>
            </div>
        </div>
        <div class="card-container-horizontal">
            <div class="img-contain">
                <img src={img1} alt="shoes" />
            </div>
            <div class="card-detail-horizontal">
                <div class="card-details">
                    <span class="tag">Pure White</span>
                    <span class="tag">Exclusive collection</span>
                    <div class="name">Cricket Shoes</div>
                    <div class="small-text">An EVA midsole and sockliner make for a comfortable in-play experience,
                        while also providing excellent rebound.</div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}