import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <main style={{ minHeight: '50vh' }}>
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
