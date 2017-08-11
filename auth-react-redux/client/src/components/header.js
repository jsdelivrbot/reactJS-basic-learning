import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

    renderLinks() {
        if (this.props.authenticated) {
            return (<li className="nav-item">
                <Link className="nav-Link" to="/signout">Sign Out</Link>
            </li>)
        } else {
            return [
                <li className="nav-item">
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Redux Auth</Link>
                <ul className="navbar navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);