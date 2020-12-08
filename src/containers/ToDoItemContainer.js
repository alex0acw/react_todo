import { connect } from "react-redux";
import { completeToDo, deleteToDo } from "../action";
import ToDoItem from "../components/ToDoItem";


const mapDispatchToProps = (dispatch) => ({
    deleteToDo: (id) => { dispatch(deleteToDo(id)) },
    completeToDo: (id) => { dispatch(completeToDo(id)) },
})


const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;