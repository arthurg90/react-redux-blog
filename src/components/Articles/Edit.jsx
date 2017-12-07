//this is the child component of edit.js
//this gets wrapped in edit.js 
//this contains the ui parts of the page e.g. buttons and title


import React from "react";

import Form from "../Forms/Form";

// the add article component
const Edit = ({ fields, onSubmit }) => (
    <div>
        <h2>Edit Article</h2>

        <Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Edit Article" />
    </div>
);

export default Edit;
