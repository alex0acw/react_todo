import { connect } from "react-redux";
import TagList from "../components/TagList";
import { addTagDef } from "../redux/actions";

const mapStateToProps = state => ({
    tagDefs: state.tags,
})

const mapDispatchToProps = (dispatch) => ({
    addTagDef: (tagDef) => {
        dispatch(addTagDef(tagDef))
    }
})

const TagListContainer = connect(mapStateToProps, mapDispatchToProps)(TagList);
export default TagListContainer;
