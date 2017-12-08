import { connect } from "react-redux"; //connect component connects this Articles.js container component with the store (via Provider in the index.js file)
import Articles from "../components/Articles/Articles"; //import the dummy articles component into this container component
import { fetchArticles, fetchArticle } from "../data/actions/api";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
	// console.log(state.get("articles".toJS());
    return {
        articles: state.get("titles"),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(fetchArticles()),  //onLoad is a generic name to let the component fire on-loading
    };
};
// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Articles);