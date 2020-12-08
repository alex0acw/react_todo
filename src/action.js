import {ADD_TO_DO} from './actionType';

export const addToDo = (content) => ({
    type: ADD_TO_DO,
    payload: content
})