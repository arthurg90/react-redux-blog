import { connect } from "react-redux";

import Articles from "../components/Articles/Articles";

const mapStateToProps = state => {
    return {
        articles: state.get("articles"),
    };
};
// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps)(Articles);