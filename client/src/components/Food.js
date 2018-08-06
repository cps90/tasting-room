import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

function Food(props) {
    return (
        <div className="foods">
                <img className="foodImage" src={props.image}/>
                <Link className="foodName" to={`/food/${props.endpoint}`}> {props.name} </Link>
        </div>
    );
}

export default withRouter(Food);