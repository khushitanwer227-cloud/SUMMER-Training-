import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart'; 

import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider> 
   
        <div>
          <Navbar />
          
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products/:categoryName" element={<Products />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:product_id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} /> 
            </Routes>
          </div>

          <Footer />
        </div>
    
    </CartProvider>
  );
}

export default App;

