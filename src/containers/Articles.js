import { connect } from "react-redux";

import Articles from "../components/Articles/Articles"; 

// import in the fetchArticles API action

import { fetchArticles, fetchArticle } from "../data/actions/api";

const mapStateToProps = state => {
    return {
        articles: state.get("articles"),
    };
};
// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file

// setup mapDispatchToProps to call the action
const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(fetchArticles()),
    };
};
// make sure we add mapDispatchToProps to the connect call
export default connect(mapStateToProps, mapDispatchToProps)(Articles);