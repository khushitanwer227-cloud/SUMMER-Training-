// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { MASTER_ADIDAS_DATA } from '../Products';
// import ProductDetail from  './ProductDetail.module.css'

// function ProductDetail() {
//   const { product_id } = useParams();
//   const navigate = useNavigate();

//   const product = MASTER_ADIDAS_DATA.find(item => item.id === Number(product_id));

//   if (!product) {
//     return <h2  className={{stylesNotfound}}      style={{ padding: '40px', fontFamily: 'Arial' }}>Product Not Found...</h2>;
//   }

//   return (
//     <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
       
//       <button 
//         onClick={() => navigate(-1)} 
//         style={{ marginBottom: '20px', background: 'none', border: '1px solid #000', padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer' }}
//       >
//         ← GO BACK TO LIST
//       </button>

//       <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '20px' }}>
//         <div style={{ flex: '1', minWidth: '300px' }}>
//           <img src={product.img} alt={product.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', border: '1px solid #f4f4f4' }} />
//         </div>
        
//         <div style={{ flex: '1', minWidth: '300px' }}>
//           <p style={{ textTransform: 'uppercase', color: '#121111', fontSize: '12px', margin: 0 }}>{product.category} collection</p>
//           <h1 style={{ margin: '10px 0', fontSize: '26px', fontWeight: '800' }}>{product.name}</h1>
//           <h2 style={{ color: 'red', margin: '10px 0 20px 0' }}>{product.promoPrice}</h2>
          
//           <h4 style={{ margin: '0 0 5px 0' }}>Product Highlight Specification:</h4>
//           <p style={{ color: '#3e2727', lineHeight: '1.6', fontSize: '14px' }}>
//             Genuine high durability material configurations sourced directly to match your custom athletic experience criteria seamlessly.
//           </p>
          
//           <button style={{ backgroundColor: '#0f0e0e', color: '#d2c8c8', width: '100%', padding: '15px', border: 'none', fontWeight: 'bold', marginTop: '30px', cursor: 'pointer', letterSpacing: '1px' }}>
//             ADD TO BAG
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MASTER_ADIDAS_DATA } from '../Products';
import styles from './ProductDetail.module.css'; // 1. Fixed Naming Conflict Here

function ProductDetail() {
  const { product_id } = useParams();
  const navigate = useNavigate();

  const product = MASTER_ADIDAS_DATA.find(item => item.id === Number(product_id));

  if (!product) {
    return (
      <h2 className={styles.notFound}>
        Product Not Found...
      </h2>
    );
  }

  return (
    <div className={styles.container}>
       
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← GO BACK TO LIST
      </button>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img src={product.img} alt={product.name} className={styles.productImage} />
        </div>
        
        <div className={styles.infoWrapper}>
          <p className={styles.category}>{product.category} collection</p>
          <h1 className={styles.title}>{product.name}</h1>
          <h2 className={styles.price}>{product.promoPrice}</h2>
          
          <h4 className={styles.highlightTitle}>Product Highlight Specification:</h4>
          <p className={styles.description}>
            Genuine high durability material configurations sourced directly to match your custom athletic experience criteria seamlessly.
          </p>
          
          <button className={styles.addToBagButton}>
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;













