var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
    render: function () {
        return (
            <div className="search-form">
                <h1 className="text-center">Search</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group"><input type="text" className="form-control" ref="title" placeholder="enter a title" /></div>
                    <button className="btn btn-primary btn-block">
                        search
                    </button>
                </form>

            </div>
        )
    },

    onSubmit: function (e) {
        e.preventDefault();

        var movie = {
            title: this.refs.title.value.trim()
        }

        AppActions.searchMovies(movie);

        console.log(this.refs.title.value);
    }
});

module.exports = SearchForm;