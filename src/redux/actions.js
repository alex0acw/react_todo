import { ADD_TO_DO, TOGGLE_TO_DO, DELETE_TO_DO, SET_TODOS_TAGS, ADD_TAG, SET_TAGS } from './actionType';

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
export const setToDoTags = (id, tags) => ({
    type: SET_TODOS_TAGS,
    payload: { id, tags }
})

export const addTagDef = ({content, color}) => ({
    type: ADD_TAG,
    payload: { content, color }
})
export const setTags = (tags) => ({
    type: SET_TAGS,
    payload: tags
})