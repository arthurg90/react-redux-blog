import { connect } from "react-redux";
// the second argument passed to mapStateToProps represent the props passed in from the parent
import { getComments } from "../data/actions/api";
import Comments from "../components/Articles/Comments";

const mapStateToProps = (state, { comments, id }) => {
    return {
        comments: state.get("comments"),
    };
};

const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(getComments()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments); // don't forget to export the maps
