import { connect } from "react-redux"; //connect component connects this Articles.js container component with the store (via Provider in the index.js file)

import Articles from "../components/Articles/Articles"; //import the dummy articles component into this container component

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        articles: state.get("articles"),
    };
};
// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps)(Articles);