import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <ul>
            <li><Link to="/one">One</Link> </li>
            <li><Link to="/two">two</Link></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
