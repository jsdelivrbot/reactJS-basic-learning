import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
    class Authentication extends Component {

        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        render() {
            //console.log(this.props);
            console.log(this.context);
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}











//in some other location ... not this file
//we want to use the Higher order component
// import Authentication 
// import Resources //the component I want to wrap 

// const ComponsedComponent = Authentication(Resources);

// <ComposedComponent resources={resourceList}/>