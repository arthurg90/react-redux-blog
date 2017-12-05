import React from "react";

// a simple Input component
export default ({ name, label, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={ name }>{ label }</label>
        <input value={ value } id={ name } onChange={ onChange } className="form-control" />
    </div>
);