import {useState} from 'react';
 import { menuData } from '../data/menuData';

 import './Navbar.css';
 
 function Navbar() { 

  const [activeMenu, setActiveMenu] = useState("");
   return (
<nav className="navbar">

  <div className="left-nav"  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
      alt="logo"
      style={{ width: "80px" }}
    />

    <ul className="nav-links"  >
      {Object.keys(menuData).map((item) => (
        <li
          key={item}
          onMouseEnter={() => setActiveMenu(item)}
          onMouseLeave={() => setActiveMenu("")}
        >
          {item}

          {activeMenu === item && (
            <div className="dropdown">
              {menuData[item].map((menu) => (
                <p key={menu}>{menu}</p>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>

  <div className="right-nav">
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