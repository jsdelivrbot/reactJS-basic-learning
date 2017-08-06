import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
        <div>
          <Header />
          {/*nested route to render children  */}
          {this.props.children}
        </div>
    );
  }
}
