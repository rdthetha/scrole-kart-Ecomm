import React from 'react';
import {Route,Routes } from 'react-router-dom';
import ProductCard from './components/Card/ProductCard';
import LandingPage from './pages/Landing-Page/LandingPage';
import Product from './pages/Product/Product';


function App() {
  return (
    <div className="App">
     <Routes>
            <Route path="/"  element={<LandingPage/>} />
            <Route path="/ProductPage"  element={<Product/>} />
            <Route path="/test"  element={<ProductCard/>} />
            {/* <Route path="/cartPage"  element={<CartPage />} />
            <Route path="/wishlistPage"  element={<WishlistPage />} />
            <Route path="/loginPage"  element={<LoginPage />} />
            <Route path="/signupPage"  element={<SingupPage />} />
            <Route path="/logoutPage"  element={<LogoutPage />} /> */}
       </Routes> 
       </div>
  );
}

export default App;
