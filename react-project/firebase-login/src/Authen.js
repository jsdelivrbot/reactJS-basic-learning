import React, { Component } from 'react';
import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAD3AYEdr24UkWDiUBuKE6ptRbdjXqEE6s",
    authDomain: "react-login-7c1ad.firebaseapp.com",
    databaseURL: "https://react-login-7c1ad.firebaseio.com",
    projectId: "react-login-7c1ad",
    storageBucket: "react-login-7c1ad.appspot.com",
    messagingSenderId: "847926871031"
};
firebase.initializeApp(config);

export default class Authen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            err: ''
        };

        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.logout = this.logout.bind(this);
        this.google = this.google.bind(this);
    }
    google() {
        var provider = new firebase.auth.GoogleAuthProvider();

        var promise = firebase.auth().signInWithPopup(provider);

        promise
            .then(result => {
                var user = result.user;

                firebase.database().ref('users/' + user.uid).set({
                    email: user.email,
                    name: user.displayName
                });
            })
            .catch(e => {
                var msg = e.message;
                this.setState({
                    err: msg
                })
            });
    }

    logout() {
        firebase.auth().signOut();

        var logout = document.getElementById('logout');

        logout.classList.add('hide');
    }

    login(event) {
        const email = this.refs.email.value;
        const password = this.refs.password.value;

        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, password);

        promise
            .then(user => {
                var logout = document.getElementById('logout');

                //write a welcome message to the user
                logout.classList.remove('hide');
            })
            .catch(e => {
                var err = e.message;
                this.setState({
                    err
                })
            });
    }

    signup() {
        const email = this.refs.email.value;
        const password = this.refs.password.value;

        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, password);

        promise
            .then(user => {
                var err = 'Welcome' + user.email;

                firebase.database().ref('users/' + user.uid).set({
                    email: user.email,
                });
                this.setState({
                    err
                })
            })
            .catch(e => {
                var err = e.message;

                this.setState({
                    err
                })
            });

    }

    render() {
        return (
            <div>
                <input type="email" id="email" ref="email" placeholder="input your email" />
                <input type="password" id="password" ref="password" placeholder="input your password" />
                <p>
                    {this.state.err}
                </p>
                <button onClick={this.login}>Log in</button>
                <button onClick={this.signup}>Sign Up</button>
                <button id="logout" className="hide" onClick={this.logout}>Log out</button>
                <br />
                <button id="google" className="google" onClick={this.google}>Login with Google</button>

            </div>
        );
    }
}