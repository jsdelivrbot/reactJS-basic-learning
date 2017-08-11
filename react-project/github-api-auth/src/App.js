import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock';

class App extends Component {

  static defaultProps = {
    clientID: 'RQr3oYt4yfhRRrFMlYvgszdEHaiGKnDs',
    domain: 'kanesyang.auth0.com'
  }

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authResult) => {
      console.log(authResult);
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          console.log(error);
          return
        }

        console.log(profile);

        this.setProfile(authResult.idToken, profile);
      });
    });

    this.getProfile();
  }

  constructor(props) {
    super(props);

    this.state = {
      idToken: '',
      profile: {}
    };
  }

  showLock() {
    this.lock.show();
  }

  onLogout() {
    this.setState({
      idToken: '',
      profile: {}
    }, () => {
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
    })
  }

  getProfile() {
    if (localStorage.getItem('idToken') !== null) {
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        console.log(this.state);
      });
    }
  }

  setProfile(idToken, profile) {
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  render() {

    let gitty;

    if (this.state.idToken) {
      gitty = <Github />
    } else {
      gitty = "click on login to view github viewer";
    }

    return (
      <div className="App">
        <Header
          idToken={this.state.idToken}
          profile={this.state.profile}
          onLogout={this.onLogout.bind(this)}
          onLogin={this.showLock.bind(this)}
        />
        {gitty}
      </div>
    );
  }
}

export default App;
