import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
class UserList extends Component {
  // Lifecycle methods
  componentWillMount() {
    this.props.fetchUsers();
  }
  // Methods
  renderUser(user) {
    return (
      <div key={user.name} className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a href="#" className="btn btn-primary" href={user.website}>Website</a>
      </div>
    );
  }
  // Render Method
  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);