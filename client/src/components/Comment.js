import React from 'react'

function Comment(props) {
    return (
        <div className="commentBox">
            <p>{props.name}</p>
            <p>{props.brand}</p>
            <p>{props.region}</p>
            <p>${props.price}</p>
        </div>
    )
}

export default Comment