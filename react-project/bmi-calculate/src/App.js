import React, { Component } from 'react';
import Range from './components/Range';
import Output from './components/Output';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }

    this.heightChange = this.heightChange.bind(this);
    this.weightChange = this.weightChange.bind(this);
    this.setBmi = this.setBmi.bind(this);
    this.getBmiClass = this.getBmiClass.bind(this);
  }

  heightChange(height) {
    this.setState({
      height
    }, this.setBmi)
  }

  weightChange(weight) {
    this.setState({ weight: weight },
      this.setBmi);
  }

  setBmi() {
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);

    this.setState({
      bmi,
      bmiClass: this.getBmiClass(bmi)
    }, () => console.log(this.state))
  }

  getBmiClass(bmi){
    if(bmi < 18.5) return 'Underweight';
    if(bmi >= 18.5 && bmi <= 24.9) return 'Normal';
    if(bmi >= 25 && bmi <= 29.9) return 'Overweight';
    if(bmi >= 30) return 'Obese';
  }

  render() {
    return (
      <div className="App">
        <h1>BMI calculate</h1>
        <form>
          <div>
            <label>Height</label>
            <Range value={this.state.height} passChange={this.heightChange} />
          </div>

          <div>
            <label>Weight</label>
            <Range value={this.state.weight} passChange={this.weightChange} />
          </div>
        </form>
        <br />
        <br />
        <Output data={this.state}/>
      </div>
    );
  }

  
}

export default App;
