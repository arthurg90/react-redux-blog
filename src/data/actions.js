
//This is for the add button to add an article
export const addArticle = ({ title, article }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
    };
};


//copy of the Add button for edit
export const updateArticle = ({ title, article }) => {
    return {
        type: "updateArticle",
        title: title,
        article: article,
    };
};