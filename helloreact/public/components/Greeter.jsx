var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

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

module.exports = Greeter;