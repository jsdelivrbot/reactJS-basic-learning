var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Note = React.createClass({

	removeNote: function(i, j) {
		console.log('asasas');
		AppActions.removeNote(i.$oid);
	},

	render: function(){
		return(
			<div className="column">
				<div className="note" onDoubleClick={this.removeNote.bind(this, this.props.note._id)}><p>{this.props.note.text}</p></div>
			</div>
		)
	}

});

module.exports = Note;