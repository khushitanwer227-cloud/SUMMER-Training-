import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuData from "./MenuData";
import styles from "./Navbar.module.css";
import { useAppSelector } from "../../redux1/hooks";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("");
  const navigate = useNavigate();

  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  return (
    <div className={styles.navwrapper} onMouseLeave={() => setActiveMenu("")}>
      <nav className={styles.navbar}>
        <div className={styles.leftnav}>
          <Link to="/" onClick={() => setActiveMenu("")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
              alt="logo"
              className={styles.logoImg}
            />
          </Link>

          <div className={styles.navlink}>
            <span
              className={styles.bar}
              onMouseEnter={() => setActiveMenu("men")}
            >
              MEN
            </span>
            <span
              className={styles.bar}
              onMouseEnter={() => setActiveMenu("women")}
            >
              WOMEN
            </span>
            <span
              className={styles.bar}
              onMouseEnter={() => setActiveMenu("kids")}
            >
              KIDS
            </span>
          </div>
        </div>

        <div className={styles.rightnav}>
          <div className={styles.search}>
            <input type="text" placeholder="Search" />
            <span>🔍</span>
          </div>
          <span className={styles.iconStyle}>👤</span>
          <span className={styles.iconStyle}>❤️</span>

          <div
            className={styles.bagContainer}
            onClick={() => navigate("/cart")}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <span className={styles.iconStyle}>👜</span>

            {totalItems > 0 && (
              <span className={styles.bagBadge}>{totalItems}</span>
            )}
          </div>
        </div>
      </nav>

      {activeMenu && MenuData[activeMenu] && (
        <div
          className={styles.dropdownPanel}
          onMouseEnter={() => setActiveMenu(activeMenu)}
        >
          <div className={styles.dropdownContainer}>
            <div className={styles.dropdownHeader}>
              <h3>{MenuData[activeMenu].title}</h3>
              <span
                onClick={() => {
                  navigate(`/products/${activeMenu}`);
                  setActiveMenu("");
                }}
                className={styles.viewAllLink}
              >
                View All Items →
              </span>
            </div>
            <div className={styles.dropdownGrid}>
              {MenuData[activeMenu].columns.map((col, idx) => (
                <div key={idx} className={styles.dropdownColumn}>
                  <h4>{col.heading}</h4>
                  <ul>
                    {col.items.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          navigate(`/products/${activeMenu}`);
                          setActiveMenu("");
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
