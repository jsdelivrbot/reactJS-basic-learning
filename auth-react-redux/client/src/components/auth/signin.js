import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

    handleFormSubmit({ email, password }) {
        //to do something to log user in
        console.log(email, password);

        this.props.signinUser({ email, password });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>OOPS</strong> {this.props.errorMessage}
                </div>
            );
        }
    }


    render() {
        const { handleSubmit, fields: { email, password } } = this.props;

        return (
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <fieldset className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text" {...email} className="form-control" />
                </fieldset>

                <fieldset className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" {...password} className="form-control" />
                </fieldset>
                {this.renderAlert()}
                <button className="btn btn-primary">Sign In </button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}



export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, null, actions)(Signin);