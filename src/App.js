import React from 'react';
import {Route,Routes } from 'react-router-dom';
import {LandingPage,Product,Wishlist,Cart,PageNotFound} from './pages/pagesAll'
function App() {
  return (
    <div className="App">
     <Routes>
            <Route path="/"  element={<LandingPage/>} />
            <Route path="/ProductPage"  element={<Product/>} />
            <Route path="/Cart"  element={<Cart/>} />
            <Route path="/Wishlist"  element={<Wishlist/>} />
            <Route path="*" element={ <PageNotFound/>}/>
       </Routes> 
    </div>
  );
}

export default App;
