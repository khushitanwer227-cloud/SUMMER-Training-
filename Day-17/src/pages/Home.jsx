import React from 'react';
import CategoryGrid from '../components/CategoryGrid';



function Home() {
  return (
    <div>
      <div 
      style={{ 
        backgroundColor: '#f1eded',
         borderBottom: '1px solid #888787',
          color: '#000', textAlign: 'center',
           padding: '40px 20px', fontFamily: 'Arial' 
           }}>
        <h1 style={{ margin:'5px', fontSize: '40px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
          END OF SEASON SALE (EOSS) - FLAT 30% OFF + EXTRA 15%
        </h1>
      </div>
      <CategoryGrid />
   
    </div>
  );
}

export default Home;