import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (role: string) => {
    const URL = (role === "admin") ? "http://localhost:5000/api/auth/register" : "http://localhost:5000/api/auth/admin/register"
    try {
      const response = await axios.post(URL, {
        name,
        email,
        password,
      });
      if(response.status === 201){
        navigate('/');
      }
    } catch (error) {
      setError("Registration failed");
      console.error('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={() => handleRegister('user')}>Register as User</button>
      <button onClick={() => handleRegister('admin')}>Register as Admin</button>
      <p>Have an account ?  <a href="/" style={{color : 'green',textDecoration: 'none'}}>Login</a></p>
      {error}
    </div>
  );
};

export default Register;
