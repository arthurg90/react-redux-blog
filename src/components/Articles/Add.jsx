import React from "react";

import Form from "../Forms/Form";

// the fields the form should have
const fields = [
    { name: "title", label: "Title", value: "", },
    { name: "article", label: "Article", value: "", },
];

// accept the onSubmit prop we just added 
const Add = ({ onSubmit }) => (
    <div>
        <h2>Add Article</h2>

        <Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Add Article" />
    </div>
);

export default Add;
