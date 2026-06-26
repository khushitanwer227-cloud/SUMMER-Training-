import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MASTER_ADIDAS_DATA = [
  //  MEN  (5 Items)
  { id: 1, name: "SAMBA OG CLASSIC SHOES", category: "men", price: "₹10,999", promoPrice: "₹7,699", discount: "-30%", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80" },
  { id: 2, name: "INDIA T20 INTERNATIONAL CRICKET JERSEY", category: "men", price: "₹999", promoPrice: "₹699", discount: "-30%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4rdDYNMtg83qa8DDpcsAjPEhIKscR02ksyzmO_xEag&s" },
  { id: 3, name: "AD365 RUNNING TRAINING T-SHIRT", category: "men", price: "₹2,999", promoPrice: "₹2,099", discount: "-30%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbm7Y5Myqzu-epi6JeNB9W6M77QMs9Na4EaAnAkHyLbg&s=10" },
  { id: 4, name: "FIREBIRD LOOSE TRACK SHOES", category: "men", price: "₹6,999", promoPrice: "₹4,899", discount: "-30%", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&q=80" },
  { id: 5, name: "SUPERSTAR PURE COMFORT SNEAKERS", category: "men", price: "₹9,999", promoPrice: "₹6,999", discount: "-30%", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80" },

  // WOMEN  (5 Items) 
  { id: 6, name: "T-SHIRT", category: "women", price: "₹17,999", promoPrice: "₹12,599", discount: "-30%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq29duyAROGcYdH3bH1sA1pak2gn9_7AmJ_9WZOowDQ&s=10" },
  { id: 7, name: "YOGA ESSENTIALS HIGH-RISE TIGHTS", category: "women", price: "₹4,599", promoPrice: "₹3,219", discount: "-30%", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80" },
  { id: 8, name: "Women T-Shirts Adicolor Trefoil Boxy Tee", category: "women", price: "₹2,499", promoPrice: "₹1,749", discount: "-30%", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXBNsaGSCkCtKkMkNIdAnh2pnRKJ9Zz_vEiolWGonndBMejCsVM13CCYd-DRslJqjCW93c_gZ6yjLNcB-QeKjjgeXvaIh9" },
  { id: 9, name: "CLIMACOOL SPORT 2-IN-1 SHORTS", category: "women", price: "₹3,499", promoPrice: "₹2,449", discount: "-30%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8vT39n6r8yWhE459ygnRZ7oINl9iZ_OY5OIhVl2D3Q&s=10" },
  { id: 10, name: "PUREBOOST STREET ICON RUNNERS", category: "women", price: "₹12,999", promoPrice: "₹9,099", discount: "-30%", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80" },

  //  KIDS  (5 Items) 
  { id: 11, name: "GRAND COURT 2.0 KIDS TRAINERS", category: "kids", price: "₹4,999", promoPrice: "₹3,499", discount: "-30%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZw62WjYqqNtu4a14E4huGPfL33UJGsd9aJy01pRj4Q&s=10" },
  { id: 12, name: "ONE-PIECE SNAP-CLOSURE OUTFITS FOR INFANTS. ", category: "kids", price: "₹1,299", promoPrice: "₹909", discount: "-30%", img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80" },
  { id: 13, name: "LEGO MARVEL RUNNING SHOES", category: "kids", price: "₹5,999", promoPrice: "₹4,199", discount: "-30%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwBe-nCXv-QPqMV8vggEWDQlYqr1hryXw3Ay0a5n5UQ&s://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&q=80" },
  { id: 14, name: "SUPERSTAR COMFORT SLIDES KIDS", category: "kids", price: "₹2,499", promoPrice: "₹1,749", discount: "-30%", img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80" },
  { id: 15, name: "PREMIUM ESSENTIALS HOODIE SET", category: "kids", price: "₹3,999", promoPrice: "₹2,799", discount: "-30%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YqCjPYWy-uuSp6Hj3ISOcx8SA_w5ZQbnZK0j73t_mA&s=10" }
];

function Products() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

 
  const targetCategory = categoryName ? categoryName.toLowerCase() : "men";
  const finalCatalog = MASTER_ADIDAS_DATA.filter(item => item.category === targetCategory);

  return (
    <div style={{ padding: '30px 40px', fontFamily: 'Arial, sans-serif' }}>
      <button 
        onClick={() => navigate('/home')} 
        style={{ marginBottom: '20px', background: '#f9f3f3', color: '#1a1818', border: 'none', padding: '10px 15px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '3px' }}
      >
        ← BACK TO HOME
      </button>

      <h2 style={{ textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '2px solid #000', paddingBottom: '10px' }}>
        {targetCategory}'S EXCLUSIVE LIVE MARKDOWNS ({finalCatalog.length})
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '25px', marginTop: '25px' }}>
        {finalCatalog.map((product) => (
          <div 
            key={product.id} 
            onClick={() => navigate(`/product/${product.id}`)}
            style={{ border: '1px solid #eee', padding: '10px', cursor: 'pointer', position: 'relative', backgroundColor: '#fff', transition: 'all 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            <span style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: 'red', color: 'white', fontSize: '12px', padding: '3px 6px', fontWeight: 'bold', zIndex: 2 }}>
              {product.discount}
            </span>
            <div style={{ overflow: 'hidden', height: '240px' }}>
              <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h4 style={{ margin: '10px 0 5px 0', fontSize: '14px', color: '#000' }}>{product.name}</h4>
            <p style={{ margin: 0, fontWeight: 'bold', color: 'red' }}>
              {product.promoPrice} <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '13px', marginLeft: '8px' }}>{product.price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
export { MASTER_ADIDAS_DATA }; 