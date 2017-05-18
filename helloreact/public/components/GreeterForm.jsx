var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {

    //bind to the old form
    e.preventDefault();
    console.log('1 first submit');

    var update = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    console.log(this);
    if (name.length > 0) {
      this.refs.name.value = '';
      //pass data to the parent component
      //props will appear on the parent render as a property
      //appear before the "="
      //parent method appear after "="
      //this is a trigger
      update.name = name;
    }

    if(message.length > 0) {
      this.refs.message.value = '';
      update.message = message;
    }

    this.props.onNewName(update);
  },
  render: function () {
    return (
      //dom trigger {this.onFormSubmit}
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" />
        <textarea ref="message" ></textarea>
        <button>Set Content</button>
      </form>
    );
  }
});

module.exports = GreeterForm;