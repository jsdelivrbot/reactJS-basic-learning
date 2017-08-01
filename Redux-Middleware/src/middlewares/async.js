export default function ({ dispatch }) {
    return next => action => {

        if (!action.payload || !action.payload.then) {
            //dont care about it 
            return next(action);
        }

        console.log('have promise', action);

        //make sure action'promise resolves
        action.payload
            .then(function (response) {
                //preserve the existing type
                //replace with response
                const newAction = {...action, payload: response}
                //resend to all middleware again
                dispatch(newAction);
            })
    }
}