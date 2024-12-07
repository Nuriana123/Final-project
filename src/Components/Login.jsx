import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    // Mock login logic (replace with actual API call)
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful');
      // Redirect or store token
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <hr></hr>
        <div>
          <label>Username or Email*</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password*</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Login</button>
        <h5>Lost Your Password?</h5>
        <hr></hr>
        <h5>No account yet?  Create an account</h5>
      </form>
    </div>
  );
}

export default Login;
