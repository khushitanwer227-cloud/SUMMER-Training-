
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        
        {/* Left Column: Brand & Motto */}
        <div className={styles.brandColumn}>
          <div className={styles.logoRow}>
            {/* Real Adidas Performance & Originals Dual Logo style representation */}
            <span className={styles.mockLogo}>///</span>
          </div>
          <p className={styles.mottoText}>
            CREATING THE NEW. PERFORMANCE INNOVATION SINCE 1949.
          </p>
          <div className={styles.socialIcons}>
            <span>📸</span> <span>📘</span> <span>🐦</span> <span>📺</span>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className={styles.linksColumn}>
          <h3>PRODUCTS</h3>
          <ul>
            <li>Men's</li>
            <li>Women's</li>
            <li>Kids'</li>
            <li>New Arrivals</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className={styles.linksColumn}>
          <h3>SPORTS</h3>
          <ul>
            <li>Running</li>
            <li>Training</li>
            <li>Football</li>
            <li>Basketball</li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div className={styles.linksColumn}>
          <h3>COMPANY INFO</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Links Column 4 */}
        <div className={styles.linksColumn}>
          <h3>SUPPORT</h3>
          <ul>
            <li>Help</li>
            <li>Order Tracker</li>
            <li>Returns</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Column: Newsletter Subscription */}
        <div className={styles.newsletterColumn}>
          <h3>NEVER MISS A BEAT. SUBSCRIBE NOW.</h3>
          <div className={styles.subscribeBox}>
            <input type="email" placeholder="Enter your email here..." />
            <button type="button">&rarr;</button>
          </div>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className={styles.bottomLegalBar}>
        <div className={styles.legalLinks}>
          <span>PRIVACY POLICY</span>
          <span>TERMS & CONDITIONS</span>
          <span>LEGAL NOTICE</span>
        </div>
        <div className={styles.copyright}>
          &copy; 2026 ADIDAS GLOBAL. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

export default Footer;