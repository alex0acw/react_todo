import { ADD_TO_DO, TOGGLE_TO_DO, DELETE_TO_DO } from './actionType';

export const addToDo = (content) => ({
    type: ADD_TO_DO,
    payload: content
})
export const deleteToDo = (id) => ({
    type: DELETE_TO_DO,
    payload: id
})

export const toggleToDo = (id) => ({
    type: TOGGLE_TO_DO,
    payload: id
})