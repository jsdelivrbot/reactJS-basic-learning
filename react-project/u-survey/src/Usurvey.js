import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
    apiKey: "AIzaSyBNOCkjfl5wDkCQW5snXNPWO4jrVlAqh2M",
    authDomain: "react-survey-f8e1a.firebaseapp.com",
    databaseURL: "https://react-survey-f8e1a.firebaseio.com",
    projectId: "react-survey-f8e1a",
    storageBucket: "react-survey-f8e1a.appspot.com",
    messagingSenderId: "1089098981050"
};
firebase.initializeApp(config);

export default class Usurvey extends Component {

    constructor(props) {
        super(props);

        this.state = {
            uid: uuid.v1(),
            studentName: '',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
    }

    answerSelected(event) {
        var answers = this.state.answers;

        if (event.target.name === 'answer1') {
            answers.answer1 = event.target.value;
        } else if (event.target.name === 'answer2') {
            answers.answer2 = event.target.value;
        } else if (event.target.name === 'answer3') {
            answers.answer3 = event.target.value;
        }

        this.setState({ answers }, function () {
            console.log(this.state);
        });
    }

    handleSubmit(event) {
        var studentName = this.refs.name.value;
        this.setState({
            studentName
        }, () => {
            console.log(this.state);
        })
    }

    handleFormSubmit() {
        firebase.database().ref('uSurvey/' + this.state.uid).set({
            studentName: this.state.studentName,
            answers: this.state.answers
        })
        this.setState({
            isSubmitted: true
        })
    }

    render() {

        var studentName;
        var questions;

        if (this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = (
                <div>
                    <h1>Input your name</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input className="namy" type="text" placeholder="enter your name" ref="name" />
                    </form>
                </div>);
            questions = '';
        } else if (this.state.studentName !== '' && this.state.isSubmitted === false) {
            studentName = (
                <h1>Welcome to U-survey, {this.state.studentName}</h1>
            );
            questions = (
                <div>
                    <h2>Here are some questinos: </h2>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="card">
                            <label>What course do you like most</label>
                            <input type="radio" name="answer1" value="technology" onChange={this.answerSelected} />Technology
                            <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} />Design
                            <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} />Marketing
                        </div>

                        <div className="card">
                            <label>You are a </label>
                            <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} />Student
                            <input type="radio" name="answer2" value="in-job" onChange={this.answerSelected} />in-job
                            <input type="radio" name="answer2" value="looking-job" onChange={this.answerSelected} />looking-job
                        </div>

                        <div className="card">
                            <label>Online training is </label>
                            <input type="radio" name="answer3" value="Useful" onChange={this.answerSelected} />Useful
                            <input type="radio" name="answer3" value="useless" onChange={this.answerSelected} />useless
                            <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />maybe
                        </div>

                        <input type="submit" className="feedback-button" value="submit" />
                    </form>
                </div>
            );
        } else if (this.state.isSubmitted === true) {
            studentName = <h1>Thanks {this.state.studentName}</h1>
        }

        return (
            <div>
                {studentName}
                ------------------------------------
                {questions}
            </div>
        );
    }
}