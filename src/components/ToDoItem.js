import React, { useEffect, useState } from 'react';
import { deleteTodo, setTodoIsDone, setTodoTags as setTodoTagsApi } from '../api/todosApi';
import { DeleteOutlined } from '@ant-design/icons';
import TagListContainer from '../containers/TagListContainer';

export default function ToDoItem({ completeToDo, deleteToDo: deleteReduxTodo, id: initId, todoItem: initTodoItem, setToDoTags: setToDoTagsRedux }) {

    const [id, setId] = useState(initId)
    const [{ tags, content, complete: done }, setTodoItem] = useState(initTodoItem)

    useEffect(() => {
        setId(initId)
        setTodoItem(initTodoItem)
    }, [initId, initTodoItem])

    const deleteTodoWithApi = (id) => {
        console.log(`deleteTodoWithApi ${id}`)
        deleteTodo(id).then(() => deleteReduxTodo(id));
    }

    const setTodoDoneWithApi = (id, isDone) => {
        setTodoIsDone(id, isDone).then(() => { completeToDo?.(id); setTodoItem({ tags, content, complete: isDone }) });
    }

    return (
        <div className="todo-item" >
            <span style={done ? { textDecoration: "line-through" } : {}}
                onClick={() => setTodoDoneWithApi(id, !done)}>
                {content}
            </span>
            <TagListContainer
                tags={tags}
                onTagsChange={
                    (tags) => {
                        setTodoTagsApi(id, tags).then(() => {
                            setToDoTagsRedux?.(id, tags);
                            setTodoItem({ content, complete: done, tags })
                        })
                    }
                } ></TagListContainer>
            <button onClick={(e) => { e.stopPropagation(); deleteTodoWithApi(id) }}><DeleteOutlined style={{ backgroundColor: "inherit" }} /> </button>
        </div>
    );
}
