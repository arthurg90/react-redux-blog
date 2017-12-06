

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


const addArticle = (state, data) => state.update("articles", articles => articles.push(createArticle(data)));

// const editArticle = (state, data) => state.update("articles", articles => articles.map(updateArticle(data)));

//the function needs to map over all the articles, check the key:value pairs and find a match for id, and then update title and article if there are any changes

const editArticle = (state, { id, title, article } ) => {
    
    return state.update("articles", articles => {
        
        return articles.map(a => {

            return  a.get("id") === +id ? 
                        a.set("title", title) //
                         .set("article", article)
                    : a; 
        })
    })
}

const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "editArticle": return editArticle(state, action); 
        default: return state;
    }
}

export default reducer;





