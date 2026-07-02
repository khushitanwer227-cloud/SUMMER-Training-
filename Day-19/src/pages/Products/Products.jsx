import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress, Alert } from "@mui/material";
import styles from "./Products.module.css";

function Products() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [catalogProducts, setCatalogProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchDualInventory = async () => {
      setLoading(true);
      setError(null);
      try {
        let featuredTag = "mens-shoes";
        if (categoryName) {
          const currentSelection = categoryName.toLowerCase();
          if (currentSelection === "men") featuredTag = "mens-shoes";
          else if (currentSelection === "women") featuredTag = "womens-shoes";
          else featuredTag = "sunglasses";
        }

        const featuredRes = await fetch(
          `https://dummyjson.com/products/category/${featuredTag}?limit=4`,
        );
        const featuredData = await featuredRes.json();
        setFeaturedProducts(featuredData.products);

        
        const skipValue = (page - 1) * limit;

        const catalogRes = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skipValue}`,
        );
        if (!catalogRes.ok) throw new Error("API Content Sync Failed.");
        const catalogData = await catalogRes.json();

        setCatalogProducts(catalogData.products);
        setTotalProducts(catalogData.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDualInventory();
  }, [categoryName, page]);

  const totalPages = Math.ceil(totalProducts / limit);

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
    <div className={styles.pageContainer}>
      <button onClick={() => navigate("/home")} className={styles.backBtn}>
        ← BACK HOME
      </button>

      <div className={styles.sectionDivider}>
        <h2 className={styles.titleHead}>
          🔥 {categoryName ? `${categoryName.toUpperCase()}'S` : "FEATURED"}{" "}
          TRENDING SELECTION
        </h2>
        <div className={styles.productsGridFeatured}>
          {featuredProducts.map((item) => (
            <div
              key={`featured-${item.id}`}
              onClick={() => navigate(`/product/${item.id}`)}
              className={styles.featuredCard}
            >
              <span className={styles.exclusiveTag}>TRENDING</span>
              <div className={styles.imgWrap}>
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className={styles.metaData}>
                <h4>{item.title}</h4>
                <p className={styles.priceText}>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.horizontalBreak} />

      <div className={styles.sectionDivider}>
        <h2 className={styles.titleHead}>
          🛍️ LIVE GLOBAL CATALOGUE ({totalProducts} Items Available)
        </h2>
        <p className={styles.subtitleHint}>
          Explore fresh global arrivals below. Use pagination to browse hidden
          stocks.
        </p>

        <div className={styles.productsGrid}>
          {catalogProducts.map((item) => (
            <div
              key={`catalog-${item.id}`}
              onClick={() => navigate(`/product/${item.id}`)}
              className={styles.productCard}
            >
              <span className={styles.saleTag}>
                -{Math.round(item.discountPercentage)}%
              </span>
              <div className={styles.imgWrap}>
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className={styles.metaData}>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className={styles.customPagination}>
          <button
            onClick={() => {
              setPage((prev) => Math.max(prev - 1, 1));
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
            disabled={page === 1}
            className={styles.pagiBtn}
          >
            PREV
          </button>

          <span className={styles.pageInfo}>
            Viewing Stock segment <strong>{page}</strong> of {totalPages}
          </span>

          <button
            onClick={() => {
              setPage((prev) => Math.min(prev + 1, totalPages));
              window.scrollTo({ top: 400, behavior: "smooth" });
            }}
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

export default Products;
