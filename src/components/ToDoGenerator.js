import { Button, Input } from "antd"
import { useState } from "react"
import { addTodos } from "../api/todosApi"

export default function ({ addToDo }) {
    const [content, setContent] = useState("")
    const myAddTodo = (content) => {
        addTodos(content).then(({ data }) => { addToDo(content); setContent(""); })
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