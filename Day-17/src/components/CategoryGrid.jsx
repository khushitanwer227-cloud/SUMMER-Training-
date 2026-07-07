import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductGrid from './Product/ProductGrid';

function CategoryGrid() {
  const navigate = useNavigate();

  const categories = [
    { title: "MEN", key: "men", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
    { title: "WOMEN", key: "women", img: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=400&q=80" },
    { title: "KIDS", key: "kids", img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80" },
    { title: "RUN READY AT UPTO 40%", key: "running", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&q=80" },
    { title: "PLAY LIKE PROS FLAT 30%", key: "men", img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=400&q=80" },
    { title: "SPECIAL OFFER", key: "kids", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&q=80" }
  ];

  return (
    <div 
    style={{ 
        display: 'grid',
         gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '15px', padding: '20px 40px', fontFamily: 'Arial, sans-serif' }}>

      {categories.map((item, index) => (
        <div 
          key={index} 
          onClick={() => navigate(`/products/${item.key}`)} 
          style={{ 
            cursor: 'pointer', 
            textAlign: 'left', 
            backgroundColor: '#f9f9f9', 
            paddingBottom: '10px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <img src={item.img} alt={item.title} 
         
         style={{
             width: '100%',
             height: '220px',
             objectFit: 'cover' }} />

          <p  style= {{ 
            fontWeight: 'bold',
             fontSize: '13px',
              margin: '10px 0 0 10px', 
              color: '#000' }}>
            {item.title}</p>
        </div>
      ))}
    </div>

  );
    <ProductGrid/>
}

export default CategoryGrid;