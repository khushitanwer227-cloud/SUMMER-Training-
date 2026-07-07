import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Alert } from "@mui/material";
import CategoryGrid from "../components/CategoryGrid/CategoryGrid";
import styles from "./Home.module.css";
import { useAppDispatch } from "../redux1/hooks"; 
import { addToCart } from "../redux1/slice/cartSlice";

const bannerSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600",
    title: "MADE FOR MOTION",
    subtitle:
      "Push boundaries with elite sports frameworks designed to scale your limits. Experience modern raw craftsmanship.",
  },
  {
    image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=1600",
    title: "BEAT YOUR BEST",
    subtitle:
      "Engineered for pure speed and comfort. Unleash your potential on the track and streets.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=1600",
    title: "STYLE MEETS SPEED",
    subtitle:
      "Iconic streetwear silhouettes infused with raw athletic performance technology.",
  },
];

function Home() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [globalProducts, setGlobalProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 10;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerSlides.length);
    }, 4000);

    return () => clearInterval(slideInterval); 
  }, []);

  useEffect(() => {
    const fetchHomeData = async () => {
      setLoading(true);
      setError(null);
      try {
        const trendingRes = await fetch(
          "https://dummyjson.com/products/category/mens-shoes?limit=4",
        );
        const trendingData = await trendingRes.json();
        setTrendingProducts(trendingData.products);

        const skipValue = (page - 1) * limit;
        const globalRes = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skipValue}`,
        );

        if (!globalRes.ok) throw new Error("Failed to load catalogue.");
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

  const adidasBtnStyle = {
    width: "100%",
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    padding: "14px 0",
    fontSize: "13px",
    fontWeight: "800",
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer",
    borderRadius: "0px",
    transition: "background-color 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginTop: "12px",
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = "#4d4d4d";
  };
  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = "#000000";
  };

  if (loading)
    return (
      <div className={styles.centerContainer}>
        <CircularProgress color="inherit" />
      </div>
    );
  if (error)
    return (
      <div className={styles.centerContainer}>
        <Alert severity="error">{error}</Alert>
      </div>
    );

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.home}
       >
        <span>FREE SHIPPING FOR ALL MEMBERS &bull; JOIN THE CLUB</span>
      </div>

      <div 
        style={{
          width: "100%",
          height: "65vh",
          minHeight: "400px",
          backgroundImage: `url('${bannerSlides[currentSlide].image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        <div  className={styles.club}
          
        >
          <div  className={styles.bannerslide}
            
          >
            <h1 
            >
              {bannerSlides[currentSlide].title}
            </h1>

            <p >
              {bannerSlides[currentSlide].subtitle}
            </p>

            <button
              onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                border: "none",
                padding: "14px 28px",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "2px",
                cursor: "pointer",
                borderRadius: "0px",
              }}
            >
              SHOP NEW ARRIVALS &rarr;
            </button>

            <div 
            style={{ display: "flex", gap: "8px", marginTop: "30px" }}
            >
              {bannerSlides.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: "24px",
                    height: "3px",
                    backgroundColor:
                      currentSlide === index
                        ? "#ffffff"
                        : "rgba(255,255,255,0.4)",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.homeContainer}>
        <div className={styles.sectionDivider}>
          <h2 className={styles.sectionHeading}>🔥 CURRENTLY TRENDING NOW</h2>
          <div className={styles.trendingGrid}>
            {trendingProducts.map((item) => (
              <div
                key={`trending-${item.id}`}
                className={styles.trendingCard}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  onClick={() => navigate(`/product/${item.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <span className={styles.exclusiveBadge}>HOT ARRIVAL</span>
                  <div className={styles.imgWrap}>
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <div className={styles.metaData}>
                    <h4>{item.title}</h4>
                    <p className={styles.priceText}>${item.price}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToCart(item));
                  }}
                  style={adidasBtnStyle}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  🛒 Add to Cart
                </button>
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
          <h2 className={styles.sectionHeading}>
            🛍️ FRESH NEW ARRIVALS ({totalProducts} Items)
          </h2>
          <div className={styles.globalGrid}>
            {globalProducts.map((item) => (
              <div
                key={`global-${item.id}`}
                className={styles.productCard}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  onClick={() => navigate(`/product/${item.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <span className={styles.discountBadge}>
                    -{Math.round(item.discountPercentage)}%
                  </span>
                  <div className={styles.imgWrap}>
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <div className={styles.metaData}>
                    <h4>{item.title}</h4>
                    <p className={styles.priceText}>${item.price}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToCart(item));
                  }}
                  style={adidasBtnStyle}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  🛒 Add to Cart
                </button>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className={styles.paginationWrapper}>
              <button
                className={styles.pageArrowBtn}
                disabled={page === 1}
                onClick={() => {
                  setPage((prev) => Math.max(prev - 1, 1));
                  window.scrollTo({ top: 1100, behavior: "smooth" });
                }}
              >
                &larr; PREV
              </button>

              <div className={styles.pageNumbersGroup}>
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      className={`${styles.pageNumberBtn} ${page === pageNumber ? styles.activePageBtn : ""}`}
                      onClick={() => {
                        setPage(pageNumber);
                        window.scrollTo({ top: 1100, behavior: "smooth" });
                      }}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                className={styles.pageArrowBtn}
                disabled={page === totalPages}
                onClick={() => {
                  setPage((prev) => Math.min(prev + 1, totalPages));
                  window.scrollTo({ top: 1100, behavior: "smooth" });
                }}
              >
                NEXT &rarr;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
