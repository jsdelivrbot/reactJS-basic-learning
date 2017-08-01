import React from 'react';
import { connect } from 'react-redux';

//functional component, no need to set state etc
const CommentList = (props) => {

    const list = props.comments.map(
        comment => <li key={comment}>{comment}</li>
    )

    return (
        <ul className="comment-list">
            {list}
        </ul>
    );
};

function mapStateToProps(state) {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
