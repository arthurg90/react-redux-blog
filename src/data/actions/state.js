//This is for the add button to add an article
export const addArticle = ({ title, article }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
    };
};


//copy of the Add button for edit, this is different frmo the editArticle in the reducer
export const updateArticle = ({ title, article }, id) => {
    return {
        type: "updateArticle",
        title: title,
        article: article,
        id: id,
    };
}

export const deleteArticle = id => { //id is just a value it needs to be outside of the destructuring
    return {
        type: "deleteArticle",
        id: id,
    };
};


export const addComment = ({ email, comment }, id) => { //id is just a value it needs to be outside of the destructuring
    return {
        type: "addComment",
        articleID: id,
        email: email,
        comment: comment,
    };
};


export const setArticles = articles => {
    return {
        type: "setArticles",
        articles: articles,
    };
};


export const setArticle = article => {
    return {
        type: "setArticle",
        article: article,
    };
};




