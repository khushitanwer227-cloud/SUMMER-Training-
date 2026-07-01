
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Alert } from '@mui/material';
import CategoryGrid from '../components/CategoryGrid/CategoryGrid';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [globalProducts, setGlobalProducts] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 10; 

  useEffect(() => {
    const fetchHomeData = async () => {
      setLoading(true);
      setError(null);
      try {
       
        const trendingRes = await fetch('https://dummyjson.com/products/category/mens-shoes?limit=4');
        const trendingData = await trendingRes.json();
        setTrendingProducts(trendingData.products);

        const skipValue = (page - 1) * limit;
        const globalRes = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skipValue}`);
        
        if (!globalRes.ok) throw new Error('Failed to load global catalogue inventory.');
        const globalData = await globalRes.json();
        
        setGlobalProducts(globalData.products);
        setTotalProducts(globalData.total);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, [page]); 

  const totalPages = Math.ceil(totalProducts / limit);

  if (loading) return <div className={styles.centerContainer}><CircularProgress color="inherit" /></div>;
  if (error) return <div className={styles.centerContainer}><Alert severity="error">{error}</Alert></div>;

  return (
    <div className={styles.homeContainer}>
      
    
      <div className={styles.saleBanner}>
        <h1>END OF SEASON SALE (EOSS) - FLAT 30% OFF</h1>
        <p>Premium sports gear & lifestyle collections direct from stock.</p>
      </div>

    
      <div className={styles.sectionDivider}>
        <h2 className={styles.sectionHeading}>🔥 CURRENTLY TRENDING NOW</h2>
        <div className={styles.trendingGrid}>
          {trendingProducts.map(item => (
            <div key={`trending-${item.id}`} onClick={() => navigate(`/product/${item.id}`)} className={styles.trendingCard}>
              <span className={styles.exclusiveBadge}>HOT ARRIVAL</span>
              <div className={styles.imgWrap}><img src={item.thumbnail} alt={item.title} /></div>
              <div className={styles.metaData}>
                <h4>{item.title}</h4>
                <p className={styles.priceText}>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className={styles.sectionDivider}>
        <h2 className={styles.sectionHeading}>👟 SHOP BY CATEGORY</h2>
        <CategoryGrid />
      </div>

      <hr className={styles.horizontalLine} />

      <div className={styles.sectionDivider}>
        <h2 className={styles.sectionHeading}>🛍️ FRESH NEW ARRIVALS ({totalProducts} Items)</h2>
        <p className={styles.sectionSubtext}>Explore total global collection below. Use buttons to skip pages.</p>
        
        <div className={styles.globalGrid}>
          {globalProducts.map(item => (
            <div key={`global-${item.id}`} onClick={() => navigate(`/product/${item.id}`)} className={styles.productCard}>
              <span className={styles.discountBadge}>-{Math.round(item.discountPercentage)}%</span>
              <div className={styles.imgWrap}><img src={item.thumbnail} alt={item.title} /></div>
              <div className={styles.metaData}>
                <h4>{item.title}</h4>
                <p className={styles.priceText}>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {totalPages > 1 && (
        <div className={styles.customPagination}>
          <button 
            onClick={() => { setPage(prev => Math.max(prev - 1, 1)); }}
            disabled={page === 1}
            className={styles.pagiBtn}
          >
            PREV
          </button>
          
          <span className={styles.pageInfo}>
            Page <strong>{page}</strong> of {totalPages}
          </span>

          <button 
            onClick={() => { setPage(prev => Math.min(prev + 1, totalPages)); }}
            disabled={page === totalPages}
            className={styles.pagiBtn}
          >
            NEXT
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
