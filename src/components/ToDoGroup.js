import React, { Component } from 'react';
import ToDoItem from '../components/ToDoItem'
import ToDoItemContainer from '../containers/ToDoItemContainer';

class ToDoGroup extends Component {

    render() {
        return (
            <div className="todo-group">
                {
                    Object.entries(this.props.toDoList).map(
                        ([uuid, value]) => {
                            return <ToDoItemContainer key={uuid} id={uuid} content={value.content} complete={value.complete} />
                        }
                    )
                }
            </div>
        );
    }
}

export default ToDoGroup;