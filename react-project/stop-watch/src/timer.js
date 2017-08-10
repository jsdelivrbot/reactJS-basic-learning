import React, { Component } from 'react';

class Timer extends Component {

    componentDidMount() {
        this.timer = setInterval(this.ticker, 1000);
    }

    constructor(props) {
        super(props);

        this.state = {
            clock: 0
        };

        //props
        this.ticker = this.ticker.bind(this);
    }

    ticker() {
        console.log(this.props.start);
        this.setState({
            clock: new Date() - this.props.start
        })
    }

    render() {
        var clock = Math.round(this.state.clock / 1000);

        // console.log(this.start);
        return (
            <div>
                <p>
                    You have been on the site since:
                </p>
                <br />
                <span>{clock}</span>
                <p>
                    Seconds.
                </p>
            </div>
        );
    }
}

export default Timer;