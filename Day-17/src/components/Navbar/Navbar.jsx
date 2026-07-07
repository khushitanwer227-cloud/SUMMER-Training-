import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


function Navbar() { 
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <div className={styles.navwrappe} onMouseLeave={() => setActiveMenu("")}>
      <nav className={styles.navbar}>
        <div className={styles.leftnav}>
          <Link to="/home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
              alt="logo"
              style={{ width: "60px", cursor: "pointer" }}
            />
          </Link>
         <div className={styles.navlink}>
            <p>MEN</p>
            <p>WOMEN</p>
            <p >KIDS</p> 
          </div> 
        
          <div className={styles.rightnav}>
            <div className={styles.search}>
              <input type="text" placeholder="Search" />
              <span>🔍</span>
            </div>
            <span  >👤</span>
            <span >❤️</span>
            <span  >👜</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;