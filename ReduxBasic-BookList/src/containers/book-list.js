import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import selectBook from '../actions/index';

class BookList extends Component {

    //book is the just the static property of the component, when fetching new data, the component will rerender
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item"
                    {...this.props}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned will show up as prop
    //inside of BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}


//connect the bridge linked the both view and data
//promote booklist from a component to a container make it available as a proop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);