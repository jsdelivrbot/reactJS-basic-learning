export default function selectBook(book) {
    //selectbook is an actionCreator, it needs to return an action.
    //an Object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}