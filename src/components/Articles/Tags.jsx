import React from "react";

// show each tag - tags passed in by parent
const Tags = ({ tags }) => (
    <div>
        { tags.map((tag, i) => (
            <span className="label label-primary" key={ i }>{ tag }</span>
        ))}
    </div>
);

export default Tags;
