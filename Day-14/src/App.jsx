
import UserCard from "./components/UserCard"
import photo1 from "./assets/photo-1.png"
import "./components/UserCard.css";
import photo2 from "./assets/photo-2.png";
import photo3 from "./assets/photo-3.png";
import Counter from "./CounterApp/CounterApp";


function App() {
  
  return (
    <div className="container">
    <UserCard name="SHIVI" desc="Engineer " image={photo1}  style={{"border-radius":"10px"}} />
    <UserCard name="SARA" desc=" Doctor"  image={photo2} style={{"border-radius":"10px"}} />
    <UserCard name="SHIVA"  desc=" Teacher "  image={photo3} style={{"border-radius":"10px"}} />
 


   
       <Counter/>
    </div>
  
  )
}

export default App
