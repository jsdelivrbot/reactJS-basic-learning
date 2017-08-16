import React, { Component } from 'react';

export default class Output extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        }
    }

    render () {
        return (
            <div className="output">
                {this.state.value}
            </div>
        );
    }
}