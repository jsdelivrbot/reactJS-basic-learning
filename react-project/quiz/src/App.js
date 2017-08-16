import React, { Component } from 'react';
import './App.css';
import QuestionList from './Components/QuestionList';
import ScoreBox from './Components/ScoreBox';
import Result from './Components/Result';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          id: 1,
          text: 'what is your name',
          choices: [
            {
              id: 'a',
              text: 'Mike'
            },
            {
              id: 'b',
              text: 'tom'
            },
            {
              id: 'c',
              text: 'brad'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'what is your father name',
          choices: [
            {
              id: 'a',
              text: 'Mike'
            },
            {
              id: 'b',
              text: 'tom'
            },
            {
              id: 'c',
              text: 'brad'
            }
          ],
          correct: 'a'
        },
        {
          id: 3,
          text: 'what is your son name',
          choices: [
            {
              id: 'a',
              text: 'Mike'
            },
            {
              id: 'b',
              text: 'tom'
            },
            {
              id: 'c',
              text: 'brad'
            }
          ],
          correct: 'c'
        }
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current) {
    this.setState({
      current
    });
  }

  setScore(score) {
    this.setState({
      score
    })
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = '';
      var result = <Result {...this.state} />
    } else {
      var scorebox = <ScoreBox {...this.state} />
      var result= '';
    }
    return (
      <div className="App">
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        {result}
      </div>
    );
  }
}

export default App;
