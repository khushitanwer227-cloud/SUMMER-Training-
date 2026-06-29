import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Foooter/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductGrid from './components/Product/ProductGrid';


function App() {
  return (
    <Router>
      <Navbar />
   
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          
         
          <Route path="/products/:categoryName" element={<Products />} />
          <Route path="/products" element={<Products />} />
          
       
          <Route path="/product/:product_id" element={<ProductDetail />} />
        </Routes>
        <ProductGrid/>

      </div>
      
      <Footer />
    </Router>
  );
}

export default App;