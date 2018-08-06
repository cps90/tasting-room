import React from 'react'

function Wine(props) {
    return (
        <div>
            <br/>
        <div className="winelist">
            <h2>{props.variety}</h2>
            <p>Style: {props.style}</p>
            <p>Description: {props.description}</p>
            <p>Taste:  {props.taste}</p>
        </div>
        </div>
    )
}

export default Wine;