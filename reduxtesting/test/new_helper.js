import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// set up the test environemnt to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView;
//set up the jquery enviroment
const $ = jquery(window);


//build a'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderComponent(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props} />
        </Provider>
    );

    //produce the html
    return $(ReactDOM.findDOMNode(componentInstance));
}


//build a helper for simulating events
//every instance can get access 
$.fn.simulate = function (eventName, value) {
    if (value) {
        this.val(value);
    }
    TestUtils.Simulate[eventName](this[0]);
}

// set up chai-jquery
chaiJquery(chai, chai.util, $);


export { renderComponent, expect };