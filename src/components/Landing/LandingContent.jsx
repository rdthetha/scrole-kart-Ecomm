import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../image/cricket-shoe.jpg'
import img2 from '../../image/run-shoes.jpg'
import img3 from '../../image/indoor-shoe.jpg'
import landingimg from '../../image/shoe-final.png'
export default function LandingContent() {
return (
<div>
    <div className="first-section">
        <div className="landing-content-landing">
            <div className="h3">Welcome to ScroleKart! <br />Best Deals on shoes round the year!</div>
            <div className="small-text">Exclusive collection</div>
            <Link to='/ProductPage'><button className="btn-primary btn-outline-primary">Explore
                    Now!</button></Link>
            
        </div>
        <div className="landing-image">
            <img src={landingimg} alt="landing-page-img" />
        </div>
    </div>

    <div className="center-text h2 head-text">Our product categories!</div>
    <div className="product-section">
        <div className="card-container-horizontal-landing">
            <div className="img-contain">
                <img src={img2} alt="shoes" />
            </div>
            <div className="card-detail-horizontal">
                <div className="card-details">
                    <span className="tag">Thunder Blue</span>
                    <span className="tag">Summer collection</span>
                    <div className="name">Running Shoes</div>
                    <div className="small-text">Featuring a lower-profile external heel counter, this piece cradles your
                        foot with improved rearfoot support .</div>
                </div>
            </div>
        </div>

        <div className="card-container-horizontal-landing">
            <div className="img-contain">
                <img src={img3} alt="shoes" />
            </div>
            <div className="card-detail-horizontal">
                <div className="card-details">
                    <span className="tag">Pure Black</span>
                    <span className="tag">Winter collection</span>
                    <div className="name">Indoor Shoes</div>
                    <div className="small-text">An EVA midsole and sockliner make for a comfortable in-play experience,
                        while also providing excellent rebound .</div>
                </div>
            </div>
        </div>
        <div className="card-container-horizontal-landing">
            <div className="img-contain">
                <img src={img1} alt="shoes" />
            </div>
            <div className="card-detail-horizontal">
                <div className="card-details">
                    <span className="tag">Pure White</span>
                    <span className="tag">Exclusive collection</span>
                    <div className="name">Cricket Shoes</div>
                    <div className="small-text">An EVA midsole and sockliner make for a comfortable in-play experience,
                        while also providing excellent rebound.</div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}