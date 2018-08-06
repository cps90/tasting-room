import React, { Component } from 'react'
import { connect } from 'react-redux'
import Food from './Food'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            imageURL: ''
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="homeHeader">
                    <h1>Tasting Room</h1>
                </div>
                <div>
                    <h1 className="spacerDots">...</h1>
                </div>
                <div className="homeDescription"> 
                    <p>Choose a food from the list below that appeals to your senses. We will suggest a wine that shares similar characteristics of the food you have chosen to help you a find variety you will love. </p>
                </div>
                <div>
                    <h1 className="spacerDots">...</h1>
                </div>
               <div className="foodList">
                {this.props.food.map(food => 
                    <Food name={food.name}
                          description={food.description}
                          image={food.imageURL}
                          endpoint={food.URLendpoint}
                          wine={food.wineReference}
                          key={food._id}
                          id={food._id}/>
                )}
                </div>
            </div>
        );
    }
}

export default connect(state=>({food: state.food}))(Home);