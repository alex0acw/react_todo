import React, { Component } from 'react';

class ToDoItem extends Component {

    render() {
        const { completeToDo, deleteToDo, content, id, complete: done } = this.props;
        return (
            <div className="todo-item" onClick={() => completeToDo(id)}>
                <span style={done ? { textDecoration: "line-through" } : {}}>{content}</span>
                <button onClick={(e) => { e.stopPropagation(); deleteToDo(this.props.id) }}>x</button>
            </div>
        );
    }
}

export default ToDoItem;