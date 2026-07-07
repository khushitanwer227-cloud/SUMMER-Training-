
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress, Alert } from "@mui/material";
import styles from './ProductDetail.module.css';

// Redux Integration
import { useAppDispatch } from "../../redux1/hooks";
import { addToCart } from "../../redux1/slice/cartSlice";

function ProductDetail() {

  const { product_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
 
  const [error, setError] = useState(null); 
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
  
    if (!product_id || product_id === "undefined") {
      setError("Invalid Product Identifier.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);


    fetch(`https://dummyjson.com/products/${product_id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product data missing from database warehouse.");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setActiveImg(data.thumbnail);
        setLoading(false);
      })
      .catch((err) => {
        
        setError(err.message);
        setLoading(false);
      });
  }, [product_id]);

  if (loading) return <div className={styles.centerSpinner}><CircularProgress color="inherit" /></div>;
  if (error) return <div className={styles.centerSpinner}><Alert severity="error">{error}</Alert></div>;

  return (
    <div className={styles.detailWrapper}>
      {product && (
        <div className={styles.detailGrid}>
          
     
          <div className={styles.visualSection}>
            <div className={styles.imageSelectorSidebar}>
              {product?.images && product.images.slice(0, 4).map((img, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.thumbBox} ${activeImg === img ? styles.activeThumb : ''}`}
                  onClick={() => setActiveImg(img)}
                >
                  <img src={img} alt={`view-${idx}`} />
                </div>
              ))}
            </div>

            <div className={styles.mainStageFrame}>
              <span className={styles.rawPerformanceTag}>PREMIUM ATHLETIC COLLECTION</span>
              <div className={styles.interactiveZoomContainer}>
                <img 
                  src={activeImg} 
                  alt={product.title} 
                  className={styles.mainFocusProductImage}
                />
              </div>
            </div>
          </div>
          
       
          <div className={styles.metaConsoleSection}>
            <div className={styles.stickyDataWrapper}>
              <span className={styles.breadCrumbNav} onClick={() => navigate("/")}>&larr; BACK TO CATALOGUE</span>
              
              <h1 className={styles.productTitleHead}>{product.title}</h1>
              <p className={styles.productSubTitleText}>Performance Apparel / Unisex Edition</p>
              
              <div className={styles.priceRowBlock}>
                <span className={styles.realPriceValue}>${product.price}</span>
                {product.discountPercentage > 0 && (
                  <span className={styles.strikePrice}>
                    ${Math.round(product.price * (1 + product.discountPercentage / 100))}
                  </span>
                )}
              </div>

              <p className={styles.productDescriptionText}>
                {product.description} Built specifically for professional athletic resilience. Incorporates elite lightweight fibers that maximize thermal breathability.
              </p>

              <div className={styles.sizeSectionContainer}>
                <h4 className={styles.subHeadingTitleText}>SELECT SIZE</h4>
                <div className={styles.sizeGridBox}>
                  <span>UK 7</span>
                  <span className={styles.selectedSize}>UK 8</span>
                  <span>UK 9</span>
                  <span>UK 10</span>
                </div>
              </div>

              <button 
                className={styles.adidasRawBagBtn} 
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(addToCart(product));
                }}
              >
                ADD TO BAG &mdash;
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default ProductDetail;


