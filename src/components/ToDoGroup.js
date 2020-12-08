import React, { Component } from 'react';
import ToDoItem from '../components/ToDoItem'

class ToDoGroup extends Component {
   
    render() {
        
        return (
            <div>
                {
                    this.props.toDoList.map((value) =>
                        <ToDoItem key={value.id} content={value.content} complete={value.complete} />
                    )
                }
            </div>
        );
    }
}

export default ToDoGroup;