import React, { Component } from 'react';
import Users from './Users/Users';
import './App.css';

class App extends Component {  
  render() {
    return(
      <div>
        <Users title="User List"></Users>
      </div>
    )
  }
}

export default App;
