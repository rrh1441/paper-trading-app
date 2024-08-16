import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h2>Welcome to Paper Trading</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h2>About</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
