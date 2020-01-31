import React from "react"

export default ({pageContext}) => (
    <div>
        <h1>
            {pageContext.title}
            
        </h1>
        {pageContext.content}
    </div>  
);