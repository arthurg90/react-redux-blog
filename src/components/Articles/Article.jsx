import React, { Component } from "react";

import FourOhFour from "../FourOhFour";

import Actions from "./Actions";
import Tags from "./Tags";
import Comments from "./Comments";

// if article isn't passed in, that means it's an invalid id, so show FourOhFour

class Article extends Component {

    componentDidMount() {
        this.props.onLoad();
    }
    
     render () {
        const { articles, article, onDelete, onSubmit } = this.props;
        return (    
             <div>
            { /* the edit/delete buttons  */ }
            <Actions article={ article } onDelete={ onDelete } />

            <h2>{ article.get("title") }</h2>

            { /* allows us to set HTML inside an element */ }
            <div dangerouslySetInnerHTML={{ __html: article.get("article") }} />

            { /* use the Tags component to show the tags */ }
            <Tags tags={ article.get("tags") } />
            <hr />
            { /* use the comments component */ }
            {/*<Comments onSubmit={ onSubmit } comments={ article.get("comments") } />*/}
            </div>
        ); 
        // return !article ? <FourOhFour />;
    } 
};

export default Article;





// const Article = ({ article, onDelete, onSubmit }) => !article ? <FourOhFour /> : (
//     <div>
//         { /* the edit/delete buttons  */ }
//         <Actions article={ article } onDelete={ onDelete } />

//         <h2>{ article.get("title") }</h2>

//         { /* allows us to set HTML inside an element */ }
//         <div dangerouslySetInnerHTML={{ __html: article.get("article") }} />

//         { /* use the Tags component to show the tags */ }
//         <Tags tags={ article.get("tags") } />

//         <hr />

//         { /* use the comments component */ }
//         <Comments onSubmit={ onSubmit } comments={ article.get("comments") } />
//     </div>
// );