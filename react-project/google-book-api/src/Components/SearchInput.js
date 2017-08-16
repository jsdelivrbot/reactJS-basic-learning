import React, { Component } from 'react';
import { Well, FormControl } from 'react-bootstrap';

export default class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });

        this.props.onChange(this.state.value);
    }

    render() {
        return (
            <Well>
                <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="search books"
                    onChange={this.onChange.bind(this)}
                />
            </Well>
        );
    }
}