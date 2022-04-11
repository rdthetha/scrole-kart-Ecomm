import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { ProductProvider } from './context/filterContext';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/cartContext';

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
