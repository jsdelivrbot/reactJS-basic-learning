import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import selectBook from '../actions/index';

class BookList extends Component {

    //book is the just the static property of the component, when fetching new data, the component will rerender
    renderList() {
        console.log(this.props);
        return this.props.booksRev.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectOneBook(book)}
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

//set value / property for the list
function mapStateToProps(state) {
    //whatever is returned will show up as prop
    //inside of BookList
    return {
        booksRev: state.books
    };
}

// Anything returned from this function will end up as props
// on the BookList container
//set methods
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    
    return bindActionCreators({ selectOneBook: selectBook }, dispatch);
}


//connect the bridge linked the both view and data
//promote booklist from a component to a container make it available as a proop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);