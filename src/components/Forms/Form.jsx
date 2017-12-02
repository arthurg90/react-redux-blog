import React from "react";

import Input from "./Input";

// fields: an array of objects with name and field properties and outputs an Input for each
// className: so you can style it from its parent
// button: the text for the submit button
const Form = ({ fields, className, button }) => (
    <form className={ "form" + (className ? " " + className : "") } >
        { fields.map(({ name, label }, i) => (
            <Input key={ i } name={ name } label={ label } />
        ))}
        <button className="btn btn-success">{ button }</button>
    </form>
);

export default Form;
