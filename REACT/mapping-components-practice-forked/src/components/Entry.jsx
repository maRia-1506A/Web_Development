//1. create Entry component
import React from "react";

//2. create props to replace hardcoded data
function Entry(props) {
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.image}
                </span>
                <span>{props.title}</span>
            </dt>
            <dd>
                {props.description}
            </dd>
        </div>

    )
}

export default Entry;