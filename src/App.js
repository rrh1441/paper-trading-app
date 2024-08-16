import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import StockDetail from './components/StockDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/:symbol" component={StockDetail} />
          <Route path="/" exact component={() => <h1>Welcome to Paper Trading</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;