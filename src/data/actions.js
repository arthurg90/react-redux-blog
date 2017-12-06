
//This is for the add button to add an article
export const addArticle = ({ title, article }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
    };
};


//copy of the Add button for edit
export const editArticle = ({ title, article }, id ) => {   //id is linked to Edit.js mapDispatchToprops
    return {
        type: "editArticle",
        id: id,
        title: title,
        article: article,
    };
};

export const deleteArticle = ( id ) => {   //id is linked to Edit.js mapDispatchToprops
    return {
        type: "deleteArticle",
        id: id,
    };
};

export const addComment = ( {email, comment}, id ) => {   //id is linked to Edit.js mapDispatchToprops
    return {
        type: "addComment",
        articleID: id,
        email: email,
        comment: comment,
    };
};