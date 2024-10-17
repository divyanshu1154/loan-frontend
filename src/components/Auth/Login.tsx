import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (role: string) => {
    const URL = "http://localhost:5000/api/auth/login";
    try {
      const response = await axios.post(URL, { email, password });
      if(response.status === 200){
        navigate(role === 'admin' ? '/admin' : '/user');
      }
    } catch (error) {
        setError("Email or Password is incorrect");
        console.error('Login failed');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => handleLogin('user')}>Login as User</button>
        <button onClick={() => handleLogin('admin')}>Login as Admin</button>
      </div>
      <p>Don't have an account ?  <a href="/register" style={{color : 'green',textDecoration: 'none'}}>Create One</a></p>
      {error}
    </div>
  );
};

export default Login;
