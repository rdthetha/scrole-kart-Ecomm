import logo from '../../image/scrolekart logo.svg'
import { Link } from 'react-router-dom'
export default function NavigationTop(){

    return(
        <div>
            <header className="ec-navbar-wrapper">
                <div className="ec-icon-div">
                    <img className="ec-main-icon" src={logo} alt="logo" />
                </div>
                <nav className="ec-navbar">
                    <ul className="ec-nav-link">
                        <li><input className="input-box-basic ec-input" placeholder="Looking for something ?" type="text" />
                            <label for="Email"></label></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/ProductPage'>Product</Link></li>
                        <li><Link to='/'>Login/Signup</Link></li>
                        <li><Link className="cart-icons" to='/ProductPage'><i className="fa-solid fa-cart-shopping"></i></Link>
                        </li>
                        <li><Link className="cart-icons" to='/ProductPage'><i className="fa-solid fa-heart"></i></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )

}