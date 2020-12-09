import { connect } from "react-redux";
import { toggleToDo, deleteToDo } from "../redux/actions";
import ToDoItem from "../components/ToDoItem";


const mapDispatchToProps = (dispatch) => ({
    deleteToDo: (id) => { dispatch(deleteToDo(id)) },
    completeToDo: (id) => { dispatch(toggleToDo(id)) },
})


const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;