var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe("TodoList", () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('Should render one Todo components for each todo item', () => {
        var todos = [{
            id: 1,
            text: "do something"
        },
        {
            id: 2,
            text: "do something 2"
        }];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('Should render empty message', () => {
        var todos = [];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});