import { connect } from "react-redux";
import Article from "../components/Articles/Article"; //pass dummy articles to this container component Article.js

// the second argument passed to mapStateToProps represent the props passed in from the parent
import { addComment } from "../data/actions/state";

import { fetchArticle, removeArticle, putArticle } from "../data/actions/api";

const mapStateToProps = (state, { id }) => {
    return {
        article: state.getIn(["articles", +id]),
    };
};
// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file

//for Deleting an article, wrap the article in a mapDispatchtoProps

const mapDispatchToProps = (dispatch, { id }) => {
	return {
		onDelete: () => dispatch(removeArticle(id)), //dispatches an action to delete the artice
		onLoad: () => dispatch(fetchArticle(id))
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Article); // don't forget to export the maps