import React from 'react';
import './App.css';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';


function App() {
  return (
    <Router >
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} exact/>
        <Route path="/Contact" component={Contact} exact/>
        <Route path="/Portfolio" component={Portfolio} exact/>
    </Router>
  );
}

export default App;
