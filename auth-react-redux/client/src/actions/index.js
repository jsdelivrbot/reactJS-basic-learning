import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {

    return function (dispatch) {

        //submit email//pwd to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                //if the request is good..
                //update state to indicate user is authenticated
                dispatch({ type: AUTH_USER })
                //save the jwt token localstorage
                localStorage.setItem('token', response.data.token);
                //redirect ot the route '/feature'
                browserHistory.push('/feature');
            })
            .catch(() => {
                //request is badd...
                //show an error to the user 
                dispatch(authError('Bad Login info'));
            });
    }
}

export function signupUser({ email, password }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/feature');
            })
            .catch(response => dispatch(authError()));
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signoutUser() {
    localStorage.removeItem('token');

    return { type: UNAUTH_USER }
}

export function fetchMessage() {
    return function (dispatch) {
        axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(response => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.messages
                })
            });
    }
}