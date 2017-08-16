var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie');

var MovieResult = React.createClass({
    render: function () {
        return (
            <div className="search-form">

                <h3 className="text-center">
                    Result
                </h3>
                {
                    this.props.movies.map((movie, i) => {
                        return (
                            <Movie movie={movie} key={i} />

                        )
                    })
                }
            </div>
        )
    }
});

module.exports = MovieResult;