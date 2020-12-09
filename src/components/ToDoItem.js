import React, { Component } from 'react';
import { deleteTodo, setTodoIsDone, setTodoTags as setTodoTagsApi } from '../api/todosApi';
import TagGroup from "./TagGroup";

export default function ToDoItem({ completeToDo, deleteToDo: deleteReduxTodo, id, todoItem: { complete: done, content, tags }, setToDoTags }) {

    const deleteTodoWithApi = (id) => {
        deleteTodo(id).then(() => deleteReduxTodo(id));
    }

    const setTodoDoneWithApi = (id, isDone) => {
        setTodoIsDone(id, isDone).then(() => completeToDo(id));
    }

    return (
        <div className="todo-item" >
            <span style={done ? { textDecoration: "line-through" } : {}}
                onClick={() => setTodoDoneWithApi(id, !done)}>
                {content}
            </span>
            <TagGroup tags={tags} onTagsCahnge={
                (tags) => {
                    setTodoTagsApi(id, tags).then(() => setToDoTags(id, tags))

                }
            } />
            <button onClick={(e) => { e.stopPropagation(); deleteTodoWithApi(id) }}>x</button>
        </div>
    );
}
