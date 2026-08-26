import React, { useState } from 'react';
import './UserRegistration.css';

const UserRegistration = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const fieldConfigurations = [
    { id: 'name', name: 'name', type: 'text', label: 'Full Name', placeholder: 'John Doe' },
    { id: 'email', name: 'email', type: 'email', label: 'Email Address', placeholder: 'john@example.com' },
    { id: 'password', name: 'password', type: 'password', label: 'Password', placeholder: '••••••••' }
  ];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value 
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

  
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert('Error: All registration fields are required and cannot be blank.');
      return;
    }

    if (password.length < 6) {
      alert('Error: Password length must be at least 6 characters long.');
      return;
    }

   
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', password: '' });
    setIsSubmitted(false);
  };

  return (
    <div className="registration-app">
   
      {!isSubmitted ? (
        <div className="card form-card">
          <h2>Create Your Account</h2>
          <form onSubmit={handleSubmit} noValidate>
            
            {fieldConfigurations.map((field) => (
              <div className="form-field" key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <button type="submit" className="action-btn submit-btn">
              Register User
            </button>
          </form>
        </div>
      ) : (
      
        <div className="card success-card">
          <div className="success-icon">✓</div>
          <h2>Registration Complete!</h2>
          <p>Welcome aboard, <strong>{formData.name}</strong>.</p>
          <p className="subtext">Your account details have been securely captured under: {formData.email}</p>
          <button onClick={handleReset} className="action-btn reset-btn">
            Register Another User
          </button>
        </div>
      )}
    </div>
  );
};

export default UserRegistration;
