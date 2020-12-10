import ToDoGeneratorContainer from "../containers/ToDoGeneratorContainer";
import ToDoGroupContainer from "../containers/ToDoGroupContainer";
import "./ToDoList.css"

export default function TodoList() {


    return (
        <div className="todo-list">
            <p>TODO List</p>
            <ToDoGeneratorContainer />
            <ToDoGroupContainer />
        </div>
    )
}