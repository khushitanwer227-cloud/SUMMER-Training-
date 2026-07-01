import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress, Alert, Rating } from "@mui/material";


import { useCart } from '../../context/CartContext';

function ProductDetail() {
   const { addToCart } = useCart(); 
  const { product_id } = useParams();
  const navigate = useNavigate();
 
  const [product, setProduct] = useState(null);

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
  type="button"
  onClick={(e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    console.log("Button clicked! Product data:", product); 

    if (product) {
      addToCart(product);
      alert(`${product.title} Bag mein add ho gaya! 🛍️`);
    } else {
      alert("Product load ho raha hai, thoda rukiye!");
    }
  }}
  style={{
    backgroundColor: "#000", 
    color: "#fff", 
    padding: "15px 30px", 
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
    display: "block",
    position: "relative", 
    zIndex: 999,          
    marginTop: "20px"
  }}
>
  ADD TO BAG 🛍️
</button>
  );
}
export default ProductDetail;