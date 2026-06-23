import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

const App = () => {
  // 1. Core State Management: Counter
  const [count, setCount] = useState(0);

  // 2. Side Effect: Sync count with Browser Tab Title
  useEffect(() => {
    document.title = `Count: ${count} | React App`;
    
    // Example of cleanup function (optional but good practice)
    return () => {
      document.title = "React App"; 
    };
  }, [count]); // Dependency array: Effect triggers only when count changes

  const userProfiles = [
    { id: 1, name: "Arjun Mehta", role: "Software Engineer", email: "arjun@example.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIiHU4378zT-led2K1A8VpHhLmiJTSPnPUJQrO-_fChw&s" },
    { id: 2, name: "Sarah Connor", role: "DevOps Lead", email: "sarah@example.com", img: "https://img.freepik.com/premium-photo/smiling-young-female-looking-camera-blue-background_116407-27384.jpg" },
    { id: 3, name: "Sneha Rao", role: "UI/UX Designer", email: "sneha@example.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfJe41Drx-4X1on0EjoRHIYRfrnPX-X2z3tLjSx5nLg&s=10" },
    { id: 4, name: "Michael Scott", role: "Regional Manager", email: "michael@example.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGa6uPl4VjX0yAVvKbRDuz4PFgGi94GRpo5jw5-XIt5g&s=10" },
  ]
  return (
    <div className="dashboard-container">
     
      <section className="counter-section">
        <h2>Interactive Counter Interface</h2>
        <p className="counter-hint">(Look at your browser tab title to see it sync!)</p>
        <div className="counter-display">
          <span className="count-number">{count}</span>
        </div>
        <div className="counter-controls">
          <button onClick={() => setCount(count - 1)} className="btn btn-decrement">Decrement</button>
          <button onClick={() => setCount(0)} className="btn btn-reset">Reset</button>
          <button onClick={() => setCount(count + 1)} className="btn btn-increment">Increment</button>
        </div>
      </section>

      <hr className="divider" />

     
      <section className="profiles-section">
        <h2>Team Member Profiles</h2>
        <div className="profile-grid">
         
          {userProfiles.map((user) => (
            <ProfileCard
              key={user.id} // Essential unique identifier for React tracking
              name={user.name}
              role={user.role}
              email={user.email}
              image={user.img || undefined} // Passes undefined if empty string, triggering default prop fallback
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
