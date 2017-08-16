import React, { Component } from 'react';

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        }, () => {
            console.log(this.state);
        });
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.onChange.bind(this)} />
            </div>
        );
    }
}