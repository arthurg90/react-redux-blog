import { connect } from "react-redux"; //this component connects the Articles.js container component with the store (via Provider in the index.js file)

import Articles from "../components/Articles/Articles";

const mapStateToProps = state => {
    return {
        articles: state.get("articles"),
    };
};
// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps)(Articles);