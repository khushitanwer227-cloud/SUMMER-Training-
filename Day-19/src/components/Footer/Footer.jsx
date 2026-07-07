import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <span className={styles.title}>PRODUCTS</span>
          <Link to="/products/men" className={styles.link}>Men's Shoes</Link>
          <Link to="/products/women" className={styles.link}>Women's Apparel</Link>
          <Link to="/products/kids" className={styles.link}>Kids' Gear</Link>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>SPORTS</span>
          <span className={styles.nonLink}>Running</span>
          <span className={styles.nonLink}>Cricket</span>
          <span className={styles.nonLink}>Football</span>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>COMPANY INFO</span>
          <Link to="/home" className={styles.link}>Home Base</Link>
          <span className={styles.nonLink}>Careers</span>
        </div>
      </div>
      <div className={styles.bottomSection}>
       
      </div>
    </footer>
  );
}

export default Footer;