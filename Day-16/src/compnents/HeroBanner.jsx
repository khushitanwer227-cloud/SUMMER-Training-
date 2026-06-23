import React from 'react';
import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.accentGrid}>
        <div className={styles.diagonalBlock}></div>
      </div>
      <div className={styles.contentPlate}>
        <span className={styles.tagline}>END OF SEASON SALE</span>
        <h1 className={styles.mainTitle}>FLAT 30% OFF</h1>
        <p className={styles.bodyCopy}>Plus save an extra 15% on additions above ₹4,999. Grab your pairs before sizes deplete.</p>
        <div className={styles.actionBlock}>
          <button className={styles.blackButton}>SHOP MEN →</button>
          <button className={styles.blackButton}>SHOP WOMEN →</button>
        </div>
      </div>
    </section>
  );
}
