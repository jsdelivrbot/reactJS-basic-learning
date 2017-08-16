var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Workout = require('./Workout');

var Workouts = React.createClass({
	render: function () {
		return (
			<ul class="list-group">
                {
                    this.props.workouts.map(function(workout, index){
                        return (
                            <Workout workout = {workout} key = {index} />
                        )
                    })
                }
            </ul>
		);
	}


});

module.exports = Workouts;