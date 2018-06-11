import React, { Component } from 'react';
import Users from './Components/Users/Users';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';

class App extends Component {  
  render() {
    return(
      <div>
        <Users title="User List"></Users>
        <h4>Routing</h4>
        <Router>
          <div>
            <Navigation />
            <div>
              <Route path="/" component={Home} exact />
              <Route path="/about"  component={About} />
              <Route path="/contact"  component={Contact} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
