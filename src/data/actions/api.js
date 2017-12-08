//This page is where the API requests are called and responses are receive. 
// import our axios config file from two levels above
import axios from "../../axios";

// import fromJS - converts a regular JS object into an Immutable one
import { fromJS } from "immutable";
import { setArticles, setArticle, deleteArticle, addArticle } from "./state";

export const fetchArticles = () => dispatch => {
    axios.get("/articles").then(response => {
        // for now, just log the response data
         const articles = fromJS(response.data);
        // dispatch the setArticles action, passing along the articles List
        dispatch(setArticles(articles));
    });
};

export const fetchArticle = id => dispatch => {
    axios.get("/articles/" + id).then(response => { //axios.get is the api request, the .then is the promise, making sure that it handles it when the request is finished
        // for now, just log the response data
        const article = fromJS(response.data); //variable that converts it from JSON into a JS immutable object
        // dispatch the setArticles action, passing along the articles List
        dispatch(setArticle(article)); //Thunk sets this up, and the first parameter it receives is going to be a dispatch. 
    });
};


export const removeArticle = (id) => dispatch => {
    axios.delete("/articles/" + id).then(response => {
        dispatch(deleteArticle(id));
    });
};

//postArticle receives an object, that object is what we're going to send to the function. 
//dispatch is automatically assigned to the function, and it allows us to dispatch a state action after the api request has completed
//response sends us back a different object literal with more information on it, like headers, status, etc


export const postArticle = ({ title, article }) => dispatch => {

    const newArticle = { //create a new object
        title: title,
        article: article,
    }

    axios.post("/articles/", newArticle).then(response => { //response is the object
        dispatch(addArticle(response.data)); //this tells addArticle in the state.js to run the function attached to the addArticle const.
    });
};






