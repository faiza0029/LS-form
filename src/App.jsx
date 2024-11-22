import React, { useState } from 'react';
import './App.css'; 

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="form-container">
      <h2 className="form-heading">{isLogin ? 'Login' : 'Signup'}</h2>

      <div className={`form-content ${isLogin ? 'show-login' : 'show-signup'}`}>
        {isLogin ? (
          <form className="login-form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        ) : (
          <form className="signup-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Signup</button>
          </form>
        )}
      </div>

      <div className="form-buttons">
        <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Signup</button>
      </div>
    </div>
  );
}

export default LoginSignup;