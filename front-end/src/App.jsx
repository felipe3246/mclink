import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './pages/Main';
import MCLogo from './assets/images/logo_mc.png';
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MCLogo} alt="Mc Donalds Logo" className="App-header-logo" />
      </header>
      <Router>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
