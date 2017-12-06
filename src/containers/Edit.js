import { connect } from "react-redux";
import Edit from "../components/Articles/Edit";
import { updateArticle } from "../data/actions";
// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => { //get something out of the state, this is subsribe from immutable

    const articles = state.get("articles");
    const article = articles.find(a => a.get("id") === +id);

    const fields = [
    	{ name: "title", label: "Title", value: article.get("title")},
    	{ name: "article", label: "Article", value: article.get("article")},
    ];
    
    return {
        fields: fields,
    };
};


// also going to have a mapDispatchToProps - update the state
const mapDispatchToProps = dispatch => {

	return {
		onSubmit:(data) => dispatch(updateArticle(data)),
	}

};

//need a reducer
export default connect(mapStateToProps, mapDispatchToProps)(Edit); 