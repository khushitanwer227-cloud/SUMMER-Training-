import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress, Alert, Rating } from "@mui/material";
import { useCart } from '../../context/CartContext';
import styles from './ProductDetail.module.css'

function ProductDetail() {
   const { addToCart } = useCart(); 
  const { product_id } = useParams();
  const navigate = useNavigate();
 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${product_id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Data Sync Missing");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [product_id]);


  return (

  <button 
  className={styles.blueCartBtn} 
  onClick={(e) => {
    e.stopPropagation();
    if (addToCart) {
      addToCart(item);
      alert(`${item.title} added to cart!`);
    }
  }}
>

  <span className={styles.cartIcon}>🛒</span> 
  Add to Cart
</button>

  );
}
export default ProductDetail;


