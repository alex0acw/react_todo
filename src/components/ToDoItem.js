import React, { Component } from 'react';

class ToDoItem extends Component {

    render() {
        return (
            <div className="todo-item" onClick={() => this.props.completeToDo(this.props.id)}>
                <span style={this.props.complete ? { textDecoration: "line-through" } : {}}>{this.props.content}</span>
                <button onClick={(e) => { e.stopPropagation(); this.props.deleteToDo(this.props.id) }}>x</button>
            </div>
        );
    }
}

export default ToDoItem;