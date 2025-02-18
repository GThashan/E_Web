import { useState } from 'react';
import './Login.css';  
import { Link, useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {  email, password };
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      console.log(data)
  
      if (response.ok) {
        alert(data.message);
        localStorage.setItem("userId", data.userId); 
        navigate(`/task/${data.userId}`);

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
