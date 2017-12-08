import React from "react";

// show each tag - tags passed in by parent
const Tags = ({ tags }) => (
    <div>
        { tags.map((tag, i) => (
            <span className="label label-primary" key={ i }>{ tag.get("name") }</span>
        ))}
    </div>
);

export default Tags;
