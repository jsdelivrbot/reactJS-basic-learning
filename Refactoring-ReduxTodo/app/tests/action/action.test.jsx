var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SERACH_TEXT',
            searchText: 'qwe'
        };
        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('Should generate show complete actions', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Thing to do'
        };
        var res = actions.addTodo(action.text);

        expect(res).toEqual(action);
    })

    it('should generate toggle todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: '123'
        };
        var res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    })
});