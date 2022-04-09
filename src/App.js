import React from 'react';
import {Route,Routes } from 'react-router-dom';
import ProductCard from './components/Card/ProductCard';
import LandingPage from './pages/Home/LandingPage';
import Product from './pages/Product/Product';


function App() {
  return (
    <div className="App">
     <Routes>
            <Route path="/"  element={<LandingPage/>} />
            <Route path="/ProductPage"  element={<Product/>} />
            <Route path="/test"  element={<ProductCard/>} />
       </Routes> 
       </div>
  );
}

export default App;
