import logo from '../../image/scrolekart logo.svg'
import { Link } from 'react-router-dom'
export default function Footer(){

    return(

        <div>
            <div className="footer-container">
        <div className="footer-inner">
            <div className="footer-icon">
                <img src={logo} alt="logo" />
            </div>
            <div className="footer-content">
                <ul className="footer-link">
                    <Link className="footer-link"to='/'>Refund Policy</Link>
                    <Link className="footer-link"to='/'>Shipping Policy</Link>
                    <Link className="footer-link"to='/'>Terms and condition</Link>
                </ul>
            </div>
        </div>
    </div>
        </div>
    )
}