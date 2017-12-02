import React from "react";

// a simple Input component
export default ({ name, label }) => (
    <div className="form-group">
        <label htmlFor={ name }>{ label }</label>
        <input id={ name } className="form-control" />
    </div>
);
