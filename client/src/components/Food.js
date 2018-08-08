import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

function Food(props) {
    return (
        <div className="foods">
            <Link to={`/food/${props.endpoint}`}> <img className="foodImage" src={props.image}/> </Link>
            <Link className="foodName" to={`/food/${props.endpoint}`}> {props.name} </Link>
        </div>
    );
}

export default withRouter(Food);