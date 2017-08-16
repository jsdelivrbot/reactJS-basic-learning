import React, { Component } from 'react';

export default class Result extends Component {
    render() {
        var percent = (this.props.score / this.props.questions.length * 100 );
        if(percent > 80) {
            var message= 'Great';
        } else {
            var message= "suck job";
        }
        return (
            <div className="well">
                <h4>You got {this.props.score} of  correct</h4>
                <h1>{percent}% - {message} </h1>
                <hr />
                <a href="/app">Take again</a>
            </div>
        );
    }
}