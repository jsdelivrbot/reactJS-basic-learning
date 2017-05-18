var React = require('react');

var GreeterMessage = React.createClass({
  render: function () {
    //static property
    var name = this.props.name;
    var message = this.props.message;
    console.log(this);
    return (
      <div>
        <h1>hello {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;