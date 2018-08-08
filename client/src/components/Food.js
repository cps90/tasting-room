import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

function Food(props) {
    handleClick = () => {
        <Link to={`/food/${props.endpoint}`}> {props.name} </Link>
    }
    return (
        <div className="foods">
                <img className="foodImage" src={props.image} onClick={this.handleClick}/>
                <Link className="foodName" to={`/food/${props.endpoint}`}> {props.name} </Link>
        </div>
    );
}

export default withRouter(Food);