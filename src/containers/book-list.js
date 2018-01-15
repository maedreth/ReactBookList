import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)} 
                    className="list-group-item">
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

// whatever is returned will show up as props inside BookList
function mapStateToProps(state) {
    return {
        books: state.books
    };
}

// whatever is returned will show up as props inside BookList
function mapDispatchToProps(dispatch) {
    // whenever the action creator selectBook is called, the result will
    // be passed to ALL reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promotes BookList from component to container - it needs
// to know about this new dispatch method, selectBook
export default connect(mapStateToProps, mapDispatchToProps)(BookList);