import { connect } from "react-redux";
import Edit from "../components/Articles/Edit"; //this calls the child edit.jsx file
import { editArticle } from "../data/actions/state";
import { fetchArticle } from "../data/actions/api";
// the second argument passed to mapStateToProps represent the props passed in from the parent

//this is the wrapper for edit.jsx and this contains into to get the state (mapStateToProps) and to dispatch actions to the state (mapDispatchToProps)

//finally the connect function links the state changes to the edit.jsx component - so the info on the ui page updates

const mapStateToProps = (state, { id }) => { //get something out of the state, this is subscribe from immutable
    const article = state.getIn(["articles", +id]);

//the fields variable is made up of the array of object literals, and the value gets fetched from the article
    if (article) {
        const fields = [
            { name: "title", label: "Title", value: article.get("title")},
            { name: "article", label: "Article", value: article.get("article")},
        ];
            return {
                fields: fields,
            }

    } else {
        return {
            fields: []
        }
    }


};


// also going to have a mapDispatchToProps - update the state
const mapDispatchToProps = ( dispatch, { id } ) => {    //need the id to target the article
	return {
		onSubmit:(data) => dispatch(editArticle(data, id)),
        onLoad: () => dispatch(fetchArticle(id))
	}

};

//need a reducer
export default connect(mapStateToProps, mapDispatchToProps)(Edit); 


//     const fields = [
//         { name: "title", label: "Title", value: article.get("title")},
//         { name: "article", label: "Article", value: article.get("article")},
//     ];
    
//     return {
//         fields: fields,
//     };
// };
