import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends Component {

  onLogoutClick() {
    this.props.onLogoutClick();
  }

  onLoginClick() {
    this.props.onLoginClick();
  }

  render() {
    let navItems;
    if (this.props.idToken) {
      navItems = <NavItem href="#" onClick={this.onLogoutClick.bind(this)}>Logout</NavItem>
    } else {
      navItems = <NavItem href="#" onClick={this.onLoginClick.bind(this)}>Login</NavItem>
    }

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            ReactAuth App
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        {navItems}
        </Nav>
      </Navbar>
    );
  }
}

export default App;
