// import our axios config file from two levels above
import axios from "../../axios";

// import fromJS - converts a regular JS object into an Immutable one
import { fromJS } from "immutable";

import { setArticles, setArticle } from "./state";


export const fetchArticles = () => dispatch => {
	
    axios.get("/articles").then(response => {
        // for now, just log the response data
         const articles = fromJS(response.data);
        // dispatch the setArticles action, passing along the articles List
        dispatch(setArticles(articles));
    });

 
};


export const fetchArticle = (id) => dispatch => {
	
    axios.get("/articles/" + id).then(response => {
        // for now, just log the response data
         const article = fromJS(response.data);
        // dispatch the setArticles action, passing along the articles List
        dispatch(setArticle(article));
    });

 
};