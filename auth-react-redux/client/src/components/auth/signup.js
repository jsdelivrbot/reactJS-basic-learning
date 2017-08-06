import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends React.Component {
    handleSubmit = (formProps) => {
        //call action creator to sign up the user
        this.props.signupUser(formProps);

    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert">{this.props.errorMessage}</div>
            )
        }
    }

    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input {...email} className="form-control" />

                </fieldset>

                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} type="password" className="form-control" />

                </fieldset>

                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <input {...passwordConfirm} type="password" className="form-control" />

                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign up!</button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter email'
    }

    if (!formProps.password) {
        errors.password = 'Please enter password'
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please enter passwordConfirm'
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = "Passwords do not match"
    }

    return errors;
}


function mapStateToProps(state) {
    return { errorMessage: state.auth.error }
}


export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate: validate
}, mapStateToProps, actions)(Signup)