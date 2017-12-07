import { connect } from "react-redux";
import Edit from "../components/Articles/Edit"; //this calls the child edit.jsx file
import { updateArticle } from "../data/actions";
// the second argument passed to mapStateToProps represent the props passed in from the parent

//this is the wrapper for edit.jsx and this contains into to get the state (mapStateToProps) and to dispatch actions to the state (mapDispatchToProps)

//finally the connect function links the state changes to the edit.jsx component - so the info on the ui page updates

const mapStateToProps = (state, { id }) => { //get something out of the state, this is subsribe from immutable

    const articles = state.get("articles");
    const article = articles.find(a => a.get("id") === +id);
//the fields variable is made up of the array of object literals, and the value gets fetched from the article
    const fields = [
    	{ name: "title", label: "Title", value: article.get("title")},
    	{ name: "article", label: "Article", value: article.get("article")},
    ];
    
    return {
        fields: fields,
    };
};


// also going to have a mapDispatchToProps - update the state
const mapDispatchToProps = ( dispatch, { id } ) => {

	return {
		onSubmit:(data) => dispatch(updateArticle(data, id)), //pass the id as the second argument
	}

};

//need a reducer
export default connect(mapStateToProps, mapDispatchToProps)(Edit); 