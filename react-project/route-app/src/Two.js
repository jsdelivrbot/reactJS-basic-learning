import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Two extends Component {
    render () {
        return (
            <div>
                Component twos
                <Link to="/two/123">Children</Link>
                {this.props.children}
            </div>
        );
    }
}