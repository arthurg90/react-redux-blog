
import { Map, List } from "immutable";

// const editArticle = (state, data) => state.update("articles", articles => articles.map(updateArticle(data)));

//the function needs to map over all the articles, check the key:value pairs and find a match for id, and then update title and article if there are any changes

const addArticle = (state, { id, title, article }) => state.update("articles", articles =>
    articles.set(+id, Map({
        id: id,
        title: title,
        article: article,
        comments: List(),
        tags: List(),
    }))
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

// const deleteArticle = (state, { id }) => {
//     return state.update("articles", articles => {
//         return articles.filter(a => a.get("id") !== +id);
//     });
// }

const deleteArticle = (state, { id }) => {
    return state.update("articles", articles => articles.delete(+id))
                .update("titles", titles => titles.filter(t => t.get("id") !== +id));//if the title id is not equal to the id that we've deleted then keep it.
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

const setArticles = (state, { articles }) => {
    // console.log(articles.toJS());
    return state.set("titles", articles);
}

const setArticle = (state, { article }) => {
    return state.update("articles", articles => articles.set(article.get("id"), article));
};

const reducer = (state, action) => {
    switch (action.type) {
        case "addArticle": return addArticle(state, action);
        case "updateArticle": return updateArticle(state, action); 
        case "deleteArticle": return deleteArticle(state, action);
        case "setArticles": return setArticles(state, action);
        case "setArticle": return setArticle(state, action);
        case "addComment": return addComment(state, action);
        default: return state;
    }
}

export default reducer;



//

