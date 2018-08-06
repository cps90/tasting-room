import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { postComment } from '../redux'
import Comment from './Comment'


class Suggestion extends Component {
    constructor() {
        super();
        this.state = {
           userName: '',
           brand: '',
           region: '',
           price: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleChange(e){
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        const newComment = {
            userName: this.state.userName,
            brand: this.state.brand,
            region: this.state.region,
            price: this.state.price
        }

        const oneFood = this.props.food.find((oneFood) => {
            return this.props.match.params.id === oneFood.URLendpoint;
        });

        const oneWine = this.props.wine.find((oneWine) => {
            return oneWine._id === oneFood.wineReference
        });

        this.props.postComment(oneWine._id, newComment)
        this.setState({ userName: '', brand: '', region: '', price: 0 })
    }    

    

    render() {

       
        if (!this.props.food.length || !this.props.wine.length) {
            return <p>Loading...</p>;
        } else {
            
        }

        const oneFood = this.props.food.find((oneFood) => {
            return this.props.match.params.id === oneFood.URLendpoint;
        });

        const oneWine = this.props.wine.find((oneWine) => {
            return oneWine._id === oneFood.wineReference
        });

        console.log(oneWine);
        console.log(oneFood)
       
        return (
            <div className="suggestionPage">
                <br/>
                <div className="suggestion foodSug">
                    <p className="sugName">{oneFood.name}</p>
                    <img className="sugImage" src={oneFood.imageURL}/>
                    <p className="sugDesc">{oneFood.description}</p>
                </div>
                <p className="sugLink because">because of these characteristics we recommend ...</p>
                <div className="suggestion wineSug">
                    <p className="sugName">{oneWine.variety}</p>
                    <img className="sugImage" src={oneWine.image}/>
                    <p className="sugDesc">{oneWine.description}</p>
                    <p className="sugDesc">{oneWine.taste}</p>
                </div>
                <p className="sugLink"> Please comment below with your favorite brand of {oneWine.variety}.</p>
                <div>
                    <form onSubmit={this.handleSubmit} className="form">
                    <div className="commentForm">   
                        <input 
                            placeholder="User Name"
                            name="userName"
                            onChange={this.handleChange}
                            value={this.state.userName}
                            type="text"/>
                        <input 
                            placeholder="Brand"
                            name="brand"
                            onChange={this.handleChange}
                            value={this.state.brand}
                            type="text"/>
                        <input 
                            placeholder="Region"
                            name="region"
                            onChange={this.handleChange}
                            value={this.state.region}
                            type="text"/>
                        <input 
                            placholder="Price"
                            name="price"
                            onChange={this.handleChange}
                            value={this.state.price}
                            type="number"/>
                        </div>    
                        <button className="submitButton">Submit</button>
                    </form>
                </div>
                <div>
                    {oneWine.comments.map(comment => 
                        <Comment 
                            name={comment.userName}
                            brand={comment.brand}
                            region={comment.region}
                            price={comment.price}
                            key={comment._id}
                            id={comment._id}/>    
                    )}
                </div>
            </div>
        );
    }

}



export default withRouter(connect( state=>({food: state.food, wine: state.wine}), {postComment} )(Suggestion));
