import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addMessage } from './actions/index'

class Form extends Component {

  // PRISTINE // DIRTY // TOUCHED // ERROR

  renderInputField(field) {

    const className = `form-input ${field.meta.touched && field.meta.error ? 'has error' : ''}`;

    return (
      <div className={className}>
        <label>{field.myLabel}</label>
        <input
          type="text"
          {...field.input}
        />
        <div className="error">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }


  renderTextareaField(field) {

    const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error' : ''}`

    return (
      <div className={className}>
        <label>{field.myLabel}</label>
        <textarea
          {...field.input}
        ></textarea>
        <div className="error">
          {field.meta.error}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.addMessage(values, () => {
      this.props.history.push('/');
    });
  }


  render() {
    return (
      <div className="Form">
        <div className="top">
          <h3>Add a Message</h3>
          <Link to="/">Back</Link>
        </div>
        <form onSubmit={this.props.handleSubmit((event) => {
            this.onSubmit(event)
          })}>

          <Field myLabel="title" name="title" component={this.renderInputField} />
          <Field myLabel="from" name="from" component={this.renderInputField} />
          <Field myLabel="message" name="message" component={this.renderInputField} />


          <button type="submit">Submit</button>

        </form>
      </div>
    );
  }

}

function validate(values) {
  const errors = {}

  if (!values.title) {
    errors.title = "The title is empty"
  }

  if (!values.from) {
    errors.from = "Enter you name"
  }

  if (!values.message) {
    errors.message = "Enter a message"
  }


  return errors;
}


function mapStateToProps(state) {
  return {
    success: state.data
  }
}

export default reduxForm({
  form: 'PostMessage'
})(
  connect(null, {addMessage})(Form)
)



