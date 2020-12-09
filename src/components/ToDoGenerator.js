import { useState } from "react"
import { addTodos } from "../api/todosApi"

export default function ({ addToDo }) {
    const [content, setContent] = useState("")
    const myAddTodo = (content) => {
        addTodos(content).then(({ data }) => { addToDo(content) })
    }
    return (
        <div className="todo-generator">
            <input type="text" value={content}
                onChange={(e) => { setContent(e.target.value) }}
                onKeyPress={e => { if (e.code === "Enter") myAddTodo(content) }}
            />
            <button onClick={() =>
                myAddTodo(content)
            } >add</button>
        </div>
    )
}