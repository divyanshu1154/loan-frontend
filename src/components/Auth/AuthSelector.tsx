import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthSelector: React.FC = () => {
  const navigate = useNavigate();

  const handleUserLogin = () => navigate('/login');
  const handleAdminLogin = () => navigate('/admin/login');

  return (
    <div className="auth-selector">
      <h2>Select User Type</h2>
      <button onClick={handleUserLogin}>User Login</button>
      <button onClick={handleAdminLogin}>Admin Login</button>
    </div>
  );
};

export default AuthSelector;
