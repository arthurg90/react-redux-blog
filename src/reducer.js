
import { Map, List } from "immutable";

let lastID = 2;
// create a function that returns a new article Map
const createArticle = ({ title, article }) => {
    // up the ID by 1 every time
    lastID += 1;
    return Map({
        id: lastID,
        title: title,
        article: article,
        comments: List(),
        tags: List(),
    });
};

// const editArticle = (state, data) => state.update("articles", articles => articles.map(updateArticle(data)));

//the function needs to map over all the articles, check the key:value pairs and find a match for id, and then update title and article if there are any changes

const addArticle = (state, data) => state.update("articles", articles =>
    articles.push(createArticle(data))
);

const updateArticle = (state, { id, title, article }) => {
    return state.update("articles", articles => {
        return articles.map(a => {
            if (a.get("id") === +id) {
                return a.set("title", title).set("article", article);
            }

            return a;
        });
    });
}

const deleteArticle = (state, { id }) => {
    return state.update("articles", articles => {
        return articles.filter(a => a.get("id") !== +id);
    });
}

const addComment = (state, { articleID, email, comment }) => {
    return state.update("articles", articles => {
        return articles.map(a => {
            if (a.get("id") === +articleID) {
                return a.update("comments", comments => {
                    return comments.push(Map({
                        email: email,
                        comment: comment,
                    }));
                });
            }

            return a;
        });
    });
};



const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "updateArticle": return updateArticle(state, action); 
        case "deleteArticle": return deleteArticle(state, action);
        case "addComment": return addComment(state, action);
        default: return state;
    }
}

export default reducer;



//

