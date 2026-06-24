import React from 'react'
import styles from'./Footer.module.css'


function Footer() {
  return (
    <footer className={styles.footer} style={{ backgroundColor:'black', color:"white" ,dissplay:"flex" , flexDirection :"row"}}>
      <div className={styles.footercontainer}>
        
        <div className={styles.footersection}>
          <h3>PRODUCTS</h3>
          <p>Shoes</p>
          <p>Clothing</p>
          <p>Accessories</p>
          <p>New Arrivals</p>
        </div>

        <div className={styles.footersection}>
          <h3>SPORTS</h3>
          <p>Running</p>
          <p>Football</p>
          <p>Gym</p>
          <p>Basketball</p>
        </div>

        <div className={styles.footersection}>
          <h3>COMPANY</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Contact</p>
        </div>

        <div className={styles.footersection}>
          <h3>SUPPORT</h3>
          <p>Help Center</p>
          <p>Returns</p>
          <p>Shipping</p>
          <p>Track Order</p>
        </div>

      </div>


    
    </footer>
  );
}

export default Footer;
