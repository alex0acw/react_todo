import { useState } from "react"

export default function ({ addToDo }) {
    const [content, setContent] = useState("")
    return (
        <div className="todo-generator">
            <input type="text" value={content}
                onChange={(e) => { setContent(e.target.value) }}
                onKeyPress={e => { if (e.code === "Enter") addToDo(content) }}
            />
            <button onClick={() =>
                addToDo(content)
            } >add</button>
        </div>
    )
}