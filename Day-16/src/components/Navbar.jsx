import {useState} from 'react';
 import { menuData } from '../data/menuData';

  import styles from'./Navbar.module.css';
 
 function Navbar() { 

  const [activeMenu, setActiveMenu] = useState("");
   return (
<nav  className={styles.navbar}>

  <div className={styles.leftnav} >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
      alt="logo"
      style={{ width: "80px" }}
    />

    <ul className={styles.navlinks}  >
      {Object.keys(menuData).map((item) => (
        <li
          key={item}
          onMouseEnter={() => setActiveMenu(item)}
          onMouseLeave={() => setActiveMenu("")}
        >
          {item}

          {activeMenu === item && (
            <div className={styles.dropdown}>
              {menuData[item].map((menu) => (
                <p key={menu}>{menu}</p>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>

  <div  className={styles.rightnav}>
    <span>help</span>
    <span>orders and returns</span>
    <span>sign up</span>
    <span>join adiClub</span>

    <input type="text" placeholder="Search" />

    <span>👤</span>
    <span>❤️</span>
    <span>👜</span>
  </div>

</nav>
)}

export default Navbar;
