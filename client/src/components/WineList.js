import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Wine from './Wine'


class WineList extends Component {
   
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.wine.map(wine => 
                    <Wine variety={wine.variety}
                          description={wine.description}
                          style={wine.style}
                          taste={wine.taste}
                          comments={wine.comments}
                          key={wine._id}
                          id={wine._id}/>
                )}
            </div>
        );
    }
}

export default withRouter(connect(state=>({wine: state.wine}))(WineList));