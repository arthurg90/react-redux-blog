import { connect } from "react-redux";

import Article from "../components/Articles/Article";

import { deleteArticle, addComment } from "../data/actions";

const mapStateToProps = (state, { id }) => {
	const articles = state.get("articles");
	const article = articles.find(a => a.get("id") === +id);

	return {
		article: article,
	};
};

const mapDispatchToProps = (dispatch, { id }) => {
	return {
		onDelete: () => dispatch(deleteArticle(id)),
		onSubmit: (data) => dispatch(addComment(data, id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);