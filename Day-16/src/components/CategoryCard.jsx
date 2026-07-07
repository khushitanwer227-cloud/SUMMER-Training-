import React from 'react'
import styles from './CategoryCard.module.css'


function CategoryCard ( { image , title}){

  return (
    <div className={styles.card}>
        <img src={image}
           alt={title}/>
           <h3>{title}</h3>
      
    </div>
  );
}

export default CategoryCard
