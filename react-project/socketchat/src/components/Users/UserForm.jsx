import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class UserForm extends Component {

	onSubmit(e){
			e.preventDefault();

			var name = this.refs.name.nodeValue.trim();

			this.props.setUser({name: name});
			this.props.emit('userJoined', {name: name});

			this.refs.name.value = '';
	}

	render() {
		return (
			<div>
				<h3>Chat login</h3>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" className="form-control" placeholder="input your username"
					ref="name"
					/>
				</form>
			</div>
		)
	}
}

export default UserForm