import {connect} from "react-redux";
import ToDoGroup from "../components/ToDoGroup";

const mapStateToProps = state => ({
    toDoList: state.toDoList
})

const ToDoGroupContainer = connect(mapStateToProps, null)(ToDoGroup);

export default ToDoGroupContainer;