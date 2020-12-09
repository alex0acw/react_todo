import React, { Component } from 'react';
import { deleteTodo, setTodoIsDone } from '../api/todosApi';
import TagGroup from "./TagGroup";

export default function ToDoItem({ completeToDo, deleteToDo: deleteReduxTodo, content, id, complete: done }) {

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
            <TagGroup tags={["sdfs"]} onTagsCahnge={
                (tags) => { console.log(tags) }
            } />
            <button onClick={(e) => { e.stopPropagation(); deleteTodoWithApi(this.props.id) }}>x</button>
        </div>
    );
}
