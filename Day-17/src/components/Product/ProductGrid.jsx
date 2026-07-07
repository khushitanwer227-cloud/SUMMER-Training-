import react from 'react'
import styles from'./ProductGrid.module.css'

const OUTLET_MOCKS = [
  { id: 1, name: "SAMBA OG SHOES", category: "Originals", basePrice: 10999, promoPrice: 7699, discount: "-30%", image: "https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/26518298/2024/4/26/e86cd3ce-01c8-4118-b6fa-055e1a65e8af1714107388783-ADIDAS-Originals-Men-Casual-Shoes-8301714107388512-1.jpg" },
  { id: 2, name: "ULTRABOOST 5 SHOES", category: "Performance Running", basePrice: 17999, promoPrice: 12599, discount: "-30%", image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a461ae9dddf04457bfbca9760113ff7a_9366/Handball_Spezial_Shoes_Blue_BD7632_00_plp_standard.jpg" },
  { id: 3, name: "GRAND COURT 2.0 TRAINERS", category: "Sportswear", basePrice: 7999, promoPrice: 3999, discount: "-50%", image: "https://luxuryforyou.com/images/690e098ac7e84-72e6900-f.webp" },
  { id: 4, name: "INDIA T20 INTERNATIONAL FAN JERSEY", category: "Cricket Gear", basePrice: 999, promoPrice: 699, discount: "-30%", image: "https://assets.adidas.com/images/w_500,f_auto,q_auto/0d0e6f130bb847999c68313f1757f8ae_9366/INDIA_T20_CRICKET_JERSEY_2026_Blue_KS9355_48_detail.jpg" }
];

 function ProductGrid() {
  return (
    <section  className={styles.catalogContainer}>
      <h2 className={styles.gridHeader}>LIVE EOSS MARKDOWNS</h2>
      <div className={styles.gridSchema}>
        {OUTLET_MOCKS.map((item) => (
          <div key={item.id} className={styles.productCard}>
          
            <div className={styles.frameBox}>
              <img src={item.image} alt={item.name} className={styles.assetImg}/>
              <span className={styles.badge}>{item.discount}</span>
              <button className={styles.heartBtn}>❤️</button>
            </div>

          <div className={styles.metaData}>
              <div className={styles.priceRow}>
                <span className={styles.activePrice}>₹{item.promoPrice.toLocaleString('en-IN')}</span>
                <span className={styles.basedPrice}>₹{item.basePrice.toLocaleString('en-IN')}</span>
              </div>
              <h3 className={styles.titleText}>{item.name}</h3>
              <p className={styles.subText}>{item.category}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;