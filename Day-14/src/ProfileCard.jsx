import React from 'react';
import './ProfileCard.css';

// Destructuring props 
const ProfileCard = ({ name, role, email, image = "https://placeholder.com" }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s avatar`} className="profile-avatar" />
      <h3 className="profile-name">{name}</h3>
      <p className="profile-role">{role}</p>
      <p className="profile-email">{email}</p>
    </div>
  );
};

export default ProfileCard;
