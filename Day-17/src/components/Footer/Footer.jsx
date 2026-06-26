import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'; 

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Column 1 - Products */}
        <div className={styles.column}>
          <span className={styles.title}>PRODUCTS</span>
          <Link to="/products/men" className={styles.link}>Men's Shoes</Link>
          <Link to="/products/women" className={styles.link}>Women's Apparel</Link>
          <Link to="/products/kids" className={styles.link}>Kids' Gear</Link>
          <Link to="/products" className={styles.link}>New Arrivals</Link>
        </div>

        {/* Column 2 - Sports */}
        <div className={styles.column}>
          <span className={styles.title}>SPORTS</span>
          <span className={styles.nonLink}>Running</span>
          <span className={styles.nonLink}>Cricket</span>
          <span className={styles.nonLink}>Football</span>
          <span className={styles.nonLink}>Training</span>
        </div>

        {/* Column 3 - Company Info */}
        <div className={styles.column}>
          <span className={styles.title}>COMPANY INFO</span>
          <Link to="/about" className={styles.link}>About Us</Link>
          <span className={styles.nonLink}>Careers</span>
          <span className={styles.nonLink}>Press</span>
        </div>

        {/* Column 4 - Follow Us */}
        <div className={styles.column}>
          <span className={styles.title}>FOLLOW US</span>
          <span className={styles.pointerLink}>📸 Instagram</span>
          <span className={styles.pointerLink}>🕊️ Twitter</span>
          <span className={styles.pointerLink}>👥 Facebook</span>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className={styles.bottomSection}>
        <p>© 2026 adidas India Marketing Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;