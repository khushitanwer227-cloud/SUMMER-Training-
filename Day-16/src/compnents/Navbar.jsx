import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* Promo Bar Ribbon */}
      <div className={styles.promoRibbon}>
        <span>FLAT 30% OFF + EXTRA 15% ON ORDERS ABOVE ₹4,999</span>
      </div>

      {/* Micro Top Utilities Bar */}
      <div className={styles.topUtility}>
        <span>help</span>
        <span>orders and returns</span>
        <span>sign up</span>
        <span className={styles.adiClub}>join adiClub</span>
      </div>

      {/* Main Responsive Navigation Grid */}
      <nav className={styles.mainNav}>
        {/* Authentic CSS Brand Bars */}
        <div className={styles.brandLogo}>
          <div className={styles.stripesGroup}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>
          <span className={styles.logoLabel}>adidas</span>
        </div>

        {/* Action Category Anchors */}
        <div className={styles.navCategories}>
          <span className={styles.link}>MEN</span>
          <span className={styles.link}>WOMEN</span>
          <span className={styles.link}>KIDS</span>
          <span className={`${styles.link} ${styles.sale}`}>EOSS</span>
        </div>

        {/* Command Search Controls */}
        <div className={styles.searchConsole}>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Search" />
            <span className={styles.lens}>🔍</span>
          </div>
          <div className={styles.iconPack}>
            <span>👤</span>
            <span>❤️</span>
            <span>👜</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
