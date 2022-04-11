import React from 'react';
import {Route,Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import LandingPage from './pages/Home/LandingPage';
import Product from './pages/Product/Product';


function App() {
  return (
    <div className="App">
     <Routes>
            <Route path="/"  element={<LandingPage/>} />
            <Route path="/ProductPage"  element={<Product/>} />
            <Route path="/Cart"  element={<Cart/>} />
       </Routes> 
       </div>
  );
}

export default App;
