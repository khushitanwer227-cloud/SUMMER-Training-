
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Pagination, CircularProgress, Alert } from "@mui/material";
// import styles from "./Products.module.css";

// function Products() {
//   const navigate = useNavigate();
//   const { categoryName } = useParams();

//   const [allProducts, setAllProducts] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const limit = 10;


//   // useEffect(() => {
//   //   fetch("https://dummyjson.com/products?limit=194")
//   //     .then((res) => {
//   //       if (!res.ok) throw new Error("Failed to fetch products");
//   //       return res.json();
//   //     })
//   //     .then((data) => {
//   //       let filtered = data.products;

//         // if (categoryName === "men") {
//         //   filtered = filtered.filter(
//         //     (item) =>
//         //       item.category.includes("mens") ||
//         //       item.title.toLowerCase().includes("men")
//         //   );
//         // }

//         // if (categoryName === "women") {
//         //   filtered = filtered.filter(
//         //     (item) =>
//         //       item.category.includes("womens") ||
//         //       item.title.toLowerCase().includes("women")
//         //   );
//         // }

//         // if (categoryName === "kids") {
//         //   filtered = filtered.filter(
//         //     (item) =>
//         //       item.category === "tops" ||
//         //       item.category === "sunglasses"
//         //   );


//   //       }

//   //       setAllProducts(filtered);
//   //       setLoading(false);
//   //       setPage(1);
//   //     })
//   //     .catch((err) => {
//   //       setError(err.message);
//   //       setLoading(false);
//   //     });
//   // }, [categoryName]);

//   useEffect(() => {
//   const fetchProducts = async () => {
//     setLoading(true);

//     try {
//       let filtered = [];

//       if (!categoryName) {
//         const res = await fetch(
//           "https://dummyjson.com/products?limit=194"
//         );
//         const data = await res.json();

//         filtered = data.products;
//       } else {
//         let categories = [];

//         if (categoryName === "men") {
//           categories = ["mens-shirts", "mens-shoes", "mens-watches"];
//         }

//         if (categoryName === "women") {
//           categories = [
//             "womens-dresses",
//             "womens-shoes",
//             "womens-watches",
//             "womens-bags",
//             "womens-jewellery",
//           ];
//         }

//         if (categoryName === "kids") {
//           categories = ["tops", "sunglasses"];
//         }

//         const responses = await Promise.all(
//           categories.map((cat) =>
//             fetch(`https://dummyjson.com/products/category/${cat}`).then(
//               (res) => res.json()
//             )
//           )
//         );

//         filtered = responses.flatMap((item) => item.products);
//       }

//       setAllProducts(filtered);
//       setPage(1);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   fetchProducts();
// }, [categoryName]);

//   useEffect(() => {
//     const start = (page - 1) * limit;
//     const end = start + limit;

//     setProducts(allProducts.slice(start, end));
//   }, [page, allProducts]);

//   if (loading) {
//     return (
//       <div className={styles.centerContainer}>
//         <CircularProgress />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.centerContainer}>
//         <Alert severity="error">{error}</Alert>
//       </div>
//     );
//   }

//     return (
//     <div className={styles.pageContainer}>
//       <button
//         className={styles.backBtn}
//         onClick={() => navigate("/home")}
//       >
//         ← BACK HOME
//       </button>

//       <h2 className={styles.titleHead}>
//         {categoryName
//           ? `${categoryName.toUpperCase()} PRODUCTS`
//           : "ALL PRODUCTS"}{" "}
//         ({allProducts.length})
//       </h2>

//       <div className={styles.productsGrid}>
//         {products.map((item) => (
//           <div
//             key={item.id}
//             className={styles.productCard}
//             onClick={() => navigate(`/product/${item.id}`)}
//           >
//             <span className={styles.saleTag}>
//               -{Math.round(item.discountPercentage)}%
//             </span>

//             <div className={styles.imgWrap}>
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//               />
//             </div>

//             <div className={styles.metaData}>
//               <h4>{item.title}</h4>

//               <p>${item.price}</p>

//               <small>{item.brand}</small>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.pagiFlex}>
//         <Pagination
//           page={page}
//           count={Math.ceil(allProducts.length / limit)}
//           onChange={(event, value) => setPage(value)}
//           color="primary"
//           shape="rounded"
//           showFirstButton
//           showLastButton
//         />
//       </div>
//     </div>
//   );
// }

// export default Products;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CircularProgress, Alert } from '@mui/material';
import styles from './Products.module.css';

function Products() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  // API 1: Top Featured Showcase State
  const [featuredProducts, setFeaturedProducts] = useState([]);
  
  // API 2: Bottom Paginated Catalog State
  const [catalogProducts, setCatalogProducts] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pagination State Variables
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 10; 

  useEffect(() => {
    const fetchDualInventory = async () => {
      setLoading(true);
      setError(null);
      try {
        // --- POOL 1: Category Wise Fixed Data Logic ---
        let featuredTag = 'mens-shoes'; // Default fallback showcase row
        if (categoryName) {
          const currentSelection = categoryName.toLowerCase();
          if (currentSelection === 'men') featuredTag = 'mens-shoes';
          else if (currentSelection === 'women') featuredTag = 'womens-shoes';
          else featuredTag = 'sunglasses';
        }
        
        // Fetch fixed featured segment header row
        const featuredRes = await fetch(`https://dummyjson.com/products/category/${featuredTag}?limit=4`);
        const featuredData = await featuredRes.json();
        setFeaturedProducts(featuredData.products);

        // --- POOL 2: Paginated Dynamic Catalog Logic (Hamesha Alag Dikhega) ---
        // Formula: skip calculation pushes the pointer to completely different items
        const skipValue = (page - 1) * limit;
        
        // Hum pure catalog list se items fetch karenge jo upar waale shoes se mix na hon
        const catalogRes = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skipValue}`);
        if (!catalogRes.ok) throw new Error('API Content Sync Failed.');
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

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}><CircularProgress color="inherit" /></div>;
  if (error) return <div style={{ padding: '40px' }}><Alert severity="error">{error}</Alert></div>;

  return (
    <div className={styles.pageContainer}>
      <button onClick={() => navigate('/home')} className={styles.backBtn}>← BACK HOME</button>
      
      {/* SECTION 1: TOP FEATURED ROW (Fixed Categories) */}
      <div className={styles.sectionDivider}>
        <h2 className={styles.titleHead}>🔥 {categoryName ? `${categoryName.toUpperCase()}'S` : 'FEATURED'} TRENDING SELECTION</h2>
        <div className={styles.productsGridFeatured}>
          {featuredProducts.map(item => (
            <div key={`featured-${item.id}`} onClick={() => navigate(`/product/${item.id}`)} className={styles.featuredCard}>
              <span className={styles.exclusiveTag}>TRENDING</span>
              <div className={styles.imgWrap}><img src={item.thumbnail} alt={item.title} /></div>
              <div className={styles.metaData}>
                <h4>{item.title}</h4>
                <p className={styles.priceText}>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.horizontalBreak} />

      {/* SECTION 2: BOTTOM PAGINATED LIVE CATALOG (Always shows different products on page switch) */}
      <div className={styles.sectionDivider}>
        <h2 className={styles.titleHead}>🛍️ LIVE GLOBAL CATALOGUE ({totalProducts} Items Available)</h2>
        <p className={styles.subtitleHint}>Explore fresh global arrivals below. Use pagination to browse hidden stocks.</p>
        
        <div className={styles.productsGrid}>
          {catalogProducts.map(item => (
            <div key={`catalog-${item.id}`} onClick={() => navigate(`/product/${item.id}`)} className={styles.productCard}>
              <span className={styles.saleTag}>-{Math.round(item.discountPercentage)}%</span>
              <div className={styles.imgWrap}><img src={item.thumbnail} alt={item.title} /></div>
              <div className={styles.metaData}>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOM PAGINATION - Controls ONLY the bottom global catalogue */}
      {totalPages > 1 && (
        <div className={styles.customPagination}>
          <button 
            onClick={() => { setPage(prev => Math.max(prev - 1, 1)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
            disabled={page === 1}
            className={styles.pagiBtn}
          >
            PREV
          </button>
          
          <span className={styles.pageInfo}>
            Viewing Stock segment <strong>{page}</strong> of {totalPages}
          </span>

          <button 
            onClick={() => { setPage(prev => Math.min(prev + 1, totalPages)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
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