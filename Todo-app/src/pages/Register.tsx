import { useState } from 'react';
import './Login.css';  
import { Link, useNavigate } from 'react-router-dom'; 


const Register = () => {

  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = { username: Username, email, password };
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);
        navigate('/');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
  };


  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input type="text" placeholder="Username"
          value={Username}
          onChange={(e) => setUsername(e.target.value)} 
        />

        <input type="email" placeholder="Email" 
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />

        <input type="password" placeholder="Password" 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>

        <span>
          Already have an account? <Link to="/">login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
