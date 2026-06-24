
import './CategoryCard.css'

function CategoryCard ( { image , title}){

  return (
    <div className='card'>
        <img src={image}
           alt={title}/>
           <h3>{title}</h3>
      
    </div>
  );
}

export default CategoryCard
