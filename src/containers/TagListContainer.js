import { connect } from "react-redux";
import TagList from "../components/TagList";

const mapStateToProps = state => ({
    tagsDefs: state.tags
})

const TagListContainer = connect(mapStateToProps, null)(TagList);
export default TagListContainer;