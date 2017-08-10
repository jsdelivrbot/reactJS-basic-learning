import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      { name: 'React', price: 200 },
      { name: 'Vue', price: 200 },
      { name: 'Angular', price: 200 }
    ]

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Purchase</h2>
        </div>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
