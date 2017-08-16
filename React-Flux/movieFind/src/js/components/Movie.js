var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Movie = React.createClass({
    render: function () {
        return (
            <div className="well">
                <div className="row">
                    <div className="col-md-4"><img src={this.props.movie.Poster} className="thumbnail" /></div>
                    <div className="col-md-4">
                        <h4>{this.props.movie.Title}</h4>
                        <ul className="list-group">
                            <li className="list-group-item">{this.props.movie.Year}</li>
                            <li className="list-group-item">{this.props.movie.imdbID}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Movie;