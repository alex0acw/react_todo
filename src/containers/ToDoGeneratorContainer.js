import { connect } from "react-redux";
import { addToDo } from "../action"
import ToDoGenerator from "../components/ToDoGenerator";


const mapDispatchToProps = (dispatch) => ({
    addToDo: (content) => {
        dispatch(addToDo(content))
    }
})


const ToDoGeneratorContainer = connect(null, mapDispatchToProps)(ToDoGenerator);

export default ToDoGeneratorContainer;