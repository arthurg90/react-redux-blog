import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import { BrowserRouter as Router } from "react-router-dom";

// import the App component
import App from "./App";

// import in Immutable Map and List for our dummy data
import { Map, List } from "immutable";

// create some dummy articles
const articles = List([
    Map({
        id: 1,
        title: "Post #1",
        article: "<p>Blah blah blah</p>",
        comments: List([
            Map({ email: "bob@bob.com", comment: "Great blog post" }),
        ]),
        tags: List(["blah", "monkeys"]),
    }),
    Map({
        id: 2,
        title: "Post #2",
        article: "<p>Blah blah blah</p>",
        comments: List([
            Map({ email: "sandi@sandi.com", comment: "I disagree, but not in an agressive and unpleasant manner" }),
        ]),
        tags: List(["blah", "fish-fingers"]),
    }),
]);

// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
    <Router>
        <App articles={ articles } />
    </Router>,
    document.getElementById("root"),
);
