// import our axios config file
import axios from "../../axios";

// import fromJS - converts a regular JS object into an Immutable one (just put this in the API)
import { fromJS } from "immutable";

import { setArticles } from "./state";

export const fetchArticles = () => dispatch => {
    axios.get("/articles").then(response => {
        // wrap the response.data with fromJS to convert it into an Immutable List
        const articles = fromJS(response.data);
        // dispatch the setArticles action, passing along the articles List
        dispatch(setArticles(articles));
    });
};