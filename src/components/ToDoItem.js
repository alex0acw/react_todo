import React, { Component } from 'react';
import { deleteTodo, setTodoIsDone } from '../api/todosApi';

class ToDoItem extends Component {

    render() {

        const { completeToDo, deleteToDo: deleteReduxTodo, content, id, complete: done } = this.props;

        const deleteTodoWithApi = (id) => {
            deleteTodo(id).then(() => deleteReduxTodo(id));
        }

        const setTodoDoneWithApi = (id, isDone) => {
            setTodoIsDone(id, isDone).then(() => completeToDo(id));
        }

        return (
            <div className="todo-item" onClick={() => setTodoDoneWithApi(id, !done)}>
                <span style={done ? { textDecoration: "line-through" } : {}}>{content}</span>
                <button onClick={(e) => { e.stopPropagation(); deleteTodoWithApi(this.props.id) }}>x</button>
            </div>
        );
    }
}

export default ToDoItem;