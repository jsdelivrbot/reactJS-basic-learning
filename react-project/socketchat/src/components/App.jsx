import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import MessageList from './Messages/MessageList.jsx'
import MessageForm from './Messages/MessageForm.jsx'
import UserList from './Users/UserList.jsx'
import UserForm from './Users/UserForm.jsx'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				{
					timeStamp: Date.now(),
					text: 'hello'
				}
			],
			users: [],
			user: ''
		}
	}

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect.bind(this));
		this.socket.on('disconnect', this.disconnect.bind(this));

		this.socket.on('messageAdded', this.onMessageAdded.bind(this));
		this.socket.on('userJoined', this.onUserJoined.bind(this))
	}

	disconnect(users){
		this.setState({users: users});
		this.setState({
			status: 'disconnected'
		})
	}

	onUserJoined(users) {
		this.setState({
			users: users
		})
	}

	connect() {
		this.setState({ status: 'connected' });
		console.log('Connected: ' + this.socket.id);
	}

	disconnect() {
		this.setState({
			status: 'disconnected'
		})
	}

	emit(eventName, payload) {
		this.socket.emit(eventName, payload);
	}

	setUser(user) {
		this.setState({ user: user });
	}

	onMessageAdded(message) {
		this.setState({
			messaegs: this.state.messages.concat(message)
		});
	}

	render() {
		if (this.state.user == '') {
			return (
				<UserForm edit={this.emit.bind(this)}
					setUser={this.setUser.bind(this)}
				/>
			)
		} else {
			return (
				<div className="row">
					<div className="col-md-4">
						<UserList {...this.state} />
					</div>
					<div className="col-md-8">
						<MessageList />
						<MessageForm emit={this.emit.bind(this)} {...this.state} />
					</div>
				</div>
			)
		}
	}
}

export default App;