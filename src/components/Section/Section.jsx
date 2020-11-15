import React, { Component } from 'react'
import Products from './Context/Products/Products'
import Details from './Context/Products/Details'
import{Route} from 'react-router-dom'

export default class Section extends Component {
  render() {
    return (
      <section>
       
        <div className="container margin_top">
            <Route path='/' component = {Products}  exact/>
            <Route path='/players' component = {Products} />
            <Route path='/post/:id' component = {Details} />  
        </div>
  
      </section>
    )
  }
}
