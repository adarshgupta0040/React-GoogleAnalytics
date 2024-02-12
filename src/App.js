// src/App.js
import React, { useState } from 'react';
import { users } from './users';
import useGAEventTracker from './useGAEventTracker';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setUsername('');
    setPassword('');
    setError('');
  };

  const github = "https://github.com/adarshgupta0040";
  const GAEventsTracker = useGAEventTracker("External Links");

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {currentUser.name}</h1>

          <footer class="footer">
            <button>
              <a href={github}
                target="_blank" rel="noreferrer" class="github-link" onClick={(e) =>
                  GAEventsTracker("Github Page Visit", github)
              }>
                GitHub Repository 
              </a>
            </button>
          </footer>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default App;