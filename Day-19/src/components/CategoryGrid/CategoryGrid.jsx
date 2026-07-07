import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CategoryGrid.module.css';

function CategoryGrid() {
  const navigate = useNavigate();

  const categories = [
    { title: "MEN", key: "men", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
    { title: "WOMEN", key: "women", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZhEngicTGw5LJv1vjuWe2k3tQRU0SFQLRg&s" },
    { title: "KIDS", key: "kids", img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80" },
    { title: "RUN READY AT UPTO 40%", key: "men", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&q=80" },
    { title: "PLAY LIKE PROS FLAT 30%", key: "men", img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=400&q=80" },
    { title: "SPECIAL OFFER", key: "women", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&q=80" }
  ];

  return (
    <div className={styles.gridContainer}>
      {categories.map((item, index) => (
        <div key={index} onClick={() => navigate(`/products/${item.key}`)} className={styles.card}>
          <img src={item.img} alt={item.title} className={styles.image} />
          <p className={styles.title}>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryGrid;