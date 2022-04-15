import React from 'react';
import {Route,Routes } from 'react-router-dom';
import {LandingPage,Product,Wishlist,Cart,PageNotFound,Login,Signup} from './pages/pagesAll'
function App() {
  return (
    <div className="App">
     <Routes>
            <Route path="/"  element={<LandingPage/>} />
            <Route path="/ProductPage"  element={<Product/>} />
            <Route path="/Cart"  element={<Cart/>} />
            <Route path="/Wishlist"  element={<Wishlist/>} />
            <Route path="/Login"  element={<Login/>} />
            <Route path="/Signup"  element={<Signup/>} />
            <Route path="*" element={ <PageNotFound/>}/>
       </Routes> 
    </div>
  );
}

export default App;
