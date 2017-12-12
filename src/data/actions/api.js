// import our axios config file
import axios from "../../axios";

// import fromJS - converts a regular JS object into an Immutable one (just put this in the API)
import { fromJS } from "immutable";

import { setArticles, setArticle, deleteArticle, addArticle, editArticle, setComments } from "./state";

export const fetchArticles = () => dispatch => {
    axios.get("/articles").then(response => {
        // wrap the response.data with fromJS to convert it into an Immutable List
        const articles = fromJS(response.data);
        // dispatch the setArticles action, passing along the articles List
        dispatch(setArticles(articles));
    });
};

export const fetchArticle = (id) => dispatch => {
    axios.get("/articles/" + id).then(response => {
        // wrap the response.data with fromJS to convert it into an Immutable List
        const article = fromJS(response.data); //converts json to js immutable obj
        // dispatch the setArticles action, passing along the articles List
        dispatch(setArticle(article));
    });
};

export const getComments = (id) => dispatch => {
    axios.get("/articles" + id + "/comments").then(response => {
        // wrap the response.data with fromJS to convert it into an Immutable List
        const comments = fromJS(response.data);
        dispatch(setComments(comments));
    });
};

// export const getComment = (id) => dispatch => {
//     axios.get("/articles" + id + "/comments").then(response => {
//         // wrap the response.data with fromJS to convert it into an Immutable List
//         const comment = fromJS(response.data);
//         dispatch(setComment(comment));
//     });
// };

export const removeArticle = (id) => dispatch => {
    axios.delete("/articles/" + id).then(response => {
        dispatch(deleteArticle(id));
    });
};


export const postArticle = ( {title, article} ) => dispatch => {

    const newArticle = {
        title: title,
        article: article,
    }

    axios.post("/articles/", newArticle).then(response => {
        dispatch(addArticle(response.data));
    });
};

export const putArticle = ({title, article}, id ) => dispatch => {
    axios.put("/articles/" +id, {
        title: title,
        article: article,
    }).then(response => {
        dispatch(editArticle(response.data));
    });

};
