import { connect } from "react-redux";
import Add from "../components/Articles/Add";
import { addArticle } from "../data/actions";

// We need to use the data that's getting passed back with `onSubmit`

// map dispatch to props gets given store's dispatch method as the first argument
// this dispatches the preset action from the { addArticle} action component

const mapDispatchToProps = dispatch => {
    return {
        // onSubmit is a function which dispatches an action "add"
        onSubmit: data => dispatch(addArticle(data)),
    };
};


// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add props are now controlled by this file
export default connect(null, mapDispatchToProps)(Add); //(Add)