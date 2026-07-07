import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress, Alert, Rating } from "@mui/material";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { product_id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "100px" }}
      >
        <CircularProgress color="inherit" />
      </div>
    );
  if (error)
    return (
      <div style={{ padding: "40px" }}>
        <Alert severity="error">{error}</Alert>
      </div>
    );

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← GO BACK
      </button>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.category}>{product.category} Line</p>
          <h1 className={styles.title}>{product.title}</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <Rating
              value={product.rating}
              readOnly
              precision={0.1}
              size="small"
            />
            <span style={{ fontSize: "12px" }}>({product.rating})</span>
          </div>
          <h2 className={styles.price}>
            ${product.price}{" "}
            <span style={{ fontSize: "13px", color: "green" }}>
              ({product.discountPercentage}% OFF)
            </span>
          </h2>
          <p className={styles.description}>{product.description}</p>
          <button className={styles.addToBagButton}>ADD TO BAG</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
