import { useState } from 'react';
import './Login.css';  
import { Link, useNavigate } from 'react-router-dom'; 


const Register = () => {

  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('register:', email, password);
    navigate('/'); 
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
