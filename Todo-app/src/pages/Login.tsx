
import './Login.css';  
import { Link } from 'react-router-dom'; 

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
  
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>

        <span>
          Don't have an account? <Link to="/register">Sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
