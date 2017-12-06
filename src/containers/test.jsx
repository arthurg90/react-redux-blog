//Edit page

//ADd edit form

//Add a route

//copy add component, for the edit component.

//import to App.jsx

//route is same as the match params above

import React from "react";

import Form from "../Forms/Form";

// the fields the form should have
const fields = [
    { name: "title", label: "Title" },
    { name: "article", label: "Article" },
];

// the add article component
const Edit = ({ onSubmit }) => (
    <div>
        <h2>Add Article</h2>

        <Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Add Article" />
    </div>
);

export default Edit;





