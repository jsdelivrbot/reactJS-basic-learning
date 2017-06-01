//sate argument is not application 
//initial no select first
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            console.log(action, state);
            return action.payload;
    }

    return state;
}