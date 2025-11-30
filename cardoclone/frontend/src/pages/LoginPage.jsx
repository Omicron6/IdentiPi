import { useState } from 'react';
import '../styles/login.css';

export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Mock login success
    onLoginSuccess();
  };

  return (
    <div className="login-root">
      <div className="neon-orbits">
        <div className="neon-orbit orbit-1" />
        <div className="neon-orbit orbit-2" />
        <div className="neon-orbit orbit-3" />
        <div className="neon-orbit orbit-4" />
        <div className="neon-orbit orbit-5" />
      </div>

      <div className="neon-balls">
        <div className="neon-ball ball-1" />
        <div className="neon-ball ball-2" />
        <div className="neon-ball ball-3" />
        <div className="neon-ball ball-4" />
        <div className="neon-ball ball-5" />
        <div className="neon-ball ball-6" />
      </div>

      <main className="login-main">
        <div className="login-card">
          <div className="login-card-header">
            <img 
              src="/frontend/asset/logocardo.jpg" 
              alt="IdentiPI logo" 
              className="logo-image"
            />
            <h2 style={{ margin: '16px 0 0 0', fontSize: '24px', fontWeight: 700, color: '#FFFFFF', textAlign: 'center', width: '100%' }}>IdentiPI</h2>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p style={{ color: '#FF5252', fontSize: '12px', marginTop: '4px' }}>{error}</p>}

            <button type="submit" className="btn-primary login-button">
              Login
            </button>
          </form>

          <div className="login-tagline">
            <p>One Tap. Zero Exposure.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
