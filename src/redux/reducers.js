import { addToDo } from './actions';
import { ADD_TO_DO, TOGGLE_TO_DO, DELETE_TO_DO, SET_TODOS, SET_TODOS_TAGS } from './actionType'
import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from "redux";


const toDoList = (state = {}, action) => {
    switch (action.type) {
        case SET_TODOS: {
            return action.payload;
        }
        case SET_TODOS_TAGS: {
            state[action.payload.id].tags = action.payload.tags;
            return { ...state };
        }
        case ADD_TO_DO: {
            return { ...state, [uuidv4()]: { content: action.payload, complete: false, tags: [] } };
        }
        case DELETE_TO_DO:
            delete state[action.payload];
            return { ...state };
        case TOGGLE_TO_DO:
            return { ...state, [action.payload]: { ...state[action.payload], complete: !state[action.payload].complete } };
        default:
            return state;
    }

}

export default combineReducers(
    {
        toDoList
    }
)
