import React, { Component } from 'react';
import { createStore } from 'redux';


export default class ReduxDemo extends Component {
    
    render() {

        //step 2 reducer: state, action

        const reducer = function(state, action) {
            if(action.type === "ATTACK") {
                return action.payload;
            } else if (action.type === "DEFEND"){
                return action.payload;
            }
            return state;
        }

        //step 1 store: reducer, state

        const store = createStore(reducer, "Peace");

        //Step 3: subsribe

        store.subscribe(() => {
            console.log("store is now", store.getState());
        });

        //step 4: dispatch action

        store.dispatch({type: "ATTACK", payload: "Iron Man"});
        store.dispatch({type: "DEFEND", payload: "HULK"});


        return (
            <div>
                
            </div>
        );
    }
}