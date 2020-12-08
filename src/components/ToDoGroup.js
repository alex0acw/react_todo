import React, { Component } from 'react';
import ToDoItem from '../components/ToDoItem'
import ToDoItemContainer from '../containers/ToDoItemContainer';

class ToDoGroup extends Component {

    render() {
        return (
            <div>
                {
                    this.props.toDoList.map((value) =>
                        <ToDoItemContainer key={value.id} id={value.id} content={value.content} complete={value.complete} />
                    )
                }
            </div>
        );
    }
}

export default ToDoGroup;