import { useState } from 'react';
import './Login.css';  
import { Link, useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', email, password);
    navigate('/task'); 
  };

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
  
        <input type="email" placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <input type="password" placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit">Login</button>

        <span>
          Don't have an account? <Link to="/register">Sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
