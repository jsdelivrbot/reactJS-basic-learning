var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/appAPI.js');
var startData = require('./startData');

if(localStorage.getItem('workouts') == null) {
	startData.init();
}

AppAPI.getWorkouts();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);