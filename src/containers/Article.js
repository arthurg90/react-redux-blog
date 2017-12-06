import { connect } from "react-redux";

import Article from "../components/Articles/Article"; //pass dummy articles to this container component Article.js

// the second argument passed to mapStateToProps represent the props passed in from the parent
import { deleteArticle, addComment } from "../data/actions"

const mapStateToProps = (state, { id }) => {
    const articles = state.get("articles");
    const article = articles.find(a => a.get("id") === +id);

    return {
        article: article,
    };
};
// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file

//for Deleting an article, wrap the article in a mapDispatchtoProps

const mapDispatchToProps = (dispatch, { id }) => {
	return {
		onDelete: () => dispatch(deleteArticle(id)), //dispatches an action to delete the artice
		onSubmit: (data) => dispatch(addComment(data, id)) //dispatches an add comment action
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Article); // don't forget to export the maps