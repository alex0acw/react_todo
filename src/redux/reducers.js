import { ADD_TO_DO, TOGGLE_TO_DO, DELETE_TO_DO, SET_TODOS, SET_TODOS_TAGS, ADD_TAG, SET_TAGS } from './actionType'
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
            const { content, id, tags, isDone: complete } = action.payload;
            return { ...state, [action.payload.id]: { content, id, tags, complete } };
        }
        case DELETE_TO_DO:
            console.log(`deleting ${action.payload}`)
            delete state[action.payload];
            return { ...state };
        case TOGGLE_TO_DO:
            return { ...state, [action.payload]: { ...state[action.payload], complete: !state[action.payload].complete } };
        default:
            return state;
    }

}

const tags = (state = [], action) => {
    switch (action.type) {
        case ADD_TAG:
            return [...state, action.payload]
        case SET_TAGS:
            return action.payload
        default:
            return state;
    }
}

export default combineReducers(
    {
        toDoList,
        tags
    }
)
