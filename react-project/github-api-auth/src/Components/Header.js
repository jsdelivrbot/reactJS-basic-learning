import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {

    onLogin() {
        this.props.onLogin();
    }

    onLogout() {
        this.props.onLogout();
    }

    render() {
        let page;
        if (this.props.idToken) {
            page = <NavItem onClick={this.onLogout.bind(this)} href="#">Logout</NavItem>
        } else {
            page = <NavItem onClick={this.onLogin.bind(this)} href="#">Login</NavItem>
        }

        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>Github searcher</Navbar.Brand>
                    </Navbar.Header>

                    <Nav>
                        {page}
                    </Nav>
                </Navbar>
            </div>
        );
    }
}