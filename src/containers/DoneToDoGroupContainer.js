import { connect } from "react-redux";
import ToDoGroup from "../components/ToDoGroup";

const mapStateToProps = state => ({
    toDoList: Object.fromEntries(
        Object.entries(state.toDoList).filter(([id, value]) => (value.complete))
    )
})

const ToDoGroupContainer = connect(mapStateToProps, null)(ToDoGroup);

export default ToDoGroupContainer;