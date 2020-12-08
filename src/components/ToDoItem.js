import React, { Component } from 'react';

class ToDoItem extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <span>{this.props.content}</span>
                <button onClick={() => this.props.deleteToDo(this.props.id)}>x</button>
            </div>
        );
    }
}

export default ToDoItem;