import React from 'react'
import CategoryCard from './CategoryCard'
import './CategoryGrid.css'

function CategoryGrid(){
  const categories = [
    {
    title:"MEN", 
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaF_K4vee2ltZAWwM-EnSzkhztYz_OA4abVw&s"
    },
     {
    title:"WOMEN",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwMixJIPs6UD2qKlpo7y8JQ4qvBrl7IY3GvQ&s"
  },
    
  {
    title:"KIDS",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6AU__yTJ8zNe2r1L4rX3AErR_dhdz-g1PA&s"
   
  },
     {
      title: "RUN READY",
      image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAznLclo9PmhUOEszJ1pqKTjh_zR-YfYnspg&s"
    },

    {
      title: "PLAY LIKE PROS FLAT 30%",
      image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPfKcWlIQ9KrfL2t3r3EvDmfl8EGy7h4Mhw&s"
    },
    {
      title: " SPECIAL OFFER",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIn1ULsnERn6893n-Mt6E8ZLUMgCOOHFZh0g&s"
    }
]
 return (
    <div className="grid">
      {categories.map((item) => (
        <CategoryCard
          key={item.title}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );

}

export default CategoryGrid
