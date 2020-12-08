import {addToDo} from './action';
import {ADD_TO_DO} from './actionType'
import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from "redux";

const toDoList = (state = [], action) => {
    if(action.type === ADD_TO_DO){
        state.push({id: uuidv4(), content: action.payload, complete: false});
        return state;
    }
    return state;

}

export default combineReducers(
    {
        toDoList
    }
)
