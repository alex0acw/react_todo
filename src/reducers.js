import { addToDo } from './action';
import { ADD_TO_DO, TOGGLE_TO_DO, DELETE_TO_DO } from './actionType'
import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from "redux";

const toDoList = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_DO: {
            return { ...state, [uuidv4()]: { content: action.payload, complete: false } };
        }
        case DELETE_TO_DO:
            delete state[action.payload];
            return { ...state };
        case TOGGLE_TO_DO:
            state[action.payload].complete = !state[action.payload].complete;
            return { ...state };
        default:
            return state;
    }

}

export default combineReducers(
    {
        toDoList
    }
)
