import React, { Component } from 'react';

class Range extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
        }
        this.onChange = this.onChange.bind(this);
    }

    static defaultProps = {
        min: 0,
        max: 245,
        step: 1
    }

    onChange(event) {
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        })

        //pass to the parent component
        this.props.passChange(this.state.value);
    }

    render() {
        return (
            <div className="range">
                <input type="range"
                    value={this.state.value}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    onChange={this.onChange}
                />
            </div>
        );
    }

}

Range.propTypes = {
    min: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    step: React.PropTypes.number.isRequired
}


export default Range;