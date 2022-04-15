import logo from '../../image/scrolekart logo.svg'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cartContext';
import { useWishlist } from '../../context/wishlistContext';
export default function NavigationTop(){
const{state:{cart}}=useCart();
const {wishlistState:{wishlist}}=useWishlist();
return(
<div>
    <header className="ec-navbar-wrapper">
        <div className="ec-icon-div">
            <img className="ec-main-icon" src={logo} alt="logo" />
        </div>
        <nav className="ec-navbar">
            <ul className="ec-nav-link">
                <li><input className="input-box-basic ec-input" placeholder="Looking for something ?" type="text" />
                    <label htmlFor="Email"></label>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/ProductPage'>Product</Link>
                </li>
                <li>
                    <Link to='/Login'>Login/Signup</Link>
                </li>
                <li>
                    <Link className="cart-icons" to='/Cart'><i className="fa-solid fa-cart-shopping"></i></Link>
                    {cart.length}
                </li>
                <li>
                    <Link className="cart-icons" to='/Wishlist'><i className="fa-solid fa-heart"></i></Link>
                    {wishlist.length}
                </li>
            </ul>
        </nav>
    </header>
</div>
)

}