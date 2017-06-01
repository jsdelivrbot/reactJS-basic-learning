import { FETCH_WEATHER } from '../actions/index';

//more than 1 city using []
export default function (state = [], action) {
    console.log('Action received', action);

    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }

    return state;
}