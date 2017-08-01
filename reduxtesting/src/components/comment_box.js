import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
    constructor(props) {
        //是因为若不执行super，则this无法初始化。
        //将props传入super的作用是可以使你在constructor内访问它：
        super(props);

        this.state = { comment: '' };
    }

    handleChnage(event) {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit(event) {
        //we are building the spa mot vanilla web page
        event.preventDefault();

        //call the action creator and pass the current comments
        this.props.saveComment(this.state.comment);
        //

        this.setState({
            comment: ''
        })
    }

    render() {
        return (
            <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
                <h4>Add a Comment</h4>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChnage.bind(this)} />
                <div>
                    <button action="submit">Submit comment</button>
                </div>
            </form>
        )
    }
}

//first argument is always reserved for the map state to prop's function
//second for the action creator

export default connect(null, actions)(CommentBox);