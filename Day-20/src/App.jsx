import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';

import { CartProvider } from "./context/CartContext";
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from './feacture/themeSlice';


function App() {
  
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <CartProvider> 
   
     
        <div>
          <Navbar />
          
           <div style={{
      backgroundColor: darkMode ? '#121212' : '#ffffff',
      color: darkMode ? '#ffffff' : '#000000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease'
    }}>
      <p>Current Mode: {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}</p>
      
      <button 
        onClick={() => dispatch(toggleMode())}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: darkMode ? '#fff' : '#333',
          color: darkMode ? '#333' : '#fff'
        }}
      >
        Toggle Theme
      </button>
    
          <div style={{ flex: 1 }}>
             <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
               <Route path="/home" element={<Home />} />
              <Route path="/products/:categoryName" element={<Products />} />
               <Route path="/products" element={<Products />} />
               <Route path="/product/:product_id" element={<ProductDetail />} />


               {/* <Route path="/product/:product_id" element={<ProductDetail />} /> */}
               <Route path="/product/:id" element={<ProductDetail />} />
               <Route path="/cart" element={<Cart />} /> 
             </Routes>
           </div>

           <Footer />
         </div>
    </div>
     </CartProvider>
  );
}

export default App;
