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


var Greeter = React.createClass({
  //when there is no property pass from outside
  //set the default property
  getDefaultProps: function () {
    return {
      name: 'React',
      message: "default message"
    };
  },
  //for the input part, when there is no value input from the form, use the property value from the outside property
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewName: function (update) {
    console.log("2 function of the parent component");
    console.log(this);
    this.setState(update);
  },
  render: function () {
    //get the property
    //var name = this.props.name;
    //get state
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message} />

        <GreeterForm onNewName={this.handleNewName} />
      </div>
    );
  }
});

var firstName = 'Kanes2'
var message = 'Try outside property';

ReactDOM.render(
  // <Greeter name={firstName}>,
  //pass properties
  <Greeter name="kanes" message={message} />,
  document.getElementById('app')
);

