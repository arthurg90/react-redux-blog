import React from "react";
import { Link } from "react-router-dom";

// a simple header component
// includes an Add Article link
const Header = ({ children, subtitle }) => (
    <div className="page-header">
        <h1>
            <Link to="/">{ children }</Link>
            { " " }
            { subtitle ? <small>{ subtitle }</small> : null }

            <div className="pull-right">
                <Link to="/articles/add" className="btn btn-primary">Add Article</Link>
            </div>
        </h1>
    </div>
);

export default Header;
