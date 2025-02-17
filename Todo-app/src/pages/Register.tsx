
import './Login.css';  
import { Link } from 'react-router-dom'; 

const Register = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Register</h2>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
        <span>
          Already have an account? <Link to="/">login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
