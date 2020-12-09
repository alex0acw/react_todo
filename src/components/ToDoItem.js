import React, { Component } from 'react';
import { deleteTodo, setTodoIsDone } from '../api/todosApi';
import TagGroup from "./TagGroup";
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
            <div className="todo-item" >
                <span style={done ? { textDecoration: "line-through" } : {}}
                    onClick={() => setTodoDoneWithApi(id, !done)}>
                    {content}
                </span>
                <TagGroup  />
                <button onClick={(e) => { e.stopPropagation(); deleteTodoWithApi(this.props.id) }}>x</button>
            </div>
        );
    }
}

export default ToDoItem;