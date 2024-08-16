import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: '#f8f8f8', padding: '10px' }}>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/rewards" style={{ marginRight: '10px' }}>Rewards</Link>
        <Link to="/investing" style={{ marginRight: '10px' }}>Investing</Link>
        <Link to="/crypto" style={{ marginRight: '10px' }}>Crypto</Link>
        <Link to="/spending" style={{ marginRight: '10px' }}>Spending</Link>
        <Link to="/retirement" style={{ marginRight: '10px' }}>Retirement</Link>
      </nav>
    </header>
  );
}

export default Header;