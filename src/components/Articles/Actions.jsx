import React from "react";
import { Link } from "react-router-dom";

// a component to show the Edit and Delete buttons
const Actions = ({ article }) => (
    <div className="pull-right">
        <Link to={ "/articles/" + article.get("id") + "/edit" } className="btn btn-info">
            Edit Article
        </Link>

        { " " }

        <button className="btn btn-danger">Delete Article</button>
    </div>
);

export default Actions;
