import { connect } from "react-redux";

import Article from "../components/Articles/Article";

import { deleteArticle, addComment } from "../data/actions/state";

import { fetchArticle } from "../data/actions/api";




const mapStateToProps = (state, { id }) => { 
	return {
		article: state.getIn(["articles", +id]),
	};
};

const mapDispatchToProps = (dispatch, { id }) => {
	return {
		onDelete: () => dispatch(deleteArticle(id)), //this will delete the whole article using just the id
		onSubmit: (data) => dispatch(addComment(data, id)),
		onLoad: () => dispatch(fetchArticle(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);