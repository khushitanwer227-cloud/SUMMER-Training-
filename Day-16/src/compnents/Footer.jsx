import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerBase}>
      <div className={styles.corporateTree}>
        <div className={styles.columnNode}>
          <h3>PRODUCTS</h3>
          <span>Footwear</span>
          <span>Clothing</span>
          <span>Accessories</span>
          <span>Outlet Markdowns</span>
        </div>
        <div className={styles.columnNode}>
          <h3>SPORTS</h3>
          <span>Running Shoes</span>
          <span>Cricket Jerseys</span>
          <span>Football Boots</span>
          <span>Gym & Training</span>
        </div>
        <div className={styles.columnNode}>
          <h3>COLLECTIONS</h3>
          <span>Samba OG Originals</span>
          <span>Ultraboost Light</span>
          <span>Supernova Rise</span>
          <span>Grand Court Essentials</span>
        </div>
        <div className={styles.columnNode}>
          <h3>SUPPORT</h3>
          <span>Customer Care Support</span>
          <span>Returns Policy & Refunds</span>
          <span>adiClub Account Registration</span>
          <span>Store Finder Console</span>
        </div>
      </div>
      <div className={styles.footerFloor}>
        <div className={styles.legalSubtext}>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>Cookie Parameters</span>
        </div>
        <p className={styles.copyrightText}>© 2026 adidas India Marketing Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
