export var setSearchText = (searchText) => {
    return {
        type: 'SET_SERACH_TEXT',
        searchText: searchText
    }
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text: text
    }
}

export var toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id: id
    };
};