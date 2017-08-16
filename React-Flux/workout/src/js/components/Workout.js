var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Workout = React.createClass({

    onDelete:function(i, j){
        AppActions.removeWorkout(i);
    },

	render: function () {
		return (
            <li class="list-group-item">
                { this.props.workout.type} - {this.props.workout.minutes} - {this.props.workout.miles}
                <a href="#" className="delete" onClick={this.onDelete.bind(this, this.props.workout.id)}>Delete</a>    
            </li>
		);
	}


});

module.exports = Workout;