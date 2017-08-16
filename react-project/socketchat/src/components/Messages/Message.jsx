import React, { Component } from 'react';

export default class Message extends Component {
    formatTime(timeStamp) {
        var dt = new Date(timeStamp * 1000);

        var hours = dt.getHours();
        var minutes = dt.getMinutes();
        var seconds = dt.getSeconds();

        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            hours = '0' + seconds;
        }

        return hours + ':' + minutes + ':' + seconds;
    }

    render() {
        const {message} = this.props;
        var formattedTime = this.formatTime(message.timeStamp);
        return (
            <div className="message">
                <strong></strong> {formattedTime} - {message.text}
            </div>
        );
    }
}