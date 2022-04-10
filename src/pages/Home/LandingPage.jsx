import './LandingPage.css'
import { Link } from 'react-router-dom'
import NavigationTop from '../../components/Navigation/navigation-top'
import Footer from '../../components/Footer/footer'
import LandingContent from '../../components/Landing/LandingContent'
export default function LandingPage(){

return(
<>
    <div>
        <div class="ec-first-container">
            <NavigationTop/>
            <div class="button-category">
            <Link to='/ProductPage'><button
                        class="btn-category btn-secondary btn-outline-secondary">Running</button></Link>
            <Link to='/ProductPage'><button
                        class="btn-category btn-secondary btn-outline-secondary">Cricket</button></Link>
            <Link to='/ProductPage'><button
                        class="btn-category btn-secondary btn-outline-secondary">Indoor</button></Link>
            <Link to='/ProductPage'><button
                        class="btn-category btn-secondary btn-outline-secondary">SALE</button></Link>
            <Link to='/ProductPage'><button
                        class="btn-category btn-secondary btn-outline-secondary">OFFERS</button></Link>
            </div>
        </div>
       <LandingContent/>
    </div>
    <Footer/>
    
</>
)
}
export {LandingPage}