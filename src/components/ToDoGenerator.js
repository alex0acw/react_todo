import { Button, Input } from "antd"
import { useState } from "react"
import { addTodo as addTodoApi } from "../api/todosApi"

export default function ToDoGenerator({ addToDo }) {
    const [content, setContent] = useState("")
    const myAddTodo = (content) => {
        addTodoApi(content).then(({ data }) => { addToDo(data); setContent(""); })
    }
    return (
        <div className="todo-generator">
            <Input type="text" value={content}
                onChange={(e) => { setContent(e.target.value) }}
                onKeyPress={e => { if (e.code === "Enter") myAddTodo(content) }}
            />
            <Button onClick={() =>
                myAddTodo(content)
            } >Add</Button>
        </div>
    )
}