import React, { Component, useEffect } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';
import ToDoItem from './ToDoItem';

function ToDoGroup({ toDoList }) {
    return (
        <div className="todo-group">
            {
                Object.entries(toDoList).map(
                    ([uuid, value]) => {
                        // return <ToDoItemContainer key={uuid} id={uuid} todoItem={value} />
                        return <ToDoItem key={uuid} id={uuid} todoItem={value}></ToDoItem>
                    }
                )
            }
        </div>
    );
}

export default ToDoGroup;