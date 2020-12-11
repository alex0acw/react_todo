import React from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';

function ToDoGroup({ toDoList }) {
    return (
        <div className="todo-group">
            {
                Object.entries(toDoList).map(
                    ([uuid, value]) => {
                        // return <ToDoItemContainer key={uuid} id={uuid} todoItem={value} />
                        return <ToDoItemContainer key={uuid} id={uuid} todoItem={value}></ToDoItemContainer>
                    }
                )
            }
        </div>
    );
}

export default ToDoGroup;