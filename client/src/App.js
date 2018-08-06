import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import { getFood, getWine } from './redux'
import WineList from './components/WineList'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Suggestion from './components/Suggestion'
import HowItWorks from './components/HowItWorks'
import ContactUs from './components/ContactUs'
import './style.css'

class App extends Component {
  
  componentDidMount() {
    this.props.getFood()
    this.props.getWine()
  }

  render() { 
    return (
      <div>
       <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/winelist" component={ WineList } />
          <Route path="/food/:id" component={ Suggestion } />
          <Route path="/howitworks" component={ HowItWorks } />
          <Route path="/contact" component={ ContactUs } />
        </Switch>  
      </div>
    )
  }
}

export default withRouter(connect(null, {getFood, getWine})(App));
