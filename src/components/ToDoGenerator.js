import { useState } from "react"

export default function ({ addToDo }) {
    const [content, setContent] = useState("")
    return (
        <div>
            <input type="text" value={content} onChange={(e) => { setContent(e.target.value) }} />
            <button onClick={() =>
                addToDo(content)
            } >add</button>
        </div>
    )
}