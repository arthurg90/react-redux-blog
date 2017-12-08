import { Map, List } from "immutable";

// create a function that returns a new article Map
const addArticle = (state, { id, title, article }) => state.update("articles", articles =>
    articles.set(+id, Map({ 
        id: id,
        title: title,
        article: article,
        comments: List(),
        tags: List(),
    }))
);



const setArticles = (state, {articles} ) => {
    return state.set("titles", articles);
};


const setArticle = (state, {article} ) => {
    return state.update("articles", articles => articles.set(article.get("id"), article));
};

//the function needs to map over all the articles, check the key:value pairs and find a match for id, and then update title and article if there are any changes

const editArticle = (state, { id, title, article } ) => {  //this is not imported from anywehre, it is passed here to handle the event (so can be called something else)
    
    return state.update("articles", articles => {
        
        return articles.map(a => {          //maps over every article

            return  a.get("id") === +id ?       // checks if the id attr matches id number
                        a.set("title", title)   //if id matches, sets title to updated title
                         .set("article", article) //if id matches, sets the article to updated article
                    : a;            //if id doesn't match, returns the original article from initial
        })
    })
}

const deleteArticle = (state, { id }) => {
    return state.update("articles", articles => articles.delete(+id))
                .update("titles", titles => titles.filter(t => t.get("id") !== +id));

};

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


const reducer = (state, action) => {  //redux step 2/3 -set up a reducer with a switch function for different actions ()
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "editArticle": return editArticle(state, action); 
        case "deleteArticle": return deleteArticle(state, action); 
        case "addComment": return addComment(state, action); 
        case "setArticles": return setArticles(state, action);
        case "setArticle": return setArticle(state, action);
        default: return state;
    }
}

export default reducer;





