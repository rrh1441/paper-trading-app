import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StockDetail from './components/StockDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/:symbol" element={<StockDetail />} />
          <Route path="/" element={<h1>Welcome to Paper Trading</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;