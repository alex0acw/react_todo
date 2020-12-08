import React, { Component } from 'react';
import ToDoItem from '../components/ToDoItem'
import ToDoItemContainer from '../containers/ToDoItemContainer';

class ToDoGroup extends Component {

    render() {
        return (
            <div>
                {
                    Object.entries(this.props.toDoList).map(
                        ([key, value]) => {
                            return <ToDoItemContainer key={key} id={key} content={value.content} complete={value.complete} />
                        }
                    )
                }
            </div>
        );
    }
}

export default ToDoGroup;