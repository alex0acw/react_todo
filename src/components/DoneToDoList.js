import DoneToDoGroupContainer from "../containers/DoneToDoGroupContainer"
import "./ToDoList.css"

export default function () {
    return (
        <div className="todo-list">
            <p>TODO List</p>
            {/* <ToDoGeneratorContainer /> */}
            <DoneToDoGroupContainer />
        </div>
    )
}