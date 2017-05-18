var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Kanes2'
var message = 'Try outside property';

ReactDOM.render(
  // <Greeter name={firstName}>,
  //pass properties
  <Greeter name="kanes" message={message} />,
  document.getElementById('app')
);

